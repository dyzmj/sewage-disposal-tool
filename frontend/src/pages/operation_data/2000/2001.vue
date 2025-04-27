<template>
  <div></div>
  </template>
<script>
import { mapState } from "vuex";
import {
  exportExcel2,
  exportWord,
  getValueFromLocalStorage,
  initWordStorage,
  initExcelStorage,
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_2001"),
  data() {
    return {
      modelVisible: false,
      b3_1: "105000",
      b7: "20",
      b8: "4",
      b9: "3",
      b10: "3",
      b11: "1.5",
      b12: "0.2",
      b13: "0.3",
      b17_1: "14",
      b18_1: "9.5",
      b23: "",
      b24: "3",
      b25: "4",
      b27: "0.2",
      b33: "1.1",
      b39_1: "0.5",
      b39_2: "0.35",
      b39_3: "0.2",
      b46: "0.75",
      b47: "0.7",
      c3_1: "20000",
      c7: "20",
      c8: "2",
      c10: "0.5",
      c10_1: "0.35",
      c10_2: "0.2",
      c15: "2.5",
      c16: "2.5",
      c18: "0.3",
      c26: "1.2",
      c28: "0.12",
      c29: "8",
      c31: "0.12",
      c32: "1.80",
      c39: "1.1",
      c43: "0.56",
      c46: "0.5",
      c46_1: "0.35",
      c46_2: "0.2",
      c55: "0.75",
      c55_1: "0.75",
      c55_2: "0.75",
      c56: "0.8",
      c56_1: "0.8",
      c56_2: "0.8",
      columns1: [
        {
          title: "建构筑物尺寸(结果输出)",
          align: "left",
          children: [
            {
              title: "序号",
              dataIndex: "序号",
              key: "1",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "序号" },
            },
            {
              title: "单体位号",
              dataIndex: "单体位号",
              key: "2",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "单体位号" },
            },
            {
              title: "名称",
              dataIndex: "名称",
              key: "3",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "名称" },
            },
            {
              title: "尺寸(m)",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "Dimensions" },
            },
            {
              title: "标高(m)",
              dataIndex: "标高",
              key: "5",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "标高" },
            },
            {
              title: "单位",
              dataIndex: "单位",
              key: "6",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "单位" },
            },
            {
              title: "数量",
              dataIndex: "disinfectiontank",
              key: "7",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "disinfectiontank" },
            },
            {
              title: "结构形式",
              dataIndex: "结构形式",
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "结构形式" },
            },
            {
              title: "备注",
              dataIndex: "备注",
              key: "9",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "备注" },
            },
            {
              title: "暖通要求",
              dataIndex: "暖通要求",
              key: "10",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "暖通要求" },
            },
          ],
        },
      ],
      columns2: [
        {
          title: "设备选型(结果输出)",
          align: "left",
          children: [
            {
              title: "序号",
              dataIndex: "序号",
              key: "1",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "序号" },
            },
            {
              title: "设备位号",
              dataIndex: "设备位号",
              key: "2",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "设备位号" },
            },
            {
              title: "设备工艺名称",
              dataIndex: "设备工艺名称",
              key: "3",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "设备工艺名称" },
            },
            {
              title: "设备类型",
              dataIndex: "设备类型",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "设备类型" },
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
              key: "5",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "规格及型号" },
            },
            {
              title: "单位",
              dataIndex: "单位",
              key: "6",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "单位" },
            },
            {
              title: "数量",
              dataIndex: "数量",
              key: "7",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "数量" },
            },
            {
              title: "运行时间",
              dataIndex: "运行时间",
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "运行时间" },
            },
            {
              title: "主要材质",
              dataIndex: "主要材质",
              key: "9",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "主要材质" },
            },
            {
              title: "备注",
              dataIndex: "备注",
              key: "10",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "备注" },
            },
          ],
        },
      ],
      data: [],
    };
  },
  methods: {
    handleTableChange() {
      this.refreshInitData();
    },
    backHome() {
      this.$router.push("/works");
    },
    showModal() {
      this.modelVisible = true;
    },
    handleOk() {
      this.modelVisible = false;
    },
    initWaterData() {
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b3_1 = 105000;
        this.c3_1 = 20000;
      } else {
        this.b3_1 = waterData;
        this.c3_1 = waterData;
      }
    },
    exportQuantities() {
      try {
        this.exportExcel();
      } catch (error) {
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
        this.$message.warn(this.$t("exportExcelError"));
        return;
      }
    },
    exportExcel() {
      try {
        // 处理表头信息
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData
        const allData1 = [
          ...headerData1,
          ...this.data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData
        const allData2 = [
          ...headerData2,
          ...this.data2.map((item) => Object.values(item)),
        ];
        // 处理表头信息
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData4 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData
        const allData4 = [
          ...headerData4,
          ...this.data4.map((item) => Object.values(item)),
        ];

        var d1 = [...allData1, null, null, ['垂直轴式工程量'], ...allData3];
        d1.unshift(['水平轴式工程量']);

        var d2 = [...allData2, null, null, ['垂直轴式工程量'], ...allData4];
        d2.unshift(['水平轴式工程量']);

        // 导出 Excel
        exportExcel2(d1, d2, "机械搅拌絮凝池工程量", this);
      } catch (error) {
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    flattenFirstRowColumns(columns) {
      let firstRowHeader = [];
      columns.forEach((column) => {
        firstRowHeader.push(column.title);
      });
      return firstRowHeader;
    },
    flattenSecondRowColumns(columns) {
      let secondRowHeader = [];
      columns.forEach((column) => {
        if (column.children && column.children.length > 0) {
          column.children.forEach((childColumn) => {
            secondRowHeader.push(childColumn.title);
          });
        }
      });
      return secondRowHeader;
    },
    exportComputeBook() {
      const data = {
        key1: this.b3_1,
        key2: this.b3_2,
        key3: this.b3_3,
        key4: this.b7,
        key5: this.b8,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b16,
        key12: this.b17,
        key13: this.b17_1,
        key14: this.b18,
        key15: this.b18_1,
        key16: this.b22,
        key17: this.b26,
        key18: this.b27,
        key19: this.b25,
        key20: this.b24,
        key21: this.b28,
        key22: this.b29,
        key23: this.b32,
        key24: this.b33,
        key25: this.b34,
        key26: this.b35,
        key27: this.b36,
        key28: this.b39_1,
        key29: this.b39_2,
        key30: this.b39_3,
        key31: this.b40_1,
        key32: this.b40_2,
        key33: this.b40_3,
        key34: this.b41_1,
        key35: this.b41_2,
        key36: this.b41_3,
        key37: this.b42_1,
        key38: this.b42_2,
        key39: this.b42_3,
        key40: this.b45,
        key41: this.b46,
        key42: this.b47,
        key43: this.b48,
        key44: this.b52_1,
        key45: this.b52_2,
        key46: this.b52_3,
        key47: this.b54_1,
        key48: this.b54_2,
        key49: this.b55_1,
        key50: this.b55_2,
        key51: this.b56_1,
        key52: this.b56_2,
        key53: this.b60_1,
        key54: this.b60_2,
        key55: this.b60_3,
        key56: this.b61,
        key57: this.b62,
        akey1: this.c3_1,
        akey2: this.c3_2,
        akey3: this.c3_3,
        akey4: this.c7,
        akey5: this.c8,
        akey6: this.c10,
        akey7: this.c10_1,
        akey8: this.c10_2,
        akey9: this.c14,
        akey10: this.c15,
        akey11: this.c16,
        akey12: this.c17,
        akey13: this.c18,
        akey14: this.c19,
        akey15: this.c20,
        akey16: this.c25,
        akey17: this.c26,
        akey18: this.c27,
        akey19: this.c28,
        akey20: this.c29,
        akey21: this.c30,
        akey22: this.c31,
        akey23: this.c32,
        akey24: this.c33,
        akey25: this.c34,
        akey26: this.c37,
        akey27: this.c38,
        akey28: this.c39,
        akey29: this.c40,
        akey30: this.c41,
        akey31: this.c42,
        akey32: this.c43,
        akey33: this.c44,
        akey34: this.c46,
        akey35: this.c46_1,
        akey36: this.c46_2,
        akey37: this.c47,
        akey38: this.c47_1,
        akey39: this.c47_2,
        akey40: this.c48,
        akey41: this.c48_1,
        akey42: this.c48_2,
        akey43: this.c49,
        akey44: this.c49_1,
        akey45: this.c49_2,
        akey46: this.c50,
        akey47: this.c50_1,
        akey48: this.c50_2,
        akey49: this.c51,
        akey50: this.c51_1,
        akey51: this.c51_2,
        akey52: this.c52,
        akey53: this.c55,
        akey54: this.c56,
        akey55: this.c57,
        akey56: this.c57_1,
        akey57: this.c57_2,
        akey58: this.c60,
        akey59: this.c60_1,
        akey60: this.c60_2,
        akey61: this.c62,
        akey62: this.c62_1,
        akey63: this.c63,
        akey64: this.c63_1,
        akey65: this.c64,
        akey66: this.c64_1,
        akey67: this.c68,
        akey68: this.c68_1,
        akey69: this.c68_2,
        akey70: this.c69,
        akey71: this.c70,
      };
      exportWord("机械絮凝池计算书", "2001.docx", data, this);
    },
    exportComputeBook1() {
      const data = {
        akey1: this.c3_1,
        akey2: this.c3_2,
        akey3: this.c3_3,
        akey4: this.c7,
        akey5: this.c8,
        akey6: this.c10,
        akey7: this.c10_1,
        akey8: this.c10_2,
        akey9: this.c14,
        akey10: this.c15,
        akey11: this.c16,
        akey12: this.c17,
        akey13: this.c18,
        akey14: this.c19,
        akey15: this.c20,
        akey16: this.c25,
        akey17: this.c26,
        akey18: this.c27,
        akey19: this.c28,
        akey20: this.c29,
        akey21: this.c30,
        akey22: this.c31,
        akey23: this.c32,
        akey24: this.c33,
        akey25: this.c34,
        akey26: this.c37,
        akey27: this.c38,
        akey28: this.c39,
        akey29: this.c40,
        akey30: this.c41,
        akey31: this.c42,
        akey32: this.c43,
        akey33: this.c44,
        akey34: this.c46,
        akey35: this.c46_1,
        akey36: this.c46_2,
        akey37: this.c47,
        akey38: this.c47_1,
        akey39: this.c47_2,
        akey40: this.c48,
        akey41: this.c48_1,
        akey42: this.c48_2,
        akey43: this.c49,
        akey44: this.c49_1,
        akey45: this.c49_2,
        akey46: this.c50,
        akey47: this.c50_1,
        akey48: this.c50_2,
        akey49: this.c51,
        akey50: this.c51_1,
        akey51: this.c51_2,
        akey52: this.c52,
        akey53: this.c55,
        akey54: this.c56,
        akey55: this.c57,
        akey56: this.c57_1,
        akey57: this.c57_2,
        akey58: this.c60,
        akey59: this.c60_1,
        akey60: this.c60_2,
        akey61: this.c62,
        akey62: this.c62_1,
        akey63: this.c63,
        akey64: this.c63_1,
        akey65: this.c64,
        akey66: this.c64_1,
        akey67: this.c68,
        akey68: this.c68_1,
        akey69: this.c68_2,
        akey70: this.c69,
        akey71: this.c70,
      };
      exportWord("机械絮凝池计算书", "2001_1.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3_1,
        key2: this.b3_2,
        key3: this.b3_3,
        key4: this.b7,
        key5: this.b8,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b16,
        key12: this.b17,
        key13: this.b17_1,
        key14: this.b18,
        key15: this.b18_1,
        key16: this.b22,
        key17: this.b26,
        key18: this.b27,
        key19: this.b25,
        key20: this.b24,
        key21: this.b28,
        key22: this.b29,
        key23: this.b32,
        key24: this.b33,
        key25: this.b34,
        key26: this.b35,
        key27: this.b36,
        key28: this.b39_1,
        key29: this.b39_2,
        key30: this.b39_3,
        key31: this.b40_1,
        key32: this.b40_2,
        key33: this.b40_3,
        key34: this.b41_1,
        key35: this.b41_2,
        key36: this.b41_3,
        key37: this.b42_1,
        key38: this.b42_2,
        key39: this.b42_3,
        key40: this.b45,
        key41: this.b46,
        key42: this.b47,
        key43: this.b48,
        key44: this.b52_1,
        key45: this.b52_2,
        key46: this.b52_3,
        key47: this.b54_1,
        key48: this.b54_2,
        key49: this.b55_1,
        key50: this.b55_2,
        key51: this.b56_1,
        key52: this.b56_2,
        key53: this.b60_1,
        key54: this.b60_2,
        key55: this.b60_3,
        key56: this.b61,
        key57: this.b62,
        akey1: this.c3_1,
        akey2: this.c3_2,
        akey3: this.c3_3,
        akey4: this.c7,
        akey5: this.c8,
        akey6: this.c10,
        akey7: this.c10_1,
        akey8: this.c10_2,
        akey9: this.c14,
        akey10: this.c15,
        akey11: this.c16,
        akey12: this.c17,
        akey13: this.c18,
        akey14: this.c19,
        akey15: this.c20,
        akey16: this.c25,
        akey17: this.c26,
        akey18: this.c27,
        akey19: this.c28,
        akey20: this.c29,
        akey21: this.c30,
        akey22: this.c31,
        akey23: this.c32,
        akey24: this.c33,
        akey25: this.c34,
        akey26: this.c37,
        akey27: this.c38,
        akey28: this.c39,
        akey29: this.c40,
        akey30: this.c41,
        akey31: this.c42,
        akey32: this.c43,
        akey33: this.c44,
        akey34: this.c46,
        akey35: this.c46_1,
        akey36: this.c46_2,
        akey37: this.c47,
        akey38: this.c47_1,
        akey39: this.c47_2,
        akey40: this.c48,
        akey41: this.c48_1,
        akey42: this.c48_2,
        akey43: this.c49,
        akey44: this.c49_1,
        akey45: this.c49_2,
        akey46: this.c50,
        akey47: this.c50_1,
        akey48: this.c50_2,
        akey49: this.c51,
        akey50: this.c51_1,
        akey51: this.c51_2,
        akey52: this.c52,
        akey53: this.c55,
        akey54: this.c56,
        akey55: this.c57,
        akey56: this.c57_1,
        akey57: this.c57_2,
        akey58: this.c60,
        akey59: this.c60_1,
        akey60: this.c60_2,
        akey61: this.c62,
        akey62: this.c62_1,
        akey63: this.c63,
        akey64: this.c63_1,
        akey65: this.c64,
        akey66: this.c64_1,
        akey67: this.c68,
        akey68: this.c68_1,
        akey69: this.c68_2,
        akey70: this.c69,
        akey71: this.c70,
      };
      initWordStorage("2001.docx", data);
      this.handleExcelCache("2001.xlsx", "机械搅拌絮凝池工程量");
    },
    handleExcelCache(path, name) {
      try {
        // 处理表头信息
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData
        const allData1 = [
          ...headerData1,
          ...this.data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData
        const allData2 = [
          ...headerData2,
          ...this.data2.map((item) => Object.values(item)),
        ];
        // 处理表头信息
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData4 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData
        const allData4 = [
          ...headerData4,
          ...this.data4.map((item) => Object.values(item)),
        ];
        var d1 = [...allData1, null, null, ['垂直轴式工程量'], ...allData3];
        d1.unshift(['水平轴式工程量']);
        var d2 = [...allData2, null, null, ['垂直轴式工程量'], ...allData4];
        d2.unshift(['水平轴式工程量']);
        
        var dataAll = [];
        dataAll = dataAll.concat(this.data2);
        dataAll = dataAll.concat(this.data4);
        initPowerStorage(dataAll, path);

        initExcelStorage(d1, d2, null, path, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    ROUNDUP(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.ceil(number * multiplier) / multiplier;
    },
    ROUND(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.round(number * multiplier) / multiplier;
    },
    truncateDecimals(number, digits) {
      let power = Math.pow(10, digits);
      return Math.floor(number * power) / power;
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
    getkey1() {
      return this.b17_1 + "×" + this.b18_1 + "×" + this.b9 + "m";
    },
    getkey2() {
      return this.b8;
    },
    getkey3() {
      return (
        "池深" +
        this.b9 +
        "m，N=" +
        this.b48 +
        "kW，R1=" +
        this.b40_1 +
        "rpm，R2=" +
        this.b40_2 +
        "rpm，R3=" +
        this.b40_3 +
        "rpm，叶轮直径" +
        parseFloat(this.b22) * 1000 +
        "mm"
      );
    },
    getkey4() {
      return this.b8;
    },
    getkey1c() {
      return this.c15 + "×" + this.c16 + "×" + this.c19 + "m";
    },
    getkey2c() {
      return this.c8;
    },
    getkey3c() {
      return (
        "池深m，N=" +
        this.c57 +
        "kW，R1=" +
        this.c57_1 +
        "rpm，R2=" +
        this.c57 +
        "rpm，N3=" +
        this.c57_1 +
        "R3=" +
        this.c57_2 +
        "rpm，叶轮直径" +
        parseFloat(this.c25) * 1000 +
        "mm"
      );
    },
    getkey4c() {
      return this.c8;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_2() {
      return (parseFloat(this.b3_1) / 24).toFixed(0);
    },
    b3_3() {
      return (parseFloat(this.b3_1) / (24 * 60 * 60)).toFixed(2);
    },
    b16() {
      return (
        (parseFloat(this.b3_2) * parseFloat(this.b7)) /
        60 /
        parseFloat(this.b8)
      ).toFixed(2);
    },
    b17() {
      return (
        parseFloat(this.b11) *
        parseFloat(this.b10) *
        parseFloat(this.b9)
      ).toFixed(1);
    },
    b18() {
      return (
        parseFloat(this.b16) /
        parseFloat(this.b17) /
        parseFloat(this.b9)
      ).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b9) - parseFloat(this.b13)).toFixed(1);
    },
    b26() {
      return (
        (parseFloat(this.b18_1) -
          (parseFloat(this.b24) + 1) * parseFloat(this.b12)) /
        parseFloat(this.b24)
      ).toFixed(1);
    },
    b28() {
      return (
        (parseFloat(this.b26) *
          parseFloat(this.b27) *
          parseFloat(this.b25) *
          parseFloat(this.b24)) /
        (parseFloat(this.b18_1) * parseFloat(this.b9))
      ).toFixed(2);
    },
    b29() {
      return (parseFloat(this.b27) / parseFloat(this.b26)).toFixed(3);
    },
    b32() {
      return (parseFloat(this.b22) - parseFloat(this.b27)).toFixed(2);
    },
    b34() {
      return ((parseFloat(this.b33) * 1000) / 2 / 9.81).toFixed(2);
    },
    b35() {
      return (parseFloat(this.b22) / 2).toFixed(2);
    },
    b36() {
      return (parseFloat(this.b35) - parseFloat(this.b27)).toFixed(2);
    },
    b40_1() {
      return this.ROUNDUP(
        (60 * parseFloat(this.b39_1)) / 3.14 / parseFloat(this.b32),
        2
      ).toFixed(2);
    },
    b40_2() {
      return this.ROUNDUP(
        (60 * parseFloat(this.b39_2)) / 3.14 / parseFloat(this.b32),
        2
      ).toFixed(2);
    },
    b40_3() {
      return this.ROUNDUP(
        (60 * parseFloat(this.b39_3)) / 3.14 / parseFloat(this.b32),
        2
      ).toFixed(2);
    },
    b41_1() {
      return ((2 * parseFloat(this.b39_1)) / parseFloat(this.b32)).toFixed(1);
    },
    b41_2() {
      return ((2 * parseFloat(this.b39_2)) / parseFloat(this.b32)).toFixed(2);
    },
    b41_3() {
      return ((2 * parseFloat(this.b39_3)) / parseFloat(this.b32)).toFixed(2);
    },
    b42_1() {
      return (
        (parseFloat(this.b25) *
          parseFloat(this.b34) *
          parseFloat(this.b26) *
          Math.pow(parseFloat(this.b41_1), 3) *
          (Math.pow(parseFloat(this.b35), 4) -
            Math.pow(parseFloat(this.b36), 4))) /
        408
      ).toFixed(3);
    },
    b42_2() {
      return (
        (parseFloat(this.b25) *
          parseFloat(this.b34) *
          parseFloat(this.b26) *
          Math.pow(parseFloat(this.b41_2), 3) *
          (Math.pow(parseFloat(this.b35), 4) -
            Math.pow(parseFloat(this.b36), 4))) /
        408
      ).toFixed(3);
    },
    b42_3() {
      return (
        (parseFloat(this.b25) *
          parseFloat(this.b34) *
          parseFloat(this.b26) *
          Math.pow(parseFloat(this.b41_3), 3) *
          (Math.pow(parseFloat(this.b35), 4) -
            Math.pow(parseFloat(this.b36), 4))) /
        408
      ).toFixed(3);
    },
    b45() {
      return (
        (parseFloat(this.b42_1) +
          parseFloat(this.b42_2) +
          parseFloat(this.b42_3)) *
        parseFloat(this.b24)
      ).toFixed(2);
    },
    b48() {
      return this.truncateDecimals(
        this.ROUNDUP(
          parseFloat(this.b45) / parseFloat(this.b46) / parseFloat(this.b47),
          3
        ),
        2
      );
    },
    b52_1() {
      return (1.75 * parseFloat(this.b41_1)).toFixed(2);
    },
    b52_2() {
      return (1.75 * parseFloat(this.b41_2)).toFixed(2);
    },
    b52_3() {
      return (1.75 * parseFloat(this.b41_3)).toFixed(2);
    },
    b54_1() {
      return (
        parseFloat(this.b3_3) /
        parseFloat(this.b8) /
        parseFloat(this.b52_2)
      ).toFixed(2);
    },
    b54_2() {
      return (
        parseFloat(this.b3_3) /
        parseFloat(this.b8) /
        parseFloat(this.b52_3)
      ).toFixed(2);
    },
    b55_1() {
      return Math.pow(parseFloat(this.b54_1), 0.5).toFixed(2);
    },
    b55_2() {
      return Math.pow(parseFloat(this.b54_2), 0.5).toFixed(2);
    },
    b56_1() {
      return (
        parseFloat(this.b55_1).toFixed(1) +
        "*" +
        parseFloat(this.b55_1).toFixed(1)
      );
    },
    b56_2() {
      return (
        parseFloat(this.b55_2).toFixed(1) +
        "*" +
        parseFloat(this.b55_2).toFixed(1)
      );
    },
    b60_1() {
      return Math.sqrt(
        (102 * parseFloat(this.b42_1) * parseFloat(this.b24) * 1000000 * 3) /
          102 /
          parseFloat(this.b16)
      ).toFixed(2);
    },
    b60_2() {
      return Math.sqrt(
        (parseFloat(this.b42_2) * 1000000 * 3) / parseFloat(this.b16)
      ).toFixed(2);
    },
    b60_3() {
      return Math.sqrt(
        (parseFloat(this.b42_3) * 1000000 * 3) / parseFloat(this.b16)
      ).toFixed(2);
    },
    b61() {
      return Math.sqrt(
        (parseFloat(this.b45) * 1000000) / parseFloat(this.b16)
      ).toFixed(2);
    },
    b62() {
      return (parseFloat(this.b61) * parseFloat(this.b7) * 60).toFixed(2);
    },
    c3_2() {
      return (parseFloat(this.c3_1) / 24).toFixed(0);
    },
    c3_3() {
      return (parseFloat(this.c3_1) / (24 * 60 * 60)).toFixed(2);
    },
    c14() {
      return (
        (parseFloat(this.c3_2) * parseFloat(this.c7)) /
        60 /
        parseFloat(this.c8)
      ).toFixed(2);
    },
    c17() {
      return (
        parseFloat(this.c14) /
        parseFloat(this.c8) /
        3 /
        parseFloat(this.c15) /
        parseFloat(this.c16)
      ).toFixed(2);
    },
    c19() {
      return this.ROUND(parseFloat(this.c18) + parseFloat(this.c17), 2).toFixed(
        2
      );
    },
    c20() {
      return this.c16;
    },
    c21() {
      return (parseFloat(this.c15) * 3).toFixed(2);
    },
    c25() {
      return (parseFloat(this.c20) * 0.8).toFixed(2);
    },
    c27() {
      return (parseFloat(this.c26) / parseFloat(this.c25)).toFixed(2);
    },
    c30() {
      return (
        (parseFloat(this.c29) * parseFloat(this.c26) * parseFloat(this.c28)) /
        (parseFloat(this.c17) * parseFloat(this.c16))
      ).toFixed(2);
    },
    c33() {
      return (
        (parseFloat(this.c31) * parseFloat(this.c32) * 4) /
        (parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(3);
    },
    c34() {
      return (parseFloat(this.c33) + parseFloat(this.c30)).toFixed(2);
    },
    c37() {
      return ((((1000 - 440) / 2 + 440) * 2) / 1000).toFixed(2);
    },
    c38() {
      return (parseFloat(this.c28) / parseFloat(this.c26)).toFixed(1);
    },
    c40() {
      return ((parseFloat(this.c39) * 1000) / 2 / 9.81).toFixed(2);
    },
    c41() {
      return (parseFloat(this.c25) / 2).toFixed(2);
    },
    c42() {
      return 0.88;
    },
    c44() {
      return 0.44;
    },
    c47() {
      return this.ROUND(
        (60 * parseFloat(this.c46)) / 3.14 / parseFloat(this.c37),
        2
      ).toFixed(2);
    },
    c47_1() {
      return this.ROUND(
        (60 * parseFloat(this.c46_1)) / 3.14 / parseFloat(this.c37),
        2
      ).toFixed(2);
    },
    c47_2() {
      return this.ROUND(
        (60 * parseFloat(this.c46_2)) / 3.14 / parseFloat(this.c37),
        2
      ).toFixed(2);
    },
    c48() {
      return ((2 * parseFloat(this.c46)) / parseFloat(this.c37)).toFixed(2);
    },
    c48_1() {
      return ((2 * parseFloat(this.c46_1)) / parseFloat(this.c37)).toFixed(2);
    },
    c48_2() {
      return ((2 * parseFloat(this.c46_2)) / parseFloat(this.c37)).toFixed(2);
    },
    c49() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48), 3) *
          (Math.pow(parseFloat(this.c41), 4) -
            Math.pow(parseFloat(this.c42), 4))) /
        408
      ).toFixed(2);
    },
    c49_1() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_1), 3) *
          (Math.pow(parseFloat(this.c41), 4) -
            Math.pow(parseFloat(this.c42), 4))) /
        408
      ).toFixed(2);
    },
    c49_2() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_2), 3) *
          (Math.pow(parseFloat(this.c41), 4) -
            Math.pow(parseFloat(this.c42), 4))) /
        408
      ).toFixed(2);
    },
    c50() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48), 3) *
          (Math.pow(parseFloat(this.c43), 4) -
            Math.pow(parseFloat(this.c44), 4))) /
        408
      ).toFixed(2);
    },
    c50_1() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_1), 3) *
          (Math.pow(parseFloat(this.c43), 4) -
            Math.pow(parseFloat(this.c44), 4))) /
        408
      ).toFixed(2);
    },
    c50_2() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_2), 3) *
          (Math.pow(parseFloat(this.c43), 4) -
            Math.pow(parseFloat(this.c44), 4))) /
        408
      ).toFixed(2);
    },
    c51() {
      return (parseFloat(this.c49) + parseFloat(this.c50)).toFixed(3);
    },
    c51_1() {
      return (parseFloat(this.c49_1) + parseFloat(this.c50_1)).toFixed(3);
    },
    c51_2() {
      return (parseFloat(this.c49_2) + parseFloat(this.c50_2)).toFixed(3);
    },
    c52() {
      return (
        parseFloat(this.c51) +
        parseFloat(this.c51_1) +
        parseFloat(this.c51_2)
      ).toFixed(2);
    },
    c57() {
      return this.ROUND(
        parseFloat(this.c51) / parseFloat(this.c55) / parseFloat(this.c56),
        2
      ).toFixed(2);
    },
    c57_1() {
      return this.ROUND(
        parseFloat(this.c51_1) /
          parseFloat(this.c55_1) /
          parseFloat(this.c56_1),
        2
      ).toFixed(2);
    },
    c57_2() {
      return this.ROUND(
        parseFloat(this.c51_2) /
          parseFloat(this.c55_2) /
          parseFloat(this.c56_2),
        2
      ).toFixed(2);
    },
    c60() {
      return (1.75 * parseFloat(this.c48)).toFixed(2);
    },
    c60_1() {
      return (1.75 * parseFloat(this.c48_1)).toFixed(2);
    },
    c60_2() {
      return (1.75 * parseFloat(this.c48_2)).toFixed(2);
    },
    c62() {
      return (
        parseFloat(this.c3_3) /
        parseFloat(this.c8) /
        parseFloat(this.c60_1)
      ).toFixed(2);
    },
    c62_1() {
      return (
        parseFloat(this.c3_3) /
        parseFloat(this.c8) /
        parseFloat(this.c60_2)
      ).toFixed(2);
    },
    c63() {
      return Math.pow(parseFloat(this.c62), 0.5).toFixed(2);
    },
    c63_1() {
      return Math.pow(parseFloat(this.c62_1), 0.5).toFixed(2);
    },
    c64() {
      return "0.4*0.4";
    },
    c64_1() {
      return "0.5*0.5";
    },
    c68() {
      return Math.sqrt(
        (102 * parseFloat(this.c51) * 1000000) /
          102 /
          (parseFloat(this.c15) * parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(2);
    },
    c68_1() {
      return Math.sqrt(
        (102 * parseFloat(this.c51_1) * 1000000) /
          102 /
          (parseFloat(this.c15) * parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(2);
    },
    c68_2() {
      return Math.sqrt(
        (102 * parseFloat(this.c51_2) * 1000000) /
          102 /
          (parseFloat(this.c15) * parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(2);
    },
    c69() {
      return Math.sqrt(
        (parseFloat(this.c52) * 1000000) /
          (3 *
            parseFloat(this.c15) *
            parseFloat(this.c16) *
            parseFloat(this.c17))
      ).toFixed(2);
    },
    c70() {
      return (parseFloat(this.c69) * parseFloat(this.c7) * 60).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "机械搅拌絮凝池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: this.getkey2(),
          结构形式: "钢砼",
          备注: "半地下式",
          暖通要求: "无",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "机械搅拌絮凝池搅拌机",
          设备类型: "水平轴搅拌器",
          规格及型号: this.getkey3(),
          单位: "台",
          数量: this.getkey4(),
          运行时间: "24h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "机械搅拌絮凝池",
          Dimensions: this.getkey1c(),
          标高: "",
          单位: "座",
          disinfectiontank: this.getkey2c(),
          结构形式: "钢砼",
          备注: "半地下式",
          暖通要求: "无",
        },
      ];
    },
    data4() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "机械搅拌絮凝池搅拌机",
          设备类型: "垂直轴搅拌器",
          规格及型号: this.getkey3c(),
          单位: "台",
          数量: this.getkey4c(),
          运行时间: "24h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注: "",
          运行数量: this.getkey4c(),
          单台功率: "",
          用电量: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("2001-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data1 = [
      {
        序号: "1",
        单体位号: "1",
        名称: "机械搅拌絮凝池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getkey2(),
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "机械搅拌絮凝池搅拌机",
        设备类型: "水平轴搅拌器",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "24h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
    ];
    this.data3 = [
      {
        序号: "",
        单体位号: "",
        名称: "机械搅拌絮凝池",
        Dimensions: this.getkey1c(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getkey2c(),
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data4 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "机械搅拌絮凝池搅拌机",
        设备类型: "垂直轴搅拌器",
        规格及型号: this.getkey3c(),
        单位: "台",
        数量: this.getkey4c(),
        运行时间: "24h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "",
        运行数量: this.getkey4c(),
        单台功率: "",
        用电量: "",
      },
    ];
  },
};
</script>

<style lang="less">
.calc {
  margin-bottom: 15px;
}
.ant-input-suffix {
  z-index: auto !important;
}
</style>
