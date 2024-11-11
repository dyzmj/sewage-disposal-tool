<template>
  <div id="container">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px"
        :xl="24"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :loading="loading"
          :title="$t('processUnit')"
          style="margin-bottom: 0px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <!-- <img src="./wio.svg" style="background-color: gray; width: 100%; height: 700px;" /> -->
          <div id="svgTemplate" ref="svg"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import proSvg from "./wio.svg";
import { mapState } from "vuex";
import Vue from "vue/dist/vue.esm.js";
import { getValueFromLocalStorage } from "@/utils/exportUtil";

export default {
  name: "Demo",
  i18n: require("./i18n"),
  data() {
    return {
      loading: false,
      processUnit: [],
      processUnitData: [],
      modelVisible: false,
      param1: null,
      svgDom: null,
      allDom: null,
      rectDom: null,
    };
  },
  methods: {
    initProcessUnitData() {
      // 初始化
      this.fc1001();
      this.fc1002();
      this.fc1003();
      this.fc1004();
      this.fc1005();
      this.fc1006();
      this.fc1007();
      this.fc2001();
      this.fc2002();
      this.fc2003();
      this.fc2004();
      this.fc2005();
      this.fc3001();
      this.fc3002();
      this.fc3003();
      this.fc3004();
      this.fc3005();
      this.fc3006();
      this.fc4001();
      this.fc4002();
      this.fc5001();
      this.fc5002();
      this.fc6001();
      this.fc6002();
      this.fc6003();
      this.fc6004();
      this.fc6005();
      this.fc6006();
      this.fc8001();
      this.fc8002();
      this.fc9001();
      this.fc9002();
    },
    fc1001() {
      // 生物接触氧化池
      const fc1001 = getValueFromLocalStorage("fc1001");
      const dom1003 = document.getElementById("1003");
      // ;
      if (fc1001 === '1'){
        dom1003.style.fill = "#1ba1e2";
      }else {
        dom1003.style.fill = "none";
      }
    },
    fc1002() {
      // 预沉池
      const fc1002 = getValueFromLocalStorage("fc1002");
      const dom1002 = document.getElementById("1002");
      if (fc1002 === '1'){
        dom1002.style.fill = "#1ba1e2";
      }else {
        dom1002.style.fill = "none";
      }
    },
    fc1003() {
      // // 配水井
      // const fc1003 = getValueFromLocalStorage("fc1003");
      // const fc1004 = getValueFromLocalStorage("fc1004");
      // const fc1005 = getValueFromLocalStorage("fc1005");
      // const fc1006 = getValueFromLocalStorage("fc1006");

      // const dom1001 = document.getElementById("1001");
      // if (fc1003 === '1' || fc1004 === '1' || fc1005 === '1' || fc1006 === '1'){
      //   dom1001.style.fill = "#1ba1e2";
      // }else {
      //   dom1001.style.fill = "none";
      // }
    },
    fc1004() {
      // 配水井
      // const fc1004 = getValueFromLocalStorage("fc1004");
      // const dom1001 = document.getElementById("1001");
      // if (fc1004 === '1'){
      //   dom1001.style.fill = "#1ba1e2";
      // }else {
      //   dom1001.style.fill = "none";
      // }
    },
    fc1005() {
      // 配水井
      // const fc1005 = getValueFromLocalStorage("fc1005");
      // const dom1001 = document.getElementById("1001");
      // if (fc1005 === '1'){
      //   dom1001.style.fill = "#1ba1e2";
      // }else {
      //   dom1001.style.fill = "none";
      // }
    },
    fc1006() {
      // 配水井
      // const fc1006 = getValueFromLocalStorage("fc1006");
      // const dom1001 = document.getElementById("1001");
      // if (fc1006 === '1'){
      //   dom1001.style.fill = "#1ba1e2";
      // }else {
      //   dom1001.style.fill = "none";
      // }
    },
    fc1007() {
      // 机械絮凝池\折板絮凝池\网格絮凝池
      // const fc1007 = getValueFromLocalStorage("fc1007");
      // const dom1004 = document.getElementById("1004");
      // const dom1005 = document.getElementById("1005");
      // const dom1030 = document.getElementById("1030");
      // if (fc1007 === '1'){
      //   dom1004.style.fill = "#1ba1e2";
      //   dom1005.style.fill = "#1ba1e2";
      //   dom1030.style.fill = "#1ba1e2";
      // }else {
      //   dom1004.style.fill = "none";
      //   dom1005.style.fill = "none";
      //   dom1030.style.fill = "none";
      // }
    },
    fc2001() {
      // 机械絮凝池
      const fc2001 = getValueFromLocalStorage("fc2001");
      const dom1004 = document.getElementById("1004");
      if (fc2001 === '1'){
        dom1004.style.fill = "#1ba1e2";
      }else {
        dom1004.style.fill = "none";
      }
    },
    fc2002() {
      // 网格絮凝池
      const fc2002 = getValueFromLocalStorage("fc2002");
      const dom1030 = document.getElementById("1030");
      if (fc2002 === '1'){
        dom1030.style.fill = "#1ba1e2";
      }else {
        dom1030.style.fill = "none";
      }
    },
    fc2003() {
      // 折板絮凝池
      const fc2003 = getValueFromLocalStorage("fc2003");
      const dom1005 = document.getElementById("1005");
      if (fc2003 === '1'){
        dom1005.style.fill = "#1ba1e2";
      }else {
        dom1005.style.fill = "none";
      }
    },
    fc2004() {
      // const fc2004 = getValueFromLocalStorage("fc2004");
      // const dom1004 = document.getElementById("1004");
      // const dom1005 = document.getElementById("1005");
      // const dom1030 = document.getElementById("1030");
      // if (fc2004 === '1'){
      //   dom1004.style.fill = "#1ba1e2";
      //   dom1005.style.fill = "#1ba1e2";
      //   dom1030.style.fill = "#1ba1e2";
      // }else {
      //   dom1004.style.fill = "none";
      //   dom1005.style.fill = "none";
      //   dom1030.style.fill = "none";
      // }
    },
    fc2005() {
      // const fc2005 = getValueFromLocalStorage("fc2005");
      // const dom1004 = document.getElementById("1004");
      // const dom1005 = document.getElementById("1005");
      // const dom1030 = document.getElementById("1030");
      // if (fc2005 === '1'){
      //   dom1004.style.fill = "#1ba1e2";
      //   dom1005.style.fill = "#1ba1e2";
      //   dom1030.style.fill = "#1ba1e2";
      // }else {
      //   dom1004.style.fill = "none";
      //   dom1005.style.fill = "none";
      //   dom1030.style.fill = "none";
      // }
    },
    fc3001() {
      // 平流沉淀池
      const fc3001 = getValueFromLocalStorage("fc3001");
      const dom1006 = document.getElementById("1006");
      if (fc3001 === '1'){
        dom1006.style.fill = "#1ba1e2";
      }else {
        dom1006.style.fill = "none";
      }
    },
    fc3002() {
      // 斜管沉淀池
      const fc3002 = getValueFromLocalStorage("fc3002");
      const dom1007 = document.getElementById("1007");
      if (fc3002 === '1'){
        dom1007.style.fill = "#1ba1e2";
      }else {
        dom1007.style.fill = "none";
      }
    },
    fc3003() {
      // 高密度沉淀池
      const fc3003 = getValueFromLocalStorage("fc3003");
      const dom1017 = document.getElementById("1017");
      if (fc3003 === '1'){
        dom1017.style.fill = "#1ba1e2";
      }else {
        dom1017.style.fill = "none";
      }
    },
    fc3004() {
      // 机械澄清池
      const fc3004 = getValueFromLocalStorage("fc3004");
      const dom1018 = document.getElementById("1018");
      if (fc3004 === '1'){
        dom1018.style.fill = "#1ba1e2";
      }else {
        dom1018.style.fill = "none";
      }
    },
    fc3005() {
      // 水力循环澄清池
      const fc3005 = getValueFromLocalStorage("fc3005");
      const dom1019 = document.getElementById("1019");
      if (fc3005 === '1'){
        dom1019.style.fill = "#1ba1e2";
      }else {
        dom1019.style.fill = "none";
      }
    },
    fc3006() {
      // 气浮池
      const fc3006 = getValueFromLocalStorage("fc3006");
      const dom1020 = document.getElementById("1020");
      if (fc3006 === '1'){
        dom1020.style.fill = "#1ba1e2";
      }else {
        dom1020.style.fill = "none";
      }
    },
    fc4001() {
      // 普通快滤池
      const fc4001 = getValueFromLocalStorage("fc4001");
      const dom1008 = document.getElementById("1008");
      if (fc4001 === '1'){
        dom1008.style.fill = "#1ba1e2";
      }else {
        dom1008.style.fill = "none";
      }
    },
    fc4002() {
      // V型滤池
      const fc4002 = getValueFromLocalStorage("fc4002");
      const dom1009 = document.getElementById("1009");
      if (fc4002 === '1'){
        dom1009.style.fill = "#1ba1e2";
      }else {
        dom1009.style.fill = "none";
      }
    },
    fc5001() {
      // 臭氧活性炭
      const fc5001 = getValueFromLocalStorage("fc5001");
      const dom1010 = document.getElementById("1010");
      if (fc5001 === '1'){
        dom1010.style.fill = "#1ba1e2";
      }else {
        dom1010.style.fill = "none";
      }
    },
    fc5002() {
      // 超滤
      const fc5002 = getValueFromLocalStorage("fc5002");
      const dom1012 = document.getElementById("1012");
      if (fc5002 === '1'){
        dom1012.style.fill = "#1ba1e2";
      }else {
        dom1012.style.fill = "none";
      }
    },
    fc6001() {
      // const fc6001 = getValueFromLocalStorage("fc6001");
      // const dom6001 = document.getElementById("6001");
      // if (fc6001 === '1'){
      //   dom6001.style.fill = "#1ba1e2";
      // }else {
      //   dom6001.style.fill = "none";
      // }
    },
    fc6002() {
      // const fc6002 = getValueFromLocalStorage("fc6002");
      // const dom6002 = document.getElementById("6002");
      // if (fc6002 === '1'){
      //   dom6002.style.fill = "#1ba1e2";
      // }else {
      //   dom6002.style.fill = "none";
      // }
    },
    fc6003() {
      // const fc6003 = getValueFromLocalStorage("fc6003");
      // const dom6003 = document.getElementById("6003");
      // if (fc6003 === '1'){
      //   dom6003.style.fill = "#1ba1e2";
      // }else {
      //   dom6003.style.fill = "none";
      // }
    },
    fc6004() {
      // const fc6004 = getValueFromLocalStorage("fc6004");
      // const dom6004 = document.getElementById("6004");
      // if (fc6004 === '1'){
      //   dom6004.style.fill = "#1ba1e2";
      // }else {
      //   dom6004.style.fill = "none";
      // }
    },
    fc6005() {
      // const fc6005 = getValueFromLocalStorage("fc6005");
      // const dom6005 = document.getElementById("6005");
      // if (fc6005 === '1'){
      //   dom6005.style.fill = "#1ba1e2";
      // }else {
      //   dom6005.style.fill = "none";
      // }
    },
    fc6006() {
      // const fc6006 = getValueFromLocalStorage("fc6006");
      // const dom6006 = document.getElementById("6006");
      // if (fc6006 === '1'){
      //   dom6006.style.fill = "#1ba1e2";
      // }else {
      //   dom6006.style.fill = "none";
      // }
    },
    fc8001() {
      // const fc8001 = getValueFromLocalStorage("fc8001");
      // const dom8001 = document.getElementById("8001");
      // if (fc8001 === '1'){
      //   dom8001.style.fill = "#1ba1e2";
      // }else {
      //   dom8001.style.fill = "none";
      // }
    },
    fc8002() {
      // 清水池
      const fc8002 = getValueFromLocalStorage("fc8002");
      const dom1011 = document.getElementById("1011");
      if (fc8002 === '1'){
        dom1011.style.fill = "#1ba1e2";
      }else {
        dom1011.style.fill = "none";
      }
    },
    fc9001() {
      // 污泥浓缩池
      const fc9001 = getValueFromLocalStorage("fc9001");
      const dom1015 = document.getElementById("1015");
      // 排水池
      const dom1014 = document.getElementById("1014");
      // 排泥池
      const dom1016 = document.getElementById("1016");
      // 污泥平衡池
      const dom1021 = document.getElementById("1021");
      if (fc9001 === '1'){
        dom1015.style.fill = "#1ba1e2";
        dom1014.style.fill = "#1ba1e2";
        dom1016.style.fill = "#1ba1e2";
        dom1021.style.fill = "#1ba1e2";
      }else {
        dom1015.style.fill = "none";
        dom1014.style.fill = "none";
        dom1016.style.fill = "none";
        dom1021.style.fill = "none";
      }
    },
    fc9002() {
      // const fc9002 = getValueFromLocalStorage("fc9002");
      // const dom9002 = document.getElementById("9002");
      // if (fc9002 === '1'){
      //   dom9002.style.fill = "#1ba1e2";
      // }else {
      //   dom9002.style.fill = "none";
      // }
    },
    loadSvg() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", proSvg, true);
      xhr.send();
      xhr.addEventListener("load", () => {
        const resXML = xhr.responseXML;
        this.svgDom = resXML.documentElement.cloneNode(true);
        // 为 svg - dom 设置宽高边框样式
        this.svgDom.style.width = "100%";
        this.svgDom.style.height = "100%";
        this.svgDom.style.border = "1px solid yellow";
        // 为svg添加鼠标滚动缩放事件
        // this.svgDom.setAttribute("v-on:mousewheel", "this.havcZooming($event)");

        // let btm = this.svgDom.getElementById("1");
        // // ;
        // btm.setAttribute("v-on:click", "this.handleClick($event)");

        // svg - g
        // let adomNodeAll = this.svgDom.getElementsByTagName("g");

        // //  循环修改节点样式 添加事件
        // for(let i = 0; i < adomNodeAll.length; i++) {
        //   // adomNodeAll[i].style.cursor = 'pointer' // 修改节点样式
        //   // let currNodeId = adomNodeAll[i].getAttribute('id')
        //   adomNodeAll[i].setAttribute("v-on:click", "this.handleClick($event)"); // 为每个节点绑定点击事件
        //   // let currNode = this.svgDom.getElementById(currNodeId)
        // }
        //  设置 id 属性
        let gtag = this.svgDom.getElementsByTagName("g");
        gtag[0].setAttribute("id", "svgcanvas");

        // 将svgDom对象转换成vue的虚拟dom
        var oSerializer = new XMLSerializer();
        var sXML = oSerializer.serializeToString(this.svgDom);
        var Profile = Vue.extend({
          template:
            "<div id='svgTemplate' style='background-color: black; height:700px'>" +
            sXML +
            "</div>",
        });
        // 创建实例，并挂载到元素上
        new Profile().$mount("#svgTemplate");

        let svgcanvasDom = document.getElementById("svgcanvas");
        // this.allDom = svgcanvasDom.getElementsByTagName("g");
        // for(let i = 0; i < this.allDom.length; i++) {
        //   let currNodeId = this.allDom[i].id
        //   this.allDom[i].setAttribute("v-on:click", "this.handleClick()"); // 为每个节点绑定点击事件
        //   console.log('当前g标签下的节点id----->>>', currNodeId)
        // }

        this.rectDom = svgcanvasDom.getElementsByTagName("rect");
        for (let i = 0; i < this.rectDom.length; i++) {
          // let currNodeId = this.rectDom[i].id
          // this.rectDom[i].setAttribute("v-on:click", "this.handleClick()"); // 为每个节点绑定点击事件
          // console.log('当前 rect 标签下的节点id----->>>', currNodeId)

          this.rectDom[i].addEventListener("click", function(event) {
            console.log(">>>>>>>>Rectangle clicked!", event);
            this.rectDom[i].style.fill = "green";
          });
        }
      });
    },
  },
  computed: {
    ...mapState("setting", ["pageMinHeight"]),
    desc() {
      return this.$t("description");
    },
  },
  watch() {
    this.initProcessUnitData();
  },
  activated() {
    // this.loadSvg();
    this.initProcessUnitData();
  },
  mounted() {
    // this.loadSvg();
    // this.initProcessUnitData();
    //  svg 点击事件
    // window["handleClick"] = () => {
    //   console.log("点击事件----->>>");
    // };
  },
  created() {
    
    this.loadSvg();
    // setTimeout(() => { console.log('pause')}, 1000);
    this.initProcessUnitData();
  }
};
</script>

<style scoped>
.container {
  background-color: gray;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes run {
  from {
    stroke-dasharray: 10, 5;
  }

  to {
    stroke-dasharray: 40, 5;
  }
}

@keyframes hacvRun {
  from {
    stroke-width: 6;
    /* stroke-dashoffset: 0; */
    stroke-dasharray: 10, 8;
  }

  to {
    stroke-width: 6;
    stroke-dashoffset: 0;
    stroke-dasharray: 10, 8;
  }
}
</style>
