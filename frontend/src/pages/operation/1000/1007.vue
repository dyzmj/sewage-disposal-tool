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
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a slot="extra" href="#">
            <div class="" style="">
              <a-button
                type="primary"
                @click="refreshInitData"
                icon="sync"
                size="small"
              >
                {{ $t("refresh") }}</a-button
              >
            </div>
          </a>
          <a-card
            :title="$t('b2')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-form>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    style="width: 100%"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                    @change="refreshInitData()"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b4')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b4"
                    style="width: 50%"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b4')"
                    :suffix="$t('b4_u')"
                  />
                  <a-input
                    v-model="b4_1"
                    style="width: 50%"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b4_1')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b5')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b5"
                    style="width: 50%"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b5')"
                    :suffix="$t('b5_u')"
                  />
                  <a-input
                    v-model="b5_1"
                    style="width: 50%"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b5_1')"
                    :suffix="$t('b5_1_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
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
          style="margin-bottom: 24px"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b6')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-form>
              <a-form-item
                :label="$t('b7')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b7"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b7_u')"
                    @change="refreshInitData()"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b8')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b8"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b8_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b9')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b9"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b9_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b10')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b10"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b10_u')"
                    @change="refreshInitData()"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b11')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b11"
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b11_u')"
                    @change="refreshInitData()"
                  />
                  <a-input
                    v-model="b11_1"
                    style="width: 50%"
                    :disabled="false"
                    :suffix="$t('b11_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
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
          <a
            slot="extra"
            style="color: rgb(120, 120, 120); font-size: 15px;"
            @click="showModal"
          >
            <a-icon type="zoom-in" />
          </a>
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
              <div slot="序号" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.序号"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="设备位号" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.设备位号"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="设备工艺名称" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.设备工艺名称"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="Dimensions" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.Dimensions"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="规格及型号" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.规格及型号"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="单位" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.单位"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="disinfectiontank" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.disinfectiontank"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="运行时间" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.运行时间"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="主要材质" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.主要材质"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="备注" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.备注"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
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
    <a-modal
      :visible="modelVisible"
      title="工程量计算"
      :footer="null"
      width="1200"
      @ok="handleOk"
      @cancel="handleOk"
    >
      <div>
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
            <div slot="序号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.序号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="设备位号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.设备位号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="设备工艺名称" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.设备工艺名称"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="Dimensions" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.Dimensions"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="规格及型号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.规格及型号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="单位" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.单位"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="disinfectiontank" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.disinfectiontank"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="运行时间" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.运行时间"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="主要材质" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.主要材质"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="备注" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.备注"
                @blur="handleTableChange()"
              ></a-input>
            </div>
          </a-table>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel,
  exportWord,
  getValueFromLocalStorage,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_1007"),
  data() {
    return {
      modelVisible: false,
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b7: "35",
      b8: "2",
      b9: "0.5",
      b11_1: "3",
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
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "Dimensions" },
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
        this.b3 = 20000;
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
        exportExcel(allData2, "活性炭粉末工程量", this);
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
        key2: this.b7,
        key3: this.b10,
        key4: this.b11,
      };
      exportWord("活性炭粉末计算书", "1007.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b3,
        key2: this.b7,
        key3: this.b10,
        key4: this.b11,
      };
      initWordStorage("1007.docx", data);
      this.handleExcelCache("1007.xlsx", "活性炭粉末工程量");
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

        const data = [...allData2];
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
    getkey1() {
      return "料仓容积=" + this.b11_1 + " m3";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b5() {
      return (
        parseFloat(this.b3) / 24 +
        parseFloat(this.b4) / parseFloat(this.b4_1)
      ).toFixed(2);
    },
    b5_1() {
      return (parseFloat(this.b5) / 3600).toFixed(2);
    },
    b10() {
      storeValueInLocalStorage("carbonData", this.b7);
      return ((parseFloat(this.b7) * parseFloat(this.b3)) / 1000 / 24).toFixed(
        8
      );
    },
    b11() {
      return (
        (((parseFloat(this.b7) * parseFloat(this.b3)) /
          parseFloat(this.b9) /
          1000) *
          parseFloat(this.b8)) /
        1000
      ).toFixed(2);
    },
    data2() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "投加系统",
          Dimensions: "粉末活性炭干式投加系统",
          规格及型号: this.getkey1(),
          单位: "套",
          disinfectiontank: "1",
          运行时间: "",
          主要材质: "",
          备注: "含物料储存、定量投加、射流混合及相关辅助部分",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "投加系统",
        Dimensions: "粉末活性炭干式投加系统",
        规格及型号: this.getkey1(),
        单位: "套",
        disinfectiontank: "1",
        运行时间: "",
        主要材质: "",
        备注: "含物料储存、定量投加、射流混合及相关辅助部分",
      },
    ];
  },
  activated() {
    this.initWaterData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data2 = [
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "投加系统",
        Dimensions: "粉末活性炭干式投加系统",
        规格及型号: this.getkey1(),
        单位: "套",
        disinfectiontank: "1",
        运行时间: "",
        主要材质: "",
        备注: "含物料储存、定量投加、射流混合及相关辅助部分",
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
