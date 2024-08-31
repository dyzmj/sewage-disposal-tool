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
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
              @submit="handleSubmit"
            >
              <a-row :gutter="24">
                <a-col
                  v-for="i in 10"
                  :key="i"
                  :span="8"
                  :style="{ display: i < count ? 'block' : 'none' }"
                >
                  <a-form-item :label="`Field ${i}`">
                    <a-input
                      v-decorator="[
                        `field-${i}`,
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Input something!',
                            },
                          ],
                        },
                      ]"
                      placeholder="placeholder"
                    />
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-button type="primary" html-type="submit">
                                    提交
                                </a-button>
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
import { ipcApiRoute } from "@/api/main";
import { ipc } from "@/utils/ipcRenderer";
import CryptoJS from "crypto-js";

export default {
  name: "Demo",
  i18n: require("./i18n"),
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      certificate: "",
      code: "",
    };
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
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$message.info("正在生成授权证书");
          // 加密机器码
          // let key = "dyzmj1234567890123456dyzmj";
          let test = CryptoJS.SHA256(values.machineCode);
          // 使用16进制的方法加密，输出字符串
          let testStr = CryptoJS.enc.Hex.stringify(test);

          this.certificate = testStr;
        }
      });
    },
    handleReset() {
      this.form.resetFields();
      this.certificate = "";
      this.code = "";
    },
    async getMachineCode() {
      this.$message.info("开始获取本地证书");
      try {
        const result = await ipc.invoke(ipcApiRoute.getRegistration);
        this.code = result;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
