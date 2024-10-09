<template>
  <div class="calc_page" style="background-color: #EDEFF2;">
    <a-row style="margin: 0 -6px">
      <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :title="$t('baseQueryParam')" :headStyle="{ 'font-weight': 'bolder' }" style="margin-bottom: 24px"
          :bordered="false" :hoverable="true" :body-style="{ padding: 2, height: '820px', overflow: 'auto' }">
          <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }" size="small">
            <a-form>
              <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b3')"
                    :suffix="$t('b3_u')" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b4" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b4')"
                    :suffix="$t('b4_u')" />
                  <a-input v-model="b4_1" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b4_1')" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b5" style="width: 50%;" :disabled="true" rows="12" :placeholder="$t('b5')"
                    :suffix="$t('b5_u')" />
                  <a-input v-model="b5_1" style="width: 50%;" :disabled="true" rows="12" :placeholder="$t('b5_1')"
                    :suffix="$t('b5_1_u')" />
                </a-input-group>
              </a-form-item>
            </a-form>
          </a-card>
          <a-card :title="$t('referenceImage')" :headStyle="{ 'font-weight': 'bolder' }" size="small">
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img width="400px" src="@/assets/img/5000/5001_1.png" />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
        </a-card>
      </a-col>
      <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :title="$t('processDesignCompute')" :headStyle="{ 'font-weight': 'bolder' }" style="margin-bottom: 24px"
          :bordered="false" :hoverable="true" :body-style="{ padding: 2, height: '820px', overflow: 'auto' }">
          <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }" size="small">
            <a-form>
              <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b7" style="width: 100%;" :disabled="false" :suffix="$t('b7_u')" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b8" style="width: 100%;" :disabled="false" :suffix="$t('b8_u')" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b9" style="width: 100%;" :disabled="false" :suffix="$t('b9_u')" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b10" style="width: 100%;" :disabled="true" :suffix="$t('b10_u')" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }">
                <a-input-group compact>
                  <a-input v-model="b11" style="width: 50%;" :disabled="true" :suffix="$t('b11_u')" />
                  <a-input v-model="b11_1" style="width: 50%;" :disabled="false" :suffix="$t('b11_u')" />
                </a-input-group>
              </a-form-item>
            </a-form>
          </a-card>
        </a-card>
      </a-col>
      <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :title="$t('quantities')" :headStyle="{ 'font-weight': 'bolder' }" style="margin-bottom: 24px"
          :bordered="false" :body-style="{ padding: 4 }">
          <div class="baseQueryParam">
            <a-table :columns="columns2" :data-source="data2" bordered size="small"
              :scroll="{ x: 'calc(700px + 50%)', y: 240 }" :pagination="false" :row-style="{ paddin: 16 }">
              <a slot="序号" slot-scope="text">{{ text }}</a>
            </a-table>
          </div>
        </a-card>
        <a-card :title="$t('export')" :headStyle="{ 'font-weight': 'bolder' }" style="margin-bottom: 24px"
          :bordered="false" :body-style="{ padding: 4 }">
          <div class="baseQueryParam">
            <a-form>
              <a-form-item style="margin-top: 50px; margin-bottom: 120px;">
                <a-button style="margin-left: 30px;" type="primary" @click="exportComputeBook()">{{
                  $t("exportComputeBook") }}</a-button>
                <a-button style="margin-left: 10px" type="danger" @click="exportQuantities()">{{ $t("exportQuantities")
                  }}</a-button>
                <a-button style="margin-left: 10px" type="dashed" @click="backHome()">{{ $t("backWork") }}</a-button>
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
import { exportExcel3, exportWord, getValueFromLocalStorage } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_1007"),
  data() {
    return {
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
      data: [],
    };
  },
  methods: {
    backHome() {
      this.$router.push("/work");
    },
    initWaterData() {
      const waterData = getValueFromLocalStorage("waterData")
      if (waterData == null || waterData == '') {
        this.b3 = 20000
      } else {
        this.b3 = waterData
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
        exportExcel3(allData1, allData2, allData3, "活性炭粉末工程量", this);
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
      exportWord("活性炭粉末计算书", "7007.docx", data, this);
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
    getkey1() {
      return '料仓容积=' + this.b11_1 + ' m3'
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
      return (
        parseFloat(this.b7) * parseFloat(this.b3) / 1000 / 24
      ).toFixed(8);
    },
    b11() {
      return (
        parseFloat(this.b7) * parseFloat(this.b3) / parseFloat(this.b9) / 1000 * 
        parseFloat(this.b8) / 1000
      ).toFixed(2);
    }
  },
  watch() {
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
      }
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
      }
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
