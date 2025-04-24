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
  i18n: require("./i18n_3003"),
  data() {
    return {
      modelVisible: false,
      b9: "6000",
      b11: "4.00",
      b12: "2.00",
      b13: "10.00",
      b14: "8.50",
      b15: "3.00",
      b16: "",
      b17: "",
      b18_0: "64",
      b19_0: "1",
      b19: "1.00",
      b20_0: "1.5",
      b20: "1.5",
      b20_1: "1.50",
      b21: "0.40",
      b26: "0.70",
      b27: "0.70",
      b29: "0.70",
      b30: "0.70",
      b32: "",
      b33: "64",
      b34: "1.00",
      b36: "",
      b38: "3.50",
      b39: "0.30",
      b42: "3.80",
      b45: "0.7",
      b46: "1.50",
      b50: "800",
      b53_s: "0.26",
      b53: "1.00",
      b54_s: "0.75",
      b54: "1.00",
      b55_s: "1.5",
      b55: "1.00",
      b56_s: "1.61",
      b56: "1.00",
      b60_0: "6.00",
      b60_1: "100.00",
      b61_0: "2.00",
      b61_1: "100.00",
      b63: "0.15",
      b64: "",
      b65: "800",
      b66: "10.00",
      b69: "6.20",
      b71: "6.60",
      b73: "6.50",
      b80: "0.028",
      b81: "2.30",
      b84: "1.80",
      b87: "1.10",
      b94: "13.00",
      b98: "60.00",
      b99: "32.00",
      b100: "1000.00",
      b102: "11.40",
      b103: "10.10",
      b105: "10.50",
      b108: "14.00",
      b110: "0.30",
      b111: "0.40",
      b114: "0.50",
      b115: "0.20",
      b117: "0.07",
      b118: "0.05",
      b119: "46.00",
      b120: "2.33",
      b121: "0.05",
      b124: "0.05",
      b129: "0.10",
      b131: "3.00",
      b132: "34.00",
      b138: "600.00",
      b139: "1.20",
      b142: "0.30",
      b147: "1.80",
      b148: "0.36",
      b149: "60",
      b150: "1.25",
      b152: "0.07",
      b153: "0.39",
      b160: "0.50",
      b161: "1.50",
      b162: "0.50",
      b163: "1.45",
      b168: "0.40",
      b169: "0.37",
      b171_0: "50",
      b172_0: "1",
      b173_0: "1.5",
      b174: "0.40",
      b179: "30.00",
      b182: "10",
      b183: "1210.00",
      b188: "500.00",
      b190: "1.00",
      b193: "0.20",
      b194: "0.02",
      b195: "1000.00",
      b204: "1.20",
      b205: "2.91",
      b206: "1.60",
      b207: "2.51",
      b208: "1.60",
      b214: "0",
      b215: "0",
      b216: "0",
      b217: "0.2",
      b219: "90",
      b220: "80",
      b224: "5.0",
      b225: "1033.00",
      b229: "16.00",
      b232: "1.0",
      b233: "99",
      b237: "5.0",
      b238: "1033.00",
      b245: "50.00",
      b247: "98",
      b250: "1800.00",
      b256: "3",
      b257: "50.00",
      b260_0: "25.00",
      b261_0: "10.00",
      b262: "2.00",
      b265: "1.53",
      b278: "30.00",
      b287: "500.00",
      b288: "15.00",
      b291: "0.75",
      b292: "0.60",
      b293: "37.50",
      b296: "1.00",
      b298: "5.00",
      b303: "5",
      b305: "1",
      b306: "3",
      b308: "6.00",
      b309: "19.00",
      b317: "60",
      b325: "1.5",
      b326: "50.00",
      b328: "1",
      b329: "8",
      b330: "42.00",
      b332: "2.10",
      b335: "1",
      b336: "1",
      b342_0: "150",
      b342_1: "15",
      b342_2: "81",
      b343_0: "100",
      b343_1: "20",
      b343_2: "81",
      b348_1: "1",
      b348_2: "1",
      b349_1: "5",
      b349_2: "0.8",
      b350_1: "1",
      b350_2: "1.27",
      b351_1: "1",
      b351_2: "0.1",
      b352_1: "1",
      b352_2: "0.1",
      b353_1: "2",
      b353_2: "0.2",
      b354_1: "1",
      b354_2: "0.21",
      b355_1: "1",
      b355_2: "0.08",
      b356_1: "1",
      b356_2: "1",
      b358_1: "1",
      b358_2: "1",
      b359_1: "1",
      b359_2: "0.17",
      b360_1: "1",
      b360_2: "0.21",
      b361_1: "1",
      b361_2: "6.5",
      b362_1: "1",
      b362_2: "0.2",
      b364_1: "1",
      b364_2: "0.1",
      b365_1: "5",
      b365_2: "0.8",
      b366_1: "1",
      b366_2: "1",
      b370: "5.80",
      b370_1: "5.00",
      b371_3: "2",
      b373_3: "0.20",
      b374_3: "4.00",
      b377: "1.00",
      b378: "1.00",
      b383_0: "150.00",
      b383_1: "15.00",
      b383_2: "81.00",
      b384_0: "100.00",
      b384_1: "30.00",
      b384_2: "81.00",
      b389_1: "1",
      b389_2: "1",
      b390_1: "5",
      b390_2: "0.8",
      b391_1: "1",
      b391_2: "1.27",
      b392_1: "1",
      b392_2: "0.1",
      b393_1: "2",
      b393_2: "0.11",
      b394_1: "1",
      b394_2: "0.21",
      b395_1: "1",
      b395_2: "0.08",
      b396_1: "1",
      b396_2: "1",
      b398_1: "1",
      b398_2: "1",
      b399_1: "1",
      b399_2: "0.17",
      b400_1: "1",
      b400_2: "0.21",
      b401_1: "1",
      b401_2: "6.5",
      b402_1: "1",
      b402_2: "0.2",
      b403_1: "1",
      b403_2: "0.1",
      b404_1: "5",
      b404_2: "0.85",
      b408_0: "5.00",
      b408: "2.50",
      b409_3: "2",
      b411_3: "0.20",
      b412_3: "4.00",
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
              title: "生产厂家",
              dataIndex: "生产厂家",
              key: "10",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "生产厂家" },
            },
            {
              title: "与基础设计不同之处",
              dataIndex: "与基础设计不同之处",
              key: "11",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "与基础设计不同之处" },
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
              width: "80px",
              align: "center",
            },
            {
              title: "与基础设计不同处",
              dataIndex: "与基础设计不同处",
              key: "11",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "与基础设计不同处" },
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
        this.b9 = 6000;
      } else {
        this.b9 = waterData;
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
        exportExcel3(allData1, allData2, allData3, "高密度沉淀池工程量", this);
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
        key1: this.b9,
        key2: this.b11,
        key3: this.b12,
        key4: this.b13,
        key5: this.b14,
        key6: this.b15,
        key7: this.b18_0,
        key8: this.b19_0,
        key9: this.b19,
        key10: this.b20_0,
        key11: this.b20,
        key12: this.b21,
        key13: this.b22_0,
        key14: this.b22,
        key15: this.b23_0,
        key16: this.b25,
        key17: this.b26,
        key18: this.b27,
        key19: this.b28_0,
        key20: this.b28,
        key21: this.b29,
        key22: this.b30,
        key23: this.b31_0,
        key24: this.b31,
        key25: this.b34,
        key26: this.b35,
        key27: this.b37_0,
        key28: this.b38,
        key29: this.b39,
        key30: this.b40_0,
        key31: this.b40,
        key32: this.b41_0,
        key33: this.b42_0,
        key34: this.b42,
        key35: this.b43_0,
        key36: this.b44_0,
        key37: this.b46,
        key38: this.b47,
        key39: this.b48,
        key40: this.b50,
        key41: this.b51_0,
        key42: this.b53_s,
        key43: this.b53_0,
        key44: this.b53,
        key45: this.b53_1,
        key46: this.b54_s,
        key47: this.b54_0,
        key48: this.b54,
        key49: this.b54_1,
        key50: this.b55_s,
        key51: this.b55_0,
        key52: this.b55,
        key53: this.b55_1,
        key54: this.b56_s,
        key55: this.b56_0,
        key56: this.b56,
        key57: this.b56_1,
        key58: this.b57_1,
        key59: this.b60_s,
        key60: this.b60_0,
        key61: this.b60,
        key62: this.b60_1,
        key63: this.b60_2,
        key64: this.b61_s,
        key65: this.b61_0,
        key66: this.b61,
        key67: this.b61_1,
        key68: this.b61_2,
        key69: this.b62_2,
        key70: this.b63_0,
        key71: this.b63,
        key72: this.b66,
        key73: this.b68_0,
        key74: this.b69,
        key75: this.b70,
        key76: this.b71_0,
        key77: this.b71,
        key78: this.b72_0,
        key79: this.b73_0,
        key80: this.b73,
        key81: this.b74_0,
        key82: this.b75_0,
        key83: this.b77_0,
        key84: this.b78_0,
        key85: this.b80,
        key86: this.b81_0,
        key87: this.b81,
        key88: this.b82,
        key89: this.b84,
        key90: this.b85_0,
        key91: this.b87,
        key92: this.b88_0,
        key93: this.b89_0,
        key94: this.b92_0,
        key95: this.b92,
        key96: this.b93,
        key97: this.b94_0,
        key98: this.b94,
        key99: this.b95_0,
        key100: this.b96,
        key101: this.b98,
        key102: this.b99,
        key103: this.b100,
        key104: this.b101_0,
        key105: this.b102_0,
        key106: this.b102,
        key107: this.b103_0,
        key108: this.b103,
        key109: this.b104_0,
        key110: this.b105_0,
        key111: this.b105,
        key112: this.b106_0,
        key113: this.b106,
        key114: this.b108_0,
        key115: this.b108,
        key116: this.b109,
        key117: this.b110,
        key118: this.b111_0,
        key119: this.b111,
        key120: this.b112_0,
        key121: this.b112,
        key122: this.b113_0,
        key123: this.b113,
        key124: this.b114,
        key125: this.b115_0,
        key126: this.b115,
        key127: this.b117,
        key128: this.b118,
        key129: this.b119_0,
        key130: this.b119,
        key131: this.b120_0,
        key132: this.b120,
        key133: this.b121,
        key134: this.b123_0,
        key135: this.b124,
        key136: this.b125_0,
        key137: this.b126_0,
        key138: this.b127_0,
        key139: this.b127,
        key140: this.b128_0,
        key141: this.b128,
        key142: this.b129,
        key143: this.b130,
        key144: this.b131_0,
        key145: this.b131,
        key146: this.b132_0,
        key147: this.b132,
        key148: this.b133_0,
        key149: this.b134_0,
        key150: this.b135_0,
        key151: this.b136_0,
        key152: this.b136,
        key153: this.b138,
        key154: this.b139,
        key155: this.b140,
        key156: this.b141_0,
        key157: this.b142,
        key158: this.b143_0,
        key159: this.b144_0,
        key160: this.b146_0,
        key161: this.b147,
        key162: this.b148,
        key163: this.b149,
        key164: this.b150_0,
        key165: this.b150,
        key166: this.b151_0,
        key167: this.b152,
        key168: this.b153_0,
        key169: this.b153,
        key170: this.b154_0,
        key171: this.b155_0,
        key172: this.b155,
        key173: this.b156_0,
        key174: this.b156,
        key175: this.b157,
        key176: this.b158,
        key177: this.b159,
        key178: this.b160,
        key179: this.b161,
        key180: this.b162,
        key181: this.b163,
        key182: this.b164,
        key183: this.b165,
        key184: this.b166,
        key185: this.b167,
        key186: this.b168,
        key187: this.b169,
        key188: this.b171_0,
        key189: this.b172_0,
        key190: this.b172,
        key191: this.b173_0,
        key192: this.b173,
        key193: this.b174,
        key194: this.b175_0,
        key195: this.b175,
        key196: this.b176_0,
        key197: this.b179,
        key198: this.b180_0,
        key199: this.b181_0,
        key200: this.b182,
        key201: this.b183,
        key202: this.b184_0,
        key203: this.b185_0,
        key204: this.b186_0,
        key205: this.b187_0,
        key206: this.b187,
        key207: this.b188_0,
        key208: this.b188,
        key209: this.b190,
        key210: this.b191_0,
        key211: this.b192_0,
        key212: this.b193,
        key213: this.b194,
        key214: this.b195,
        key215: this.b196_0,
        key216: this.b196,
        key217: this.b197_0,
        key218: this.b197,
        key219: this.b198_0,
        key220: this.b199_0,
        key221: this.b200_0,
        key222: this.b200,
        key223: this.b201_0,
        key224: this.b201,
        key225: this.b204,
        key226: this.b205,
        key227: this.b206,
        key228: this.b207,
        key229: this.b208,
        key230: this.b214,
        key231: this.b215,
        key232: this.b216,
        key233: this.b217,
        key234: this.b218_0,
        key235: this.b219,
        key236: this.b220,
        key237: this.b221_0,
        key238: this.b221,
        key239: this.b222_0,
        key240: this.b223_0,
        key241: this.b224,
        key242: this.b225,
        key243: this.b226_0,
        key244: this.b227_0,
        key245: this.b228_0,
        key246: this.b229_0,
        key247: this.b229,
        key248: this.b230_0,
        key249: this.b230,
        key250: this.b232,
        key251: this.b233,
        key252: this.b234_0,
        key253: this.b234,
        key254: this.b235_0,
        key255: this.b236_0,
        key256: this.b237,
        key257: this.b238,
        key258: this.b239_0,
        key259: this.b240_0,
        key260: this.b241_0,
        key261: this.b242,
        key262: this.b242_0,
        key263: this.b245,
        key264: this.b246_0,
        key265: this.b247,
        key266: this.b248_0,
        key267: this.b249_0,
        key268: this.b250,
        key269: this.b251_0,
        key270: this.b251,
        key271: this.b252_0,
        key272: this.b253_0,
        key273: this.b253,
        key274: this.b256,
        key275: this.b257_0,
        key276: this.b257,
        key277: this.b260_0,
        key278: this.b261_0,
        key279: this.b262,
        key280: this.b263_0,
        key281: this.b264_0,
        key282: this.b265,
        key283: this.b266_0,
        key284: this.b267_0,
        key285: this.b268_0,
        key286: this.b269_0,
        key287: this.b270_0,
        key288: this.b271_0,
        key289: this.b272_0,
        key290: this.b273_0,
        key291: this.b274_0,
        key292: this.b276_0,
        key293: this.b276,
        key294: this.b277_0,
        key295: this.b277,
        key296: this.b278,
        key297: this.b279_0,
        key298: this.b280_0,
        key299: this.b280,
        key300: this.b281_0,
        key301: this.b281,
        key302: this.b282_0,
        key303: this.b283_0,
        key304: this.b287,
        key305: this.b288,
        key306: this.b289,
        key307: this.b290_0,
        key308: this.b291,
        key309: this.b292,
        key310: this.b293_0,
        key311: this.b293,
        key312: this.b294_0,
        key313: this.b295_0,
        key314: this.b296,
        key315: this.b297_0,
        key316: this.b297,
        key317: this.b298,
        key318: this.b299_0,
        key319: this.b299,
        key320: this.b300_0,
        key321: this.b300,
        key322: this.b303,
        key323: this.b304_0,
        key324: this.b304,
        key325: this.b305,
        key326: this.b306,
        key327: this.b307_0,
        key328: this.b307,
        key329: this.b308_0,
        key330: this.b308,
        key331: this.b309_0,
        key332: this.b309,
        key333: this.b310_0,
        key334: this.b310,
        key335: this.b311_0,
        key336: this.b311,
        key337: this.b314_0,
        key338: this.b315_0,
        key339: this.b315,
        key340: this.b316_0,
        key341: this.b317,
        key342: this.b318,
        key343: this.b319,
        key344: this.b320,
        key345: this.b321,
        key346: this.b322,
        key347: this.b325,
        key348: this.b326_0,
        key349: this.b326,
        key350: this.b327_0,
        key351: this.b328,
        key352: this.b329,
        key353: this.b330_0,
        key354: this.b330,
        key355: this.b331_0,
        key356: this.b332_0,
        key357: this.b332,
        key358: this.b335,
        key359: this.b336,
        key360: this.b337,
        key361: this.b338,
        key362: this.b342_s,
        key363: this.b342_0,
        key364: this.b342,
        key365: this.b342_1,
        key366: this.b342_2,
        key367: this.b342_3,
        key368: this.b343_s,
        key369: this.b343_0,
        key370: this.b343,
        key371: this.b343_1,
        key372: this.b343_2,
        key373: this.b343_3,
        key374: this.b344_3,
        key375: this.b348_s,
        key376: this.b348_0,
        key377: this.b348,
        key378: this.b348_1,
        key379: this.b348_2,
        key380: this.b348_3,
        key381: this.b349_s,
        key382: this.b349_0,
        key383: this.b349,
        key384: this.b349_1,
        key385: this.b349_2,
        key386: this.b349_3,
        key387: this.b350_s,
        key388: this.b350_0,
        key389: this.b350,
        key390: this.b350_1,
        key391: this.b350_2,
        key392: this.b350_3,
        key393: this.b351_s,
        key394: this.b351_0,
        key395: this.b351,
        key396: this.b351_1,
        key397: this.b351_2,
        key398: this.b351_3,
        key399: this.b352_s,
        key400: this.b352_0,
        key401: this.b352,
        key402: this.b352_1,
        key403: this.b352_2,
        key404: this.b352_3,
        key405: this.b353_s,
        key406: this.b353_0,
        key407: this.b353,
        key408: this.b353_1,
        key409: this.b353_2,
        key410: this.b353_3,
        key411: this.b354_s,
        key412: this.b354_0,
        key413: this.b354,
        key414: this.b354_1,
        key415: this.b354_2,
        key416: this.b354_3,
        key417: this.b355_s,
        key418: this.b355_0,
        key419: this.b355,
        key420: this.b355_1,
        key421: this.b355_2,
        key422: this.b355_3,
        key423: this.b356_s,
        key424: this.b356_0,
        key425: this.b356,
        key426: this.b356_1,
        key427: this.b356_2,
        key428: this.b356_3,
        key429: this.b358_s,
        key430: this.b358_0,
        key431: this.b358,
        key432: this.b358_1,
        key433: this.b358_2,
        key434: this.b358_3,
        key435: this.b359_s,
        key436: this.b359_0,
        key437: this.b359,
        key438: this.b359_1,
        key439: this.b359_2,
        key440: this.b359_3,
        key441: this.b360_s,
        key442: this.b360_0,
        key443: this.b360,
        key444: this.b360_1,
        key445: this.b360_2,
        key446: this.b360_3,
        key447: this.b361_s,
        key448: this.b361_0,
        key449: this.b361,
        key450: this.b361_1,
        key451: this.b361_2,
        key452: this.b361_3,
        key453: this.b362_s,
        key454: this.b362_0,
        key455: this.b362,
        key456: this.b362_1,
        key457: this.b362_2,
        key458: this.b362_3,
        key459: this.b364_s,
        key460: this.b364_0,
        key461: this.b364,
        key462: this.b364_1,
        key463: this.b364_2,
        key464: this.b364_3,
        key465: this.b365_s,
        key466: this.b365_0,
        key467: this.b365,
        key468: this.b365_1,
        key469: this.b365_2,
        key470: this.b365_3,
        key471: this.b366_s,
        key472: this.b366_0,
        key473: this.b366,
        key474: this.b366_1,
        key475: this.b366_2,
        key476: this.b366_3,
        key477: this.b367_3,
        key478: this.b368_3,
        key479: this.b370,
        key480: this.b370_1,
        key481: this.b370_3,
        key482: this.b371_3,
        key483: this.b372_3,
        key484: this.b373_3,
        key485: this.b374_3,
        key486: this.b377,
        key487: this.b378,
        key488: this.b379,
        key489: this.b383_s,
        key490: this.b383_0,
        key491: this.b383,
        key492: this.b383_1,
        key493: this.b383_2,
        key494: this.b383_3,
        key495: this.b384_s,
        key496: this.b384_0,
        key497: this.b384,
        key498: this.b384_1,
        key499: this.b384_2,
        key500: this.b384_3,
        key501: this.b385_3,
        key502: this.b389_s,
        key503: this.b389_0,
        key504: this.b389,
        key505: this.b389_1,
        key506: this.b389_2,
        key507: this.b389_3,
        key508: this.b390_s,
        key509: this.b390_0,
        key510: this.b390,
        key511: this.b390_1,
        key512: this.b390_2,
        key513: this.b390_3,
        key514: this.b391_s,
        key515: this.b391_0,
        key516: this.b391,
        key517: this.b391_1,
        key518: this.b391_2,
        key519: this.b391_3,
        key520: this.b392_s,
        key521: this.b392_0,
        key522: this.b392,
        key523: this.b392_1,
        key524: this.b392_2,
        key525: this.b392_3,
        key526: this.b393_s,
        key527: this.b393_0,
        key528: this.b393,
        key529: this.b393_1,
        key530: this.b393_2,
        key531: this.b393_3,
        key532: this.b394_s,
        key533: this.b394_0,
        key534: this.b394,
        key535: this.b394_1,
        key536: this.b394_2,
        key537: this.b394_3,
        key538: this.b395_s,
        key539: this.b395_0,
        key540: this.b395,
        key541: this.b395_1,
        key542: this.b395_2,
        key543: this.b395_3,
        key544: this.b396_s,
        key545: this.b396_0,
        key546: this.b396,
        key547: this.b396_1,
        key548: this.b396_2,
        key549: this.b396_3,
        key550: this.b398_s,
        key551: this.b398_0,
        key552: this.b398,
        key553: this.b398_1,
        key554: this.b398_2,
        key555: this.b398_3,
        key556: this.b399_s,
        key557: this.b399_0,
        key558: this.b399,
        key559: this.b399_1,
        key560: this.b399_2,
        key561: this.b399_3,
        key562: this.b400_s,
        key563: this.b400_0,
        key564: this.b400,
        key565: this.b400_1,
        key566: this.b400_2,
        key567: this.b400_3,
        key568: this.b401_s,
        key569: this.b401_0,
        key570: this.b401,
        key571: this.b401_1,
        key572: this.b401_2,
        key573: this.b401_3,
        key574: this.b402_s,
        key575: this.b402_0,
        key576: this.b402,
        key577: this.b402_1,
        key578: this.b402_2,
        key579: this.b402_3,
        key580: this.b403_s,
        key581: this.b403_0,
        key582: this.b403,
        key583: this.b403_1,
        key584: this.b403_2,
        key585: this.b403_3,
        key586: this.b404_s,
        key587: this.b404_0,
        key588: this.b404,
        key589: this.b404_1,
        key590: this.b404_2,
        key591: this.b404_3,
        key592: this.b405_3,
        key593: this.b406_3,
        key594: this.b408_0,
        key595: this.b408,
        key596: this.b408_3,
        key597: this.b409_3,
        key598: this.b410_3,
        key599: this.b411_3,
        key600: this.b412_3,
      };
      exportWord("高密度沉淀池计算书", "3003.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b9,
        key2: this.b11,
        key3: this.b12,
        key4: this.b13,
        key5: this.b14,
        key6: this.b15,
        key7: this.b18_0,
        key8: this.b19_0,
        key9: this.b19,
        key10: this.b20_0,
        key11: this.b20,
        key12: this.b21,
        key13: this.b22_0,
        key14: this.b22,
        key15: this.b23_0,
        key16: this.b25,
        key17: this.b26,
        key18: this.b27,
        key19: this.b28_0,
        key20: this.b28,
        key21: this.b29,
        key22: this.b30,
        key23: this.b31_0,
        key24: this.b31,
        key25: this.b34,
        key26: this.b35,
        key27: this.b37_0,
        key28: this.b38,
        key29: this.b39,
        key30: this.b40_0,
        key31: this.b40,
        key32: this.b41_0,
        key33: this.b42_0,
        key34: this.b42,
        key35: this.b43_0,
        key36: this.b44_0,
        key37: this.b46,
        key38: this.b47,
        key39: this.b48,
        key40: this.b50,
        key41: this.b51_0,
        key42: this.b53_s,
        key43: this.b53_0,
        key44: this.b53,
        key45: this.b53_1,
        key46: this.b54_s,
        key47: this.b54_0,
        key48: this.b54,
        key49: this.b54_1,
        key50: this.b55_s,
        key51: this.b55_0,
        key52: this.b55,
        key53: this.b55_1,
        key54: this.b56_s,
        key55: this.b56_0,
        key56: this.b56,
        key57: this.b56_1,
        key58: this.b57_1,
        key59: this.b60_s,
        key60: this.b60_0,
        key61: this.b60,
        key62: this.b60_1,
        key63: this.b60_2,
        key64: this.b61_s,
        key65: this.b61_0,
        key66: this.b61,
        key67: this.b61_1,
        key68: this.b61_2,
        key69: this.b62_2,
        key70: this.b63_0,
        key71: this.b63,
        key72: this.b66,
        key73: this.b68_0,
        key74: this.b69,
        key75: this.b70,
        key76: this.b71_0,
        key77: this.b71,
        key78: this.b72_0,
        key79: this.b73_0,
        key80: this.b73,
        key81: this.b74_0,
        key82: this.b75_0,
        key83: this.b77_0,
        key84: this.b78_0,
        key85: this.b80,
        key86: this.b81_0,
        key87: this.b81,
        key88: this.b82,
        key89: this.b84,
        key90: this.b85_0,
        key91: this.b87,
        key92: this.b88_0,
        key93: this.b89_0,
        key94: this.b92_0,
        key95: this.b92,
        key96: this.b93,
        key97: this.b94_0,
        key98: this.b94,
        key99: this.b95_0,
        key100: this.b96,
        key101: this.b98,
        key102: this.b99,
        key103: this.b100,
        key104: this.b101_0,
        key105: this.b102_0,
        key106: this.b102,
        key107: this.b103_0,
        key108: this.b103,
        key109: this.b104_0,
        key110: this.b105_0,
        key111: this.b105,
        key112: this.b106_0,
        key113: this.b106,
        key114: this.b108_0,
        key115: this.b108,
        key116: this.b109,
        key117: this.b110,
        key118: this.b111_0,
        key119: this.b111,
        key120: this.b112_0,
        key121: this.b112,
        key122: this.b113_0,
        key123: this.b113,
        key124: this.b114,
        key125: this.b115_0,
        key126: this.b115,
        key127: this.b117,
        key128: this.b118,
        key129: this.b119_0,
        key130: this.b119,
        key131: this.b120_0,
        key132: this.b120,
        key133: this.b121,
        key134: this.b123_0,
        key135: this.b124,
        key136: this.b125_0,
        key137: this.b126_0,
        key138: this.b127_0,
        key139: this.b127,
        key140: this.b128_0,
        key141: this.b128,
        key142: this.b129,
        key143: this.b130,
        key144: this.b131_0,
        key145: this.b131,
        key146: this.b132_0,
        key147: this.b132,
        key148: this.b133_0,
        key149: this.b134_0,
        key150: this.b135_0,
        key151: this.b136_0,
        key152: this.b136,
        key153: this.b138,
        key154: this.b139,
        key155: this.b140,
        key156: this.b141_0,
        key157: this.b142,
        key158: this.b143_0,
        key159: this.b144_0,
        key160: this.b146_0,
        key161: this.b147,
        key162: this.b148,
        key163: this.b149,
        key164: this.b150_0,
        key165: this.b150,
        key166: this.b151_0,
        key167: this.b152,
        key168: this.b153_0,
        key169: this.b153,
        key170: this.b154_0,
        key171: this.b155_0,
        key172: this.b155,
        key173: this.b156_0,
        key174: this.b156,
        key175: this.b157,
        key176: this.b158,
        key177: this.b159,
        key178: this.b160,
        key179: this.b161,
        key180: this.b162,
        key181: this.b163,
        key182: this.b164,
        key183: this.b165,
        key184: this.b166,
        key185: this.b167,
        key186: this.b168,
        key187: this.b169,
        key188: this.b171_0,
        key189: this.b172_0,
        key190: this.b172,
        key191: this.b173_0,
        key192: this.b173,
        key193: this.b174,
        key194: this.b175_0,
        key195: this.b175,
        key196: this.b176_0,
        key197: this.b179,
        key198: this.b180_0,
        key199: this.b181_0,
        key200: this.b182,
        key201: this.b183,
        key202: this.b184_0,
        key203: this.b185_0,
        key204: this.b186_0,
        key205: this.b187_0,
        key206: this.b187,
        key207: this.b188_0,
        key208: this.b188,
        key209: this.b190,
        key210: this.b191_0,
        key211: this.b192_0,
        key212: this.b193,
        key213: this.b194,
        key214: this.b195,
        key215: this.b196_0,
        key216: this.b196,
        key217: this.b197_0,
        key218: this.b197,
        key219: this.b198_0,
        key220: this.b199_0,
        key221: this.b200_0,
        key222: this.b200,
        key223: this.b201_0,
        key224: this.b201,
        key225: this.b204,
        key226: this.b205,
        key227: this.b206,
        key228: this.b207,
        key229: this.b208,
        key230: this.b214,
        key231: this.b215,
        key232: this.b216,
        key233: this.b217,
        key234: this.b218_0,
        key235: this.b219,
        key236: this.b220,
        key237: this.b221_0,
        key238: this.b221,
        key239: this.b222_0,
        key240: this.b223_0,
        key241: this.b224,
        key242: this.b225,
        key243: this.b226_0,
        key244: this.b227_0,
        key245: this.b228_0,
        key246: this.b229_0,
        key247: this.b229,
        key248: this.b230_0,
        key249: this.b230,
        key250: this.b232,
        key251: this.b233,
        key252: this.b234_0,
        key253: this.b234,
        key254: this.b235_0,
        key255: this.b236_0,
        key256: this.b237,
        key257: this.b238,
        key258: this.b239_0,
        key259: this.b240_0,
        key260: this.b241_0,
        key261: this.b242,
        key262: this.b242_0,
        key263: this.b245,
        key264: this.b246_0,
        key265: this.b247,
        key266: this.b248_0,
        key267: this.b249_0,
        key268: this.b250,
        key269: this.b251_0,
        key270: this.b251,
        key271: this.b252_0,
        key272: this.b253_0,
        key273: this.b253,
        key274: this.b256,
        key275: this.b257_0,
        key276: this.b257,
        key277: this.b260_0,
        key278: this.b261_0,
        key279: this.b262,
        key280: this.b263_0,
        key281: this.b264_0,
        key282: this.b265,
        key283: this.b266_0,
        key284: this.b267_0,
        key285: this.b268_0,
        key286: this.b269_0,
        key287: this.b270_0,
        key288: this.b271_0,
        key289: this.b272_0,
        key290: this.b273_0,
        key291: this.b274_0,
        key292: this.b276_0,
        key293: this.b276,
        key294: this.b277_0,
        key295: this.b277,
        key296: this.b278,
        key297: this.b279_0,
        key298: this.b280_0,
        key299: this.b280,
        key300: this.b281_0,
        key301: this.b281,
        key302: this.b282_0,
        key303: this.b283_0,
        key304: this.b287,
        key305: this.b288,
        key306: this.b289,
        key307: this.b290_0,
        key308: this.b291,
        key309: this.b292,
        key310: this.b293_0,
        key311: this.b293,
        key312: this.b294_0,
        key313: this.b295_0,
        key314: this.b296,
        key315: this.b297_0,
        key316: this.b297,
        key317: this.b298,
        key318: this.b299_0,
        key319: this.b299,
        key320: this.b300_0,
        key321: this.b300,
        key322: this.b303,
        key323: this.b304_0,
        key324: this.b304,
        key325: this.b305,
        key326: this.b306,
        key327: this.b307_0,
        key328: this.b307,
        key329: this.b308_0,
        key330: this.b308,
        key331: this.b309_0,
        key332: this.b309,
        key333: this.b310_0,
        key334: this.b310,
        key335: this.b311_0,
        key336: this.b311,
        key337: this.b314_0,
        key338: this.b315_0,
        key339: this.b315,
        key340: this.b316_0,
        key341: this.b317,
        key342: this.b318,
        key343: this.b319,
        key344: this.b320,
        key345: this.b321,
        key346: this.b322,
        key347: this.b325,
        key348: this.b326_0,
        key349: this.b326,
        key350: this.b327_0,
        key351: this.b328,
        key352: this.b329,
        key353: this.b330_0,
        key354: this.b330,
        key355: this.b331_0,
        key356: this.b332_0,
        key357: this.b332,
        key358: this.b335,
        key359: this.b336,
        key360: this.b337,
        key361: this.b338,
        key362: this.b342_s,
        key363: this.b342_0,
        key364: this.b342,
        key365: this.b342_1,
        key366: this.b342_2,
        key367: this.b342_3,
        key368: this.b343_s,
        key369: this.b343_0,
        key370: this.b343,
        key371: this.b343_1,
        key372: this.b343_2,
        key373: this.b343_3,
        key374: this.b344_3,
        key375: this.b348_s,
        key376: this.b348_0,
        key377: this.b348,
        key378: this.b348_1,
        key379: this.b348_2,
        key380: this.b348_3,
        key381: this.b349_s,
        key382: this.b349_0,
        key383: this.b349,
        key384: this.b349_1,
        key385: this.b349_2,
        key386: this.b349_3,
        key387: this.b350_s,
        key388: this.b350_0,
        key389: this.b350,
        key390: this.b350_1,
        key391: this.b350_2,
        key392: this.b350_3,
        key393: this.b351_s,
        key394: this.b351_0,
        key395: this.b351,
        key396: this.b351_1,
        key397: this.b351_2,
        key398: this.b351_3,
        key399: this.b352_s,
        key400: this.b352_0,
        key401: this.b352,
        key402: this.b352_1,
        key403: this.b352_2,
        key404: this.b352_3,
        key405: this.b353_s,
        key406: this.b353_0,
        key407: this.b353,
        key408: this.b353_1,
        key409: this.b353_2,
        key410: this.b353_3,
        key411: this.b354_s,
        key412: this.b354_0,
        key413: this.b354,
        key414: this.b354_1,
        key415: this.b354_2,
        key416: this.b354_3,
        key417: this.b355_s,
        key418: this.b355_0,
        key419: this.b355,
        key420: this.b355_1,
        key421: this.b355_2,
        key422: this.b355_3,
        key423: this.b356_s,
        key424: this.b356_0,
        key425: this.b356,
        key426: this.b356_1,
        key427: this.b356_2,
        key428: this.b356_3,
        key429: this.b358_s,
        key430: this.b358_0,
        key431: this.b358,
        key432: this.b358_1,
        key433: this.b358_2,
        key434: this.b358_3,
        key435: this.b359_s,
        key436: this.b359_0,
        key437: this.b359,
        key438: this.b359_1,
        key439: this.b359_2,
        key440: this.b359_3,
        key441: this.b360_s,
        key442: this.b360_0,
        key443: this.b360,
        key444: this.b360_1,
        key445: this.b360_2,
        key446: this.b360_3,
        key447: this.b361_s,
        key448: this.b361_0,
        key449: this.b361,
        key450: this.b361_1,
        key451: this.b361_2,
        key452: this.b361_3,
        key453: this.b362_s,
        key454: this.b362_0,
        key455: this.b362,
        key456: this.b362_1,
        key457: this.b362_2,
        key458: this.b362_3,
        key459: this.b364_s,
        key460: this.b364_0,
        key461: this.b364,
        key462: this.b364_1,
        key463: this.b364_2,
        key464: this.b364_3,
        key465: this.b365_s,
        key466: this.b365_0,
        key467: this.b365,
        key468: this.b365_1,
        key469: this.b365_2,
        key470: this.b365_3,
        key471: this.b366_s,
        key472: this.b366_0,
        key473: this.b366,
        key474: this.b366_1,
        key475: this.b366_2,
        key476: this.b366_3,
        key477: this.b367_3,
        key478: this.b368_3,
        key479: this.b370,
        key480: this.b370_1,
        key481: this.b370_3,
        key482: this.b371_3,
        key483: this.b372_3,
        key484: this.b373_3,
        key485: this.b374_3,
        key486: this.b377,
        key487: this.b378,
        key488: this.b379,
        key489: this.b383_s,
        key490: this.b383_0,
        key491: this.b383,
        key492: this.b383_1,
        key493: this.b383_2,
        key494: this.b383_3,
        key495: this.b384_s,
        key496: this.b384_0,
        key497: this.b384,
        key498: this.b384_1,
        key499: this.b384_2,
        key500: this.b384_3,
        key501: this.b385_3,
        key502: this.b389_s,
        key503: this.b389_0,
        key504: this.b389,
        key505: this.b389_1,
        key506: this.b389_2,
        key507: this.b389_3,
        key508: this.b390_s,
        key509: this.b390_0,
        key510: this.b390,
        key511: this.b390_1,
        key512: this.b390_2,
        key513: this.b390_3,
        key514: this.b391_s,
        key515: this.b391_0,
        key516: this.b391,
        key517: this.b391_1,
        key518: this.b391_2,
        key519: this.b391_3,
        key520: this.b392_s,
        key521: this.b392_0,
        key522: this.b392,
        key523: this.b392_1,
        key524: this.b392_2,
        key525: this.b392_3,
        key526: this.b393_s,
        key527: this.b393_0,
        key528: this.b393,
        key529: this.b393_1,
        key530: this.b393_2,
        key531: this.b393_3,
        key532: this.b394_s,
        key533: this.b394_0,
        key534: this.b394,
        key535: this.b394_1,
        key536: this.b394_2,
        key537: this.b394_3,
        key538: this.b395_s,
        key539: this.b395_0,
        key540: this.b395,
        key541: this.b395_1,
        key542: this.b395_2,
        key543: this.b395_3,
        key544: this.b396_s,
        key545: this.b396_0,
        key546: this.b396,
        key547: this.b396_1,
        key548: this.b396_2,
        key549: this.b396_3,
        key550: this.b398_s,
        key551: this.b398_0,
        key552: this.b398,
        key553: this.b398_1,
        key554: this.b398_2,
        key555: this.b398_3,
        key556: this.b399_s,
        key557: this.b399_0,
        key558: this.b399,
        key559: this.b399_1,
        key560: this.b399_2,
        key561: this.b399_3,
        key562: this.b400_s,
        key563: this.b400_0,
        key564: this.b400,
        key565: this.b400_1,
        key566: this.b400_2,
        key567: this.b400_3,
        key568: this.b401_s,
        key569: this.b401_0,
        key570: this.b401,
        key571: this.b401_1,
        key572: this.b401_2,
        key573: this.b401_3,
        key574: this.b402_s,
        key575: this.b402_0,
        key576: this.b402,
        key577: this.b402_1,
        key578: this.b402_2,
        key579: this.b402_3,
        key580: this.b403_s,
        key581: this.b403_0,
        key582: this.b403,
        key583: this.b403_1,
        key584: this.b403_2,
        key585: this.b403_3,
        key586: this.b404_s,
        key587: this.b404_0,
        key588: this.b404,
        key589: this.b404_1,
        key590: this.b404_2,
        key591: this.b404_3,
        key592: this.b405_3,
        key593: this.b406_3,
        key594: this.b408_0,
        key595: this.b408,
        key596: this.b408_3,
        key597: this.b409_3,
        key598: this.b410_3,
        key599: this.b411_3,
        key600: this.b412_3,
      };
      initWordStorage("3003.docx", data);
      this.handleExcelCache("3003.xlsx", "高密度沉淀池工程量");
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
      return this.b42 + "×" + this.b42 + "×" + this.b40;
    },
    get_a_1_2() {
      return parseFloat(this.b11) * parseFloat(this.b34);
    },
    get_a_2_1() {
      return this.b73 + "×" + this.b73 + "×" + this.b71;
    },
    get_a_2_2() {
      return parseFloat(this.b11);
    },
    get_a_3_1() {
      return this.b94 + "×" + this.b94 + "×" + this.b156;
    },
    get_a_3_2() {
      return parseFloat(this.b11);
    },
    get_b_1_1() {
      return (
        "池径" +
        this.b94 +
        "m，池边高度" +
        this.b156 +
        "m，N=" +
        this.b169 +
        "kW"
      );
    },
    get_b_1_2() {
      return parseFloat(this.b11);
    },
    get_b_2_1() {
      return "Φ50mm，L=750mm";
    },
    get_b_2_2() {
      return this.ROUNDUP(
        parseFloat(this.b104_0) * 1.05 * parseFloat(this.b11),
        0
      ).toFixed(0);
    },
    get_b_3_1() {
      return (
        "L×B×H=" +
        parseFloat(this.b109) * 1000 +
        "×" +
        parseFloat(this.b110) * 1000 +
        "×" +
        parseFloat(this.b111) * 1000 +
        "mm，δ=5mm"
      );
    },
    get_b_3_2() {
      return parseFloat(this.b11) * parseFloat(this.b108);
    },
    get_b_4_1() {
      return "L=3.5m；厚度3mm";
    },
    get_b_4_2() {
      return parseFloat(this.b11);
    },
    get_b_5_1() {
      return "L×B=" + this.b26 + "×" + this.b27 + "m";
    },
    get_b_5_2() {
      return parseFloat(this.b11);
    },
    get_b_6_1() {
      return "L×B=" + this.b29 + "×" + this.b30 + "m";
    },
    get_b_6_2() {
      return parseFloat(this.b11);
    },
    get_b_7_1() {
      return "Φ=" + this.b315 + "m，H=" + this.b322 + "m，δ=5mm";
    },
    get_b_7_2() {
      return parseFloat(this.b11);
    },
    get_b_8_1() {
      return "Φ=" + this.b315 + "m，H=" + this.b322 + "m，δ=5mm";
    },
    get_b_8_2() {
      return parseFloat(this.b11);
    },
    get_b_9_1() {
      return "Φ=1.4m，DN32";
    },
    get_b_9_2() {
      return parseFloat(this.b11);
    },
    get_b_10_1() {
      return (
        "池深" +
        this.b40 +
        "m，N=" +
        this.b293 +
        "kW，R=" +
        this.b299 +
        "rpm，叶轮直径" +
        parseFloat(this.b297) * 1000 +
        "mm"
      );
    },
    get_b_10_2() {
      return parseFloat(this.b11);
    },
    get_b_11_1() {
      return (
        "池深" +
        this.ROUND(parseFloat(this.b71), 2) +
        "m，N=" +
        this.ROUND(parseFloat(this.b304), 2) +
        "kW，R=" +
        this.b308 +
        "~" +
        this.b309 +
        "rpm，叶轮直径" +
        parseFloat(this.b307) * 1000 +
        "mm"
      );
    },
    get_b_11_2() {
      return parseFloat(this.b11);
    },
    get_b_12_1() {
      return (
        "Q=" +
        this.b379 +
        "m³/h，H=" +
        Math.max(parseFloat(this.b411_3), parseFloat(this.b373_3)) +
        "MPa，N=" +
        this.b412_3 +
        "kW"
      );
    },
    get_b_12_2() {
      return parseFloat(this.b11);
    },
    get_b_13_1() {
      return (
        "Q=" +
        this.b338 +
        "m³/h，H=" +
        Math.max(parseFloat(this.b411_3), parseFloat(this.b373_3)) +
        "MPa，N=" +
        Math.max(parseFloat(this.b412_3), parseFloat(this.b374_3)) +
        "kW"
      );
    },
    get_b_13_2() {
      return parseFloat(this.b11) * parseFloat(this.b337);
    },
    get_b_14_1() {
      return "撇渣管长5.7m";
    },
    get_b_14_2() {
      return 8;
    },
    get_c_1_1() {
      return (
        "一体式，DN1500，Q=0~" +
        this.b9 +
        "m³/h，4~20mA信号输出，就地显示，电源：220V"
      );
    },
    get_c_1_2() {
      return 1;
    },
    get_c_2_1() {
      return "0~1.2m，高液位报警";
    },
    get_c_2_2() {
      return 1;
    },
    get_c_3_1() {
      return "pH量程：0~14，温度量程：15~50℃，4~20mA信号输出";
    },
    get_c_3_2() {
      return 1;
    },
    get_c_4_1() {
      return "0~5000NTU，4~20mA信号输出";
    },
    get_c_4_2() {
      return 1;
    },
    get_c_5_1() {
      return "0~" + this.b156 + "m，4~20mA信号输出";
    },
    get_c_5_2() {
      return parseFloat(this.b11);
    },
    get_c_6_1() {
      return "隔膜式压力表，外壳AISI304，测量元件AISI316，测量范围：0~0.6MPa，Φ100mm";
    },
    get_c_6_2() {
      return parseFloat(this.b11);
    },
    get_c_7_1() {
      return "隔膜式压力表，外壳AISI304，测量元件AISI316，测量范围：0~0.6MPa，Φ100mm";
    },
    get_c_7_2() {
      return parseFloat(this.b11) * parseFloat(this.b337);
    },
    get_c_8_1() {
      return (
        "一体式，DN" +
        this.b343_0 +
        "，Q=0~" +
        this.b257 +
        "m³/h，4~20mA信号输出，就地显示，电源：220V"
      );
    },
    get_c_8_2() {
      return parseFloat(this.b11);
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
    b10() {
      return "0";
    },
    b22_0() {
      return (parseFloat(this.b20_0) + parseFloat(this.b21)).toFixed(2);
    },
    b22() {
      return this.b22_0;
    },
    b23_0() {
      return (
        parseFloat(this.b9) /
        parseFloat(this.b19_0) /
        parseFloat(this.b20_0) /
        3600 /
        2
      ).toFixed(3);
    },
    b25() {
      return (parseFloat(this.b9) / parseFloat(this.b11)).toFixed(2);
    },
    b28_0() {
      return (
        parseFloat(this.b25) /
        parseFloat(this.b26) /
        parseFloat(this.b27) /
        3600
      ).toFixed(2);
    },
    b28() {
      return this.b28_0;
    },
    b31_0() {
      return (
        parseFloat(this.b25) /
        parseFloat(this.b29) /
        parseFloat(this.b30) /
        3600
      ).toFixed(2);
    },
    b31() {
      return this.b31_0;
    },
    b35() {
      return (parseFloat(this.b12) / parseFloat(this.b34)).toFixed(2);
    },
    b37_0() {
      return ((parseFloat(this.b25) / 60) * parseFloat(this.b35)).toFixed(2);
    },
    b40_0() {
      return (parseFloat(this.b38) + parseFloat(this.b39)).toFixed(2);
    },
    b40() {
      return this.b40_0;
    },
    b41_0() {
      return (parseFloat(this.b37_0) / parseFloat(this.b38)).toFixed(2);
    },
    b42_0() {
      return Math.sqrt(parseFloat(this.b41_0)).toFixed(2);
    },
    b43_0() {
      return (parseFloat(this.b38) / parseFloat(this.b42)).toFixed(2);
    },
    b44_0() {
      return (
        (Math.pow(parseFloat(this.b42), 2) * parseFloat(this.b38) * 60) /
        parseFloat(this.b25)
      ).toFixed(2);
    },
    b47() {
      return this.b42;
    },
    b48() {
      return (parseFloat(this.b38) - 0.05).toFixed(2);
    },
    b51_0() {
      return (
        parseFloat(this.b25) /
        3600 /
        (Math.PI * Math.pow(parseFloat(this.b50) / 2 / 1000, 2))
      ).toFixed(3);
    },
    b53_0() {
      return parseFloat(this.b51_0).toFixed(2);
    },
    b53_1() {
      return (
        ((parseFloat(this.b53_s) * Math.pow(parseFloat(this.b53_0), 2)) /
          2 /
          9.8) *
        parseFloat(this.b53)
      ).toFixed(3);
    },
    b54_0() {
      return parseFloat(this.b51_0).toFixed(2);
    },
    b54_1() {
      return (
        ((parseFloat(this.b54_s) * Math.pow(parseFloat(this.b54_0), 2)) /
          2 /
          9.8) *
        parseFloat(this.b54)
      ).toFixed(3);
    },
    b55_0() {
      return parseFloat(this.b51_0).toFixed(2);
    },
    b55_1() {
      return (
        ((parseFloat(this.b55_s) * Math.pow(parseFloat(this.b55_0), 2)) /
          2 /
          9.8) *
        parseFloat(this.b55)
      ).toFixed(3);
    },
    b56_0() {
      return parseFloat(this.b51_0).toFixed(2);
    },
    b56_1() {
      return (
        ((parseFloat(this.b56_s) * Math.pow(parseFloat(this.b51_0), 2)) /
          2 /
          9.8) *
        parseFloat(this.b56)
      ).toFixed(3);
    },
    b57_1() {
      return (
        parseFloat(this.b53_1) +
        parseFloat(this.b54_1) +
        parseFloat(this.b55_1) +
        parseFloat(this.b56_1)
      ).toFixed(3);
    },
    b60_s() {
      return this.b50;
    },
    b60() {
      return parseFloat(this.b51_0).toFixed(2);
    },
    b60_2() {
      return (
        (10.7 *
          parseFloat(this.b60_0) *
          Math.pow(parseFloat(this.b9) / 3600 / parseFloat(this.b11), 1.85)) /
        Math.pow(parseFloat(this.b60_1), 1.85) /
        Math.pow(parseFloat(this.b60_s) / 1000, 4.87)
      ).toFixed(3);
    },
    b61_s() {
      return (parseFloat(this.b60_s) + 100).toFixed(0);
    },
    b61() {
      return (
        parseFloat(this.b25) /
        3600 /
        (Math.PI * Math.pow(parseFloat(this.b61_s) / 2 / 1000, 2))
      ).toFixed(2);
    },
    b61_2() {
      return (
        (10.7 *
          parseFloat(this.b61_0) *
          Math.pow(parseFloat(this.b9) / 3600 / parseFloat(this.b11), 1.85)) /
        Math.pow(parseFloat(this.b61_1), 1.85) /
        Math.pow(parseFloat(this.b61_s) / 1000, 4.87)
      ).toFixed(3);
    },
    b62_2() {
      return (parseFloat(this.b60_2) + parseFloat(this.b61_2)).toFixed(3);
    },
    b63_0() {
      return (parseFloat(this.b57_1) + parseFloat(this.b62_2)).toFixed(2);
    },
    b68_0() {
      return ((parseFloat(this.b25) / 60) * parseFloat(this.b66)).toFixed(2);
    },
    b70() {
      return this.b168;
    },
    b71_0() {
      return (parseFloat(this.b69) + parseFloat(this.b70)).toFixed(2);
    },
    b72_0() {
      return (parseFloat(this.b68_0) / parseFloat(this.b69)).toFixed(2);
    },
    b73_0() {
      return Math.sqrt(parseFloat(this.b72_0)).toFixed(2);
    },
    b74_0() {
      return (parseFloat(this.b69) / parseFloat(this.b73)).toFixed(2);
    },
    b75_0() {
      return (
        (parseFloat(this.b66) *
          (parseFloat(this.b69) * Math.pow(parseFloat(this.b73), 2))) /
        parseFloat(this.b68_0)
      ).toFixed(2);
    },
    b77_0() {
      return this.b73;
    },
    b78_0() {
      return this.b94;
    },
    b81_0() {
      return (
        parseFloat(this.b25) /
        3600 /
        parseFloat(this.b77_0) /
        parseFloat(this.b80)
      ).toFixed(3);
    },
    b82() {
      return (
        parseFloat(this.b25) /
        parseFloat(this.b81) /
        parseFloat(this.b77_0) /
        3600
      ).toFixed(3);
    },
    b85_0() {
      return (
        parseFloat(this.b25) /
        3600 /
        parseFloat(this.b78_0) /
        parseFloat(this.b84)
      ).toFixed(3);
    },
    b88_0() {
      return (
        parseFloat(this.b25) /
        3600 /
        parseFloat(this.b78_0) /
        parseFloat(this.b87)
      ).toFixed(3);
    },
    b89_0() {
      return (parseFloat(this.b69) - parseFloat(this.b87)).toFixed(3);
    },
    b92_0() {
      return (parseFloat(this.b93) / 0.65).toFixed(2);
    },
    b92() {
      return parseFloat(this.b92_0).toFixed(0);
    },
    b93() {
      return this.b14;
    },
    b94_0() {
      return Math.pow(parseFloat(this.b25) / parseFloat(this.b93), 0.5).toFixed(
        2
      );
    },
    b95_0() {
      return Math.pow(parseFloat(this.b94), 2).toFixed(3);
    },
    b96() {
      return (
        parseFloat(this.b25) /
        parseFloat(this.b94) /
        parseFloat(this.b94)
      ).toFixed(2);
    },
    b140() {
      return (parseFloat(this.b139) + 2 * 0.2).toFixed(2);
    },
    b101_0() {
      return (parseFloat(this.b25) / parseFloat(this.b92_0)).toFixed(2);
    },
    b102_0() {
      return (parseFloat(this.b94) - parseFloat(this.b140)).toFixed(2);
    },
    b103_0() {
      return (parseFloat(this.b101_0) / parseFloat(this.b102)).toFixed(2);
    },
    b104_0() {
      return (parseFloat(this.b102) * parseFloat(this.b103)).toFixed(3);
    },
    b105_0() {
      return (
        parseFloat(this.b103) +
        (parseFloat(this.b100) / 1000) *
          Math.cos(parseFloat(this.b98) * (Math.PI / 180))
      ).toFixed(2);
    },
    b106_0() {
      return (
        parseFloat(this.b25) /
        parseFloat(this.b102) /
        parseFloat(this.b103)
      ).toFixed(2);
    },
    b106() {
      return this.b106_0;
    },
    b108_0() {
      return ((2 * parseFloat(this.b105)) / 1.5).toFixed(2);
    },
    b109() {
      return (parseFloat(this.b102) / 2).toFixed(2);
    },
    b111_0() {
      return (parseFloat(this.b110) * 1.25).toFixed(2);
    },
    b112_0() {
      return (parseFloat(this.b25) / parseFloat(this.b108)).toFixed(2);
    },
    b112() {
      return this.b112_0;
    },
    b113_0() {
      return (
        Math.pow(3, 0.5) *
        Math.pow(1 / 9.81, 1 / 3) *
        Math.pow(parseFloat(this.b112_0) / 3600 / parseFloat(this.b110), 2 / 3)
      ).toFixed(2);
    },
    b113() {
      return this.b113_0;
    },
    b115_0() {
      return (
        parseFloat(this.b112_0) /
        3600 /
        parseFloat(this.b110) /
        parseFloat(this.b114)
      ).toFixed(2);
    },
    b119_0() {
      return (parseFloat(this.b109) * 8).toFixed(2);
    },
    b120_0() {
      return (parseFloat(this.b112_0) / parseFloat(this.b119)).toFixed(2);
    },
    b123_0() {
      return (
        parseFloat(this.b111) -
        parseFloat(this.b129) -
        parseFloat(this.b115)
      ).toFixed(2);
    },
    b125_0() {
      return (parseFloat(this.b112_0) / 2 / 3600).toFixed(4);
    },
    b126_0() {
      return (1.401 * Math.pow(parseFloat(this.b124), 2.5)).toFixed(4);
    },
    b127_0() {
      return (
        parseFloat(this.b112_0) /
        2 /
        3600 /
        (1.401 * Math.pow(parseFloat(this.b124), 2.5))
      ).toFixed(2);
    },
    b127() {
      return this.ROUND(parseFloat(this.b127_0), 2).toFixed(2);
    },
    b128_0() {
      return Math.pow(
        parseFloat(this.b125_0) / parseFloat(this.b127) / 1.401,
        1 / 2.5
      ).toFixed(2);
    },
    b128() {
      return this.b128_0;
    },
    b130() {
      return (2 * parseFloat(this.b129)).toFixed(2);
    },
    b131_0() {
      return (parseFloat(this.b127) / parseFloat(this.b109)).toFixed(2);
    },
    b132_0() {
      return (parseFloat(this.b131) * parseFloat(this.b109) * 2).toFixed(2);
    },
    b133_0() {
      return ((parseFloat(this.b109) * 2) / parseFloat(this.b132)).toFixed(2);
    },
    b134_0() {
      return (parseFloat(this.b112_0) / parseFloat(this.b132)).toFixed(2);
    },
    b135_0() {
      return this.b123_0;
    },
    b136_0() {
      return (parseFloat(this.b135_0) + parseFloat(this.b124)).toFixed(2);
    },
    b136() {
      return this.b136_0;
    },
    b141_0() {
      return (parseFloat(this.b25) / 3600).toFixed(2);
    },
    b143_0() {
      return (
        parseFloat(this.b158) +
        parseFloat(this.b159) -
        parseFloat(this.b142)
      ).toFixed(2);
    },
    b144_0() {
      return (
        parseFloat(this.b25) /
        3600 /
        parseFloat(this.b143_0) /
        parseFloat(this.b139)
      ).toFixed(2);
    },
    b146_0() {
      return (parseFloat(this.b280) * 4).toFixed(2);
    },
    b150_0() {
      return (
        (1 / 2) *
        (parseFloat(this.b147) - parseFloat(this.b148)) *
        Math.tan(parseFloat(this.b149) * (Math.PI / 180))
      ).toFixed(2);
    },
    b151_0() {
      return (
        ((1 / 3) *
          3.14 *
          parseFloat(this.b150_0) *
          (Math.pow(parseFloat(this.b147), 2) +
            Math.pow(parseFloat(this.b148), 2) +
            parseFloat(this.b147) * parseFloat(this.b148))) /
        4
      ).toFixed(2);
    },
    b153_0() {
      return (
        (parseFloat(this.b152) *
          (parseFloat(this.b94) - parseFloat(this.b147))) /
        2
      ).toFixed(2);
    },
    b154_0() {
      return (
        ((1 / 3) *
          3.14 *
          parseFloat(this.b153_0) *
          (Math.pow(parseFloat(this.b147), 2) +
            Math.pow(parseFloat(this.b148), 2) +
            parseFloat(this.b147) * parseFloat(this.b148))) /
        4
      ).toFixed(2);
    },
    b155_0() {
      return (
        (parseFloat(this.b146_0) -
          parseFloat(this.b151_0) -
          parseFloat(this.b154_0)) /
        Math.pow(parseFloat(this.b94), 2)
      ).toFixed(2);
    },
    b155() {
      return this.b155_0;
    },
    b156_0() {
      return (
        parseFloat(this.b167) +
        parseFloat(this.b168) +
        parseFloat(this.b166)
      ).toFixed(2);
    },
    b156() {
      return this.ROUND(parseFloat(this.b156_0), 2).toFixed(2);
    },
    b157() {
      return this.b111;
    },
    b158() {
      return (parseFloat(this.b110) / 2).toFixed(2);
    },
    b159_0() {
      return (
        (parseFloat(this.b100) *
          Math.sin(parseFloat(this.b98) * (Math.PI / 180))) /
        1000
      ).toFixed(2);
    },
    b159() {
      return this.b159_0;
    },
    b164() {
      return this.b155;
    },
    b165() {
      return this.b153;
    },
    b166() {
      return this.b150;
    },
    b167() {
      return (
        parseFloat(this.b157) +
        parseFloat(this.b158) +
        parseFloat(this.b159) +
        parseFloat(this.b160) +
        parseFloat(this.b161) +
        parseFloat(this.b162) +
        parseFloat(this.b163) +
        parseFloat(this.b164) +
        parseFloat(this.b165) -
        parseFloat(this.b121)
      ).toFixed(2);
    },
    b172() {
      return parseFloat(this.b172_0).toFixed(2);
    },
    b173() {
      return parseFloat(this.b173_0).toFixed(2);
    },
    b175_0() {
      return (parseFloat(this.b173_0) + parseFloat(this.b174)).toFixed(2);
    },
    b175() {
      return parseFloat(this.b175_0).toFixed(2);
    },
    b176_0() {
      return (
        parseFloat(this.b9) /
        parseFloat(this.b172_0) /
        parseFloat(this.b173_0) /
        3600 /
        2
      ).toFixed(3);
    },
    b180_0() {
      return (parseFloat(this.b9) / parseFloat(this.b179) / 1000).toFixed(2);
    },
    b181_0() {
      return (parseFloat(this.b180_0) * 24).toFixed(2);
    },
    b184_0() {
      return (parseFloat(this.b181_0) / (parseFloat(this.b182) / 100)).toFixed(
        2
      );
    },
    b185_0() {
      return (
        (parseFloat(this.b184_0) - parseFloat(this.b181_0)) /
        parseFloat(this.b183) /
        24
      ).toFixed(2);
    },
    b186_0() {
      return (
        (parseFloat(this.b181_0) /
          24 /
          parseFloat(this.b182) /
          parseFloat(this.b183)) *
        1000
      ).toFixed(2);
    },
    b187_0() {
      return (parseFloat(this.b186_0) * 1.3).toFixed(2);
    },
    b187() {
      return parseFloat(this.b187_0).toFixed(2);
    },
    b188_0() {
      return (parseFloat(this.b187) / parseFloat(this.b11)).toFixed(2);
    },
    b191_0() {
      return (parseFloat(this.b9) / parseFloat(this.b190) / 1000).toFixed(2);
    },
    b192_0() {
      return (parseFloat(this.b191_0) * 24).toFixed(2);
    },
    b196_0() {
      return (parseFloat(this.b192_0) / (parseFloat(this.b194) / 100)).toFixed(
        2
      );
    },
    b196() {
      return this.b196_0;
    },
    b197_0() {
      return (
        (parseFloat(this.b196_0) - parseFloat(this.b192_0)) /
        parseFloat(this.b195) /
        24
      ).toFixed(2);
    },
    b197() {
      return parseFloat(this.b197_0).toFixed(1);
    },
    b198_0() {
      return (
        (parseFloat(this.b191_0) /
          parseFloat(this.b195) /
          (parseFloat(this.b193) / 100)) *
        1000
      ).toFixed(2);
    },
    b199_0() {
      return (parseFloat(this.b197_0) + parseFloat(this.b198_0) / 1000).toFixed(
        2
      );
    },
    b200_0() {
      return (parseFloat(this.b198_0) * 1.3).toFixed(2);
    },
    b200() {
      return this.b200_0;
    },
    b201_0() {
      return (parseFloat(this.b200) / parseFloat(this.b11)).toFixed(2);
    },
    b201() {
      return this.b201_0;
    },
    b218_0() {
      return (
        28 *
        (2 * parseFloat(this.b206) -
          parseFloat(this.b204) +
          parseFloat(this.b214) +
          parseFloat(this.b215) +
          parseFloat(this.b216) +
          parseFloat(this.b217))
      ).toFixed(2);
    },
    b221_0() {
      return (
        (parseFloat(this.b218_0) * 74) /
        56 /
        (parseFloat(this.b219) / 100) /
        (parseFloat(this.b220) / 100)
      ).toFixed(2);
    },
    b221() {
      return parseFloat(this.b221_0).toFixed(2);
    },
    b222_0() {
      return ((parseFloat(this.b9) * parseFloat(this.b221)) / 1000).toFixed(2);
    },
    b223_0() {
      return (
        ((parseFloat(this.b9) *
          ((parseFloat(this.b218_0) * 74) /
            56 /
            (parseFloat(this.b219) / 100) /
            (parseFloat(this.b220) / 100))) /
          1000) *
        24
      ).toFixed(2);
    },
    b226_0() {
      return (parseFloat(this.b223_0) / (parseFloat(this.b224) / 100)).toFixed(
        2
      );
    },
    b227_0() {
      return (
        (parseFloat(this.b226_0) - parseFloat(this.b223_0)) /
        parseFloat(this.b225) /
        24
      ).toFixed(2);
    },
    b228_0() {
      return (
        (parseFloat(this.b222_0) /
          (parseFloat(this.b224) / 100) /
          parseFloat(this.b225)) *
        1000
      ).toFixed(2);
    },
    b229_0() {
      return ((parseFloat(this.b228_0) * 1.2) / 1000).toFixed(2);
    },
    b230_0() {
      return (parseFloat(this.b229) / 4).toFixed(2);
    },
    b230() {
      return this.b230_0;
    },
    b234_0() {
      return (
        (53 * (parseFloat(this.b207) + parseFloat(this.b232))) /
        (parseFloat(this.b233) / 100)
      ).toFixed(2);
    },
    b234() {
      return this.b234_0;
    },
    b235_0() {
      return (
        (parseFloat(this.b9) *
          ((53 * (parseFloat(this.b207) + parseFloat(this.b232))) /
            (parseFloat(this.b233) / 100))) /
        1000
      ).toFixed(2);
    },
    b236_0() {
      return (
        ((parseFloat(this.b9) *
          ((53 * (parseFloat(this.b207) + parseFloat(this.b232))) /
            (parseFloat(this.b233) / 100))) /
          1000) *
        24
      ).toFixed(2);
    },
    b239_0() {
      return (
        (((parseFloat(this.b9) *
          ((53 * (parseFloat(this.b207) + parseFloat(this.b232))) /
            (parseFloat(this.b233) / 100))) /
          1000) *
          24) /
        (parseFloat(this.b237) / 100)
      ).toFixed(2);
    },
    b240_0() {
      return (
        parseFloat(this.b239_0) -
        parseFloat(this.b236_0) / parseFloat(this.b238) / 24
      ).toFixed(2);
    },
    b241_0() {
      return (
        (parseFloat(this.b235_0) /
          (parseFloat(this.b237) / 100) /
          parseFloat(this.b238)) *
        1000
      ).toFixed(2);
    },
    b242_0() {
      return ((parseFloat(this.b241_0) * 1.2) / 1000).toFixed(2);
    },
    b242() {
      return this.b242_0;
    },
    b246_0() {
      return ((parseFloat(this.b9) * parseFloat(this.b245)) / 1000).toFixed(2);
    },
    b248_0() {
      return (parseFloat(this.b246_0) * 24).toFixed(2);
    },
    b249_0() {
      return (parseFloat(this.b248_0) / (parseFloat(this.b247) / 100)).toFixed(
        2
      );
    },
    b251_0() {
      return (parseFloat(this.b249_0) / parseFloat(this.b250)).toFixed(2);
    },
    b251() {
      return this.b251_0;
    },
    b252_0() {
      return ((parseFloat(this.b251) / 24) * 1000).toFixed(2);
    },
    b253_0() {
      return (parseFloat(this.b252_0) * 1.2).toFixed(2);
    },
    b253() {
      return this.b253_0;
    },
    b257_0() {
      return ((parseFloat(this.b256) / 100) * parseFloat(this.b25)).toFixed(2);
    },
    b263_0() {
      return (
        (parseFloat(this.b9) *
          parseFloat(this.b262) *
          (parseFloat(this.b260_0) - parseFloat(this.b261_0))) /
        1000
      ).toFixed(2);
    },
    b264_0() {
      return this.b179;
    },
    b266_0() {
      return (
        (parseFloat(this.b264_0) *
          parseFloat(this.b9) *
          parseFloat(this.b265)) /
        1000
      ).toFixed(2);
    },
    b267_0() {
      return this.b190;
    },
    b268_0() {
      return ((parseFloat(this.b267_0) * parseFloat(this.b9)) / 1000).toFixed(
        2
      );
    },
    b269_0() {
      return this.b221;
    },
    b270_0() {
      return (
        (((parseFloat(this.b9) *
          parseFloat(this.b269_0) *
          (parseFloat(this.b219) / 100)) /
          1000) *
          200) /
        74
      ).toFixed(2);
    },
    b271_0() {
      return (
        (parseFloat(this.b9) *
          parseFloat(this.b269_0) *
          (1 - parseFloat(this.b219) / 100)) /
        1000
      ).toFixed(2);
    },
    b272_0() {
      return (parseFloat(this.b270_0) + parseFloat(this.b271_0)).toFixed(2);
    },
    b273_0() {
      return parseFloat(this.b234).toFixed(2);
    },
    b274_0() {
      return (
        (((parseFloat(this.b9) *
          parseFloat(this.b273_0) *
          (parseFloat(this.b233) / 100)) /
          1000) *
          100) /
        106
      ).toFixed(2);
    },
    b276_0() {
      return (
        parseFloat(this.b263_0) +
        parseFloat(this.b266_0) +
        parseFloat(this.b268_0) +
        parseFloat(this.b272_0) +
        parseFloat(this.b274_0)
      ).toFixed(2);
    },
    b276() {
      return this.b276_0;
    },
    b277_0() {
      return (parseFloat(this.b276) * 24).toFixed(2);
    },
    b277() {
      return this.b277_0;
    },
    b279_0() {
      return ((1 - parseFloat(this.b278) / 1000) * 100).toFixed(1);
    },
    b280_0() {
      return (
        parseFloat(this.b276_0) /
        (1 - parseFloat(this.b279_0) / 100) /
        1000
      ).toFixed(2);
    },
    b280() {
      return this.b280_0;
    },
    b281_0() {
      return (parseFloat(this.b280) * 24).toFixed(2);
    },
    b281() {
      return this.b281_0;
    },
    b282_0() {
      return this.b257;
    },
    b283_0() {
      return (
        (parseFloat(this.b280) /
          parseFloat(this.b11) /
          parseFloat(this.b282_0)) *
        60
      ).toFixed(3);
    },
    b289() {
      return (116.5 * 9.8 * 0.000001).toFixed(5);
    },
    b290_0() {
      return (
        (parseFloat(this.b289) *
          Math.pow(parseFloat(this.b287), 2) *
          parseFloat(this.b37_0)) /
        1000
      ).toFixed(2);
    },
    b293_0() {
      return (
        parseFloat(this.b290_0) /
        (parseFloat(this.b291) * parseFloat(this.b292))
      ).toFixed(2);
    },
    b294_0() {
      return ((2 * parseFloat(this.b42)) / Math.sqrt(3.14)).toFixed(2);
    },
    b295_0() {
      return (parseFloat(this.b38) / parseFloat(this.b294_0)).toFixed(2);
    },
    b297_0() {
      return ((1 / 3) * parseFloat(this.b294_0)).toFixed(2);
    },
    b297() {
      return this.ROUND(parseFloat(this.b297_0), 2).toFixed(2);
    },
    b299_0() {
      return (
        (60 * parseFloat(this.b298)) /
        3.14 /
        parseFloat(this.b297)
      ).toFixed(2);
    },
    b299() {
      return this.ROUND(parseFloat(this.b299_0), 2).toFixed(0);
    },
    b300_0() {
      return (((1 / 3) * parseFloat(this.b294_0)) / 2).toFixed(2);
    },
    b300() {
      return this.b300_0;
    },
    b304_0() {
      return (parseFloat(this.b303) * parseFloat(this.b25)) / 1000;
    },
    b304() {
      return this.b304_0;
    },
    b307_0() {
      return Math.pow(
        (parseFloat(this.b304_0) * 1000) /
          (31.61 * Math.pow(parseFloat(this.b306), 3)),
        0.5
      ).toFixed(2);
    },
    b307() {
      return this.ROUND(parseFloat(this.b307_0), 2).toFixed(2);
    },
    b308_0() {
      return (
        (60 * parseFloat(this.b305)) /
        3.14 /
        parseFloat(this.b307)
      ).toFixed(2);
    },
    b309_0() {
      return (
        (60 * parseFloat(this.b306)) /
        3.14 /
        parseFloat(this.b307)
      ).toFixed(2);
    },
    b310_0() {
      return (
        980 *
        parseFloat(this.b306) *
        Math.pow(parseFloat(this.b307), 2)
      ).toFixed(2);
    },
    b310() {
      return this.b310_0;
    },
    b311_0() {
      return (1.1 * parseFloat(this.b307)).toFixed(2);
    },
    b311() {
      return (1.1 * parseFloat(this.b307)).toFixed(2);
    },
    b314_0() {
      return (parseFloat(this.b310) / 3600).toFixed(2);
    },
    b315_0() {
      return (1.03 * parseFloat(this.b307)).toFixed(2);
    },
    b315() {
      return this.ROUND(parseFloat(this.b315_0), 2).toFixed(2);
    },
    b316_0() {
      return (
        (4 * (parseFloat(this.b310) / 3600)) /
        (3.14 *
          this.ROUND(parseFloat(this.b315_0), 2) *
          this.ROUND(parseFloat(this.b315_0), 2))
      ).toFixed(2);
    },
    b318() {
      return (1.4 * parseFloat(this.b307)).toFixed(2);
    },
    b319() {
      return (
        (1.732 * (parseFloat(this.b318) - parseFloat(this.b315))) /
        2
      ).toFixed(2);
    },
    b320() {
      return (0.4 * parseFloat(this.b307)).toFixed(2);
    },
    b321() {
      return (0.3 * parseFloat(this.b307)).toFixed(2);
    },
    b322() {
      return this.ROUND(
        parseFloat(this.b71) -
          parseFloat(this.b70) -
          parseFloat(this.b320) -
          parseFloat(this.b321),
        2
      ).toFixed(2);
    },
    b326_0() {
      return (
        Math.sqrt(
          ((parseFloat(this.b199_0) /
            2 /
            parseFloat(this.b11) /
            3600 /
            parseFloat(this.b325)) *
            4) /
            Math.PI
        ) * 1000
      ).toFixed(2);
    },
    b327_0() {
      return (0.25 * parseFloat(this.b199_0)).toFixed(2);
    },
    b330_0() {
      return (
        (4 * parseFloat(this.b327_0)) /
        3600 /
        3.142 /
        Math.pow(parseFloat(this.b329) / 1000, 2) /
        parseFloat(this.b328)
      ).toFixed(2);
    },
    b331_0() {
      return (
        (4 * parseFloat(this.b327_0)) /
        3600 /
        parseFloat(this.b330) /
        3.14 /
        Math.pow(parseFloat(this.b329) / 1000, 2)
      ).toFixed(2);
    },
    b332_0() {
      return (0.7 * parseFloat(this.b315)).toFixed(2);
    },
    b337() {
      return (parseFloat(this.b335) + parseFloat(this.b336)).toFixed(2);
    },
    b338() {
      return this.b257;
    },
    b342_s() {
      return (parseFloat(this.b338) / 3600).toFixed(3);
    },
    b342() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b342_3() {
      return (
        ((6.82 * parseFloat(this.b342_1)) /
          Math.pow(parseFloat(this.b342_0) / 1000, 1.17)) *
        Math.pow(parseFloat(this.b342) / parseFloat(this.b342_2), 1.85)
      ).toFixed(3);
    },
    b343_s() {
      return this.b342_s;
    },
    b343() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b343_3() {
      return (
        ((6.82 * parseFloat(this.b343_1)) /
          Math.pow(parseFloat(this.b343_0) / 1000, 1.17)) *
        Math.pow(parseFloat(this.b343) / parseFloat(this.b343_2), 1.85)
      ).toFixed(3);
    },
    b344_3() {
      return (parseFloat(this.b342_3) + parseFloat(this.b343_3)).toFixed(4);
    },
    b348_s() {
      return this.b342_s;
    },
    b349_s() {
      return this.b342_s;
    },
    b350_s() {
      return this.b342_s;
    },
    b351_s() {
      return this.b342_s;
    },
    b352_s() {
      return this.b342_s;
    },
    b353_s() {
      return this.b342_s;
    },
    b354_s() {
      return this.b342_s;
    },
    b355_s() {
      return this.b342_s;
    },
    b356_s() {
      return this.b342_s;
    },
    b358_s() {
      return this.b342_s;
    },
    b359_s() {
      return this.b342_s;
    },
    b360_s() {
      return this.b342_s;
    },
    b361_s() {
      return this.b342_s;
    },
    b362_s() {
      return this.b342_s;
    },
    b364_s() {
      return this.b342_s;
    },
    b365_s() {
      return this.b342_s;
    },
    b366_s() {
      return this.b342_s;
    },
    b348_0() {
      return this.b342_0;
    },
    b349_0() {
      return this.b342_0;
    },
    b350_0() {
      return this.b342_0;
    },
    b351_0() {
      return this.b342_0;
    },
    b352_0() {
      return this.b342_0;
    },
    b353_0() {
      return this.b342_0;
    },
    b354_0() {
      return this.b342_0;
    },
    b355_0() {
      return this.b342_0;
    },
    b356_0() {
      return this.b342_0;
    },
    b358_0() {
      return this.b343_0;
    },
    b359_0() {
      return this.b343_0;
    },
    b360_0() {
      return this.b343_0;
    },
    b361_0() {
      return this.b343_0;
    },
    b362_0() {
      return this.b343_0;
    },
    b364_0() {
      return this.b343_0;
    },
    b365_0() {
      return this.b343_0;
    },
    b366_0() {
      return this.b343_0;
    },
    b348() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b349() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b350() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b351() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b352() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b353() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b354() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b355() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b356() {
      return (
        (4 * parseFloat(this.b342_s)) /
        (3.14 * Math.pow(parseFloat(this.b342_0) / 1000, 2))
      ).toFixed(2);
    },
    b358() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b359() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b360() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b361() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b362() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b364() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b365() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b366() {
      return (
        (4 * (parseFloat(this.b338) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b343_0) / 1000, 2))
      ).toFixed(2);
    },
    b348_3() {
      return (
        (parseFloat(this.b348_2) *
          parseFloat(this.b348_1) *
          Math.pow(parseFloat(this.b348), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b349_3() {
      return (
        (parseFloat(this.b349_2) *
          parseFloat(this.b349_1) *
          Math.pow(parseFloat(this.b349), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b350_3() {
      return (
        (parseFloat(this.b350_2) *
          parseFloat(this.b350_1) *
          Math.pow(parseFloat(this.b350), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b351_3() {
      return (
        (parseFloat(this.b351_2) *
          parseFloat(this.b351_1) *
          Math.pow(parseFloat(this.b351), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b352_3() {
      return (
        (parseFloat(this.b352_2) *
          parseFloat(this.b352_1) *
          Math.pow(parseFloat(this.b352), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b353_3() {
      return (
        (parseFloat(this.b353_2) *
          parseFloat(this.b353_1) *
          Math.pow(parseFloat(this.b353), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b354_3() {
      return (
        (parseFloat(this.b354_2) *
          parseFloat(this.b354_1) *
          Math.pow(parseFloat(this.b354), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b355_3() {
      return (
        (parseFloat(this.b355_2) *
          parseFloat(this.b355_1) *
          Math.pow(parseFloat(this.b355), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b356_3() {
      return (
        (parseFloat(this.b356_2) *
          parseFloat(this.b356_1) *
          Math.pow(parseFloat(this.b356), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b358_3() {
      return (
        (parseFloat(this.b358_2) *
          parseFloat(this.b358_1) *
          Math.pow(parseFloat(this.b358), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b359_3() {
      return (
        (parseFloat(this.b359_2) *
          parseFloat(this.b359_1) *
          Math.pow(parseFloat(this.b359), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b360_3() {
      return (
        (parseFloat(this.b360_2) *
          parseFloat(this.b360_1) *
          Math.pow(parseFloat(this.b360), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b361_3() {
      return (
        (parseFloat(this.b361_2) *
          parseFloat(this.b361_1) *
          Math.pow(parseFloat(this.b361), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b362_3() {
      return (
        (parseFloat(this.b362_2) *
          parseFloat(this.b362_1) *
          Math.pow(parseFloat(this.b362), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b364_3() {
      return (
        (parseFloat(this.b364_2) *
          parseFloat(this.b364_1) *
          Math.pow(parseFloat(this.b364), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b365_3() {
      return (
        (parseFloat(this.b365_2) *
          parseFloat(this.b365_1) *
          Math.pow(parseFloat(this.b365), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b366_3() {
      return (
        (parseFloat(this.b366_2) *
          parseFloat(this.b366_1) *
          Math.pow(parseFloat(this.b366), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b367_3() {
      return (
        parseFloat(this.b348_3) +
        parseFloat(this.b349_3) +
        parseFloat(this.b350_3) +
        parseFloat(this.b351_3) +
        parseFloat(this.b352_3) +
        parseFloat(this.b353_3) +
        parseFloat(this.b354_3) +
        parseFloat(this.b355_3) +
        parseFloat(this.b356_3) +
        parseFloat(this.b358_3) +
        parseFloat(this.b359_3) +
        parseFloat(this.b360_3) +
        parseFloat(this.b361_3) +
        parseFloat(this.b362_3) +
        parseFloat(this.b364_3) +
        parseFloat(this.b365_3) +
        parseFloat(this.b366_3)
      ).toFixed(3);
    },
    b368_3() {
      return (
        (parseFloat(this.b367_3) + parseFloat(this.b344_3)) *
        1.3
      ).toFixed(3);
    },
    b370_3() {
      return (parseFloat(this.b370) - parseFloat(this.b370_1)).toFixed(1);
    },
    b372_3() {
      return (
        parseFloat(this.b368_3) +
        parseFloat(this.b370_3) +
        parseFloat(this.b371_3)
      ).toFixed(3);
    },
    b379() {
      return this.b338;
    },
    b383_s() {
      return (parseFloat(this.b379) / 3600).toFixed(3);
    },
    b383() {
      return (
        (4 * parseFloat(this.b383_s)) /
        (3.14 * Math.pow(parseFloat(this.b383_0) / 1000, 2))
      ).toFixed(2);
    },
    b383_3() {
      return (
        ((6.82 * parseFloat(this.b383_1)) /
          Math.pow(parseFloat(this.b383_0) / 1000, 1.17)) *
        Math.pow(parseFloat(this.b383) / parseFloat(this.b383_2), 1.85)
      ).toFixed(3);
    },
    b384_s() {
      return this.b383_s;
    },
    b384() {
      return (
        (4 * (parseFloat(this.b379) / 3600)) /
        (3.14 * Math.pow(parseFloat(this.b384_0) / 1000, 2))
      ).toFixed(2);
    },
    b384_3() {
      return (
        ((6.82 * parseFloat(this.b384_1)) /
          Math.pow(parseFloat(this.b384_0) / 1000, 1.17)) *
        Math.pow(parseFloat(this.b384) / parseFloat(this.b384_2), 1.85)
      ).toFixed(3);
    },
    b385_3() {
      return (parseFloat(this.b383_3) + parseFloat(this.b384_3)).toFixed(3);
    },
    b389_0() {
      return this.b383_0;
    },
    b390_0() {
      return this.b383_0;
    },
    b391_0() {
      return this.b383_0;
    },
    b392_0() {
      return this.b383_0;
    },
    b393_0() {
      return this.b383_0;
    },
    b394_0() {
      return this.b383_0;
    },
    b395_0() {
      return this.b383_0;
    },
    b396_0() {
      return this.b383_0;
    },
    b398_0() {
      return this.b384_0;
    },
    b399_0() {
      return this.b384_0;
    },
    b400_0() {
      return this.b384_0;
    },
    b401_0() {
      return this.b384_0;
    },
    b402_0() {
      return this.b384_0;
    },
    b403_0() {
      return this.b384_0;
    },
    b404_0() {
      return this.b384_0;
    },
    b389_s() {
      return this.b383_s;
    },
    b390_s() {
      return this.b383_s;
    },
    b391_s() {
      return this.b383_s;
    },
    b392_s() {
      return this.b383_s;
    },
    b393_s() {
      return this.b383_s;
    },
    b394_s() {
      return this.b383_s;
    },
    b395_s() {
      return this.b383_s;
    },
    b396_s() {
      return this.b383_s;
    },
    b398_s() {
      return this.b383_s;
    },
    b399_s() {
      return this.b383_s;
    },
    b400_s() {
      return this.b383_s;
    },
    b401_s() {
      return this.b383_s;
    },
    b402_s() {
      return this.b383_s;
    },
    b403_s() {
      return this.b383_s;
    },
    b404_s() {
      return this.b383_s;
    },
    b389() {
      return this.b383;
    },
    b390() {
      return this.b383;
    },
    b391() {
      return this.b383;
    },
    b392() {
      return this.b383;
    },
    b393() {
      return this.b383;
    },
    b394() {
      return this.b383;
    },
    b395() {
      return this.b383;
    },
    b396() {
      return this.b383;
    },
    b398() {
      return this.b384;
    },
    b399() {
      return this.b384;
    },
    b400() {
      return this.b384;
    },
    b401() {
      return this.b383;
    },
    b402() {
      return this.b384;
    },
    b403() {
      return this.b384;
    },
    b404() {
      return this.b384;
    },
    b389_3() {
      return (
        (parseFloat(this.b389_2) *
          parseFloat(this.b389_1) *
          Math.pow(parseFloat(this.b389), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b390_3() {
      return (
        (parseFloat(this.b390_2) *
          parseFloat(this.b390_1) *
          Math.pow(parseFloat(this.b390), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b391_3() {
      return (
        (parseFloat(this.b391_2) *
          parseFloat(this.b391_1) *
          Math.pow(parseFloat(this.b391), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b392_3() {
      return (
        (parseFloat(this.b392_2) *
          parseFloat(this.b392_1) *
          Math.pow(parseFloat(this.b392), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b393_3() {
      return (
        (parseFloat(this.b393_2) *
          parseFloat(this.b393_1) *
          Math.pow(parseFloat(this.b393), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b394_3() {
      return (
        (parseFloat(this.b394_2) *
          parseFloat(this.b394_1) *
          Math.pow(parseFloat(this.b394), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b395_3() {
      return (
        (parseFloat(this.b395_2) *
          parseFloat(this.b395_1) *
          Math.pow(parseFloat(this.b395), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b396_3() {
      return (
        (parseFloat(this.b396_2) *
          parseFloat(this.b396_1) *
          Math.pow(parseFloat(this.b396), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b398_3() {
      return (
        (parseFloat(this.b398_2) *
          parseFloat(this.b398_1) *
          Math.pow(parseFloat(this.b398), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b399_3() {
      return (
        (parseFloat(this.b399_2) *
          parseFloat(this.b399_1) *
          Math.pow(parseFloat(this.b399), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b400_3() {
      return (
        (parseFloat(this.b400_2) *
          parseFloat(this.b400_1) *
          Math.pow(parseFloat(this.b400), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b401_3() {
      return (
        (parseFloat(this.b401_2) *
          parseFloat(this.b401_1) *
          Math.pow(parseFloat(this.b401), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b402_3() {
      return (
        (parseFloat(this.b402_2) *
          parseFloat(this.b402_1) *
          Math.pow(parseFloat(this.b402), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b403_3() {
      return (
        (parseFloat(this.b403_2) *
          parseFloat(this.b403_1) *
          Math.pow(parseFloat(this.b403), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b404_3() {
      return (
        (parseFloat(this.b404_2) *
          parseFloat(this.b404_1) *
          Math.pow(parseFloat(this.b404), 2)) /
        (2 * 9.81)
      ).toFixed(3);
    },
    b405_3() {
      return (
        parseFloat(this.b389_3) +
        parseFloat(this.b390_3) +
        parseFloat(this.b391_3) +
        parseFloat(this.b392_3) +
        parseFloat(this.b393_3) +
        parseFloat(this.b394_3) +
        parseFloat(this.b395_3) +
        parseFloat(this.b396_3) +
        parseFloat(this.b398_3) +
        parseFloat(this.b399_3) +
        parseFloat(this.b400_3) +
        parseFloat(this.b401_3) +
        parseFloat(this.b402_3) +
        parseFloat(this.b403_3) +
        parseFloat(this.b404_3)
      ).toFixed(3);
    },
    b406_3() {
      return (
        (parseFloat(this.b405_3) + parseFloat(this.b385_3)) *
        1.3
      ).toFixed(3);
    },
    b408_3() {
      return (parseFloat(this.b408) - parseFloat(this.b408_0)).toFixed(2);
    },
    b410_3() {
      return (
        parseFloat(this.b406_3) +
        parseFloat(this.b408_3) +
        parseFloat(this.b409_3)
      ).toFixed(3);
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "混合池",
          尺寸: this.get_a_1_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_1_2(),
          结构形式: "钢砼",
          备注: "地上，无盖；池顶设置走道及栏杆。",
          暖通要求: "无",
        },
        {
          序号: "2",
          单体位号: "",
          名称: "絮凝区",
          尺寸: this.get_a_2_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_2_2(),
          结构形式: "钢砼",
          备注: "地上，无盖；池顶设置走道及栏杆。",
          暖通要求: "无",
        },
        {
          序号: "3",
          单体位号: "",
          名称: "沉淀区",
          尺寸: this.get_a_3_1(),
          标高: "",
          单位: "座",
          数量: this.get_a_3_2(),
          结构形式: "钢砼",
          备注: "地上，无盖；池顶设置走道及栏杆。",
          暖通要求: "无",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "刮泥机",
          设备类型: "中心传动刮泥机",
          规格及型号: this.get_b_1_1(),
          单位: "套",
          数量: this.get_b_1_2(),
          备注: "配冷却风扇",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "斜管填料",
          设备类型: "斜管蜂窝填料",
          规格及型号: this.get_b_2_1(),
          单位: "m²",
          数量: this.get_b_2_2(),
          备注: "含碳钢防腐支撑",
          主要材质: "乙丙共聚",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "3",
          设备位号: "",
          设备工艺名称: "高密池集水槽",
          设备类型: "",
          规格及型号: this.get_b_3_1(),
          单位: "套",
          数量: this.get_b_3_2(),
          备注: "",
          主要材质: "SS304",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "4",
          设备位号: "",
          设备工艺名称: "进水堰板",
          设备类型: "可调堰板",
          规格及型号: this.get_b_4_1(),
          单位: "个",
          数量: this.get_b_4_2(),
          备注: "",
          主要材质: "SS304",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "5",
          设备位号: "",
          设备工艺名称: "进水闸门",
          设备类型: "方形闸板阀",
          规格及型号: this.get_b_5_1(),
          单位: "套",
          数量: this.get_b_5_2(),
          备注: "",
          主要材质: "闸框铸铁，闸板球墨铸铁",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "6",
          设备位号: "",
          设备工艺名称: "出水闸门",
          设备类型: "方形闸板阀",
          规格及型号: this.get_b_6_1(),
          单位: "套",
          数量: this.get_b_6_2(),
          备注: "",
          主要材质: "闸框铸铁，闸板球墨铸铁",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "7",
          设备位号: "",
          设备工艺名称: "导流筒",
          设备类型: "",
          规格及型号: this.get_b_7_1(),
          单位: "个",
          数量: this.get_b_7_2(),
          备注: "",
          主要材质: "SS304",
          生产厂家: "需要厂家确认",
          与基础设计不同之处: "",
        },
        {
          序号: "8",
          设备位号: "",
          设备工艺名称: "PAM投加环",
          设备类型: "",
          规格及型号: this.get_b_8_1(),
          单位: "套",
          数量: this.get_b_8_2(),
          备注: "",
          主要材质: "SS304",
          生产厂家: "需要厂家确认",
          与基础设计不同之处: "",
        },
        {
          序号: "9",
          设备位号: "",
          设备工艺名称: "Na2CO3投加环",
          设备类型: "",
          规格及型号: this.get_b_9_1(),
          单位: "套",
          数量: this.get_b_9_2(),
          备注: "",
          主要材质: "SS304",
          生产厂家: "需要厂家确认",
          与基础设计不同之处: "",
        },
        {
          序号: "10",
          设备位号: "",
          设备工艺名称: "混合池搅拌机",
          设备类型: "桨叶式搅拌机",
          规格及型号: this.get_b_10_1(),
          单位: "台",
          数量: this.get_b_10_2(),
          备注: "桨叶形式：单层",
          主要材质: "桨叶：SS304",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "11",
          设备位号: "",
          设备工艺名称: "絮凝池搅拌机",
          设备类型: "提升式搅拌机",
          规格及型号: this.get_b_11_1(),
          单位: "台",
          数量: this.get_b_11_2(),
          备注: "桨叶形式：单层，变频，",
          主要材质: "桨叶：SS304",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "12",
          设备位号: "",
          设备工艺名称: "污泥排放泵",
          设备类型: "单螺杆泵",
          规格及型号: this.get_b_12_1(),
          单位: "台",
          数量: this.get_b_12_2(),
          备注: "",
          主要材质: "转子：工具钢，定子：丁腈橡胶 ",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "13",
          设备位号: "",
          设备工艺名称: "污泥回流泵",
          设备类型: "单螺杆泵",
          规格及型号: this.get_b_13_1(),
          单位: "台",
          数量: this.get_b_13_2(),
          备注: "4用4备",
          主要材质: "转子：工具钢，定子：丁腈橡胶 ",
          生产厂家: "",
          与基础设计不同之处: "",
        },
        {
          序号: "14",
          设备位号: "",
          设备工艺名称: "撇渣器",
          设备类型: "手动撇渣器",
          规格及型号: this.get_b_14_1(),
          单位: "台",
          数量: this.get_b_14_2(),
          备注: "带撇渣管及手动控制器",
          主要材质: "",
          生产厂家: "",
          与基础设计不同之处: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "",
          安装位置: "进水管",
          仪表名称: "超声波流量计",
          规格及型号: this.get_c_1_1(),
          单位: "台",
          数量: this.get_c_1_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
        {
          序号: "2",
          仪表位号: "",
          安装位置: "进水渠",
          仪表名称: "浮球液位开关",
          规格及型号: this.get_c_2_1(),
          单位: "个",
          数量: this.get_c_2_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
        {
          序号: "3",
          仪表位号: "",
          安装位置: "进水渠",
          仪表名称: "pH/T在线监测仪",
          规格及型号: this.get_c_3_1(),
          单位: "台",
          数量: this.get_c_3_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
        {
          序号: "4",
          仪表位号: "",
          安装位置: "进水渠",
          仪表名称: "浊度仪",
          规格及型号: this.get_c_4_1(),
          单位: "台",
          数量: this.get_c_4_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
        {
          序号: "5",
          仪表位号: "",
          安装位置: "沉淀池池壁",
          仪表名称: "超声波泥位计",
          规格及型号: this.get_c_5_1(),
          单位: "台",
          数量: this.get_c_5_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
        {
          序号: "6",
          仪表位号: "",
          安装位置: "污泥排放泵出口",
          仪表名称: "就地压力表",
          规格及型号: this.get_c_6_1(),
          单位: "台",
          数量: this.get_c_6_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
        {
          序号: "7",
          仪表位号: "",
          安装位置: "污泥回流泵出口",
          仪表名称: "就地压力表",
          规格及型号: this.get_c_7_1(),
          单位: "台",
          数量: this.get_c_7_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
        {
          序号: "8",
          仪表位号: "",
          安装位置: "污泥回流泵出口管路",
          仪表名称: "污泥回流电磁流量计",
          规格及型号: this.get_c_8_1(),
          单位: "台",
          数量: this.get_c_8_2(),
          备注: "",
          生产厂家: "",
          a: "",
          与基础设计不同处: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("3003-activated被调用了");
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
        名称: "混合池",
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_1_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
      {
        序号: "2",
        单体位号: "",
        名称: "絮凝区",
        尺寸: this.get_a_2_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_2_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
      {
        序号: "3",
        单体位号: "",
        名称: "沉淀区",
        尺寸: this.get_a_3_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_3_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "刮泥机",
        设备类型: "中心传动刮泥机",
        规格及型号: this.get_b_1_1(),
        单位: "套",
        数量: this.get_b_1_2(),
        备注: "配冷却风扇",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "斜管填料",
        设备类型: "斜管蜂窝填料",
        规格及型号: this.get_b_2_1(),
        单位: "m²",
        数量: this.get_b_2_2(),
        备注: "含碳钢防腐支撑",
        主要材质: "乙丙共聚",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "3",
        设备位号: "",
        设备工艺名称: "高密池集水槽",
        设备类型: "",
        规格及型号: this.get_b_3_1(),
        单位: "套",
        数量: this.get_b_3_2(),
        备注: "",
        主要材质: "SS304",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "4",
        设备位号: "",
        设备工艺名称: "进水堰板",
        设备类型: "可调堰板",
        规格及型号: this.get_b_4_1(),
        单位: "个",
        数量: this.get_b_4_2(),
        备注: "",
        主要材质: "SS304",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "5",
        设备位号: "",
        设备工艺名称: "进水闸门",
        设备类型: "方形闸板阀",
        规格及型号: this.get_b_5_1(),
        单位: "套",
        数量: this.get_b_5_2(),
        备注: "",
        主要材质: "闸框铸铁，闸板球墨铸铁",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "6",
        设备位号: "",
        设备工艺名称: "出水闸门",
        设备类型: "方形闸板阀",
        规格及型号: this.get_b_6_1(),
        单位: "套",
        数量: this.get_b_6_2(),
        备注: "",
        主要材质: "闸框铸铁，闸板球墨铸铁",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "7",
        设备位号: "",
        设备工艺名称: "导流筒",
        设备类型: "",
        规格及型号: this.get_b_7_1(),
        单位: "个",
        数量: this.get_b_7_2(),
        备注: "",
        主要材质: "SS304",
        生产厂家: "需要厂家确认",
        与基础设计不同之处: "",
      },
      {
        序号: "8",
        设备位号: "",
        设备工艺名称: "PAM投加环",
        设备类型: "",
        规格及型号: this.get_b_8_1(),
        单位: "套",
        数量: this.get_b_8_2(),
        备注: "",
        主要材质: "SS304",
        生产厂家: "需要厂家确认",
        与基础设计不同之处: "",
      },
      {
        序号: "9",
        设备位号: "",
        设备工艺名称: "Na2CO3投加环",
        设备类型: "",
        规格及型号: this.get_b_9_1(),
        单位: "套",
        数量: this.get_b_9_2(),
        备注: "",
        主要材质: "SS304",
        生产厂家: "需要厂家确认",
        与基础设计不同之处: "",
      },
      {
        序号: "10",
        设备位号: "",
        设备工艺名称: "混合池搅拌机",
        设备类型: "桨叶式搅拌机",
        规格及型号: this.get_b_10_1(),
        单位: "台",
        数量: this.get_b_10_2(),
        备注: "桨叶形式：单层",
        主要材质: "桨叶：SS304",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "11",
        设备位号: "",
        设备工艺名称: "絮凝池搅拌机",
        设备类型: "提升式搅拌机",
        规格及型号: this.get_b_11_1(),
        单位: "台",
        数量: this.get_b_11_2(),
        备注: "桨叶形式：单层，变频，",
        主要材质: "桨叶：SS304",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "12",
        设备位号: "",
        设备工艺名称: "污泥排放泵",
        设备类型: "单螺杆泵",
        规格及型号: this.get_b_12_1(),
        单位: "台",
        数量: this.get_b_12_2(),
        备注: "",
        主要材质: "转子：工具钢，定子：丁腈橡胶 ",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "13",
        设备位号: "",
        设备工艺名称: "污泥回流泵",
        设备类型: "单螺杆泵",
        规格及型号: this.get_b_13_1(),
        单位: "台",
        数量: this.get_b_13_2(),
        备注: "4用4备",
        主要材质: "转子：工具钢，定子：丁腈橡胶 ",
        生产厂家: "",
        与基础设计不同之处: "",
      },
      {
        序号: "14",
        设备位号: "",
        设备工艺名称: "撇渣器",
        设备类型: "手动撇渣器",
        规格及型号: this.get_b_14_1(),
        单位: "台",
        数量: this.get_b_14_2(),
        备注: "带撇渣管及手动控制器",
        主要材质: "",
        生产厂家: "",
        与基础设计不同之处: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        安装位置: "进水管",
        仪表名称: "超声波流量计",
        规格及型号: this.get_c_1_1(),
        单位: "台",
        数量: this.get_c_1_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "进水渠",
        仪表名称: "浮球液位开关",
        规格及型号: this.get_c_2_1(),
        单位: "个",
        数量: this.get_c_2_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "进水渠",
        仪表名称: "pH/T在线监测仪",
        规格及型号: this.get_c_3_1(),
        单位: "台",
        数量: this.get_c_3_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
      {
        序号: "4",
        仪表位号: "",
        安装位置: "进水渠",
        仪表名称: "浊度仪",
        规格及型号: this.get_c_4_1(),
        单位: "台",
        数量: this.get_c_4_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
      {
        序号: "5",
        仪表位号: "",
        安装位置: "沉淀池池壁",
        仪表名称: "超声波泥位计",
        规格及型号: this.get_c_5_1(),
        单位: "台",
        数量: this.get_c_5_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
      {
        序号: "6",
        仪表位号: "",
        安装位置: "污泥排放泵出口",
        仪表名称: "就地压力表",
        规格及型号: this.get_c_6_1(),
        单位: "台",
        数量: this.get_c_6_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
      {
        序号: "7",
        仪表位号: "",
        安装位置: "污泥回流泵出口",
        仪表名称: "就地压力表",
        规格及型号: this.get_c_7_1(),
        单位: "台",
        数量: this.get_c_7_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
      {
        序号: "8",
        仪表位号: "",
        安装位置: "污泥回流泵出口管路",
        仪表名称: "污泥回流电磁流量计",
        规格及型号: this.get_c_8_1(),
        单位: "台",
        数量: this.get_c_8_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
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
