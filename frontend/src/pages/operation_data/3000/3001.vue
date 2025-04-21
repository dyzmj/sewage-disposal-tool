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
  i18n: require("./i18n_3001"),
  data() {
    return {
      modelVisible: false,
      b3: "20000",
      b6: "",
      b7: "2",
      b8: "2",
      b9: "3",
      b10: "10",
      b19_1: "8.00",
      b20_1: "4.00",
      b34: "0.10",
      b36: "0.2",
      b36_1: "0.2",
      b37_1: "30.0",
      b39: "5",
      b41: "0.4",
      b42: "0.5",
      b43: "0.7",
      b49: "100",
      b50: "5",
      b52: "98",
      b53: "1.02",
      b56: "2",
      b59: "1",
      b60: "1",
      b61: "45",
      b67: "0.8",
      b68: "0.5",
      b73: "0.3",
      b75: "6",
      b79: "0.4",
      b81_1: "0.3",
      b84: "0.07",
      b86_1: "64",
      b90: "0.5",
      b96: "0.8",
      b99: "0.8",
      b100_1: "0.1",
      b103: "3",
      b104_1: "200",
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
      // 设计水量
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b3 = 20000;
      } else {
        this.b3 = waterData;
      }
      // 进水浊度
      const inTurbidityData = getValueFromLocalStorage("inTurbidityData");
      if (inTurbidityData == null || inTurbidityData == "") {
        this.b49 = 100;
      } else {
        this.b49 = inTurbidityData;
      }
      // 出水浊度
      const outTurbidityData = getValueFromLocalStorage("outTurbidityData");
      if (outTurbidityData == null || outTurbidityData == "") {
        this.b50 = 5;
      } else {
        this.b50 = outTurbidityData;
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
        exportExcel2(allData1, allData2, "平流沉淀池工程量", this);
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
        key3: this.b7,
        key4: this.b8,
        key5: this.b9,
        key6: this.b10,
        key7: this.b15,
        key8: this.b18,
        key9: this.b19_1,
        key10: this.b20_1,
        key11: this.b21,
        key12: this.b22,
        key11_1: this.b33,
        key12_1: this.b34,
        key13: this.b35,
        key14: this.b36,
        key15: this.b36_1,
        key16: this.b37_1,
        key17: this.b39,
        key18: this.b40,
        key19: this.b44,
        key20: this.b45,
        key21: this.b41,
        key22: this.b42,
        key23: this.b43,
        key24: this.b49,
        key25: this.b50,
        key26: this.b51,
        key27: this.b52,
        key28: this.b53,
        key29: this.b54,
        key30: this.b56,
        key31: this.b57,
        key32: this.b58,
        key33: this.b59,
        key34: this.b60,
        key35: this.b61_1,
        key36: this.b62,
        key37: this.b63,
        key38: this.b64,
        key39: this.b65,
        key40: this.b66,
        key41: this.b67,
        key42: this.b68,
        key43: this.b69,
        key44: this.b73,
        key45: this.b74,
        key46: this.b75,
        key47: this.b76,
        key48: this.b77,
        key49: this.b78,
        key50: this.b79,
        key51: this.b80,
        key52: this.b84,
        key53: this.b85,
        key54: this.b86,
        key55: this.b86_1,
        key56: this.b90,
        key57: this.b91,
        key58: this.b92,
        key59: this.b96,
        key60: this.b97,
        key61: this.b99,
        key62: this.b100,
        key63: this.b100_1,
      };
      exportWord("平流沉淀池计算书", "3001.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b3_1,
        key3: this.b7,
        key4: this.b8,
        key5: this.b9,
        key6: this.b10,
        key7: this.b15,
        key8: this.b18,
        key9: this.b19_1,
        key10: this.b20_1,
        key11: this.b21,
        key12: this.b22,
        key11_1: this.b33,
        key12_1: this.b34,
        key13: this.b35,
        key14: this.b36,
        key15: this.b36_1,
        key16: this.b37_1,
        key17: this.b39,
        key18: this.b40,
        key19: this.b44,
        key20: this.b45,
        key21: this.b41,
        key22: this.b42,
        key23: this.b43,
        key24: this.b49,
        key25: this.b50,
        key26: this.b51,
        key27: this.b52,
        key28: this.b53,
        key29: this.b54,
        key30: this.b56,
        key31: this.b57,
        key32: this.b58,
        key33: this.b59,
        key34: this.b60,
        key35: this.b61_1,
        key36: this.b62,
        key37: this.b63,
        key38: this.b64,
        key39: this.b65,
        key40: this.b66,
        key41: this.b67,
        key42: this.b68,
        key43: this.b69,
        key44: this.b73,
        key45: this.b74,
        key46: this.b75,
        key47: this.b76,
        key48: this.b77,
        key49: this.b78,
        key50: this.b79,
        key51: this.b80,
        key52: this.b84,
        key53: this.b85,
        key54: this.b86,
        key55: this.b86_1,
        key56: this.b90,
        key57: this.b91,
        key58: this.b92,
        key59: this.b96,
        key60: this.b97,
        key61: this.b99,
        key62: this.b100,
        key63: this.b100_1,
      };
      initWordStorage("3001.docx", data);
      this.handleExcelCache("3001.xlsx", "平流沉淀池工程量");
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

        const data = [...allData1, null, null, ...allData2];
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
    getkey1() {
      return this.b15 + "×" + 2 * parseFloat(this.b20_1) + "×" + this.b69 + "m";
    },
    getkey2() {
      return (
        "池深" +
        (parseFloat(this.b69) - parseFloat(this.b62)) +
        "m，池长" +
        this.b15 +
        "m，N=0.75kW，池宽2*" +
        this.b20_1 +
        "m，轨距" +
        (parseFloat(this.b20_1) * 2 + 0.3) +
        "m"
      );
    },
    getkey3() {
      return (
        "L×B×H=" + this.b74 + "×" + this.b73 + "×" + this.b81_1 + "mm，δ=3mm"
      );
    },
    getkey4() {
      return parseFloat(this.b75) * parseFloat(this.b7);
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(4);
    },
    b3_2() {
      return (parseFloat(this.b3) / (24 * 60 * 60)).toFixed(6);
    },
    b11() {
      return (parseFloat(this.b10) / 1000).toFixed(2);
    },
    b15() {
      return (parseFloat(this.b10) * parseFloat(this.b8) * 3.6).toFixed(0);
    },
    b16() {
      return (
        (parseFloat(this.b3_1) * parseFloat(this.b8)) /
        parseFloat(this.b9)
      ).toFixed(1);
    },
    b17() {
      return (parseFloat(this.b16) * parseFloat(this.b9)).toFixed(1);
    },
    b18() {
      return (
        (parseFloat(this.b3_1) * parseFloat(this.b8)) /
        parseFloat(this.b7)
      ).toFixed(1);
    },
    b19() {
      return (
        parseFloat(this.b17) /
        parseFloat(this.b15) /
        parseFloat(this.b9)
      ).toFixed(2);
    },
    b20() {
      return (
        parseFloat(this.b18) /
        parseFloat(this.b15) /
        parseFloat(this.b9)
      ).toFixed(2);
    },
    b21() {
      return (parseFloat(this.b15) / parseFloat(this.b19)).toFixed(1);
    },
    b22() {
      return (parseFloat(this.b15) / parseFloat(this.b9)).toFixed(1);
    },
    b24() {
      return (parseFloat(this.b20_1) * parseFloat(this.b9)).toFixed(2);
    },
    b25() {
      return (parseFloat(this.b20_1) + parseFloat(this.b9) * 2).toFixed(1);
    },
    b26() {
      return (parseFloat(this.b24) / parseFloat(this.b25)).toFixed(1);
    },
    b27() {
      return (
        Math.pow(parseFloat(this.b11), 2) /
        9.81 /
        parseFloat(this.b26)
      ).toFixed(8);
    },
    b28() {
      return (
        (parseFloat(this.b11) * parseFloat(this.b26)) /
        0.00000101
      ).toFixed(1);
    },
    b32() {
      return this.b20_1;
    },
    b33() {
      return (parseFloat(this.b9) + 0.3 + 0.5).toFixed(1);
    },
    b35() {
      return (
        parseFloat(this.b3_1) /
        3600 /
        parseFloat(this.b7) /
        parseFloat(this.b34)
      ).toFixed(1);
    },
    b37() {
      return (
        parseFloat(this.b35) /
        parseFloat(this.b36) /
        parseFloat(this.b36_1)
      ).toFixed(1);
    },
    b40() {
      return (parseFloat(this.b37_1) / parseFloat(this.b39)).toFixed(0);
    },
    b44() {
      return (
        (parseFloat(this.b20_1) -
          parseFloat(this.b41) * 2 -
          parseFloat(this.b36) * parseFloat(this.b40)) /
        (parseFloat(this.b40) - 1)
      ).toFixed(1);
    },
    b45() {
      return (
        (parseFloat(this.b33) -
          parseFloat(this.b42) -
          parseFloat(this.b43) -
          parseFloat(this.b39) * parseFloat(this.b36_1)) /
        (parseFloat(this.b39) - 1)
      ).toFixed(1);
    },
    b51() {
      return (
        (parseFloat(this.b3) * (parseFloat(this.b49) - parseFloat(this.b50))) /
        1000000
      ).toFixed(1);
    },
    b54() {
      return (
        (parseFloat(this.b51) * 100) /
        parseFloat(this.b53) /
        (100 - parseFloat(this.b52))
      ).toFixed(1);
    },
    b57() {
      return this.b20_1;
    },
    b58() {
      return this.b20_1;
    },
    b61_1() {
      return ((parseFloat(this.b61) * 3.14) / 180).toFixed(6);
    },
    b62() {
      return (
        Math.tan(parseFloat(this.b61_1)) *
        ((parseFloat(this.b58) - parseFloat(this.b59)) / 2)
      ).toFixed(2);
    },
    b63() {
      return (
        (1 / 3) *
        parseFloat(this.b62) *
        (parseFloat(this.b57) * parseFloat(this.b58) +
          parseFloat(this.b59) * parseFloat(this.b60) +
          Math.sqrt(
            parseFloat(this.b57) *
              parseFloat(this.b58) *
              parseFloat(this.b59) *
              parseFloat(this.b60)
          ))
      ).toFixed(2);
    },
    b64() {
      return (parseFloat(this.b63) * parseFloat(this.b56)).toFixed(2);
    },
    b65() {
      return ((parseFloat(this.b64) * 24) / parseFloat(this.b54)).toFixed(2);
    },
    b66() {
      return (0.008 * (parseFloat(this.b15) - parseFloat(this.b57))).toFixed(2);
    },
    b69() {
      return this.ROUND(
        parseFloat(this.b68) +
          parseFloat(this.b9) +
          parseFloat(this.b67) +
          parseFloat(this.b66) +
          parseFloat(this.b62),
        2
      );
    },
    b74() {
      return this.b20_1;
    },
    b76() {
      return (
        (parseFloat(this.b74) - 0.3) * 2 * (parseFloat(this.b75) - 1) +
        parseFloat(this.b20_1)
      ).toFixed(0);
    },
    b77() {
      return (parseFloat(this.b3) / 2 / parseFloat(this.b76)).toFixed(2);
    },
    b78() {
      return (
        parseFloat(this.b3_1) /
        parseFloat(this.b7) /
        (parseFloat(this.b75) - 1)
      ).toFixed(2);
    },
    b80() {
      return (
        parseFloat(this.b78) /
        3600 /
        parseFloat(this.b73) /
        parseFloat(this.b79)
      ).toFixed(2);
    },
    b81() {
      return (parseFloat(this.b80) + 0.1).toFixed(2);
    },
    b85() {
      return (1.4 * Math.pow(parseFloat(this.b84), 2.5)).toFixed(4);
    },
    b86() {
      return (parseFloat(this.b3_2) / 2 / parseFloat(this.b85)).toFixed(2);
    },
    b87() {
      return ((parseFloat(this.b74) * 1000) / parseFloat(this.b86_1)).toFixed(
        1
      );
    },
    b88() {
      return (parseFloat(this.b84) * 2).toFixed(2);
    },
    b89() {
      return (parseFloat(this.b88) * parseFloat(this.b86_1)).toFixed(2);
    },
    b91() {
      return (parseFloat(this.b84) / parseFloat(this.b90)).toFixed(2);
    },
    b92() {
      return (parseFloat(this.b91) * 2).toFixed(2);
    },
    b97() {
      return (
        1.73 *
        Math.pow(
          Math.pow(parseFloat(this.b3) / 24 / 3600 / 2, 2) /
            9.81 /
            Math.pow(parseFloat(this.b96), 2),
          1 / 3
        )
      ).toFixed(2);
    },
    b98() {
      return (
        parseFloat(this.b97) +
        parseFloat(this.b80) +
        0.05 +
        parseFloat(this.b84)
      ).toFixed(2);
    },
    b100() {
      return (parseFloat(this.b98) + 0.1).toFixed(2);
    },
    b104() {
      return Math.pow(
        (0.7 *
          parseFloat(this.b20_1) *
          parseFloat(this.b15) *
          Math.pow(parseFloat(this.b9), 0.5)) /
          3600 /
          parseFloat(this.b103),
        1 / 2
      ).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "平流沉淀池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: "1",
          结构形式: "钢砼",
          备注: "半地下式",
          暖通要求: "无",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "桁车式刮泥机",
          设备类型: "刮泥机",
          规格及型号: this.getkey2(),
          单位: "台",
          数量: "1",
          运行时间: "4h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注: "本机含主梁、轨道、驱动装置、机架、刮板、撇渣装置，配套控制箱",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "集水槽",
          设备类型: "集水槽",
          规格及型号: this.getkey3(),
          单位: "套",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "SS304",
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
    console.log("3001-activated被调用了");
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
        名称: "平流沉淀池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: "1",
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "桁车式刮泥机",
        设备类型: "刮泥机",
        规格及型号: this.getkey2(),
        单位: "台",
        数量: "1",
        运行时间: "4h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "本机含主梁、轨道、驱动装置、机架、刮板、撇渣装置，配套控制箱",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "集水槽",
        设备类型: "集水槽",
        规格及型号: this.getkey3(),
        单位: "套",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "SS304",
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
