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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
          title="污水厂经营成本"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <table>
              <tr>
                <th>序号</th>
                <th colspan="2">名称</th>
                <th colspan="2">全年量</th>
                <th colspan="2">单价</th>
                <th>年费用（万元）</th>
                <th>吨水成本（元/m3）</th>
              </tr>
              <tr>
                <td>1</td>
                <td colspan="2">水资源费</td>
                <td><a-input v-model="e19" /></td>
                <td>t</td>
                <td><a-input v-model="g19" /></td>
                <td>元/t</td>
                <td><a-input v-model="i19" /></td>
                <td><a-input v-model="j19" /></td>
              </tr>
              <tr>
                <td rowspan="9">2</td>
                <td rowspan="9">药剂费</td>
                <td>PAC</td>
                <td><a-input v-model="e20" /></td>
                <td>t</td>
                <td><a-input v-model="g20" /></td>
                <td>元/t</td>
                <td><a-input v-model="i20" /></td>
                <td><a-input v-model="j20" /></td>
              </tr>
              <tr>
                <td>PAM</td>
                <td><a-input v-model="e21" /></td>
                <td>t</td>
                <td><a-input v-model="g21" /></td>
                <td>元/t</td>
                <td><a-input v-model="i21" /></td>
                <td><a-input v-model="j21" /></td>
              </tr>
              <tr>
                <td>脱水PAM</td>
                <td><a-input v-model="e22" /></td>
                <td>t</td>
                <td><a-input v-model="g22" /></td>
                <td>元/t</td>
                <td><a-input v-model="i22" /></td>
                <td><a-input v-model="j22" /></td>
              </tr>
              <tr>
                <td>次氯酸钠</td>
                <td><a-input v-model="e23" /></td>
                <td>t</td>
                <td><a-input v-model="g23" /></td>
                <td>元/t</td>
                <td><a-input v-model="i23" /></td>
                <td><a-input v-model="j23" /></td>
              </tr>
              <tr>
                <td>粉末活性炭</td>
                <td><a-input v-model="e24" /></td>
                <td>t</td>
                <td><a-input v-model="g24" /></td>
                <td>元/t</td>
                <td><a-input v-model="i24" /></td>
                <td><a-input v-model="j24" /></td>
              </tr>
              <tr>
                <td>HCl</td>
                <td><a-input v-model="e25" /></td>
                <td>t</td>
                <td><a-input v-model="g25" /></td>
                <td>元/t</td>
                <td><a-input v-model="i25" /></td>
                <td><a-input v-model="j25" /></td>
              </tr>
              <tr>
                <td>NaOH</td>
                <td><a-input v-model="e26" /></td>
                <td>t</td>
                <td><a-input v-model="g26" /></td>
                <td>元/t</td>
                <td><a-input v-model="i26" /></td>
                <td><a-input v-model="j26" /></td>
              </tr>
              <tr>
                <td>高锰酸钾</td>
                <td><a-input v-model="e27" /></td>
                <td>t</td>
                <td><a-input v-model="g27" /></td>
                <td>元/t</td>
                <td><a-input v-model="i27" /></td>
                <td><a-input v-model="j27" /></td>
              </tr>
              <tr>
                <td>小计</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a-input v-model="i28" /></td>
                <td><a-input v-model="j28" /></td>
              </tr>
              <tr>
                <td rowspan="2">3</td>
                <td rowspan="2">动力燃料费</td>
                <td>电度电费</td>
                <td><a-input v-model="e29" /></td>
                <td>kWh</td>
                <td><a-input v-model="g29" /></td>
                <td>元/kWh</td>
                <td><a-input v-model="i29" /></td>
                <td><a-input v-model="j29" /></td>
              </tr>
              <tr>
                <td>小计</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a-input v-model="i30" /></td>
                <td><a-input v-model="j30" /></td>
              </tr>
              <tr>
                <td>4</td>
                <td colspan="2">污水处理费</td>
                <td><a-input v-model="e31" /></td>
                <td>t</td>
                <td><a-input v-model="g31" /></td>
                <td>元/t</td>
                <td><a-input v-model="i31" /></td>
                <td><a-input v-model="j31" /></td>
              </tr>
              <tr>
                <td>5</td>
                <td colspan="2">污泥外运及处置费</td>
                <td><a-input v-model="e32" /></td>
                <td>t</td>
                <td><a-input v-model="g32" /></td>
                <td>元/t</td>
                <td><a-input v-model="i32" /></td>
                <td><a-input v-model="j32" /></td>
              </tr>
              <tr>
                <td>6</td>
                <td colspan="2">工资福利费</td>
                <td><a-input v-model="e33" /></td>
                <td>人</td>
                <td><a-input v-model="g33" /></td>
                <td>元/人年</td>
                <td><a-input v-model="i33" /></td>
                <td><a-input v-model="j33" /></td>
              </tr>
              <tr>
                <td>7</td>
                <td colspan="2">日常检修维护费</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a-input v-model="i34" /></td>
                <td><a-input v-model="j34" /></td>
              </tr>
              <tr>
                <td>8</td>
                <td colspan="2">经营成本合计</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a-input v-model="j35" /></td>
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
import { getValueFromLocalStorage } from "@/utils/exportUtil";

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
      g19: "0.6",
      g20: "2000",
      g21: "14000",
      g22: "14000",
      g23: "420",
      g24: "1500",
      g25: "60",
      g26: "850",
      g27: "20000",
      g29: "0.7",
      g31: "2",
      g32: "100",
      g33: "100000",
      e33: "20",
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
      const pacData = getValueFromLocalStorage("pacData");
      if (pacData == null || pacData == "") {
        this.b3 = 20;
      } else {
        this.b3 = pacData;
      }
      const pamData = getValueFromLocalStorage("pamData");
      if (pamData == null || pamData == "") {
        this.b4 = 0.1;
      } else {
        this.b4 = pamData;
      }
      const dehydrationPamData = getValueFromLocalStorage("dehydrationPamData");
      if (dehydrationPamData == null || dehydrationPamData == "") {
        this.b5 = 1;
      } else {
        this.b5 = dehydrationPamData;
      }
      const naclo1Data = getValueFromLocalStorage("naclo1Data");
      if (naclo1Data == null || naclo1Data == "") {
        this.b6 = 2;
      } else {
        this.b6 = naclo1Data;
      }

      const naclo2Data = getValueFromLocalStorage("naclo2Data");
      if (naclo2Data == null || naclo2Data == "") {
        this.b7 = 1;
      } else {
        this.b7 = naclo2Data;
      }
      const carbonData = getValueFromLocalStorage("carbonData");
      if (carbonData == null || carbonData == "") {
        this.b8 = 35;
      } else {
        this.b8 = carbonData;
      }
      const KMnO4Data = getValueFromLocalStorage("KMnO4Data");
      if (KMnO4Data == null || KMnO4Data == "") {
        this.b11 = 1;
      } else {
        this.b11 = KMnO4Data;
      }

      const sludgeData = getValueFromLocalStorage("sludgeData");
      if (sludgeData == null || sludgeData == "") {
        this.b13 = 347.13;
      } else {
        this.b13 = sludgeData;
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
    e19() {
      return (
        parseFloat(this.b2) *
        (1 + parseFloat(this.b2_1) / 100) *
        (1 + parseFloat(this.b2_2) / 100) *
        365
      ).toFixed(4);
    },
    i19() {
      return ((parseFloat(this.e19) * parseFloat(this.g19)) / 10000).toFixed(4);
    },
    j19() {
      return (
        parseFloat(this.i19) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e20() {
      return (
        (parseFloat(this.b2) *
          (1 + parseFloat(this.b2_1) / 100) *
          parseFloat(this.b3) *
          parseFloat(this.b3_1)) /
        1000000
      ).toFixed(4);
    },
    i20() {
      return ((parseFloat(this.e20) * parseFloat(this.g20)) / 10000).toFixed(4);
    },
    j20() {
      return (
        parseFloat(this.i20) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e21() {
      return (
        (parseFloat(this.b2) *
          (1 + parseFloat(this.b2_1) / 100) *
          parseFloat(this.b4) *
          parseFloat(this.b4_1)) /
        1000000
      ).toFixed(4);
    },
    i21() {
      return ((parseFloat(this.e21) * parseFloat(this.g21)) / 10000).toFixed(4);
    },
    j21() {
      return (
        parseFloat(this.i21) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e22() {
      return (
        ((parseFloat(this.b5) * parseFloat(this.b13)) / 1000000) *
        parseFloat(this.b5_1)
      ).toFixed(4);
    },
    i22() {
      return ((parseFloat(this.e22) * parseFloat(this.g22)) / 10000).toFixed(4);
    },
    j22() {
      return (
        parseFloat(this.i22) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e23() {
      return (
        (parseFloat(this.b2) *
          (1 + parseFloat(this.b2_1) / 100) *
          ((parseFloat(this.b6) / (parseFloat(this.b6_2) / 100)) *
            parseFloat(this.b6_1) +
            (parseFloat(this.b7) / (parseFloat(this.b7_2) / 100)) *
              parseFloat(this.b7_1))) /
        1000000
      ).toFixed(4);
    },
    i23() {
      return ((parseFloat(this.e23) * parseFloat(this.g23)) / 10000).toFixed(4);
    },
    j23() {
      return (
        parseFloat(this.i23) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e24() {
      return (
        (parseFloat(this.b2) *
          (1 + parseFloat(this.b2_1) / 100) *
          parseFloat(this.b8) *
          parseFloat(this.b8_1)) /
        1000000
      ).toFixed(4);
    },
    i24() {
      return ((parseFloat(this.e24) * parseFloat(this.g24)) / 10000).toFixed(4);
    },
    j24() {
      return (
        parseFloat(this.i24) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e25() {
      return (
        (parseFloat(this.b2) *
          (1 + parseFloat(this.b2_1) / 100) *
          parseFloat(this.b9) *
          parseFloat(this.b9_1)) /
        1000000
      ).toFixed(4);
    },
    i25() {
      return ((parseFloat(this.e25) * parseFloat(this.g25)) / 10000).toFixed(4);
    },
    j25() {
      return (
        parseFloat(this.i25) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e26() {
      return (
        (parseFloat(this.b2) *
          (1 + parseFloat(this.b2_1) / 100) *
          parseFloat(this.b10) *
          parseFloat(this.b10_1)) /
        1000000
      ).toFixed(4);
    },
    i26() {
      return ((parseFloat(this.e26) * parseFloat(this.g26)) / 10000).toFixed(4);
    },
    j26() {
      return (
        parseFloat(this.i26) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e27() {
      return (
        (parseFloat(this.b2) *
          (1 + parseFloat(this.b2_1) / 100) *
          parseFloat(this.b11) *
          parseFloat(this.b11_1)) /
        1000000
      ).toFixed(4);
    },
    i27() {
      return ((parseFloat(this.e27) * parseFloat(this.g27)) / 10000).toFixed(4);
    },
    j27() {
      return (
        parseFloat(this.i27) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    i28() {
      return (
        parseFloat(this.i20) +
        parseFloat(this.i21) +
        parseFloat(this.i22) +
        parseFloat(this.i23) +
        parseFloat(this.i24) +
        parseFloat(this.i25) +
        parseFloat(this.i26) +
        parseFloat(this.i27)
      ).toFixed(4);
    },
    j28() {
      return (
        parseFloat(this.j20) +
        parseFloat(this.j21) +
        parseFloat(this.j22) +
        parseFloat(this.j23) +
        parseFloat(this.j24) +
        parseFloat(this.j25) +
        parseFloat(this.j26) +
        parseFloat(this.j27)
      ).toFixed(4);
    },
    e29() {
      return (parseFloat(this.b14) * 365).toFixed(4);
    },
    i29() {
      return ((parseFloat(this.e29) * parseFloat(this.g29)) / 10000).toFixed(4);
    },
    j29() {
      return (
        parseFloat(this.i29) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    i30() {
      return ((parseFloat(this.e29) * parseFloat(this.g29)) / 10000).toFixed(4);
    },
    j30() {
      return (
        parseFloat(this.i29) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e31() {
      return (
        ((parseFloat(this.b12) * parseFloat(this.e33)) / 1000) *
        365
      ).toFixed(4);
    },
    i31() {
      return ((parseFloat(this.e31) * parseFloat(this.g31)) / 10000).toFixed(4);
    },
    j31() {
      return (
        parseFloat(this.i31) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    e32() {
      return (
        (parseFloat(this.b13) / (1 - parseFloat(this.b13_1) / 100) / 1000) *
        365
      ).toFixed(4);
    },
    i32() {
      return ((parseFloat(this.e32) * parseFloat(this.g32)) / 10000).toFixed(4);
    },
    j32() {
      return (
        parseFloat(this.i32) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    i33() {
      return ((parseFloat(this.e33) * parseFloat(this.g33)) / 10000).toFixed(4);
    },
    j33() {
      return (
        parseFloat(this.i33) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    i34() {
      return (parseFloat(this.b15) * (parseFloat(this.b15_1) / 100)).toFixed(4);
    },
    j34() {
      return (
        parseFloat(this.i34) /
        (parseFloat(this.b2) / 10000) /
        365
      ).toFixed(4);
    },
    j35() {
      return (
        parseFloat(this.j30) +
        parseFloat(this.j31) +
        parseFloat(this.j32) +
        parseFloat(this.j33) +
        parseFloat(this.j34) +
        parseFloat(this.j28) +
        parseFloat(this.j19)
      ).toFixed(4);
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
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse; /* 删除表格之间的间隔 */
}
table,
th,
td {
  border: 1px solid black; /* 添加表格的边框 */
}
th,
td {
  padding: 8px; /* 设置内边距 */
  text-align: center; /* 文本对齐方式 */
}
th {
  background-color: #f2f2f2; /* 设置表头背景色 */
}
input {
  border: none;
}
</style>
