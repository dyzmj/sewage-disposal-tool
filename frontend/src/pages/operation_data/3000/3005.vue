<template>
  <div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel2,
  exportWord,
  getValueFromLocalStorage,
  initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3005"),
  data() {
    return {
      modelVisible: false,
      b3: "833.33",
      b4: "4",
      b5: "7.5",
      b6: "0.08",
      b7: "0.04",
      b8: "1.2",
      b9: "15",
      b10: "1.5",
      b13_1: "0.1",
      b14_1: "0.05",
      b15: "460",
      b18: "3",
      b22: "0.15",
      b28: "3.1",
      b32: "3",
      b32_1: "0.25",
      b36: "90",
      b40: "0.51",
      b40_1: "0.3",
      b42: "0.8",
      b42_1: "45",
      b53: "30",
      b55: "3",
      b59: "1.5",
      b60_1: "0.1",
      b62: "1.5",
      b64_1: "0.15",
      b68: "0.3",
      b69: "0.62",
      b70: "0.05",
      b77: "150",
      b78: "100",
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
              title: "安装位置",
              dataIndex: "安装位置",
              key: "3",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "安装位置" },
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "4",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "仪表名称" },
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
              title: "备注",
              dataIndex: "备注",
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "备注" },
            },
            {
              title: "生产厂家",
              dataIndex: "生产厂家",
              key: "9",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "生产厂家" },
            },
            {
              title: "-",
              dataIndex: "-",
              key: "10",
              width: "50px",
              align: "center",
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
        this.b3 = 833.33;
      } else {
        this.b3 = (parseFloat(waterData) / 24).toFixed(2);
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
        exportExcel2(allData1, allData3, "水力循环澄清池工程量", this);
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
        key8: this.b8_1,
        key9: this.b9,
        key10: this.b10,
        key11: this.b13,
        key12: this.b13_1,
        key13: this.b13_2,
        key14: this.b14,
        key15: this.b14_1,
        key16: this.b15,
        key17: this.b15_1,
        key18: this.b16,
        key19: this.b18,
        key20: this.b18_1,
        key21: this.b19,
        key22: this.b20,
        key23: this.b21,
        key24: this.b22,
        key25: this.b23,
        key26: this.b25,
        key27: this.b26,
        key28: this.b27,
        key29: this.b28,
        key30: this.b30,
        key31: this.b31,
        key32: this.b32,
        key33: this.b32_1,
        key34: this.b33,
        key35: this.b34,
        key36: this.b35,
        key37: this.b36,
        key38: this.b38,
        key39: this.b39,
        key40: this.b39_1,
        key41: this.b40,
        key42: this.b41,
        key43: this.b42,
        key44: this.b43,
        key45: this.b44,
        key46: this.b45,
        key47: this.b46,
        key48: this.b47,
        key49: this.b48,
        key50: this.b48_1,
        key51: this.b49,
        key52: this.b51,
        key53: this.b52,
        key54: this.b53,
        key55: this.b54,
        key56: this.b55,
        key57: this.b56,
        key58: this.b57,
        key59: this.b59,
        key60: this.b60,
        key61: this.b60_1,
        key62: this.b62,
        key63: this.b63,
        key64: this.b64,
        key65: this.b64_1,
        key66: this.b66,
        key67: this.b67,
        key68: this.b68,
        key69: this.b69,
        key70: this.b70,
        key71: this.b71,
        key72: this.b71_1,
        key73: this.b72,
        key74: this.b72_1,
        key75: this.b73,
        key76: this.b74,
        key77: this.b75,
        key78: this.b76,
        key79: this.b77,
        key80: this.b78,
        key81: this.b78_1,
      };
      exportWord("水力循环澄清池计算书", "3005.docx", data, this);
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
        key8: this.b8_1,
        key9: this.b9,
        key10: this.b10,
        key11: this.b13,
        key12: this.b13_1,
        key13: this.b13_2,
        key14: this.b14,
        key15: this.b14_1,
        key16: this.b15,
        key17: this.b15_1,
        key18: this.b16,
        key19: this.b18,
        key20: this.b18_1,
        key21: this.b19,
        key22: this.b20,
        key23: this.b21,
        key24: this.b22,
        key25: this.b23,
        key26: this.b25,
        key27: this.b26,
        key28: this.b27,
        key29: this.b28,
        key30: this.b30,
        key31: this.b31,
        key32: this.b32,
        key33: this.b32_1,
        key34: this.b33,
        key35: this.b34,
        key36: this.b35,
        key37: this.b36,
        key38: this.b38,
        key39: this.b39,
        key40: this.b39_1,
        key41: this.b40,
        key42: this.b41,
        key43: this.b42,
        key44: this.b43,
        key45: this.b44,
        key46: this.b45,
        key47: this.b46,
        key48: this.b47,
        key49: this.b48,
        key50: this.b48_1,
        key51: this.b49,
        key52: this.b51,
        key53: this.b52,
        key54: this.b53,
        key55: this.b54,
        key56: this.b55,
        key57: this.b56,
        key58: this.b57,
        key59: this.b59,
        key60: this.b60,
        key61: this.b60_1,
        key62: this.b62,
        key63: this.b63,
        key64: this.b64,
        key65: this.b64_1,
        key66: this.b66,
        key67: this.b67,
        key68: this.b68,
        key69: this.b69,
        key70: this.b70,
        key71: this.b71,
        key72: this.b71_1,
        key73: this.b72,
        key74: this.b72_1,
        key75: this.b73,
        key76: this.b74,
        key77: this.b75,
        key78: this.b76,
        key79: this.b77,
        key80: this.b78,
        key81: this.b78_1,
      };
      initWordStorage("3005.docx", data);
      this.handleExcelCache("3005.xlsx", "水力循环澄清池工程量");
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
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];
        const data = [...allData1, null, null, ...allData3];
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
      return "Ø" + this.b39_1 + "×" + this.b41 + "m";
    },
    get_b_1() {
      return "0~" + this.b41 + "m，4~20mA信号输出，就地显示";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 3600).toFixed(4);
    },
    b8_1() {
      return (parseFloat(this.b8) / 1000).toFixed(4);
    },
    b13() {
      return Math.pow(
        (4 * parseFloat(this.b3_1)) / (Math.PI * parseFloat(this.b10)),
        0.5
      ).toFixed(4);
    },
    b13_2() {
      return (parseFloat(this.b13_1) * 1000).toFixed(0);
    },
    b14() {
      return Math.pow(
        (4 * parseFloat(this.b3_1)) / (Math.PI * parseFloat(this.b5)),
        0.5
      ).toFixed(3);
    },
    b15_1() {
      return (parseFloat(this.b15) / 1000).toFixed(2);
    },
    b16() {
      return this.b13_1;
    },
    b18_1() {
      return (parseFloat(this.b18) * parseFloat(this.b14_1)).toFixed(2);
    },
    b19() {
      return (parseFloat(this.b4) * parseFloat(this.b3_1)).toFixed(4);
    },
    b20() {
      return (
        (4 * parseFloat(this.b19)) /
        (Math.PI * Math.pow(parseFloat(this.b18_1), 2))
      ).toFixed(6);
    },
    b21() {
      return (6 * parseFloat(this.b18_1)).toFixed(2);
    },
    b23() {
      return (3 * parseFloat(this.b18_1)).toFixed(2);
    },
    b25() {
      return (parseFloat(this.b19) / parseFloat(this.b6)).toFixed(4);
    },
    b26() {
      return Math.pow((4 * parseFloat(this.b25)) / Math.PI, 0.5).toFixed(4);
    },
    b27() {
      return (
        (12 * parseFloat(this.b9) * parseFloat(this.b19)) /
        (Math.PI *
          (Math.pow(parseFloat(this.b18_1), 2) +
            Math.pow(parseFloat(this.b26), 2) +
            parseFloat(this.b18_1) * parseFloat(this.b26)))
      ).toFixed(4);
    },
    b30() {
      return (parseFloat(this.b19) / parseFloat(this.b7)).toFixed(4);
    },
    b31() {
      return Math.pow(
        (4 * (parseFloat(this.b25) + parseFloat(this.b30))) / Math.PI,
        0.5
      ).toFixed(3);
    },
    b33() {
      return (
        (Math.PI *
          (parseFloat(this.b32) - parseFloat(this.b32_1)) *
          Math.pow(parseFloat(this.b31), 2)) /
        4
      ).toFixed(3);
    },
    b34() {
      return (parseFloat(this.b33) / parseFloat(this.b19)).toFixed(3);
    },
    b35_1() {
      return (
        (Math.PI *
          2.45 *
          (Math.pow(0.94, 2) + Math.pow(0.316, 2) + 0.94 * 0.316)) /
        12
      ).toFixed(6);
    },
    b35() {
      return (
        (parseFloat(this.b33) - parseFloat(this.b35_1)) /
        parseFloat(this.b19)
      ).toFixed(5);
    },
    b38() {
      return (parseFloat(this.b3_1) / parseFloat(this.b8_1)).toFixed(2);
    },
    b39() {
      return Math.pow(
        (4 *
          (parseFloat(this.b25) +
            parseFloat(this.b30) +
            parseFloat(this.b38))) /
          Math.PI,
        0.5
      ).toFixed(5);
    },
    b39_1() {
      return this.ROUNDUP(parseFloat(this.b39), 1);
    },
    b41() {
      return (
        parseFloat(this.b40) +
        parseFloat(this.b22) +
        parseFloat(this.b21) +
        parseFloat(this.b28) +
        parseFloat(this.b40_1) +
        parseFloat(this.b32_1)
      ).toFixed(2);
    },
    b43() {
      return ((parseFloat(this.b39) - parseFloat(this.b42)) / 2).toFixed(3);
    },
    b44() {
      return (parseFloat(this.b41) - parseFloat(this.b43)).toFixed(3);
    },
    b45() {
      return (
        (Math.PI * Math.pow(parseFloat(this.b39_1), 2) * parseFloat(this.b44)) /
        4
      ).toFixed(3);
    },
    b46() {
      return (
        (Math.PI *
          parseFloat(this.b43) *
          (Math.pow(parseFloat(this.b39), 2) +
            Math.pow(parseFloat(this.b42), 2) +
            parseFloat(this.b39) * parseFloat(this.b42))) /
        12
      ).toFixed(3);
    },
    b47() {
      return (parseFloat(this.b45) + parseFloat(this.b46)).toFixed(3);
    },
    b48() {
      return (
        (parseFloat(this.b28) - parseFloat(this.b32_1)) /
        parseFloat(this.b8_1)
      ).toFixed(0);
    },
    b48_1() {
      return (parseFloat(this.b48) / 60).toFixed(2);
    },
    b49() {
      return (
        (parseFloat(this.b9) + parseFloat(this.b36) + parseFloat(this.b48)) /
        60
      ).toFixed(2);
    },
    b51() {
      return (parseFloat(this.b47) * 0.01).toFixed(3);
    },
    b52() {
      return Math.pow(3 * parseFloat(this.b51), 0.333333).toFixed(6);
    },
    b54() {
      return (parseFloat(this.b51) / parseFloat(this.b53)).toFixed(6);
    },
    b56() {
      return Math.pow(
        (4 * parseFloat(this.b54)) / (Math.PI * parseFloat(this.b55)),
        0.5
      ).toFixed(6);
    },
    b57() {
      return this.ROUNDUP(parseFloat(this.b56), 2);
    },
    b60() {
      return Math.pow(
        (4 * parseFloat(this.b3_1)) / (Math.PI * parseFloat(this.b59)),
        0.5
      ).toFixed(6);
    },
    b63() {
      return ((parseFloat(this.b3_1) * parseFloat(this.b62)) / 2).toFixed(6);
    },
    b64() {
      return (0.9 * Math.pow(parseFloat(this.b63), 0.4)).toFixed(6);
    },
    b66() {
      return (0.75 * parseFloat(this.b64) + 0.05 + 0.07).toFixed(6);
    },
    b67() {
      return (1.25 * parseFloat(this.b64) + 0.05 + 0.07).toFixed(6);
    },
    b71() {
      return (
        parseFloat(this.b63) /
        (parseFloat(this.b69) * Math.pow(2 * 9.81 * parseFloat(this.b70), 0.5))
      ).toFixed(6);
    },
    b71_1() {
      return (parseFloat(this.b71) * 10000).toFixed(3);
    },
    b72() {
      return 20;
    },
    b72_1() {
      return (parseFloat(this.b72) / 10).toFixed(0);
    },
    b73() {
      return this.ROUNDUP(
        (4 * parseFloat(this.b71_1)) /
          (Math.PI * Math.pow(parseFloat(this.b72_1), 2)),
        1
      );
    },
    b74() {
      return (parseFloat(this.b63) / parseFloat(this.b71)).toFixed(6);
    },
    b75() {
      return (
        (Math.PI * parseFloat(this.b39_1)) /
        (parseFloat(this.b73) * 2)
      ).toFixed(6);
    },
    b65() {
      return (
        (Math.PI * parseFloat(this.b39_1)) /
        (parseFloat(this.b73) * 2)
      ).toFixed(6);
    },
    b77_1() {
      return (
        (4 * parseFloat(this.b3_1)) /
        (Math.PI * Math.pow(parseFloat(this.b77) / 1000, 2))
      ).toFixed(3);
    },
    b78_1() {
      return (
        (4 * parseFloat(this.b3_1)) /
        (Math.PI * Math.pow(parseFloat(this.b78) / 1000, 2))
      ).toFixed(4);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "1",
          名称: "机械搅拌澄清池",
          尺寸: this.get_a_1(),
          标高: "",
          单位: "座",
          数量: "1",
          结构形式: "钢砼",
          备注: "半地下式",
          暖通要求: "无",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "1",
          安装位置: "污泥斗",
          仪表名称: "超声波泥位计",
          规格及型号: this.get_b_1(),
          单位: "台",
          数量: "1",
          备注: "",
          生产厂家: "",
          a: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("3005-activated被调用了");
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
        名称: "机械搅拌澄清池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: "1",
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "1",
        安装位置: "污泥斗",
        仪表名称: "超声波泥位计",
        规格及型号: this.get_b_1(),
        单位: "台",
        数量: "1",
        备注: "",
        生产厂家: "",
        a: "",
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
