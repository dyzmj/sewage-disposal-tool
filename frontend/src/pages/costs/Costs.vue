<template>
  <div class="container">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 0 6px; height: 100%"
        :xl="24"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :loading="loading"
          :title="$t('baseQueryParam')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form
              :form="form"
              :label-col="{ span: 0 }"
              :wrapper-col="{ span: 24 }"
              @submit="handleSubmit"
            >
              <a-row :gutter="24">
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b2"
                        style="width: 34%"
                        :addon-before="$t('b2')"
                        :suffix="$t('b2_u')"
                      />
                      <a-input
                        v-model="b2_1"
                        style="width: 33%"
                        :addon-before="$t('b2_1')"
                        :suffix="$t('b2_1_u')"
                      />
                      <a-input
                        v-model="b2_2"
                        style="width: 33%"
                        :addon-before="$t('b2_2')"
                        :suffix="$t('b2_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 34%"
                        :addon-before="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%"
                        :addon-before="$t('b3_1')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b4"
                        style="width: 34%"
                        :addon-before="$t('b4')"
                        :suffix="$t('b4_u')"
                      />
                      <a-input
                        v-model="b4_1"
                        style="width: 33%"
                        :addon-before="$t('b4_1')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b5"
                        style="width: 34%"
                        :addon-before="$t('b5')"
                        :suffix="$t('b5_u')"
                      />
                      <a-input
                        v-model="b5_1"
                        style="width: 33%"
                        :addon-before="$t('b5_1')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b6"
                        style="width: 34%"
                        :addon-before="$t('b6')"
                        :suffix="$t('b6_u')"
                      />
                      <a-input
                        v-model="b6_1"
                        style="width: 33%"
                        :addon-before="$t('b6_1')"
                      />
                      <a-input
                        v-model="b6_2"
                        style="width: 33%"
                        :addon-before="$t('b6_2')"
                        :suffix="$t('b6_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b7"
                        style="width: 34%"
                        :addon-before="$t('b7')"
                        :suffix="$t('b7_u')"
                      />
                      <a-input
                        v-model="b7_1"
                        style="width: 33%"
                        :addon-before="$t('b7_1')"
                      />
                      <a-input
                        v-model="b7_2"
                        style="width: 33%"
                        :addon-before="$t('b7_2')"
                        :suffix="$t('b7_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b8"
                        style="width: 34%"
                        :addon-before="$t('b8')"
                        :suffix="$t('b8_u')"
                      />
                      <a-input
                        v-model="b8_1"
                        style="width: 33%"
                        :addon-before="$t('b8_1')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b9"
                        style="width: 34%"
                        :addon-before="$t('b9')"
                        :suffix="$t('b9_u')"
                      />
                      <a-input
                        v-model="b9_1"
                        style="width: 33%"
                        :addon-before="$t('b9_1')"
                      />
                      <a-input
                        v-model="b9_2"
                        style="width: 33%"
                        :addon-before="$t('b9_2')"
                        :suffix="$t('b9_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b10"
                        style="width: 34%"
                        :addon-before="$t('b10')"
                        :suffix="$t('b10_u')"
                      />
                      <a-input
                        v-model="b10_1"
                        style="width: 33%"
                        :addon-before="$t('b10_1')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b11"
                        style="width: 34%"
                        :addon-before="$t('b11')"
                        :suffix="$t('b11_u')"
                      />
                      <a-input
                        v-model="b11_1"
                        style="width: 33%"
                        :addon-before="$t('b11_1')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b12"
                        style="width: 34%"
                        :addon-before="$t('b12')"
                        :suffix="$t('b12_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b13"
                        style="width: 34%"
                        :addon-before="$t('b13')"
                        :suffix="$t('b13_u')"
                      />
                      <a-input
                        v-model="b13_1"
                        style="width: 33%"
                        :addon-before="$t('b13_1')"
                        :suffix="$t('b13_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b14"
                        style="width: 34%"
                        :addon-before="$t('b14')"
                        :suffix="$t('b14_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item
                    class="calc"
                    label=" "
                    :colon="false"
                    :span="8"
                    style="margin-top: 5px"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b15"
                        style="width: 34%"
                        :addon-before="$t('b15')"
                        :suffix="$t('b15_u')"
                      />
                      <a-input
                        v-model="b15_1"
                        style="width: 33%"
                        :addon-before="$t('b15_1')"
                        :suffix="$t('b15_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-button type="primary" html-type="submit"> 提交 </a-button>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 0 6px; height: 100%"
        :xl="24"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :loading="loading"
          :title="$t('operatingCosts')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <table>
              <tr>
                <td>污水厂经营成本</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>序号</td>
                <td>名称</td>
                <td></td>
                <td>全年量</td>
                <td></td>
                <td>单价</td>
                <td></td>
                <td>年费用（万元）</td>
                <td>吨水成本（元/m3)</td>
              </tr>
              <tr>
                <td>1</td>
                <td>水资源费</td>
                <td></td>
                <td>8048250</td>
                <td>t</td>
                <td>0.6</td>
                <td>元/t</td>
                <td>482.90</td>
                <td>0.662</td>
              </tr>
              <tr>
                <td>2</td>
                <td>药剂费</td>
                <td>PAC</td>
                <td>153.30</td>
                <td>t</td>
                <td>2000</td>
                <td>元/t</td>
                <td>30.66</td>
                <td>0.042</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>PAM</td>
                <td>0.77</td>
                <td>t</td>
                <td>14000</td>
                <td>元/t</td>
                <td>1.07</td>
                <td>0.001</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>脱水PAM</td>
                <td>0.12</td>
                <td>t</td>
                <td>14000</td>
                <td>元/t</td>
                <td>0.17</td>
                <td>0.000</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>次氯酸钠</td>
                <td>165.90</td>
                <td>t</td>
                <td>420</td>
                <td>元/t</td>
                <td>6.97</td>
                <td>0.010</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>粉末活性炭</td>
                <td>37.80</td>
                <td>t</td>
                <td>1500</td>
                <td>元/t</td>
                <td>5.67</td>
                <td>0.008</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>HCl</td>
                <td>4.06</td>
                <td>t</td>
                <td>60</td>
                <td>元/t</td>
                <td>0.02</td>
                <td>0.000</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>NaOH</td>
                <td>1.26</td>
                <td>t</td>
                <td>850</td>
                <td>元/t</td>
                <td>0.11</td>
                <td>0.000</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>高锰酸钾</td>
                <td>0.00</td>
                <td>t</td>
                <td>20000</td>
                <td>元/t</td>
                <td>0.00</td>
                <td>0.000</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>小计</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>44.67</td>
                <td>0.061</td>
              </tr>
              <tr>
                <td>3</td>
                <td>动力燃料费</td>
                <td>电度电费</td>
                <td>292000</td>
                <td>kWh</td>
                <td>0.7</td>
                <td>元/kWh</td>
                <td>20.44</td>
                <td>0.028</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>小计</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20.44</td>
                <td>0.028</td>
              </tr>
              <tr>
                <td>4</td>
                <td>污水处理费</td>
                <td></td>
                <td>730</td>
                <td>t</td>
                <td>2</td>
                <td>元/t</td>
                <td>0.15</td>
                <td>0.000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>污泥外运及处置费</td>
                <td></td>
                <td>118.63</td>
                <td>t</td>
                <td>100</td>
                <td>元/t</td>
                <td>1.19</td>
                <td>0.002</td>
              </tr>
              <tr>
                <td>6</td>
                <td>工资福利费</td>
                <td></td>
                <td>20</td>
                <td>人</td>
                <td>100000</td>
                <td>元/人年</td>
                <td>200.00</td>
                <td>0.274</td>
              </tr>
              <tr>
                <td>7</td>
                <td>日常检修维护费</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>20</td>
                <td>0.027</td>
              </tr>
              <tr>
                <td>8</td>
                <td>经营成本合计</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1.054</td>
              </tr>
            </table>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  getValueFromLocalStorage,
} from "@/utils/exportUtil";

export default {
  name: "Demo",
  i18n: require("./i18n"),
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      certificate: "",
      code: "",
      b2: "20000",
      b3: "20",
      b4: "0.1",
      b5: "1",
      b6: "2",
      b7: "1",
      b8: "35",
      b9: "1",
      b10: "1",
      b11: "1",
      b12: "100.0",
      b13: "347.13",
      b14: "800",
      b15: "1000",
      b2_1: "5",
      b2_2: "5",
      b3_1: "365",
      b4_1: "365",
      b5_1: "365",
      b6_1: "365",
      b6_2: "10",
      b7_1: "60",
      b7_2: "10",
      b8_1: "60",
      b9_1: "60",
      b9_2: "31",
      b10_1: "60",
      b11_1: "0",
      b13_1: "80",
      b15_1: "2",
    };
  },
  methods: {
    initWaterData() {
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b2 = 20000;
      } else {
        this.b2 = waterData;
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$message.info("运行成本计算完成");
    },
    handleReset() {
      this.form.resetFields();
      this.certificate = "";
      this.code = "";
    },
  },
  computed: {
    ...mapState("setting", ["pageMinHeight"]),
    desc() {
      return this.$t("description");
    },
    count() {
      return this.expand ? 11 : 7;
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
  },
}
</script>

<style scoped></style>
