<template>
  <div></div>
  </template>

<script>
import { mapState } from "vuex";
import {
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_9001"),
  data() {
    return {
      modelVisible: false,
      b1: "100000",
      b2: "5",
      b4: "20",
      b5: "20",
      b6: "0",
      b7: "2",
      b8: "0",
      b9: "1.5",
      b9_2: "99.20",
      b10: "500",
      b11: "4",
      b11_1: "0.40",
      b11_2: "4.00",
      b12: "10",
      b14_1: "10",
      b18: "250",
      b19: "4",
      b19_1: "0.40",
      b20: "7.90",
      b22_1: "10",
      b27: "97",
      b29: "24.00",
      b32: "2",
      b35: "0.30",
      b37: "24.00",
      b38: "0.30",
      b39: "0.05",
      b40: "1.00",
      b41: "2.40",
      b44: "55",
      b47: "50.00",
      b48: "2.50",
      b48_1: "0.40",
      b49: "5.00",
      b51_1: "50",
      b56: "80",
      b58: "0.6",
      b59: "8",
      b61: "2",
      b63_1: "0.2",
      b63_2: "LW250×1100",
      b67: "60",
      b69: "1.6",
      b70: "2",
      b72: "3",
      b72_1: "0.5",
      b73: "30",
      b74: "1.1",
      b76: "2",
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
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "Dimensions" },
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
              dataIndex: "disinfectiontank",
              key: "7",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "disinfectiontank" },
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
        this.b1 = 120000;
      } else {
        this.b1 = waterData;
      }

      // 进水浊度
      const inTurbidityData = getValueFromLocalStorage("inTurbidityData");
      if (inTurbidityData == null || inTurbidityData == "") {
        this.b5 = 20;
      } else {
        this.b5 = inTurbidityData;
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
        exportExcel3(allData1, allData2, allData3, "浓缩池工程量", this);
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
        key1: this.b1,
        key2: this.b2,
        key3: this.b3,
        key4: this.b4,
        key5: this.b5,
        key6: this.b6,
        key7: this.b7,
        key8: this.b8,
        key9: this.b9,
        key10: this.b3_1,
        key11: this.b4_1,
        key12: this.b5_1,
        key13: this.b5_2,
        key14: this.b6_1,
        key15: this.b6_2,
        key16: this.b6_3,
        key17: this.b7_1,
        key18: this.b8_1,
        key19: this.b9_1,
        key20: this.b9_2,
        key21: this.b10,
        key22: this.b11,
        key23: this.b11_1,
        key24: this.b11_2,
        key25: this.b12,
        key26: this.b13,
        key27: this.b14,
        key28: this.b14_1,
        key29: this.b15,
        key30: this.b16,
        key31: this.b17,
        key32: this.b17_1,
        key33: this.b18,
        key34: this.b19,
        key35: this.b19_1,
        key36: this.b20,
        key37: this.b21,
        key38: this.b22,
        key39: this.b22_1,
        key40: this.b23,
        key41: this.b24,
        key42: this.b25,
        key43: this.b25_1,
        key44: this.b26,
        key45: this.b27,
        key46: this.b28,
        key47: this.b29,
        key48: this.b30,
        key49: this.b31,
        key50: this.b32,
        key51: this.b33,
        key52: this.b34,
        key53: this.b35,
        key54: this.b36,
        key55: this.b37,
        key56: this.b38,
        key57: this.b39,
        key58: this.b40,
        key59: this.b41,
        key60: this.b42,
        key61: this.b43,
        key62: this.b44,
        key63: this.b45,
        key64: this.b47,
        key65: this.b48,
        key66: this.b48_1,
        key67: this.b49,
        key68: this.b50,
        key69: this.b51,
        key70: this.b51_1,
        key71: this.b53,
        key72: this.b54,
        key73: this.b55,
        key74: this.b56,
        key75: this.b57,
        key76: this.b58,
        key77: this.b59,
        key78: this.b60,
        key79: this.b61,
        key80: this.b62,
        key81: this.b63,
        key82: this.b63_1,
        key83: this.b63_2,
        key84: this.b64,
        key85: this.b65,
        key86: this.b66,
        key87: this.b66_1,
        key88: this.b67,
        key89: this.b68,
        key90: this.b69,
        key91: this.b70,
        key92: this.b71,
        key93: this.b72,
        key94: this.b72_1,
        key95: this.b73,
        key96: this.b74,
        key97: this.b75,
        key98: this.b76,
        key99: this.b77,
        key100: this.b78,
        key101: this.b78_1,
      };
      exportWord("浓缩池计算书", "9001.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b1,
        key2: this.b2,
        key3: this.b3,
        key4: this.b4,
        key5: this.b5,
        key6: this.b6,
        key7: this.b7,
        key8: this.b8,
        key9: this.b9,
        key10: this.b3_1,
        key11: this.b4_1,
        key12: this.b5_1,
        key13: this.b5_2,
        key14: this.b6_1,
        key15: this.b6_2,
        key16: this.b6_3,
        key17: this.b7_1,
        key18: this.b8_1,
        key19: this.b9_1,
        key20: this.b9_2,
        key21: this.b10,
        key22: this.b11,
        key23: this.b11_1,
        key24: this.b11_2,
        key25: this.b12,
        key26: this.b13,
        key27: this.b14,
        key28: this.b14_1,
        key29: this.b15,
        key30: this.b16,
        key31: this.b17,
        key32: this.b17_1,
        key33: this.b18,
        key34: this.b19,
        key35: this.b19_1,
        key36: this.b20,
        key37: this.b21,
        key38: this.b22,
        key39: this.b22_1,
        key40: this.b23,
        key41: this.b24,
        key42: this.b25,
        key43: this.b25_1,
        key44: this.b26,
        key45: this.b27,
        key46: this.b28,
        key47: this.b29,
        key48: this.b30,
        key49: this.b31,
        key50: this.b32,
        key51: this.b33,
        key52: this.b34,
        key53: this.b35,
        key54: this.b36,
        key55: this.b37,
        key56: this.b38,
        key57: this.b39,
        key58: this.b40,
        key59: this.b41,
        key60: this.b42,
        key61: this.b43,
        key62: this.b44,
        key63: this.b45,
        key64: this.b47,
        key65: this.b48,
        key66: this.b48_1,
        key67: this.b49,
        key68: this.b50,
        key69: this.b51,
        key70: this.b51_1,
        key71: this.b53,
        key72: this.b54,
        key73: this.b55,
        key74: this.b56,
        key75: this.b57,
        key76: this.b58,
        key77: this.b59,
        key78: this.b60,
        key79: this.b61,
        key80: this.b62,
        key81: this.b63,
        key82: this.b63_1,
        key83: this.b63_2,
        key84: this.b64,
        key85: this.b65,
        key86: this.b66,
        key87: this.b66_1,
        key88: this.b67,
        key89: this.b68,
        key90: this.b69,
        key91: this.b70,
        key92: this.b71,
        key93: this.b72,
        key94: this.b72_1,
        key95: this.b73,
        key96: this.b74,
        key97: this.b75,
        key98: this.b76,
        key99: this.b77,
        key100: this.b78,
        key101: this.b78_1,
      };
      initWordStorage("9001.docx", data);
      this.handleExcelCache("9001.xlsx", "浓缩池工程量");
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
        initPowerStorage(this.data2, path);
        initExcelStorage(allData1, allData2, allData3, path, name);
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
    get_a_1_1() {
      return (
        this.b12 +
        "m×" +
        this.b13 +
        "m×" +
        (parseFloat(this.b11) + parseFloat(this.b11_1)) +
        "m"
      );
    },
    get_a_2_1() {
      return (
        this.b20 +
        "m×" +
        this.b21 +
        "m×" +
        (parseFloat(this.b19) + parseFloat(this.b19_1)) +
        "m"
      );
    },
    get_a_3_1() {
      return "φ" + this.b31 + "m×" + this.b34 + "m";
    },
    get_a_3_2() {
      return this.b32;
    },
    get_a_4_1() {
      return (
        this.b49 +
        "m×" +
        this.b50 +
        "m×" +
        (parseFloat(this.b48) + parseFloat(this.b48_1)) +
        "m"
      );
    },
    get_b_1_1() {
      return "P=" + this.b14 + "kW";
    },
    get_b_2_1() {
      return "流量Q=" + this.b17 + "m3/h，扬程H=" + this.b17_1 + "m";
    },
    get_b_2_2() {
      return parseFloat(this.b15) + parseFloat(this.b16);
    },
    get_b_2_3() {
      return this.b15 + "用" + this.b16 + "备";
    },
    get_b_2_4() {
      return this.b15;
    },
    get_b_3_1() {
      return "P=" + this.b22 + "kW";
    },
    get_b_4_1() {
      return "流量Q=" + this.b25 + "m3/h，扬程H=" + this.b25_1 + "m";
    },
    get_b_4_2() {
      return parseFloat(this.b23) + parseFloat(this.b24);
    },
    get_b_4_3() {
      return this.b23 + "用" + this.b24 + "备";
    },
    get_b_4_4() {
      return this.b23;
    },
    get_b_5_1() {
      return "φ=" + this.b31 + "m";
    },
    get_b_5_2() {
      return this.b32;
    },
    get_b_6_1() {
      return "P=" + this.b51 + "kW";
    },
    get_b_7_1() {
      return "流量Q=" + this.b66 + "m3/h，扬程H=" + this.b66_1 + "m";
    },
    get_b_7_2() {
      return parseFloat(this.b64) + parseFloat(this.b65);
    },
    get_b_7_3() {
      return this.b64 + "用" + this.b65 + "备";
    },
    get_b_7_4() {
      return this.b64;
    },
    get_b_8_1() {
      return "生产能力>" + this.b63_1 + "m3/h";
    },
    get_b_8_2() {
      return parseFloat(this.b61) + parseFloat(this.b62);
    },
    get_b_8_3() {
      return this.b61 + "用" + this.b62 + "备";
    },
    get_b_8_4() {
      return this.b61;
    },
    get_b_9_1() {
      return "流量Q=" + this.b78 + "m3/h，扬程H=" + this.b78_1 + "m";
    },
    get_b_9_2() {
      return parseFloat(this.b76) + parseFloat(this.b77);
    },
    get_b_9_3() {
      return this.b76 + "用" + this.b77 + "备";
    },
    get_b_9_4() {
      return this.b76;
    },
    get_b_10_1() {
      return "过滤面积>" + this.b75 + "m2，过滤压力=" + this.b69 + "MPa";
    },
    get_b_10_2() {
      return parseFloat(this.b70) + parseFloat(this.b71);
    },
    get_b_10_3() {
      return this.b70 + "用" + this.b71 + "备";
    },
    get_b_10_4() {
      return this.b70;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3() {
      return parseFloat(this.b1) * (parseFloat(this.b2) / 100 + 1);
    },
    b3_1() {
      return (
        parseFloat(this.b4) +
        0.2 * parseFloat(this.b6) +
        1.53 * parseFloat(this.b7) +
        1.9 * parseFloat(this.b8)
      ).toFixed(2);
    },
    b4_1() {
      return (
        parseFloat(this.b9) * parseFloat(this.b5) +
        0.2 * parseFloat(this.b6) +
        1.53 * parseFloat(this.b7) +
        1.9 * parseFloat(this.b8)
      ).toFixed(2);
    },
    b5_1() {
      return ((parseFloat(this.b3) * parseFloat(this.b3_1)) / 1000000).toFixed(
        5
      );
    },
    b5_2() {
      return (parseFloat(this.b5_1) * 1000).toFixed(2);
    },
    b6_1() {
      return ((parseFloat(this.b3) * parseFloat(this.b4_1)) / 1000000).toFixed(
        5
      );
    },
    b6_2() {
      return (parseFloat(this.b6_1) * 1000).toFixed(2);
    },
    b6_3() {
      if (parseFloat(this.b5_2) > parseFloat(this.b6_2)) {
        storeValueInLocalStorage("sludgeData", this.b5_2);
        return parseFloat(this.b5_2);
      } else {
        storeValueInLocalStorage("sludgeData", this.b6_2);
        return parseFloat(this.b6_2);
      }
    },
    b7_1() {
      return (parseFloat(this.b5_1) / (1 - 0.6)).toFixed(6);
    },
    b8_1() {
      return (parseFloat(this.b6_1) / (1 - 0.6)).toFixed(6);
    },
    b9_1() {
      return (
        parseFloat(this.b6_3) /
        (1 - parseFloat(this.b9_2) / 100) /
        1000
      ).toFixed(2);
    },
    b9_1_u() {
      if (parseFloat(this.b6_3) === parseFloat(this.b6_2)) {
        return "以浊度计算";
      } else {
        return "以SS计算";
      }
    },
    b13() {
      return this.ROUND(
        parseFloat(this.b10) / parseFloat(this.b11) / parseFloat(this.b12),
        2
      );
    },
    b14() {
      return ((parseFloat(this.b10) * parseFloat(this.b14_1)) / 1000).toFixed(
        2
      );
    },
    b15() {
      return this.b23;
    },
    b16() {
      if (this.ROUND(parseFloat(this.b15) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b15) / 3, 0);
      }
    },
    b17() {
      return this.ROUND(parseFloat(this.b10) / parseFloat(this.b15) / 24, 2);
    },
    b17_1() {
      return this.ROUND(
        parseFloat(this.b11_1) +
          parseFloat(this.b11_2) +
          parseFloat(this.b11) +
          2,
        0
      );
    },
    b21() {
      return this.ROUND(
        parseFloat(this.b18) / parseFloat(this.b19) / parseFloat(this.b20),
        2
      );
    },
    b22() {
      return ((parseFloat(this.b18) * parseFloat(this.b22_1)) / 1000).toFixed(
        2
      );
    },
    b23() {
      return this.b32;
    },
    b24() {
      if (this.ROUND(parseFloat(this.b23) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b23) / 3, 0);
      }
    },
    b25() {
      return this.ROUND(parseFloat(this.b18) / parseFloat(this.b23) / 24, 2);
    },
    b25_1() {
      return this.ROUND(
        parseFloat(this.b34) +
          parseFloat(this.b19_1) +
          parseFloat(this.b19) +
          2,
        0
      );
    },
    b26() {
      return this.b9_2;
    },
    b28() {
      return ((1 - parseFloat(this.b9_2) / 100) * 1000).toFixed(2);
    },
    b30() {
      return (
        (parseFloat(this.b9_1) * parseFloat(this.b28)) /
        parseFloat(this.b29)
      ).toFixed(2);
    },
    b31() {
      return Math.ceil(Math.pow((4 * parseFloat(this.b33)) / 3.14, 0.5), 1);
    },
    b33() {
      return this.ROUND(parseFloat(this.b30) / parseFloat(this.b32), 0);
    },
    b34() {
      return this.ROUND(
        parseFloat(this.b35) +
          parseFloat(this.b36) +
          parseFloat(this.b38) +
          parseFloat(this.b42) +
          parseFloat(this.b43),
        2
      );
    },
    b36() {
      return (
        (parseFloat(this.b9_1) * parseFloat(this.b37)) /
        24 /
        parseFloat(this.b30)
      ).toFixed(2);
    },
    b42() {
      return (
        (parseFloat(this.b39) * (parseFloat(this.b31) - parseFloat(this.b41))) /
        2
      ).toFixed(2);
    },
    b43() {
      return (
        (Math.tan(parseFloat(this.b44) * (Math.PI / 180)) *
          (parseFloat(this.b41) - parseFloat(this.b40))) /
        2
      ).toFixed(2);
    },
    b45() {
      return (
        (parseFloat(this.b9_1) * (1 - parseFloat(this.b9_2) / 100)) /
        (1 - parseFloat(this.b27) / 100)
      ).toFixed(2);
    },
    b50() {
      return (
        parseFloat(this.b47) /
        parseFloat(this.b48) /
        parseFloat(this.b49)
      ).toFixed(2);
    },
    b51() {
      return ((parseFloat(this.b47) * parseFloat(this.b51_1)) / 1000).toFixed(
        2
      );
    },
    b53() {
      return (
        parseFloat(this.b9_1) *
        1000 *
        (1 - parseFloat(this.b9_2) / 100)
      ).toFixed(2);
    },
    b54() {
      return this.b27;
    },
    b55() {
      return (
        parseFloat(this.b53) /
        (1 - parseFloat(this.b54) / 100) /
        1000
      ).toFixed(3);
    },
    b57() {
      return (
        parseFloat(this.b53) /
        (1 - parseFloat(this.b56) / 100) /
        1000
      ).toFixed(2);
    },
    b60() {
      return (parseFloat(this.b57) / parseFloat(this.b59)).toFixed(2);
    },
    b62() {
      if (this.ROUND(parseFloat(this.b61) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b61) / 3, 0);
      }
    },
    b63() {
      return (parseFloat(this.b60) / parseFloat(this.b61)).toFixed(2);
    },
    b64() {
      return this.b61;
    },
    b65() {
      if (this.ROUND(parseFloat(this.b64) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b64) / 3, 0);
      }
    },
    b66() {
      return (
        parseFloat(this.b47) /
        parseFloat(this.b61) /
        parseFloat(this.b59)
      ).toFixed(2);
    },
    b66_1() {
      return this.ROUND(
        parseFloat(this.b58) * 100 +
          parseFloat(this.b48_1) +
          parseFloat(this.b48) +
          2,
        0
      );
    },
    b68() {
      return (
        parseFloat(this.b53) /
        (1 - parseFloat(this.b67) / 100) /
        1000
      ).toFixed(2);
    },
    b71() {
      if (this.ROUND(parseFloat(this.b70) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b70) / 3, 0);
      }
    },
    b75() {
      return this.ROUND(
        (parseFloat(this.b68) /
          parseFloat(this.b70) /
          parseFloat(this.b72) /
          parseFloat(this.b73)) *
          1000 *
          parseFloat(this.b74) *
          2,
        0
      );
    },
    b77() {
      if (this.ROUND(parseFloat(this.b76) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b76) / 3, 0);
      }
    },
    b78() {
      return (
        parseFloat(this.b47) /
        parseFloat(this.b76) /
        parseFloat(this.b72_1)
      ).toFixed(2);
    },
    b78_1() {
      return this.ROUND(
        parseFloat(this.b69) * 100 +
          parseFloat(this.b48_1) +
          parseFloat(this.b48) +
          2,
        0
      );
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "排泥池",
          尺寸: this.get_a_1_1(),
          标高: "",
          单位: "座",
          数量: "1",
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
        {
          序号: "2",
          单体位号: "",
          名称: "排泥池",
          尺寸: this.get_a_2_1(),
          标高: "",
          单位: "座",
          数量: "1",
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
        {
          序号: "3",
          单体位号: "",
          名称: "污泥浓缩池",
          尺寸: this.get_a_3_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_3_2(),
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
        {
          序号: "4",
          单体位号: "",
          名称: "污泥平衡池",
          尺寸: this.get_a_4_1(),
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
          设备工艺名称: "排水池搅拌机",
          设备类型: this.get_b_1_1(),
          规格及型号: "",
          单位: "台",
          数量: "1",
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: "1",
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "排水池提升泵",
          设备类型: this.get_b_2_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_2_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_2_3(),
          运行数量: this.get_b_2_4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "排泥池搅拌机",
          设备类型: this.get_b_3_1(),
          规格及型号: "",
          单位: "台",
          数量: "1",
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: "1",
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "排泥池提升泵",
          设备类型: this.get_b_4_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_4_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_4_3(),
          运行数量: this.get_b_4_4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "污泥浓缩机",
          设备类型: this.get_b_5_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_5_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_5_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "6",
          设备位号: "",
          设备工艺名称: "污泥平衡池搅拌机",
          设备类型: this.get_b_6_1(),
          规格及型号: "",
          单位: "台",
          数量: "1",
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: "1",
          单台功率: "",
          用电量: "",
        },
        {
          序号: "7",
          设备位号: "",
          设备工艺名称: "离心脱水机进泥泵",
          设备类型: this.get_b_7_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_7_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_7_3(),
          运行数量: this.get_b_7_4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "8",
          设备位号: "",
          设备工艺名称: "离心脱水机",
          设备类型: this.get_b_8_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_8_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_8_3(),
          运行数量: this.get_b_8_4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "9",
          设备位号: "",
          设备工艺名称: "板框进泥泵",
          设备类型: this.get_b_9_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_9_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_9_3(),
          运行数量: this.get_b_9_4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "10",
          设备位号: "",
          设备工艺名称: "板框脱水机",
          设备类型: this.get_b_10_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_10_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_10_3(),
          运行数量: this.get_b_10_4(),
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
    console.log("9001-activated被调用了");
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
        名称: "排泥池",
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: "1",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
      {
        序号: "2",
        单体位号: "",
        名称: "排泥池",
        尺寸: this.get_a_2_1(),
        标高: "",
        单位: "座",
        数量: "1",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
      {
        序号: "3",
        单体位号: "",
        名称: "污泥浓缩池",
        尺寸: this.get_a_3_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_3_2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
      {
        序号: "4",
        单体位号: "",
        名称: "污泥平衡池",
        尺寸: this.get_a_4_1(),
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
        设备工艺名称: "排水池搅拌机",
        设备类型: this.get_b_1_1(),
        规格及型号: "",
        单位: "台",
        数量: "1",
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: "1",
        单台功率: "",
        用电量: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "排水池提升泵",
        设备类型: this.get_b_2_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_2_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_2_3(),
        运行数量: this.get_b_2_4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "排泥池搅拌机",
        设备类型: this.get_b_3_1(),
        规格及型号: "",
        单位: "台",
        数量: "1",
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: "1",
        单台功率: "",
        用电量: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "排泥池提升泵",
        设备类型: this.get_b_4_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_4_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_4_3(),
        运行数量: this.get_b_4_4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "污泥浓缩机",
        设备类型: this.get_b_5_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_5_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_5_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "6",
        设备位号: "",
        设备工艺名称: "污泥平衡池搅拌机",
        设备类型: this.get_b_6_1(),
        规格及型号: "",
        单位: "台",
        数量: "1",
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: "1",
        单台功率: "",
        用电量: "",
      },
      {
        序号: "7",
        设备位号: "",
        设备工艺名称: "离心脱水机进泥泵",
        设备类型: this.get_b_7_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_7_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_7_3(),
        运行数量: this.get_b_7_4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "8",
        设备位号: "",
        设备工艺名称: "离心脱水机",
        设备类型: this.get_b_8_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_8_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_8_3(),
        运行数量: this.get_b_8_4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "9",
        设备位号: "",
        设备工艺名称: "板框进泥泵",
        设备类型: this.get_b_9_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_9_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_9_3(),
        运行数量: this.get_b_9_4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "10",
        设备位号: "",
        设备工艺名称: "板框脱水机",
        设备类型: this.get_b_10_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_10_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_10_3(),
        运行数量: this.get_b_10_4(),
        单台功率: "",
        用电量: "",
      },
    ];
    this.data3 = [];
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
