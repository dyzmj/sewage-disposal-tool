<template>
  <div id="container">
    <a-row style="margin: 0 -6px">
      <a-col style="padding: 0 6px" :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :title="$t('baseQueryParam')"
          style="margin-bottom: 2  4px" :bordered="false" :body-style="{ padding: 4 }" :headStyle='{"font-weight": "bolder"}'>
          <div class="baseQueryParam">
            <a-form class="diy-advanced-search-form" :form="form" @submit="handleSearch">
              <a-form-item :label="$t('param1')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-input :style="{ width: '70%' }" v-decorator="[`param1`]" :placeholder="$t('inputOne')"
                    :disabled="false" />
                  <a-input :style="{ width: '30%' }" :value="$t('param1_u')" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param2')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-input :style="{ width: '70%' }" v-decorator="[`param2`]" :placeholder="$t('inputOne')"
                    :disabled="false" />
                  <a-input :style="{ width: '30%' }" :value="$t('param2_u')" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param3')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-input :style="{ width: '70%' }" v-decorator="[`param3`]" :placeholder="$t('inputOne')"
                    :disabled="false" />
                  <a-input :style="{ width: '30%' }" :value="$t('param3_u')" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param4')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-input :style="{ width: '100%' }" v-decorator="[`param4`]" :placeholder="$t('inputOne')"
                  :disabled="false" />
              </a-form-item>
              <a-form-item :label="$t('param5')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-select v-decorator="[`param5`]" style="width: 100%" :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    无
                  </a-select-option>
                  <a-select-option value="1">
                    有
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item :label="$t('param6')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-select v-decorator="[`param6`]" style="width: 100%" :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    无
                  </a-select-option>
                  <a-select-option value="1">
                    有
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item :label="$t('param7')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-select v-decorator="[`param7`]" style="width: 70%" :placeholder="$t('selectOne')">
                    <a-select-option value="0">
                      &lt;= 3
                    </a-select-option>
                    <a-select-option value="1">
                      常年 3~10
                    </a-select-option>
                    <a-select-option value="2">
                      常年 > 5
                    </a-select-option>
                    <a-select-option value="3">
                      水质突变或季节性变化
                    </a-select-option>
                  </a-select>
                  <a-input :style="{ width: '30%' }" :value="$t('param7_u')" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param8')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-select v-decorator="[`param8`]" style="width: 100%" :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    无
                  </a-select-option>
                  <a-select-option value="1">
                    有
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item :label="$t('param9')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-input :style="{ width: '70%' }" v-decorator="[`param9`]" :placeholder="$t('inputOne')"
                    :disabled="false" />
                  <a-input :style="{ width: '30%' }" :value="$t('param9_u')" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param11')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input :style="{ width: '100%' }" v-decorator="[`param11`]" :placeholder="$t('inputOne')"
                  :disabled="false" />
              </a-form-item>
              <a-form-item :label="$t('param12')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-input :style="{ width: '70%' }" v-decorator="[`param12`]" :placeholder="$t('inputOne')"
                    :disabled="false" />
                  <a-input :style="{ width: '30%' }" :value="$t('param12_u')" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param13')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-select v-decorator="[`param13`]" style="width: 100%" :placeholder="$t('selectOne')">
                    <a-select-option value="0">
                      否
                    </a-select-option>
                    <a-select-option value="1">
                      是
                    </a-select-option>
                  </a-select>
                </a-input-group>
              </a-form-item>
              <a-form-item style="margin-top: 0px; margin-bottom: 7px" :wrapperCol="{ span: 18, offset: 6 }">
                <a-button html-type="submit" type="primary">{{ $t('submit') }}</a-button>
                <a-button @click="handleReset" style="margin-left: 8px">{{ $t('reset') }}</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
      </a-col>
      <a-col style="padding: 0 6px; padding-bottom: 10px" :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :title="$t('processUnit')" style="margin-bottom: 0px" :headStyle='{"font-weight": "bolder"}'
          :bordered="false">
          <!-- <img src="./wio.svg" style="background-color: gray; width: 100%; height: 700px;" /> -->
          <div id="svgTemplate" ref="svg"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>

</template>

<script>
import * as d3 from 'd3';
import proSvg from './wio.svg';
import { mapState } from 'vuex';
import Vue from 'vue/dist/vue.esm.js'

export default {
  name: 'Demo',
  i18n: require('./i18n'),
  data() {
    return {
      form: this.$form.createForm(this, { name: 'advanced_search' }),
      loading: false,
      processUnit: [],
      processUnitData: [],
      modelVisible: false,
      param1: null,
      svgDom: null,
      allDom: null,
      rectDom: null,
    }
  },
  created() {
    this.loadSvg();
  },
  computed: {
    ...mapState('setting', ['pageMinHeight']),
    desc() {
      return this.$t('description')
    }
  },
  mounted() {
    //  svg 点击事件
    window['handleClick'] = () => {
      debugger;
      console.log('点击事件----->>>')
    },
    //  svg 鼠标滚动事件
    window['havcZooming'] = (e) => {
      console.log(e, 'havcZooming----->>>')
      // this.zoomimg();
    }
  },
  methods: {
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        console.log('error', error);
        console.log('Received values of form: ', values);
        console.log(values.param1)
        console.log(this.processUnit)

        console.log('param1: ', values.param1)
        console.info(values)
        // 含砂量
        if(values.param1 >= 80){
          this.processUnit[0].children[1].checked = true
          this.processUnit[0].children[1].color = '#2db7f5' 
          // 2db7f5
        }else if(values.param1 < 80){
          this.processUnit[0].children[1].checked = false
          this.processUnit[0].children[1].color = '#6C767D' 
        }
        // 铁
        if(values.param2 > 0.3){
          this.processUnit[7].children[4].checked = true
          this.processUnit[7].children[4].color = '#2db7f5'
          this.processUnit[7].children[5].checked = true
          this.processUnit[7].children[5].color = '#2db7f5' 
          this.processUnit[7].children[9].checked = true
          this.processUnit[7].children[9].color = '#2db7f5' 
          this.processUnit[4].children[0].checked = true
          this.processUnit[4].children[0].color = '#2db7f5' 
        }
        // 锰
        if(values.param3 > 0.1){
          this.processUnit[7].children[4].checked = true
          this.processUnit[7].children[4].color = '#2db7f5'
          this.processUnit[7].children[5].checked = true
          this.processUnit[7].children[5].color = '#2db7f5' 
          this.processUnit[7].children[9].checked = true
          this.processUnit[7].children[9].color = '#2db7f5' 
          this.processUnit[4].children[0].checked = true
          this.processUnit[4].children[0].color = '#2db7f5' 
        }
        // 色度
        if(values.param4 > 15){
          this.processUnit[7].children[4].checked = true
          this.processUnit[7].children[4].color = '#2db7f5'
          this.processUnit[7].children[5].checked = true
          this.processUnit[7].children[5].color = '#2db7f5' 
          this.processUnit[7].children[9].checked = true
          this.processUnit[7].children[9].color = '#2db7f5' 
          this.processUnit[4].children[0].checked = true
          this.processUnit[4].children[0].color = '#2db7f5' 
        }

        // 嗅味
        if(values.param5 === '1'){
          this.processUnit[7].children[4].checked = true
          this.processUnit[7].children[4].color = '#2db7f5'
          this.processUnit[7].children[5].checked = true
          this.processUnit[7].children[5].color = '#2db7f5' 
          this.processUnit[7].children[9].checked = true
          this.processUnit[7].children[9].color = '#2db7f5' 
          this.processUnit[4].children[0].checked = true
          this.processUnit[4].children[0].color = '#2db7f5' 
        }

        // 藻类
        if(values.param6 === '1'){
          this.processUnit[7].children[4].checked = true
          this.processUnit[7].children[4].color = '#2db7f5'
          this.processUnit[7].children[5].checked = true
          this.processUnit[7].children[5].color = '#2db7f5' 
          this.processUnit[7].children[9].checked = true
          this.processUnit[7].children[9].color = '#2db7f5' 
          this.processUnit[4].children[0].checked = true
          this.processUnit[4].children[0].color = '#2db7f5' 
        }

        // 高锰酸盐指数
        if(values.param7 === '0'){
          // 
        } else if(values.param7 === '1'){
          this.processUnit[0].children[0].checked = true
          this.processUnit[0].children[0].color = '#2db7f5'
        } else if(values.param7 === '2'){
          this.processUnit[4].children[0].checked = true
          this.processUnit[4].children[0].color = '#2db7f5'
        } else if(values.param7 === '3'){
          this.processUnit[7].children[4].checked = true
          this.processUnit[7].children[4].color = '#2db7f5'
          this.processUnit[7].children[5].checked = true
          this.processUnit[7].children[5].color = '#2db7f5' 
          this.processUnit[7].children[9].checked = true
          this.processUnit[7].children[9].color = '#2db7f5' 
          this.processUnit[4].children[0].checked = true
          this.processUnit[4].children[0].color = '#2db7f5' 
        }

        // 溴化物
        if(values.param8 === '1'){
          this.processUnit[4].children[0].checked = false
          this.processUnit[4].children[0].color = '#6C767D' 
        }

        // 氨氮
        if(values.param9 > 0.5 && values.param9 <= 1){
          this.processUnit[7].children[3].checked = true
          this.processUnit[7].children[3].color = '#2db7f5'
        } else if(values.param9 > 1){
          this.processUnit[0].children[0].checked = true
          this.processUnit[0].children[0].color = '#2db7f5'
        }

        // 浊度
        if(values.param11 < 10000){
          this.processUnit[2].children[0].checked = true
          this.processUnit[2].children[0].color = '#2db7f5'
          this.processUnit[3].children[0].checked = true
          this.processUnit[3].children[0].color = '#2db7f5'
        } else if(values.param11 < 5000){
          this.processUnit[2].children[1].checked = true
          this.processUnit[2].children[1].color = '#2db7f5'
        } else if(values.param11 < 3000){
          this.processUnit[2].children[3].checked = true
          this.processUnit[2].children[3].color = '#2db7f5'
        } else if(values.param11 < 500){
          this.processUnit[2].children[4].checked = true
          this.processUnit[2].children[4].color = '#2db7f5'
        } else if(values.param11 < 100){
          this.processUnit[2].children[2].checked = true
          this.processUnit[2].children[2].color = '#2db7f5'
        } else if(values.param11 < 50){
          this.processUnit[2].children[5].checked = true
          this.processUnit[2].children[5].color = '#2db7f5'
        }

        // 出水浊度
        if(values.param12 > 0.5){
          this.processUnit[2].children[1].checked = true
          this.processUnit[2].children[1].color = '#2db7f5'
        } 

        // 消毒
        if(values.param13 === '0'){
          this.processUnit[5].children[0].checked = false
          this.processUnit[5].children[0].color = '#6C767D'
        } else if(values.param13 === '1'){
          this.processUnit[5].children[0].checked = true
          this.processUnit[5].children[0].color = '#2db7f5'
        } 

        // 初始化是常选中：混凝工艺全部、PAC、PAM
        this.processUnit[7].children[6].checked = true
        this.processUnit[7].children[6].color = '#2db7f5' 
        this.processUnit[7].children[7].checked = true
        this.processUnit[7].children[7].color = '#2db7f5' 

        this.processUnit[1].children[0].checked = true
        this.processUnit[1].children[0].color = '#2db7f5' 
        this.processUnit[1].children[1].checked = true
        this.processUnit[1].children[1].color = '#2db7f5' 
        this.processUnit[1].children[2].checked = true
        this.processUnit[1].children[2].color = '#2db7f5' 
        


      });
      this.$message.info(this.$t('initSucc'))
      // console.log('Received values of form: ', this.form);
      let svgcanvasDom = document.getElementById("svgcanvas");
      // this.rectDom = svgcanvasDom.getElementsByTagName("rect");
      this.rectDom = svgcanvasDom.getElementsByClassName("rect");
        for(let i = 0; i < this.rectDom.length; i++) {
            this.rectDom[i].style.fill = "#1ba1e2";
        }
        // TODO 根据实际输入参数点亮对应的标签

    },
    handleReset() {
      this.$message.info(this.$t('resetSucc'))
      this.form.resetFields();
      this.getProcessUnit();
    },
    loadSvg() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", proSvg, true);
      xhr.send();
      xhr.addEventListener("load", () => {
        const resXML = xhr.responseXML;
        this.svgDom = resXML.documentElement.cloneNode(true);
        // 为 svg - dom 设置宽高边框样式
        this.svgDom.style.width = '100%';
        this.svgDom.style.height = '100%';
        this.svgDom.style.border = '1px solid yellow';
        // 为svg添加鼠标滚动缩放事件
        this.svgDom.setAttribute("v-on:mousewheel", "this.havcZooming($event)");

        // let btm = this.svgDom.getElementById("1");
        // // debugger;
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
          template: "<div id='svgTemplate' style='background-color: black; height:700px'>" + sXML + "</div>"
        })
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
        for(let i = 0; i < this.rectDom.length; i++) {
          // let currNodeId = this.rectDom[i].id 
          // this.rectDom[i].setAttribute("v-on:click", "this.handleClick()"); // 为每个节点绑定点击事件
          // console.log('当前 rect 标签下的节点id----->>>', currNodeId)

          this.rectDom[i].addEventListener('click', function(event){
            console.log('>>>>>>>>Rectangle clicked!', event);
            this.rectDom[i].style.fill = "green";
          })
        }
      })
    },
    zoomimg(x, y) {
      // 放大缩小
      // 缩放事件绑定给svg,缩放结果设置给svg内部的g标签
      if (!x) {
        x = 0;
      }
      if (!y) {
        y = 0;
      }
      const svg = d3.select("svg");
      const g = d3.select("#svgcanvas");
      // console.log(svg, g, "in havcZooming");
      //节点的缩放
      function zoomActions() {
        // console.log(d3.event, '----->>>') // undefind
        // g.attr("transform", d3.event.transform);
        g.attr("transform", d3.zoomTransform(svg.node()));
      }
      let zoomHandler = d3.zoom().on("zoom", zoomActions).scaleExtent([0.5, 40]);

      // zoomHandler(svg)
      svg.call(zoomHandler);
      svg.transition().duration(750).call(zoomHandler.transform, d3.zoomIdentity.translate(-x, -y).scale(1.2));
      // // 点击按钮定位
      // d3.select("#reset").on("click", function () {
      //   svg
      //     .transition()
      //     .duration(750)
      //     .call(zoomHandler.transform, d3.zoomIdentity);
      // });
      // d3.select('#pos1').on('click',function(){
      //   svg.transition().duration(750).call(zoomHandler.transform, d3.zoomIdentity.translate(-10,-1500).scale(2));
      // });
      // d3.select('#pos2').on('click',function(){
      //   svg.transition().duration(750).call(zoomHandler.transform, d3.zoomIdentity.translate(-1200,-10).scale(2));
      // });
    },
    stringToXml(xmlString) {
      let xmlDoc = null
      if (typeof xmlString == "string") {
        //FF
        if (document.implementation.createDocument) {
          var parser = new DOMParser();
          xmlDoc = parser.parseFromString(xmlString, "text/xml");
        } 
        // else if (window.ActiveXObject) {
        //   xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        //   xmlDoc.async = false;
        //   xmlDoc.loadXML(xmlString);
        // }
      } else {
        xmlDoc = xmlString;
      }
      return xmlDoc;
    },
  }
}
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