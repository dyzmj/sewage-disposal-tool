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
  i18n: require("./i18n_2003"),
  data() {
    return {
      modelVisible: false,
      b5: "40000",
      b6: "1.05",
      b8: "20",
      b9: "10",
      b10: "4.5",
      b11: "2",
      b13: "500",
      b14: "90",
      b15: "3",
      b17: "3",
      b18: "3",
      b19: "1.5",
      b20: "5",
      b21: "0.29",
      b35: "0.5",
      b37: "0.1",
      b43: "1",
      b44: "1",
      b45: "2",
      b46: "0.5",
      b47: "0.44",
      b48: "0.3",
      b51: "1.8",
      b52: "3",
      b53: "3",
      b60: "0.0001029",
      b61: "1000",
      b63: "2",
      b64: "3",
      b65: "500",
      b66: "90",
      b67: "3",
      b69: "0.18",
      b71: "2.4",
      b74: "0.6",
      b78: "1",
      b79: "1",
      b80: "2",
      b81: "0.5",
      b82: "0.44",
      b83: "0.2",
      b86: "1.8",
      b87: "3",
      b88: "3",
      b95: "0.0001029",
      b96: "1000",
      b98: "3",
      b99: "3",
      b100: "3",
      b102: "0.1",
      b106: "1",
      b107: "1",
      b108: "2",
      b109: "0.5",
      b110: "0.44",
      b111: "3",
      b116: "0.0001029",
      b117: "1000",
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
      columns: [
        {
          title: "絮凝段",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "絮凝时间min",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "水头损失",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "G（S^-1）",
          dataIndex: "tags",
          key: "tags",
        },
        {
          title: "GT值10^4",
          dataIndex: "action",
          key: "action",
        },
      ],
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
        this.b5 = 40000;
      } else {
        this.b5 = waterData;
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
        // 导出 Excel
        exportExcel2(allData1, allData2, "折板絮凝池工程量", this);
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
        key1: this.b5,
        key2: this.b6,
        key3: this.b7_1,
        key4: this.b8,
        key5: this.b9,
        key6: this.b10,
        key7: this.b11,
        key8: this.b12,
        key9: this.b13,
        key10: this.b14,
        key11: this.b15,
        key12: this.b17,
        key13: this.b18,
        key14: this.b19,
        key15: this.b20,
        key16: this.b21,
        key17: this.b22,
        key18: this.b23,
        key19: this.b24,
        key20: this.b25,
        key21: this.b26,
        key22: this.b27,
        key23: this.b28,
        key24: this.b29,
        key25: this.b30,
        key26: this.b31,
        key27: this.b32,
        key28: this.b35,
        key29: this.b37,
        key30: this.b34,
        key31: this.b36,
        key32: this.b38,
        key33: this.b39,
        key34: this.b40,
        key35: this.b41,
        key36: this.b43,
        key37: this.b44,
        key38: this.b45,
        key39: this.b46,
        key40: this.b47,
        key41: this.b48,
        key42: this.b49,
        key43: this.b50,
        key44: this.b51,
        key45: this.b52,
        key46: this.b53,
        key47: this.b54,
        key48: this.b56,
        key49: this.b57,
        key50: this.b58,
        key51: this.b59,
        key52: this.b63,
        key53: this.b64,
        key54: this.b65,
        key55: this.b66,
        key56: this.b67,
        key57: this.b68,
        key58: this.b69,
        key59: this.b70,
        key60: this.b71,
        key61: this.b72,
        key62: this.b74,
        key63: this.b75,
        key64: this.b76,
        key65: this.b78,
        key66: this.b79,
        key67: this.b80,
        key68: this.b81,
        key69: this.b82,
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
        key81: this.b98,
        key82: this.b99,
        key83: this.b100,
        key84: this.b101,
        key85: this.b102,
        key86: this.b103,
        key87: this.b104,
        key88: this.b105,
        key89: this.b106,
        key90: this.b107,
        key91: this.b108,
        key92: this.b109,
        key93: this.b110,
        key94: this.b111,
        key95: this.b112,
        key96: this.b113,
        key97: this.b114,
        key98: this.b115,
      };
      exportWord("折板絮凝池计算书", "2003.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b5,
        key2: this.b6,
        key3: this.b7_1,
        key4: this.b8,
        key5: this.b9,
        key6: this.b10,
        key7: this.b11,
        key8: this.b12,
        key9: this.b13,
        key10: this.b14,
        key11: this.b15,
        key12: this.b17,
        key13: this.b18,
        key14: this.b19,
        key15: this.b20,
        key16: this.b21,
        key17: this.b22,
        key18: this.b23,
        key19: this.b24,
        key20: this.b25,
        key21: this.b26,
        key22: this.b27,
        key23: this.b28,
        key24: this.b29,
        key25: this.b30,
        key26: this.b31,
        key27: this.b32,
        key28: this.b35,
        key29: this.b37,
        key30: this.b34,
        key31: this.b36,
        key32: this.b38,
        key33: this.b39,
        key34: this.b40,
        key35: this.b41,
        key36: this.b43,
        key37: this.b44,
        key38: this.b45,
        key39: this.b46,
        key40: this.b47,
        key41: this.b48,
        key42: this.b49,
        key43: this.b50,
        key44: this.b51,
        key45: this.b52,
        key46: this.b53,
        key47: this.b54,
        key48: this.b56,
        key49: this.b57,
        key50: this.b58,
        key51: this.b59,
        key52: this.b63,
        key53: this.b64,
        key54: this.b65,
        key55: this.b66,
        key56: this.b67,
        key57: this.b68,
        key58: this.b69,
        key59: this.b70,
        key60: this.b71,
        key61: this.b72,
        key62: this.b74,
        key63: this.b75,
        key64: this.b76,
        key65: this.b78,
        key66: this.b79,
        key67: this.b80,
        key68: this.b81,
        key69: this.b82,
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
        key81: this.b98,
        key82: this.b99,
        key83: this.b100,
        key84: this.b101,
        key85: this.b102,
        key86: this.b103,
        key87: this.b104,
        key88: this.b105,
        key89: this.b106,
        key90: this.b107,
        key91: this.b108,
        key92: this.b109,
        key93: this.b110,
        key94: this.b111,
        key95: this.b112,
        key96: this.b113,
        key97: this.b114,
        key98: this.b115,
      };
      initWordStorage("2003.docx", data);
      this.handleExcelCache("2003.xlsx", "折板絮凝池工程量");
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
        initPowerStorage(this.data2, path);
        initExcelStorage(allData1, allData2, null, path, name);
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
    getKey120_1() {
      return this.b120_1;
    },
    getKey120_2() {
      return this.b120_2;
    },
    getKey120_3() {
      return this.b120_3;
    },
    getKey120_4() {
      return this.b120_4;
    },
    getKey121_1() {
      return this.b121_1;
    },
    getKey121_2() {
      return this.b121_2;
    },
    getKey121_3() {
      return this.b121_3;
    },
    getKey121_4() {
      return this.b121_4;
    },
    getKey122_1() {
      return this.b122_1;
    },
    getKey122_2() {
      return this.b122_2;
    },
    getKey122_3() {
      return this.b122_3;
    },
    getKey122_4() {
      return this.b122_4;
    },
    getKey123_1() {
      return this.b123_1;
    },
    getKey123_2() {
      return this.b123_2;
    },
    getKey123_3() {
      return this.b123_3;
    },
    getKey123_4() {
      return this.b123_4;
    },
    getkey1() {
      return (
        parseFloat(this.b22) +
        parseFloat(this.b72) +
        parseFloat(this.b105) +
        "×" +
        parseFloat(this.b9) +
        "×5m"
      );
    },
    getkey2() {
      return (
        "折板长度=" +
        this.b19 +
        "m，折板宽度=" +
        this.b13 +
        "mm，折板夹角=" +
        this.b14 +
        "°，折板厚度=" +
        this.b15 +
        "mm，缩放数=" +
        this.b20
      );
    },
    getkey3() {
      return parseFloat(this.b17) * parseFloat(this.b18);
    },
    getkey4() {
      return (
        "折板长度=" +
        this.b71 +
        "m，折板宽度=" +
        this.b65 +
        "mm，折板夹角=" +
        this.b66 +
        "°，折板厚度=" +
        this.b67 +
        "mm，转弯数=" +
        this.b68
      );
    },
    getkey5() {
      return parseFloat(this.b63) * parseFloat(this.b64);
    },
    getkey6() {
      return (
        "折板长度=m，折板宽度=" + this.b15 + "m，直板厚度=" + this.b100 + "mm"
      );
    },
    getkey7() {
      return parseFloat(this.b98) * parseFloat(this.b99);
    },
    getkey8() {
      return (
        parseFloat(this.b17) * parseFloat(this.b18) +
        parseFloat(this.b63) * parseFloat(this.b64) +
        parseFloat(this.b98) * parseFloat(this.b99)
      );
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b7_1() {
      return (parseFloat(this.b5) * parseFloat(this.b6)).toFixed(0);
    },
    b7_2() {
      return (parseFloat(this.b7_1) / (24 * 60 * 60)).toFixed(4);
    },
    b12() {
      return (parseFloat(this.b7_2) / parseFloat(this.b11)).toFixed(4);
    },
    b22() {
      return (parseFloat(this.b17) * parseFloat(this.b19)).toFixed(2);
    },
    b23() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b21) /
        parseFloat(this.b19)
      ).toFixed(4);
    },
    b24() {
      return ((parseFloat(this.b13) * 0.707) / 1000).toFixed(4);
    },
    b25() {
      return (parseFloat(this.b23) + 2 * parseFloat(this.b24)).toFixed(4);
    },
    b26() {
      return (parseFloat(this.b9) / parseFloat(this.b11)).toFixed(2);
    },
    b27() {
      return ((parseFloat(this.b15) * 0.707) / 1000).toFixed(4);
    },
    b28() {
      return (
        (parseFloat(this.b26) -
          (parseFloat(this.b18) - 1) * parseFloat(this.b23) -
          parseFloat(this.b18) *
            (parseFloat(this.b27) + parseFloat(this.b24))) /
        2
      ).toFixed(4);
    },
    b29() {
      return (parseFloat(this.b28) + parseFloat(this.b24)).toFixed(4);
    },
    b30() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b25) /
        parseFloat(this.b19)
      ).toFixed(2);
    },
    b31() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b28) /
        parseFloat(this.b19)
      ).toFixed(4);
    },
    b32() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b29) /
        parseFloat(this.b19)
      ).toFixed(4);
    },
    b34() {
      return (
        (parseFloat(this.b35) *
          (parseFloat(this.b21) * parseFloat(this.b21) -
            parseFloat(this.b30) * parseFloat(this.b30))) /
        2 /
        9.8
      ).toFixed(4);
    },
    b36() {
      return (
        ((1 +
          parseFloat(this.b37) -
          ((parseFloat(this.b23) * parseFloat(this.b23)) /
            parseFloat(this.b25)) *
            parseFloat(this.b25)) *
          parseFloat(this.b21) *
          parseFloat(this.b21)) /
        2 /
        9.8
      ).toFixed(4);
    },
    b38() {
      return (
        parseFloat(this.b20) *
        (parseFloat(this.b18) - 1) *
        (parseFloat(this.b34) + parseFloat(this.b36))
      ).toFixed(4);
    },
    b39() {
      return (
        (parseFloat(this.b35) *
          (parseFloat(this.b31) * parseFloat(this.b31) -
            parseFloat(this.b32) * parseFloat(this.b32))) /
        2 /
        9.8
      ).toFixed(4);
    },
    b40() {
      return (
        ((1 +
          parseFloat(this.b37) -
          (parseFloat(this.b28) * parseFloat(this.b28)) /
            (parseFloat(this.b29) * parseFloat(this.b29))) *
          parseFloat(this.b31) *
          parseFloat(this.b31)) /
        2 /
        9.8
      ).toFixed(4);
    },
    b41() {
      return (
        2 *
        parseFloat(this.b20) *
        (parseFloat(this.b39) + parseFloat(this.b40))
      ).toFixed(4);
    },
    b49() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b19) /
        parseFloat(this.b46)
      ).toFixed(4);
    },
    b50() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b19) /
        parseFloat(this.b47)
      ).toFixed(4);
    },
    b54() {
      return (
        (parseFloat(this.b44) *
          parseFloat(this.b51) *
          parseFloat(this.b49) *
          parseFloat(this.b49)) /
          2 /
          9.8 +
        (parseFloat(this.b45) *
          parseFloat(this.b52) *
          parseFloat(this.b50) *
          parseFloat(this.b50)) /
          2 /
          9.8 +
        (parseFloat(this.b43) *
          parseFloat(this.b53) *
          parseFloat(this.b48) *
          parseFloat(this.b48)) /
          2 /
          9.8
      ).toFixed(4);
    },
    b56() {
      return (
        parseFloat(this.b54) +
        parseFloat(this.b41) +
        parseFloat(this.b38)
      ).toFixed(4);
    },
    b57() {
      return (parseFloat(this.b56) * parseFloat(this.b17)).toFixed(4);
    },
    b58() {
      return (
        (parseFloat(this.b22) * parseFloat(this.b26) * parseFloat(this.b10)) /
        parseFloat(this.b12) /
        60
      ).toFixed(4);
    },
    b59() {
      return Math.sqrt(
        (parseFloat(this.b61) * parseFloat(this.b57)) /
          60 /
          parseFloat(this.b60) /
          parseFloat(this.b58)
      ).toFixed(4);
    },
    b68() {
      return (parseFloat(this.b20) * 2 - 1).toFixed(0);
    },
    b70() {
      return this.b23;
    },
    b72() {
      return (parseFloat(this.b63) * parseFloat(this.b71)).toFixed(4);
    },
    b75() {
      return (
        (parseFloat(this.b74) * (parseFloat(this.b69) * parseFloat(this.b69))) /
        2 /
        9.8
      ).toFixed(4);
    },
    b76() {
      return (
        parseFloat(this.b68) *
        parseFloat(this.b64) *
        parseFloat(this.b63) *
        parseFloat(this.b75)
      ).toFixed(4);
    },
    b84() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b71) /
        parseFloat(this.b81)
      ).toFixed(4);
    },
    b85() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b71) /
        parseFloat(this.b82)
      ).toFixed(4);
    },
    b89() {
      return (
        (parseFloat(this.b79) *
          parseFloat(this.b86) *
          parseFloat(this.b84) *
          parseFloat(this.b84)) /
          2 /
          9.8 +
        (parseFloat(this.b80) *
          parseFloat(this.b87) *
          parseFloat(this.b85) *
          parseFloat(this.b85)) /
          2 /
          9.8 +
        (parseFloat(this.b78) *
          parseFloat(this.b88) *
          parseFloat(this.b83) *
          parseFloat(this.b83)) /
          2 /
          9.8
      ).toFixed(4);
    },
    b91() {
      return (parseFloat(this.b89) + parseFloat(this.b76)).toFixed(4);
    },
    b92() {
      return (parseFloat(this.b91) * parseFloat(this.b63)).toFixed(4);
    },
    b93() {
      return (
        (parseFloat(this.b72) * parseFloat(this.b26) * parseFloat(this.b10)) /
        parseFloat(this.b12) /
        60
      ).toFixed(4);
    },
    b94() {
      return Math.sqrt(
        (parseFloat(this.b96) * parseFloat(this.b92)) /
          60 /
          parseFloat(this.b95) /
          parseFloat(this.b93)
      ).toFixed(4);
    },
    b101() {
      return (parseFloat(this.b9) / parseFloat(this.b11)).toFixed(4);
    },
    b103() {
      return (parseFloat(this.b101) / (parseFloat(this.b99) + 1)).toFixed(4);
    },
    b104() {
      return this.ROUNDUP(
        parseFloat(this.b12) / parseFloat(this.b102) / parseFloat(this.b103),
        1
      ).toFixed(4);
    },
    b105() {
      return (parseFloat(this.b98) * parseFloat(this.b104)).toFixed(4);
    },
    b112() {
      return (
        ((parseFloat(this.b106) +
          parseFloat(this.b107) +
          parseFloat(this.b108)) *
          parseFloat(this.b111) *
          parseFloat(this.b102) *
          parseFloat(this.b102)) /
        2 /
        9.8
      ).toFixed(4);
    },
    b113() {
      return (parseFloat(this.b112) * parseFloat(this.b98)).toFixed(4);
    },
    b114() {
      return (
        (parseFloat(this.b105) * parseFloat(this.b10) * parseFloat(this.b101)) /
        parseFloat(this.b12) /
        60
      ).toFixed(4);
    },
    b115() {
      return Math.sqrt(
        (parseFloat(this.b117) * parseFloat(this.b113)) /
          60 /
          parseFloat(this.b116) /
          parseFloat(this.b114)
      ).toFixed(4);
    },
    b120_1() {
      return this.b58;
    },
    b120_2() {
      return this.b57;
    },
    b120_3() {
      return this.b59;
    },
    b120_4() {
      return (
        (parseFloat(this.b120_3) * parseFloat(this.b120_1) * 60) /
        10000
      ).toFixed(4);
    },
    b121_1() {
      return this.b93;
    },
    b121_2() {
      return this.b92;
    },
    b121_3() {
      return this.b94;
    },
    b121_4() {
      return (
        (parseFloat(this.b121_3) * parseFloat(this.b121_1) * 60) /
        10000
      ).toFixed(4);
    },
    b122_1() {
      return this.b114;
    },
    b122_2() {
      return this.b113;
    },
    b122_3() {
      return this.b115;
    },
    b122_4() {
      return (
        (parseFloat(this.b122_3) * parseFloat(this.b122_1) * 60) /
        10000
      ).toFixed(4);
    },
    b123_1() {
      return (
        parseFloat(this.b120_1) +
        parseFloat(this.b121_1) +
        parseFloat(this.b122_1)
      ).toFixed(4);
    },
    b123_2() {
      return (
        parseFloat(this.b120_2) +
        parseFloat(this.b121_2) +
        parseFloat(this.b122_2)
      ).toFixed(4);
    },
    b123_3() {
      return Math.sqrt(
        (parseFloat(this.b117) * parseFloat(this.b123_2)) /
          60 /
          parseFloat(this.b116) /
          parseFloat(this.b123_1)
      ).toFixed(4);
    },
    b123_4() {
      return (
        (parseFloat(this.b123_3) * parseFloat(this.b123_1) * 60) /
        10000
      ).toFixed(4);
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "折板絮凝池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: "1",
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
          设备工艺名称: "异波折板",
          设备类型: "单通道折板",
          规格及型号: this.getkey2(),
          单位: "组",
          数量: this.getkey3(),
          运行时间: "",
          主要材质: "SS304",
          备注: "",
          运行数量: this.getkey3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "同波折板",
          设备类型: "单通道折板",
          规格及型号: this.getkey4(),
          单位: "组",
          数量: this.getkey5(),
          运行时间: "",
          主要材质: "SS304",
          备注: "",
          运行数量: this.getkey5(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "直板",
          设备类型: "单通道折板",
          规格及型号: this.getkey6(),
          单位: "组",
          数量: this.getkey7(),
          运行时间: "",
          主要材质: "SS304",
          备注: "",
          运行数量: this.getkey7(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "絮凝池排泥阀",
          设备类型: "单通道折板",
          规格及型号: "DN150，PN10，开关型",
          单位: "个",
          数量: this.getkey8(),
          运行时间: "",
          主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
          备注: "带配套电动执行机构",
          运行数量: this.getkey8(),
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
    console.log("2003-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data1 = [
      {
        key: "1",
        序号: "",
        单体位号: "",
        名称: "折板絮凝池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: "1",
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "异波折板",
        设备类型: "单通道折板",
        规格及型号: this.getkey2(),
        单位: "组",
        数量: this.getkey3(),
        运行时间: "",
        主要材质: "SS304",
        备注: "",
        运行数量: this.getkey3(),
        单台功率: "",
        用电量: "",
      },
      {
        key: "2",
        序号: "",
        设备位号: "",
        设备工艺名称: "同波折板",
        设备类型: "单通道折板",
        规格及型号: this.getkey4(),
        单位: "组",
        数量: this.getkey5(),
        运行时间: "",
        主要材质: "SS304",
        备注: "",
        运行数量: this.getkey5(),
        单台功率: "",
        用电量: "",
      },
      {
        key: "3",
        序号: "",
        设备位号: "",
        设备工艺名称: "直板",
        设备类型: "单通道折板",
        规格及型号: this.getkey6(),
        单位: "组",
        数量: this.getkey7(),
        运行时间: "",
        主要材质: "SS304",
        备注: "",
        运行数量: this.getkey6(),
        单台功率: "",
        用电量: "",
      },
      {
        key: "4",
        序号: "",
        设备位号: "",
        设备工艺名称: "絮凝池排泥阀",
        设备类型: "单通道折板",
        规格及型号: "DN150，PN10，开关型",
        单位: "个",
        数量: this.getkey8(),
        运行时间: "",
        主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
        备注: "带配套电动执行机构",
        运行数量: this.getkey8(),
        单台功率: "",
        用电量: "",
      },
    ];
    (this.data3 = []),
      (this.tableData = [
        {
          key: "1",
          name: "第一絮凝段",
          age: this.getKey120_1(),
          address: this.getKey120_2(),
          tags: this.getKey120_3(),
          action: this.getKey120_4(),
        },
        {
          key: "2",
          name: "第二絮凝段",
          age: this.getKey121_1(),
          address: this.getKey121_2(),
          tags: this.getKey121_3(),
          action: this.getKey121_4(),
        },
        {
          key: "3",
          name: "第三絮凝段",
          age: this.getKey122_1(),
          address: this.getKey122_2(),
          tags: this.getKey122_3(),
          action: this.getKey122_4(),
        },
        {
          key: "4",
          name: "合计",
          age: this.getKey123_1(),
          address: this.getKey123_2(),
          tags: this.getKey123_3(),
          action: this.getKey123_4(),
        },
      ]);
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
