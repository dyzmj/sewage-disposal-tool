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
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_5001"),
  data() {
    return {
      modelVisible: false,
      b3: "20000",
      b4: "0.005",
      b5: "1.06",
      b7: "4.42",
      b8: "70",
      b10: "1",
      b10_1: "1",
      b11: "13",
      b11_1: "15",
      b16: 10,
      b20: 4,
      b21: 0.5,
      b23: 3,
      b24_1: 12,
      b30: 20,
      b35: 0.2,
      b37: 40,
      b38: 0.19,
      b39: 0.066,
      b40: 2,
      b46: 0.2,
      b49: 0.45,
      b50: 0.5,
      b58: 10,
      b59: 6,
      b59_1: 1,
      b61: 3.8,
      b61_2: 3.8,
      b62: 2.5,
      b65: 0.5,
      b67: 0.55,
      b68: 1.7,
      b69: 0.3,
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
        exportExcel3(allData1, allData2, allData3, "臭氧活性炭工程量", this);
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
        key9: this.b10,
        key10: this.b10_1,
        key11: this.b11,
        key12: this.b11_1,
        key13: this.b16,
        key14: this.b17,
        key15: this.b20,
        key16: this.b21,
        key17: this.b22,
        key18: this.b23,
        key19: this.b24,
        key20: this.b24_1,
        key21: this.b25,
        key22: this.b26,
        key23: this.b27,
        key24: this.b30,
        key25: this.b31,
        key26: this.b32,
        key27: this.b35,
        key28: this.b36,
        key29: this.b37,
        key30: this.b38,
        key31: this.b39,
        key32: this.b40,
        key33: this.b41,
        key34: this.b42,
        key35: this.b43,
        key36: this.b46,
        key37: this.b47,
        key38: this.b48,
        key39: this.b49,
        key40: this.b50,
        key41: this.b51,
        key42: this.b58,
        key43: this.b59,
        key44: this.b59_1,
        key45: this.b60,
        key46: this.b61,
        key47: this.b61_1,
        key48: this.b61_2,
        key49: this.b62,
        key50: this.b63,
        key51: this.b64,
        key52: this.b65,
        key53: this.b66,
        key54: this.b67,
        key55: this.b68,
        key56: this.b69,
        key57: this.b70,
      };
      exportWord("臭氧活性炭计算书", "5001.docx", data, this);
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
        key9: this.b10,
        key10: this.b10_1,
        key11: this.b11,
        key12: this.b11_1,
        key13: this.b16,
        key14: this.b17,
        key15: this.b20,
        key16: this.b21,
        key17: this.b22,
        key18: this.b23,
        key19: this.b24,
        key20: this.b24_1,
        key21: this.b25,
        key22: this.b26,
        key23: this.b27,
        key24: this.b30,
        key25: this.b31,
        key26: this.b32,
        key27: this.b35,
        key28: this.b36,
        key29: this.b37,
        key30: this.b38,
        key31: this.b39,
        key32: this.b40,
        key33: this.b41,
        key34: this.b42,
        key35: this.b43,
        key36: this.b46,
        key37: this.b47,
        key38: this.b48,
        key39: this.b49,
        key40: this.b50,
        key41: this.b51,
        key42: this.b58,
        key43: this.b59,
        key44: this.b59_1,
        key45: this.b60,
        key46: this.b61,
        key47: this.b61_1,
        key48: this.b61_2,
        key49: this.b62,
        key50: this.b63,
        key51: this.b64,
        key52: this.b65,
        key53: this.b66,
        key54: this.b67,
        key55: this.b68,
        key56: this.b69,
        key57: this.b70,
      };
      initWordStorage("5001.docx", data);
      this.handleExcelCache("5001.xlsx", "臭氧活性炭工程量");
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
    ROUNDUP(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.ceil(number * multiplier) / multiplier;
    },
    ROUND(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.round(number * multiplier) / multiplier;
    },
    get_a_1_1() {
      return (
        this.b23 +
        "m×" +
        this.b24_1 +
        "m×" +
        (parseFloat(this.b20) + parseFloat(this.b21)) +
        "m"
      );
    },
    get_a_1_2() {
      return 1;
    },
    get_a_2_1() {
      return this.b61 + "m×" + this.b61_2 + "m×" + this.b70 + "m";
    },
    get_a_2_2() {
      parseFloat(this.b59) + parseFloat(this.b59_1);
    },
    get_b_1_1() {
      return "鼓气量>" + this.b43 + "m3/h";
    },
    get_b_1_2() {
      return this.b42;
    },
    get_b_2_1() {
      return "臭氧产气量" + this.b11_1 + "kg/h，工作压力>" + this.b51 + "m";
    },
    get_b_2_2() {
      return parseFloat(this.b10) + parseFloat(this.b10_1);
    },
    get_b_3_1() {
      return (
        parseFloat(this.b66) *
        (parseFloat(this.b59) + parseFloat(this.b59_1))
      ).toFixed(2);
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(2);
    },
    b6() {
      return (1.06 * parseFloat(this.b4) * parseFloat(this.b3_1)).toFixed(2);
    },
    b9() {
      return (
        (parseFloat(this.b6) + parseFloat(this.b7)) /
        (parseFloat(this.b8) / 100)
      ).toFixed(2);
    },
    b17() {
      return ((parseFloat(this.b3_1) * parseFloat(this.b16)) / 60).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b17) / parseFloat(this.b20)).toFixed(2);
    },
    b24() {
      return (
        (parseFloat(this.b3_1) * parseFloat(this.b16)) /
        60 /
        parseFloat(this.b20) /
        parseFloat(this.b23)
      ).toFixed(8);
    },
    b25() {
      return (parseFloat(this.b24_1) * 0.6).toFixed(1);
    },
    b26() {
      return (parseFloat(this.b24_1) * 0.4).toFixed(1);
    },
    b27() {
      return (
        parseFloat(this.b24_1) *
        parseFloat(this.b23) *
        parseFloat(this.b20)
      ).toFixed(0);
    },
    b31() {
      return ((1000 * parseFloat(this.b9)) / parseFloat(this.b30)).toFixed(2);
    },
    b32() {
      return (parseFloat(this.b31) * 0.614).toFixed(2);
    },
    b36() {
      return ((3.14 * parseFloat(this.b35) * parseFloat(this.b35)) / 4).toFixed(
        4
      );
    },
    b41() {
      return (
        (parseFloat(this.b40) -
          parseFloat(this.b38) * Math.pow(parseFloat(this.b37), 0.333)) /
        parseFloat(this.b39)
      ).toFixed(2);
    },
    b42() {
      return this.ROUNDUP(
        parseFloat(this.b32) / parseFloat(this.b41) / parseFloat(this.b36),
        0
      );
    },
    b43() {
      return this.ROUND(parseFloat(this.b32) / parseFloat(this.b42), 2);
    },
    b47() {
      return ((1 / 4) * 3.14 * 0.2 * 0.2).toFixed(4);
    },
    b48() {
      return (
        parseFloat(this.b32) /
        parseFloat(this.b42) /
        parseFloat(this.b36) /
        10
      ).toFixed(2);
    },
    b51() {
      return (
        parseFloat(this.b20) +
        parseFloat(this.b49) +
        parseFloat(this.b50)
      ).toFixed(2);
    },
    b60() {
      return (
        parseFloat(this.b3_1) /
        parseFloat(this.b58) /
        parseFloat(this.b59)
      ).toFixed(8);
    },
    b61_1() {
      return (parseFloat(this.b60) / parseFloat(this.b61)).toFixed(8);
    },
    b63() {
      return (parseFloat(this.b62) / parseFloat(this.b58)).toFixed(2);
    },
    b64() {
      return (
        parseFloat(this.b61) *
        parseFloat(this.b61_2) *
        parseFloat(this.b62)
      ).toFixed(1);
    },
    b66() {
      return (parseFloat(this.b64) * parseFloat(this.b65)).toFixed(2);
    },
    b70() {
      return (
        parseFloat(this.b69) +
        parseFloat(this.b68) +
        parseFloat(this.b67) +
        parseFloat(this.b62)
      ).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "臭氧接触池",
          尺寸: this.get_a_1_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_1_2(),
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
        {
          序号: "1",
          单体位号: "",
          名称: "活性炭吸附池",
          尺寸: this.get_a_2_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_2_2(),
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
          设备类型: this.get_b_1_1(),
          规格及型号: "",
          单位: "个",
          数量: this.get_b_1_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "臭氧发生器",
          设备类型: this.get_b_2_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_2_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "颗粒活性炭",
          设备类型: "粒径0.8～1.7mm",
          规格及型号: "",
          单位: "t",
          数量: this.get_b_3_1(),
          运行时间: "",
          主要材质: "",
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
    console.log("5001-activated被调用了");
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
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_1_2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
      {
        序号: "1",
        单体位号: "",
        名称: "活性炭吸附池",
        尺寸: this.get_a_2_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_2_2(),
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
        设备类型: this.get_b_1_1(),
        规格及型号: "",
        单位: "个",
        数量: this.get_b_1_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "臭氧发生器",
        设备类型: this.get_b_2_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_2_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "颗粒活性炭",
        设备类型: "粒径0.8～1.7mm",
        规格及型号: "",
        单位: "t",
        数量: this.get_b_3_1(),
        运行时间: "",
        主要材质: "",
        备注: "",
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
