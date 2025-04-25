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
  i18n: require("./i18n_6006"),
  data() {
    return {
      modelVisible: false,
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b9: "2.00 ",
      b11: "0.65",
      b12: "0.70",
      b14: "0.30",
      b16: "1.30",
      b17: "0.80",
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
        exportExcel3(allData1, allData2, allData3, "加药系统ClO2工程量", this);
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
        key6: this.b9,
        key7: this.b10,
        key8: this.b10_1,
        key9: this.b10_2,
        key10: this.b11,
        key11: this.b12,
        key12: this.b13,
        key13: this.b14,
        key14: this.b15,
        key15: this.b16,
        key16: this.b17,
        key17: this.b18,
      };
      exportWord("二氧化氯计算书", "6006.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b9,
        key7: this.b10,
        key8: this.b10_1,
        key9: this.b10_2,
        key10: this.b11,
        key11: this.b12,
        key12: this.b13,
        key13: this.b14,
        key14: this.b15,
        key15: this.b16,
        key16: this.b17,
        key17: this.b18,
      };
      initWordStorage("6006.docx", data);
      this.handleExcelCache("6006.xlsx", "二氧化氯工程量");
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
    quickSort(arr, left, right) {
      let index;
      index = this.partition(arr, left, right);
      if (left < index - 1) {
        this.quickSort(arr, left, index - 1);
      }
      if (index < right) {
        this.quickSort(arr, index, right);
      }
      return arr;
    },
    partition(arr, left, right) {
      let point = arr[Math.floor((left + right) / 2)];
      let i = left,
        j = right;
      while (i <= j) {
        while (arr[i] > point) {
          i++;
        }
        while (arr[j] < point) {
          j--;
        }
        if (i <= j) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      }
      return i;
    },
    findKthLargest(nums, k) {
      nums = this.quickSort(nums, 0, nums.length - 1);
      console.log(nums[k - 1]);
      return nums[k - 1];
    },
    get_a_1() {
      var array1 = [50, 100, 200, 300, 500, 1000, 2000, 3000, 5000];
      var array2 = [
        "WTL（Z）-50",
        "WTL（Z）-100",
        "WTL（Z）-200",
        "WTL（Z）-300",
        "WTL（Z）-500",
        "WTL（Z）-1000",
        "WTL（Z）-2000",
        "WTL（Z）-3000",
        "WTL（Z）-5000",
      ];
      var index = array1.indexOf(this.b10_2);
      return array2[index];
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b5() {
      return (
        ((parseFloat(this.b3) / 24) * parseFloat(this.b4)) /
        parseFloat(this.b4_1)
      ).toFixed(2);
    },
    b5_1() {
      return (parseFloat(this.b5) / 3600).toFixed(2);
    },
    b15() {
      return (parseFloat(this.b13) / parseFloat(this.b14)).toFixed(2);
    },
    b10() {
      return ((parseFloat(this.b5) * parseFloat(this.b9)) / 1000).toFixed(2);
    },
    b10_1() {
      return (parseFloat(this.b5) * parseFloat(this.b9)).toFixed(2);
    },
    b13() {
      return (
        (parseFloat(this.b11) * parseFloat(this.b10)) /
        parseFloat(this.b12)
      ).toFixed(2);
    },
    b18() {
      return (
        parseFloat(this.b16) *
        parseFloat(this.b10 / parseFloat(this.b17) / 0.31)
      ).toFixed(2);
    },
    b10_2() {
      var cal1 = parseFloat(this.b10_1);
      var cal2 = 0;
      if (cal1 < 50) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 100) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 200) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 300) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 500) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1000) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2000) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3000) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 5000) {
        cal2 = cal2 + 1;
      }
      var array = [50, 100, 200, 300, 500, 1000, 2000, 3000, 5000];
      return this.findKthLargest(array, cal2);
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "二氧化氯发生器",
          设备类型: "",
          规格及型号: this.get_a_1(),
          单位: "台",
          数量: "2",
          运行时间: "24h",
          主要材质: "",
          备注: "1用1备",
          运行数量: "1",
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
    console.log("6006-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data1 = [];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "二氧化氯发生器",
        设备类型: "",
        规格及型号: this.get_a_1(),
        单位: "台",
        数量: "2",
        运行时间: "24h",
        主要材质: "",
        备注: "1用1备",
        运行数量: "1",
        单台功率: "",
        用电量: "",
      },
    ];
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
