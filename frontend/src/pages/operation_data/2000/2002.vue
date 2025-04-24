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
  i18n: require("./i18n_2002"),
  data() {
    return {
      modelVisible: false,
      b3: "40000",
      b4: "2",
      b5: "15",
      b6: "0.05",
      b9: "4",
      b16: "4",
      b18: "0.2",
      b22: "0.5",
      b33: "0.25",
      b34: "0.2",
      b35: "0.16",
      b36: "0.3",
      b37: "0.2",
      b38: "0.15",
      b39: "0.1",
      b45: "3",
      b46: "2",
      b47: "1",
      b48: "0",
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
        // 导出 Excel
        exportExcel2(allData1, allData2, "网格絮凝池工程量", this);
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
        key6: this.b8,
        key7: this.b9,
        key8: this.b10,
        key9: this.b11,
        key10: this.b12_1,
        key11: this.b13_1,
        key12: this.b14,
        key13: this.b15_1,
        key14: this.b16,
        key15: this.b17_1,
        key16: this.b18,
        key17: this.b19,
        key18: this.b20,
        key19: this.b21,
        key20: this.b22,
        key21: this.b24,
        key22: this.b25,
        key23: this.b26,
        key24: this.b27,
        key25: this.b29,
        key26: this.b30,
        key27: this.b31,
        key28: this.b32,
      };
      exportWord("网格絮凝池计算书", "2002.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b5,
        key4: this.b6,
        key5: this.b7,
        key6: this.b8,
        key7: this.b9,
        key8: this.b10,
        key9: this.b11,
        key10: this.b12_1,
        key11: this.b13_1,
        key12: this.b14,
        key13: this.b15_1,
        key14: this.b16,
        key15: this.b17_1,
        key16: this.b18,
        key17: this.b19,
        key18: this.b20,
        key19: this.b21,
        key20: this.b22,
        key21: this.b24,
        key22: this.b25,
        key23: this.b26,
        key24: this.b27,
        key25: this.b29,
        key26: this.b30,
        key27: this.b31,
        key28: this.b32,
      };
      initWordStorage("2002.docx", data);
      this.handleExcelCache("2002.xlsx", "网格絮凝池工程量");
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
        initExcelStorage(allData1, allData2, null, path, name);
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
      return this.b20 + "×" + this.b19 + "×" + this.b9 + "m";
    },
    getkey2() {
      return this.b4;
    },
    getkey3() {
      return (
        "池L*B=" +
        this.b12_1 +
        "*" +
        this.b13_1 +
        "m，网格孔尺寸80×80mm，厚度10mm"
      );
    },
    getkey4() {
      return parseFloat(this.b17_1) * parseFloat(this.b45);
    },
    getkey5() {
      return (
        "池L*B=" +
        this.b12_1 +
        "*" +
        this.b13_1 +
        "m，网格孔尺寸100×100mm，厚度10mm"
      );
    },
    getkey6() {
      return (
        parseFloat(this.b17_1) * parseFloat(this.b46) + parseFloat(this.b17_1)
      );
    },
    getkey7() {
      return parseFloat(this.b15_1).toFixed(0);
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b7() {
      return (
        (parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
        2 /
        86400
      ).toFixed(2);
    },
    b8() {
      return (
        ((parseFloat(this.b3) * (1 + parseFloat(this.b6))) / 2 / 86400) *
        parseFloat(this.b5) *
        60
      ).toFixed(2);
    },
    b10() {
      return (parseFloat(this.b8) / parseFloat(this.b9)).toFixed(2);
    },
    b11() {
      return (
        (parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
        2 /
        86400 /
        0.12
      ).toFixed(2);
    },
    b12() {
      return Math.pow(parseFloat(this.b11), 0.5).toFixed(2);
    },
    b12_1() {
      return parseFloat(parseFloat(this.b12).toFixed(1)).toFixed(2);
    },
    b13() {
      return (parseFloat(this.b11) / parseFloat(this.b12)).toFixed(2);
    },
    b13_1() {
      return parseFloat(parseFloat(this.b13).toFixed(1)).toFixed(2);
    },
    b14() {
      return (parseFloat(this.b12) * parseFloat(this.b13_1)).toFixed(2);
    },
    b15() {
      return (
        parseFloat(this.b8) /
        parseFloat(this.b9) /
        parseFloat(this.b12_1) /
        parseFloat(this.b13_1)
      ).toFixed(4);
    },
    b15_1() {
      return parseFloat(parseFloat(this.b15).toFixed(0)).toFixed(2);
    },
    b17() {
      return (parseFloat(this.b15) / parseFloat(this.b16)).toFixed(0);
    },
    b17_1() {
      return parseFloat(this.b17).toFixed(2);
    },
    b19() {
      return (
        parseFloat(this.b12_1) * parseFloat(this.b17_1) +
        (parseFloat(this.b17_1) - 1) * parseFloat(this.b18)
      ).toFixed(0);
    },
    b20() {
      return (
        parseFloat(this.b13_1) * parseFloat(this.b16) +
        (parseFloat(this.b16) - 1) * parseFloat(this.b18)
      ).toFixed(1);
    },
    b21() {
      return (
        (parseFloat(this.b15_1) *
          parseFloat(this.b12) *
          parseFloat(this.b13_1) *
          parseFloat(this.b9)) /
        parseFloat(this.b7) /
        60
      ).toFixed(4);
    },
    b20_1() {
      return (parseFloat(this.b12) * parseFloat(this.b13_1)).toFixed(4);
    },
    b21_1() {
      return parseFloat(parseFloat(this.b13).toFixed(1)).toFixed(1);
    },
    b23() {
      return (
        Math.pow(
          parseFloat(
            (parseFloat(this.b3) * (1 + parseFloat(this.b6))) / 2 / 86400 / 0.12
          ),
          0.5
        ) * parseFloat(this.b13_1)
      ).toFixed(4);
    },
    b24() {
      return this.b13_1;
    },
    b25() {
      return Math.pow(parseFloat(this.b26), 2).toFixed(2);
    },
    b26() {
      return 0.5;
    },
    b27() {
      return 60;
    },
    b28() {
      return (
        (parseFloat(this.b24) - parseFloat(this.b26)) *
        Math.tan((parseFloat(this.b27) / 180) * 3.1415) *
        0.5
      ).toFixed(2);
    },
    b29() {
      return 0.8;
    },
    b30() {
      return (
        (parseFloat(this.b23) +
          parseFloat(this.b25) +
          Math.sqrt(parseFloat(this.b23) * parseFloat(this.b25)) *
            parseFloat(this.b29)) /
        3
      ).toFixed(2);
    },
    b31() {
      return (parseFloat(this.b30) * parseFloat(this.b15_1)).toFixed(2);
    },
    b32() {
      return parseFloat(this.b9) + parseFloat(this.b22) + parseFloat(this.b29);
    },
    b40() {
      return this.b13_1;
    },
    b41() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b36) /
        parseFloat(this.b40)
      ).toFixed(4);
    },
    b42() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b37) /
        parseFloat(this.b40)
      ).toFixed(5);
    },
    b43() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b38) /
        parseFloat(this.b40)
      ).toFixed(5);
    },
    b44() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b39) /
        parseFloat(this.b40)
      ).toFixed(5);
    },
    b49() {
      return ((1 * Math.pow(parseFloat(this.b33), 2)) / (2 * 9.8)).toFixed(5);
    },
    b50() {
      return ((1 * Math.pow(parseFloat(this.b34), 2)) / (2 * 9.8)).toFixed(5);
    },
    b51() {
      return ((1 * Math.pow(parseFloat(this.b35), 2)) / (2 * 9.8)).toFixed(5);
    },
    b52() {
      return ((1 * Math.pow(parseFloat(this.b36), 2)) / (2 * 9.8)).toFixed(5);
    },
    b53() {
      return ((1 * Math.pow(parseFloat(this.b37), 2)) / (2 * 9.8)).toFixed(5);
    },
    b54() {
      return ((3 * Math.pow(parseFloat(this.b38), 2)) / (2 * 9.8)).toFixed(5);
    },
    b55() {
      return ((3 * Math.pow(parseFloat(this.b39), 2)) / (2 * 9.8)).toFixed(5);
    },
    b56() {
      return (
        parseFloat(this.b49) *
        parseFloat(this.b45) *
        parseFloat(this.b17_1)
      ).toFixed(5);
    },
    b57() {
      return (
        parseFloat(this.b50) *
        parseFloat(this.b46) *
        parseFloat(this.b17_1)
      ).toFixed(5);
    },
    b58() {
      return (
        parseFloat(this.b51) *
        parseFloat(this.b47) *
        parseFloat(this.b17_1)
      ).toFixed(5);
    },
    b59() {
      return (parseFloat(this.b52) * parseFloat(this.b17_1)).toFixed(5);
    },
    b60() {
      return (parseFloat(this.b53) * parseFloat(this.b17_1)).toFixed(5);
    },
    b61() {
      return (parseFloat(this.b54) * parseFloat(this.b17_1)).toFixed(5);
    },
    b62() {
      return (parseFloat(this.b55) * parseFloat(this.b17_1)).toFixed(5);
    },
    b63() {
      return (parseFloat(this.b56) + parseFloat(this.b59)).toFixed(5);
    },
    b64() {
      return (parseFloat(this.b57) + parseFloat(this.b60)).toFixed(5);
    },
    b65() {
      return (parseFloat(this.b58) + parseFloat(this.b61)).toFixed(5);
    },
    b66() {
      return this.b62;
    },
    b67() {
      return (
        parseFloat(this.b63) +
        parseFloat(this.b64) +
        parseFloat(this.b65) +
        parseFloat(this.b66)
      ).toFixed(5);
    },
    b68() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b69() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b70() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b71() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b72() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b63)) /
          (parseFloat(this.b68) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b73() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b64)) /
          (parseFloat(this.b69) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b74() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b65)) /
          (parseFloat(this.b70) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b75() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b66)) /
          (parseFloat(this.b71) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b76() {
      return Math.pow(
        ((1000 * 9.8 * parseFloat(this.b67)) /
          (parseFloat(this.b68) +
            parseFloat(this.b69) +
            parseFloat(this.b70) +
            parseFloat(this.b71))) *
          60 *
          (1.029 * Math.pow(10, -3)),
        0.5
      ).toFixed(4);
    },
    b77() {
      return (
        parseFloat(this.b76) *
        (parseFloat(this.b68) +
          parseFloat(this.b69) +
          parseFloat(this.b70) +
          parseFloat(this.b71)) *
        60
      ).toFixed(1);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "1",
          名称: "网格絮凝池",
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
          设备工艺名称: "小孔眼网格板",
          设备类型: "网格板",
          规格及型号: this.getkey3(),
          单位: "层",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "SS304边框，PE网格",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "小孔眼网格板",
          设备类型: "网格板",
          规格及型号: this.getkey5(),
          单位: "层",
          数量: this.getkey6(),
          运行时间: "",
          主要材质: "SS304边框，PE网格",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "絮凝池排泥阀",
          设备类型: "电动闸阀",
          规格及型号: "DN150，PN10，开关型",
          单位: "个",
          数量: this.getkey7(),
          运行时间: "",
          主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
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
    console.log("2002-activated被调用了");
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
        名称: "网格絮凝池",
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
        设备工艺名称: "小孔眼网格板",
        设备类型: "网格板",
        规格及型号: this.getkey3(),
        单位: "层",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "SS304边框，PE网格",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "小孔眼网格板",
        设备类型: "网格板",
        规格及型号: this.getkey5(),
        单位: "层",
        数量: this.getkey6(),
        运行时间: "",
        主要材质: "SS304边框，PE网格",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "絮凝池排泥阀",
        设备类型: "电动闸阀",
        规格及型号: "DN150，PN10，开关型",
        单位: "个",
        数量: this.getkey7(),
        运行时间: "",
        主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
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
