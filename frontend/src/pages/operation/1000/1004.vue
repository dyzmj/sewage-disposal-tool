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
          :title="$t('b2')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
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
                  @change="refreshInitData()"
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

          <a-card
            :title="$t('referenceImage')"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img
                    style="max-width: 360px; height: auto;"
                    src="@/assets/img/1000/1004.jpg"
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
          :title="$t('b7')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <a-card
            :title="$t('b8')"
            style="margin-bottom: 24px"
            :bordered="false"
            :hoverable="true"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-form>
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
                    @change="refreshInitData()"
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
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b10_u')"
                  />
                  <a-input
                    v-model="b10_1"
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b10_1_u')"
                  />
                  <a-input
                    v-model="b10_2"
                    style="width: 100%"
                    :disabled="true"
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
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b11_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b12')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b12"
                    style="width: 100%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b13')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b13"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b13_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b14')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b14"
                    style="width: 100%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b15')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b15"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b15_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b16')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b16"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b16_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b17')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b17"
                    style="width: 100%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b18')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b18"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b18_u')"
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
    </a-row>
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
  i18n: require("./i18n_1004"),
  data() {
    return {
      modelVisible: false,
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b9: "1.00 ",
      b11: "0.65",
      b12: "0.70",
      b14: "0.30",
      b16: "1.30",
      b17: "0.80",
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
        exportExcel(allData2, "二氧化氯工程量", this);
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
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b9,
        key7: this.b10,
        key8: this.b10_1,
        key9: this.b10_2,
        key10: this.b11,
        key11: this.b12,
        key12: this.b13,
        key13: this.b14,
        key14: this.b15,
        key15: this.b16,
        key16: this.b17,
        key17: this.b18,
      };
      exportWord("加药系统二氧化氯计算书", "1004.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b9,
        key7: this.b10,
        key8: this.b10_1,
        key9: this.b10_2,
        key10: this.b11,
        key11: this.b12,
        key12: this.b13,
        key13: this.b14,
        key14: this.b15,
        key15: this.b16,
        key16: this.b17,
        key17: this.b18,
      };
      initWordStorage("1004.docx", data);
      this.handleExcelCache("1004.xlsx", "加药系统二氧化氯工程量");
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
      if (parseFloat(this.b10_2) == 50) {
        return "WTL（Z）-50";
      } else if (parseFloat(this.b10_2) == 100) {
        return "WTL（Z）-100";
      } else if (parseFloat(this.b10_2) == 200) {
        return "WTL（Z）-200";
      } else if (parseFloat(this.b10_2) == 300) {
        return "WTL（Z）-300";
      } else if (parseFloat(this.b10_2) == 500) {
        return "WTL（Z）-500";
      } else if (parseFloat(this.b10_2) == 1000) {
        return "WTL（Z）-1000";
      } else if (parseFloat(this.b10_2) == 2000) {
        return "WTL（Z）-2000";
      } else if (parseFloat(this.b10_2) == 3000) {
        return "WTL（Z）-3000";
      } else {
        return "WTL（Z）-5000";
      }
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b5() {
      return (
        ((parseFloat(this.b3) / 24) * parseFloat(this.b4)) /
        parseFloat(this.b4_1)
      ).toFixed(2);
    },
    b5_1() {
      return (parseFloat(this.b5) / 3600).toFixed(2);
    },
    b10() {
      return ((parseFloat(this.b5) * parseFloat(this.b9)) / 1000).toFixed(2);
    },
    b10_1() {
      return (parseFloat(this.b10) * 1000).toFixed(2);
    },
    b10_2() {
      if (parseFloat(this.b10_1) <= 50) {
        return 50;
      } else if (parseFloat(this.b10_1) <= 100) {
        return 100;
      } else if (parseFloat(this.b10_1) <= 200) {
        return 200;
      } else if (parseFloat(this.b10_1) <= 300) {
        return 300;
      } else if (parseFloat(this.b10_1) <= 500) {
        return 500;
      } else if (parseFloat(this.b10_1) <= 1000) {
        return 1000;
      } else if (parseFloat(this.b10_1) <= 2000) {
        return 2000;
      } else if (parseFloat(this.b10_1) <= 3000) {
        return 3000;
      } else {
        return 5000;
      }
    },
    b13() {
      return (
        (parseFloat(this.b11) * parseFloat(this.b10)) /
        parseFloat(this.b12)
      ).toFixed(2);
    },
    b15() {
      return (
        (parseFloat(this.b11) * parseFloat(this.b10)) /
        parseFloat(this.b12) /
        parseFloat(this.b14)
      ).toFixed(2);
    },
    b18() {
      return (
        (parseFloat(this.b16) * parseFloat(this.b10)) /
        parseFloat(this.b17) /
        0.31
      ).toFixed(2);
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "1",
          设备工艺名称: "二氧化氯发生器",
          规格及型号: this.getkey1(),
          单位: "台",
          数量: "2",
          运行时间: "24h",
          主要材质: "",
          备注: "一用一备",
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
    this.data2 = [
      {
        序号: "1",
        设备位号: "1",
        设备工艺名称: "二氧化氯发生器",
        规格及型号: this.getkey1(),
        单位: "台",
        数量: "2",
        运行时间: "24h",
        主要材质: "",
        备注: "一用一备",
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
