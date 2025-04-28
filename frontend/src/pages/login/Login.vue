<template>
  <common-layout>
    <div class="top" style="margin-right: 100px;">
      <div class="header">
        <img alt="logo" class="logo" src="@/assets/img/logo.png" />
        <span style="color: #ffffff;" class="title">{{ systemName }}</span>
      </div>
      <div class="desc" style="color: #ffffff;">&nbsp;</div>
    </div>
    <div class="login" style="margin-right: 100px;">
      <a-form @submit="onSubmit" :form="form">
        <a-form-item v-show="false">
          <h3
            class="title"
            style="text-align: center; font-size: 20px; color: #ffffff;"
          >
            账户密码登录
          </h3>
        </a-form-item>
        <a-alert
          type="error"
          :closable="true"
          v-if="error"
          :message="error"
          @close="onClose"
          showIcon
          style="margin-bottom: 24px;"
        />
        <!-- <a-form-item v-show="false">
          <a-input
            v-model="username"
            autocomplete="autocomplete"
            size="large"
            placeholder="用户账号:user123"
            v-decorator="[
              'name',
              {
                rules: [
                  { required: true, message: '请输入账户名', whitespace: true },
                ],
              },
            ]"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-item>
        <a-form-item v-show="false">
          <a-input
            v-model="password"
            size="large"
            placeholder="用户密码:******"
            autocomplete="autocomplete"
            type="password"
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: '请输入密码', whitespace: true },
                ],
              },
            ]"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-item> -->
        <a-form-item>
          <a-button
            :loading="logging"
            style="width: 80%;margin-top: 124px"
            size="large"
            htmlType="submit"
            type="primary"
            >进入软件</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </common-layout>
</template>

<script>
import CommonLayout from "@/layouts/CommonLayout";
import { login, getRoutesConfig } from "@/services/user";
import { setAuthorization } from "@/utils/request";
import { loadRoutes } from "@/utils/routerUtil";
import { mapMutations } from "vuex";
import { ipcApiRoute } from "@/api/main";
import { ipc } from "@/utils/ipcRenderer";
import CryptoJS from "crypto-js";

export default {
  name: "Login",
  components: { CommonLayout },
  data() {
    return {
      logging: false,
      error: "",
      form: this.$form.createForm(this),
      username: "user123",
      password: "888888",
    };
  },
  computed: {
    systemName() {
      return this.$store.state.setting.systemName;
    },
  },
  methods: {
    ...mapMutations("account", ["setUser", "setPermissions", "setRoles"]),
    async onSubmit(e) {
      e.preventDefault();

      this.$message.info("正在校验证书，请稍等...");
      // 校验证书
      try {
        await this.processCert();
      } catch (error) {
        console.log(error);
        this.$message.error(error);
        return;
      }

      this.form.validateFields((err) => {
        if (!err) {
          this.logging = true;
          const name = "user123";
          const password = "888888";
          login(name, password).then(this.afterLogin);
        }
      });
    },
    afterLogin(res) {
      this.logging = false;
      const loginRes = res.data;
      if (loginRes.code >= 0) {
        const { user, permissions, roles } = loginRes.data;
        this.setUser(user);
        this.setPermissions(permissions);
        this.setRoles(roles);
        setAuthorization({
          token: loginRes.data.token,
          expireAt: new Date(loginRes.data.expireAt),
        });
        // 获取路由配置
        getRoutesConfig().then((result) => {
          const routesConfig = result.data.data;
          loadRoutes(routesConfig);
          this.$router.push("/works");
          this.$message.success(loginRes.message, 3);
        });
      } else {
        this.error = loginRes.message;
      }
    },
    onClose() {
      this.error = false;
    },
    async processCert() {
      try {
        // TODO: 校验是否进行过认证
        const certificate = await this.getRegistration().then((res) => {
          // console.log("====");
          // console.log(res);
          return res;
        });
        if (
          certificate === null ||
          certificate === undefined ||
          certificate === ""
        ) {
          throw "证书不存在，请重新认证！";
        }
        console.info("证书：" + certificate);

        // 获取本地机器码
        const machineCode = await this.getMachineCode().then((res) => {
          // console.log(res);
          return res;
        });
        console.info("机器码：" + machineCode);

        let crypt = CryptoJS.SHA256(machineCode);
        let cryptCertificate = CryptoJS.enc.Hex.stringify(crypt);

        console.info("机器码加密：" + cryptCertificate);

        if (certificate !== cryptCertificate) {
          throw "证书与机器码不匹配，请重新认证！";
        }
      } catch (error) {
        console.error("Error process:", error);
        throw error;
      }
    },
    async getRegistration() {
      try {
        const result = await ipc.invoke(ipcApiRoute.getRegistration);
        return result;
      } catch (error) {
        console.log("获取证书异常：" + error);
      }
    },
    async getMachineCode() {
      try {
        const machineCode = await ipc.invoke(ipcApiRoute.getMachineCode);
        return machineCode;
      } catch (error) {
        console.log("获取机器码异常：" + error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.common-layout {
  .top {
    text-align: right;

    .header {
      height: 44px;
      line-height: 44px;

      a {
        text-decoration: none;
      }

      .logo {
        height: 44px;
        vertical-align: top;
        margin-right: 16px;
      }

      .title {
        font-size: 33px;
        color: @title-color;
        font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
          sans-serif;
        font-weight: 600;
        position: relative;
        top: 2px;
      }
    }

    .desc {
      font-size: 14px;
      color: @text-color-second;
      margin-top: 12px;
      margin-bottom: 40px;
    }
  }

  .login {
    width: 368px;
    margin: 0 auto;

    @media screen and (max-width: 576px) {
      width: 95%;
    }

    @media screen and (max-width: 320px) {
      .captcha-button {
        font-size: 14px;
      }
    }

    .icon {
      font-size: 24px;
      color: @text-color-second;
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: @primary-color;
      }
    }
  }

  color: red;
}
</style>
