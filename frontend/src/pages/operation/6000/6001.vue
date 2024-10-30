<template>
  <div class="calc_page" style="background-color: #edeff2">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px; margin-left: 0px"
        :xl="8"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :title="$t('baseQueryParam')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
        <a slot="extra" href="#">
            <div class="" style="">
              <a-button type="primary" @click="refreshInitData" icon="sync" size="small">
                {{ $t("refresh") }}</a-button
              >
            </div>
          </a>
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('designScale')"
                style="margin-top: 10px"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="designScale"
                  :placeholder="$t('designScale')"
                  :suffix="$t('designScaleUnit')"
                  value="20000.00"
                  :disabled="false"
                  @change="refreshInitData()"
                />
              </a-form-item>
              <a-form-item
                :label="$t('totalChangeFactor')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="totalChangeFactor"
                  :placeholder="$t('totalChangeFactor')"
                  value="1"
                  @change="refreshInitData()"
                />
              </a-form-item>
              <a-form-item
                :label="$t('singleTankVolume')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="singleTankVolume1"
                  rows="4"
                  :placeholder="$t('singleTankVolume')"
                  :suffix="$t('singleUnit1')"
                  :disabled="true"
                  @change="refreshInitData()"
                />
              </a-form-item>
              <a-form-item
                :label="$t('singleTankVolume')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="singleTankVolume2"
                  rows="4"
                  :placeholder="$t('singleTankVolume')"
                  :suffix="$t('singleUnit2')"
                  :disabled="true"
                  @change="refreshInitData()"
                />
              </a-form-item>
            </a-form>
          </div>
          <a-card
            :title="$t('referenceInformation')"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <div>
              <p>接触消毒池</p>
              <p>
                《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min
              </p>
            </div>
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img
                    width="400px"
                    src="@/assets/img/2000/Disinfection_01.png"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
        </a-card>
      </a-col>
      <a-col
        style="padding: 14px 6px"
        :xl="8"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :title="$t('processDesignCompute')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 0px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <div class="baseQueryParam">
            <a-form style="margin-bottom: 24px">
              <a-form-item
                class="calc"
                :label="$t('contactTime')"
                style="margin-top: 5px"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="contactTime"
                  :placeholder="$t('contactTime')"
                  :suffix="$t('contactTimeUnit')"
                  value="30"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('totalPoolCapacity')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="totalPoolCapacity"
                  :placeholder="$t('totalPoolCapacity')"
                  :suffix="$t('totalPoolCapacityUnit')"
                  value="1"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('disinfectiontank')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="disinfectiontank"
                  rows="4"
                  :placeholder="$t('disinfectiontank')"
                  :suffix="$t('disinfectiontankUnit')"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('everyPoolCapacity')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="everyPoolCapacity"
                  rows="4"
                  :placeholder="$t('everyPoolCapacity')"
                  :suffix="$t('everyPoolCapacityUnit')"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('contactPoolDepth')"
                style="margin-top: 10px"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="contactPoolDepth"
                    :placeholder="$t('contactPoolDepth')"
                    :suffix="$t('contactPoolDepthUnit')"
                    value="20000.00"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('singlecellWidth')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="singlecellWidth"
                  style="width: 50%"
                  :placeholder="$t('singlecellWidth')"
                  :suffix="$t('singlecellWidthUnit')"
                  value="1"
                />
                <a-input
                  v-model="b12_1"
                  style="width: 50%"
                  :placeholder="$t('b12_1')"
                  :addon-after="$t('b12_1_u')"
                  :addon-before="$t('b12_1')"
                  value="1"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('flowLength')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="flowLength"
                    style="width: 50%"
                    rows="4"
                    :placeholder="$t('flowLength')"
                    :disabled="true"
                  />
                  <a-input
                    v-model="roundingFlowLength"
                    style="width: 50%"
                    rows="4"
                    :placeholder="$t('flowLength')"
                    :suffix="$t('flowLengthUnit')"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('division')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="division"
                  rows="4"
                  :placeholder="$t('division')"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('partitionWallThickness')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="partitionWallThickness"
                  rows="4"
                  :placeholder="$t('partitionWallThickness')"
                  :suffix="$t('partitionWallThicknessUnit')"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('poolLength')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="poolLength"
                  rows="4"
                  :placeholder="$t('poolLength')"
                  :suffix="$t('poolLengthUnit')"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('poolWidth')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="poolWidth"
                  rows="4"
                  :placeholder="$t('poolWidth')"
                  :suffix="$t('poolWidthUnit')"
                  :disabled="true"
                />
              </a-form-item>
              <br />
              <a-form-item
                class="calc"
                :label="$t('perCell')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="poolLength"
                    style="width: 33%"
                    rows="8"
                    :placeholder="$t('poolLength')"
                    :suffix="$t('poolLengthUnit')"
                    :disabled="true"
                  />
                  <a-input
                    v-model="roundingFlowLength"
                    style="width: 33%"
                    rows="8"
                    :placeholder="$t('poolWidth')"
                    :suffix="$t('poolWidthUnit')"
                    :disabled="true"
                  />
                  <a-input
                    v-model="contactPoolDepth"
                    style="width: 34%"
                    rows="8"
                    :placeholder="$t('contactPoolDepth')"
                    :suffix="$t('contactPoolDepthUnit')"
                    :disabled="true"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
      </a-col>
      <a-col
        style="padding: 14px 6px; margin-right: 0px"
        :xl="8"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :title="$t('quantities')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <div class="baseQueryParam">
            <a-table
              :columns="columns"
              :data-source="data"
              bordered
              size="small"
              :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
              :pagination="false"
              :row-style="{ paddin: 16 }"
            >
              <a slot="序号" slot-scope="text">{{ text }}</a>
            </a-table>
          </div>

          <a-card
            :title="$t('export')"
            :headStyle="{ 'font-weight': 'bolder' }"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 120px">
                  <a-button
                    style="margin-left: 30px"
                    type="primary"
                    @click="exportComputeBook()"
                    >{{ $t("exportComputeBook") }}</a-button
                  >
                  <a-button
                    style="margin-left: 10px"
                    type="danger"
                    @click="exportQuantities()"
                    >{{ $t("exportQuantities") }}</a-button
                  >
                  <a-button
                    style="margin-left: 10px"
                    type="dashed"
                    @click="backHome()"
                    >{{ $t("backWork") }}</a-button
                  >
                </a-form-item>
              </a-form>
            </div>
          </a-card>
        </a-card>
      </a-col>
    </a-row>
    <div id="testApp" hidden="true">
      <h1><b>接触消毒池</b></h1>
      <br />
      <h2>单元功能</h2>
      <p>
        <span>
          接触池的作用是保证消毒剂与水有充分的接触时间，使消毒剂发挥作用，达到预期的杀菌效果。设计合理的接触池应使污水的每个分子都有相同的停留时间，也就是说水流属于100%推流。采用的消毒方法不同，接触池的停留时间、形式也不同。
        </span>
      </p>
      <h2>设计参数</h2>
      <p>
        <span
          >净水厂的设计处理规模 2.0 万 {{ $t("designScaleUnit") }}，处理水量
          {{ this.singleTankVolume1 }} {{ $t("singleUnit1") }}, 即
          {{ this.singleTankVolume2 }} {{ $t("singleUnit2") }}</span
        >
      </p>
      <br />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel,
  exportWord,
  getValueFromLocalStorage,
    initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_6001"),
  data() {
    return {
      designScale: "20000",
      totalChangeFactor: "1",
      contactTime: "30",
      disinfectiontank: "2",
      contactPoolDepth: "2.00",
      singlecellWidth: "2.00",
      division: "4",
      roundingFlowLength: "52.40",
      partitionWallThickness: "0.20",
      b12_1: "0.3",
      columns: [
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
            },
            {
              title: "单体位号",
              dataIndex: "单体位号",
              key: "2",
              width: "80px",
              align: "center",
            },
            {
              title: "名称",
              dataIndex: "名称",
              key: "3",
              width: "100px",
              align: "center",
            },
            {
              title: "尺寸(m)",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
            },
            {
              title: "标高(m)",
              dataIndex: "标高(m)",
              key: "5",
              width: "80px",
              align: "center",
            },
            {
              title: "单位",
              dataIndex: "单位",
              key: "6",
              width: "50px",
              align: "center",
            },
            {
              title: "数量",
              dataIndex: "disinfectiontank",
              key: "7",
              width: "50px",
              align: "center",
            },
            {
              title: "结构形式",
              dataIndex: "结构形式",
              key: "8",
              width: "80px",
              align: "center",
            },
            {
              title: "备注",
              dataIndex: "备注",
              key: "9",
              width: "50px",
              align: "center",
            },
            {
              title: "暖通要求",
              dataIndex: "暖通要求",
              key: "10",
              width: "80px",
              align: "center",
            },
          ],
        },
      ],
    };
  },
  methods: {
    backHome() {
      this.$router.push("/work");
    },
    initWaterData() {
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.designScale = 40000;
      } else {
        this.designScale = waterData;
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
    exportComputeBook() {
      // var element = document.querySelector("#testApp");
      // var html = element.outerHTML;
      // exportRtf("接触消毒池计算书", html, this);
      const data = {
        key1: this.designScale,
        unit1: this.$t("designScaleUnit"),
        key2: this.singleTankVolume1,
        unit2: this.$t("singleUnit1"),
        key3: this.singleTankVolume2,
        unit3: this.$t("singleUnit2"),
      };
      exportWord("接触消毒池计算书", "6001.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.designScale,
        unit1: this.$t("designScaleUnit"),
        key2: this.singleTankVolume1,
        unit2: this.$t("singleUnit1"),
        key3: this.singleTankVolume2,
        unit3: this.$t("singleUnit2"),
      };
      initWordStorage("6001.docx", data);
      this.handleExcelCache("6001.xlsx", "接触消毒池工程量");
    },
    handleExcelCache(path, name) {
      try {
        // 处理表头信息
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns),
          this.flattenSecondRowColumns(this.columns),
        ];
        // 初始化 allData
        const allData1 = [
          ...headerData1,
          ...this.data.map((item) => Object.values(item)),
        ];

        const data = [
          ...allData1,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    exportExcel() {
      try {
        // 处理表头信息
        const firstRowHeader = this.flattenFirstRowColumns(this.columns);
        const secondRowHeader = this.flattenSecondRowColumns(this.columns);
        // 合并表头信息
        const headerData = [firstRowHeader, secondRowHeader];
        // 初始化 allData
        const allData = [
          ...headerData,
          ...this.data.map((item) => Object.values(item)),
        ];
        // 导出 Excel
        exportExcel(allData, "接触消毒池工程量", this);
      } catch (error) {
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    // 展平第一行表头
    flattenFirstRowColumns(columns) {
      let firstRowHeader = [];
      columns.forEach((column) => {
        firstRowHeader.push(column.title);
      });
      return firstRowHeader;
    },
    // 展平第二行表头
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
    getDisinfectiontank() {
      return this.disinfectiontank;
    },
    getDimensions() {
      return (
        parseFloat(this.poolLength) +
        "m x " +
        this.poolWidth +
        "m x " +
        this.contactPoolDepth +
        "m"
      );
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    singleTankVolume1() {
      return (
        (parseFloat(this.designScale) * parseFloat(this.totalChangeFactor)) /
        24
      ).toFixed(2);
    },
    singleTankVolume2() {
      return (
        (parseFloat(this.designScale) * parseFloat(this.totalChangeFactor)) /
        (24 * 60 * 60)
      ).toFixed(2);
    },
    totalPoolCapacity() {
      return (
        parseFloat(this.singleTankVolume1) *
        (parseFloat(this.contactTime) / 60)
      ).toFixed(2);
    },
    everyPoolCapacity() {
      return (
        parseFloat(this.totalPoolCapacity) / parseFloat(this.disinfectiontank)
      ).toFixed(2);
    },
    flowLength() {
      return (
        parseFloat(this.everyPoolCapacity).toFixed(1) /
        parseFloat(this.contactPoolDepth) /
        parseFloat(this.singlecellWidth)
      ).toFixed(2);
    },
    poolLength() {
      return (
        parseFloat(this.roundingFlowLength) / parseFloat(this.division)
      ).toFixed(2);
    },
    poolWidth() {
      return (
        parseFloat(this.division) * parseFloat(this.singlecellWidth) +
        (parseFloat(this.division) - 1) *
          parseFloat(this.partitionWallThickness)
      ).toFixed(2);
    },
    data() {
      return [
      {
        序号: "1",
        单体位号: "",
        名称: "接触消毒池",
        Dimensions: this.getDimensions(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getDisinfectiontank(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data = [
      {
        序号: "1",
        单体位号: "",
        名称: "接触消毒池",
        Dimensions: this.getDimensions(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getDisinfectiontank(),
        结构形式: "",
        备注: "",
        暖通要求: "",
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
