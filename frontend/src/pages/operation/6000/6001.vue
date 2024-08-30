<template>
  <div class="calc_page" style="background-color: #EDEFF2;">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px; margin-left: 0px;"
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
          :body-style="{ padding: 4 }"
        >
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
                  :disabled="true"
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
                />
              </a-form-item>
            </a-form>
          </div>
        </a-card>

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
          :body-style="{ padding: 2 }"
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
                <a-input
                  v-model="contactPoolDepth"
                  :placeholder="$t('contactPoolDepth')"
                  :suffix="$t('contactPoolDepthUnit')"
                  value="20000.00"
                />
              </a-form-item>
              <a-form-item
                class="calc"
                :label="$t('singlecellWidth')"
                :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }"
              >
                <a-input
                  v-model="singlecellWidth"
                  :placeholder="$t('singlecellWidth')"
                  :suffix="$t('singlecellWidthUnit')"
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
                    style="width: 50%;"
                    rows="4"
                    :placeholder="$t('flowLength')"
                    :disabled="true"
                  />
                  <a-input
                    v-model="roundingFlowLength"
                    style="width: 50%;"
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
                    style="width: 33%;"
                    rows="8"
                    :placeholder="$t('poolLength')"
                    :suffix="$t('poolLengthUnit')"
                    :disabled="true"
                  />
                  <a-input
                    v-model="roundingFlowLength"
                    style="width: 33%;"
                    rows="8"
                    :placeholder="$t('poolWidth')"
                    :suffix="$t('poolWidthUnit')"
                    :disabled="true"
                  />
                  <a-input
                    v-model="contactPoolDepth"
                    style="width: 34%;"
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
        style="padding: 14px 6px; margin-right: 0px;"
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
          :body-style="{ padding: 4 }"
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
        </a-card>
        <a-card
          :title="$t('export')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item style="margin-top: 50px; margin-bottom: 120px;">
                <a-button
                  style="margin-left: 30px;"
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
      </a-col>
    </a-row>
    <div id="testApp" hidden="true">
      <h1><b>接触消毒池设计计算</b></h1>
      <br />
      <div>
        <h4>设计输入条件：</h4>
        <p>
          <span
            >（1）{{ $t("designScale") }} = 20000.00
            {{ $t("designScaleUnit") }}</span
          >
        </p>
        <p>
          <span
            >（2）{{ $t("totalChangeFactor") }} k= {{ this.totalChangeFactor }}
            {{ $t("designScaleUnit") }}</span
          >
        </p>
        <p>
          <span
            >（3）{{ $t("singleTankVolume") }} X1=Q/24*k， X1=
            {{ this.singleTankVolume1 }} {{ $t("singleUnit1") }}, 取
            {{ this.singleTankVolume2 }} {{ $t("singleUnit2") }}</span
          >
        </p>
        <br />
        <h4>工艺设计计算：</h4>
        <p>
          <span
            >（1）{{ $t("contactTime") }} A1= {{ this.contactTime }}
            {{ $t("contactTimeUnit") }}</span
          >
        </p>
        <p>
          <span
            >（2）{{ $t("totalPoolCapacity") }} A2=X1*A1/60， A2=
            {{ this.totalPoolCapacity }} {{ $t("totalPoolCapacityUnit") }}</span
          >
        </p>
        <p>
          <span
            >（3）{{ $t("disinfectiontank") }} A3= {{ this.disinfectiontank }}
            {{ $t("disinfectiontankUnit") }}</span
          >
        </p>
        <p>
          <span
            >（4）{{ $t("everyPoolCapacity") }} A4=A2/A3， A4=
            {{ this.everyPoolCapacity }} {{ $t("everyPoolCapacityUnit") }}</span
          >
        </p>
        <p>
          <span
            >（5）{{ $t("contactPoolDepth") }} A5= {{ this.contactPoolDepth }}
            {{ $t("contactPoolDepthUnit") }}</span
          >
        </p>
        <p>
          <span
            >（6）{{ $t("singlecellWidth") }} A6= {{ this.singlecellWidth }}
            {{ $t("singlecellWidthUnit") }}</span
          >
        </p>
        <p>
          <span
            >（7）{{ $t("flowLength") }} A7=A4/A5/A6， A7=
            {{ this.flowLength }} {{ $t("flowLengthUnit") }}, 取
            {{ this.roundingFlowLength }} {{ $t("flowLengthUnit") }}</span
          >
        </p>
        <p>
          <span>（8）{{ $t("division") }} A8= {{ this.division }}</span>
        </p>
        <p>
          <span
            >（9）{{ $t("partitionWallThickness") }} A9=
            {{ this.partitionWallThickness }}
            {{ $t("partitionWallThicknessUnit") }}</span
          >
        </p>
        <p>
          <span
            >（10）{{ $t("poolLength") }} A10=A7/A8， A10=
            {{ this.poolLength }} {{ $t("poolLengthUnit") }}</span
          >
        </p>
        <p>
          <span
            >（11）{{ $t("poolWidth") }} A11=A8*A6+(A8-1)*A9， A11=
            {{ this.poolWidth }} {{ $t("poolWidthUnit") }}</span
          >
        </p>
        <br />
        <p>
          <span
            >（12）{{ $t("perCell") }} A12=A10*A11*A5，A12=
            {{ this.poolLength }} {{ $t("poolLengthUnit") }} *
            {{ this.poolWidth }} {{ $t("poolWidthUnit") }} *
            {{ this.contactPoolDepth }} {{ $t("contactPoolDepthUnit") }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { ipcApiRoute } from '@/api/main';
// import { ipc } from '@/utils/ipcRenderer';
// import { exportRtf } from "@/utils/exportRtfUtil";

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
      data: [],
    };
  },
  methods: {
    backHome() {
      this.$router.push("/work");
    },
    exportQuantities() {
      this.$message.warn(this.$t("exportQuantitiesNotOpen"));
    },
    exportComputeBook() {
    //   var element = document.querySelector("#testApp");
    //   var html = element.outerHTML;
    //   exportRtf("接触消毒池计算书", html, this);
    this.$message.warn(this.$t("exportComputeBookNotOpen"));
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
  },
  created() {
    this.data = [
      {
        key: "1",
        序号: "1",
        单体位号: "1",
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
