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
  i18n: require("./i18n_3006"),
  data() {
    return {
      modelVisible: false,
      b3: "25000",
      b4: "15",
      b5: "1.5",
      b6: "0.1",
      b7: "2",
      b8: "",
      b9: "2",
      b15: "8",
      b21: "8",
      b26: "0.25",
      b27: "8",
      b29: "",
      b30: "12",
      b31: "200",
      b33: "600",
      b38: "2",
      b39: "120",
      b41: "3",
      b43: "5.6",
      b48: "0.25",
      b49: "2",
      b49_1: "1",
      b52: "40",
      b53: "1.2",
      b55: "1.4",
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
        exportExcel3(allData1, allData2, allData3, "平流式气浮池工程量", this);
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
        key3: this.b5,
        key4: this.b6,
        key5: this.b7,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b14,
        key11: this.b15,
        key12: this.b16,
        key13: this.b17,
        key14: this.b18,
        key15: this.b20,
        key16: this.b21,
        key17: this.b22,
        key18: this.b23,
        key19: this.b26,
        key20: this.b27,
        key21: this.b28,
        key22: this.b30,
        key23: this.b31,
        key24: this.b32,
        key25: this.b33,
        key26: this.b34,
        key27: this.b36,
        key28: this.b37,
        key29: this.b38,
        key30: this.b39,
        key31: this.b40,
        key32: this.b41,
        key33: this.b43,
        key34: this.b44,
        key35: this.b45,
        key36: this.b47,
        key37: this.b48,
        key38: this.b49,
        key39: this.b49_1,
        key40: this.b50,
        key41: this.b52,
        key42: this.b53,
        key43: this.b54,
        key44: this.b55,
        key45: this.b56,
      };
      exportWord("平流式气浮池计算书", "3006.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b5,
        key4: this.b6,
        key5: this.b7,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b14,
        key11: this.b15,
        key12: this.b16,
        key13: this.b17,
        key14: this.b18,
        key15: this.b20,
        key16: this.b21,
        key17: this.b22,
        key18: this.b23,
        key19: this.b26,
        key20: this.b27,
        key21: this.b28,
        key22: this.b30,
        key23: this.b31,
        key24: this.b32,
        key25: this.b33,
        key26: this.b34,
        key27: this.b36,
        key28: this.b37,
        key29: this.b38,
        key30: this.b39,
        key31: this.b40,
        key32: this.b41,
        key33: this.b43,
        key34: this.b44,
        key35: this.b45,
        key36: this.b47,
        key37: this.b48,
        key38: this.b49,
        key39: this.b49_1,
        key40: this.b50,
        key41: this.b52,
        key42: this.b53,
        key43: this.b54,
        key44: this.b55,
        key45: this.b56,
      };
      initWordStorage("3006.docx", data);
      this.handleExcelCache("3006.xlsx", "平流式气浮池工程量");
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
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
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
    get_a_1_1() {
      return (
        this.b16 + "×" + this.b15 + "×" + (parseFloat(this.b7) + 0.5) + "m"
      );
    },
    get_a_1_2() {
      return this.b9;
    },
    get_b_1_1() {
      return (
        "池宽" + this.b15 + "m，池长" + this.b16 + "m，行走速度5m/min，N=0.75kW"
      );
    },
    get_b_1_2() {
      return 1;
    },
    get_b_2_1() {
      return "溶气压力0.25MPa，释放器出流量" + this.b43 + "m3/h";
    },
    get_b_2_2() {
      return this.b45;
    },
    get_b_3_1() {
      return (
        "Φ" +
        this.b40 +
        "*" +
        this.b41 +
        "m，工作压力0.2~0.5MPa，过水能力" +
        this.b37 +
        "m3/h，含填料"
      );
    },
    get_b_3_2() {
      return this.b38;
    },
    get_b_4_1() {
      return (
        "Q=" + this.b50 + "m3/h，H=" + parseFloat(this.b48) * 100 + "m，N=7.5kW"
      );
    },
    get_b_4_2() {
      return parseFloat(this.b49) + parseFloat(this.b49_1);
    },
    get_b_5_1() {
      return "Q=" + this.b56 + "m3/min，P=0.6MPa，N=0.375kW";
    },
    get_b_5_2() {
      return 2;
    },
    get_c_1_1() {
      return (
        "一体式，DN80，0~" +
        this.b50 +
        "m3/h，4-20mA信号输出，就地显示，电源：220V，防爆"
      );
    },
    get_c_2_1() {
      return (
        "一体式，DN40，0~" +
        this.b56 +
        "m3/h，4-20mA信号输出，就地显示，电源：220V，防爆"
      );
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b10() {
      return (
        (parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
        parseFloat(this.b9)
      ).toFixed(0);
    },
    b11() {
      return (parseFloat(this.b10) / 24).toFixed(2);
    },
    b12() {
      return (parseFloat(this.b11) / 3600).toFixed(2);
    },
    b14() {
      return (
        ((parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
          parseFloat(this.b9) /
          24 /
          3600 /
          parseFloat(this.b5)) *
        1000
      ).toFixed(2);
    },
    b16() {
      return this.ROUNDUP(
        parseFloat(this.b14) / parseFloat(this.b15),
        0
      ).toFixed(2);
    },
    b17() {
      return (
        ((parseFloat(this.b14) * parseFloat(this.b7)) / parseFloat(this.b11)) *
        60
      ).toFixed(2);
    },
    b18() {
      return (
        ((parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
          parseFloat(this.b9) /
          24 /
          3600 /
          parseFloat(this.b15) /
          parseFloat(this.b7)) *
        1000
      ).toFixed(2);
    },
    b20() {
      return (
        ((parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
          parseFloat(this.b9) /
          24 /
          3600 /
          parseFloat(this.b4)) *
        1000
      ).toFixed(2);
    },
    b22() {
      return this.ROUNDUP(parseFloat(this.b20) / parseFloat(this.b21), 1);
    },
    b23() {
      return (
        ((parseFloat(this.b20) * parseFloat(this.b7)) / parseFloat(this.b11)) *
        60
      ).toFixed(2);
    },
    b28() {
      return (
        (parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
        parseFloat(this.b9) /
        24 /
        3600 /
        parseFloat(this.b27) /
        parseFloat(this.b26)
      ).toFixed(3);
    },
    b32() {
      return (
        (((parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
          parseFloat(this.b9) /
          24 /
          3600 /
          parseFloat(this.b30) /
          3.14) *
          4) /
        Math.pow(parseFloat(this.b31) / 1000, 2)
      ).toFixed(2);
    },
    b34() {
      return (
        (((parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
          parseFloat(this.b9) /
          24 /
          3600 /
          3.14) *
          4) /
        Math.pow(parseFloat(this.b33) / 1000, 2)
      ).toFixed(2);
    },
    b36() {
      return (parseFloat(this.b3) * parseFloat(this.b6)).toFixed(0);
    },
    b37() {
      return this.ROUND(parseFloat(this.b36) / 24, 2);
    },
    b40() {
      return this.ROUNDUP(
        Math.sqrt(
          (4 * parseFloat(this.b37)) /
            parseFloat(this.b38) /
            3.14 /
            parseFloat(this.b39)
        ),
        1
      ).toFixed(2);
    },
    b44() {
      return this.ROUNDUP(
        parseFloat(this.b37) / parseFloat(this.b43) / parseFloat(this.b9),
        0
      ).toFixed(2);
    },
    b45() {
      return (parseFloat(this.b44) * parseFloat(this.b9)).toFixed(2);
    },
    b47() {
      return this.b37;
    },
    b50() {
      return this.ROUND(parseFloat(this.b47) / parseFloat(this.b49), 2).toFixed(
        2
      );
    },
    b54() {
      return (
        parseFloat(this.b37) *
        parseFloat(this.b53) *
        parseFloat(this.b52)
      ).toFixed(2);
    },
    b56() {
      return this.ROUND(
        (parseFloat(this.b54) * parseFloat(this.b55)) / 60 / 1000,
        2
      ).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "1",
          名称: "平流式气浮池",
          尺寸: this.get_a_1_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_1_2(),
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
          设备位号: "",
          设备工艺名称: "桥式刮渣机",
          设备类型: "刮渣机",
          规格及型号: this.get_b_1_1(),
          单位: "台",
          数量: this.get_b_1_2(),
          运行时间: "4h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注: "本机含主梁、轨道、驱动装置、机架、集渣斗，配套控制箱",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "溶气释放器",
          设备类型: "溶气释放器",
          规格及型号: this.get_b_2_1(),
          单位: "个",
          数量: this.get_b_2_2(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "溶气罐",
          设备类型: "压力溶气罐",
          规格及型号: this.get_b_3_1(),
          单位: "台",
          数量: this.get_b_3_2(),
          运行时间: "",
          主要材质: "碳钢防腐",
          备注: "配安全阀、压力表、放空阀",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "溶气泵",
          设备类型: "立式离心泵",
          规格及型号: this.get_b_4_1(),
          单位: "台",
          数量: this.get_b_4_2(),
          运行时间: "24h",
          主要材质: "",
          备注: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "空压机",
          设备类型: "活塞式空压机",
          规格及型号: this.get_b_5_1(),
          单位: "台",
          数量: this.get_b_5_2(),
          运行时间: "24h",
          主要材质: "",
          备注: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "",
          安装位置: "溶气泵出口总管",
          仪表名称: "电磁流量计",
          规格及型号: this.get_c_1_1(),
          单位: "台",
          数量: "2",
          备注: "",
          生产厂家: "",
          a: "",
        },
        {
          序号: "2",
          仪表位号: "",
          安装位置: "空压机出口总管",
          仪表名称: "涡街流量计",
          规格及型号: this.get_c_2_1(),
          单位: "台",
          数量: "2",
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
    console.log("3006-activated被调用了");
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
        名称: "平流式气浮池",
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_1_2(),
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "桥式刮渣机",
        设备类型: "刮渣机",
        规格及型号: this.get_b_1_1(),
        单位: "台",
        数量: this.get_b_1_2(),
        运行时间: "4h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "本机含主梁、轨道、驱动装置、机架、集渣斗，配套控制箱",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "溶气释放器",
        设备类型: "溶气释放器",
        规格及型号: this.get_b_2_1(),
        单位: "个",
        数量: this.get_b_2_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "溶气罐",
        设备类型: "压力溶气罐",
        规格及型号: this.get_b_3_1(),
        单位: "台",
        数量: this.get_b_3_2(),
        运行时间: "",
        主要材质: "碳钢防腐",
        备注: "配安全阀、压力表、放空阀",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "溶气泵",
        设备类型: "立式离心泵",
        规格及型号: this.get_b_4_1(),
        单位: "台",
        数量: this.get_b_4_2(),
        运行时间: "24h",
        主要材质: "",
        备注: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "空压机",
        设备类型: "活塞式空压机",
        规格及型号: this.get_b_5_1(),
        单位: "台",
        数量: this.get_b_5_2(),
        运行时间: "24h",
        主要材质: "",
        备注: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        安装位置: "溶气泵出口总管",
        仪表名称: "电磁流量计",
        规格及型号: this.get_c_1_1(),
        单位: "台",
        数量: "2",
        备注: "",
        生产厂家: "",
        a: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "空压机出口总管",
        仪表名称: "涡街流量计",
        规格及型号: this.get_c_2_1(),
        单位: "台",
        数量: "2",
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
