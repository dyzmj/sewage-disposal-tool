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
  i18n: require("./i18n_3002"),
  data() {
    return {
      modelVisible: false,
      b4: "20000",
      b5: "5",
      b8: "0.35",
      b10: "30",
      b11: "60",
      b13: "7",
      b15: "2",
      b19: "0.95",
      b21: "12",
      b26: "250",
      b28: "1000",
      b30: "0.5",
      b31: "1.2",
      b33: "2",
      b34: "0.8",
      b38: "0.75",
      b40: "0.01",
      b45: "0.1",
      b47: "0.15",
      b50: "3",
      b56: "8",
      b57: "1.2",
      b59_1: "0.20",
      b62: "0.12",
      b63: "0.05",
      b64: "0.15",
      b66: "0.025",
      b69: "0.62",
      b70: "9.81",
      b71_1: "40",
      b76: "1",
      b78: "0.08",
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
        this.b4 = 40000;
      } else {
        this.b4 = waterData;
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
        exportExcel2(allData1, allData2, "斜管沉淀池工程量", this);
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
        key3: this.b6_2,
        key4: this.b10,
        key5: this.b11,
        key6: this.b13,
        key7: this.b14,
        key8: this.b8,
        key9: this.b19,
        key10: this.b15,
        key11: this.b18,
        key12: this.b20,
        key13: this.b21,
        key14: this.b21_1,
        key15: this.b22,
        key16: this.b24,
        key17: this.b25,
        key18: this.b26,
        key19: this.b27,
        key20: this.b28,
        key21: this.b30,
        key22: this.b31,
        key23: this.b32,
        key24: this.b33,
        key25: this.b34,
        key26: this.b35,
        key27: this.b38,
        key28: this.b39,
        key29: this.b41,
        key30: this.b43,
        key31: this.b45,
        key32: this.b46,
        key33: this.b47,
        key34: this.b48,
        key35: this.b49,
        key36: this.b50,
        key37: this.b51,
        key38: this.b52,
        key39: this.b53,
        key40: this.b56,
        key41: this.b57,
        key42: this.b58,
        key43: this.b59,
        key44: this.b59_1,
        key45: this.b60,
        key46: this.b61,
        key47: this.b62,
        key48: this.b63,
        key49: this.b64,
        key50: this.b65,
        key51: this.b66,
        key52: this.b67,
        key53: this.b68,
        key54: this.b69,
        key55: this.b71,
        key56: this.b71_1,
        key57: this.b72,
        key58: this.b73,
        key59: this.b75,
        key60: this.b76,
        key61: this.b77,
        key62: this.b78,
        key63: this.b79,
      };
      exportWord("斜管沉淀池计算书", "3002.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b4,
        key2: this.b5,
        key3: this.b6_2,
        key4: this.b10,
        key5: this.b11,
        key6: this.b13,
        key7: this.b14,
        key8: this.b8,
        key9: this.b19,
        key10: this.b15,
        key11: this.b18,
        key12: this.b20,
        key13: this.b21,
        key14: this.b21_1,
        key15: this.b22,
        key16: this.b24,
        key17: this.b25,
        key18: this.b26,
        key19: this.b27,
        key20: this.b28,
        key21: this.b30,
        key22: this.b31,
        key23: this.b32,
        key24: this.b33,
        key25: this.b34,
        key26: this.b35,
        key27: this.b38,
        key28: this.b39,
        key29: this.b41,
        key30: this.b43,
        key31: this.b45,
        key32: this.b46,
        key33: this.b47,
        key34: this.b48,
        key35: this.b49,
        key36: this.b50,
        key37: this.b51,
        key38: this.b52,
        key39: this.b53,
        key40: this.b56,
        key41: this.b57,
        key42: this.b58,
        key43: this.b59,
        key44: this.b59_1,
        key45: this.b60,
        key46: this.b61,
        key47: this.b62,
        key48: this.b63,
        key49: this.b64,
        key50: this.b65,
        key51: this.b66,
        key52: this.b67,
        key53: this.b68,
        key54: this.b69,
        key55: this.b71,
        key56: this.b71_1,
        key57: this.b72,
        key58: this.b73,
        key59: this.b75,
        key60: this.b76,
        key61: this.b77,
        key62: this.b78,
        key63: this.b79,
      };
      initWordStorage("3002.docx", data);
      this.handleExcelCache("3002.xlsx", "斜管沉淀池工程量");
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
      return this.b21 + "×" + this.b21_1 + "×" + this.b35 + "m";
    },
    getkey2() {
      return this.b15;
    },
    getkey3() {
      return (
        "池深m，N=2*0.55kW，池宽2*" +
        this.b21_1 +
        "m，轨距" +
        (2 * parseFloat(this.b21_1) + 0.3) +
        "m"
      );
    },
    getkey4() {
      return (
        "L×B×H=" + this.b21 + "×" + this.b59_1 + "×" + this.b65 + "m，δ=3mm"
      );
    },
    getkey5() {
      return parseFloat(this.b56) * parseFloat(this.b15);
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b6() {
      return parseFloat(this.b4) * (1 + parseFloat(this.b5) / 100);
    },
    b6_1() {
      return (parseFloat(this.b6) / 24).toFixed(1);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 3600).toFixed(2);
    },
    b12() {
      return ((parseFloat(this.b11) * 3.14159265354) / 180).toFixed(9);
    },
    b14() {
      return (parseFloat(this.b13) / 3.6).toFixed(1);
    },
    b18() {
      return (
        ((parseFloat(this.b6) / 24 / 3600) * 1000) /
        (parseFloat(this.b13) / 3.6)
      ).toFixed(2);
    },
    b20() {
      return (parseFloat(this.b18) / parseFloat(this.b19)).toFixed(2);
    },
    b21_1() {
      return this.ROUND(parseFloat(this.b20) / 2 / parseFloat(this.b21), 1);
    },
    b22() {
      return (
        parseFloat(this.b6_1) /
        parseFloat(this.b21) /
        parseFloat(this.b21_1) /
        parseFloat(this.b15)
      ).toFixed(2);
    },
    b24() {
      return (
        parseFloat(this.b13) /
        3.6 /
        Math.sin(parseFloat(this.b12))
      ).toFixed(2);
    },
    b25() {
      return (
        ((1.33 * parseFloat(this.b24) -
          parseFloat(this.b8) * Math.sin(parseFloat(this.b12))) *
          parseFloat(this.b10)) /
        (parseFloat(this.b8) * Math.cos(parseFloat(this.b12)))
      ).toFixed(2);
    },
    b27() {
      return (parseFloat(this.b25) + parseFloat(this.b26)).toFixed(2);
    },
    b32() {
      return (
        (parseFloat(this.b28) * Math.sin(parseFloat(this.b12))) /
        1000
      ).toFixed(2);
    },
    b35() {
      return this.ROUND(
        parseFloat(this.b30) +
          parseFloat(this.b31) +
          parseFloat(this.b32) +
          parseFloat(this.b33) +
          parseFloat(this.b34),
        2
      );
    },
    b36() {
      return (parseFloat(this.b10) / 4 / 10).toFixed(2);
    },
    b39() {
      return (parseFloat(this.b24) / 10).toFixed(2);
    },
    b41() {
      return (
        (parseFloat(this.b38) * parseFloat(this.b39)) /
        parseFloat(this.b40)
      ).toFixed(2);
    },
    b43() {
      return (parseFloat(this.b28) / parseFloat(this.b24) / 60).toFixed(2);
    },
    b46() {
      return (parseFloat(this.b6) / 24 / 3600 / parseFloat(this.b45)).toFixed(
        2
      );
    },
    b48() {
      return ((3.1415926 * Math.pow(parseFloat(this.b47), 2)) / 4).toFixed(3);
    },
    b49() {
      return this.ROUND(
        parseFloat(this.b46) / parseFloat(this.b48) / parseFloat(this.b15),
        0
      );
    },
    b51() {
      return (parseFloat(this.b49) / parseFloat(this.b50)).toFixed(0);
    },
    b52() {
      return this.ROUND(parseFloat(this.b21) / (parseFloat(this.b51) + 1), 2);
    },
    b53() {
      return (
        (parseFloat(this.b21) -
          (parseFloat(this.b51) - 1) * parseFloat(this.b52)) /
        2
      ).toFixed(3);
    },
    b58() {
      return (
        (parseFloat(this.b6_2) / parseFloat(this.b15) / parseFloat(this.b56)) *
        parseFloat(this.b57)
      ).toFixed(3);
    },
    b59() {
      return 0.181;
    },
    b60() {
      return (0.75 * parseFloat(this.b59_1)).toFixed(2);
    },
    b61() {
      return (1.25 * parseFloat(this.b59)).toFixed(2);
    },
    b65() {
      return this.ROUND(
        parseFloat(this.b61) +
          parseFloat(this.b62) +
          parseFloat(this.b63) +
          parseFloat(this.b64),
        2
      );
    },
    b67() {
      return ((3.1415926 * Math.pow(parseFloat(this.b66), 2)) / 4).toFixed(9);
    },
    b68() {
      return (
        parseFloat(this.b69) *
        parseFloat(this.b67) *
        Math.sqrt(2 * parseFloat(this.b70) * parseFloat(this.b62))
      ).toFixed(9);
    },
    b71() {
      return (parseFloat(this.b58) / parseFloat(this.b68)).toFixed(2);
    },
    b72() {
      return (parseFloat(this.b71_1) / 2).toFixed(0);
    },
    b73() {
      return this.ROUND(
        (parseFloat(this.b21) - 0.6) / (parseFloat(this.b72) + 1),
        2
      );
    },
    b75() {
      return (parseFloat(this.b6_2) * parseFloat(this.b57)).toFixed(2);
    },
    b77() {
      return (
        1.73 *
        Math.pow(
          parseFloat(this.b75) /
            parseFloat(this.b70) /
            Math.pow(parseFloat(this.b76), 2),
          1 / 3
        )
      ).toFixed(2);
    },
    b79() {
      return (
        parseFloat(this.b65) +
        parseFloat(this.b77) +
        parseFloat(this.b78)
      ).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "斜管沉淀池",
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
          序号: "",
          设备位号: "",
          设备工艺名称: "桁车式吸泥机",
          设备类型: "吸泥机",
          规格及型号: this.getkey3(),
          单位: "台",
          数量: "1",
          运行时间: "4h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注:
            "本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "集水槽",
          设备类型: "集水槽",
          规格及型号: this.getkey4(),
          单位: "套",
          数量: this.getkey5(),
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
    console.log("3002-activated被调用了");
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
        名称: "斜管沉淀池",
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
        序号: "",
        设备位号: "",
        设备工艺名称: "桁车式吸泥机",
        设备类型: "吸泥机",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: "1",
        运行时间: "4h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注:
          "本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "集水槽",
        设备类型: "集水槽",
        规格及型号: this.getkey4(),
        单位: "套",
        数量: this.getkey5(),
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
