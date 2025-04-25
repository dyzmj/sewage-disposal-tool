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
  i18n: require("./i18n_1002"),
  data() {
    return {
      modelVisible: false,
      b4: "20000",
      b7: "0.2",
      b8: "30",
      b9: "0.4",
      b10: "80",
      b11: "2",
      b12: "0.3",
      b13: "2",
      b14: "2",
      b14_1: "0.3",
      b18_1: "1.5",
      b19_1: "0.75",
      b20: "0.8",
      b21: "0.3",
      b25: "1.1",
      b27: "500",
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
        this.b4 = 20000;
      } else {
        this.b4 = waterData;
      }
      const sandData = getValueFromLocalStorage("sandData");
      if (sandData == null || sandData == "") {
        this.b10 = 80;
      } else {
        this.b10 = sandData;
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
        exportExcel2(allData1, allData2, "预沉池工程量", this);
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
    exportComputeBook() {
      const data = {
        key1: this.b4,
        key2: this.b4_1,
        key3: this.b4_2,
        key4: this.b7,
        key5: this.b8,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b14,
        key12: this.b14_1,
        key13: this.b16,
        key14: this.b17,
        key15: this.b18,
        key16: this.b18_1,
        key17: this.b19,
        key18: this.b19_1,
        key19: this.b19_2,
        key20: this.b20,
        key21: this.b21,
        key22: this.b22,
        key23: this.b24,
        key24: this.b25,
        key25: this.b26,
        key26: this.b27,
      };
      exportWord("预沉池计算书", "1002.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b4,
        key2: this.b4_1,
        key3: this.b4_2,
        key4: this.b7,
        key5: this.b8,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b14,
        key12: this.b14_1,
        key13: this.b16,
        key14: this.b17,
        key15: this.b18,
        key16: this.b18_1,
        key17: this.b19,
        key18: this.b19_1,
        key19: this.b19_2,
        key20: this.b20,
        key21: this.b21,
        key22: this.b22,
        key23: this.b24,
        key24: this.b25,
        key25: this.b26,
        key26: this.b27,
      };
      initWordStorage("1002.docx", data);
      this.handleExcelCache("1002.xlsx", "预沉池工程量");
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
    getkey1() {
      return this.b16 + "m x" + this.b19_1 + "m x" + this.b22 + "m";
    },
    getkey2() {
      return this.b13;
    },
    getkey3() {
      return (
        "池深" +
        this.b22 +
        "m，N=2*0.55kW，池宽" +
        this.b19_2 +
        "m，轨距" +
        (parseFloat(this.b19_2) + 0.3) +
        "m"
      );
    },
    getkey4() {
      return this.b13;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b4_1() {
      return (parseFloat(this.b4) / 24).toFixed(4);
    },
    b4_2() {
      return (parseFloat(this.b4) / (24 * 60 * 60)).toFixed(6);
    },
    b16() {
      return parseFloat(this.b7) * parseFloat(this.b8);
    },
    b17() {
      return (
        parseFloat(this.b4_2) /
        parseFloat(this.b13) /
        parseFloat(this.b7)
      ).toFixed(9);
    },
    b18() {
      return (parseFloat(this.b17) / parseFloat(this.b9)).toFixed(9);
    },
    b19() {
      return (parseFloat(this.b18_1) / parseFloat(this.b14)).toFixed(2);
    },
    b19_2() {
      return (
        parseFloat(this.b19_1) * parseFloat(this.b14) +
        parseFloat(this.b14_1) * (parseFloat(this.b14) - 1)
      ).toFixed(1);
    },
    b22() {
      return (
        parseFloat(this.b21) +
        parseFloat(this.b20) +
        parseFloat(this.b9)
      ).toFixed(1);
    },
    b24() {
      return Math.pow(
        parseFloat(this.b4_2) /
          2 /
          0.4 /
          parseFloat(this.b19) /
          Math.sqrt(2 * 9.8),
        2 / 3
      ).toFixed(9);
    },
    b26() {
      return Math.sqrt(
        (4 * parseFloat(this.b4_2)) / 3.14 / parseFloat(this.b25)
      ).toFixed(9);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "1",
          名称: "预沉池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: this.getkey2(),
          结构形式: "钢砼",
          备注: "半地下式",
          暖通要求: "无",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "1",
          设备工艺名称: "桁车式吸泥机",
          设备类型: "吸泥机",
          规格及型号: this.getkey3(),
          单位: "台",
          数量: this.getkey4(),
          运行时间: "4h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注:"本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
          运行数量: "",
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
    console.log("1002-activated被调用了");
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
        单体位号: "1",
        名称: "预沉池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getkey2(),
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "1",
        设备工艺名称: "桁车式吸泥机",
        设备类型: "吸泥机",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "4h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注:"本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
        运行数量: "",
        单台功率: "",
        用电量: "",  
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
