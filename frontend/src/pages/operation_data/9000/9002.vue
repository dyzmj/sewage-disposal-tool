<template>
  <div></div>
  </template>

<script>
import { mapState } from "vuex";
import {
  exportExcel3,
  exportWord,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_9002"),
  data() {
    return {
      modelVisible: false,
      b1: "347.13",
      b2: "97",
      b6_1: "1",
      b8: "0.5",
      b9: "100",
      b10: "1",
      b11_1: "0.80",
      b12: "970",
      b12_1: "1230",
      b12_2: "1",
      b13: "600",
      b14: "200",
      b14_2: "90",
      b16: "1",
      b17: "2",
      b19: "0.5",
      b20: "1000",
      b21: "2",
      b24: "0.75",
      b25: "0.6",
      b27: "JBJ1-600",
      b27_1: "1",
      b28: "0.55",
      b30: "8.00",
      b31: "1",
      b31_1: "1",
      b34: "3",
      b34_1: "0.5",
      b36: "2",
      b36_1: "1",
      b38_1: "0.1",
      b38_2: "0.07",
      b38_3: "0.14",
      b39: "2",
      b40: "0.8",
      b42_1: "7",
      b43_1: "0.1",
      b44: "40",
      b45: "100",
      b46: "1",
      b47_1: "0.80",
      b48: "970",
      b48_1: "1230",
      b48_2: "1",
      b49: "600",
      b50: "200",
      b50_2: "90",
      b52: "1",
      b53: "2",
      b55: "0.5",
      b56: "1000",
      b57: "2",
      b60: "0.75",
      b61: "0.6",
      b63: "JBJ1-600",
      b63_1: "1",
      b64: "0.55",
      b67: "2",
      b67_1: "1",
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
        exportExcel3(allData1, allData2, allData3, "脱水加药工程量", this);
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
        key4: this.b6_1,
        key5: this.b7,
        key6: this.b8,
        key7: this.b9,
        key8: this.b10,
        key9: this.b11,
        key10: this.b11_1,
        key11: this.b12,
        key12: this.b12_1,
        key13: this.b12_2,
        key14: this.b13_1,
        key15: this.b14_1,
        key16: this.b14_2,
        key17: this.b15_1,
        key18: this.b16,
        key19: this.b17,
        key20: this.b18,
        key21: this.b19,
        key22: this.b20,
        key23: this.b21,
        key24: this.b22,
        key25: this.b23,
        key26: this.b24,
        key27: this.b25,
        key28: this.b26,
        key29: this.b30,
        key30: this.b31,
        key31: this.b31_1,
        key32: this.b32,
        key33: this.b33,
        key34: this.b34,
        key35: this.b34_1,
        key36: this.b35,
        key37: this.b36,
        key38: this.b36_1,
        key39: this.b37,
        key40: this.b38_1,
        key41: this.b39,
        key42: this.b40,
        key43: this.b41,
        key44: this.b42,
        key45: this.b42_1,
        key46: this.b43_1,
        key47: this.b44,
        key48: this.b45,
        key49: this.b46,
        key50: this.b47,
        key51: this.b47_1,
        key52: this.b48,
        key53: this.b48_1,
        key54: this.b48_2,
        key55: this.b49_1,
        key56: this.b50_1,
        key57: this.b50_2,
        key58: this.b51_1,
        key59: this.b52,
        key60: this.b53,
        key61: this.b54,
        key62: this.b55,
        key63: this.b56,
        key64: this.b57,
        key65: this.b58,
        key66: this.b59,
        key67: this.b60,
        key68: this.b61,
        key69: this.b62,
        key70: this.b65,
        key71: this.b66,
        key72: this.b67,
        key73: this.b67_1,
        key74: this.b68,
      };
      exportWord("脱水加药计算书", "9002.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b1,
        key2: this.b2,
        key3: this.b3,
        key4: this.b6_1,
        key5: this.b7,
        key6: this.b8,
        key7: this.b9,
        key8: this.b10,
        key9: this.b11,
        key10: this.b11_1,
        key11: this.b12,
        key12: this.b12_1,
        key13: this.b12_2,
        key14: this.b13_1,
        key15: this.b14_1,
        key16: this.b14_2,
        key17: this.b15_1,
        key18: this.b16,
        key19: this.b17,
        key20: this.b18,
        key21: this.b19,
        key22: this.b20,
        key23: this.b21,
        key24: this.b22,
        key25: this.b23,
        key26: this.b24,
        key27: this.b25,
        key28: this.b26,
        key29: this.b30,
        key30: this.b31,
        key31: this.b31_1,
        key32: this.b32,
        key33: this.b33,
        key34: this.b34,
        key35: this.b34_1,
        key36: this.b35,
        key37: this.b36,
        key38: this.b36_1,
        key39: this.b37,
        key40: this.b38_1,
        key41: this.b39,
        key42: this.b40,
        key43: this.b41,
        key44: this.b42,
        key45: this.b42_1,
        key46: this.b43_1,
        key47: this.b44,
        key48: this.b45,
        key49: this.b46,
        key50: this.b47,
        key51: this.b47_1,
        key52: this.b48,
        key53: this.b48_1,
        key54: this.b48_2,
        key55: this.b49_1,
        key56: this.b50_1,
        key57: this.b50_2,
        key58: this.b51_1,
        key59: this.b52,
        key60: this.b53,
        key61: this.b54,
        key62: this.b55,
        key63: this.b56,
        key64: this.b57,
        key65: this.b58,
        key66: this.b59,
        key67: this.b60,
        key68: this.b61,
        key69: this.b62,
        key70: this.b65,
        key71: this.b66,
        key72: this.b67,
        key73: this.b67_1,
        key74: this.b68,
      };
      initWordStorage("9002.docx", data);
      this.handleExcelCache("9002.xlsx", "脱水加药工程量");
    },
    handleExcelCache(path, name) {
      console.info("开始触发9002 工程量缓存刷新");
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
    get_a_1() {
      return parseFloat(this.b31) + parseFloat(this.b31_1);
    },
    get_a_2() {
      return parseFloat(this.b31) + parseFloat(this.b31_1);
    },
    get_b_1_1() {
      return "φ" + this.b12 + "mm×" + this.b12_1 + "mm";
    },
    get_b_1_2() {
      return parseFloat(this.b12_2);
    },
    get_b_2_1() {
      return "φ" + this.b48 + "mm×" + this.b48_1 + "mm";
    },
    get_b_2_2() {
      return parseFloat(this.b48_2);
    },
    get_c_1_1() {
      return this.b27;
    },
    get_c_1_2() {
      return this.get_b_2_2();
    },
    get_c_2_1() {
      if (parseFloat(this.b32_1) == 5.5) {
        return "MS1A064A";
      } else if (parseFloat(this.b32_1) == 8) {
        return "MS1A064B";
      } else if (parseFloat(this.b32_1) == 11) {
        return "MS1A064C";
      } else if (parseFloat(this.b32_1) == 20) {
        return "MS1A094A";
      } else if (parseFloat(this.b32_1) == 26) {
        return "MS1A094B";
      } else if (parseFloat(this.b32_1) == 40) {
        return "MS1A094C";
      } else if (parseFloat(this.b32_1) == 60) {
        return "MS1B108A";
      } else if (parseFloat(this.b32_1) == 80) {
        return "MS1B108B";
      } else if (parseFloat(this.b32_1) == 120) {
        return "MS1B108C";
      } else if (parseFloat(this.b32_1) == 155) {
        return "MS1C138A";
      } else if (parseFloat(this.b32_1) == 230) {
        return "MS1C165A";
      } else if (parseFloat(this.b32_1) == 310) {
        return "MS1C138C";
      } else if (parseFloat(this.b32_1) == 330) {
        return "MS1C165B";
      } else if (parseFloat(this.b32_1) == 460) {
        return "MS1C165C";
      } else if (parseFloat(this.b32_1) == 530) {
        return "MS1C165C";
      } else {
        return "MS1C138B";
      }
    },
    get_c_2_2() {
      return parseFloat(this.b31) + parseFloat(this.b31_1);
    },
    get_c_2_3() {
      return parseFloat(this.b31);
    },
    get_c_3_1() {
      return this.get_c_2_2();
    },
    get_c_3_2() {
      return parseFloat(this.b31);
    },
    get_c_4_1() {
      return this.get_c_2_2();
    },
    get_c_4_2() {
      return parseFloat(this.b31);
    },
    get_c_5_1() {
      return this.get_c_2_2();
    },
    get_c_5_2() {
      return parseFloat(this.b31);
    },
    get_c_6_1() {
      return this.get_c_2_2();
    },
    get_c_6_2() {
      return parseFloat(this.b31);
    },
    get_c_7_1() {
      if (parseFloat(this.b37_1) == 5.5) {
        return "MS1A064A";
      } else if (parseFloat(this.b37_1) == 8) {
        return "MS1A064B";
      } else if (parseFloat(this.b37_1) == 11) {
        return "MS1A064C";
      } else if (parseFloat(this.b37_1) == 20) {
        return "MS1A094A";
      } else if (parseFloat(this.b37_1) == 26) {
        return "MS1A094B";
      } else if (parseFloat(this.b37_1) == 40) {
        return "MS1A094C";
      } else if (parseFloat(this.b37_1) == 60) {
        return "MS1B108A";
      } else if (parseFloat(this.b37_1) == 80) {
        return "MS1B108B";
      } else if (parseFloat(this.b37_1) == 120) {
        return "MS1B108C";
      } else if (parseFloat(this.b37_1) == 155) {
        return "MS1C138A";
      } else if (parseFloat(this.b37_1) == 230) {
        return "MS1C165A";
      } else if (parseFloat(this.b37_1) == 310) {
        return "MS1C138C";
      } else if (parseFloat(this.b37_1) == 330) {
        return "MS1C165B";
      } else if (parseFloat(this.b37_1) == 460) {
        return "MS1C165C";
      } else if (parseFloat(this.b37_1) == 530) {
        return "MS1C165C";
      } else {
        return "MS1C138B";
      }
    },
    get_c_7_2() {
      return parseFloat(this.b36) + parseFloat(this.b36_1);
    },
    get_c_7_3() {
      return this.b36 + "用" + this.b36_1 + "备";
    },
    get_c_7_4() {
      return this.b36;
    },
    get_c_8_1() {
      return this.get_c_7_2();
    },
    get_c_8_2() {
      return this.get_c_7_4();
    },
    get_c_9_1() {
      return this.get_c_7_2();
    },
    get_c_9_2() {
      return this.get_c_7_4();
    },
    get_c_10_1() {
      return this.get_c_7_2();
    },
    get_c_10_2() {
      return this.get_c_7_4();
    },
    get_c_11_1() {
      return this.get_c_7_2();
    },
    get_c_11_2() {
      return this.get_c_7_4();
    },
    get_c_12_1() {
      return 1;
    },
    get_c_13_1() {
      return this.b63;
    },
    get_c_13_2() {
      return this.get_b_2_2();
    },
    get_c_14_1() {
      return this.b68 + "L/h";
    },
    get_c_14_2() {
      return parseFloat(this.b67) + parseFloat(this.b67_1);
    },
    get_c_14_3() {
      return this.b67 + "用" + this.b67_1 + "备";
    },
    get_c_14_4() {
      return this.b67;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3() {
      return (
        parseFloat(this.b1) /
        (1 - parseFloat(this.b2) / 100) /
        1000
      ).toFixed(7);
    },
    b7() {
      storeValueInLocalStorage("dehydrationPamData", this.b6_1);
      return ((parseFloat(this.b6_1) * parseFloat(this.b1)) / 1000000).toFixed(
        8
      );
    },
    b11() {
      return (
        (parseFloat(this.b7) * 1000) /
        parseFloat(this.b8) /
        parseFloat(this.b9) /
        parseFloat(this.b10)
      ).toFixed(2);
    },
    b13_1() {
      return (parseFloat(this.b13) / 1000).toFixed(2);
    },
    b14_1() {
      return (parseFloat(this.b14) / 1000).toFixed(2);
    },
    b15() {
      return (parseFloat(this.b13) / 2).toFixed(2);
    },
    b15_1() {
      return (parseFloat(this.b15) / 1000).toFixed(2);
    },
    b17_1() {
      return ((parseFloat(this.b17) * 2) / parseFloat(this.b13_1)).toFixed(2);
    },
    b18() {
      return (
        (parseFloat(this.b17) / Math.PI / parseFloat(this.b13_1)) *
        60
      ).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b16) * parseFloat(this.b21)).toFixed(0);
    },
    b23() {
      return (
        (parseFloat(this.b19) *
          parseFloat(this.b20) *
          Math.pow((parseFloat(this.b17) * 2) / parseFloat(this.b13_1), 3) *
          parseFloat(this.b22) *
          parseFloat(this.b14_1) *
          Math.sin(parseFloat(this.b14_2)) *
          (Math.pow(parseFloat(this.b13_1) / 2, 4) -
            Math.pow(parseFloat(this.b13_1) / 2 - parseFloat(this.b15_1), 4))) /
        408 /
        9.81
      ).toFixed(3);
    },
    b26() {
      return (
        parseFloat(this.b23) /
        parseFloat(this.b24) /
        parseFloat(this.b25)
      ).toFixed(2);
    },
    b32() {
      return (
        (((parseFloat(this.b7) * 1000) /
          parseFloat(this.b30) /
          parseFloat(this.b8) /
          parseFloat(this.b9)) *
          10000) /
        parseFloat(this.b31)
      ).toFixed(2);
    },
    b32_1() {
      if (parseFloat(this.b32) <= 5.5) {
        return 5.5;
      } else if (parseFloat(this.b32) <= 8) {
        return 8;
      } else if (parseFloat(this.b32) <= 11) {
        return 11;
      } else if (parseFloat(this.b32) <= 20) {
        return 20;
      } else if (parseFloat(this.b32) <= 26) {
        return 26;
      } else if (parseFloat(this.b32) / 2 <= 40) {
        return 40;
      } else if (parseFloat(this.b32) / 2 <= 60) {
        return 60;
      } else if (parseFloat(this.b32) / 2 <= 80) {
        return 80;
      } else if (parseFloat(this.b32) / 2 <= 120) {
        return 120;
      } else if (parseFloat(this.b32) / 2 <= 155) {
        return 155;
      } else if (parseFloat(this.b32) / 2 <= 230) {
        return 230;
      } else if (parseFloat(this.b32) / 2 <= 310) {
        return 310;
      } else if (parseFloat(this.b32) / 2 <= 330) {
        return 330;
      } else if (parseFloat(this.b32) / 2 <= 460) {
        return 460;
      } else if (parseFloat(this.b32) / 2 <= 530) {
        return 530;
      } else {
        return 550;
      }
    },
    b37_1() {
      if (parseFloat(this.b37) <= 5.5) {
        return 5.5;
      } else if (parseFloat(this.b37) <= 8) {
        return 8;
      } else if (parseFloat(this.b37) <= 11) {
        return 11;
      } else if (parseFloat(this.b37) <= 20) {
        return 20;
      } else if (parseFloat(this.b37) <= 26) {
        return 26;
      } else if (parseFloat(this.b37) / 2 <= 40) {
        return 40;
      } else if (parseFloat(this.b37) / 2 <= 60) {
        return 60;
      } else if (parseFloat(this.b37) / 2 <= 80) {
        return 80;
      } else if (parseFloat(this.b37) / 2 <= 120) {
        return 120;
      } else if (parseFloat(this.b37) / 2 <= 155) {
        return 155;
      } else if (parseFloat(this.b37) / 2 <= 230) {
        return 230;
      } else if (parseFloat(this.b37) / 2 <= 310) {
        return 310;
      } else if (parseFloat(this.b37) / 2 <= 330) {
        return 330;
      } else if (parseFloat(this.b37) / 2 <= 460) {
        return 460;
      } else if (parseFloat(this.b37) / 2 <= 530) {
        return 530;
      } else {
        return 550;
      }
    },
    b33() {
      return (
        (parseFloat(this.b3) * parseFloat(this.b7)) /
        parseFloat(this.b9 / 100) /
        1000
      ).toFixed(8);
    },
    b35() {
      return (parseFloat(this.b34) * parseFloat(this.b34_1)).toFixed(2);
    },
    b37() {
      return (
        (parseFloat(this.b3) * parseFloat(this.b7)) /
        (parseFloat(this.b8) / 100) /
        1000 /
        parseFloat(this.b35) /
        parseFloat(this.b36)
      ).toFixed(8);
    },
    b41() {
      return ((parseFloat(this.b38_1) * 1000) / parseFloat(this.b35)).toFixed(
        8
      );
    },
    b42() {
      return (
        (parseFloat(this.b38_1) * parseFloat(this.b39)) /
        parseFloat(this.b40)
      ).toFixed(2);
    },
    b43_2() {
      return ((parseFloat(this.b1) * 0.1) / 1000).toFixed(2);
    },
    b43_3() {
      return ((parseFloat(this.b1) * 0.3) / 1000).toFixed(2);
    },
    b47() {
      return (
        (parseFloat(this.b43_1) * 1000) /
        parseFloat(this.b44) /
        parseFloat(this.b45) /
        parseFloat(this.b46)
      ).toFixed(2);
    },
    b49_1() {
      return (parseFloat(this.b49) / 1000).toFixed(2);
    },
    b50_1() {
      return (parseFloat(this.b50) / 1000).toFixed(2);
    },
    b51() {
      return (parseFloat(this.b49) / 2).toFixed(2);
    },
    b51_1() {
      return (parseFloat(this.b51) / 1000).toFixed(2);
    },
    b53_1() {
      return ((parseFloat(this.b53) * 2) / parseFloat(this.b49_1)).toFixed(2);
    },
    b54() {
      return (
        (parseFloat(this.b53) / Math.PI / parseFloat(this.b49_1)) *
        60
      ).toFixed(2);
    },
    b58() {
      return (parseFloat(this.b52) * parseFloat(this.b57)).toFixed(0);
    },
    b59() {
      return (
        (parseFloat(this.b55) *
          parseFloat(this.b56) *
          Math.pow(parseFloat(this.b53_1), 3) *
          parseFloat(this.b58) *
          parseFloat(this.b50_1) *
          Math.sin(parseFloat(this.b50_2)) *
          (Math.pow(parseFloat(this.b49_1) / 2, 4) -
            Math.pow(parseFloat(this.b49_1) / 2 - parseFloat(this.b51_1), 4))) /
        408 /
        9.81
      ).toFixed(2);
    },
    b62() {
      return (
        parseFloat(this.b59) /
        parseFloat(this.b60) /
        parseFloat(this.b61)
      ).toFixed(2);
    },
    b65() {
      return (parseFloat(this.b43_1) * 1000).toFixed(2);
    },
    b66() {
      return this.b35;
    },
    b68() {
      return (
        (((parseFloat(this.b43_1) * 1000) /
          parseFloat(this.b66) /
          parseFloat(this.b44) /
          parseFloat(this.b45)) *
          10000) /
        parseFloat(this.b67)
      ).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "PAM溶液池",
          尺寸: this.get_b_1_1(),
          标高: "",
          单位: "个",
          数量: this.get_b_1_2(),
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
        {
          序号: "2",
          单体位号: "",
          名称: "铁盐溶液池",
          尺寸: this.get_b_2_1(),
          标高: "",
          单位: "个",
          数量: this.get_b_2_2(),
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
          设备工艺名称: "PAM搅拌设备",
          设备类型: "折浆式搅拌机",
          规格及型号: this.get_c_1_1(),
          单位: "台",
          数量: this.get_c_1_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_c_1_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "离心脱水机计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_c_2_1(),
          单位: "台",
          数量: this.get_c_2_2(),
          运行时间: "",
          主要材质: "PC泵头",
          备注: "1用1备",
          运行数量: this.get_c_2_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "液压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_c_3_1(),
          运行时间: "",
          主要材质: "",
          备注: "1用1备",
          运行数量: this.get_c_3_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "背压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_c_4_1(),
          运行时间: "",
          主要材质: "",
          备注: "1用1备",
          运行数量: this.get_c_4_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "脉冲阻尼器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_c_5_1(),
          运行时间: "",
          主要材质: "",
          备注: "1用1备",
          运行数量: this.get_c_5_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "6",
          设备位号: "",
          设备工艺名称: "Y型过滤器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          备注: "1用1备",
          数量: this.get_c_6_1(),
          运行数量: this.get_c_6_2(),
          单台功率: "1用1备",
          用电量: "",
        },
        {
          序号: "7",
          设备位号: "",
          设备工艺名称: "板框脱水机计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_c_7_1(),
          单位: "台",
          数量: this.get_c_7_2(),
          运行时间: "",
          主要材质: "PC泵头",
          备注: this.get_c_7_3(),
          运行数量: this.get_c_7_4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "8",
          设备位号: "",
          设备工艺名称: "液压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_c_8_1(),
          运行时间: "",
          主要材质: "",
          备注: this.get_c_7_3(),
          运行数量: this.get_c_8_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "9",
          设备位号: "",
          设备工艺名称: "背压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_c_9_1(),
          运行时间: "",
          主要材质: "",
          备注: this.get_c_7_3(),
          运行数量: this.get_c_9_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "10",
          设备位号: "",
          设备工艺名称: "脉冲阻尼器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_c_10_1(),
          运行时间: "",
          主要材质: "",
          备注: this.get_c_7_3(),
          运行数量: this.get_c_10_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "11",
          设备位号: "",
          设备工艺名称: "Y型过滤器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_c_11_1(),
          运行时间: "",
          主要材质: "",
          备注: this.get_c_7_3(),
          运行数量: this.get_c_11_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "12",
          设备位号: "",
          设备工艺名称: "板框脱水机石灰料仓",
          设备类型: "石灰投加系统",
          规格及型号: "",
          单位: "套",
          数量: this.get_c_12_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_c_12_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "13",
          设备位号: "",
          设备工艺名称: "铁盐搅拌设备",
          设备类型: "折浆式搅拌机",
          规格及型号: this.get_c_13_1(),
          单位: "台",
          数量: this.get_c_13_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_c_13_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "14",
          设备位号: "",
          设备工艺名称: "铁盐加药泵",
          设备类型: "离心泵",
          规格及型号: this.get_c_14_1(),
          单位: "台",
          数量: this.get_c_14_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_c_14_3(),
          运行数量: this.get_c_14_4(),
          单台功率: "",
          用电量: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "",
          仪表名称: "压力表",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_1(),
          a: "",
          b: "",
          备注: "",
        },
        {
          序号: "1",
          仪表位号: "",
          仪表名称: "流量计",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_2(),
          a: "",
          b: "",
          备注: "",
        },
      ];
    },
  },
  activated() {
    console.log("9002-activated被调用了");
    this.refreshInitData();
  },
  created() {
    this.data1 = [
      {
        序号: "1",
        单体位号: "",
        名称: "PAM溶液池",
        尺寸: this.get_b_1_1(),
        标高: "",
        单位: "个",
        数量: this.get_b_1_2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
      {
        序号: "2",
        单体位号: "",
        名称: "铁盐溶液池",
        尺寸: this.get_b_2_1(),
        标高: "",
        单位: "个",
        数量: this.get_b_2_2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "PAM搅拌设备",
        设备类型: "折浆式搅拌机",
        规格及型号: this.get_c_1_1(),
        单位: "台",
        数量: this.get_c_1_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_c_1_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "离心脱水机计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_c_2_1(),
        单位: "台",
        数量: this.get_c_2_2(),
        运行时间: "",
        主要材质: "PC泵头",
        备注: "1用1备",
        运行数量: this.get_c_2_3(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_c_3_1(),
        运行时间: "",
        主要材质: "",
        备注: "1用1备",
        运行数量: this.get_c_3_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_c_4_1(),
        运行时间: "",
        主要材质: "",
        备注: "1用1备",
        运行数量: this.get_c_4_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_c_5_1(),
        运行时间: "",
        主要材质: "",
        备注: "1用1备",
        运行数量: this.get_c_5_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "6",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        备注: "1用1备",
        数量: this.get_c_6_1(),
        运行数量: this.get_c_6_2(),
        单台功率: "1用1备",
        用电量: "",
      },
      {
        序号: "7",
        设备位号: "",
        设备工艺名称: "板框脱水机计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_c_7_1(),
        单位: "台",
        数量: this.get_c_7_2(),
        运行时间: "",
        主要材质: "PC泵头",
        备注: this.get_c_7_3(),
        运行数量: this.get_c_7_4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "8",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_c_8_1(),
        运行时间: "",
        主要材质: "",
        备注: this.get_c_7_3(),
        运行数量: this.get_c_8_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "9",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_c_9_1(),
        运行时间: "",
        主要材质: "",
        备注: this.get_c_7_3(),
        运行数量: this.get_c_9_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "10",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_c_10_1(),
        运行时间: "",
        主要材质: "",
        备注: this.get_c_7_3(),
        运行数量: this.get_c_10_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "11",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_c_11_1(),
        运行时间: "",
        主要材质: "",
        备注: this.get_c_7_3(),
        运行数量: this.get_c_11_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "12",
        设备位号: "",
        设备工艺名称: "板框脱水机石灰料仓",
        设备类型: "石灰投加系统",
        规格及型号: "",
        单位: "套",
        数量: this.get_c_12_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_c_12_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "13",
        设备位号: "",
        设备工艺名称: "铁盐搅拌设备",
        设备类型: "折浆式搅拌机",
        规格及型号: this.get_c_13_1(),
        单位: "台",
        数量: this.get_c_13_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_c_13_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "14",
        设备位号: "",
        设备工艺名称: "铁盐加药泵",
        设备类型: "离心泵",
        规格及型号: this.get_c_14_1(),
        单位: "台",
        数量: this.get_c_14_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_c_14_3(),
        运行数量: this.get_c_14_4(),
        单台功率: "",
        用电量: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "压力表",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_1(),
        a: "",
        b: "",
        备注: "",
      },
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_2(),
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
