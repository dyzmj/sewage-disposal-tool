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
  i18n: require("./i18n_1001"),
  data() {
    return {
      modelVisible: false,
      b3_1: "120000",
      b4: "5",
      b5: "72",
      b6_1: "6",
      b9: "14",
      b10: "1.05",
      b15: "16",
      b16_1: "66",
      b17: "8",
      b18_1: "8.5",
      b22: "2",
      b25: "0.6",
      b28: "0.05",
      b31: "2",
      b33_1: "0.75",
      b35: "1.12",
      b38: "0.1",
      b39: "0.25",
      b42: "75",
      b46: "0.0024",
      b48: "12",
      b56: "3.5",
      b58: "600",
      b59: "70",
      b61: "7.38",
      b62: "0.0135",
      b65: "0.45",
      b67: "1.5",
      b68: "1",
      b69: "0.3",
      b70_1: "6",
      b72: "1.5",
      b77: "1",
      b79_1: "2",
      b82: "1.2",
      b84_1: "2",
      b87: "2.55",
      b89: "0.6",
      b92: "1.2",
      b94_1: "2",
      b96: "1",
      b96_1: "1",
      b99: "2",
      b102: "0.3",
      b103: "0.3",
      b104: "2.0",
      b105: "0.6",
      b106: "1.5",
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
              dataIndex: "Dimensions",
              key: "4",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "Dimensions" },
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
              key: "5",
              width: "180px",
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
      console.log("1001初始化水量数据方法被调用");
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b3_1 = 120000;
      } else {
        this.b3_1 = waterData;
      }
    },
    exportComputeBook() {
      const data = {
        key103: this.b3_1,
        key1: this.b4,
        key2: this.b5,
        key3: this.b6_1,
        key4: this.b9,
        key5: this.b10,
        key6: this.b12_1,
        key7: this.b14,
        key8: this.b15,
        key9: this.b16,
        key10: this.b16_1,
        key11: this.b17,
        key12: this.b18_1,
        key13: this.b19,
        key14: this.b21,
        key15: this.b22,
        key16: this.b23,
        key17: this.b24,
        key18: this.b25,
        key19: this.b26,
        key20: this.b27,
        key21: this.b28,
        key22: this.b29,
        key23: this.b31,
        key24: this.b32,
        key25: this.b33,
        key26: this.b33_1,
        key27: this.b35,
        key28: this.b36,
        key29: this.b37,
        key30: this.b38,
        key31: this.b39,
        key32: this.b40,
        key33: this.b41,
        key34: this.b42,
        key35: this.b42_1,
        key36: this.b43,
        key37: this.b44,
        key38: this.b45,
        key39: this.b46,
        key40: this.b47,
        key41: this.b48_1,
        key42: this.b49,
        key43: this.b50,
        key44: this.b51,
        key45: this.b52,
        key46: this.b53,
        key47: this.b55,
        key48: this.b56,
        key49: this.b57,
        key50: this.b58_1,
        key51: this.b59,
        key52: this.b60,
        key53: this.b61,
        key54: this.b62,
        key55: this.b63,
        key56: this.b64,
        key57: this.b65,
        key58: this.b66,
        key59: this.b67,
        key60: this.b69,
        key61: this.b70,
        key62: this.b70_1,
        key63: this.b71,
        key64: this.b71_1,
        key65: this.b72,
        key66: this.b73,
        key67: this.b76,
        key68: this.b77,
        key69: this.b78,
        key70: this.b79_1,
        key71: this.b79_2,
        key72: this.b81,
        key73: this.b82,
        key74: this.b83,
        key75: this.b84_1,
        key76: this.b84_2,
        key77: this.b86,
        key78: this.b87,
        key79: this.b88,
        key80: this.b89,
        key81: this.b91,
        key82: this.b92,
        key83: this.b93,
        key84: this.b94_1,
        key85: this.b94_2,
        key86: this.b96,
        key87: this.b96_1,
        key88: this.b97,
        key89: this.b97_1,
        key90: this.b98_1,
        key91: this.b99,
        key92: this.b99_1,
        key93: this.b100_1,
        key94: this.b102,
        key95: this.b103,
        key96: this.b104,
        key97: this.b105,
        key98: this.b106,
        key99: this.b107,
        key100: this.b110,
        key101: this.b110_1,
        key102: this.b110_2,
      };
      exportWord("生物接触氧化池计算书", "1001.docx", data, this);
    },
    refreshInitData() {
      console.log("1001刷新方法被调用");
      this.initWaterData();
      // this.$message.info(this.$t("refreshSucc"));
      const data = {
        key103: this.b3_1,
        key1: this.b4,
        key2: this.b5,
        key3: this.b6_1,
        key4: this.b9,
        key5: this.b10,
        key6: this.b12_1,
        key7: this.b14,
        key8: this.b15,
        key9: this.b16,
        key10: this.b16_1,
        key11: this.b17,
        key12: this.b18_1,
        key13: this.b19,
        key14: this.b21,
        key15: this.b22,
        key16: this.b23,
        key17: this.b24,
        key18: this.b25,
        key19: this.b26,
        key20: this.b27,
        key21: this.b28,
        key22: this.b29,
        key23: this.b31,
        key24: this.b32,
        key25: this.b33,
        key26: this.b33_1,
        key27: this.b35,
        key28: this.b36,
        key29: this.b37,
        key30: this.b38,
        key31: this.b39,
        key32: this.b40,
        key33: this.b41,
        key34: this.b42,
        key35: this.b42_1,
        key36: this.b43,
        key37: this.b44,
        key38: this.b45,
        key39: this.b46,
        key40: this.b47,
        key41: this.b48_1,
        key42: this.b49,
        key43: this.b50,
        key44: this.b51,
        key45: this.b52,
        key46: this.b53,
        key47: this.b55,
        key48: this.b56,
        key49: this.b57,
        key50: this.b58_1,
        key51: this.b59,
        key52: this.b60,
        key53: this.b61,
        key54: this.b62,
        key55: this.b63,
        key56: this.b64,
        key57: this.b65,
        key58: this.b66,
        key59: this.b67,
        key60: this.b69,
        key61: this.b70,
        key62: this.b70_1,
        key63: this.b71,
        key64: this.b71_1,
        key65: this.b72,
        key66: this.b73,
        key67: this.b76,
        key68: this.b77,
        key69: this.b78,
        key70: this.b79_1,
        key71: this.b79_2,
        key72: this.b81,
        key73: this.b82,
        key74: this.b83,
        key75: this.b84_1,
        key76: this.b84_2,
        key77: this.b86,
        key78: this.b87,
        key79: this.b88,
        key80: this.b89,
        key81: this.b91,
        key82: this.b92,
        key83: this.b93,
        key84: this.b94_1,
        key85: this.b94_2,
        key86: this.b96,
        key87: this.b96_1,
        key88: this.b97,
        key89: this.b97_1,
        key90: this.b98_1,
        key91: this.b99,
        key92: this.b99_1,
        key93: this.b100_1,
        key94: this.b102,
        key95: this.b103,
        key96: this.b104,
        key97: this.b105,
        key98: this.b106,
        key99: this.b107,
        key100: this.b110,
        key101: this.b110_1,
        key102: this.b110_2,
      };
      initWordStorage("1001.docx", data);
      this.handleExcelCache("1001.xlsx", "生物接触氧化池工程量");
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
    ROUNDUP(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.ceil(number * multiplier) / multiplier;
    },
    truncateDecimals(number, digits) {
      let power = Math.pow(10, digits);
      return Math.floor(number * power) / power;
    },
    getDisinfectiontank() {
      return "to do";
    },
    getkey1() {
      return this.b110 + "m x" + this.b110_1 + "m x" + this.b110_2 + "m";
    },
    getKey2() {
      return (
        "Q=" +
        (parseFloat(this.b69_1) / parseFloat(this.b70_1)).toFixed(1) +
        "m3/h, H=" +
        this.b73 +
        "m"
      );
    },
    getKey3() {
      return (parseFloat(this.b70_1) + parseFloat(this.b71_1)).toFixed(0);
    },
    getKey4() {
      return this.b100_1 + "m3/min, P=" + this.b98_1 + "KPa";
    },
    getKey5() {
      return (parseFloat(this.b99) + parseFloat(this.b99_1)).toFixed(0);
    },
    getKey6() {
      return this.b70_1 + "用" + this.b71_1 + "备";
    },
    getKey7() {
      return this.b99 + "用" + this.b99_1 + "备";
    },
    getKey8() {
      return (parseFloat(this.b15) * 5).toFixed(0);
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
          "生物接触氧化池工程量",
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
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_2() {
      return (parseFloat(this.b3_1) / 24).toFixed(0);
    },
    b3_3() {
      return (parseFloat(this.b3_1) / (24 * 60 * 60)).toFixed(6);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 60).toFixed(2);
    },
    b12() {
      return (this.b3_2 * this.b10).toFixed(0);
    },
    b12_1() {
      return (parseFloat(this.b12) / 3600).toFixed(2);
    },
    b14() {
      return (parseFloat(this.b12) / this.b4).toFixed(0);
    },
    b16() {
      return (parseFloat(this.b14) / this.b15).toFixed(3);
    },
    b18() {
      return (parseFloat(this.b16_1) / this.b17).toFixed(2);
    },
    b19() {
      return (parseFloat(this.b17) / this.b18_1).toFixed(6);
    },
    b21() {
      return (parseFloat(this.b9) * this.b16_1).toFixed(0);
    },
    b21_1() {
      return (parseFloat(this.b21) / 1000).toFixed(3);
    },
    b21_2() {
      return (parseFloat(this.b21_1) * 3600).toFixed(1);
    },
    b23() {
      return this.ROUNDUP(this.b17 / this.b22, 0);
    },
    b24() {
      return this.b18_1;
    },
    b26() {
      return parseFloat(0.45 * Math.pow(this.b21_1, 0.4)).toFixed(6);
    },
    b27() {
      return this.b104;
    },
    b29() {
      return this.ROUNDUP(
        (
          parseFloat(0.2 * this.b27) +
          parseFloat(2.5 * this.b26) +
          parseFloat(this.b28) +
          0.075
        ).toFixed(2),
        2
      );
    },
    b32() {
      return (
        0.81 *
        Math.pow(
          parseFloat(
            (parseFloat(this.b16_1) * parseFloat(this.b9)) /
              (1000 * parseFloat(this.b31))
          ),
          2 / 3
        )
      ).toFixed(6);
    },
    b33() {
      return parseFloat(this.b32) + 0.2;
    },
    b36() {
      return parseFloat(this.b21_1);
    },
    b37() {
      return (parseFloat(this.b36) / parseFloat(this.b35)).toFixed(3);
    },
    b40() {
      return this.ROUNDUP((2 * parseFloat(this.b17)) / parseFloat(this.b39), 0);
    },
    b41() {
      return (parseFloat(this.b36) / parseFloat(this.b40)).toFixed(6);
    },
    b42_1() {
      return this.b42 / 1000;
    },
    b43() {
      return (
        (4 * parseFloat(this.b36)) /
        parseFloat(this.b40) /
        (Math.PI.toFixed(9) * Math.pow(parseFloat(this.b42_1), 2))
      ).toFixed(6);
    },
    b44() {
      return (parseFloat(this.b18_1) - 0.9) / 2;
    },
    b45() {
      return (parseFloat(this.b44) / parseFloat(this.b42_1)).toFixed(5);
    },
    b47() {
      return (parseFloat(this.b46) * parseFloat(this.b16_1)).toFixed(4);
    },
    b48_1() {
      return parseFloat(this.b48) / 1000;
    },
    b49() {
      return ((Math.PI * Math.pow(parseFloat(this.b48_1), 2)) / 4).toFixed(6);
    },
    b50() {
      return this.ROUNDUP(parseFloat(this.b47) / parseFloat(this.b49), 0);
    },
    b51() {
      return this.ROUNDUP(parseFloat(this.b50) / parseFloat(this.b40), 0);
    },
    b52() {
      return ((2 * parseFloat(this.b44)) / parseFloat(this.b51)).toFixed(6);
    },
    b53() {
      let a1 = parseFloat(this.b9) * parseFloat(this.b16_1);
      let a2 =
        1000 *
        parseFloat(this.b40) *
        parseFloat(this.b51) *
        parseFloat(this.b49);
      return this.truncateDecimals(a1 / a2, 2);
    },
    b55() {
      return (
        (1.5 *
          parseFloat(this.b9) *
          parseFloat(this.b16_1) *
          60 *
          parseFloat(this.b6_1)) /
        1000
      ).toFixed(2);
    },
    b57() {
      return Math.pow(
        (4 * parseFloat(this.b55)) / (Math.PI * parseFloat(this.b56)),
        0.5
      ).toFixed(5);
    },
    b58_1() {
      return parseFloat(this.b58) / 1000;
    },
    b60() {
      return (
        (parseFloat(this.b21_1) * 4) /
        (Math.PI * Math.pow(parseFloat(this.b58_1), 2))
      ).toFixed(3);
    },
    b63() {
      return (
        parseFloat(this.b62) * parseFloat(this.b59) +
        (parseFloat(this.b61) * Math.pow(parseFloat(this.b60), 2)) / (2 * 9.81)
      ).toFixed(6);
    },
    b64() {
      return (
        (8 * Math.pow(parseFloat(this.b35), 2)) / (2 * 9.81) +
        (10 * Math.pow(parseFloat(this.b43), 2)) / (2 * 9.81)
      ).toFixed(6);
    },
    b66() {
      return (0.022 * parseFloat(this.b65) * parseFloat(this.b9)).toFixed(4);
    },
    b69_1() {
      return (parseFloat(this.b55) / parseFloat(this.b6_2) / 1.5).toFixed(1);
    },
    b70() {
      return this.b104;
    },
    b71() {
      return (
        (parseFloat(this.b67) / parseFloat(this.b68) - 1) *
        ((1 - parseFloat(this.b69)) * parseFloat(this.b70))
      ).toFixed(1);
    },
    b71_1() {
      if (this.ROUNDUP(parseFloat(this.b70_1) / 3, 0) === 0) {
        return 1;
      }
      return this.ROUNDUP(parseFloat(this.b70_1) / 3, 0);
    },
    b73() {
      return this.ROUNDUP(
        parseFloat(this.b63) +
          parseFloat(this.b64) +
          parseFloat(this.b66) +
          parseFloat(this.b71) +
          parseFloat(this.b72),
        2
      );
    },
    b76() {
      return this.b12_1;
    },
    b78() {
      return (parseFloat(this.b12) / 3600 / parseFloat(this.b77)).toFixed(6);
    },
    b79_2() {
      return (parseFloat(this.b78) / parseFloat(this.b79_1)).toFixed(6);
    },
    b79() {
      return "2" + "×" + this.ROUNDUP(parseFloat(this.b79_2), 2).toFixed(2);
    },
    b81() {
      return this.b12_1;
    },
    b83() {
      return (parseFloat(this.b12) / 3600 / parseFloat(this.b82)).toFixed(6);
    },
    b84_2() {
      return (parseFloat(this.b83) / parseFloat(this.b84_1)).toFixed(6);
    },
    b84() {
      return "2" + "×" + this.ROUNDUP(parseFloat(this.b84_2), 2).toFixed(2);
    },
    b86() {
      return ((parseFloat(this.b16_1) * parseFloat(this.b9)) / 1000).toFixed(3);
    },
    b88() {
      return (parseFloat(this.b86) / parseFloat(this.b87)).toFixed(6);
    },
    b91() {
      return ((parseFloat(this.b16_1) * parseFloat(this.b9)) / 1000).toFixed(3);
    },
    b93() {
      return (parseFloat(this.b91) / parseFloat(this.b92)).toFixed(6);
    },
    b94_2() {
      return (parseFloat(this.b93) / parseFloat(this.b94_1)).toFixed(6);
    },
    b94() {
      return "2" + "×" + this.ROUNDUP(parseFloat(this.b94_2), 2).toFixed(2);
    },
    b97() {
      return (parseFloat(this.b12) / parseFloat(this.b15)).toFixed(3);
    },
    b97_1() {
      return (parseFloat(this.b97) / 60).toFixed(5);
    },
    b107() {
      return (
        parseFloat(this.b103) +
        parseFloat(this.b104) +
        parseFloat(this.b105) +
        parseFloat(this.b106)
      );
    },
    b98() {
      return parseFloat(this.b107) + 1;
    },
    b98_1() {
      return (parseFloat(this.b98) * 9.8).toFixed(2);
    },
    b99_1() {
      if (this.ROUNDUP(parseFloat(this.b99) / 3, 0) === 0) {
        return 1;
      }
      return this.ROUNDUP(parseFloat(this.b99) / 3, 0);
    },
    b100() {
      return this.ROUNDUP(
        (parseFloat(this.b97) * parseFloat(this.b15)) / parseFloat(this.b99),
        2
      ).toFixed(0);
    },
    b100_1() {
      return (parseFloat(this.b100) / 60).toFixed(2);
    },
    b110() {
      return (
        (parseFloat(this.b18_1) * parseFloat(this.b15)) / 2 +
        (parseFloat(this.b15) / 2 - 1) * parseFloat(this.b102)
      ).toFixed(1);
    },
    b110_1() {
      return (
        parseFloat(this.b17) * 2 +
        parseFloat(this.b79_1) +
        parseFloat(this.b94_1) +
        3 * parseFloat(this.b102)
      ).toFixed(1);
    },
    b110_2() {
      return this.b107;
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "陶粒生物接触氧化池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: "1",
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
          规格及型号: this.getKey2(),
          单位: "台",
          disinfectiontank: this.getKey3(),
          运行时间: "",
          主要材质: "",
          备注: this.getKey6(),
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "反冲洗风机",
          设备类型: "",
          规格及型号: this.getKey4(),
          单位: "台",
          disinfectiontank: this.getKey5(),
          运行时间: "",
          主要材质: "",
          备注: this.getKey7(),
        },
      ];
    },
    data3() {
      return [
        {
          序号: "",
          仪表位号: "",
          仪表名称: "电动阀",
          安装位置: "",
          规格及型号: "",
          单位: "台",
          disinfectiontank: this.getKey8(),
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
    console.log("1001-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.refreshInitData();
    this.data1 = [
      {
        序号: "",
        单体位号: "",
        名称: "陶粒生物接触氧化池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: "1",
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
        规格及型号: this.getKey2(),
        单位: "台",
        disinfectiontank: this.getKey3(),
        运行时间: "",
        主要材质: "",
        备注: this.getKey6(),
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "反冲洗风机",
        设备类型: "",
        规格及型号: this.getKey4(),
        单位: "台",
        disinfectiontank: this.getKey5(),
        运行时间: "",
        主要材质: "",
        备注: this.getKey7(),
      },
    ];
    this.data3 = [
      {
        序号: "",
        仪表位号: "",
        仪表名称: "电动阀",
        安装位置: "",
        规格及型号: "",
        单位: "台",
        disinfectiontank: this.getKey8(),
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
