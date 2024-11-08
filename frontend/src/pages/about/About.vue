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
          :title="$t('aboutPage')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <div class="baseQueryParam">
            <div
              v-html="showText1"
              style="font-size: 20px; text-indent: 2em;"
            ></div>
            <div
              v-html="showText2"
              style="font-size: 20px; text-indent: 2em;"
            ></div>
            <div
              v-html="showText3"
              style="font-size: 20px; text-indent: 2em;"
            ></div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Demo",
  i18n: require("./i18n"),
  data() {
    return {
      timer1: null, //settimeout

      showText1: "",
      showText2: "",
      showText3: "",
    };
  },
  computed: {
    ...mapState("setting", ["pageMinHeight"]),
    desc() {
      return this.$t("description");
    },
  },
  mounted() {
    this.convertText();
  },
  methods: {
    async convertText() {
      await this.appear1(
        "中国电建集团北京勘测设计研究院有限公司（简称：北京院）始建于1953年，是大型综合性勘测设计研究单位，现为中国电力建设集团有限公司（世界500强企业）的全资子企业。/n </br>"
      );
      await this.appear2(
        "北京院主要从事水电、水利、工民建、新能源（风电、光伏）、市政、路桥、文保等领域的规划、测绘、勘察、设计、科研、咨询、监理、环保、水保、监测、岩土治理、工程总承包以及投资等业务。/n </br>"
      );
      await this.appear3(
        "截至2019年12月底，注册资本金8亿元，资产总额33.67亿元，正式员工1141人，其中，正高级职称211人，副高级职称417人，中级职称310人；电力勘测设计大师3人，享受政府特殊津贴的专家5人； " +
          "各类注册执业资格证书400余个，涵盖一级注册建筑师、一级注册结构工程师、注册建造师等18个专业。/n " +
          "北京院拥有工程设计综合甲级，工程勘察综合甲级，水利水电工程施工总承包壹级，测绘甲级，工程咨询单位资信甲级，工程造价咨询企业甲级，水文、水资源调查评价甲级，水资源论证甲级，水土保持方案编制单位水平评价四星，" +
          "水利工程质量检测单位甲级，地质灾害治理工程勘查、设计甲级，水利水电、电力、市政、房屋建筑、人防、水保环保、机电及金属结构设备制造等工程监理甲级，文物保护工程勘察设计甲级、施工一级等近20项国家甲级资质证书， " +
          "具有对外承包工程经营资格证书、海关进出口货物收发货人报关注册登记书及检验检测机构资质认定证书等，在抽水蓄能电站、常规水电站、新能源工程勘察设计领域处于领先地位，并在水利水务、工程监理、工业与民用建筑、设备成套、" +
          "移民监理、环保水保、水文水资源、路桥、工程造价、金属结构、工程安全监测检测、文物保护与岩土治理等专业领域形成了较强的技术优势。"
      );
    },

    async appear1(content) {
      await new Promise((resolve) => {
        const _this = this;
        this.showText1 = "";
        clearTimeout(this.timer1);

        var speed = 50; //设置定时的速度 越来越快
        var count = 1;
        content = content.replace(/\/n/g, "<br/>");
        function changeContent() {
          _this.showText1 = content.substring(0, count); //截取字符串
          count++;

          if (count != content.length + 1) {
            speed -= 1;
            if (speed < 5) speed = 5;

            _this.timer1 = setTimeout(changeContent, speed);
          }
        }
        changeContent();
        setTimeout(resolve, 2000);
      });
    },
    async appear2(content) {
      await new Promise((resolve) => {
        const _this = this;
        this.showText2 = "";
        clearTimeout(this.timer1);

        var speed = 40; //设置定时的速度 越来越快
        var count = 1;
        content = content.replace(/\/n/g, "<br/>");
        function changeContent() {
          _this.showText2 = content.substring(0, count); //截取字符串
          count++;

          if (count != content.length + 1) {
            speed -= 1;
            if (speed < 5) speed = 5;
            _this.timer1 = setTimeout(changeContent, speed);
          }
        }
        changeContent();
        setTimeout(resolve, 2000);
      });
    },
    async appear3(content) {
      const _this = this;
      this.showText3 = "";
      clearTimeout(this.timer1);
      var speed = 30; //设置定时的速度 越来越快
      var count = 1;
      content = content.replace(/\/n/g, "<br/>");
      function changeContent() {
        _this.showText3 = content.substring(0, count); //截取字符串
        count++;

        if (count != content.length + 1) {
          speed -= 1;
          if (speed < 5) speed = 5;

          _this.timer1 = setTimeout(changeContent, speed);
        }
      }
      changeContent();

      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
    },
  },
};
</script>

<style scoped></style>
