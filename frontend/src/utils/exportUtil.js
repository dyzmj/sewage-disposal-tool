import { ipcApiRoute } from "@/api/main";
import { ipc } from "@/utils/ipcRenderer";
import * as XLSX from "xlsx";
import Docxtemplater from "docxtemplater";
import pizzip from "pizzip";
const fs = window.require("fs");
const EnhancedDocxMergerWithImages = require("./EnhancedDocxMergerWithImages");

/**
 * 导出 1 个 sheet的 Excel文件
 * @param { Excel数据 } data
 * @param { 文件名称 } name
 * @param { self对象 } self
 */
export function exportExcel(data1, name, self) {
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    const ws1 = XLSX.utils.aoa_to_sheet(data1);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "建构筑物尺寸");

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
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    const ws1 = XLSX.utils.aoa_to_sheet(data1);
    const ws2 = XLSX.utils.aoa_to_sheet(data2);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "建构筑物尺寸");
    XLSX.utils.book_append_sheet(wb, ws2, "设备选型");

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
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    const ws1 = XLSX.utils.aoa_to_sheet(data1);
    const ws2 = XLSX.utils.aoa_to_sheet(data2);
    const ws3 = XLSX.utils.aoa_to_sheet(data3);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "建构筑物尺寸");
    XLSX.utils.book_append_sheet(wb, ws2, "设备选型");
    XLSX.utils.book_append_sheet(wb, ws3, "仪表选型");

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

export function exportExcelAll(name, data1, data2, data3, names, self) {
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    // 合并所有 sheet 的数据，并在每个 sheet 数据前面添加 sheet 名称
    let combinedData1 = [];
    data1.forEach((data, index) => {
      if (index > 0) {
        combinedData1.push([]); // 添加空行分隔不同的 sheet 数据
      }
      // 添加 sheet 名称作为标题行
      combinedData1.push([names[index]]);
      combinedData1 = combinedData1.concat(data);
    });

    let combinedData2 = [];
    data2.forEach((data, index) => {
      if (index > 0) {
        combinedData2.push([]); // 添加空行分隔不同的 sheet 数据
      }
      // 添加 sheet 名称作为标题行
      combinedData2.push([names[index]]);
      combinedData2 = combinedData2.concat(data);
    });

    let combinedData3 = [];
    data3.forEach((data, index) => {
      if (index > 0) {
        combinedData3.push([]); // 添加空行分隔不同的 sheet 数据
      }
      // 添加 sheet 名称作为标题行
      combinedData3.push([names[index]]);
      combinedData3 = combinedData3.concat(data);
    });

    const ws1 = XLSX.utils.aoa_to_sheet(combinedData1);
    const ws2 = XLSX.utils.aoa_to_sheet(combinedData2);
    const ws3 = XLSX.utils.aoa_to_sheet(combinedData3);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "建构筑物尺寸");
    XLSX.utils.book_append_sheet(wb, ws2, "设备选型");
    XLSX.utils.book_append_sheet(wb, ws3, "仪表选型");

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

export async function exportWord2(name, data, self) {
  try {
    const selectedFolder = await selectFolder();
    const path = `${selectedFolder}/${name}${formatter(
      new Date(),
      " yyyy_MM_dd_hh_mm_ss"
    )}.docx`;
    
    console.log("使用增强版合并器处理图片显示问题...");
    console.log("文档数量:", data.length);
    
    // 使用增强版合并器，正确处理所有文档中的图片
    const docx = new EnhancedDocxMergerWithImages({
      pageBreak: true
    }, data);
    
    // 等待初始化完成
    await docx.ensureReady();
    console.log("增强版合并器初始化完成");
    
    // 生成合并后的文档
    await new Promise((resolve, reject) => {
      docx.save('nodebuffer', function (buffer) {
        if (!buffer) {
          reject(new Error("生成的文档缓冲区为空"));
          return;
        }
        
        console.log("文档生成完成，缓冲区大小:", buffer.length, "字节");
        
        fs.writeFile(path, buffer, (err) => {
          if (err) {
            console.error("文件写入失败:", err);
            reject(err);
          } else {
            console.log("文件成功写入:", path);
            resolve();
          }
        });
      });
    });
    
    self.$message.info(self.$t("exportSucc"));
    console.log("DOCX文档已导出（增强版，正确显示所有文档的图片）");
    return true;
    
  } catch (error) {
    console.error("导出Word文档时发生错误:", error);
    console.error("错误详情:", error.stack);
    self.$message.warn("导出失败：" + error.message);
    return false;
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
 * 初始化word模板缓存数据,按照3个sheet分开存储
 * @param data1  模板数据1
 * @param data2  模板数据2
 * @param data3  模板数据3
 * @param templatePath  模板路径
 * @param name  模板名称
 */
export async function initExcelStorage(data1, data2, data3, templatePath, name) {
  try {
    const jsonString1 = JSON.stringify(data1);
    const buffer1 = Buffer.from(jsonString1, 'utf-8');
    storeBufferInLocalStorage(buffer1, templatePath+".1");
    const jsonString2 = JSON.stringify(data2);
    const buffer2 = Buffer.from(jsonString2, 'utf-8');
    storeBufferInLocalStorage(buffer2, templatePath+".2");

    const jsonString3 = JSON.stringify(data3);
    const buffer3 = Buffer.from(jsonString3, 'utf-8');
    storeBufferInLocalStorage(buffer3, templatePath+".3");

    // 缓存工程量sheet名称
    localStorage.setItem(templatePath+".name", name);
  } catch (error) {
    console.error("生成Excel数据时发生错误:", error);
  }
}

export async function initPowerStorage(data2, templatePath) {
  try {
    console.log("initPowerStorage======>", data2);
    const jsonString2 = JSON.stringify(data2);
    const buffer2 = Buffer.from(jsonString2, 'utf-8');
    storeBufferInLocalStorage(buffer2, "power."+templatePath+".2");
  } catch (error) {
    console.error("生成Excel数据时发生错误:", error);
  }
}