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
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3004"),
  data() {
    return {
      modelVisible: false,
      b3: "5250",
      b4: "1.2",
      b4_1: "100",
      b5: "4",
      b5_1: "5",
      b6: "",
      b7: "",
      b9: "0.05",
      b11_1: "0.05",
      b15: "0.3",
      b17_1: "0.05",
      b20_1: "0.001",
      b24_1: "14",
      b26: "0.5",
      b26_1: "2.6",
      b32_1: "0.05",
      b36: "0.6",
      b37: "50",
      b40: "60",
      b45: "0.25",
      b47: "0.4",
      b48_1: "2",
      b54_1: "150",
      b55_1: "0.1",
      b61_1: "1:1.6:7.2",
      b63: "300",
      b65: "200",
      b69: "7.8",
      b70: "1.5",
      b72_1: "0.3",
      b75: "0.45",
      b76: "0.05",
      b78: "25",
      b81_1: "0.25",
      b84: "0.7",
      b84_1: "0.22",
      b85_1: "0.6",
      b87: "15",
      b88: "2500",
      b92: "100",
      b93: "",
      b94: "",
      b95: "",
      b96: "0.7",
      b97_1: "2.00",
      b98: "1.2",
      b100: "0.05",
      b102: "1.8",
      b104: "3",
      b105_1: "0.15",
      b107: "1",
      b108_1: "2.00",
      b111: "6",
      b114: "1010",
      b115: "0.6",
      b118: "0.3",
      b120_1: "1.00",
      b124: "0.48",
      b125_1: "1.50",
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
              title: "安装位置",
              dataIndex: "安装位置",
              key: "3",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "安装位置" },
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "4",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "仪表名称" },
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
              title: "备注",
              dataIndex: "备注",
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "备注" },
            },
            {
              title: "生产厂家",
              dataIndex: "生产厂家",
              key: "9",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "生产厂家" },
            },
            {
              title: "-",
              dataIndex: "-",
              key: "10",
              width: "50px",
              align: "center",
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
        exportExcel3(
          allData1,
          allData2,
          allData3,
          "机械搅拌澄清池工程量",
          this
        );
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
        key2: this.b3_1,
        key3: this.b3_2,
        key4: this.b3_3,
        key5: this.b4,
        key6: this.b4_1,
        key7: this.b5,
        key8: this.b5_1,
        key9: this.b8,
        key10: this.b8_1,
        key11: this.b9,
        key12: this.b10,
        key13: this.b11,
        key14: this.b11_1,
        key15: this.b12,
        key16: this.b14,
        key17: this.b15,
        key18: this.b16,
        key19: this.b17,
        key20: this.b17_1,
        key21: this.b18,
        key22: this.b20,
        key23: this.b20_1,
        key24: this.b22,
        key25: this.b23,
        key26: this.b24,
        key27: this.b24_1,
        key28: this.b25,
        key29: this.b26,
        key30: this.b26_1,
        key31: this.b27,
        key32: this.b28,
        key33: this.b29,
        key34: this.b31,
        key35: this.b32,
        key36: this.b32_1,
        key37: this.b33,
        key38: this.b34,
        key39: this.b36,
        key40: this.b37,
        key41: this.b37_1,
        key42: this.b38,
        key43: this.b39,
        key44: this.b40,
        key45: this.b40_1,
        key46: this.b41,
        key47: this.b42,
        key48: this.b43,
        key49: this.b45,
        key50: this.b46,
        key51: this.b47,
        key52: this.b48,
        key53: this.b48_1,
        key54: this.b50,
        key55: this.b51,
        key56: this.b52,
        key57: this.b54,
        key58: this.b54_1,
        key59: this.b54_2,
        key60: this.b55,
        key61: this.b55_1,
        key62: this.b57,
        key63: this.b58,
        key64: this.b59,
        key65: this.b60,
        key66: this.b61,
        key67: this.b61_1,
        key68: this.b63,
        key69: this.b63_1,
        key70: this.b64,
        key71: this.b65,
        key72: this.b65_1,
        key73: this.b68,
        key74: this.b69,
        key75: this.b70,
        key76: this.b71,
        key77: this.b72,
        key78: this.b72_1,
        key79: this.b73,
        key80: this.b74,
        key81: this.b75,
        key82: this.b76,
        key83: this.b77,
        key84: this.b78,
        key85: this.b78_1,
        key86: this.b79,
        key87: this.b79_1,
        key88: this.b81,
        key89: this.b81_1,
        key90: this.b83,
        key91: this.b84,
        key92: this.b84_1,
        key93: this.b85,
        key94: this.b85_1,
        key95: this.b87,
        key96: this.b87_1,
        key97: this.b88,
        key98: this.b89,
        key99: this.b91,
        key100: this.b92,
        key101: this.b96,
        key102: this.b97,
        key103: this.b97_1,
        key104: this.b98,
        key105: this.b99,
        key106: this.b100,
        key107: this.b101,
        key108: this.b102,
        key109: this.b103,
        key110: this.b104,
        key111: this.b105,
        key112: this.b105_1,
        key113: this.b107,
        key114: this.b108,
        key115: this.b108_1,
        key116: this.b109,
        key117: this.b110,
        key118: this.b111,
        key119: this.b114,
        key120: this.b115,
        key121: this.b116,
        key122: this.b118,
        key123: this.b119,
        key124: this.b120,
        key125: this.b120_1,
        key126: this.b121,
        key127: this.b123,
        key128: this.b124,
        key129: this.b125,
        key130: this.b125_1,
      };
      exportWord("机械搅拌澄清池计算书", "3004.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b3_1,
        key3: this.b3_2,
        key4: this.b3_3,
        key5: this.b4,
        key6: this.b4_1,
        key7: this.b5,
        key8: this.b5_1,
        key9: this.b8,
        key10: this.b8_1,
        key11: this.b9,
        key12: this.b10,
        key13: this.b11,
        key14: this.b11_1,
        key15: this.b12,
        key16: this.b14,
        key17: this.b15,
        key18: this.b16,
        key19: this.b17,
        key20: this.b17_1,
        key21: this.b18,
        key22: this.b20,
        key23: this.b20_1,
        key24: this.b22,
        key25: this.b23,
        key26: this.b24,
        key27: this.b24_1,
        key28: this.b25,
        key29: this.b26,
        key30: this.b26_1,
        key31: this.b27,
        key32: this.b28,
        key33: this.b29,
        key34: this.b31,
        key35: this.b32,
        key36: this.b32_1,
        key37: this.b33,
        key38: this.b34,
        key39: this.b36,
        key40: this.b37,
        key41: this.b37_1,
        key42: this.b38,
        key43: this.b39,
        key44: this.b40,
        key45: this.b40_1,
        key46: this.b41,
        key47: this.b42,
        key48: this.b43,
        key49: this.b45,
        key50: this.b46,
        key51: this.b47,
        key52: this.b48,
        key53: this.b48_1,
        key54: this.b50,
        key55: this.b51,
        key56: this.b52,
        key57: this.b54,
        key58: this.b54_1,
        key59: this.b54_2,
        key60: this.b55,
        key61: this.b55_1,
        key62: this.b57,
        key63: this.b58,
        key64: this.b59,
        key65: this.b60,
        key66: this.b61,
        key67: this.b61_1,
        key68: this.b63,
        key69: this.b63_1,
        key70: this.b64,
        key71: this.b65,
        key72: this.b65_1,
        key73: this.b68,
        key74: this.b69,
        key75: this.b70,
        key76: this.b71,
        key77: this.b72,
        key78: this.b72_1,
        key79: this.b73,
        key80: this.b74,
        key81: this.b75,
        key82: this.b76,
        key83: this.b77,
        key84: this.b78,
        key85: this.b78_1,
        key86: this.b79,
        key87: this.b79_1,
        key88: this.b81,
        key89: this.b81_1,
        key90: this.b83,
        key91: this.b84,
        key92: this.b84_1,
        key93: this.b85,
        key94: this.b85_1,
        key95: this.b87,
        key96: this.b87_1,
        key97: this.b88,
        key98: this.b89,
        key99: this.b91,
        key100: this.b92,
        key101: this.b96,
        key102: this.b97,
        key103: this.b97_1,
        key104: this.b98,
        key105: this.b99,
        key106: this.b100,
        key107: this.b101,
        key108: this.b102,
        key109: this.b103,
        key110: this.b104,
        key111: this.b105,
        key112: this.b105_1,
        key113: this.b107,
        key114: this.b108,
        key115: this.b108_1,
        key116: this.b109,
        key117: this.b110,
        key118: this.b111,
        key119: this.b114,
        key120: this.b115,
        key121: this.b116,
        key122: this.b118,
        key123: this.b119,
        key124: this.b120,
        key125: this.b120_1,
        key126: this.b121,
        key127: this.b123,
        key128: this.b124,
        key129: this.b125,
        key130: this.b125_1,
      };
      initWordStorage("3004.docx", data);
      this.handleExcelCache("3004.xlsx", "机械搅拌澄清池工程量");
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
    get_a_1() {
      return "Ø" + this.b23 + "×" + this.b34 + "m";
    },
    get_b_1() {
      return (
        "叶轮直径" +
        this.b97_1 +
        "m，n=" +
        this.b99 +
        "rpm，N=" +
        this.b125_1 +
        "kW"
      );
    },
    get_b_2() {
      return "刮臂直径" + this.b23 + "m，n=1~3rpm，N=1.5kW";
    },
    get_c_1() {
      return "0~" + this.b34 + "m，4~20mA信号输出，就地显示";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(2);
    },
    b3_2() {
      return (parseFloat(this.b3_1) / 3.6).toFixed(2);
    },
    b3_3() {
      return (parseFloat(this.b3_2) / 1000).toFixed(2);
    },
    b8() {
      return (
        (parseFloat(this.b5) + 1) *
        (parseFloat(this.b3_1) / 3.6)
      ).toFixed(2);
    },
    b8_1() {
      return (parseFloat(this.b8) / 1000).toFixed(3);
    },
    b10() {
      return (parseFloat(this.b8_1) / parseFloat(this.b9)).toFixed(2);
    },
    b11() {
      return Math.pow((4 * parseFloat(this.b10)) / Math.PI, 0.5).toFixed(3);
    },
    b12() {
      return (parseFloat(this.b11) + 2 * parseFloat(this.b11_1)).toFixed(2);
    },
    b14() {
      return this.b10;
    },
    b16() {
      return (
        parseFloat(this.b15) +
        parseFloat(this.b14) +
        (Math.PI * Math.pow(parseFloat(this.b12), 2)) / 4
      ).toFixed(2);
    },
    b17() {
      return Math.pow((4 * parseFloat(this.b16)) / Math.PI, 0.5).toFixed(2);
    },
    b18() {
      return (parseFloat(this.b17) + parseFloat(this.b17_1) * 2).toFixed(2);
    },
    b20() {
      return (
        parseFloat(this.b3) /
        24 /
        3.6 /
        1000 /
        parseFloat(this.b20_1)
      ).toFixed(2);
    },
    b22() {
      return (
        parseFloat(this.b20) +
        (Math.PI * Math.pow(parseFloat(this.b18), 2)) / 4
      ).toFixed(2);
    },
    b23() {
      return this.ROUND(Math.pow((4 * parseFloat(this.b22)) / Math.PI, 0.5), 2);
    },
    b24() {
      return (parseFloat(this.b3_1) * parseFloat(this.b4)).toFixed(1);
    },
    b25() {
      return (parseFloat(this.b24) + parseFloat(this.b24_1)).toFixed(1);
    },
    b27() {
      return (
        (Math.PI * Math.pow(parseFloat(this.b23), 2) * parseFloat(this.b26_1)) /
        4
      ).toFixed(2);
    },
    b28() {
      return (parseFloat(this.b25) - parseFloat(this.b27)).toFixed(2);
    },
    b29() {
      return (parseFloat(this.b23) / 2).toFixed(1);
    },
    b31() {
      return 1.58;
    },
    b31_1() {
      return (
        Math.pow(parseFloat(this.b31), 3) -
        3 * parseFloat(this.b29) * Math.pow(parseFloat(this.b31), 2) +
        3 * Math.pow(parseFloat(this.b29), 2) * parseFloat(this.b31) -
        (3 * parseFloat(this.b28)) / Math.PI
      ).toFixed(5);
    },
    b32() {
      return (parseFloat(this.b23) - 2 * parseFloat(this.b31)).toFixed(2);
    },
    b33() {
      return ((parseFloat(this.b32) * parseFloat(this.b32_1)) / 2).toFixed(2);
    },
    b34() {
      return this.ROUND(
        parseFloat(this.b26) +
          parseFloat(this.b26_1) +
          parseFloat(this.b31) +
          parseFloat(this.b33),
        2
      );
    },
    b37_1() {
      return (parseFloat(this.b37) / 1000).toFixed(2);
    },
    b38() {
      return (
        (parseFloat(this.b8_1) * parseFloat(this.b36) * 60) /
        parseFloat(this.b10)
      ).toFixed(1);
    },
    b39() {
      return (
        parseFloat(this.b8_1) /
        (Math.PI * parseFloat(this.b11) * parseFloat(this.b37_1))
      ).toFixed(2);
    },
    b40_1() {
      return (parseFloat(this.b40) / 1000).toFixed(2);
    },
    b41() {
      return ((parseFloat(this.b12) + parseFloat(this.b17)) / 2).toFixed(2);
    },
    b42() {
      return (
        parseFloat(this.b8_1) /
        (parseFloat(this.b40_1) * Math.PI * parseFloat(this.b41))
      ).toFixed(2);
    },
    b43() {
      return (parseFloat(this.b42) / Math.cos((45 * Math.PI) / 180)).toFixed(2);
    },
    b46() {
      return (parseFloat(this.b3_3) / (2 * parseFloat(this.b45))).toFixed(2);
    },
    b48() {
      return (
        parseFloat(this.b3_3) /
        (parseFloat(this.b47) * Math.PI * (parseFloat(this.b12) + 2 * 0.73))
      ).toFixed(3);
    },
    b50() {
      return (parseFloat(this.b12) + 2 * 0.75).toFixed(2);
    },
    b51() {
      return (
        parseFloat(this.b26_1) +
        parseFloat(this.b31) -
        parseFloat(this.b39) -
        parseFloat(this.b38)
      ).toFixed(2);
    },
    b52() {
      return (
        parseFloat(this.b32) +
        parseFloat(this.b18) / 2 +
        parseFloat(this.b31) -
        parseFloat(this.b32) / 2
      ).toFixed(2);
    },
    b54() {
      return (parseFloat(this.b5) * parseFloat(this.b3_3)).toFixed(3);
    },
    b54_2() {
      return (parseFloat(this.b54_1) / 1000).toFixed(2);
    },
    b55() {
      return (
        parseFloat(this.b54) /
        (parseFloat(this.b54_2) * Math.PI * parseFloat(this.b52))
      ).toFixed(3);
    },
    b57() {
      return (
        (Math.PI *
          Math.pow(parseFloat(this.b11), 2) *
          (parseFloat(this.b39) + parseFloat(this.b38))) /
          4 +
        (Math.PI *
          (Math.pow(parseFloat(this.b17), 2) -
            Math.pow(parseFloat(this.b12), 2)) *
          parseFloat(this.b38)) /
          4
      ).toFixed(2);
    },
    b58() {
      return (
        (Math.PI *
          (parseFloat(this.b51) - parseFloat(this.b33)) *
          (Math.pow(parseFloat(this.b52) / 2, 2) +
            Math.pow(parseFloat(this.b18) / 2, 2) +
            (parseFloat(this.b52) * parseFloat(this.b18)) / 4)) /
          3 +
        (Math.PI *
          parseFloat(this.b33) *
          (Math.pow(parseFloat(this.b52) / 2, 2) +
            Math.pow(parseFloat(this.b32) / 2, 2) +
            (parseFloat(this.b52) * parseFloat(this.b32)) / 4)) /
          3
      ).toFixed(2);
    },
    b59() {
      return (
        parseFloat(this.b24) -
        (parseFloat(this.b57) + parseFloat(this.b58))
      ).toFixed(2);
    },
    b60() {
      return (parseFloat(this.b58) / parseFloat(this.b57)).toFixed(5);
    },
    b61() {
      return (parseFloat(this.b59) / parseFloat(this.b57)).toFixed(5);
    },
    b63_1() {
      return (parseFloat(this.b63) / 1000).toFixed(1);
    },
    b64() {
      return (
        (4 * parseFloat(this.b3_3)) /
        (Math.PI * Math.pow(parseFloat(this.b63_1), 2))
      ).toFixed(2);
    },
    b65_1() {
      return (parseFloat(this.b65) / 1000).toFixed(1);
    },
    b68() {
      return Math.pow(
        ((0.45 * parseFloat(this.b20) +
          (Math.PI * Math.pow(parseFloat(this.b18), 2)) / 4) *
          4) /
          Math.PI,
        0.5
      ).toFixed(2);
    },
    b71() {
      return ((parseFloat(this.b3_3) * 1.5) / 2).toFixed(3);
    },
    b72() {
      return (0.9 * Math.pow(parseFloat(this.b71), 0.4)).toFixed(3);
    },
    b73() {
      return (0.75 * parseFloat(this.b72)).toFixed(3);
    },
    b74() {
      return (1.25 * parseFloat(this.b72)).toFixed(3);
    },
    b77() {
      return (
        parseFloat(this.b71) /
        (0.62 * Math.pow(2 * 9.81 * parseFloat(this.b76), 0.5))
      ).toFixed(4);
    },
    b78_1() {
      return ((Math.PI * Math.pow(parseFloat(this.b78) / 10, 2)) / 4).toFixed(
        2
      );
    },
    b79() {
      return ((parseFloat(this.b77) * 10000) / parseFloat(this.b78_1)).toFixed(
        3
      );
    },
    b79_1() {
      return this.ROUND(parseFloat(this.b79), 0);
    },
    b81() {
      return (
        (2 * Math.PI * parseFloat(this.b69)) /
        parseFloat(this.b79_1)
      ).toFixed(5);
    },
    b83() {
      return (2 * parseFloat(this.b71)).toFixed(5);
    },
    b85() {
      return (
        parseFloat(this.b83) /
        (parseFloat(this.b84) * parseFloat(this.b84_1))
      ).toFixed(5);
    },
    b87_1() {
      return (parseFloat(this.b87) / 60).toFixed(2);
    },
    b89() {
      return (
        (parseFloat(this.b3_1) *
          (parseFloat(this.b4_1) - parseFloat(this.b5_1)) *
          parseFloat(this.b87_1)) /
        parseFloat(this.b88)
      ).toFixed(2);
    },
    b91() {
      return (
        ((1.6 * 1.6 + 0.4 * 0.4 + Math.pow(1.6 * 1.6 * 0.4 * 0.4, 0.5)) * 1.8) /
        3
      ).toFixed(3);
    },
    b97() {
      return (parseFloat(this.b96) * parseFloat(this.b11)).toFixed(2);
    },
    b99() {
      return this.ROUND(
        (parseFloat(this.b98) / Math.PI / parseFloat(this.b97_1)) * 60,
        2
      );
    },
    b101() {
      return (
        (3.65 * parseFloat(this.b99) * Math.pow(parseFloat(this.b8_1), 0.5)) /
        Math.pow(parseFloat(this.b100), 0.75)
      ).toFixed(2);
    },
    b103() {
      return (parseFloat(this.b97_1) / parseFloat(this.b102)).toFixed(2);
    },
    b105() {
      return (
        (60 * parseFloat(this.b8_1)) /
        (parseFloat(this.b104) *
          parseFloat(this.b99) *
          Math.pow(parseFloat(this.b97_1), 2))
      ).toFixed(2);
    },
    b108() {
      return (
        (60 * parseFloat(this.b107)) /
        Math.PI /
        parseFloat(this.b99)
      ).toFixed(2);
    },
    b109() {
      return (parseFloat(this.b51) / 3).toFixed(2);
    },
    b110() {
      return (parseFloat(this.b109) / 3).toFixed(2);
    },
    b116() {
      return (
        (parseFloat(this.b114) *
          parseFloat(this.b8_1) *
          parseFloat(this.b100)) /
        102 /
        parseFloat(this.b115)
      ).toFixed(2);
    },
    b119() {
      return ((2 * parseFloat(this.b107)) / parseFloat(this.b108_1)).toFixed(2);
    },
    b120() {
      return (parseFloat(this.b108_1) / 2 - parseFloat(this.b110)).toFixed(2);
    },
    b121() {
      return (
        ((parseFloat(this.b118) *
          parseFloat(this.b114) *
          Math.pow(parseFloat(this.b119), 3) *
          parseFloat(this.b109)) /
          400 /
          9.81) *
        (Math.pow(parseFloat(this.b108_1) / 2, 4) -
          Math.pow(parseFloat(this.b120_1) / 2, 4)) *
        parseFloat(this.b111)
      ).toFixed(2);
    },
    b123() {
      return (parseFloat(this.b116) + parseFloat(this.b121)).toFixed(2);
    },
    b125() {
      return (parseFloat(this.b123) / parseFloat(this.b124)).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "机械搅拌澄清池",
          尺寸: this.get_a_1(),
          标高: "",
          单位: "座",
          数量: "m",
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "澄清池搅拌机",
          设备类型: "提升搅拌机",
          规格及型号: this.get_b_1(),
          单位: "台",
          数量: "1",
          运行时间: "",
          主要材质: "SS304",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "澄清池刮泥机",
          设备类型: "中心传动刮泥机",
          规格及型号: this.get_b_2(),
          单位: "台",
          数量: "1",
          运行时间: "",
          主要材质: "液下部分SS304，刮板橡胶",
          备注: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "1",
          安装位置: "污泥斗",
          仪表名称: "超声波泥位计",
          规格及型号: this.get_c_1(),
          单位: "台",
          数量: "1",
          备注: "",
          生产厂家: "",
          a: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("3004-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data1 = [
      {
        序号: "",
        单体位号: "",
        名称: "机械搅拌澄清池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: "m",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "澄清池搅拌机",
        设备类型: "提升搅拌机",
        规格及型号: this.get_b_1(),
        单位: "台",
        数量: "1",
        运行时间: "",
        主要材质: "SS304",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "澄清池刮泥机",
        设备类型: "中心传动刮泥机",
        规格及型号: this.get_b_2(),
        单位: "台",
        数量: "1",
        运行时间: "",
        主要材质: "液下部分SS304，刮板橡胶",
        备注: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "1",
        安装位置: "污泥斗",
        仪表名称: "超声波泥位计",
        规格及型号: this.get_c_1(),
        单位: "台",
        数量: "1",
        备注: "",
        生产厂家: "",
        a: "",
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
