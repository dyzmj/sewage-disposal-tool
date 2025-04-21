<template>
  <div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel,
  exportWord,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
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
        exportExcel(allData3, "脱水加药工程量", this);
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
        key3: this.b6_1,
        key4: this.b8,
        key5: this.b38_1,
        key6: this.b43_1,
      };
      exportWord("脱水加药计算书", "9002.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b1,
        key2: this.b2,
        key3: this.b6_1,
        key4: this.b8,
        key5: this.b38_1,
        key6: this.b43_1,
      };
      initWordStorage("9002.docx", data);
      this.handleExcelCache("9002.xlsx", "脱水加药工程量");
    },
    handleExcelCache(path, name) {
      try {
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
        const data = [...allData3];
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
    get_a_1() {
      return parseFloat(this.b31) + parseFloat(this.b31_1);
    },
    get_a_2() {
      return parseFloat(this.b31) + parseFloat(this.b31_1);
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
      ).toFixed(2);
    },
    b26() {
      return (
        parseFloat(this.b23) /
        parseFloat(this.b23) /
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
    this.data1 = [];
    this.data2 = [];
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
