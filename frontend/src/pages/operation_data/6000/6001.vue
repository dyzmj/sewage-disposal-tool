<template>
  <div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel,
  exportWord,
  getValueFromLocalStorage,
  initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_6001"),
  data() {
    return {
      modelVisible: false,
      designScale: "20000",
      totalChangeFactor: "1",
      contactTime: "30",
      disinfectiontank: "2",
      contactPoolDepth: "2.00",
      singlecellWidth: "2.00",
      division: "4",
      roundingFlowLength: "52.40",
      partitionWallThickness: "0.20",
      b12_1: "0.3",
      columns: [
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
        this.designScale = 40000;
      } else {
        this.designScale = waterData;
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
    exportComputeBook() {
      // var element = document.querySelector("#testApp");
      // var html = element.outerHTML;
      // exportRtf("接触消毒池计算书", html, this);
      const data = {
        key1: this.designScale,
        unit1: this.$t("designScaleUnit"),
        key2: this.singleTankVolume1,
        unit2: this.$t("singleUnit1"),
        key3: this.singleTankVolume2,
        unit3: this.$t("singleUnit2"),
      };
      exportWord("接触消毒池计算书", "6001.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.designScale,
        unit1: this.$t("designScaleUnit"),
        key2: this.singleTankVolume1,
        unit2: this.$t("singleUnit1"),
        key3: this.singleTankVolume2,
        unit3: this.$t("singleUnit2"),
      };
      initWordStorage("6001.docx", data);
      this.handleExcelCache("6001.xlsx", "接触消毒池工程量");
    },
    handleExcelCache(path, name) {
      try {
        // 处理表头信息
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns),
          this.flattenSecondRowColumns(this.columns),
        ];
        // 初始化 allData
        const allData1 = [
          ...headerData1,
          ...this.data.map((item) => Object.values(item)),
        ];

        const data = [...allData1];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    exportExcel() {
      try {
        // 处理表头信息
        const firstRowHeader = this.flattenFirstRowColumns(this.columns);
        const secondRowHeader = this.flattenSecondRowColumns(this.columns);
        // 合并表头信息
        const headerData = [firstRowHeader, secondRowHeader];
        // 初始化 allData
        const allData = [
          ...headerData,
          ...this.data.map((item) => Object.values(item)),
        ];
        // 导出 Excel
        exportExcel(allData, "接触消毒池工程量", this);
      } catch (error) {
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    // 展平第一行表头
    flattenFirstRowColumns(columns) {
      let firstRowHeader = [];
      columns.forEach((column) => {
        firstRowHeader.push(column.title);
      });
      return firstRowHeader;
    },
    // 展平第二行表头
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
    getDisinfectiontank() {
      return this.disinfectiontank;
    },
    getDimensions() {
      return (
        parseFloat(this.poolLength) +
        "m x " +
        this.poolWidth +
        "m x " +
        this.contactPoolDepth +
        "m"
      );
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    singleTankVolume1() {
      return (
        (parseFloat(this.designScale) * parseFloat(this.totalChangeFactor)) /
        24
      ).toFixed(2);
    },
    singleTankVolume2() {
      return (
        (parseFloat(this.designScale) * parseFloat(this.totalChangeFactor)) /
        (24 * 60 * 60)
      ).toFixed(2);
    },
    totalPoolCapacity() {
      return (
        parseFloat(this.singleTankVolume1) *
        (parseFloat(this.contactTime) / 60)
      ).toFixed(2);
    },
    everyPoolCapacity() {
      return (
        parseFloat(this.totalPoolCapacity) / parseFloat(this.disinfectiontank)
      ).toFixed(2);
    },
    flowLength() {
      return (
        parseFloat(this.everyPoolCapacity).toFixed(1) /
        parseFloat(this.contactPoolDepth) /
        parseFloat(this.singlecellWidth)
      ).toFixed(2);
    },
    poolLength() {
      return (
        parseFloat(this.roundingFlowLength) / parseFloat(this.division)
      ).toFixed(2);
    },
    poolWidth() {
      return (
        parseFloat(this.division) * parseFloat(this.singlecellWidth) +
        (parseFloat(this.division) - 1) *
          parseFloat(this.partitionWallThickness)
      ).toFixed(2);
    },
    data() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "接触消毒池",
          Dimensions: this.getDimensions(),
          标高: "",
          单位: "座",
          disinfectiontank: this.getDisinfectiontank(),
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("6001-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data = [
      {
        序号: "1",
        单体位号: "",
        名称: "接触消毒池",
        Dimensions: this.getDimensions(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getDisinfectiontank(),
        结构形式: "",
        备注: "",
        暖通要求: "",
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
