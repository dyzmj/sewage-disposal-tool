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
  i18n: require("./i18n_6004"),
  data() {
    return {
      modelVisible: false,
      b8: "130.00",
      b11: "34.00",
      b11_1: "380.00",
      b14: "5",
      b15: "0.50",
      b16: "330.00",
      b25: "0.5",
      b26: "3.5",
      b27: "1",
      b65: "100",
      b67: "7.5～8.5",
      b74: "300",
      b105: "260",
      b106: "1",
      b107: "4",
      b108: "0.5",
      b111: "10",
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
            {
              title: "与基础设计不同处",
              dataIndex: "与基础设计不同处",
              key: "11",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "与基础设计不同处" },
            },
            {
              title: "土建说明",
              dataIndex: "土建说明",
              key: "12",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "土建说明" },
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
      columns4: [
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
              title: "生产厂家",
              dataIndex: "生产厂家",
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "生产厂家" },
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
        this.b8 = 130.0;
      } else {
        this.b8 = (parseFloat(waterData) / 24).toFixed(2);
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
        exportExcel3(allData1, allData2, allData3, "折点加氯工程量", this);
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
        key1: this.b8,
        key2: this.b11,
        key3: this.b11_1,
        key4: this.b13,
        key5: this.b14,
        key6: this.b15,
        key7: this.b16,
        key8: this.b25,
        key9: this.b26,
        key10: this.b27,
        key11: this.b32,
        key12: this.b33,
        key13: this.b34,
        key14: this.b36,
        key15: this.b37,
        key16: this.b38,
        key17: this.b39,
        key18: this.b40,
        key19: this.b41,
        key20: this.b43,
        key21: this.b44,
        key22: this.b45,
        key23: this.b46,
        key24: this.b47,
        key25: this.b50,
        key26: this.b51,
        key27: this.b52,
        key28: this.b53,
        key29: this.b54,
        key30: this.b55,
        key31: this.b57,
        key32: this.b58,
        key33: this.b60,
        key34: this.b61,
        key35: this.b62,
        key36: this.b63,
        key37: this.b64,
        key38: this.b65,
        key39: this.b66,
        key40: this.b67,
        key41: this.b68,
        key42: this.b69,
        key43: this.b70,
        key44: this.b71,
        key45: this.b72,
        key46: this.b73,
        key47: this.b74,
        key48: this.b75,
        key49: this.b105,
        key50: this.b106,
        key51: this.b107,
        key52: this.b108,
        key53: this.b109,
        key54: this.b110,
        key55: this.b111,
        key56: this.b112,
      };
      exportWord("折点加氯计算书", "6004.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b8,
        key2: this.b11,
        key3: this.b11_1,
        key4: this.b13,
        key5: this.b14,
        key6: this.b15,
        key7: this.b16,
        key8: this.b25,
        key9: this.b26,
        key10: this.b27,
        key11: this.b32,
        key12: this.b33,
        key13: this.b34,
        key14: this.b36,
        key15: this.b37,
        key16: this.b38,
        key17: this.b39,
        key18: this.b40,
        key19: this.b41,
        key20: this.b43,
        key21: this.b44,
        key22: this.b45,
        key23: this.b46,
        key24: this.b47,
        key25: this.b50,
        key26: this.b51,
        key27: this.b52,
        key28: this.b53,
        key29: this.b54,
        key30: this.b55,
        key31: this.b57,
        key32: this.b58,
        key33: this.b60,
        key34: this.b61,
        key35: this.b62,
        key36: this.b63,
        key37: this.b64,
        key38: this.b65,
        key39: this.b66,
        key40: this.b67,
        key41: this.b68,
        key42: this.b69,
        key43: this.b70,
        key44: this.b71,
        key45: this.b72,
        key46: this.b73,
        key47: this.b74,
        key48: this.b75,
        key49: this.b105,
        key50: this.b106,
        key51: this.b107,
        key52: this.b108,
        key53: this.b109,
        key54: this.b110,
        key55: this.b111,
        key56: this.b112,
      };
      initWordStorage("6004.docx", data);
      this.handleExcelCache("6004.xlsx", "折点加氯工程量");
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
    get_a_1() {
      return "液氯投加能力Q＝" + this.b65 + "kg/h";
    },
    get_a_2() {
      return "碱投加能力Q＝" + this.b74 + "L/h";
    },
    get_b_1() {
      return this.b111 + "×" + this.b112 + "×" + this.b109;
    },
    get_b_2() {
      return this.b106;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b13() {
      return ((17 * parseFloat(this.b11)) / 14).toFixed(2);
    },
    b32() {
      return ((71 * parseFloat(this.b15)) / 35.5).toFixed(2);
    },
    b33() {
      return (parseFloat(this.b25) + parseFloat(this.b32)).toFixed(2);
    },
    b34() {
      return (parseFloat(this.b33) * parseFloat(this.b8)).toFixed(2);
    },
    b36() {
      return ((71 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b37() {
      return ((51.5 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b38() {
      return (parseFloat(this.b37) - parseFloat(this.b15)).toFixed(2);
    },
    b39() {
      return ((71 * parseFloat(this.b38)) / 103).toFixed(2);
    },
    b40() {
      return (
        parseFloat(this.b25) +
        parseFloat(this.b36) +
        parseFloat(this.b39)
      ).toFixed(2);
    },
    b41() {
      return (parseFloat(this.b40) * parseFloat(this.b8)).toFixed(2);
    },
    b43() {
      return ((71 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b44() {
      return ((71 * parseFloat(this.b37)) / 103).toFixed(2);
    },
    b45() {
      return ((71 * parseFloat(this.b15)) / 35.5).toFixed(2);
    },
    b46() {
      return (
        parseFloat(this.b25) +
        parseFloat(this.b43) +
        parseFloat(this.b44) +
        parseFloat(this.b45)
      ).toFixed(2);
    },
    b47() {
      return (parseFloat(this.b46) * parseFloat(this.b8)).toFixed(2);
    },
    b50() {
      return ((71 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b51() {
      return ((71 * parseFloat(this.b37)) / 103).toFixed(2);
    },
    b52() {
      return (
        parseFloat(this.b25) +
        parseFloat(this.b50) +
        parseFloat(this.b51)
      ).toFixed(2);
    },
    b53() {
      return (
        (parseFloat(this.b50) + parseFloat(this.b51)) /
        parseFloat(this.b11)
      ).toFixed(2);
    },
    b54() {
      return (
        parseFloat(this.b25) +
        (parseFloat(this.b11) - parseFloat(this.b14)) * parseFloat(this.b53)
      ).toFixed(2);
    },
    b55() {
      return (
        (parseFloat(this.b54) * parseFloat(this.b8) * parseFloat(this.b27)) /
        1000
      ).toFixed(2);
    },
    b57() {
      return (
        (parseFloat(this.b11_1) - parseFloat(this.b16)) *
        parseFloat(this.b26)
      ).toFixed(2);
    },
    b58() {
      return (
        (parseFloat(this.b57) * parseFloat(this.b8) * parseFloat(this.b27)) /
        1000
      ).toFixed(2);
    },
    b60() {
      return (parseFloat(this.b54) + parseFloat(this.b57)).toFixed(2);
    },
    b61() {
      return (parseFloat(this.b55) + parseFloat(this.b58)).toFixed(2);
    },
    b62() {
      return 1.46;
    },
    b63() {
      return (parseFloat(this.b55) / parseFloat(this.b62)).toFixed(2);
    },
    b64() {
      return (2 * parseFloat(this.b61)).toFixed(2);
    },
    b66() {
      return 2;
    },
    b68() {
      return ((parseFloat(this.b60) * 2) / 71).toFixed(2);
    },
    b69() {
      return (
        (parseFloat(this.b68) * 40 * parseFloat(this.b8)) /
        0.3 /
        1000
      ).toFixed(2);
    },
    b70() {
      return 1.33;
    },
    b71() {
      return (parseFloat(this.b69) / parseFloat(this.b70)).toFixed(2);
    },
    b72() {
      return (2 * parseFloat(this.b69)).toFixed(2);
    },
    b73() {
      return (parseFloat(this.b72) / parseFloat(this.b70)).toFixed(2);
    },
    b75() {
      return (parseFloat(this.b66) * parseFloat(this.b8)).toFixed(2);
    },
    b109() {
      return (parseFloat(this.b107) + parseFloat(this.b108)).toFixed(1);
    },
    b110() {
      return (
        parseFloat(this.b105) /
        parseFloat(this.b106) /
        parseFloat(this.b107)
      ).toFixed(1);
    },
    b112() {
      return (parseFloat(this.b110) / parseFloat(this.b111)).toFixed(1);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "反应池",
          尺寸: this.get_b_1(),
          标高: "池顶标高+3.0m,池底标高-1.5m。",
          单位: "座",
          数量: this.get_b_2(),
          结构形式: "钢砼",
          备注: "",
          暖通要求: "",
          与基础设计不同处: "",
          土建说明: "",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "加氯成套装置",
          设备类型: "加氯成套装置",
          规格及型号: this.get_a_1(),
          单位: "台",
          数量: "1",
          备注:
            "成套装置，含就地控制箱，氨瓶，加压泵，水射器，管道加热器，液氯膨胀室，液氯蒸发器，氯气过滤器，真空调节器，加氯机，漏氯报警仪，漏氯吸收装置，配套阀门管道等。",
          运行数量: "1",
          单台功率: "",
          用电量: "",
        },
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "加碱成套装置",
          设备类型: "加碱成套装置",
          规格及型号: this.get_a_2(),
          单位: "台",
          数量: "1",
          备注:
            "成套装置，含就地控制箱（1个）、安装机架（1个）、碱加药泵（2台）、Y型过滤器（2个）、脉冲缓冲器（1个）、安全阀（2个）、背压阀（1个），磁翻板液位计（1个），配套阀门管道等。",
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
    console.log("6004-activated被调用了");
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
        名称: "反应池",
        尺寸: this.get_b_1(),
        标高: "池顶标高+3.0m,池底标高-1.5m。",
        单位: "座",
        数量: this.get_b_2(),
        结构形式: "钢砼",
        备注: "",
        暖通要求: "",
        与基础设计不同处: "",
        土建说明: "",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "加氯成套装置",
        设备类型: "加氯成套装置",
        规格及型号: this.get_a_1(),
        单位: "台",
        数量: "1",
        备注:
          "成套装置，含就地控制箱，氨瓶，加压泵，水射器，管道加热器，液氯膨胀室，液氯蒸发器，氯气过滤器，真空调节器，加氯机，漏氯报警仪，漏氯吸收装置，配套阀门管道等。",
        运行数量: "1",
        单台功率: "",
        用电量: "",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "加碱成套装置",
        设备类型: "加碱成套装置",
        规格及型号: this.get_a_2(),
        单位: "台",
        数量: "1",
        备注:
          "成套装置，含就地控制箱（1个）、安装机架（1个）、碱加药泵（2台）、Y型过滤器（2个）、脉冲缓冲器（1个）、安全阀（2个）、背压阀（1个），磁翻板液位计（1个），配套阀门管道等。",
        运行数量: "1",
        单台功率: "",
        用电量: "",
      },
    ];
    this.data3 = [];
    this.data4 = [
      {
        序号: "1",
        仪表位号: "",
        安装位置: "产水外输管道",
        仪表名称: "余氯分析仪",
        规格及型号: "0-5mg/L，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "产水外输管道",
        仪表名称: "氨氮分析仪",
        规格及型号: "0-12mg/L，介质：工业废水，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "产水外输管道",
        仪表名称: "COD分析仪",
        规格及型号: "0-100mg/L，介质：工业废水，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "4",
        仪表位号: "",
        安装位置: "反应池",
        仪表名称: "PH在线监测仪",
        规格及型号: "pH量程范围：0-14，温度量程范围：0-100℃，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "5",
        仪表位号: "",
        安装位置: "反应池",
        仪表名称: "静压式液位计",
        规格及型号: "一体式，0-6m，介质：回用水，4~20mA信号输出，就地显示",
        单位: "台",
        数量: "1",
        生产厂家: "",
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
