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
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
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
                :label="$t('averageFlow')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="averageFlow"
                  :placeholder="$t('averageFlow')"
                  :suffix="$t('averageFlowUnit')"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                :label="$t('maxFlow')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="maxFlow"
                  :placeholder="$t('maxFlow')"
                  :suffix="$t('maxFlowUnit')"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                :label="$t('uvt')"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="uvt"
                  :placeholder="$t('uvt')"
                  :suffix="$t('uvtUnit')"
                />
              </a-form-item>
              <a-form-item
                :label="$t('waterTurbidity')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="waterTurbidity"
                  :placeholder="$t('waterTurbidity')"
                  :suffix="$t('waterTurbidityUnit')"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                :label="$t('targetMeasurement')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="targetMeasurement"
                  :placeholder="$t('targetMeasurement')"
                  :suffix="$t('targetMeasurementUnit')"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                :label="$t('agingCoefficient')"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="agingCoefficient"
                  :placeholder="$t('agingCoefficient')"
                />
              </a-form-item>
              <a-form-item
                :label="$t('scalingCoefficient')"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="scalingCoefficient"
                  :placeholder="$t('scalingCoefficient')"
                />
              </a-form-item>
            </a-form>
          </div>

          <a-card
            :title="$t('referenceInformation')"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <div>
              <p>缺“紫外线有效剂量曲线图”，选型需要联系厂家</p>
              <p>缺“紫外线有效剂量曲线图”，选型需要联系厂家</p>
              <p>缺“紫外线有效剂量曲线图”，选型需要联系厂家</p>
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
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <div class="baseQueryParam">
            <a-form-item
              class="calc"
              :label="$t('actualNeedMeasurement')"
              :labelCol="{ span: 12 }"
              :wrapperCol="{ span: 12 }"
            >
              <a-input
                v-model="actualNeedMeasurement"
                :placeholder="$t('actualNeedMeasurement')"
                :suffix="$t('actualNeedMeasurementUnit')"
                :disabled="true"
              />
            </a-form-item>
            <a-form-item
              class="calc"
              :label="$t('singleUvtWaterQuantity')"
              :labelCol="{ span: 12 }"
              :wrapperCol="{ span: 12 }"
            >
              <a-input
                v-model="singleUvtWaterQuantity"
                :placeholder="$t('singleUvtWaterQuantity')"
                :suffix="$t('singleUvtWaterQuantityUnit')"
                :disabled="false"
              />
            </a-form-item>
            <a-form-item
              class="calc"
              :label="$t('uvtDeviceNumber')"
              :labelCol="{ span: 12 }"
              :wrapperCol="{ span: 12 }"
            >
              <a-input
                v-model="uvtDeviceNumber"
                :placeholder="$t('uvtDeviceNumber')"
                :suffix="$t('uvtDeviceNumberUnit')"
                :disabled="true"
              />
            </a-form-item>
            <a-form-item
              class="calc"
              :label="$t('uvtDeviceReserveNumber')"
              :labelCol="{ span: 12 }"
              :wrapperCol="{ span: 12 }"
            >
              <a-input
                v-model="uvtDeviceReserveNumber"
                :placeholder="$t('uvtDeviceReserveNumber')"
                :suffix="$t('uvtDeviceReserveNumberUnit')"
                :disabled="false"
              />
            </a-form-item>
            <a-form-item
              class="calc"
              :label="$t('uvtDeviceTotalNumber')"
              :labelCol="{ span: 12 }"
              :wrapperCol="{ span: 12 }"
            >
              <a-input
                v-model="uvtDeviceTotalNumber"
                :placeholder="$t('uvtDeviceTotalNumber')"
                :suffix="$t('uvtDeviceTotalNumberUnit')"
                :disabled="true"
              />
            </a-form-item>
          </div>
          <a-card
            :title="$t('waterHeadLossCheck')"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <div class="baseQueryParam">
              <a-form-item
                class="calc"
                :label="$t('waterHeadLoss')"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input
                  v-model="waterHeadLoss"
                  :placeholder="$t('waterHeadLoss')"
                  :suffix="$t('waterHeadLossUnit')"
                  :disabled="false"
                />
              </a-form-item>
            </div>
          </a-card>
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
              :columns="columns1"
              :data-source="data1"
              bordered
              size="small"
              :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
              :pagination="false"
              :row-style="{ paddin: 16 }"
            >
              <a slot="序号" slot-scope="text">{{ text }}</a>
            </a-table>
          </div>
          <a-divider :dashed="true" />
          <div class="baseQueryParam">
            <a-table
              :columns="columns2"
              :data-source="data2"
              bordered
              size="small"
              :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
              :pagination="false"
              :row-style="{ paddin: 16 }"
            >
              <a slot="序号" slot-scope="text">{{ text }}</a>
            </a-table>
          </div>
          <a-divider :dashed="true" />
          <div class="baseQueryParam">
            <a-table
              :columns="columns3"
              :data-source="data3"
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
                    disabled="false"
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import { exportExcel3, exportWord,  initWordStorage, } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_6002"),
  data() {
    return {
      averageFlow: "50000",
      maxFlow: "60000",
      uvt: "90",
      waterTurbidity: "1",
      targetMeasurement: "40",
      agingCoefficient: "0.5",
      scalingCoefficient: "0.6",
      singleUvtWaterQuantity: "1250",
      uvtDeviceReserveNumber: "1",
      waterHeadLoss: "0.5",
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
            },
            {
              title: "设备位号",
              dataIndex: "设备位号",
              key: "2",
              width: "80px",
              align: "center",
            },
            {
              title: "设备工艺名称",
              dataIndex: "设备工艺名称",
              key: "3",
              width: "100px",
              align: "center",
            },
            {
              title: "设备类型",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
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
              title: "运行时间",
              dataIndex: "运行时间",
              key: "8",
              width: "80px",
              align: "center",
            },
            {
              title: "主要材质",
              dataIndex: "主要材质",
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
            },
            {
              title: "仪表位号",
              dataIndex: "仪表位号",
              key: "2",
              width: "80px",
              align: "center",
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "3",
              width: "100px",
              align: "center",
            },
            {
              title: "安装位置",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
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
            },
          ],
        },
      ],
      data: [],
    };
  },
  methods: {
    backHome() {
      this.$router.push("/work");
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
        exportExcel3(
          allData1,
          allData2,
          allData3,
          "沉浸式紫外线消毒工程量",
          this
        );
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
        key1: this.averageFlow,
        key2: this.maxFlow,
        key3: this.uvt,
        key4: this.waterTurbidity,
        key5: this.targetMeasurement,
        key6: this.agingCoefficient,
        key7: this.scalingCoefficient,
      };
      exportWord("沉浸式紫外线消毒计算书", "6002.docx", data, this);
    },
    refreshInitData() {
      this.$message.info(this.$t("refreshSucc"));
      const data = {
        key1: this.averageFlow,
        key2: this.maxFlow,
        key3: this.uvt,
        key4: this.waterTurbidity,
        key5: this.targetMeasurement,
        key6: this.agingCoefficient,
        key7: this.scalingCoefficient,
      };
      initWordStorage("6002.docx", data);
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    actualNeedMeasurement() {
      return (
        parseFloat(this.targetMeasurement) /
        parseFloat(this.agingCoefficient) /
        parseFloat(this.scalingCoefficient)
      ).toFixed(0);
    },
    uvtDeviceNumber() {
      return (
        parseFloat(this.maxFlow) /
        24 /
        parseFloat(this.singleUvtWaterQuantity)
      ).toFixed(0);
    },
    uvtDeviceTotalNumber() {
      return (
        parseFloat(this.uvtDeviceNumber) +
        parseFloat(this.uvtDeviceReserveNumber)
      );
    },
  },
  created() {
    this.data1 = [];
    this.data2 = [];
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
