<template>
  <div></div>
  </template>

<script>
import { mapState } from "vuex";
import {
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_6005"),
  data() {
    return {
      modelVisible: false,
      b4: "20000",
      b5: "5",
      b8: "2.0",
      b9: "8",
      b10: "0.5",
      b11: "1000",
      b12: "3.0",
      b13: "1000",
      b17: "0.875",
      b19: "525",
      b23: "7",
      b24: "2",
      b25_1: "3.00",
      b27: "4.5",
      b28: "10.0",
      b31: "3.0",
      b32: "2.0",
      b33_1: "2.00",
      b35: "2.0",
      b36_1: "7.00",
      b40_1: "50.00",
      b41_1: "50.00",
      b42_1: "500.00",
      b43_1: "50.00",
      b44_1: "300.00",
      b53_2: "1",
      b53_3: "1",
      b56_2: "1",
      b56_3: "1",
      b59_1: "1",
      b62_1: "3.0",
      b63: "3.0",
      b67_2: "1",
      b67_3: "1",
      b72_2: "1",
      b72_3: "1",
      b74_2: "1",
      b74_3: "1",
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
        this.b4 = 40000;
      } else {
        this.b4 = waterData;
      }
      const clData = getValueFromLocalStorage("clData");
      if (clData == null || clData == "") {
        this.b17 = 0.875;
      } else {
        this.b17 = clData;
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
        exportExcel3(allData1, allData2, allData3, "加药系统NaClO工程量", this);
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
        key1: this.b4,
        key2: this.b5,
        key3: this.b8,
        key4: this.b9,
        key5: this.b10,
        key6: this.b11,
        key7: this.b12,
        key8: this.b13,
        key9: this.b16,
        key10: this.b8,
        key11: this.b16,
        key12: this.b20,
        key13: this.b21,
        key14: this.b22,
        key15: this.b23,
        key16: this.b24,
        key17: this.b25,
        key18: this.b27,
        key19: this.b28,
        key20: this.b29,
        key21: this.b30,
        key22: this.b31,
        key23: this.b32,
        key24: this.b33,
        key25: this.b33_1,
        key26: this.b34,
        key27: this.b35,
        key28: this.b36,
        key29: this.b36_1,
        key30: this.b38,
      };
      exportWord("次氯酸钠计算书", "6005.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b4,
        key2: this.b5,
        key3: this.b8,
        key4: this.b9,
        key5: this.b10,
        key6: this.b11,
        key7: this.b12,
        key8: this.b13,
        key9: this.b16,
        key10: this.b8,
        key11: this.b16,
        key12: this.b20,
        key13: this.b21,
        key14: this.b22,
        key15: this.b23,
        key16: this.b24,
        key17: this.b25,
        key18: this.b27,
        key19: this.b28,
        key20: this.b29,
        key21: this.b30,
        key22: this.b31,
        key23: this.b32,
        key24: this.b33,
        key25: this.b33_1,
        key26: this.b34,
        key27: this.b35,
        key28: this.b36,
        key29: this.b36_1,
        key30: this.b38,
      };
      initWordStorage("6005.docx", data);
      this.handleExcelCache("6005.xlsx", "次氯酸钠工程量");
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
    get_a_1_1() {
      return this.b25_1 + "m3";
    },
    get_a_1_2() {
      return 2;
    },
    get_a_2_1() {
      var array1 = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      var array2 = [
        "MS1A064A",
        "MS1A064B",
        "MS1A064C",
        "MS1A094A",
        "MS1A094B",
        "MS1A094C",
        "MS1B108A",
        "MS1B108B",
        "MS1B108C",
        "MS1C138A",
        "MS1C138B",
        "MS1C138C",
        "MS1C165A",
        "MS1C165B",
        "MS1C165C",
        "MS1C165C",
      ];
      var index = array1.indexOf(this.b53_4);
      return array2[index];
    },
    get_a_2_2() {
      return 2;
    },
    get_a_2_3() {
      return 1;
    },
    get_a_3_1() {
      var array1 = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      var array2 = [
        "MS1A064A",
        "MS1A064B",
        "MS1A064C",
        "MS1A094A",
        "MS1A094B",
        "MS1A094C",
        "MS1B108A",
        "MS1B108B",
        "MS1B108C",
        "MS1C138A",
        "MS1C138B",
        "MS1C138C",
        "MS1C165A",
        "MS1C165B",
        "MS1C165C",
        "MS1C165C",
      ];
      var index = array1.indexOf(this.b56_4);
      return array2[index];
    },
    get_a_3_2() {
      return 2;
    },
    get_a_3_3() {
      return 1;
    },
    get_a_4_1() {
      return 4;
    },
    get_a_5_1() {
      return 4;
    },
    get_a_6_1() {
      return 4;
    },
    get_a_7_1() {
      return 4;
    },
    get_a_8_1() {
      return "流量=" + this.b59 + "m3/h";
    },
    get_a_8_2() {
      return 1;
    },
    get_a_9_1() {
      return "容积=" + this.b50 + "m3";
    },
    get_a_9_2() {
      return this.b51;
    },
    get_b_1_1() {
      return "发生量=" + this.b62 + "m3/h功率=" + this.b62_1 + "kw";
    },
    get_b_1_2() {
      return 1;
    },
    get_b_2_1() {
      return "容积=" + this.b65 + "m3";
    },
    get_b_2_2() {
      return 2;
    },
    get_b_3_1() {
      var array1 = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      var array2 = [
        "MS1A064A",
        "MS1A064B",
        "MS1A064C",
        "MS1A094A",
        "MS1A094B",
        "MS1A094C",
        "MS1B108A",
        "MS1B108B",
        "MS1B108C",
        "MS1C138A",
        "MS1C138B",
        "MS1C138C",
        "MS1C165A",
        "MS1C165B",
        "MS1C165C",
        "MS1C165C",
      ];
      var index = array1.indexOf(this.b67_4);
      return array2[index];
    },
    get_b_3_2() {
      return 2;
    },
    get_b_3_3() {
      return 1;
    },
    get_b_4_1() {
      var array1 = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      var array2 = [
        "MS1A064A",
        "MS1A064B",
        "MS1A064C",
        "MS1A094A",
        "MS1A094B",
        "MS1A094C",
        "MS1B108A",
        "MS1B108B",
        "MS1B108C",
        "MS1C138A",
        "MS1C138B",
        "MS1C138C",
        "MS1C165A",
        "MS1C165B",
        "MS1C165C",
        "MS1C165C",
      ];
      var index = array1.indexOf(this.b72_4);
      return array2[index];
    },
    get_b_4_2() {
      return 2;
    },
    get_b_4_3() {
      return 2;
    },
    get_b_5_1() {
      var array1 = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      var array2 = [
        "MS1A064A",
        "MS1A064B",
        "MS1A064C",
        "MS1A094A",
        "MS1A094B",
        "MS1A094C",
        "MS1B108A",
        "MS1B108B",
        "MS1B108C",
        "MS1C138A",
        "MS1C138B",
        "MS1C138C",
        "MS1C165A",
        "MS1C165B",
        "MS1C165C",
        "MS1C165C",
      ];
      var index = array1.indexOf(this.b74_4);
      return array2[index];
    },
    get_b_5_2() {
      return 2;
    },
    get_b_5_3() {
      return 1;
    },
    get_b_6_1() {
      return 6;
    },
    get_b_7_1() {
      return 6;
    },
    get_b_8_1() {
      return 6;
    },
    get_b_9_1() {
      return 6;
    },
    get_b_10_1() {
      return "容积=" + this.b69 + "m3";
    },
    get_b_10_2() {
      return 2;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b6() {
      return (parseFloat(this.b4) * (1 + parseFloat(this.b5) / 100)).toFixed(0);
    },
    b6_1() {
      return (parseFloat(this.b6) / 24).toFixed(1);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 3600).toFixed(2);
    },
    b16() {
      storeValueInLocalStorage("naclo1Data", this.b8);
      return ((parseFloat(this.b8) * parseFloat(this.b6_1)) / 1000).toFixed(2);
    },
    b20() {
      return (
        (parseFloat(this.b16) * 24) /
        (parseFloat(this.b9) / 100)
      ).toFixed(0);
    },
    b21() {
      return (
        (parseFloat(this.b17) * 24) /
        (parseFloat(this.b9) / 100)
      ).toFixed(1);
    },
    b22() {
      return (
        (parseFloat(this.b20) + parseFloat(this.b21)) /
        parseFloat(this.b11)
      ).toFixed(4);
    },
    b25() {
      return (
        (parseFloat(this.b22) * parseFloat(this.b23)) /
        parseFloat(this.b24)
      ).toFixed(5);
    },
    b29() {
      return (
        parseFloat(this.b27) *
        (parseFloat(this.b16) + parseFloat(this.b17))
      ).toFixed(4);
    },
    b30() {
      return (parseFloat(this.b29) / (parseFloat(this.b12) / 100)).toFixed(2);
    },
    b33() {
      return (
        (parseFloat(this.b30) * 8) /
        parseFloat(this.b13) /
        parseFloat(this.b32)
      ).toFixed(3);
    },
    b34() {
      return (
        ((parseFloat(this.b16) + parseFloat(this.b17)) * 24) /
        (parseFloat(this.b10) / 100) /
        parseFloat(this.b11)
      ).toFixed(1);
    },
    b36() {
      return (parseFloat(this.b34) / parseFloat(this.b35)).toFixed(1);
    },
    b38() {
      return (
        (parseFloat(this.b16) + parseFloat(this.b17)) *
        parseFloat(this.b28)
      ).toFixed(2);
    },
    b40() {
      return (
        ((parseFloat(this.b20) / parseFloat(this.b11)) * 1000) /
        24
      ).toFixed(2);
    },
    b41() {
      return (
        ((parseFloat(this.b21) / parseFloat(this.b11)) * 1000) /
        24
      ).toFixed(2);
    },
    b42() {
      return (
        (((parseFloat(this.b16) * 24) /
          (parseFloat(this.b10) / 100) /
          parseFloat(this.b11)) *
          1000) /
        24
      ).toFixed(2);
    },
    b43() {
      return (
        (((parseFloat(this.b17) * 24) /
          (parseFloat(this.b10) / 100) /
          parseFloat(this.b11)) *
          1000) /
        24
      ).toFixed(2);
    },
    b44() {
      return ((parseFloat(this.b30) * 1000) / parseFloat(this.b13)).toFixed(2);
    },
    b50() {
      return this.b25_1;
    },
    b51() {
      return this.b24;
    },
    b53() {
      return this.b40_1;
    },
    b53_1() {
      return (parseFloat(this.b53_2) + parseFloat(this.b53_3)).toFixed(0);
    },
    b56() {
      return this.b41_1;
    },
    b56_1() {
      return (parseFloat(this.b56_2) + parseFloat(this.b56_3)).toFixed(0);
    },
    b59() {
      return ((parseFloat(this.b25_1) * 2) / 0.5).toFixed(2);
    },
    b62() {
      return (parseFloat(this.b34) / 24).toFixed(1);
    },
    b65() {
      return this.b33;
    },
    b65_1() {
      return this.b32;
    },
    b67() {
      return this.b44_1;
    },
    b67_1() {
      return (parseFloat(this.b67_2) + parseFloat(this.b67_3)).toFixed(0);
    },
    b69() {
      return this.b36;
    },
    b69_1() {
      return this.b35;
    },
    b72() {
      return this.b42_1;
    },
    b72_1() {
      return (parseFloat(this.b72_2) + parseFloat(this.b72_3)).toFixed(0);
    },
    b74() {
      return this.b43_1;
    },
    b74_1() {
      return (parseFloat(this.b74_2) + parseFloat(this.b74_3)).toFixed(0);
    },
    b53_4() {
      var cal1 = parseFloat(this.b53) / parseFloat(this.b53_2);
      var cal2 = 0;
      if (cal1 < 5.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 20) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 40) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 60) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 80) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 120) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 155) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 550) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 310) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 230) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 330) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 460) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 530) {
        cal2 = cal2 + 1;
      }
      var array = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      return this.findKthLargest(array, cal2);
    },
    b56_4() {
      var cal1 = parseFloat(this.b56) / parseFloat(this.b56_2);
      var cal2 = 0;
      if (cal1 < 5.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 20) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 40) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 60) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 80) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 120) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 155) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 550) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 310) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 230) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 330) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 460) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 530) {
        cal2 = cal2 + 1;
      }
      var array = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      return this.findKthLargest(array, cal2);
    },
    b67_4() {
      var cal1 = parseFloat(this.b67) / parseFloat(this.b67_2);
      var cal2 = 0;
      if (cal1 < 5.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 20) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 40) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 60) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 80) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 120) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 155) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 550) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 310) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 230) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 330) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 460) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 530) {
        cal2 = cal2 + 1;
      }
      var array = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      return this.findKthLargest(array, cal2);
    },
    b72_4() {
      var cal1 = parseFloat(this.b72) / parseFloat(this.b72_2);
      var cal2 = 0;
      if (cal1 < 5.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 20) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 40) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 60) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 80) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 120) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 155) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 550) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 310) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 230) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 330) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 460) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 530) {
        cal2 = cal2 + 1;
      }
      var array = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      return this.findKthLargest(array, cal2);
    },
    b74_4() {
      var cal1 = parseFloat(this.b53) / parseFloat(this.b53_2);
      var cal2 = 0;
      if (cal1 < 5.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 20) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 40) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 60) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 80) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 120) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 155) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 550) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 310) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 230) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 330) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 460) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 530) {
        cal2 = cal2 + 1;
      }
      var array = [
        5.5,
        8,
        11,
        20,
        26,
        40,
        60,
        80,
        120,
        155,
        550,
        310,
        230,
        330,
        460,
        530,
      ];
      return this.findKthLargest(array, cal2);
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "次氯酸钠储罐",
          设备类型: "",
          规格及型号: this.get_a_1_1(),
          单位: "个",
          数量: this.get_a_1_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_a_1_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "计量泵-消毒",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_a_2_1(),
          单位: "台",
          数量: this.get_a_2_2(),
          运行时间: "",
          主要材质: "PC泵头",
          备注: "一用一备",
          运行数量: this.get_a_2_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "计量泵-预处理",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_a_3_1(),
          单位: "台",
          数量: this.get_a_3_2(),
          运行时间: "",
          主要材质: "PC泵头",
          备注: "一用一备",
          运行数量: this.get_a_3_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "液压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_4_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_a_4_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "背压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_5_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_a_5_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "6",
          设备位号: "",
          设备工艺名称: "脉冲阻尼器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_6_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_a_6_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "7",
          设备位号: "",
          设备工艺名称: "Y型过滤器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_7_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_a_7_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "8",
          设备位号: "",
          设备工艺名称: "卸液泵",
          设备类型: "",
          规格及型号: this.get_a_8_1(),
          单位: "台",
          数量: this.get_a_8_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_a_8_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "9",
          设备位号: "",
          设备工艺名称: "次氯酸钠储罐（PE储罐）",
          设备类型: "",
          规格及型号: this.get_a_9_1(),
          单位: "个",
          数量: this.get_a_9_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_a_9_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "次氯酸钠发生器",
          设备类型: "",
          规格及型号: this.get_b_1_1(),
          单位: "台",
          数量: this.get_b_1_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_1_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "溶盐箱",
          设备类型: "",
          规格及型号: this.get_b_2_1(),
          单位: "个",
          数量: this.get_b_2_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_2_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "食盐水计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_b_3_1(),
          单位: "台",
          数量: this.get_b_3_2(),
          运行时间: "",
          主要材质: "PC泵头",
          备注: "一用一备",
          运行数量: this.get_b_3_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "计量泵-消毒",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_b_4_1(),
          单位: "台",
          数量: this.get_b_4_2(),
          运行时间: "",
          主要材质: "PC泵头",
          备注: "一用一备",
          运行数量: this.get_b_4_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "次氯酸钠储罐",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_b_5_1(),
          单位: "台",
          数量: this.get_b_5_2(),
          运行时间: "",
          主要材质: "PC泵头",
          备注: "一用一备",
          运行数量: this.get_b_5_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "6",
          设备位号: "",
          设备工艺名称: "液压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_b_6_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_6_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "7",
          设备位号: "",
          设备工艺名称: "背压阀",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_b_7_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_7_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "8",
          设备位号: "",
          设备工艺名称: "脉冲阻尼器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_b_8_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_8_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "9",
          设备位号: "",
          设备工艺名称: "Y型过滤器",
          设备类型: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_b_9_1(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_9_1(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "10",
          设备位号: "",
          设备工艺名称: "次氯酸钠储罐（PE储罐）",
          设备类型: "",
          规格及型号: this.get_b_10_1(),
          单位: "个",
          数量: this.get_b_10_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.get_b_10_2(),
          单台功率: "",
          用电量: "",
        },
      ];
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
          数量: "4",
          a: "",
          b: "",
          备注: "",
        },
        {
          序号: "2",
          仪表位号: "",
          仪表名称: "流量计",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: "4",
          a: "",
          b: "",
          备注: "",
        },
        {
          序号: "1",
          仪表位号: "",
          仪表名称: "压力表",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: "6",
          a: "",
          b: "",
          备注: "",
        },
        {
          序号: "2",
          仪表位号: "",
          仪表名称: "流量计",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: "6",
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
    console.log("6005-activated被调用了");
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
        设备工艺名称: "次氯酸钠储罐",
        设备类型: "",
        规格及型号: this.get_a_1_1(),
        单位: "个",
        数量: this.get_a_1_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_a_1_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "计量泵-消毒",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_a_2_1(),
        单位: "台",
        数量: this.get_a_2_2(),
        运行时间: "",
        主要材质: "PC泵头",
        备注: "一用一备",
        运行数量: this.get_a_2_3(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "计量泵-预处理",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_a_3_1(),
        单位: "台",
        数量: this.get_a_3_2(),
        运行时间: "",
        主要材质: "PC泵头",
        备注: "一用一备",
        运行数量: this.get_a_3_3(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_4_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_a_4_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_5_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_a_5_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "6",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_6_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_a_6_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "7",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_7_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_a_7_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "8",
        设备位号: "",
        设备工艺名称: "卸液泵",
        设备类型: "",
        规格及型号: this.get_a_8_1(),
        单位: "台",
        数量: this.get_a_8_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_a_8_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "9",
        设备位号: "",
        设备工艺名称: "次氯酸钠储罐（PE储罐）",
        设备类型: "",
        规格及型号: this.get_a_9_1(),
        单位: "个",
        数量: this.get_a_9_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_a_9_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "次氯酸钠发生器",
        设备类型: "",
        规格及型号: this.get_b_1_1(),
        单位: "台",
        数量: this.get_b_1_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_1_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "溶盐箱",
        设备类型: "",
        规格及型号: this.get_b_2_1(),
        单位: "个",
        数量: this.get_b_2_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_2_2(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "食盐水计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_b_3_1(),
        单位: "台",
        数量: this.get_b_3_2(),
        运行时间: "",
        主要材质: "PC泵头",
        备注: "一用一备",
        运行数量: this.get_b_3_3(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "计量泵-消毒",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_b_4_1(),
        单位: "台",
        数量: this.get_b_4_2(),
        运行时间: "",
        主要材质: "PC泵头",
        备注: "一用一备",
        运行数量: this.get_b_4_3(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "次氯酸钠储罐",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_b_5_1(),
        单位: "台",
        数量: this.get_b_5_2(),
        运行时间: "",
        主要材质: "PC泵头",
        备注: "一用一备",
        运行数量: this.get_b_5_3(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "6",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_b_6_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_6_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "7",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_b_7_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_7_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "8",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_b_8_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_8_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "9",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_b_9_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_9_1(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "10",
        设备位号: "",
        设备工艺名称: "次氯酸钠储罐（PE储罐）",
        设备类型: "",
        规格及型号: this.get_b_10_1(),
        单位: "个",
        数量: this.get_b_10_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.get_b_10_2(),
        单台功率: "",
        用电量: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "压力表",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: "4",
        a: "",
        b: "",
        备注: "",
      },
      {
        序号: "2",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: "4",
        a: "",
        b: "",
        备注: "",
      },
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "压力表",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: "6",
        a: "",
        b: "",
        备注: "",
      },
      {
        序号: "2",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: "6",
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
