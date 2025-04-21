<template>
  <div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
  initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_4002"),
  data() {
    return {
      modelVisible: false,
      b3: "20000",
      b4: "5",
      b6: "10",
      b7: "48",
      b10: "15",
      b10_1: "3",
      b11: "15",
      b11_1: "4",
      b12: "3",
      b12_1: "4",
      b13: "5",
      b13_1: "5",
      b14: "1.8",
      b16: "",
      b17: "",
      b20: "2",
      b21: "2",
      b23: "3",
      b24: "9",
      b31: "0.3",
      b32: "1.2",
      b33: "0.1",
      b34: "1.5",
      b35: "0.2",
      b36: "0.9",
      b37: "0.4",
      b42_1: "2",
      b59_1: "1",
      b46: "400",
      b49: "1",
      b51: "10",
      b55: "0.1×0.1",
      b61: "300",
      b65: "10",
      b73: "1.5",
      b74: "5",
      b78: "500",
      b83: "0.4",
      b84: "1.5",
      b85: "0.4",
      b86: "1",
      b91: "0.5",
      b96: "0.5",
      b97: "0.4",
      b102: "0.013",
      b108: "0.8",
      b110: "1",
      b113: "0.5",
      b118: "0.05",
      b121: "0.5",
      b123: "0.4",
      b128: "3",
      b132: "0.6",
      b133: "0.6",
      b135: "0.35",
      b143: "0.025",
      b146: "0.15",
      b150: "45",
      b151: "0.6",
      b155: "1173×620",
      b156: "24",
      b157: "48",
      b160: "1.235",
      b161: "2.36",
      b166: "4.4",
      b170: "40",
      b172: "1.77",
      b173: "0.22",
      b174: "0",
      b176: "1.5",
      b178: "12",
      b182: "1.2",
      b187: "0.1",
      b188: "0.0101",
      b189: "981",
      b190: "0.5",
      b193: "0.8",
      b196: "0.3",
      b197: "0.22",
      b199: "2",
      b200: "2",
      b201: "0.3",
      b211: "2",
      b212: "10",
      c4: "1",
      c4_1: "1",
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
              dataIndex: "尺寸",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "尺寸" },
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
              dataIndex: "数量",
              key: "7",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "数量" },
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
      columns3: [
        {
          title: "仪表选型(结果输出)",
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
              title: "仪表位号",
              dataIndex: "仪表位号",
              key: "2",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "仪表位号" },
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "3",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "仪表名称" },
            },
            {
              title: "安装位置",
              dataIndex: "安装位置",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "安装位置" },
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
              title: "-",
              dataIndex: "-",
              key: "8",
              width: "80px",
              align: "center",
            },
            {
              title: "-",
              dataIndex: "-",
              key: "9",
              width: "50px",
              align: "center",
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
        this.b3 = 40000;
      } else {
        this.b3 = waterData;
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
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];

        // 导出 Excel
        exportExcel3(allData1, allData2, allData3, "V型滤池工程量", this);
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
        key1: this.b3,
        key2: this.b4,
        key3: this.b5,
        key4: this.b6,
        key5: this.b7,
        key6: this.b10,
        key7: this.b10_1,
        key8: this.b11,
        key9: this.b11_1,
        key10: this.b12,
        key11: this.b12_1,
        key12: this.b13,
        key13: this.b13_1,
        key14: this.b14,
        key15: this.b18,
        key16: this.b19,
        key17: this.b20,
        key18: this.b21,
        key19: this.b22,
        key20: this.b23,
        key21: this.b24,
        key22: this.b25,
        key23: this.b26,
        key24: this.b27,
        key25: this.b28,
        key26: this.b29,
        key27: this.b31,
        key28: this.b32,
        key29: this.b33,
        key30: this.b34,
        key31: this.b35,
        key32: this.b36,
        key33: this.b37,
        key34: this.b38,
        key35: this.b42,
        key36: this.b42_1,
        key37: this.b43,
        key38: this.b43_1,
        key39: this.b44,
        key40: this.b46,
        key41: this.b47,
        key42: this.b49,
        key43: this.b50,
        key44: this.b51,
        key45: this.b52,
        key46: this.b53,
        key47: this.b54,
        key48: this.b55,
        key49: this.b56,
        key50: this.b57,
        key51: this.b59,
        key52: this.b59_1,
        key53: this.b60_1,
        key54: this.b61,
        key55: this.b62,
        key56: this.b64,
        key57: this.b65,
        key58: this.b66,
        key59: this.b67,
        key60: this.b68,
        key61: this.b69,
        key62: this.b71,
        key63: this.b72,
        key64: this.b73,
        key65: this.b74,
        key66: this.b75,
        key67: this.b77,
        key68: this.b78,
        key69: this.b79,
        key70: this.b83,
        key71: this.b84,
        key72: this.b85,
        key73: this.b86,
        key74: this.b87,
        key75: this.b88,
        key76: this.b89,
        key77: this.b91,
        key78: this.b92,
        key79: this.b93,
        key80: this.b94,
        key81: this.b96,
        key82: this.b97,
        key83: this.b98,
        key84: this.b99,
        key85: this.b100,
        key86: this.b101,
        key87: this.b102,
        key88: this.b103,
        key89: this.b104,
        key90: this.b105,
        key91: this.b108,
        key92: this.b109,
        key93: this.b110,
        key94: this.b111,
        key95: this.b112,
        key96: this.b113,
        key97: this.b115,
        key98: this.b118,
        key99: this.b119,
        key100: this.b120,
        key101: this.b121,
        key102: this.b122,
        key103: this.b123,
        key104: this.b124,
        key105: this.b128,
        key106: this.b129,
        key107: this.b132,
        key108: this.b133,
        key109: this.b134,
        key110: this.b135,
        key111: this.b136,
        key112: this.b138,
        key113: this.b139,
        key114: this.b140,
        key115: this.b141,
        key116: this.b143,
        key117: this.b144,
        key118: this.b145,
        key119: this.b146,
        key120: this.b147,
        key121: this.b148,
        key122: this.b149,
        key123: this.b150,
        key124: this.b151,
        key125: this.b152,
        key126: this.b153,
        key127: this.b155,
        key128: this.b156,
        key129: this.b157,
        key130: this.b158,
        key131: this.b159,
        key132: this.b160,
        key133: this.b161,
        key134: this.b162,
        key135: this.b163,
        key136: this.b164,
        key137: this.b166,
        key138: this.b168,
        key139: this.b169,
        key140: this.b170,
        key141: this.b171,
        key142: this.b172,
        key143: this.b173,
        key144: this.b174,
        key145: this.b175,
        key146: this.b176,
        key147: this.b177,
        key148: this.b178,
        key149: this.b179,
        key150: this.b182,
        key151: this.b183,
        key152: this.b184,
        key153: this.b187,
        key154: this.b188,
        key155: this.b189,
        key156: this.b190,
        key157: this.b191,
        key158: this.b192,
        key159: this.b193,
        key160: this.b194,
        key161: this.b196,
        key162: this.b197,
        key163: this.b198,
        key164: this.b199,
        key165: this.b200,
        key166: this.b201,
        key167: this.b202,
        key168: this.b203,
        key169: this.b204,
        key170: this.b205,
        key171: this.b207,
        key172: this.b208,
        key173: this.b209,
        key174: this.b210,
        key175: this.b211,
        key176: this.b212,
        key177: this.b213,
        key178: this.b214,
        key179: this.b222,
        key180: this.b223,
        key181: this.b224,
        key182: this.c2,
        key183: this.c3,
        key184: this.c4,
        key185: this.c4_1,
        key186: this.c8,
        key187: this.c9,
        key188: this.c10,
      };
      exportWord("V型滤池计算书", "4002.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b5,
        key4: this.b6,
        key5: this.b7,
        key6: this.b10,
        key7: this.b10_1,
        key8: this.b11,
        key9: this.b11_1,
        key10: this.b12,
        key11: this.b12_1,
        key12: this.b13,
        key13: this.b13_1,
        key14: this.b14,
        key15: this.b18,
        key16: this.b19,
        key17: this.b20,
        key18: this.b21,
        key19: this.b22,
        key20: this.b23,
        key21: this.b24,
        key22: this.b25,
        key23: this.b26,
        key24: this.b27,
        key25: this.b28,
        key26: this.b29,
        key27: this.b31,
        key28: this.b32,
        key29: this.b33,
        key30: this.b34,
        key31: this.b35,
        key32: this.b36,
        key33: this.b37,
        key34: this.b38,
        key35: this.b42,
        key36: this.b42_1,
        key37: this.b43,
        key38: this.b43_1,
        key39: this.b44,
        key40: this.b46,
        key41: this.b47,
        key42: this.b49,
        key43: this.b50,
        key44: this.b51,
        key45: this.b52,
        key46: this.b53,
        key47: this.b54,
        key48: this.b55,
        key49: this.b56,
        key50: this.b57,
        key51: this.b59,
        key52: this.b59_1,
        key53: this.b60_1,
        key54: this.b61,
        key55: this.b62,
        key56: this.b64,
        key57: this.b65,
        key58: this.b66,
        key59: this.b67,
        key60: this.b68,
        key61: this.b69,
        key62: this.b71,
        key63: this.b72,
        key64: this.b73,
        key65: this.b74,
        key66: this.b75,
        key67: this.b77,
        key68: this.b78,
        key69: this.b79,
        key70: this.b83,
        key71: this.b84,
        key72: this.b85,
        key73: this.b86,
        key74: this.b87,
        key75: this.b88,
        key76: this.b89,
        key77: this.b91,
        key78: this.b92,
        key79: this.b93,
        key80: this.b94,
        key81: this.b96,
        key82: this.b97,
        key83: this.b98,
        key84: this.b99,
        key85: this.b100,
        key86: this.b101,
        key87: this.b102,
        key88: this.b103,
        key89: this.b104,
        key90: this.b105,
        key91: this.b108,
        key92: this.b109,
        key93: this.b110,
        key94: this.b111,
        key95: this.b112,
        key96: this.b113,
        key97: this.b115,
        key98: this.b118,
        key99: this.b119,
        key100: this.b120,
        key101: this.b121,
        key102: this.b122,
        key103: this.b123,
        key104: this.b124,
        key105: this.b128,
        key106: this.b129,
        key107: this.b132,
        key108: this.b133,
        key109: this.b134,
        key110: this.b135,
        key111: this.b136,
        key112: this.b138,
        key113: this.b139,
        key114: this.b140,
        key115: this.b141,
        key116: this.b143,
        key117: this.b144,
        key118: this.b145,
        key119: this.b146,
        key120: this.b147,
        key121: this.b148,
        key122: this.b149,
        key123: this.b150,
        key124: this.b151,
        key125: this.b152,
        key126: this.b153,
        key127: this.b155,
        key128: this.b156,
        key129: this.b157,
        key130: this.b158,
        key131: this.b159,
        key132: this.b160,
        key133: this.b161,
        key134: this.b162,
        key135: this.b163,
        key136: this.b164,
        key137: this.b166,
        key138: this.b168,
        key139: this.b169,
        key140: this.b170,
        key141: this.b171,
        key142: this.b172,
        key143: this.b173,
        key144: this.b174,
        key145: this.b175,
        key146: this.b176,
        key147: this.b177,
        key148: this.b178,
        key149: this.b179,
        key150: this.b182,
        key151: this.b183,
        key152: this.b184,
        key153: this.b187,
        key154: this.b188,
        key155: this.b189,
        key156: this.b190,
        key157: this.b191,
        key158: this.b192,
        key159: this.b193,
        key160: this.b194,
        key161: this.b196,
        key162: this.b197,
        key163: this.b198,
        key164: this.b199,
        key165: this.b200,
        key166: this.b201,
        key167: this.b202,
        key168: this.b203,
        key169: this.b204,
        key170: this.b205,
        key171: this.b207,
        key172: this.b208,
        key173: this.b209,
        key174: this.b210,
        key175: this.b211,
        key176: this.b212,
        key177: this.b213,
        key178: this.b214,
        key179: this.b222,
        key180: this.b223,
        key181: this.b224,
        key182: this.c2,
        key183: this.c3,
        key184: this.c4,
        key185: this.c4_1,
        key186: this.c8,
        key187: this.c9,
        key188: this.c10,
      };
      initWordStorage("4002.docx", data);
      this.handleExcelCache("4002.xlsx", "V型滤池工程量");
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
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
    ROUNDUP(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.ceil(number * multiplier) / multiplier;
    },
    ROUND(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.round(number * multiplier) / multiplier;
    },
    quickSort(arr, left, right) {
      let index;
      index = this.partition(arr, left, right);
      if (left < index - 1) {
        this.quickSort(arr, left, index - 1);
      }
      if (index < right) {
        this.quickSort(arr, index, right);
      }
      return arr;
    },
    partition(arr, left, right) {
      let point = arr[Math.floor((left + right) / 2)];
      let i = left,
        j = right;
      while (i <= j) {
        while (arr[i] > point) {
          i++;
        }
        while (arr[j] < point) {
          j--;
        }
        if (i <= j) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      }
      return i;
    },
    findKthLargest(nums, k) {
      nums = this.quickSort(nums, 0, nums.length - 1);
      console.log(nums[k - 1]);
      return nums[k - 1];
    },
    get_a_1_1() {
      return this.b223_1;
    },
    get_b_1_1() {
      return (
        "Q=" +
        parseFloat(this.b179) / parseFloat(this.b42_1) +
        "m³/h，H=" +
        this.b178 +
        "m"
      );
    },
    get_b_1_2() {
      return parseFloat(this.b42_1) + parseFloat(this.b43_1);
    },
    get_b_1_3() {
      return this.b42_1 + "用" + this.b43_1 + "备";
    },
    get_b_2_1() {
      return "Q=" + this.c9 + "m3/min，P=49kPa，N=" + this.c10 + "kW";
    },
    get_b_2_2() {
      return parseFloat(this.c4) + parseFloat(this.c4_1);
    },
    get_b_2_3() {
      return this.c4 + "用" + this.c4_1 + "备";
    },
    get_c_1_1() {
      return parseFloat(this.b20) * 4;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b43_1() {
      if (this.ROUND(parseFloat(this.b59_1) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b59_1) / 3, 0);
      }
    },
    b60_1() {
      if (this.ROUND(parseFloat(this.b59_1) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b59_1) / 3, 0);
      }
    },
    b5() {
      return (
        (parseFloat(this.b3) * parseFloat(this.b4)) / 100 + parseFloat(this.b3)
      );
    },
    b18() {
      return (
        24 -
        (((parseFloat(this.b10_1) +
          parseFloat(this.b11_1) +
          parseFloat(this.b13_1)) /
          60) *
          24) /
          parseFloat(this.b7)
      ).toFixed(2);
    },
    b19() {
      return (
        parseFloat(this.b5) /
        parseFloat(this.b6) /
        parseFloat(this.b18)
      ).toFixed(2);
    },
    b22() {
      return (
        parseFloat(this.b19) /
        parseFloat(this.b20) /
        parseFloat(this.b21)
      ).toFixed(2);
    },
    b25() {
      return (parseFloat(this.b24) / parseFloat(this.b23)).toFixed(1);
    },
    b26() {
      return (
        parseFloat(this.b24) *
        parseFloat(this.b23) *
        parseFloat(this.b21)
      ).toFixed(1);
    },
    b27() {
      return (parseFloat(this.b26) * parseFloat(this.b20)).toFixed(1);
    },
    b28() {
      return (
        parseFloat(this.b5) /
        parseFloat(this.b18) /
        parseFloat(this.b27)
      ).toFixed(2);
    },
    b29() {
      return (
        (parseFloat(this.b28) * parseFloat(this.b20)) /
        (parseFloat(this.b20) - 1)
      ).toFixed(1);
    },
    b38() {
      return (
        parseFloat(this.b31) +
        parseFloat(this.b32) +
        parseFloat(this.b33) +
        parseFloat(this.b34) +
        parseFloat(this.b35) +
        parseFloat(this.b36) +
        parseFloat(this.b37)
      ).toFixed(2);
    },
    b42() {
      return (parseFloat(this.b13) * parseFloat(this.b26) * 3.6).toFixed(0);
    },
    b43() {
      return (parseFloat(this.b14) * parseFloat(this.b26) * 3.6).toFixed(0);
    },
    b44() {
      return (parseFloat(this.b42) + parseFloat(this.b43)).toFixed(0);
    },
    b47() {
      return (
        ((parseFloat(this.b42) / 3600) * 4) /
        3.1415926 /
        Math.pow(parseFloat(this.b46) / 1000, 2)
      ).toFixed(2);
    },
    b50() {
      return (parseFloat(this.b42) / 3600 / parseFloat(this.b49)).toFixed(2);
    },
    b52() {
      return (parseFloat(this.b51) * 2).toFixed(0);
    },
    b53() {
      return (parseFloat(this.b24) / parseFloat(this.b51)).toFixed(3);
    },
    b54() {
      return (parseFloat(this.b50) / parseFloat(this.b52)).toFixed(4);
    },
    b56() {
      return 0.01;
    },
    b57() {
      return (
        parseFloat(this.b42) /
        3600 /
        parseFloat(this.b52) /
        parseFloat(this.b56)
      ).toFixed(2);
    },
    b59() {
      return ((parseFloat(this.b10) * parseFloat(this.b26) * 3.6) / 60).toFixed(
        2
      );
    },
    b62() {
      return (
        ((parseFloat(this.b59) / 60) * 4) /
        3.1415926 /
        Math.pow(parseFloat(this.b61) / 1000, 2)
      ).toFixed(1);
    },
    b64() {
      return this.b52;
    },
    b66() {
      return (parseFloat(this.b59) / 60 / parseFloat(this.b65)).toFixed(3);
    },
    b67() {
      return (parseFloat(this.b66) / parseFloat(this.b64)).toFixed(5);
    },
    b68() {
      return Math.pow((4 * parseFloat(this.b67)) / 3.1415926, 0.5).toFixed(2);
    },
    b69() {
      return ((parseFloat(this.b59) * 60) / parseFloat(this.b64)).toFixed(1);
    },
    b71() {
      return ((parseFloat(this.b12) * parseFloat(this.b26)) / 1000).toFixed(3);
    },
    b72() {
      return ((parseFloat(this.b11) * parseFloat(this.b26)) / 1000).toFixed(3);
    },
    b75() {
      return (
        parseFloat(this.b71) / parseFloat(this.b73) +
        parseFloat(this.b72) / parseFloat(this.b74)
      ).toFixed(2);
    },
    b77() {
      return (parseFloat(this.b5) / parseFloat(this.b18)).toFixed(1);
    },
    b79() {
      return (
        (parseFloat(this.b77) * 4 * 1000 * 1000) /
        3.1415926 /
        parseFloat(this.b78) /
        parseFloat(this.b78) /
        3600
      ).toFixed(2);
    },
    b87() {
      return (parseFloat(this.b83) * parseFloat(this.b84)).toFixed(1);
    },
    b88() {
      return (parseFloat(this.b85) * parseFloat(this.b86)).toFixed(1);
    },
    b89() {
      return (parseFloat(this.b75) / parseFloat(this.b64)).toFixed(4);
    },
    b92() {
      return (
        parseFloat(this.b36) +
        parseFloat(this.b35) +
        parseFloat(this.b33) +
        parseFloat(this.b32) +
        parseFloat(this.b91) -
        parseFloat(this.b84)
      ).toFixed(1);
    },
    b93() {
      return (
        parseFloat(this.b32) +
        parseFloat(this.b33) +
        parseFloat(this.b35) +
        parseFloat(this.b36) +
        parseFloat(this.b91) -
        parseFloat(this.b86)
      ).toFixed(1);
    },
    b94() {
      return (
        (parseFloat(this.b93) - parseFloat(this.b92)) /
        parseFloat(this.b24)
      ).toFixed(2);
    },
    b98() {
      return (parseFloat(this.b92) - parseFloat(this.b96)).toFixed(2);
    },
    b99() {
      return (parseFloat(this.b97) + 2 * parseFloat(this.b98)).toFixed(1);
    },
    b100() {
      return (parseFloat(this.b97) * parseFloat(this.b98)).toFixed(2);
    },
    b101() {
      return (parseFloat(this.b100) / parseFloat(this.b99)).toFixed(2);
    },
    b103() {
      return (
        (Math.pow(parseFloat(this.b101), 2 / 3) *
          Math.pow(parseFloat(this.b94), 0.5)) /
        parseFloat(this.b102)
      ).toFixed(2);
    },
    b104() {
      return (parseFloat(this.b100) * parseFloat(this.b103)).toFixed(2);
    },
    b105() {
      return (
        Math.pow(
          Math.pow(
            parseFloat(this.b44) /
              3600 /
              2 /
              0.42 /
              parseFloat(this.b24) /
              (2 * 9.81),
            0.5
          ),
          2
        ) / 3
      ).toFixed(3);
    },
    b109() {
      return (parseFloat(this.b77) / 3600 / parseFloat(this.b108)).toFixed(2);
    },
    b111() {
      return (parseFloat(this.b109) / parseFloat(this.b110)).toFixed(3);
    },
    b112() {
      return this.ROUND(parseFloat(this.b109), 1);
    },
    b115() {
      return (parseFloat(this.b29) * parseFloat(this.b26)).toFixed(2);
    },
    b119() {
      return (
        parseFloat(this.b115) /
        3600 /
        0.64 /
        Math.pow(2 * 9.81 * parseFloat(this.b118), 0.5)
      ).toFixed(4);
    },
    b120() {
      return (
        parseFloat(this.b119) *
        (parseFloat(this.b43) / parseFloat(this.b115))
      ).toFixed(3);
    },
    b122() {
      return this.ROUNDUP(parseFloat(this.b120) / parseFloat(this.b121), 1);
    },
    b124() {
      return (
        (parseFloat(this.b119) - parseFloat(this.b120)) /
        2 /
        parseFloat(this.b123)
      ).toFixed(1);
    },
    b129() {
      return Math.pow(
        parseFloat(this.b115) / 3600 / (1.84 * parseFloat(this.b128)),
        2 / 3
      ).toFixed(3);
    },
    b134() {
      return (
        parseFloat(this.b23) * 2 +
        parseFloat(this.b97) +
        2 * 0.3
      ).toFixed(1);
    },
    b136() {
      return (
        parseFloat(this.b115) /
        3600 /
        (2 * parseFloat(this.b132) * parseFloat(this.b135))
      ).toFixed(2);
    },
    b138() {
      return (
        (parseFloat(this.b132) * parseFloat(this.b135)) /
        (2 * parseFloat(this.b135) + parseFloat(this.b132))
      ).toFixed(2);
    },
    b139() {
      return Math.pow(
        (0.013 * parseFloat(this.b136)) /
          Math.pow(parseFloat(this.b138), 2 / 3),
        2
      ).toFixed(6);
    },
    b140() {
      return ((parseFloat(this.b139) * parseFloat(this.b134)) / 2).toFixed(6);
    },
    b141() {
      return (parseFloat(this.b135) + parseFloat(this.b140)).toFixed(6);
    },
    b144() {
      return (parseFloat(this.b24) / 0.15).toFixed(0);
    },
    b145() {
      return (
        ((3.1415926 * Math.pow(parseFloat(this.b143), 2)) / 4) *
        parseFloat(this.b144)
      ).toFixed(5);
    },
    b147() {
      return (
        Math.pow(
          parseFloat(this.b43) / 3600 / (2 * 0.8 * parseFloat(this.b145)),
          2
        ) /
        2 /
        9.8
      ).toFixed(3);
    },
    b148() {
      return this.b24;
    },
    b149() {
      return Math.pow(
        parseFloat(this.b44) / 3600 / (2 * 1.84 * parseFloat(this.b148)),
        2 / 3
      ).toFixed(3);
    },
    b152() {
      return (
        parseFloat(this.b151) -
        parseFloat(this.b146) -
        parseFloat(this.b149)
      ).toFixed(2);
    },
    b153() {
      return (parseFloat(this.b152) - parseFloat(this.b147)).toFixed(2);
    },
    b158() {
      return (parseFloat(this.b156) * parseFloat(this.b157)).toFixed(0);
    },
    b159() {
      return (parseFloat(this.b158) * parseFloat(this.b20)).toFixed(0);
    },
    b162() {
      return (parseFloat(this.b158) / parseFloat(this.b26)).toFixed(0);
    },
    b163() {
      return (
        ((parseFloat(this.b158) * 6.12) / 10000 / parseFloat(this.b26)) *
        100
      ).toFixed(2);
    },
    b164() {
      return (
        parseFloat(this.b3) /
        parseFloat(this.b18) /
        3600 /
        ((parseFloat(this.b159) * 6.12) / 10000)
      ).toFixed(3);
    },
    b168() {
      return (parseFloat(this.b46) / 1000).toFixed(1);
    },
    b169() {
      return (
        (parseFloat(this.b42) * 4) /
        3.14 /
        3600 /
        Math.pow(parseFloat(this.b168), 2)
      ).toFixed(2);
    },
    b171() {
      return (
        (0.00107 * parseFloat(this.b170) * Math.pow(parseFloat(this.b169), 2)) /
        Math.pow(parseFloat(this.b168), 1.3)
      ).toFixed(2);
    },
    b175() {
      return ((2.65 / 1 - 1) * (1 - 0.41) * 1.2).toFixed(2);
    },
    b177() {
      return (
        parseFloat(this.b166) +
        parseFloat(this.b171) +
        parseFloat(this.b173) +
        parseFloat(this.b174) +
        parseFloat(this.b175) +
        parseFloat(this.b176) +
        parseFloat(this.b172)
      ).toFixed(2);
    },
    b179() {
      return this.b42;
    },
    b183() {
      return this.ROUND(
        parseFloat(this.b182) +
          parseFloat(this.b32) +
          parseFloat(this.b33) +
          parseFloat(this.b175) +
          parseFloat(this.b174) +
          parseFloat(this.b173) +
          0.55,
        1
      );
    },
    b184() {
      return this.b59;
    },
    b191() {
      return (parseFloat(this.b32) * 100).toFixed(0);
    },
    b192() {
      return (parseFloat(this.b6) / 36).toFixed(3);
    },
    b194() {
      return (
        180 *
        (parseFloat(this.b188) / parseFloat(this.b189)) *
        (Math.pow(1 - parseFloat(this.b190), 2) /
          Math.pow(parseFloat(this.b190), 3)) *
        (1 / parseFloat(this.b193) / parseFloat(this.b187)) *
        parseFloat(this.b191) *
        parseFloat(this.b192)
      ).toFixed(2);
    },
    b198() {
      return (parseFloat(this.b196) + parseFloat(this.b197)).toFixed(2);
    },
    b202() {
      return (
        parseFloat(this.b201) +
        parseFloat(this.b36) +
        parseFloat(this.b35) +
        parseFloat(this.b32) +
        parseFloat(this.b33)
      ).toFixed(2);
    },
    b203() {
      return (
        parseFloat(this.b5) /
        parseFloat(this.b18) /
        parseFloat(this.b20)
      ).toFixed(2);
    },
    b204() {
      return Math.pow(
        parseFloat(this.b203) / 3600 / 1.84 / parseFloat(this.b200),
        2 / 3
      ).toFixed(2);
    },
    b205() {
      return (parseFloat(this.b198) + parseFloat(this.b204)).toFixed(2);
    },
    b207() {
      return (
        (parseFloat(this.b12) *
          parseFloat(this.b26) *
          3.6 *
          parseFloat(this.b12_1)) /
        60
      ).toFixed(2);
    },
    b208() {
      return ((parseFloat(this.b42) * parseFloat(this.b13_1)) / 60).toFixed(1);
    },
    b209() {
      return ((parseFloat(this.b43) * 15) / 60).toFixed(1);
    },
    b210() {
      return (28.7 * 2.9 * 2).toFixed(1);
    },
    b213() {
      return (
        parseFloat(this.b210) /
        parseFloat(this.b211) /
        parseFloat(this.b212)
      ).toFixed(2);
    },
    b214() {
      return (5.4 + 2).toFixed(2);
    },
    b222() {
      return (
        (parseFloat(this.b23) * parseFloat(this.b21) + 0.2 * 2 + 0.64) *
          parseFloat(this.b20) +
        0.3
      ).toFixed(2);
    },
    b223() {
      return (
        parseFloat(this.b24) +
        0.3 * 3 +
        parseFloat(this.b199) +
        2.8
      ).toFixed(1);
    },
    b224() {
      return parseFloat(this.b38).toFixed(1);
    },
    b223_1() {
      return (
        parseFloat(this.b222).toString() +
        "m * " +
        parseFloat(this.b223).toString() +
        "m * " +
        parseFloat(this.b224).toString()
      );
    },
    c2() {
      return this.b183;
    },
    c3() {
      return this.b184;
    },
    c9() {
      var cal1 = parseFloat(this.c3) / parseFloat(this.c4);
      var cal2 = 0;
      if (cal1 < 0.78) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 0.94) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.09) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.2) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.3) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.43) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.53) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.67) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.81) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.01) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.07) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.32) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.56) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.74) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.9) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.12) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.32) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.71) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.09) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.76) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.97) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.16) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.46) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.77) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.05) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.3) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.58) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.82) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.9) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.32) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.74) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 5.58) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 5.99) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 6.73) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7.23) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7.77) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8.28) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 5.55) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 6.03) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7.82) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8.37) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8.77) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 9.33) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 10.01) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 10.83) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 10.65) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11.54) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 13.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 15.95) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 17.17) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 18.23) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 21.05) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 23.04) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 24.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26.08) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 19.35) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 22.98) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 24.98) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26.37) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 30.54) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 33.55) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 35.84) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 38.38) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 28.22) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 32.34) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 36.03) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 40.15) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 43.78) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 47.08) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 50.4) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 53.68) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 57.37) {
        cal2 = cal2 + 1;
      }
      var array = [
        0.78,
        0.94,
        1.09,
        1.2,
        1.3,
        1.43,
        1.53,
        1.67,
        1.81,
        2.01,
        1.07,
        1.32,
        1.56,
        1.74,
        1.9,
        2.12,
        2.32,
        2.48,
        2.71,
        3.09,
        2.48,
        2.76,
        2.97,
        3.16,
        3.46,
        3.77,
        4.05,
        4.3,
        4.58,
        4.82,
        3.48,
        3.9,
        4.32,
        4.74,
        5.58,
        5.99,
        6.73,
        7.23,
        7.77,
        8.28,
        5.55,
        6.03,
        7,
        7.82,
        8.37,
        8.77,
        9.33,
        10.01,
        10.83,
        11.5,
        10.65,
        11.54,
        13.5,
        15.95,
        17.17,
        18.23,
        21.05,
        23.04,
        24.48,
        26.08,
        19.35,
        22.98,
        24.98,
        26.37,
        30.54,
        33.55,
        35.84,
        38.38,
        28.22,
        32.34,
        36.03,
        40.15,
        43.78,
        47.08,
        50.4,
        53.68,
        57.37,
      ];

      return this.findKthLargest(array, cal2);
    },
    c10() {
      var array1 = [
        0.78,
        0.94,
        1.09,
        1.2,
        1.3,
        1.43,
        1.53,
        1.67,
        1.81,
        2.01,
        1.07,
        1.32,
        1.56,
        1.74,
        1.9,
        2.12,
        2.32,
        2.48,
        2.71,
        3.09,
        2.48,
        2.76,
        2.97,
        3.16,
        3.46,
        3.77,
        4.05,
        4.3,
        4.58,
        4.82,
        3.48,
        3.9,
        4.32,
        4.74,
        5.58,
        5.99,
        6.73,
        7.23,
        7.77,
        8.28,
        5.55,
        6.03,
        7,
        7.82,
        8.37,
        8.77,
        9.33,
        10.01,
        10.83,
        11.5,
        10.65,
        11.54,
        13.5,
        15.95,
        17.17,
        18.23,
        21.05,
        23.04,
        24.48,
        26.08,
        19.35,
        22.98,
        24.98,
        26.37,
        30.54,
        33.55,
        35.84,
        38.38,
        28.22,
        32.34,
        36.03,
        40.15,
        43.78,
        47.08,
        50.4,
        53.68,
        57.37,
      ];

      var array2 = [
        1.5,
        2.2,
        2.2,
        2.2,
        2.2,
        3,
        3,
        3,
        3,
        4,
        2.2,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4,
        5.5,
        4,
        4,
        5.5,
        5.5,
        5.5,
        5.5,
        5.5,
        7.5,
        7.5,
        7.5,
        5.5,
        7.5,
        7.5,
        7.5,
        11,
        11,
        11,
        11,
        11,
        15,
        7.5,
        11,
        11,
        11,
        11,
        15,
        15,
        15,
        15,
        18.5,
        15,
        18.5,
        18.5,
        22,
        30,
        30,
        30,
        30,
        37,
        37,
        30,
        30,
        37,
        37,
        45,
        45,
        55,
        55,
        37,
        45,
        45,
        55,
        55,
        75,
        75,
        75,
        75,
      ];
      var index = array1.indexOf(this.c9);
      return array2[index];
    },
    c8() {
      var array1 = [
        0.78,
        0.94,
        1.09,
        1.2,
        1.3,
        1.43,
        1.53,
        1.67,
        1.81,
        2.01,
        1.07,
        1.32,
        1.56,
        1.74,
        1.9,
        2.12,
        2.32,
        2.48,
        2.71,
        3.09,
        2.48,
        2.76,
        2.97,
        3.16,
        3.46,
        3.77,
        4.05,
        4.3,
        4.58,
        4.82,
        3.48,
        3.9,
        4.32,
        4.74,
        5.58,
        5.99,
        6.73,
        7.23,
        7.77,
        8.28,
        5.55,
        6.03,
        7,
        7.82,
        8.37,
        8.77,
        9.33,
        10.01,
        10.83,
        11.5,
        10.65,
        11.54,
        13.5,
        15.95,
        17.17,
        18.23,
        21.05,
        23.04,
        24.48,
        26.08,
        19.35,
        22.98,
        24.98,
        26.37,
        30.54,
        33.55,
        35.84,
        38.38,
        28.22,
        32.34,
        36.03,
        40.15,
        43.78,
        47.08,
        50.4,
        53.68,
        57.37,
      ];
      var array2 = [
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
      ];
      var index = array1.indexOf(this.c9);
      return array2[index];
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "V型滤池",
          尺寸: this.get_a_1_1(),
          标高: "",
          单位: "座",
          数量: "1",
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "反冲洗泵",
          设备类型: this.get_b_1_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_1_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_1_3(),
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "反冲洗风机",
          设备类型: this.get_b_2_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_2_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_2_3(),
        },
      ];
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "",
          仪表名称: "电动阀",
          安装位置: "",
          规格及型号: "",
          单位: "台",
          数量: this.get_c_1_1(),
          a: "",
          b: "",
          备注: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("4002-activated被调用了");
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
        单体位号: "",
        名称: "V型滤池",
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: "1",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "反冲洗泵",
        设备类型: this.get_b_1_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_1_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_1_3(),
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "反冲洗风机",
        设备类型: this.get_b_2_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_2_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_2_3(),
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "电动阀",
        安装位置: "",
        规格及型号: "",
        单位: "台",
        数量: this.get_c_1_1(),
        a: "",
        b: "",
        备注: "",
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
