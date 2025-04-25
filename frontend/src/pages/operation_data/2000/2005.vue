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
  i18n: require("./i18n_2005"),
  data() {
    return {
      modelVisible: false,
      pamData: 0.1,
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b10: "0.1",
      b11: "0.5",
      b12: "100",
      b13: "1",
      b14_1: "0.5",
      b15: "780",
      b15_1: "1110",
      b15_2: "1",
      b17: "600",
      b18: "200",
      b18_2: "90",
      b19: "300",
      b20: "1",
      b21: "2",
      b23: "0.5",
      b24: "1000",
      b25: "2",
      b28: "0.75",
      b29: "0.6",
      b32: "JBJ1-600",
      b32_1: "1",
      b33: "0.55",
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
        exportExcel3(allData1, allData2, allData3, "加药系统PAM工程量", this);
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
        key6: this.b10,
        key7: this.b11,
        key8: this.b12,
        key9: this.b13,
        key10: this.b14,
        key11: this.b14_1,
        key12: this.b15,
        key13: this.b15_1,
        key14: this.b15_2,
        key15: this.b17,
        key16: this.b17_1,
        key17: this.b18,
        key18: this.b18_1,
        key19: this.b18_2,
        key20: this.b18_3,
        key21: this.b19,
        key22: this.b19_1,
        key23: this.b20,
        key24: this.b21,
        key25: this.b21_1,
        key26: this.b22,
        key27: this.b23,
        key28: this.b24,
        key29: this.b25,
        key30: this.b26,
        key31: this.b27,
        key32: this.b28,
        key33: this.b29,
        key34: this.b30,
        key35: this.b32,
        key36: this.b32_1,
        key37: this.b33,
        key38: this.b36,
        key39: this.b37,
        key40: this.b37_1,
      };
      exportWord("PAM计算书", "2005.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b10,
        key7: this.b11,
        key8: this.b12,
        key9: this.b13,
        key10: this.b14,
        key11: this.b14_1,
        key12: this.b15,
        key13: this.b15_1,
        key14: this.b15_2,
        key15: this.b17,
        key16: this.b17_1,
        key17: this.b18,
        key18: this.b18_1,
        key19: this.b18_2,
        key20: this.b18_3,
        key21: this.b19,
        key22: this.b19_1,
        key23: this.b20,
        key24: this.b21,
        key25: this.b21_1,
        key26: this.b22,
        key27: this.b23,
        key28: this.b24,
        key29: this.b25,
        key30: this.b26,
        key31: this.b27,
        key32: this.b28,
        key33: this.b29,
        key34: this.b30,
        key35: this.b32,
        key36: this.b32_1,
        key37: this.b33,
        key38: this.b36,
        key39: this.b37,
        key40: this.b37_1,
      };
      initWordStorage("2005.docx", data);
      this.handleExcelCache("2005.xlsx", "PAM工程量");
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
    getkey1() {
      return "φ" + this.b15 + "mm×" + this.b15_1 + "mm";
    },
    getkey2() {
      return this.b15_2;
    },
    getkey3() {
      return this.b32;
    },
    getkey4() {
      return this.b15_2;
    },
    getkey5() {
      if (parseFloat(this.b37_1) == 5.5) {
        return "MS1A064A";
      } else if (parseFloat(this.b37_1) == 8) {
        return "MS1A064B";
      } else if (parseFloat(this.b37_1) == 11) {
        return "MS1A064C";
      } else if (parseFloat(this.b37_1) == 20) {
        return "MS1A094A";
      } else if (parseFloat(this.b37_1) == 26) {
        return "MS1A094B";
      } else if (parseFloat(this.b37_1) == 40) {
        return "MS1A094C";
      } else if (parseFloat(this.b37_1) == 60) {
        return "MS1B108A";
      } else if (parseFloat(this.b37_1) == 80) {
        return "MS1B108B";
      } else if (parseFloat(this.b37_1) == 120) {
        return "MS1B108C";
      } else if (parseFloat(this.b37_1) == 155) {
        return "MS1C138A";
      } else if (parseFloat(this.b37_1) == 230) {
        return "MS1C165A";
      } else if (parseFloat(this.b37_1) == 310) {
        return "MS1C138C";
      } else if (parseFloat(this.b37_1) == 330) {
        return "MS1C165B";
      } else if (parseFloat(this.b37_1) == 460) {
        return "MS1C165C";
      } else if (parseFloat(this.b37_1) == 530) {
        return "MS1C165C";
      } else {
        return "MS1C138B";
      }
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
    b14() {
      storeValueInLocalStorage("pamData", this.b10);
      return (
        (parseFloat(this.b10) * parseFloat(this.b5)) /
        parseFloat(this.b11) /
        parseFloat(this.b13) /
        parseFloat(this.b12) /
        4.17
      ).toFixed(2);
    },
    b17_1() {
      return (parseFloat(this.b17) / 1000).toFixed(2);
    },
    b18_1() {
      return (parseFloat(this.b18) / 1000).toFixed(2);
    },
    b18_3() {
      return ((parseFloat(this.b18_2) / 180) * 3.1415926).toFixed(2);
    },
    b19_1() {
      return (parseFloat(this.b19) / 1000).toFixed(2);
    },
    b21_1() {
      return ((parseFloat(this.b21) * 2) / parseFloat(this.b17_1)).toFixed(2);
    },
    b22() {
      return (
        (parseFloat(this.b21) / 3.1415926 / parseFloat(this.b17_1)) *
        60
      ).toFixed(2);
    },
    b26() {
      return (parseFloat(this.b20) * parseFloat(this.b25)).toFixed(0);
    },
    b27() {
      return (
        (parseFloat(this.b23) *
          parseFloat(this.b24) *
          Math.pow(parseFloat(this.b21_1), 3) *
          parseFloat(this.b26) *
          parseFloat(this.b18_1) *
          Math.sin(parseFloat(this.b18_3)) *
          (Math.pow(parseFloat(this.b17_1) / 2, 4) -
            Math.pow(parseFloat(this.b17_1) / 2 - parseFloat(this.b19_1), 4))) /
        408 /
        9.81
      ).toFixed(2);
    },
    b30() {
      return (
        parseFloat(this.b27) /
        parseFloat(this.b28) /
        parseFloat(this.b29)
      ).toFixed(2);
    },
    b36() {
      return (
        (parseFloat(this.b5) * parseFloat(this.b10)) /
        (parseFloat(this.b12) / 100) /
        1000
      ).toFixed(2);
    },
    b37() {
      return (
        (parseFloat(this.b5) * parseFloat(this.b10)) /
        (parseFloat(this.b11) / 100) /
        1000
      ).toFixed(2);
    },
    b37_1() {
      if (parseFloat(this.b37) <= 5.5) {
        return 5.5;
      } else if (parseFloat(this.b37) <= 8) {
        return 8;
      } else if (parseFloat(this.b37) <= 11) {
        return 11;
      } else if (parseFloat(this.b37) <= 20) {
        return 20;
      } else if (parseFloat(this.b37) <= 26) {
        return 26;
      } else if (parseFloat(this.b37) / 2 <= 40) {
        return 40;
      } else if (parseFloat(this.b37) / 2 <= 60) {
        return 60;
      } else if (parseFloat(this.b37) / 2 <= 80) {
        return 80;
      } else if (parseFloat(this.b37) / 2 <= 120) {
        return 120;
      } else if (parseFloat(this.b37) / 2 <= 155) {
        return 155;
      } else if (parseFloat(this.b37) / 2 <= 230) {
        return 230;
      } else if (parseFloat(this.b37) / 2 <= 310) {
        return 310;
      } else if (parseFloat(this.b37) / 2 <= 330) {
        return 330;
      } else if (parseFloat(this.b37) / 2 <= 460) {
        return 460;
      } else if (parseFloat(this.b37) / 2 <= 530) {
        return 530;
      } else {
        return 550;
      }
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "溶液池",
          尺寸: this.getkey1(),
          标高: "",
          单位: "个",
          数量: this.getkey2(),
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
          设备工艺名称: "搅拌机",
          设备类型: "折浆式搅拌机",
          规格及型号: this.getkey3(),
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.getkey5(),
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "液压阀",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "背压阀",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "脉冲阻尼器",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "Y型过滤器",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "",
          仪表位号: "",
          仪表名称: "压力表",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.getkey4(),
          a: "",
          b: "",
          备注: "",
        },
        {
          序号: "",
          仪表位号: "",
          仪表名称: "流量计",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.getkey4(),
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
    console.log("2005-activated被调用了");
    this.refreshInitData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data1 = [
      {
        序号: "",
        单体位号: "",
        名称: "溶液池",
        尺寸: this.getkey1(),
        标高: "",
        单位: "个",
        数量: this.getkey2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "搅拌机",
        设备类型: "折浆式搅拌机",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.getkey5(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
    ];
    this.data3 = [
      {
        序号: "",
        仪表位号: "",
        仪表名称: "压力表",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.getkey4(),
        a: "",
        b: "",
        备注: "",
      },
      {
        序号: "",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.getkey4(),
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
