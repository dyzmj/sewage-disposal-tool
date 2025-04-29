<template>
  <div class="container" style="background-color: #edeff2">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px; height: 100%;"
        :xl="24"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :title="$t('authPage')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <div class="baseQueryParam">
            <a-form
              :form="form"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
              @submit="handleSubmit"
            >
              <a-form-item :label="$t('machineCode')">
                <a-input
                  v-decorator="[
                    'machineCode',
                    {
                      rules: [
                        {
                          required: true,
                          message: '请先输入机器码！',
                          length: 40,
                        },
                      ],
                    },
                  ]"
                >
                  <a-icon slot="prefix" type="robot" />
                </a-input>
              </a-form-item>
              <a-form-item :label="$t('days')">
                <a-input-number :max="9999"  :min="1" style="width: 100%;" v-model="days"/>
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" html-type="submit">
                  {{ $t("genCert") }}
                </a-button>
                <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
                  {{ $t("clear") }}
                </a-button>
              </a-form-item>
              <a-form-item :label="$t('certificate')">
                <a-input v-model="certificate" :disabled="true">
                  <a-icon slot="prefix" type="safety-certificate" />
                </a-input>
              </a-form-item>
              <br />
              <br />
              <br />
              <br />
            </a-form>
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
// import CryptoJS from "crypto-js";
import { encrypt, decrypt } from "@/utils/aes";


export default {
  name: "Demo",
  i18n: require("./i18n"),
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      certificate: "",
      code: "",
      days: 10,
    };
  },
  computed: {
    ...mapState("setting", ["pageMinHeight"]),
    desc() {
      return this.$t("description");
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          if(this.days == 0 || this.days == null){
            this.$message.error("请输入天数！");
          }
          this.$message.info("正在生成授权证书");
          let dateLimit = this.addDaysToDate(this.days);
          let code = values.machineCode + "_" + dateLimit;

          this.certificate = encrypt(code);

          let aa = decrypt(this.certificate);
          console.log("解密后的数据", aa);

          // const dataHex = CryptoJS.enc.Utf8.parse(code);
          // const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
          //     iv: SECRET_IV,
          //     mode: CryptoJS.mode.CBC,
          //     padding: CryptoJS.pad.Pkcs7
          // });
          // this.certificate = encrypted.ciphertext.toString();

          // // 加密机器码
          // let test = CryptoJS.SHA256(code);
          // // 使用16进制的方法加密，输出字符串
          // let testStr = CryptoJS.enc.Hex.stringify(test);

          // this.certificate = testStr;
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
    addDaysToDate( days) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + days);
      // 格式化新的日期
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1
      const day = String(currentDate.getDate()).padStart(2, '0');
      // 返回格式化的日期字符串
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style scoped></style>
