<template>
  <div></div>
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
  i18n: require("./i18n_8002"),
  data() {
    return {
      modelVisible: false,
      b3: "20000",
      b8: "15",
      b11: "2",
      b16: "1.45",
      b18: "5",
      b20: "1",
      b21: "2",
      b22: "20",
      b25: "4.0",
      b26: "0.2",
      b31: "2",
      b34: "37.5",
      b35_1: "18.75",
      b37: "3.75",
      b38: "1.00",
      b45: "0.15",
      b46: "0.42",
      b50: "0.9",
      b58: "0.8",
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
            },
            {
              title: "单体位号",
              dataIndex: "单体位号",
              key: "2",
              width: "80px",
              align: "center",
            },
            {
              title: "名称",
              dataIndex: "名称",
              key: "3",
              width: "100px",
              align: "center",
            },
            {
              title: "尺寸(m)",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
            },
            {
              title: "标高(m)",
              dataIndex: "标高(m)",
              key: "5",
              width: "80px",
              align: "center",
            },
            {
              title: "单位",
              dataIndex: "单位",
              key: "6",
              width: "50px",
              align: "center",
            },
            {
              title: "数量",
              dataIndex: "disinfectiontank",
              key: "7",
              width: "50px",
              align: "center",
            },
            {
              title: "结构形式",
              dataIndex: "结构形式",
              key: "8",
              width: "80px",
              align: "center",
            },
            {
              title: "备注",
              dataIndex: "备注",
              key: "9",
              width: "50px",
              align: "center",
            },
            {
              title: "暖通要求",
              dataIndex: "暖通要求",
              key: "10",
              width: "80px",
              align: "center",
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
            },
            {
              title: "设备位号",
              dataIndex: "设备位号",
              key: "2",
              width: "80px",
              align: "center",
            },
            {
              title: "设备工艺名称",
              dataIndex: "设备工艺名称",
              key: "3",
              width: "100px",
              align: "center",
            },
            {
              title: "设备类型",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
              key: "5",
              width: "80px",
              align: "center",
            },
            {
              title: "单位",
              dataIndex: "单位",
              key: "6",
              width: "50px",
              align: "center",
            },
            {
              title: "数量",
              dataIndex: "disinfectiontank",
              key: "7",
              width: "50px",
              align: "center",
            },
            {
              title: "运行时间",
              dataIndex: "运行时间",
              key: "8",
              width: "80px",
              align: "center",
            },
            {
              title: "主要材质",
              dataIndex: "主要材质",
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
            },
            {
              title: "仪表位号",
              dataIndex: "仪表位号",
              key: "2",
              width: "80px",
              align: "center",
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "3",
              width: "100px",
              align: "center",
            },
            {
              title: "安装位置",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
              key: "5",
              width: "80px",
              align: "center",
            },
            {
              title: "单位",
              dataIndex: "单位",
              key: "6",
              width: "50px",
              align: "center",
            },
            {
              title: "数量",
              dataIndex: "disinfectiontank",
              key: "7",
              width: "50px",
              align: "center",
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
            },
          ],
        },
      ],
      data: [],
    };
  },
  methods: {
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
        exportExcel3(allData1, allData2, allData3, "清水池工程量", this);
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
        key2: this.b8,
        key3: this.b9,
        key4: this.b11,
        key5: this.b12,
        key6: this.b13,
        key7: this.b14,
        key8: this.b16,
        key9: this.b17,
        key10: this.b18,
        key11: this.b19,
        key12: this.b20,
        key13: this.b21,
        key14: this.b22,
        key15: this.b23,
        key16: this.b25,
        key17: this.b26,
        key18: this.b27,
        key19: this.b28,
        key20: this.b29,
        key21: this.b31,
        key22: this.b32,
        key23: this.b33,
        key24: this.b34,
        key25: this.b35,
        key26: this.b36,
        key27: this.b37,
        key28: this.b38,
        key29: this.b39,
        key30: this.b42,
        key31: this.b43,
        key32: this.b45,
        key33: this.b46,
        key34: this.b47,
        key35: this.b50,
        key36: this.b53,
        key37: this.b54,
        key38: this.b55,
        key39: this.b56,
        key40: this.b58,
        key41: this.b59,
      };
      exportWord("清水池计算书", "8002.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b8,
        key3: this.b9,
        key4: this.b11,
        key5: this.b12,
        key6: this.b13,
        key7: this.b14,
        key8: this.b16,
        key9: this.b17,
        key10: this.b18,
        key11: this.b19,
        key12: this.b20,
        key13: this.b21,
        key14: this.b22,
        key15: this.b23,
        key16: this.b25,
        key17: this.b26,
        key18: this.b27,
        key19: this.b28,
        key20: this.b29,
        key21: this.b31,
        key22: this.b32,
        key23: this.b33,
        key24: this.b34,
        key25: this.b35,
        key26: this.b36,
        key27: this.b37,
        key28: this.b38,
        key29: this.b39,
        key30: this.b42,
        key31: this.b43,
        key32: this.b45,
        key33: this.b46,
        key34: this.b47,
        key35: this.b50,
        key36: this.b53,
        key37: this.b54,
        key38: this.b55,
        key39: this.b56,
        key40: this.b58,
        key41: this.b59,
      };
      initWordStorage("8002.docx", data);
      this.handleExcelCache("8002.xlsx", "清水池工程量");
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
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b9() {
      return ((parseFloat(this.b3) * parseFloat(this.b8)) / 100).toFixed(0);
    },
    b12() {
      return ((parseFloat(this.b3) * parseFloat(this.b11)) / 100).toFixed(0);
    },
    b13() {
      return ((60 * 36.6 * (3 * 4 + 5 * 5)) / 1000).toFixed(2);
    },
    b14() {
      return (parseFloat(this.b12) + parseFloat(this.b13)).toFixed(2);
    },
    b17() {
      return ((parseFloat(this.b3) * parseFloat(this.b16)) / 24).toFixed(2);
    },
    b19() {
      return (
        ((1 + parseFloat(this.b18) / 100) * parseFloat(this.b3)) /
        24
      ).toFixed(0);
    },
    b23() {
      return (
        3.6 *
        parseFloat(this.b20) *
        parseFloat(this.b22) *
        parseFloat(this.b21)
      ).toFixed(0);
    },
    b27() {
      return (
        (parseFloat(this.b9) + parseFloat(this.b14) + parseFloat(this.b23)) /
        (parseFloat(this.b25) - parseFloat(this.b26))
      ).toFixed(2);
    },
    b28() {
      return (parseFloat(this.b26) * parseFloat(this.b27)).toFixed(2);
    },
    b29() {
      return (
        parseFloat(this.b9) +
        parseFloat(this.b14) +
        parseFloat(this.b23) +
        parseFloat(this.b28)
      ).toFixed(2);
    },
    b32() {
      return (parseFloat(this.b29) / parseFloat(this.b31)).toFixed(2);
    },
    b33() {
      return (parseFloat(this.b27) / parseFloat(this.b31)).toFixed(2);
    },
    b33_1() {
      return (parseFloat(this.b14) / 2 / parseFloat(this.b33)).toFixed(2);
    },
    b35() {
      return this.ROUND(parseFloat(this.b33) / parseFloat(this.b34), 1);
    },
    b36() {
      return (parseFloat(this.b25) + 0.5).toFixed(1);
    },
    b39() {
      return 4.2;
    },
    b42() {
      return (parseFloat(this.b19) * 1.5).toFixed(1);
    },
    b43() {
      return (parseFloat(this.b42) / 3600).toFixed(2);
    },
    b47() {
      return (
        parseFloat(this.b43) /
        Math.pow(
          parseFloat(this.b46) * 2 * 9.8 * Math.pow(parseFloat(this.b45), 3),
          0.5
        )
      ).toFixed(2);
    },
    b53() {
      return (2 * parseFloat(this.b34) * 18.75 * parseFloat(this.b38)).toFixed(
        2
      );
    },
    b54() {
      return ((24 * parseFloat(this.b53)) / parseFloat(this.b3)).toFixed(2);
    },
    b55() {
      return (
        0.185 * Math.log((18.75 * 10) / parseFloat(this.b37)) -
        0.044
      ).toFixed(2);
    },
    b56() {
      return (parseFloat(this.b55) * parseFloat(this.b54)).toFixed(2);
    },
    b59() {
      return (parseFloat(this.b58) * parseFloat(this.b56) * 60).toFixed(2);
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("8002-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data1 = [];
    this.data2 = [];
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
