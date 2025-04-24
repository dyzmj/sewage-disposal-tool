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
  i18n: require("./i18n_6003"),
  data() {
    return {
      modelVisible: false,
      b3: "20000",
      b4: "0.005",
      b5: "1.06",
      b7: "70",
      b9: "1",
      b9_1: "1",
      b10_1: "8",
      b13: "",
      b14: "10",
      b17: "",
      b18: "4",
      b19: "0.5",
      b21: "3",
      b22_1: "12",
      b28: "20",
      b33: "0.2",
      b35: "40",
      b36: "0.19",
      b37: "0.066",
      b38: "2",
      b44: "0.2",
      b47: "0.45",
      b48: "0.5",
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
        exportExcel3(allData1, allData2, allData3, "臭氧消毒工程量", this);
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
        key2: this.b3_1,
        key3: this.b4,
        key4: this.b5,
        key5: this.b6,
        key6: this.b7,
        key7: this.b8,
        key8: this.b9,
        key9: this.b9_1,
        key10: this.b10,
        key11: this.b10_1,
        key12: this.b14,
        key13: this.b15,
        key14: this.b18,
        key15: this.b19,
        key16: this.b20,
        key17: this.b21,
        key18: this.b22,
        key19: this.b22_1,
        key20: this.b23,
        key21: this.b24,
        key22: this.b25,
        key23: this.b25_1,
        key24: this.b28,
        key25: this.b29,
        key26: this.b30,
        key27: this.b33,
        key28: this.b34,
        key29: this.b35,
        key30: this.b36,
        key31: this.b37,
        key32: this.b38,
        key33: this.b39,
        key34: this.b40,
        key35: this.b41,
        key36: this.b44,
        key37: this.b45,
        key38: this.b46,
        key39: this.b47,
        key40: this.b48,
        key41: this.b49,
      };
      exportWord("臭氧消毒计算书", "6003.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b3_1,
        key3: this.b4,
        key4: this.b5,
        key5: this.b6,
        key6: this.b7,
        key7: this.b8,
        key8: this.b9,
        key9: this.b9_1,
        key10: this.b10,
        key11: this.b10_1,
        key12: this.b14,
        key13: this.b15,
        key14: this.b18,
        key15: this.b19,
        key16: this.b20,
        key17: this.b21,
        key18: this.b22,
        key19: this.b22_1,
        key20: this.b23,
        key21: this.b24,
        key22: this.b25,
        key23: this.b25_1,
        key24: this.b28,
        key25: this.b29,
        key26: this.b30,
        key27: this.b33,
        key28: this.b34,
        key29: this.b35,
        key30: this.b36,
        key31: this.b37,
        key32: this.b38,
        key33: this.b39,
        key34: this.b40,
        key35: this.b41,
        key36: this.b44,
        key37: this.b45,
        key38: this.b46,
        key39: this.b47,
        key40: this.b48,
        key41: this.b49,
      };
      initWordStorage("6003.docx", data);
      this.handleExcelCache("6003.xlsx", "臭氧消毒工程量");
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
    get_a_1() {
      return (
        this.b21 +
        "m×" +
        this.b22_1 +
        "m×" +
        (parseFloat(this.b18) + parseFloat(this.b19)) +
        "m"
      );
    },
    get_a_2() {
      return 1;
    },
    get_b_1() {
      return "鼓气量>" + this.b41 + "m3/h";
    },
    get_b_2() {
      return this.b40;
    },
    get_c_1() {
      return "臭氧产气量" + this.b10_1 + "kg/h，工作压力>" + this.b49 + "m";
    },
    get_c_2() {
      return parseFloat(this.b9) + parseFloat(this.b9_1);
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(2);
    },
    b6() {
      return (parseFloat(this.b4) * parseFloat(this.b3_1) * 1.06).toFixed(2);
    },
    b8() {
      return (parseFloat(this.b6) / (parseFloat(this.b7) / 100)).toFixed(2);
    },
    b10() {
      return parseFloat(this.b8).toFixed(2);
    },
    b15() {
      return ((parseFloat(this.b3_1) * parseFloat(this.b14)) / 60).toFixed(2);
    },
    b20() {
      return (parseFloat(this.b15) / parseFloat(this.b18)).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b20) / parseFloat(this.b21)).toFixed(8);
    },
    b23() {
      return (parseFloat(this.b22_1) * 0.6).toFixed(1);
    },
    b24() {
      return (parseFloat(this.b22_1) * 0.4).toFixed(1);
    },
    b25() {
      return (
        parseFloat(this.b22_1) *
        parseFloat(this.b21) *
        parseFloat(this.b18)
      ).toFixed(0);
    },
    b25_1() {
      return "> 138.89";
    },
    b29() {
      return ((1000 * parseFloat(this.b8)) / parseFloat(this.b28)).toFixed(2);
    },
    b30() {
      return (0.614 * parseFloat(this.b29)).toFixed(2);
    },
    b34() {
      return ((3.14 * parseFloat(this.b33) * parseFloat(this.b33)) / 4).toFixed(
        4
      );
    },
    b39() {
      return (
        (parseFloat(this.b38) -
          parseFloat(this.b36) * Math.pow(parseFloat(this.b35), 0.333)) /
        parseFloat(this.b37)
      ).toFixed(2);
    },
    b40() {
      return this.ROUNDUP(
        parseFloat(this.b30) / parseFloat(this.b39) / parseFloat(this.b34),
        0
      );
    },
    b41() {
      return this.truncateDecimals(
        parseFloat(this.b30) / parseFloat(this.b40),
        2
      );
    },
    b45() {
      return ((1 / 4) * 3.14 * 0.2 * 0.2).toFixed(4);
    },
    b46() {
      return (
        parseFloat(this.b30) /
        parseFloat(this.b40) /
        parseFloat(this.b34) /
        10
      ).toFixed(2);
    },
    b49() {
      return (
        parseFloat(this.b18) +
        parseFloat(this.b47) +
        parseFloat(this.b48)
      ).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "臭氧接触池",
          尺寸: this.get_a_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_2(),
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "微孔扩散板",
          设备类型: this.get_b_1(),
          规格及型号: "",
          单位: "个",
          数量: this.get_b_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "臭氧发生器",
          设备类型: this.get_c_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_c_2(),
          运行时间: "",
          主要材质: "",
          备注: "一用一备，配套尾气破坏器",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("6003-activated被调用了");
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
        单体位号: "",
        名称: "臭氧接触池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "微孔扩散板",
        设备类型: this.get_b_1(),
        规格及型号: "",
        单位: "个",
        数量: this.get_b_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "臭氧发生器",
        设备类型: this.get_c_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_c_2(),
        运行时间: "",
        主要材质: "",
        备注: "一用一备，配套尾气破坏器",
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
