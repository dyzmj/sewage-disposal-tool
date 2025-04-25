<template>
  <div></div>
  </template>

<script>
import { mapState } from "vuex";
import {
  exportExcel,
  exportWord,
  getValueFromLocalStorage,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_1007"),
  data() {
    return {
      modelVisible: false,
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b7: "35",
      b8: "2",
      b9: "0.5",
      b11_1: "3",
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
        this.b3 = 20000;
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
        exportExcel(allData2, "活性炭粉末工程量", this);
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
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b7,
        key7: this.b8,
        key8: this.b9,
        key9: this.b10,
        key10: this.b11,
        key11: this.b11_1,
      };
      exportWord("活性炭粉末计算书", "1007.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b7,
        key7: this.b8,
        key8: this.b9,
        key9: this.b10,
        key10: this.b11,
        key11: this.b11_1,
      };
      initWordStorage("1007.docx", data);
      this.handleExcelCache("1007.xlsx", "活性炭粉末工程量");
    },
    handleExcelCache(path, name) {
      try {
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
        initExcelStorage(null, allData2, null, path, name);
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
    getkey1() {
      return "料仓容积=" + this.b11_1 + " m3";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b5() {
      return (
        parseFloat(this.b3) / 24 +
        parseFloat(this.b4) / parseFloat(this.b4_1)
      ).toFixed(2);
    },
    b5_1() {
      return (parseFloat(this.b5) / 3600).toFixed(2);
    },
    b10() {
      storeValueInLocalStorage("carbonData", this.b7);
      return ((parseFloat(this.b7) * parseFloat(this.b3)) / 1000 / 24).toFixed(
        8
      );
    },
    b11() {
      return (
        (((parseFloat(this.b7) * parseFloat(this.b3)) /
          parseFloat(this.b9) /
          1000) *
          parseFloat(this.b8)) /
        1000
      ).toFixed(2);
    },
    data2() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "投加系统",
          设备类型: "粉末活性炭干式投加系统",
          规格及型号: this.getkey1(),
          单位: "套",
          数量: "1",
          运行时间: "",
          主要材质: "",
          备注: "含物料储存、定量投加、射流混合及相关辅助部分",
          运行数量: "1",
          单台功率: "",
          用电量: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "投加系统",
        设备类型: "粉末活性炭干式投加系统",
        规格及型号: this.getkey1(),
        单位: "套",
        数量: "1",
        运行时间: "",
        主要材质: "",
        备注: "含物料储存、定量投加、射流混合及相关辅助部分",
        运行数量: "1",
        单台功率: "",
        用电量: "",
      },
    ];
  },
  activated() {
    this.initWaterData();
    console.log("1007-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data2 = [
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "投加系统",
        Dimensions: "粉末活性炭干式投加系统",
        规格及型号: this.getkey1(),
        单位: "套",
        disinfectiontank: "1",
        运行时间: "",
        主要材质: "",
        备注: "含物料储存、定量投加、射流混合及相关辅助部分",
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
