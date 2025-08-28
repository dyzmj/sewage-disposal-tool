/**
 * 增强的DOCX合并器，正确处理多文档中的图片
 * 解决图片在合并后无法显示的问题
 */

const JSZip = require('jszip');

class EnhancedDocxMergerWithImages {
  constructor(options = {}, files = []) {
    this.files = files;
    this.pageBreak = options.pageBreak !== false;
    this.ready = false;
    
    // 图片和关系管理
    this.imageCounter = 1;
    this.relationshipCounter = 1;
    this.imageMap = new Map(); // 原始图片路径 -> 新图片路径映射
    this.relationshipMap = new Map(); // 原始关系ID -> 新关系ID映射
    this.allImages = new Map(); // 存储所有图片文件
    this.allRelationships = []; // 存储所有关系
    this.imageContentTypes = new Set(); // 图片内容类型
    
    // 异步初始化
    this.init();
  }

  async init() {
    this.zipFiles = [];
    for (const file of this.files) {
      const zip = new JSZip();
      const loaded = await zip.loadAsync(file);
      this.zipFiles.push(loaded);
    }
    this.ready = true;
  }

  async ensureReady() {
    while (!this.ready) {
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }

  async save(type, callback) {
    try {
      await this.ensureReady();
      
      if (this.zipFiles.length === 0) {
        throw new Error("没有文件可以合并");
      }

      console.log("开始增强版文档合并，正确处理图片资源...");
      
      // 第一步：收集和重新映射所有图片和关系
      await this.collectAndRemapImagesAndRelationships();
      
      // 第二步：处理文档内容并更新图片引用
      const bodyContents = await this.processDocumentsWithUpdatedReferences();
      
      // 第三步：构建最终文档
      const finalZip = await this.buildFinalDocumentWithAllImages(bodyContents);
      
      console.log("文档合并完成，包含", this.allImages.size, "张图片");
      
      // 生成最终文件
      const result = await finalZip.generateAsync({
        type: type,
        compression: "DEFLATE",
        compressionOptions: { level: 1 }
      });
      
      callback(result);
      
    } catch (error) {
      console.error("合并文档时出错:", error);
      throw error;
    }
  }

  async collectAndRemapImagesAndRelationships() {
    console.log("收集并重新映射图片和关系文件...");
    
    // 首先处理非图片关系（从第一个文档开始编号）
    await this.processNonImageRelationships();
    
    // 然后处理所有文档的图片
    for (let docIndex = 0; docIndex < this.zipFiles.length; docIndex++) {
      await this.processDocumentImages(docIndex);
    }
  }

  async processNonImageRelationships() {
    // 从第一个文档复制非图片关系
    const firstZip = this.zipFiles[0];
    const relsFile = firstZip.file('word/_rels/document.xml.rels');
    if (relsFile) {
      const relsContent = await relsFile.async("string");
      await this.extractNonImageRelationships(relsContent);
    }
  }

  async extractNonImageRelationships(relsContent) {
    const relationshipRegex = /<Relationship\s+([^>]+)>/g;
    let match;
    
    while ((match = relationshipRegex.exec(relsContent)) !== null) {
      const attrs = match[1];
      const idMatch = attrs.match(/Id="([^"]+)"/);
      const typeMatch = attrs.match(/Type="([^"]+)"/);
      const targetMatch = attrs.match(/Target="([^"]+)"/);
      
      if (idMatch && typeMatch && targetMatch) {
        const id = idMatch[1];
        const type = typeMatch[1];
        const target = targetMatch[1];
        
        // 跳过图片关系，只处理其他类型的关系
        if (!type.includes('image') && !target.startsWith('media/')) {
          this.allRelationships.push({
            id: id,
            type: type,
            target: target
          });
          
          // 更新关系计数器以避免ID冲突
          const idNumber = parseInt(id.replace('rId', ''));
          if (idNumber >= this.relationshipCounter) {
            this.relationshipCounter = idNumber + 1;
          }
        }
      }
    }
  }

  async processDocumentImages(docIndex) {
    const zip = this.zipFiles[docIndex];
    
    // 收集当前文档的图片文件
    const documentImages = new Map();
    zip.forEach((relativePath, file) => {
      if (relativePath.startsWith('word/media/') && !file.dir) {
        documentImages.set(relativePath, file);
      }
    });
    
    // 处理当前文档的关系文件
    const relsFile = zip.file('word/_rels/document.xml.rels');
    if (relsFile) {
      const relsContent = await relsFile.async("string");
      await this.processImageRelationships(relsContent, docIndex, documentImages);
    }
    
    console.log(`文档 ${docIndex + 1} 处理了 ${documentImages.size} 张图片`);
  }

  async processImageRelationships(relsContent, docIndex, documentImages) {
    const relationshipRegex = /<Relationship\s+([^>]+)>/g;
    let match;
    
    while ((match = relationshipRegex.exec(relsContent)) !== null) {
      const attrs = match[1];
      const idMatch = attrs.match(/Id="([^"]+)"/);
      const typeMatch = attrs.match(/Type="([^"]+)"/);
      const targetMatch = attrs.match(/Target="([^"]+)"/);
      
      if (idMatch && typeMatch && targetMatch) {
        const originalId = idMatch[1];
        const type = typeMatch[1];
        const target = targetMatch[1];
        
        // 只处理图片关系
        if (type.includes('image') || target.startsWith('media/')) {
          const originalImagePath = `word/${target}`;
          
          if (documentImages.has(originalImagePath)) {
            // 生成新的关系ID和图片路径
            const newId = `rId${this.relationshipCounter++}`;
            const extension = this.getFileExtension(originalImagePath);
            const newImageName = `image${this.imageCounter++}.${extension}`;
            const newImagePath = `word/media/${newImageName}`;
            
            // 存储映射关系
            this.imageMap.set(`${docIndex}:${originalImagePath}`, newImagePath);
            this.relationshipMap.set(`${docIndex}:${originalId}`, newId);
            
            // 存储图片文件和关系
            this.allImages.set(newImagePath, documentImages.get(originalImagePath));
            this.allRelationships.push({
              id: newId,
              type: type,
              target: newImagePath.replace('word/', '')
            });
            
            // 记录图片内容类型
            this.imageContentTypes.add(this.getImageContentType(extension));
            
            console.log(`映射图片: 文档${docIndex + 1} ${originalImagePath} -> ${newImagePath} (${originalId} -> ${newId})`);
          }
        }
      }
    }
  }

  async processDocumentsWithUpdatedReferences() {
    const bodyContents = [];
    
    for (let i = 0; i < this.zipFiles.length; i++) {
      const zip = this.zipFiles[i];
      const docFile = zip.file("word/document.xml");
      
      if (docFile) {
        let xmlContent = await docFile.async("string");
        
        // 更新当前文档中的图片引用
        xmlContent = this.updateImageReferences(xmlContent, i);
        
        // 提取body内容
        const bodyMatch = xmlContent.match(/<w:body[^>]*>(.*)<w:sectPr/s);
        if (bodyMatch) {
          bodyContents.push(bodyMatch[1].trim());
          
          // 添加分页符（除了最后一个文档）
          if (this.pageBreak && i < this.zipFiles.length - 1) {
            bodyContents.push('<w:p><w:r><w:br w:type="page"/></w:r></w:p>');
          }
        }
      }
    }
    
    return bodyContents;
  }

  updateImageReferences(xmlContent, docIndex) {
    // 更新当前文档中的所有图片关系引用
    this.relationshipMap.forEach((newId, key) => {
      const [keyDocIndex, oldId] = key.split(':');
      if (parseInt(keyDocIndex) === docIndex) {
        // 使用更精确的正则表达式替换关系引用
        const oldRefRegex = new RegExp(`(r:embed\\s*=\\s*["'])\\s*${oldId}\\s*(["'])`, 'g');
        xmlContent = xmlContent.replace(oldRefRegex, `$1${newId}$2`);
        
        console.log(`更新文档${docIndex + 1}中的引用: ${oldId} -> ${newId}`);
      }
    });
    
    return xmlContent;
  }

  async buildFinalDocumentWithAllImages(bodyContents) {
    // 使用第一个文档作为基础模板
    const baseZip = this.zipFiles[0];
    const outputZip = new JSZip();
    
    // 复制基础文件（排除媒体文件、文档文件、关系文件和内容类型文件）
    const promises = [];
    baseZip.forEach((relativePath, file) => {
      if (!file.dir && 
          !relativePath.startsWith('word/media/') && 
          relativePath !== 'word/document.xml' && 
          relativePath !== 'word/_rels/document.xml.rels' &&
          relativePath !== '[Content_Types].xml') {
        promises.push(
          file.async("uint8array").then(content => {
            outputZip.file(relativePath, content);
          })
        );
      }
    });
    
    await Promise.all(promises);
    
    // 添加所有重新映射的图片
    const imagePromises = [];
    this.allImages.forEach((file, path) => {
      imagePromises.push(
        file.async("uint8array").then(content => {
          outputZip.file(path, content);
        })
      );
    });
    
    await Promise.all(imagePromises);
    
    // 更新主文档内容
    await this.updateMainDocument(outputZip, bodyContents, baseZip);
    
    // 更新关系文件
    await this.updateRelationshipsFile(outputZip);
    
    // 更新内容类型文件
    await this.updateContentTypes(outputZip, baseZip);
    
    return outputZip;
  }

  async updateMainDocument(outputZip, bodyContents, baseZip) {
    const baseDocFile = baseZip.file("word/document.xml");
    const baseXmlContent = await baseDocFile.async("string");
    
    // 合并所有内容
    const mergedContent = bodyContents.join('');
    
    // 替换body内容，保留sectPr部分
    const newXmlContent = baseXmlContent.replace(
      /(<w:body[^>]*>).*(<w:sectPr.*?<\/w:body>)/s,
      `$1${mergedContent}$2`
    );
    
    outputZip.file('word/document.xml', newXmlContent);
  }

  async updateRelationshipsFile(outputZip) {
    // 创建包含所有关系的新关系文件
    const relationships = this.allRelationships.map(rel => 
      `<Relationship Id="${rel.id}" Type="${rel.type}" Target="${rel.target}"/>`
    ).join('\n  ');
    
    const relsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${relationships}
</Relationships>`;
    
    outputZip.file('word/_rels/document.xml.rels', relsXml);
  }

  async updateContentTypes(outputZip, baseZip) {
    const baseContentTypes = baseZip.file('[Content_Types].xml');
    let contentTypesXml = await baseContentTypes.async("string");
    
    // 确保所有图片类型都包含在内容类型中
    this.imageContentTypes.forEach(contentType => {
      const extension = this.getExtensionFromContentType(contentType);
      if (extension && !contentTypesXml.includes(`Extension="${extension}"`)) {
        const defaultEntry = `  <Default Extension="${extension}" ContentType="${contentType}"/>`;
        contentTypesXml = contentTypesXml.replace(
          '</Types>',
          `${defaultEntry}\n</Types>`
        );
      }
    });
    
    outputZip.file('[Content_Types].xml', contentTypesXml);
  }

  getFileExtension(filePath) {
    return filePath.split('.').pop().toLowerCase();
  }

  getImageContentType(extension) {
    const contentTypes = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'bmp': 'image/bmp',
      'tiff': 'image/tiff',
      'svg': 'image/svg+xml',
      'emf': 'image/x-emf',
      'wmf': 'image/x-wmf'
    };
    
    return contentTypes[extension] || 'image/png';
  }

  getExtensionFromContentType(contentType) {
    const extensions = {
      'image/png': 'png',
      'image/jpeg': 'jpeg',
      'image/gif': 'gif',
      'image/bmp': 'bmp',
      'image/tiff': 'tiff',
      'image/svg+xml': 'svg',
      'image/x-emf': 'emf',
      'image/x-wmf': 'wmf'
    };
    
    return extensions[contentType];
  }
}

module.exports = EnhancedDocxMergerWithImages;