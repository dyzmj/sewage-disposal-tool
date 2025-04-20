import { ipcApiRoute } from "@/api/main";
import { ipc } from "@/utils/ipcRenderer";
import * as XLSX from "xlsx";
import Docxtemplater from "docxtemplater";
import pizzip from "pizzip";
const fs = window.require("fs");

/**
 * 导出 1 个 sheet的 Excel文件
 * @param { Excel数据 } data
 * @param { 文件名称 } name
 * @param { self对象 } self
 */
export function exportExcel(data, name, self) {
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, name);
    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    var path =
      r + "/" + name + formatter(new Date(), " yyyy_MM_dd_hh_mm_ss") + ".xlsx";
    // 打开文件选择对话框
    fs.writeFile(path, buffer, (err) => {
      if (err) {
        // throw err;
        self.$message.warn("保存文件失败！");
      } else {
        self.$message.info(self.$t("exportSucc"));
        console.log("The file has been saved!");
        return 1;
      }
    });
  });
}

/**
 * 导出 2 个 sheet的 Excel文件
 * @param { Excel数据 } data
 * @param { 文件名称 } name
 * @param { self对象 } self
 */
export function exportExcel2(data1, data2, name, self) {
  var data = [...data1, null, null, ...data2];
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, name);

    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    var path =
      r + "/" + name + formatter(new Date(), " yyyy_MM_dd_hh_mm_ss") + ".xlsx";
    fs.writeFile(path, buffer, (err) => {
      if (err) {
        self.$message.warn("保存文件失败！");
      } else {
        self.$message.info(self.$t("exportSucc"));
        console.log("The file has been saved!");
        return 1;
      }
    });
  });
}

/**
 * 导出 3 个 sheet的 Excel文件
 * @param { Excel数据 } data
 * @param { 文件名称 } name
 * @param { self对象 } self
 */
export function exportExcel3(data1, data2, data3, name, self) {
  var data = [...data1, null, null, ...data2, null, null, ...data3];
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, name);

    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    var path =
      r + "/" + name + formatter(new Date(), " yyyy_MM_dd_hh_mm_ss") + ".xlsx";
    fs.writeFile(path, buffer, (err) => {
      if (err) {
        // throw err;
        self.$message.warn("保存文件失败！");
      } else {
        self.$message.info(self.$t("exportSucc"));
        console.log("The file has been saved!");
        return 1;
      }
    });
  });
}

/**
 * 导出 多个 sheet的 Excel文件
 * @param { Excel数据 } data
 * @param { 文件名称 } name
 * @param { self对象 } self
 */
export function exportExcelAll(name, datas, names, self) {
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    const wb = XLSX.utils.book_new();
    for (let index = 0; index < datas.length; index++) {
      const item = datas[index];
      const sheet = names[index];
      const ws = XLSX.utils.aoa_to_sheet(item);
      XLSX.utils.book_append_sheet(wb, ws, sheet);
    }

    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    var path =
      r + "/" + name + formatter(new Date(), " yyyy_MM_dd_hh_mm_ss") + ".xlsx";
    fs.writeFile(path, buffer, (err) => {
      if (err) {
        // throw err;
        self.$message.warn("保存文件失败！");
      } else {
        self.$message.info(self.$t("exportSucc"));
        console.log("The file has been saved!");
        return 1;
      }
    });
  });
}

async function selectFolder() {
  return await ipc.invoke(ipcApiRoute.selectFolder, "");
}

async function loadTemplateContent(templatePath) {
  return await fetch(templatePath)
    .then((res) => res.arrayBuffer())
    .catch((fetchErr) => {
      console.error("加载模板文件时发生错误:", fetchErr);
      throw fetchErr;
    });
}

async function renderAndSaveDocument(path, content, data, templatePath) {
  const zip = new pizzip(content);
  const doc = new Docxtemplater(zip, {
    linebreaks: true,
    paragraphLoop: true,
  });

  doc.setData(data);
  doc.render();

  const outputBuffer = doc.getZip().generate({ type: "nodebuffer" });

  storeBufferInLocalStorage(outputBuffer, templatePath);

  getBufferFromLocalStorage(templatePath);

  try {
    await new Promise((resolve, reject) => {
      fs.writeFile(path, outputBuffer, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    console.log("Word文档已成功导出");
    return true;
  } catch (writeErr) {
    console.error("写入文件时发生错误:", writeErr);
    return false;
  }
}

export async function exportWord(name, templatePath, data, self) {
  try {
    const selectedFolder = await selectFolder();
    const path = `${selectedFolder}/${name}${formatter(
      new Date(),
      " yyyy_MM_dd_hh_mm_ss"
    )}.docx`;
    const content = await loadTemplateContent(templatePath);

    if (await renderAndSaveDocument(path, content, data, templatePath)) {
      self.$message.info(self.$t("exportSucc"));
    } else {
      self.$message.warn("保存文件失败！");
    }
  } catch (error) {
    console.error("生成Word文档时发生错误:", error);
    self.$message.warn("保存文件失败！");
  }
}

async function parseDocumentXml(xmlString) {
  var parseString = require("xml2js").parseString;
  try {
    const result = await new Promise((resolve, reject) => {
      parseString(xmlString, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    console.info(result);
    return result;
  } catch (error) {
    console.error("Error parsing XML:", error);
    throw error;
  }
}

async function convertToXml(xmlString) {
  const xml2js = require("xml2js");
  // 创建 Builder 实例
  try {
    const builder = new xml2js.Builder();
    const result = builder.buildObject(xmlString);
    return result;
  } catch (error) {
    console.error("Error parsing XML:", error);
    throw error;
  }
}

export async function exportWord2(name, data, self) {
  try {
    const selectedFolder = await selectFolder();
    const path = `${selectedFolder}/${name}${formatter(
      new Date(),
      " yyyy_MM_dd_hh_mm_ss"
    )}.docx`;

    // 提取 word 对应 XML(word/document.xml)中 ["w:document"]["w:body"] 的计算书内容信息
    const doc = [];
    for (const item of data) {
      const zip = new pizzip(item);
      const documentXml = zip.file("word/document.xml").asText();
      const docxXml = await parseDocumentXml(documentXml);
      const contentXml = docxXml["w:document"]["w:body"];
      doc.push(contentXml);
    }

    // 移除数组中的第一条数据（为后续去重）
    doc.shift();
    // 使用第一个工艺单元作为基础模板
    const zip1 = new pizzip(data[0]);
    const documentXml1 = zip1.file("word/document.xml").asText();
    const docx1 = await parseDocumentXml(documentXml1);
    // 将其他工艺单元的计算书内容合并到第一个工艺单元的XML对象中
    for (const item of doc) {
      docx1["w:document"]["w:body"].push(item[0]);
    }
    // 将XML对象转换为XML字符串
    const documentXmlStr = await convertToXml(docx1);
    // 将计算书内容部分添加至基础模版中
    zip1.file("word/document.xml", documentXmlStr);
    // 将基础模版转为 buffer 对象
    const outputBuffer = zip1.generate({ type: "nodebuffer" });
    // 将 buffer 对象导出为 docx 文档
    await new Promise((resolve, reject) => {
      fs.writeFile(path, outputBuffer, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    self.$message.info(self.$t("exportSucc"));
    console.log("Word文档已成功导出");
    return true;
  } catch (error) {
    console.error("生成Word文档时发生错误:", error);
    self.$message.warn("保存文件失败！");
  }
}

function formatter(thistime, fmt) {
  let $this = new Date(thistime);
  let o = {
    "M+": $this.getMonth() + 1,
    "d+": $this.getDate(),
    "h+": $this.getHours(),
    "m+": $this.getMinutes(),
    "s+": $this.getSeconds(),
    "q+": Math.floor(($this.getMonth() + 3) / 3),
    S: $this.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      ($this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

// 定义一个函数将 Buffer 转换为 Base64 字符串
function bufferToBase64(buffer) {
  return buffer.toString("base64");
}

// 定义一个函数将 Base64 字符串转换回 Buffer
function base64ToBuffer(base64) {
  return Buffer.from(base64, "base64");
}

// 存储 Buffer 数据到 localStorage
export function storeBufferInLocalStorage(buffer, key) {
  const base64String = bufferToBase64(buffer);
  localStorage.setItem(key, base64String);
  // console.log("Buffer stored successfully in localStorage");
}

// 从 localStorage 中读取 Buffer 数据
export function getBufferFromLocalStorage(key) {
  const base64String = localStorage.getItem(key);
  if (base64String) {
    const buffer = base64ToBuffer(base64String);
    console.log("Buffer retrieved from localStorage:", buffer);
    return buffer;
  }
  console.log("No buffer data found in localStorage");
  return null;
}

export function getArrayFromLocalStorage(key) {
  const base64String = localStorage.getItem(key);
  if (base64String) {
    const buffer = base64ToBuffer(base64String);
    const jsonString = buffer.toString('utf-8');
    const array = JSON.parse(jsonString);
    console.log("Buffer retrieved from localStorage:", array);
    return array;
  }
  console.log("No buffer data found in localStorage");
  return null;
}

export function getKeyNameFromLocalStorage(key) {
  return localStorage.getItem(key+".name");
}

export function storeValueInLocalStorage(key, value) {
  localStorage.setItem(key, value);
  // console.log("value successfully in localStorage");
}

export function getValueFromLocalStorage(key) {
  return localStorage.getItem(key);
}

/**
 * 初始化word模板缓存数据
 * @param templatePath  模板路径
 * @param data  模版数据
 */
export async function initWordStorage(templatePath, data) {
  try {
    const content = await loadTemplateContent(templatePath);
    const zip = new pizzip(content);
    const doc = new Docxtemplater(zip);
    doc.setData(data);
    doc.render();
    const outputBuffer = doc.getZip().generate({ type: "nodebuffer" });
    storeBufferInLocalStorage(outputBuffer, templatePath);
  } catch (error) {
    console.error("缓存Word数据时发生错误:", error);
  }
}

/**
 * 初始化word模板缓存数据
 * @param templatePath  模板路径
 * @param data  模版数据
 */
export async function initExcelStorage(templatePath, data, name) {
  try {
    const jsonString = JSON.stringify(data);
    const buffer = Buffer.from(jsonString, 'utf-8');
    storeBufferInLocalStorage(buffer, templatePath);

    // 缓存工程量sheet名称
    localStorage.setItem(templatePath+".name", name);
  } catch (error) {
    console.error("生成Excel数据时发生错误:", error);
  }
}