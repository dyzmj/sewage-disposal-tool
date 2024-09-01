import { ipcApiRoute } from "@/api/main";
import { ipc } from "@/utils/ipcRenderer";
import * as XLSX from "xlsx";

const htmlToRtf = require("html-to-rtf-node");
const fs = window.require("fs");
const iconv = require("iconv-lite");

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
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
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
    XLSX.utils.book_append_sheet(wb, ws1, "Sheet1");
    XLSX.utils.book_append_sheet(wb, ws2, "Sheet2");

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
    XLSX.utils.book_append_sheet(wb, ws1, "Sheet1");
    XLSX.utils.book_append_sheet(wb, ws2, "Sheet2");
    XLSX.utils.book_append_sheet(wb, ws3, "Sheet3");

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
 * 导出RTF文件
 * @param {文件名称} name
 * @param {文件内容} htmlStr
 * @param {self} self
 */
export function exportRtf(name, htmlStr, self) {
  ipc.invoke(ipcApiRoute.selectFolder, "").then((r) => {
    var path =
      r + "/" + name + formatter(new Date(), " yyyy_MM_dd_hh_mm_ss") + ".rtf";
    var res1 = htmlToRtf.convertHtmlToRtf(htmlStr);
    console.info("格式化的结果" + res1);
    let buffer = iconv.encode(res1, "Windows936");
    // 打开文件选择对话框
    fs.writeFile(path, buffer, (err) => {
      if (err) {
        throw err;
      } else {
        self.$message.info(self.$t("exportSucc"));
        console.log("The file has been saved!");
        return 1;
      }
    });
  });
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
