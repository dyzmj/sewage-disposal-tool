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
  i18n: require("./i18n_4001"),
  data() {
    return {
      modelVisible: false,
      b3: "125000",
      b4: "6",
      b5: "0.5",
      b6: "1.5",
      b7: "24",
      b8: "30",
      b9: "6",
      b10: "0.5",
      b11: "1.14",
      b11_1: "15",
      b13: "",
      b14: "",
      b15_1: "12",
      b17: "",
      b19: "",
      b21: "16",
      b22_1: "60",
      b23: "9.5",
      b24_1: "6.3",
      b26: "",
      b31: "0.6",
      b34: "0.05",
      b37: "",
      b38: "0.75",
      b40_1: "1",
      b41: "",
      b42: "1.5",
      b45: "0.1",
      b46: "0.25",
      b49: "75",
      b53: "0.0024",
      b55: "12",
      b61: "",
      b63: "3.5",
      b65: "600",
      b66: "70",
      b68: "7.38",
      b69: "0.0135",
      b72: "0.45",
      b74: "2.65",
      b75: "1",
      b76: "0.41",
      b77_1: "5",
      b78_1: "2",
      b79: "1.5",
      b81: "",
      b82: "",
      b84: "1",
      b86_1: "2",
      b87: "",
      b89: "1.2",
      b91_1: "2",
      b92: "",
      b94: "2.55",
      b96: "0.6",
      b97: "",
      b99: "1.2",
      b101_1: "1",
      b102: "",
      b103: "0.3",
      b104: "0.3",
      b105: "1",
      b106: "0.6",
      b107: "1.5",
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
        exportExcel3(allData1, allData2, allData3, "普通快滤池工程量", this);
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
        key4: this.b4,
        key5: this.b5,
        key6: this.b6,
        key7: this.b7,
        key8: this.b8,
        key9: this.b8_1,
        key10: this.b9,
        key11: this.b9_1,
        key12: this.b10,
        key13: this.b11,
        key14: this.b12,
        key15: this.b13,
        key16: this.b15,
        key17: this.b15_1,
        key18: this.b16,
        key19: this.b18,
        key20: this.b18_1,
        key21: this.b20,
        key22: this.b21,
        key23: this.b22,
        key24: this.b22_1,
        key25: this.b23,
        key26: this.b24,
        key27: this.b24_1,
        key28: this.b25,
        key29: this.b27,
        key30: this.b27_1,
        key31: this.b28,
        key32: this.b29,
        key33: this.b30,
        key34: this.b31,
        key35: this.b32,
        key36: this.b33,
        key37: this.b34,
        key38: this.b35,
        key39: this.b36,
        key40: this.b38,
        key41: this.b39,
        key42: this.b40,
        key43: this.b40_1,
        key44: this.b42,
        key45: this.b43,
        key46: this.b44,
        key47: this.b45,
        key48: this.b46,
        key49: this.b47,
        key50: this.b48,
        key51: this.b49,
        key52: this.b49_1,
        key53: this.b50,
        key54: this.b51,
        key55: this.b52,
        key56: this.b53,
        key57: this.b54,
        key58: this.b55,
        key59: this.b55_1,
        key60: this.b56,
        key61: this.b57,
        key62: this.b58,
        key63: this.b59,
        key64: this.b60,
        key65: this.b62,
        key66: this.b63,
        key67: this.b64,
        key68: this.b65,
        key69: this.b65_1,
        key70: this.b66,
        key71: this.b67,
        key72: this.b68,
        key73: this.b69,
        key74: this.b70,
        key75: this.b71,
        key76: this.b72,
        key77: this.b73,
        key78: this.b74,
        key79: this.b75,
        key80: this.b76,
        key81: this.b76_1,
        key82: this.b77,
        key83: this.b77_1,
        key84: this.b78,
        key85: this.b78_1,
        key86: this.b79,
        key87: this.b80,
        key88: this.b83,
        key89: this.b84,
        key90: this.b85,
        key91: this.b86_1,
        key92: this.b86_2,
        key93: this.b88,
        key94: this.b89,
        key95: this.b90,
        key96: this.b91_1,
        key97: this.b91_2,
        key98: this.b93,
        key99: this.b94,
        key100: this.b95,
        key101: this.b96,
        key102: this.b98,
        key103: this.b99,
        key104: this.b100,
        key105: this.b101_1,
        key106: this.b101_2,
        key107: this.b103,
        key108: this.b104,
        key109: this.b105,
        key110: this.b106,
        key111: this.b107,
        key112: this.b108,
        key113: this.b111_1,
        key114: this.b111_2,
        key115: this.b111_3,
      };
      exportWord("普通快滤池计算书", "4001.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b3_1,
        key3: this.b3_2,
        key4: this.b4,
        key5: this.b5,
        key6: this.b6,
        key7: this.b7,
        key8: this.b8,
        key9: this.b8_1,
        key10: this.b9,
        key11: this.b9_1,
        key12: this.b10,
        key13: this.b11,
        key14: this.b12,
        key15: this.b13,
        key16: this.b15,
        key17: this.b15_1,
        key18: this.b16,
        key19: this.b18,
        key20: this.b18_1,
        key21: this.b20,
        key22: this.b21,
        key23: this.b22,
        key24: this.b22_1,
        key25: this.b23,
        key26: this.b24,
        key27: this.b24_1,
        key28: this.b25,
        key29: this.b27,
        key30: this.b27_1,
        key31: this.b28,
        key32: this.b29,
        key33: this.b30,
        key34: this.b31,
        key35: this.b32,
        key36: this.b33,
        key37: this.b34,
        key38: this.b35,
        key39: this.b36,
        key40: this.b38,
        key41: this.b39,
        key42: this.b40,
        key43: this.b40_1,
        key44: this.b42,
        key45: this.b43,
        key46: this.b44,
        key47: this.b45,
        key48: this.b46,
        key49: this.b47,
        key50: this.b48,
        key51: this.b49,
        key52: this.b49_1,
        key53: this.b50,
        key54: this.b51,
        key55: this.b52,
        key56: this.b53,
        key57: this.b54,
        key58: this.b55,
        key59: this.b55_1,
        key60: this.b56,
        key61: this.b57,
        key62: this.b58,
        key63: this.b59,
        key64: this.b60,
        key65: this.b62,
        key66: this.b63,
        key67: this.b64,
        key68: this.b65,
        key69: this.b65_1,
        key70: this.b66,
        key71: this.b67,
        key72: this.b68,
        key73: this.b69,
        key74: this.b70,
        key75: this.b71,
        key76: this.b72,
        key77: this.b73,
        key78: this.b74,
        key79: this.b75,
        key80: this.b76,
        key81: this.b76_1,
        key82: this.b77,
        key83: this.b77_1,
        key84: this.b78,
        key85: this.b78_1,
        key86: this.b79,
        key87: this.b80,
        key88: this.b83,
        key89: this.b84,
        key90: this.b85,
        key91: this.b86_1,
        key92: this.b86_2,
        key93: this.b88,
        key94: this.b89,
        key95: this.b90,
        key96: this.b91_1,
        key97: this.b91_2,
        key98: this.b93,
        key99: this.b94,
        key100: this.b95,
        key101: this.b96,
        key102: this.b98,
        key103: this.b99,
        key104: this.b100,
        key105: this.b101_1,
        key106: this.b101_2,
        key107: this.b103,
        key108: this.b104,
        key109: this.b105,
        key110: this.b106,
        key111: this.b107,
        key112: this.b108,
        key113: this.b111_1,
        key114: this.b111_2,
        key115: this.b111_3,
      };
      initWordStorage("4001.docx", data);
      this.handleExcelCache("4001.xlsx", "普通快滤池工程量");
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
    get_a_1_1() {
      return this.b111_1 + "m×" + this.b111_2 + "m×" + this.b111_3 + "m";
    },
    get_b_1_1() {
      return (
        "Q=" +
        parseFloat(this.b76_1) / parseFloat(this.b77_1) +
        "m3/h，H=" +
        this.b80 +
        "m"
      );
    },
    get_b_1_2() {
      return parseFloat(this.b77_1) + parseFloat(this.b78_1);
    },
    get_b_1_3() {
      return this.b77_1 + "用" + this.b78_1 + "备";
    },
    get_c_1_1() {
      return parseFloat(this.b21) * 4;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(8);
    },
    b3_2() {
      return (parseFloat(this.b3_1) / 3600).toFixed(8);
    },
    b8_1() {
      return (parseFloat(this.b8) / 60).toFixed(1);
    },
    b9_1() {
      return (parseFloat(this.b9) / 60).toFixed(1);
    },
    b12() {
      return (0.9 * parseFloat(this.b6) * parseFloat(this.b5)).toFixed(3);
    },
    b15() {
      return (
        (43.2 *
          Math.pow(parseFloat(this.b12), 1.45) *
          Math.pow(parseFloat(this.b10) + 0.35, 1.632)) /
        ((1 + parseFloat(this.b10)) * Math.pow(parseFloat(this.b11), 0.632))
      ).toFixed(8);
    },
    b16() {
      return (
        parseFloat(this.b7) /
        (parseFloat(this.b7) -
          parseFloat(this.b8_1) -
          (3.6 * parseFloat(this.b15) * parseFloat(this.b9_1)) /
            parseFloat(this.b4))
      ).toFixed(8);
    },
    b18() {
      return (parseFloat(this.b16) * parseFloat(this.b3_1)).toFixed(8);
    },
    b18_1() {
      return (parseFloat(this.b18) / 3600).toFixed(2);
    },
    b20() {
      return (parseFloat(this.b18) / parseFloat(this.b4)).toFixed(8);
    },
    b22() {
      return (parseFloat(this.b20) / parseFloat(this.b21)).toFixed(8);
    },
    b24() {
      return (parseFloat(this.b22_1) / parseFloat(this.b23)).toFixed(8);
    },
    b25() {
      return (parseFloat(this.b23) / parseFloat(this.b24_1)).toFixed(8);
    },
    b27() {
      return (parseFloat(this.b15_1) * parseFloat(this.b22_1)).toFixed(0);
    },
    b27_1() {
      return (parseFloat(this.b27) / 1000).toFixed(2);
    },
    b28() {
      return 2;
    },
    b29() {
      return this.ROUNDUP(parseFloat(this.b23) / parseFloat(this.b28), 0);
    },
    b30() {
      return this.b24_1;
    },
    b32() {
      return Math.pow(
        (parseFloat(this.b15_1) *
          parseFloat(this.b24_1) *
          parseFloat(this.b28)) /
          (4570 * parseFloat(this.b31)),
        0.5
      ).toFixed(8);
    },
    b33() {
      return this.b105;
    },
    b35() {
      return (
        parseFloat(this.b10) * parseFloat(this.b33) +
        2.5 * parseFloat(this.b32) +
        parseFloat(this.b34) +
        0.075
      ).toFixed(3);
    },
    b36() {
      return (
        (5 * 2 * parseFloat(this.b32) * parseFloat(this.b30)) /
        parseFloat(this.b22_1)
      ).toFixed(8);
    },
    b39() {
      return (
        0.81 *
        Math.pow(
          (parseFloat(this.b22_1) * parseFloat(this.b15_1)) /
            (1000 * parseFloat(this.b38)),
          2 / 3
        )
      ).toFixed(9);
    },
    b40() {
      return parseFloat(this.b39) + 0.2;
    },
    b43() {
      return this.b27_1;
    },
    b44() {
      return (parseFloat(this.b43) / parseFloat(this.b42)).toFixed(2);
    },
    b47() {
      return ((2 * parseFloat(this.b23)) / parseFloat(this.b46)).toFixed(0);
    },
    b48() {
      return (parseFloat(this.b43) / parseFloat(this.b47)).toFixed(8);
    },
    b49_1() {
      return (parseFloat(this.b49) / 1000).toFixed(3);
    },
    b50() {
      return (
        (4 * parseFloat(this.b48)) /
        (3.1415926 * Math.pow(parseFloat(this.b49_1), 2))
      ).toFixed(9);
    },
    b51() {
      return ((parseFloat(this.b24_1) - 0.9) / 2).toFixed(1);
    },
    b52() {
      return (parseFloat(this.b51) / parseFloat(this.b49_1)).toFixed(0);
    },
    b54() {
      return (parseFloat(this.b53) * parseFloat(this.b22_1)).toFixed(3);
    },
    b55_1() {
      return (parseFloat(this.b55) / 1000).toFixed(3);
    },
    b56() {
      return ((3.1415926 * Math.pow(parseFloat(this.b55_1), 2)) / 4).toFixed(8);
    },
    b57() {
      return this.ROUNDUP(parseFloat(this.b54) / parseFloat(this.b56), 0);
    },
    b58() {
      return this.ROUNDUP(parseFloat(this.b57) / parseFloat(this.b47), 0);
    },
    b59() {
      return ((2 * parseFloat(this.b51)) / parseFloat(this.b58)).toFixed(8);
    },
    b60() {
      return (
        (parseFloat(this.b15_1) * parseFloat(this.b22_1)) /
        (1000 *
          parseFloat(this.b47) *
          parseFloat(this.b58) *
          parseFloat(this.b56))
      ).toFixed(2);
    },
    b62() {
      return (
        (1.5 *
          parseFloat(this.b15_1) *
          parseFloat(this.b22_1) *
          60 *
          parseFloat(this.b9)) /
        1000
      ).toFixed(1);
    },
    b64() {
      return Math.pow(
        (4 * parseFloat(this.b62)) / (3.1415926 * parseFloat(this.b63)),
        0.5
      ).toFixed(8);
    },
    b65_1() {
      return (parseFloat(this.b65) / 1000).toFixed(3);
    },
    b67() {
      return (
        (parseFloat(this.b27_1) * 4) /
        (3.1415926 * Math.pow(parseFloat(this.b65_1), 2))
      ).toFixed(3);
    },
    b70() {
      return (
        parseFloat(this.b69) * parseFloat(this.b66) +
        (parseFloat(this.b68) * Math.pow(parseFloat(this.b67), 2)) / (2 * 9.81)
      ).toFixed(8);
    },
    b71() {
      return (
        (8 * Math.pow(parseFloat(this.b42), 2)) / (2 * 9.81) +
        (10 * Math.pow(parseFloat(this.b50), 2)) / (2 * 9.81)
      ).toFixed(8);
    },
    b73() {
      return (0.022 * parseFloat(this.b72) * parseFloat(this.b15_1)).toFixed(4);
    },
    b76_1() {
      return (parseFloat(this.b62) / parseFloat(this.b9_1) / 1.5).toFixed(0);
    },
    b77() {
      return this.b105;
    },
    b78() {
      return (
        (parseFloat(this.b74) / parseFloat(this.b75) - 1) *
        (1 - parseFloat(this.b76)) *
        parseFloat(this.b77)
      ).toFixed(4);
    },
    b80() {
      return this.ROUNDUP(
        parseFloat(this.b70) +
          parseFloat(this.b71) +
          parseFloat(this.b73) +
          parseFloat(this.b78) +
          parseFloat(this.b79),
        2
      );
    },
    b83() {
      return this.b18_1;
    },
    b85() {
      return (parseFloat(this.b18) / 3600 / parseFloat(this.b84)).toFixed(8);
    },
    b86_2() {
      return (parseFloat(this.b85) / parseFloat(this.b86_1)).toFixed(5);
    },
    b86() {
      return (
        parseFloat(this.b86_1).toString() +
        " × " +
        this.ROUND(parseFloat(this.b86_2), 2).toString()
      );
    },
    b88() {
      return this.b18_1;
    },
    b90() {
      return (parseFloat(this.b18) / 3600 / parseFloat(this.b89)).toFixed(8);
    },
    b91_2() {
      return (parseFloat(this.b90) / parseFloat(this.b91_1)).toFixed(5);
    },
    b91() {
      return (
        parseFloat(this.b91_1).toString() +
        " × " +
        this.ROUND(parseFloat(this.b91_2), 2).toString()
      );
    },
    b93() {
      return ((parseFloat(this.b22_1) * parseFloat(this.b15_1)) / 1000).toFixed(
        2
      );
    },
    b95() {
      return (parseFloat(this.b93) / parseFloat(this.b94)).toFixed(8);
    },
    b98() {
      return ((parseFloat(this.b22_1) * parseFloat(this.b15_1)) / 1000).toFixed(
        2
      );
    },
    b100() {
      return (parseFloat(this.b98) / parseFloat(this.b99)).toFixed(1);
    },
    b101_2() {
      return (parseFloat(this.b100) / parseFloat(this.b101_1)).toFixed(1);
    },
    b101() {
      return (
        parseFloat(this.b101_1).toString() +
        " × " +
        this.ROUND(parseFloat(this.b101_2), 2).toString()
      );
    },
    b108() {
      return (
        parseFloat(this.b104) +
        parseFloat(this.b105) +
        parseFloat(this.b106) +
        parseFloat(this.b107)
      ).toFixed(2);
    },
    b111_1() {
      return (
        (parseFloat(this.b24_1) * parseFloat(this.b21)) / 2 +
        (parseFloat(this.b21) / 2 - 1) * parseFloat(this.b103)
      ).toFixed(1);
    },
    b111_2() {
      return (
        parseFloat(this.b23) * 2 +
        parseFloat(this.b86_1) +
        parseFloat(this.b101_1) +
        3 * parseFloat(this.b103)
      ).toFixed(1);
    },
    b111_3() {
      return this.b108;
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "普通快滤池",
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
          序号: "",
          设备位号: "",
          设备工艺名称: "反冲洗泵",
          设备类型: "",
          规格及型号: this.get_b_1_1(),
          单位: "台",
          数量: this.get_b_1_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_1_3(),
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
    console.log("4001-activated被调用了");
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
        名称: "普通快滤池",
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
        序号: "",
        设备位号: "",
        设备工艺名称: "反冲洗泵",
        设备类型: "",
        规格及型号: this.get_b_1_1(),
        单位: "台",
        数量: this.get_b_1_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_1_3(),
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
