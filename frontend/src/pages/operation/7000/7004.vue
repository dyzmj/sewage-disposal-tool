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
          :title="$t('b2')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
          :headStyle="{ 'font-weight': 'bolder' }"
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
                  style="width: 100%;"
                  :disabled="false"
                  rows="12"
                  :placeholder="$t('b3')"
                  :suffix="$t('b3_u')"
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
                  style="width: 50%;"
                  :disabled="false"
                  rows="12"
                  :placeholder="$t('b4')"
                  :suffix="$t('b4_u')"
                />
                <a-input
                  v-model="b4_1"
                  style="width: 50%;"
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
                  style="width: 50%;"
                  :disabled="false"
                  rows="12"
                  :placeholder="$t('b5')"
                  :suffix="$t('b5_u')"
                />
                <a-input
                  v-model="b5_1"
                  style="width: 50%;"
                  :disabled="false"
                  rows="12"
                  :placeholder="$t('b5_1')"
                  :suffix="$t('b5_1_u')"
                />
              </a-input-group>
            </a-form-item>
          </a-form>
        </a-card>
        <a-card
          :title="$t('referenceImage')"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <div>
            <p>ClO2</p>
            <p>
              《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min
            </p>
          </div>
          <div class="baseQueryParam">
            <a-form>
              <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                <img width="400px" src="@/assets/img/5000/5001_1.png" />
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
          :title="$t('b7')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
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
                    style="width: 100%;"
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
                    style="width: 33%;"
                    :disabled="false"
                    :suffix="$t('b10_u')"
                  />
                  <a-input
                    v-model="b10_1"
                    style="width: 33%;"
                    :disabled="true"
                    :suffix="$t('b10_1_u')"
                  />
                  <a-input
                    v-model="b10_2"
                    style="width: 34%;"
                    :disabled="true"
                    :suffix="$t('b10_2_u')"
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
                    style="width: 50%;"
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
                    style="width: 50%;"
                    :disabled="false"
                    :suffix="$t('b12_u')"
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
                    style="width: 50%;"
                    :disabled="false"
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
                    style="width: 50%;"
                    :disabled="false"
                    :suffix="$t('b14_u')"
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
                    style="width: 50%;"
                    :disabled="false"
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
                    style="width: 50%;"
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
                    style="width: 50%;"
                    :disabled="false"
                    :suffix="$t('b17_u')"
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
                    style="width: 50%;"
                    :disabled="false"
                    :suffix="$t('b18_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </a-card>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import { exportExcel3, exportWord } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_7004"),
  data() {
    return {
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b9: "2.00 ",
      b10: "1.67",
      b10_1: "1666.67",
      b10_2: "2000",
      b11: "0.65",
      b12: "0.70",
      b13: "1.55",
      b14: "0.30",
      b15: "5.16",
      b16: "1.30",
      b17: "0.80",
      b18: "8.74",
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
      try{
        this.exportExcel();
      }catch(error){
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
        this.$message.warn(this.$t("exportExcelError"));
        return;
      }
    },
    exportExcel() {
      try {
        // 处理表头信息
        const headerData1 = [this.flattenFirstRowColumns(this.columns1), this.flattenSecondRowColumns(this.columns1)];
        // 初始化 allData
        const allData1 = [...headerData1, ...this.data1.map(item => Object.values(item))];

        // 处理表头信息
        const headerData2 = [this.flattenFirstRowColumns(this.columns2), this.flattenSecondRowColumns(this.columns2)];
        // 初始化 allData
        const allData2 = [...headerData2, ...this.data2.map(item => Object.values(item))];

        // 处理表头信息
        const headerData3 = [this.flattenFirstRowColumns(this.columns3), this.flattenSecondRowColumns(this.columns3)];
        // 初始化 allData
        const allData3 = [...headerData3, ...this.data3.map(item => Object.values(item))];

        // 导出 Excel
        exportExcel3(allData1, allData2, allData3, "生物接触氧化池计算书", this);
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
        key2: this.b5,
        key3: this.b5_1,
        key4: this.b9,
      };
      exportWord("二氧化氯计算书", "7004.docx", data, this);
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
    b5() {
      return (
        parseFloat(this.b3) / 24 +
        parseFloat(this.b4) / parseFloat(this.b4_1)
      ).toFixed(2);
    },
    b5_1() {
      return (parseFloat(this.b5) / 3600).toFixed(2);
    },
  },
  created() {
    this.data1 = [
      {
        key: "1",
        序号: "1",
        单体位号: "1",
        名称: "普通快滤池",
        Dimensions: "70.1m x 20.9m x 4.4m",
        标高: "",
        单位: "座",
        disinfectiontank: "1",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        key: "1",
        序号: "1",
        设备位号: "1",
        设备工艺名称: "反冲洗泵",
        规格及型号: "8",
        单位: "台",
        数量: "Q=554.4m3/h,H=13.26m",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "1",
        序号: "1",
        设备位号: "1",
        设备工艺名称: "反冲洗风机",
        规格及型号: "3",
        单位: "台",
        数量: "Q=554.4m3/h,H=13.26m",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
    ];
    this.data3 = [
      {
        key: "1",
        序号: "1",
        仪表位号: "1",
        仪表名称: "电动阀",
        安装位置: "",
        规格及型号: "",
        单位: "台",
        数量: "80",
        a: "",
        b: "",
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
