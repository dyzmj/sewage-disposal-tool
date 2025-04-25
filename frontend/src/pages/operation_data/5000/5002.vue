<template>
  <div></div>
  </template>

<script>
import { mapState } from "vuex";
import {
  exportExcel2,
  exportWord,
  initWordStorage,
  initExcelStorage,
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_5002"),
  data() {
    return {
      modelVisible: false,
      b6: "10",
      b7: "",
      b8: "2660",
      b9: "53",
      b10: "7.4",
      b11: "",
      b12: "",
      b13: "20",
      b14: "200",
      b15: "4",
      b16: "50",
      b17: "",
      b18: "参数",
      b19: "",
      b20: "",
      b24: "200",
      b25: "",
      b26: "",
      b32: "90",
      b33: "0.02",
      b34: "ZW1500-600",
      b35: "PVDF",
      b36: "外压式中空纤维",
      b37: "51.1",
      b38: "<= 1.0",
      b39: "<= 0.2",
      b40: "<= 3",
      b51: "",
      b52: "29",
      b54: "0.3",
      b56: "",
      b57: "1",
      b58: "60",
      b59: "100",
      b61: "0.25",
      b62: "2",
      b63: "8.5",
      b67: "",
      b68: "2",
      b70: "0.35",
      b71: "2",
      b72: "",
      b73: "1",
      b74: "2",
      b75: "5~10",
      b76: "500",
      b77: "500",
      b78: "500",
      b85: "",
      b86: "1",
      b87: "5",
      b88: "1000",
      b89: "2000",
      b90: "1000",
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
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "备注" },
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
              title: "运行时间",
              dataIndex: "运行时间",
              key: "10",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "运行时间" },
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
        exportExcel2(allData2, allData3, "UF-GE工程量", this);
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
        key1: this.b6,
        key2: this.b8,
        key3: this.b9,
        key4: this.b10,
        key5: this.b13,
        key6: this.b14,
        key7: this.b15,
        key8: this.b16,
        key9: this.b21,
        key10: this.b22,
        key11: this.b23,
        key12: this.b24,
        key13: this.b27,
        key14: this.b28,
        key15: this.b29,
        key16: this.b30,
        key17: this.b31,
        key18: this.b32,
        key19: this.b33,
        key20: this.b34,
        key21: this.b35,
        key22: this.b37,
        key23: this.b38,
        key24: this.b39,
        key25: this.b40,
        key26: this.b42,
        key27: this.b43,
        key28: this.b44,
        key29: this.b45,
        key30: this.b46,
        key31: this.b47,
        key32: this.b48,
        key33: this.b49,
        key34: this.b50,
        key35: this.b52,
        key36: this.b53,
        key37: this.b54,
        key38: this.b55,
        key39: this.b57,
        key40: this.b58,
        key41: this.b59,
        key42: this.b60,
        key43: this.b61,
        key44: this.b62,
        key45: this.b63,
        key46: this.b64,
        key47: this.b65,
        key48: this.b66,
        key49: this.b68,
        key50: this.b69,
        key51: this.b70,
        key52: this.b71,
        key53: this.b73,
      };
      exportWord("UF-GE计算书", "5002.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b6,
        key2: this.b8,
        key3: this.b9,
        key4: this.b10,
        key5: this.b13,
        key6: this.b14,
        key7: this.b15,
        key8: this.b16,
        key9: this.b21,
        key10: this.b22,
        key11: this.b23,
        key12: this.b24,
        key13: this.b27,
        key14: this.b28,
        key15: this.b29,
        key16: this.b30,
        key17: this.b31,
        key18: this.b32,
        key19: this.b33,
        key20: this.b34,
        key21: this.b35,
        key22: this.b37,
        key23: this.b38,
        key24: this.b39,
        key25: this.b40,
        key26: this.b42,
        key27: this.b43,
        key28: this.b44,
        key29: this.b45,
        key30: this.b46,
        key31: this.b47,
        key32: this.b48,
        key33: this.b49,
        key34: this.b50,
        key35: this.b52,
        key36: this.b53,
        key37: this.b54,
        key38: this.b55,
        key39: this.b57,
        key40: this.b58,
        key41: this.b59,
        key42: this.b60,
        key43: this.b61,
        key44: this.b62,
        key45: this.b63,
        key46: this.b64,
        key47: this.b65,
        key48: this.b66,
        key49: this.b68,
        key50: this.b69,
        key51: this.b70,
        key52: this.b71,
        key53: this.b73,
      };
      initWordStorage("5002.docx", data);
      this.handleExcelCache("5002.xlsx", "UF-GE工程量");
    },
    handleExcelCache(path, name) {
      try {
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
        initExcelStorage(null, allData2, allData3, path, name);
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
    get_a_a_1_1() {
      return "流量=" + this.b53 + "m3/h，扬程=" + this.b54 + "MPa，功率=37kW";
    },
    get_a_a_1_2() {
      return this.b55;
    },
    get_a_a_1_3() {
      return parseFloat(this.b55) - 1;
    },
    get_a_a_2_1() {
      return "DN500，PN10，L=1500mm";
    },
    get_a_a_2_2() {
      return 1;
    },
    get_a_a_3_1() {
      return "流量=" + this.b53 + "m3/h，扬程=" + this.b24 + "MPa，N=0.37kW";
    },
    get_a_a_3_2() {
      return this.b55;
    },
    get_a_a_4_1() {
      return "单套进水量=" + this.b53 + "m3/h";
    },
    get_a_a_4_2() {
      return this.b55;
    },
    get_a_a_4_3() {
      return parseFloat(this.b55) - 1;
    },
    get_a_a_5_1() {
      return (
        "净通量：" +
        this.b16 +
        "L/m2.h，膜面积：" +
        this.b37 +
        "m2/支，单套" +
        this.b44 +
        "支膜"
      );
    },
    get_a_a_5_2() {
      return this.b47;
    },
    get_a_a_6_1() {
      return "尺寸：L×W×H=5.2×2.6×3.1m，含取样和压力表面板等";
    },
    get_a_a_6_2() {
      return this.b55;
    },
    get_a_a_7_1() {
      return "流量=" + this.b60 + "m3/h，扬程=" + this.b61 + "MPa，功率=45kW";
    },
    get_a_a_7_2() {
      return this.b62;
    },
    get_a_a_7_3() {
      return parseFloat(this.b62) - 1;
    },
    get_a_a_8_1() {
      return "V≥" + this.ROUNDUP(parseFloat(this.b27), 0) + "m3";
    },
    get_a_a_8_2() {
      return 1;
    },
    get_a_a_9_1() {
      return "V=" + this.b66 + "m3/h，设计压力：0.7MPa";
    },
    get_a_a_9_2() {
      return 1;
    },
    get_a_a_10_1() {
      return "V=5m3，设计压力：0.7MPa";
    },
    get_a_a_10_2() {
      return 1;
    },
    get_a_b_1_1() {
      return "V=8m³";
    },
    get_a_b_1_2() {
      return 1;
    },
    get_a_b_2_1() {
      return "流量=" + this.b69 + "m3/h，扬程=" + this.b70 + "MPa，功率=15kW";
    },
    get_a_b_2_2() {
      return this.b71;
    },
    get_a_b_2_3() {
      parseFloat(this.b71) - 1;
    },
    get_a_b_3_1() {
      return "流量=" + this.b69 + "m3/h";
    },
    get_a_b_3_2() {
      return 1;
    },
    get_a_b_4_1() {
      return "40英寸，过滤精度：50μm";
    },
    get_a_b_4_2() {
      return 4;
    },
    get_a_b_5_1() {
      return "N=30kW，侧装式";
    },
    get_a_b_5_2() {
      return 1;
    },
    get_a_c_1_1() {
      return "V=25m3";
    },
    get_a_c_1_2() {
      return 1;
    },
    get_a_c_2_1() {
      return "Q=25m3/h，H=20m，N=4kW";
    },
    get_a_c_2_2() {
      return 1;
    },
    get_a_c_3_1() {
      return "V=1m³";
    },
    get_a_c_3_2() {
      return 1;
    },
    get_a_c_4_1() {
      return "流量=" + this.b82 + "L/h，扬程=5bar，N=0.37kW";
    },
    get_a_c_4_2() {
      return 2;
    },
    get_a_c_4_3() {
      return 1;
    },
    get_a_d_1_1() {
      return "V=25m3";
    },
    get_a_d_1_2() {
      return 1;
    },
    get_a_d_2_1() {
      return "Q=25m3/h，H=20m，N=4kW";
    },
    get_a_d_2_2() {
      return 1;
    },
    get_a_d_3_1() {
      return "V=1m³";
    },
    get_a_d_3_2() {
      return 1;
    },
    get_a_d_4_1() {
      return "流量=" + this.b84 + "L/h，扬程=5bar，N=0.25kW";
    },
    get_a_d_4_2() {
      return 2;
    },
    get_a_d_4_3() {
      return 1;
    },
    get_a_e_1_1() {
      return "V=25m3";
    },
    get_a_e_1_2() {
      return 1;
    },
    get_a_e_2_1() {
      return "Q=25m3/h，H=20m，N=4kW";
    },
    get_a_e_2_2() {
      return 1;
    },
    get_a_e_3_1() {
      return "V=1m³";
    },
    get_a_e_3_2() {
      return 1;
    },
    get_a_e_4_1() {
      return "流量=" + this.b83 + "L/h，扬程=5bar，N=0.25kW";
    },
    get_a_e_4_2() {
      return 2;
    },
    get_a_e_4_3() {
      return 1;
    },
    get_b_a_1() {
      return this.b55;
    },
    get_b_a_2() {
      return this.b55;
    },
    get_b_a_3() {
      return this.b55;
    },
    get_b_a_4() {
      return this.b55;
    },
    get_b_a_5() {
      return this.b55;
    },
    get_b_a_6() {
      return this.b55;
    },
    get_b_a_7() {
      return this.b55;
    },
    get_b_a_8() {
      return 1;
    },
    get_b_a_9() {
      return this.b55;
    },
    get_b_a_10() {
      return this.b62;
    },
    get_b_b_1() {
      return 1;
    },
    get_b_b_2() {
      return 1;
    },
    get_b_b_3() {
      return this.b62;
    },
    get_b_b_4() {
      return 1;
    },
    get_b_b_5() {
      return 1;
    },
    get_b_b_6() {
      return 1;
    },
    get_b_c_1() {
      return 1;
    },
    get_b_c_2() {
      return 1;
    },
    get_b_c_3() {
      return 1;
    },
    get_b_c_5() {
      return this.b62;
    },
    get_b_d_1() {
      return 1;
    },
    get_b_d_2() {
      return 1;
    },
    get_b_d_3() {
      return 1;
    },
    get_b_d_4() {
      return this.b62;
    },
    get_b_e_1() {
      return 1;
    },
    get_b_e_2() {
      return 1;
    },
    get_b_e_3() {
      return 1;
    },
    get_b_e_4() {
      return this.b62;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b21() {
      return (
        ((parseFloat(this.b30) * parseFloat(this.b22)) / parseFloat(this.b32)) *
        100
      ).toFixed(1);
    },
    b22() {
      return this.b15;
    },
    b23() {
      return (parseFloat(this.b21) / parseFloat(this.b22)).toFixed(1);
    },
    b27() {
      return this.b21;
    },
    b28() {
      return (parseFloat(this.b14) * parseFloat(this.b15)).toFixed(1);
    },
    b29() {
      return this.b22;
    },
    b30() {
      return this.b14;
    },
    b31() {
      return ((parseFloat(this.b42) * parseFloat(this.b37)) / 1000).toFixed(1);
    },
    b42() {
      return this.b16;
    },
    b43() {
      return ((parseFloat(this.b42) / parseFloat(this.b32)) * 100).toFixed(1);
    },
    b44() {
      return this.ROUNDUP(
        (parseFloat(this.b30) / parseFloat(this.b42) / parseFloat(this.b37)) *
          1000,
        0
      );
    },
    b45() {
      return (parseFloat(this.b44) * parseFloat(this.b37)).toFixed(1);
    },
    b46() {
      return this.b22;
    },
    b47() {
      return (parseFloat(this.b44) * parseFloat(this.b46)).toFixed(0);
    },
    b48() {
      return (parseFloat(this.b45) * parseFloat(this.b46)).toFixed(1);
    },
    b49() {
      return (
        (parseFloat(this.b30) / parseFloat(this.b44) / parseFloat(this.b37)) *
        1000
      ).toFixed(1);
    },
    b50() {
      return ((parseFloat(this.b49) / parseFloat(this.b32)) * 100).toFixed(1);
    },
    b53() {
      return this.ROUND((parseFloat(this.b30) / parseFloat(this.b32)) * 100, 2);
    },
    b55() {
      return (parseFloat(this.b22) + 1).toFixed(0);
    },
    b60() {
      return (
        (parseFloat(this.b59) * parseFloat(this.b44) * parseFloat(this.b37)) /
        1000
      ).toFixed(2);
    },
    b64() {
      return (parseFloat(this.b63) * parseFloat(this.b44)).toFixed(1);
    },
    b65() {
      return ((parseFloat(this.b64) * 0.1) / 0.7).toFixed(0);
    },
    b66() {
      return this.ROUND((parseFloat(this.b65) / 60) * parseFloat(this.b22), 2);
    },
    b69() {
      return (parseFloat(this.b68) * parseFloat(this.b44)).toFixed(0);
    },
    b79() {
      return this.ROUND(
        (parseFloat(this.b69) * parseFloat(this.b76)) / 0.1 / 1.155 / 1000,
        2
      );
    },
    b80() {
      return this.ROUND(
        (parseFloat(this.b69) * parseFloat(this.b77)) / 0.3 / 1.55 / 1000,
        2
      );
    },
    b81() {
      return this.ROUND(
        (parseFloat(this.b69) * parseFloat(this.b78)) / 0.3 / 1.37 / 1000,
        2
      );
    },
    b82() {
      return this.ROUND(parseFloat(this.b79) / 0.7, 2);
    },
    b83() {
      return this.ROUND(parseFloat(this.b80) / 0.7, 2);
    },
    b84() {
      return this.ROUND(parseFloat(this.b81) / 0.7, 2);
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "超滤提升泵",
          设备类型: "卧式离心泵",
          规格及型号: this.get_a_a_1_1(),
          单位: "台",
          数量: this.get_a_a_1_2(),
          备注: "4用1备，变频",
          主要材质: "泵壳：铸铁，叶轮：SS304",
          运行时间: "24h",
          运行数量: this.get_a_a_1_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "超滤进水管道混合器",
          设备类型: "管道混合器",
          规格及型号: this.get_a_a_2_1(),
          单位: "台",
          数量: this.get_a_a_2_2(),
          备注: "管道混合器",
          主要材质: "碳钢衬胶",
          运行时间: "",
          运行数量: this.get_a_a_2_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "超滤自清洗过滤器",
          设备类型: "网式自清洗过滤器",
          规格及型号: this.get_a_a_3_1(),
          单位: "台",
          数量: this.get_a_a_3_2(),
          备注: "带自动清洗系统，带自动控制箱；清洁方式：吸吮式",
          主要材质: "壳体碳钢凃环氧树脂，滤网SS316",
          运行时间: "24h",
          运行数量: this.get_a_a_3_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "超滤装置",
          设备类型: "",
          规格及型号: this.get_a_a_4_1(),
          单位: "套",
          数量: this.get_a_a_4_2(),
          备注: "4用1备，含电磁阀箱、设备上气源管材及设备上的电缆及管材",
          主要材质: "",
          运行时间: "",
          运行数量: this.get_a_a_4_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "超滤膜",
          设备类型: "外压中空纤维超滤膜元件",
          规格及型号: this.get_a_a_5_1(),
          单位: "支",
          数量: this.get_a_a_5_2(),
          备注: "",
          主要材质: "膜材质：PVDF",
          运行时间: "",
          运行数量: this.get_a_a_5_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "6",
          设备位号: "",
          设备工艺名称: "超滤滑架",
          设备类型: "超滤滑架",
          规格及型号: this.get_a_a_6_1(),
          单位: "套",
          数量: this.get_a_a_6_2(),
          备注: "",
          主要材质: "碳钢防腐",
          运行时间: "",
          运行数量: this.get_a_a_6_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "7",
          设备位号: "",
          设备工艺名称: "超滤反洗泵",
          设备类型: "卧式离心泵",
          规格及型号: this.get_a_a_7_1(),
          单位: "台",
          数量: this.get_a_a_7_2(),
          备注: "1用1备，变频",
          主要材质: "泵壳：铸铁，叶轮：SS304",
          运行时间: "3h",
          运行数量: this.get_a_a_7_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "8",
          设备位号: "",
          设备工艺名称: "超滤产水箱",
          设备类型: "立式圆筒水箱",
          规格及型号: this.get_a_a_8_1(),
          单位: "座",
          数量: this.get_a_a_8_2(),
          备注: "配溢流管、排污管、通气口、旋转爬梯，配套就地液位计",
          主要材质: "",
          运行时间: "",
          运行数量: this.get_a_a_8_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "9",
          设备位号: "",
          设备工艺名称: "工艺压缩空气储罐",
          设备类型: "立式空气储罐",
          规格及型号: this.get_a_a_9_1(),
          单位: "台",
          数量: this.get_a_a_9_2(),
          备注: "配压力表、安全阀、排污阀各1套",
          主要材质: "Q345R",
          运行时间: "",
          运行数量: this.get_a_a_9_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "10",
          设备位号: "",
          设备工艺名称: "仪表压缩空气储罐",
          设备类型: "立式空气储罐",
          规格及型号: this.get_a_a_10_1(),
          单位: "台",
          数量: this.get_a_a_10_2(),
          备注: "配压力表、安全阀、排污阀各1套",
          主要材质: "Q345R",
          运行时间: "",
          运行数量: this.get_a_a_10_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "超滤化学清洗水箱",
          设备类型: "立式圆筒水箱",
          规格及型号: this.get_a_b_1_1(),
          单位: "台",
          数量: this.get_a_b_1_2(),
          备注: "",
          主要材质: "碳钢衬胶",
          运行时间: "",
          运行数量: this.get_a_b_1_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "超滤化学清洗水泵",
          设备类型: "卧式离心泵",
          规格及型号: this.get_a_b_2_1(),
          单位: "台",
          数量: this.get_a_b_2_2(),
          备注: "1用1备",
          主要材质: "泵壳及叶轮：SS316L",
          运行时间: "1h",
          运行数量: this.get_a_b_2_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "超滤化学清洗过滤器",
          设备类型: "保安过滤器",
          规格及型号: this.get_a_b_3_1(),
          单位: "台",
          数量: this.get_a_b_3_2(),
          备注: "",
          主要材质: "碳钢衬胶",
          运行时间: "",
          运行数量: this.get_a_b_3_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "滤芯",
          设备类型: "折叠式大通量滤芯",
          规格及型号: this.get_a_b_4_1(),
          单位: "支",
          数量: this.get_a_b_4_2(),
          备注: "",
          主要材质: "聚丙烯",
          运行时间: "",
          运行数量: this.get_a_b_4_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "电加热器",
          设备类型: "电加热器",
          规格及型号: this.get_a_b_5_1(),
          单位: "台",
          数量: this.get_a_b_5_2(),
          备注: "",
          主要材质: "SS316L",
          运行时间: "",
          运行数量: this.get_a_b_5_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "杀菌剂储罐",
          设备类型: "卧式储罐",
          规格及型号: this.get_a_c_1_1(),
          单位: "台",
          数量: this.get_a_c_1_2(),
          备注: "",
          主要材质: "碳钢衬胶",
          运行时间: "",
          运行数量: this.get_a_c_1_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "杀菌剂卸料泵",
          设备类型: "化工泵",
          规格及型号: this.get_a_c_2_1(),
          单位: "台",
          数量: this.get_a_c_2_2(),
          备注: "",
          主要材质: "氟塑料",
          运行时间: "",
          运行数量: this.get_a_c_2_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "杀菌剂计量箱",
          设备类型: "立式计量箱",
          规格及型号: this.get_a_c_3_1(),
          单位: "台",
          数量: this.get_a_c_3_2(),
          备注: "",
          主要材质: "",
          运行时间: "",
          运行数量: this.get_a_c_3_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "超滤化学清洗杀菌剂计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_a_c_4_1(),
          单位: "台",
          数量: this.get_a_c_4_2(),
          备注:
            "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
          主要材质: "泵头PVC，隔膜PTFE",
          运行时间: "0.1h",
          运行数量: this.get_a_c_4_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "碱储罐",
          设备类型: "卧式储罐",
          规格及型号: this.get_a_d_1_1(),
          单位: "台",
          数量: this.get_a_d_1_2(),
          备注: "伴热功率4KW",
          主要材质: "碳钢衬胶",
          运行时间: "",
          运行数量: this.get_a_d_1_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "卸盐酸泵",
          设备类型: "化工泵",
          规格及型号: this.get_a_d_2_1(),
          单位: "台",
          数量: this.get_a_d_2_2(),
          备注: "",
          主要材质: "氟塑料",
          运行时间: "",
          运行数量: this.get_a_d_2_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "碱计量箱",
          设备类型: "立式圆筒水箱",
          规格及型号: this.get_a_d_3_1(),
          单位: "台",
          数量: this.get_a_d_3_2(),
          备注: "",
          主要材质: "",
          运行时间: "",
          运行数量: this.get_a_d_3_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "化学清洗碱计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_a_d_4_1(),
          单位: "台",
          数量: this.get_a_d_4_2(),
          备注:
            "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
          主要材质: "泵头PVC，隔膜PTFE",
          运行时间: "",
          运行数量: this.get_a_d_4_3(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "盐酸储罐",
          设备类型: "卧式储罐",
          规格及型号: this.get_a_e_1_1(),
          单位: "台",
          数量: this.get_a_e_1_2(),
          备注: "",
          主要材质: "碳钢衬胶",
          运行时间: "",
          运行数量: this.get_a_e_1_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "卸盐酸泵",
          设备类型: "化工泵",
          规格及型号: this.get_a_e_2_1(),
          单位: "台",
          数量: this.get_a_e_2_2(),
          备注: "",
          主要材质: "氟塑料",
          运行时间: "",
          运行数量: this.get_a_e_2_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "盐酸计量箱",
          设备类型: "立式圆筒水箱",
          规格及型号: this.get_a_e_3_1(),
          单位: "台",
          数量: this.get_a_e_3_2(),
          备注: "",
          主要材质: "",
          运行时间: "",
          运行数量: this.get_a_e_3_2(),
          单台功率: "",
          用电量: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "化学清洗盐酸计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.get_a_e_4_1(),
          单位: "台",
          数量: this.get_a_e_4_2(),
          备注:
            "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
          主要材质: "泵头PVC，隔膜PTFE",
          运行时间: "",
          运行数量: this.get_a_e_4_3(),
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
          安装位置: "超滤进水泵出口管",
          仪表名称: "就地压力表",
          规格及型号:
            "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
          单位: "台",
          数量: this.get_b_a_1(),
          备注: "",
        },
        {
          序号: "2",
          仪表位号: "",
          安装位置: "超滤进水支管",
          仪表名称: "压力变送器",
          规格及型号:
            "一体式，外壳材质：铸铝，测量范围：0～0.3MPa，输出信号：4～20mA+Hart协议，测量元件：304，配安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_a_2(),
          备注: "",
        },
        {
          序号: "3",
          仪表位号: "",
          安装位置: "超滤进水支管",
          仪表名称: "就地压力表",
          规格及型号:
            "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
          单位: "台",
          数量: this.get_b_a_3(),
          备注: "",
        },
        {
          序号: "4",
          仪表位号: "",
          安装位置: "超滤产水支管",
          仪表名称: "压力变送器",
          规格及型号:
            "一体式，外壳材质：铸铝，测量范围：0～0.3MPa，输出信号：4～20mA+Hart协议，测量元件：SS304，配安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_a_4(),
          备注: "",
        },
        {
          序号: "5",
          仪表位号: "",
          安装位置: "超滤产水支管",
          仪表名称: "就地压力表",
          规格及型号:
            "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
          单位: "台",
          数量: this.get_b_a_5(),
          备注: "",
        },
        {
          序号: "6",
          仪表位号: "",
          安装位置: "超滤产水支管",
          仪表名称: "电磁流量计",
          规格及型号:
            "分体式，电源：AC220V，测量范围：0~173m³/h，DN200，输出信号：4~20mA+Hart协议，本体：碳钢衬塑，电极材质：304，衬里材质：氯丁橡胶，配接地环及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_a_6(),
          备注: "",
        },
        {
          序号: "7",
          仪表位号: "",
          安装位置: "超滤产水支管",
          仪表名称: "在线浊度分析仪",
          规格及型号:
            "电源：AC 220V，测量范围：0~10NTU，输出信号：4~20mA，配套安装附件，电缆：10米，就地显示。",
          单位: "台",
          数量: this.get_b_a_7(),
          备注: "",
        },
        {
          序号: "8",
          仪表位号: "",
          安装位置: "超滤产水箱",
          仪表名称: "超声波液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～10米，输出信号：4～20mA+Hart协议，配安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_a_8(),
          备注: "",
        },
        {
          序号: "9",
          仪表位号: "",
          安装位置: "超滤浓水错流排放管",
          仪表名称: "转子流量计",
          规格及型号:
            "测量范围：0~5m³/h，DN50，本体：有机玻璃，带导杆；承插连接，就地显示。",
          单位: "台",
          数量: this.get_b_a_9(),
          备注: "",
        },
        {
          序号: "10",
          仪表位号: "",
          安装位置: "超滤反洗泵出口",
          仪表名称: "就地压力表",
          规格及型号:
            "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：304，Φ100mm，配表阀。",
          单位: "台",
          数量: this.get_b_a_10(),
          备注: "",
        },
        {
          序号: "1",
          仪表位号: "",
          安装位置: "超滤化学清洗水箱侧壁",
          仪表名称: "磁翻板液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～2.5米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：UPVC，浮子材质：UPVC，配通气阀、排污阀及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_b_1(),
          备注: "",
        },
        {
          序号: "2",
          仪表位号: "",
          安装位置: "超滤化学清洗水箱侧壁",
          仪表名称: "温度变送器",
          规格及型号: "测量范围：0～100℃ ，输出信号：4~20mA+Hart协议",
          单位: "台",
          数量: this.get_b_b_2(),
          备注: "",
        },
        {
          序号: "3",
          仪表位号: "",
          安装位置: "超滤化学清洗水泵出水",
          仪表名称: "就地压力表",
          规格及型号:
            "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
          单位: "台",
          数量: this.get_b_b_3(),
          备注: "",
        },
        {
          序号: "4",
          仪表位号: "",
          安装位置: "超滤化学清洗保安过滤器进水",
          仪表名称: "就地压力表",
          规格及型号:
            "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
          单位: "台",
          数量: this.get_b_b_4(),
          备注: "",
        },
        {
          序号: "5",
          仪表位号: "",
          安装位置: "超滤化学清洗保安过滤器出水",
          仪表名称: "就地压力表",
          规格及型号:
            "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
          单位: "台",
          数量: this.get_b_b_5(),
          备注: "",
        },
        {
          序号: "6",
          仪表位号: "",
          安装位置: "超滤化学清洗保安过滤器出水",
          仪表名称: "浮子流量计",
          规格及型号: "测量范围：0~158m3/h，DN150",
          单位: "台",
          数量: this.get_b_b_6(),
          备注: "",
        },
        {
          序号: "1",
          仪表位号: "",
          安装位置: "次氯酸钠储罐",
          仪表名称: "磁翻板液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_c_1(),
          备注: "",
        },
        {
          序号: "2",
          仪表位号: "",
          安装位置: "次氯酸钠卸料泵出口",
          仪表名称: "就地压力表",
          规格及型号:
            "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
          单位: "台",
          数量: this.get_b_c_2(),
          备注: "",
        },
        {
          序号: "3",
          仪表位号: "",
          安装位置: "次氯酸钠计量箱",
          仪表名称: "磁翻板液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_c_3(),
          备注: "",
        },
        {
          序号: "5",
          仪表位号: "",
          安装位置: "化学清洗次氯酸钠计量泵出口",
          仪表名称: "就地压力表",
          规格及型号:
            "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
          单位: "台",
          数量: this.get_b_c_5(),
          备注: "",
        },
        {
          序号: "1",
          仪表位号: "",
          安装位置: "盐酸储罐",
          仪表名称: "磁翻板液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_d_1(),
          备注: "",
        },
        {
          序号: "2",
          仪表位号: "",
          安装位置: "盐酸卸料泵出口",
          仪表名称: "就地压力表",
          规格及型号:
            "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
          单位: "台",
          数量: this.get_b_d_2(),
          备注: "",
        },
        {
          序号: "3",
          仪表位号: "",
          安装位置: "盐酸计量箱",
          仪表名称: "磁翻板液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_d_3(),
          备注: "",
        },
        {
          序号: "4",
          仪表位号: "",
          安装位置: "化学清洗盐酸计量泵出口",
          仪表名称: "就地压力表",
          规格及型号:
            "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
          单位: "台",
          数量: this.get_b_d_4(),
          备注: "",
        },
        {
          序号: "1",
          仪表位号: "",
          安装位置: "碱储罐",
          仪表名称: "磁翻板液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_e_1(),
          备注: "",
        },
        {
          序号: "2",
          仪表位号: "",
          安装位置: "碱卸料泵出口",
          仪表名称: "就地压力表",
          规格及型号:
            "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
          单位: "台",
          数量: this.get_b_e_2(),
          备注: "",
        },
        {
          序号: "3",
          仪表位号: "",
          安装位置: "碱计量箱",
          仪表名称: "磁翻板液位计",
          规格及型号:
            "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
          单位: "台",
          数量: this.get_b_e_3(),
          备注: "",
        },
        {
          序号: "4",
          仪表位号: "",
          安装位置: "化学清洗碱计量泵出口",
          仪表名称: "就地压力表",
          规格及型号:
            "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
          单位: "台",
          数量: this.get_b_e_4(),
          备注: "",
        },
      ];
    },
  },
  activated() {
    console.log("5002-activated被调用了");
    this.refreshInitData();
  },
  created() {
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "超滤提升泵",
        设备类型: "卧式离心泵",
        规格及型号: this.get_a_a_1_1(),
        单位: "台",
        数量: this.get_a_a_1_2(),
        备注: "4用1备，变频",
        主要材质: "泵壳：铸铁，叶轮：SS304",
        运行时间: "24h",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "超滤进水管道混合器",
        设备类型: "管道混合器",
        规格及型号: this.get_a_a_2_1(),
        单位: "台",
        数量: this.get_a_a_2_2(),
        备注: "管道混合器",
        主要材质: "碳钢衬胶",
        运行时间: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "超滤自清洗过滤器",
        设备类型: "网式自清洗过滤器",
        规格及型号: this.get_a_a_3_1(),
        单位: "台",
        数量: this.get_a_a_3_2(),
        备注: "带自动清洗系统，带自动控制箱；清洁方式：吸吮式",
        主要材质: "壳体碳钢凃环氧树脂，滤网SS316",
        运行时间: "24h",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "超滤装置",
        设备类型: "",
        规格及型号: this.get_a_a_4_1(),
        单位: "套",
        数量: this.get_a_a_4_2(),
        备注: "4用1备，含电磁阀箱、设备上气源管材及设备上的电缆及管材",
        主要材质: "",
        运行时间: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "超滤膜",
        设备类型: "外压中空纤维超滤膜元件",
        规格及型号: this.get_a_a_5_1(),
        单位: "支",
        数量: this.get_a_a_5_2(),
        备注: "",
        主要材质: "膜材质：PVDF",
        运行时间: "",
      },
      {
        序号: "6",
        设备位号: "",
        设备工艺名称: "超滤滑架",
        设备类型: "超滤滑架",
        规格及型号: this.get_a_a_6_1(),
        单位: "套",
        数量: this.get_a_a_6_2(),
        备注: "",
        主要材质: "碳钢防腐",
        运行时间: "",
      },
      {
        序号: "7",
        设备位号: "",
        设备工艺名称: "超滤反洗泵",
        设备类型: "卧式离心泵",
        规格及型号: this.get_a_a_7_1(),
        单位: "台",
        数量: this.get_a_a_7_2(),
        备注: "1用1备，变频",
        主要材质: "泵壳：铸铁，叶轮：SS304",
        运行时间: "3h",
      },
      {
        序号: "8",
        设备位号: "",
        设备工艺名称: "超滤产水箱",
        设备类型: "立式圆筒水箱",
        规格及型号: this.get_a_a_8_1(),
        单位: "座",
        数量: this.get_a_a_8_2(),
        备注: "配溢流管、排污管、通气口、旋转爬梯，配套就地液位计",
        主要材质: "",
        运行时间: "",
      },
      {
        序号: "9",
        设备位号: "",
        设备工艺名称: "工艺压缩空气储罐",
        设备类型: "立式空气储罐",
        规格及型号: this.get_a_a_9_1(),
        单位: "台",
        数量: this.get_a_a_9_2(),
        备注: "配压力表、安全阀、排污阀各1套",
        主要材质: "Q345R",
        运行时间: "",
      },
      {
        序号: "10",
        设备位号: "",
        设备工艺名称: "仪表压缩空气储罐",
        设备类型: "立式空气储罐",
        规格及型号: this.get_a_a_10_1(),
        单位: "台",
        数量: this.get_a_a_10_2(),
        备注: "配压力表、安全阀、排污阀各1套",
        主要材质: "Q345R",
        运行时间: "",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "超滤化学清洗水箱",
        设备类型: "立式圆筒水箱",
        规格及型号: this.get_a_b_1_1(),
        单位: "台",
        数量: this.get_a_b_1_2(),
        备注: "",
        主要材质: "碳钢衬胶",
        运行时间: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "超滤化学清洗水泵",
        设备类型: "卧式离心泵",
        规格及型号: this.get_a_b_2_1(),
        单位: "台",
        数量: this.get_a_b_2_2(),
        备注: "1用1备",
        主要材质: "泵壳及叶轮：SS316L",
        运行时间: "1h",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "超滤化学清洗过滤器",
        设备类型: "保安过滤器",
        规格及型号: this.get_a_b_3_1(),
        单位: "台",
        数量: this.get_a_b_3_2(),
        备注: "",
        主要材质: "碳钢衬胶",
        运行时间: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "滤芯",
        设备类型: "折叠式大通量滤芯",
        规格及型号: this.get_a_b_4_1(),
        单位: "支",
        数量: this.get_a_b_4_2(),
        备注: "",
        主要材质: "聚丙烯",
        运行时间: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "电加热器",
        设备类型: "电加热器",
        规格及型号: this.get_a_b_5_1(),
        单位: "台",
        数量: this.get_a_b_5_2(),
        备注: "",
        主要材质: "SS316L",
        运行时间: "",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "杀菌剂储罐",
        设备类型: "卧式储罐",
        规格及型号: this.get_a_c_1_1(),
        单位: "台",
        数量: this.get_a_c_1_2(),
        备注: "",
        主要材质: "碳钢衬胶",
        运行时间: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "杀菌剂卸料泵",
        设备类型: "化工泵",
        规格及型号: this.get_a_c_2_1(),
        单位: "台",
        数量: this.get_a_c_2_2(),
        备注: "",
        主要材质: "氟塑料",
        运行时间: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "杀菌剂计量箱",
        设备类型: "立式计量箱",
        规格及型号: this.get_a_c_3_1(),
        单位: "台",
        数量: this.get_a_c_3_2(),
        备注: "",
        主要材质: "",
        运行时间: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "超滤化学清洗杀菌剂计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_a_c_4_1(),
        单位: "台",
        数量: this.get_a_c_4_2(),
        备注:
          "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
        主要材质: "泵头PVC，隔膜PTFE",
        运行时间: "0.1h",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "碱储罐",
        设备类型: "卧式储罐",
        规格及型号: this.get_a_d_1_1(),
        单位: "台",
        数量: this.get_a_d_1_2(),
        备注: "伴热功率4KW",
        主要材质: "碳钢衬胶",
        运行时间: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "卸盐酸泵",
        设备类型: "化工泵",
        规格及型号: this.get_a_d_2_1(),
        单位: "台",
        数量: this.get_a_d_2_2(),
        备注: "",
        主要材质: "氟塑料",
        运行时间: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "碱计量箱",
        设备类型: "立式圆筒水箱",
        规格及型号: this.get_a_d_3_1(),
        单位: "台",
        数量: this.get_a_d_3_2(),
        备注: "",
        主要材质: "",
        运行时间: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "化学清洗碱计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_a_d_4_1(),
        单位: "台",
        数量: this.get_a_d_4_2(),
        备注:
          "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
        主要材质: "泵头PVC，隔膜PTFE",
        运行时间: "",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "盐酸储罐",
        设备类型: "卧式储罐",
        规格及型号: this.get_a_e_1_1(),
        单位: "台",
        数量: this.get_a_e_1_2(),
        备注: "",
        主要材质: "碳钢衬胶",
        运行时间: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "卸盐酸泵",
        设备类型: "化工泵",
        规格及型号: this.get_a_e_2_1(),
        单位: "台",
        数量: this.get_a_e_2_2(),
        备注: "",
        主要材质: "氟塑料",
        运行时间: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "盐酸计量箱",
        设备类型: "立式圆筒水箱",
        规格及型号: this.get_a_e_3_1(),
        单位: "台",
        数量: this.get_a_e_3_2(),
        备注: "",
        主要材质: "",
        运行时间: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "化学清洗盐酸计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.get_a_e_4_1(),
        单位: "台",
        数量: this.get_a_e_4_2(),
        备注:
          "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
        主要材质: "泵头PVC，隔膜PTFE",
        运行时间: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        安装位置: "超滤进水泵出口管",
        仪表名称: "就地压力表",
        规格及型号:
          "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
        单位: "台",
        数量: this.get_b_a_1(),
        备注: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "超滤进水支管",
        仪表名称: "压力变送器",
        规格及型号:
          "一体式，外壳材质：铸铝，测量范围：0～0.3MPa，输出信号：4～20mA+Hart协议，测量元件：304，配安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_a_2(),
        备注: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "超滤进水支管",
        仪表名称: "就地压力表",
        规格及型号:
          "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
        单位: "台",
        数量: this.get_b_a_3(),
        备注: "",
      },
      {
        序号: "4",
        仪表位号: "",
        安装位置: "超滤产水支管",
        仪表名称: "压力变送器",
        规格及型号:
          "一体式，外壳材质：铸铝，测量范围：0～0.3MPa，输出信号：4～20mA+Hart协议，测量元件：SS304，配安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_a_4(),
        备注: "",
      },
      {
        序号: "5",
        仪表位号: "",
        安装位置: "超滤产水支管",
        仪表名称: "就地压力表",
        规格及型号:
          "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
        单位: "台",
        数量: this.get_b_a_5(),
        备注: "",
      },
      {
        序号: "6",
        仪表位号: "",
        安装位置: "超滤产水支管",
        仪表名称: "电磁流量计",
        规格及型号:
          "分体式，电源：AC220V，测量范围：0~173m³/h，DN200，输出信号：4~20mA+Hart协议，本体：碳钢衬塑，电极材质：304，衬里材质：氯丁橡胶，配接地环及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_a_6(),
        备注: "",
      },
      {
        序号: "7",
        仪表位号: "",
        安装位置: "超滤产水支管",
        仪表名称: "在线浊度分析仪",
        规格及型号:
          "电源：AC 220V，测量范围：0~10NTU，输出信号：4~20mA，配套安装附件，电缆：10米，就地显示。",
        单位: "台",
        数量: this.get_b_a_7(),
        备注: "",
      },
      {
        序号: "8",
        仪表位号: "",
        安装位置: "超滤产水箱",
        仪表名称: "超声波液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～10米，输出信号：4～20mA+Hart协议，配安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_a_8(),
        备注: "",
      },
      {
        序号: "9",
        仪表位号: "",
        安装位置: "超滤浓水错流排放管",
        仪表名称: "转子流量计",
        规格及型号:
          "测量范围：0~5m³/h，DN50，本体：有机玻璃，带导杆；承插连接，就地显示。",
        单位: "台",
        数量: this.get_b_a_9(),
        备注: "",
      },
      {
        序号: "10",
        仪表位号: "",
        安装位置: "超滤反洗泵出口",
        仪表名称: "就地压力表",
        规格及型号:
          "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：304，Φ100mm，配表阀。",
        单位: "台",
        数量: this.get_b_a_10(),
        备注: "",
      },
      {
        序号: "1",
        仪表位号: "",
        安装位置: "超滤化学清洗水箱侧壁",
        仪表名称: "磁翻板液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～2.5米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：UPVC，浮子材质：UPVC，配通气阀、排污阀及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_b_1(),
        备注: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "超滤化学清洗水箱侧壁",
        仪表名称: "温度变送器",
        规格及型号: "测量范围：0～100℃ ，输出信号：4~20mA+Hart协议",
        单位: "台",
        数量: this.get_b_b_2(),
        备注: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "超滤化学清洗水泵出水",
        仪表名称: "就地压力表",
        规格及型号:
          "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
        单位: "台",
        数量: this.get_b_b_3(),
        备注: "",
      },
      {
        序号: "4",
        仪表位号: "",
        安装位置: "超滤化学清洗保安过滤器进水",
        仪表名称: "就地压力表",
        规格及型号:
          "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
        单位: "台",
        数量: this.get_b_b_4(),
        备注: "",
      },
      {
        序号: "5",
        仪表位号: "",
        安装位置: "超滤化学清洗保安过滤器出水",
        仪表名称: "就地压力表",
        规格及型号:
          "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
        单位: "台",
        数量: this.get_b_b_5(),
        备注: "",
      },
      {
        序号: "6",
        仪表位号: "",
        安装位置: "超滤化学清洗保安过滤器出水",
        仪表名称: "浮子流量计",
        规格及型号: "测量范围：0~158m3/h，DN150",
        单位: "台",
        数量: this.get_b_b_6(),
        备注: "",
      },
      {
        序号: "1",
        仪表位号: "",
        安装位置: "次氯酸钠储罐",
        仪表名称: "磁翻板液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_c_1(),
        备注: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "次氯酸钠卸料泵出口",
        仪表名称: "就地压力表",
        规格及型号:
          "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
        单位: "台",
        数量: this.get_b_c_2(),
        备注: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "次氯酸钠计量箱",
        仪表名称: "磁翻板液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_c_3(),
        备注: "",
      },
      {
        序号: "5",
        仪表位号: "",
        安装位置: "化学清洗次氯酸钠计量泵出口",
        仪表名称: "就地压力表",
        规格及型号:
          "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
        单位: "台",
        数量: this.get_b_c_5(),
        备注: "",
      },
      {
        序号: "1",
        仪表位号: "",
        安装位置: "盐酸储罐",
        仪表名称: "磁翻板液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_d_1(),
        备注: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "盐酸卸料泵出口",
        仪表名称: "就地压力表",
        规格及型号:
          "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
        单位: "台",
        数量: this.get_b_d_2(),
        备注: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "盐酸计量箱",
        仪表名称: "磁翻板液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_d_3(),
        备注: "",
      },
      {
        序号: "4",
        仪表位号: "",
        安装位置: "化学清洗盐酸计量泵出口",
        仪表名称: "就地压力表",
        规格及型号:
          "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
        单位: "台",
        数量: this.get_b_d_4(),
        备注: "",
      },
      {
        序号: "1",
        仪表位号: "",
        安装位置: "碱储罐",
        仪表名称: "磁翻板液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_e_1(),
        备注: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "碱卸料泵出口",
        仪表名称: "就地压力表",
        规格及型号:
          "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
        单位: "台",
        数量: this.get_b_e_2(),
        备注: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "碱计量箱",
        仪表名称: "磁翻板液位计",
        规格及型号:
          "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
        单位: "台",
        数量: this.get_b_e_3(),
        备注: "",
      },
      {
        序号: "4",
        仪表位号: "",
        安装位置: "化学清洗碱计量泵出口",
        仪表名称: "就地压力表",
        规格及型号:
          "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
        单位: "台",
        数量: this.get_b_e_4(),
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
