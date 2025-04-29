<template>
  <div id="testApp" style="background-color: #EDEFF2;">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 10px 6px"
        :xl="6"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :loading="loading"
          :title="$t('baseQueryParam')"
          style="margin-bottom: 2 4px"
          :bordered="false"
          :body-style="{ padding: 2, height: '730px' }"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <div class="baseQueryParam">
            <a-form
              class="diy-advanced-search-form"
              :form="form"
              @submit="handleSearch"
            >
              <a-form-item
                :label="$t('param1')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-input
                    :style="{ width: '100%' }"
                    v-decorator="[`param1`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                    :addon-after="$t('param1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('param2')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-input
                    :style="{ width: '100%' }"
                    v-decorator="[`param2`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                    :addon-after="$t('param2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('param3')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-input
                    :style="{ width: '100%' }"
                    v-decorator="[`param3`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                    :addon-after="$t('param3_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('param4')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
              >
                <a-input
                  :style="{ width: '100%' }"
                  v-decorator="[`param4`]"
                  :placeholder="$t('inputOne')"
                  :disabled="false"
                />
              </a-form-item>
              <a-form-item
                :label="$t('param5')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-select
                  v-decorator="[`param5`]"
                  style="width: 100%"
                  :placeholder="$t('selectOne')"
                >
                  <a-select-option value="0">
                    无
                  </a-select-option>
                  <a-select-option value="1">
                    有
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                :label="$t('param6')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-select
                  v-decorator="[`param6`]"
                  style="width: 100%"
                  :placeholder="$t('selectOne')"
                >
                  <a-select-option value="0">
                    无
                  </a-select-option>
                  <a-select-option value="1">
                    有
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                :label="$t('param7')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-select
                    v-decorator="[`param7`]"
                    style="width: 100%"
                    :placeholder="$t('selectOne')"
                    :addon-after="$t('param7_u')"
                  >
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
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('param8')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-select
                  v-decorator="[`param8`]"
                  style="width: 100%"
                  :placeholder="$t('selectOne')"
                >
                  <a-select-option value="0">
                    无
                  </a-select-option>
                  <a-select-option value="1">
                    有
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                :label="$t('param9')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-input
                    :style="{ width: '100%' }"
                    v-decorator="[`param9`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                    :addon-after="$t('param9_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('param11')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-input
                  :style="{ width: '100%' }"
                  v-decorator="[`param11`]"
                  :placeholder="$t('inputOne')"
                  :disabled="false"
                  :addon-after="$t('param11_u')"
                />
              </a-form-item>
              <a-form-item
                :label="$t('param12')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-input
                    :style="{ width: '100%' }"
                    v-decorator="[`param12`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                    :addon-after="$t('param12_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('param14')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-input
                    :style="{ width: '100%' }"
                    v-decorator="[`param14`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                    :addon-after="$t('param14_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                style="margin-top: 0px; margin-bottom: 7px"
                :wrapperCol="{ span: 18, offset: 6 }"
              >
                <a-button html-type="submit" type="primary">{{
                  $t("submit")
                }}</a-button>
                <a-button @click="handleReset" style="margin-left: 8px">{{
                  $t("reset")
                }}</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
      </a-col>
      <a-col
        style="padding: 10px 6px"
        :xl="18"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :loading="loading"
          :title="$t('processUnit')"
          style="margin-bottom: 2 4px;"
          :headStyle="{ 'font-weight': 'bolder', height: '56px' }"
          :body-style="{ padding: 2, height: '730px' }"
          :bordered="false"
        >
          <a slot="extra" href="#">
            <div class="" style="">
              <a-button
                type="primary"
                style="margin-right: 20px;"
                @click="operation"
                icon="file-search"
              >
                {{ $t("exportCalculation") }}</a-button
              >
              <a-button
                type="danger"
                style="margin-right: 10px;"
                @click="comparison"
                icon="file-done"
              >
                {{ $t("exportQuantities") }}</a-button
              >
            </div>
          </a>
          <div class="baseQueryParam">
            <a-list
              :grid="{ gutter: 4, column: 4 }"
              :xl="20"
              :lg="24"
              :md="24"
              :sm="24"
              :xs="24"
              style="margin: 0 -10px"
              :loading="loading"
            >
              <a-list-item
                :key="i"
                v-for="(item, i) in processUnit"
                style="padding: 0 4px"
              >
                <a-card
                  class="list-card"
                  size="small"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :title="item.title"
                  :loading="loading"
                  :hoverable="true"
                  :bordered="true"
                >
                  <div class="content">
                    <a-list size="small">
                      <a-list-item :key="j" v-for="(item, j) in item.children">
                        <a-space direction="vertical" size="large">
                          <div class="list-content">
                            <div class="list-content-item">
                              <a-tooltip
                                placement="top"
                                :title="item.message"
                                :get-popup-container="getPopupContainer"
                              >
                                <a-checkbox
                                  :value="item.key"
                                  name="processUnit"
                                  v-model="item.checked"
                                  :disabled="item.disabled"
                                  @change="
                                    onChange(item, item.key, item.checked)
                                  "
                                >
                                </a-checkbox>
                                <a-tag
                                  :color="item.color"
                                  style="font-size: 15px;margin-left: 10px;"
                                  @click="calc(item.key)"
                                  >{{ item.title }}</a-tag
                                >
                              </a-tooltip>
                            </div>
                          </div>
                        </a-space>
                      </a-list-item>
                    </a-list>
                  </div>
                </a-card>
              </a-list-item>
            </a-list>
          </div>
        </a-card>
      </a-col>
      <a-col
        style="padding: 0px 6px"
        :xl="24"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          title="注意事项"
          size="small"
          :loading="loading"
          :bordered="false"
          :body-style="{ padding: 2, height: '40px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder', 'font-size': '15px' }"
        >
          <div style="padding: 2">
            <a-tag
              :key="i"
              v-for="(item, i) in tipMessage"
              :color="item.color"
              style="margin-bottom: 4px;"
            >
              <a-tooltip :title="item.tip">
                {{ item.message }}
              </a-tooltip>
            </a-tag>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <A1001 v-show="false" ref="A1001" />
    <A1002 v-show="false" ref="A1002" />
    <A1003 v-show="false" ref="A1003" />
    <A1004 v-show="false" ref="A1004" />
    <A1005 v-show="false" ref="A1005" />
    <A1006 v-show="false" ref="A1006" />
    <A1007 v-show="false" ref="A1007" />
    <A2001 v-show="false" ref="A2001" />
    <A2002 v-show="false" ref="A2002" />
    <A2003 v-show="false" ref="A2003" />
    <A2004 v-show="false" ref="A2004" />
    <A2005 v-show="false" ref="A2005" />
    <A3001 v-show="false" ref="A3001" />
    <A3002 v-show="false" ref="A3002" />
    <A3003 v-show="false" ref="A3003" />
    <A3004 v-show="false" ref="A3004" />
    <A3005 v-show="false" ref="A3005" />
    <A3006 v-show="false" ref="A3006" />
    <A4001 v-show="false" ref="A4001" />
    <A4002 v-show="false" ref="A4002" />
    <A5001 v-show="false" ref="A5001" />
    <A5002 v-show="false" ref="A5002" />
    <A6003 v-show="false" ref="A6003" />
    <A6004 v-show="false" ref="A6004" />
    <A6005 v-show="false" ref="A6005" />
    <A6006 v-show="false" ref="A6006" />
    <A8001 v-show="false" ref="A8001" />
    <A8002 v-show="false" ref="A8002" />
    <A9001 v-show="false" ref="A9001" />
    <A9002 v-show="false" ref="A9002" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { request, METHOD } from "@/utils/request";
import {
  getBufferFromLocalStorage,
  exportWord2,
  storeValueInLocalStorage,
  getArrayFromLocalStorage,
  getKeyNameFromLocalStorage,
  exportExcelAll,
} from "@/utils/exportUtil";

import A1001 from "@/pages/operation_data/1000/1001.vue";
import A1002 from "@/pages/operation_data/1000/1002.vue";
import A1003 from "@/pages/operation_data/1000/1003.vue";
import A1004 from "@/pages/operation_data/1000/1004.vue";
import A1005 from "@/pages/operation_data/1000/1005.vue";
import A1006 from "@/pages/operation_data/1000/1006.vue";
import A1007 from "@/pages/operation_data/1000/1007.vue";
import A2001 from "@/pages/operation_data/2000/2001.vue";
import A2002 from "@/pages/operation_data/2000/2002.vue";
import A2003 from "@/pages/operation_data/2000/2003.vue";
import A2004 from "@/pages/operation_data/2000/2004.vue";
import A2005 from "@/pages/operation_data/2000/2005.vue";
import A3001 from "@/pages/operation_data/3000/3001.vue";
import A3002 from "@/pages/operation_data/3000/3002.vue";
import A3003 from "@/pages/operation_data/3000/3003.vue";
import A3004 from "@/pages/operation_data/3000/3004.vue";
import A3005 from "@/pages/operation_data/3000/3005.vue";
import A3006 from "@/pages/operation_data/3000/3006.vue";
import A4001 from "@/pages/operation_data/4000/4001.vue";
import A4002 from "@/pages/operation_data/4000/4002.vue";
import A5001 from "@/pages/operation_data/5000/5001.vue";
import A5002 from "@/pages/operation_data/5000/5002.vue";
import A6003 from "@/pages/operation_data/6000/6003.vue";
import A6004 from "@/pages/operation_data/6000/6004.vue";
import A6005 from "@/pages/operation_data/6000/6005.vue";
import A6006 from "@/pages/operation_data/6000/6006.vue";
import A8001 from "@/pages/operation_data/8000/8001.vue";
import A8002 from "@/pages/operation_data/8000/8002.vue";
import A9001 from "@/pages/operation_data/9000/9001.vue";
import A9002 from "@/pages/operation_data/9000/9002.vue";

export default {
  name: "WorkPlace",
  components: {
    A1001,
    A1002,
    A1003,
    A1004,
    A1005,
    A1006,
    A1007,
    A2001,
    A2002,
    A2003,
    A2004,
    A2005,
    A3001,
    A3002,
    A3003,
    A3004,
    A3005,
    A3006,
    A4001,
    A4002,
    A5001,
    A5002,
    A6003,
    A6004,
    A6005,
    A6006,
    A8001,
    A8002,
    A9001,
    A9002,
  },
  i18n: require("./i18n"),
  data() {
    return {
      form: this.$form.createForm(this, { name: "advanced_search" }),
      tipMessage: [], // 提示信息
      loading: true,
      processUnit: [],
      processUnitData: [],
      modelVisible: false,
      param1: null,
      waterData: "20000",
      sandData: "80",
      inTurbidityData: "100",
      outTurbidityData: "5",
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
              dataIndex: "尺寸",
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
              dataIndex: "数量",
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
              dataIndex: "设备类型",
              key: "4",
              width: "100px",
              align: "center",
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
              key: "5",
              width: "180px",
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
              dataIndex: "数量",
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
              dataIndex: "安装位置",
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
              dataIndex: "数量",
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
    };
  },
  methods: {
    getTagColor(item) {
      return item.checked ? "#00be7f" : "#6C767D";
    },
    getProcessUnit() {
      request("/work/processUnit", METHOD.GET).then((res) => {
        this.processUnit = res.data;
        this.loading = false;
      });
    },
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
    arrayDistinct(array) {
      return array.filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (t) => JSON.stringify(t) === JSON.stringify(value) // 使用 JSON.stringify 来比较对象内容
          )
      );
    },
    handleSearch(e) {
      // 先清空数据
      this.handleClear();
      // 再计算数据进行匹配
      e.preventDefault();
      this.form.validateFields((error, values) => {
        // 1、含砂量 2、铁 3、锰 4、色度 5、嗅味 6、藻类 7、高锰酸盐指数 8、溴化物 9、氨氮  11、浊度 12、出水浊度  13、消毒
        // 含砂量 >= 80
        if (values.param1 >= 80) {
          // 沉淀池
          this.processUnit[0].children[1].color = "#2DB7F5";
        } else {
          this.processUnit[0].children[1].checked = false;
          this.processUnit[0].children[1].color = "#6C767D";
        }

        // 铁 > 0.3 || 锰 > 0.1 || 色度 > 15 || 嗅味 == 1 || 藻类 == 1 || 高锰酸盐指数 == 3
        if (
          values.param2 > 0.3 ||
          values.param3 > 0.1 ||
          values.param4 > 15 ||
          values.param5 === "1" ||
          values.param6 === "1" ||
          values.param7 === "3"
        ) {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].color = "#f45b21";
          this.processUnit[0].children[3].color = "#f45b21";
          this.processUnit[0].children[4].color = "#f45b21";
          this.processUnit[0].children[5].color = "#f45b21";
          this.processUnit[5].children[2].color = "#f45b21";
          this.processUnit[5].children[3].color = "#f45b21";
        } else {
          this.processUnit[0].children[2].checked = false;
          this.processUnit[0].children[3].checked = false;
          this.processUnit[0].children[4].checked = false;
          this.processUnit[0].children[5].checked = false;
          this.processUnit[5].children[2].checked = false;
          this.processUnit[5].children[3].checked = false;

          this.processUnit[0].children[2].color = "#6C767D";
          this.processUnit[0].children[3].color = "#6C767D";
          this.processUnit[0].children[4].color = "#6C767D";
          this.processUnit[0].children[5].color = "#6C767D";
          this.processUnit[5].children[2].color = "#6C767D";
          this.processUnit[5].children[3].color = "#6C767D";
        }

        // 色度 > 15 || 嗅味 == 1 || 高锰酸盐指数 == 3 || 0.5 < 氨氮 <=1 || 藻类 == 1
        if (
          values.param4 > 15 ||
          values.param5 === "1" ||
          values.param6 === "1" ||
          values.param7 === "3" ||
          (values.param9 > 0.5 && values.param9 <= 1)
        ) {
          // 活性炭粉末 命中时直接勾选
          this.processUnit[0].children[6].checked = true;
          this.processUnit[0].children[6].color = "#00be7f";
          storeValueInLocalStorage("fc1007", "1");
        } else {
          this.processUnit[0].children[6].checked = false;
          this.processUnit[0].children[6].color = "#6C767D";
        }

        // 高锰酸盐指数 == 1 || 氨氮 > 1
        if (values.param7 === "1" || values.param9 > 1) {
          // 生物接触氧化 命中时直接勾选
          this.processUnit[0].children[0].checked = true;
          this.processUnit[0].children[0].color = "#00be7f";
          storeValueInLocalStorage("fc1001", "1");
        } else {
          this.processUnit[0].children[0].checked = false;
          this.processUnit[0].children[0].color = "#6C767D";
        }

        // 高锰酸盐指数 == 2
        if (values.param7 === "2") {
          // 臭氧活性炭 命中时直接勾选
          this.processUnit[4].children[0].checked = true;
          this.processUnit[4].children[0].color = "#00be7f";
          // 臭氧活性炭勾选时，改变臭氧消毒为橙色预选
          this.processUnit[5].children[0].color = "#f45b21";

          storeValueInLocalStorage("fc5001", "1");
        } else {
          this.processUnit[4].children[0].checked = false;
          this.processUnit[4].children[0].color = "#6C767D";
          this.processUnit[5].children[0].checked = false;
          this.processUnit[5].children[0].color = "#6C767D";
        }

        // 溴化物 == 1
        if (values.param8 === "1") {
          // 不得选用臭氧
          this.processUnit[0].children[2].checked = false;
          this.processUnit[0].children[2].color = "#6C767D";
          this.processUnit[0].children[2].disabled = true;
          this.tipMessage.push({
            id: "1006_1",
            message: "不得选用臭氧",
            color: "#c12c1f",
            tip: "加药系统-臭氧",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
          this.$message.error(this.$t("不得选用臭氧"));
          storeValueInLocalStorage("fc1006", "0");
        } else if (values.param8 === "0") {
          this.processUnit[0].children[2].disabled = false;
          this.processUnit[0].children[2].color = "#6C767D";
        }

        // 0.5 < 氨氮 < 1
        if (values.param9 > 0.5 && values.param9 <= 1) {
          // 折点加氯 命中时直接勾选
          this.processUnit[5].children[1].checked = true;
          this.processUnit[5].children[1].color = "#00be7f";
          storeValueInLocalStorage("fc6004", "1");
        } else {
          this.processUnit[5].children[1].checked = false;
          this.processUnit[5].children[1].color = "#6C767D";
        }

        // 浊度 < 50
        if (values.param11 < 50) {
          this.$message.success(
            "增设超越管，超越絮凝、沉淀(气浮)，直接进滤池，并在滤池进水口处投加助凝剂活化硅酸"
          );
        }

        // 浊度 < 100
        if (values.param11 < 100) {
          // 气浮池
          this.processUnit[2].children[5].color = "#2DB7F5";
        } else {
          this.processUnit[2].children[5].checked = false;
          this.processUnit[2].children[5].color = "#6C767D";
          storeValueInLocalStorage("fc3006", "0");
        }

        // 浊度 < 500
        if (values.param11 < 500) {
          // 水力循环澄清池
          this.processUnit[2].children[4].color = "#2DB7F5";
        } else {
          this.processUnit[2].children[4].checked = false;
          this.processUnit[2].children[4].color = "#6C767D";
          storeValueInLocalStorage("fc3005", "0");
        }

        // 浊度 < 3000
        if (values.param11 < 3000) {
          // 机械搅拌澄清池
          this.processUnit[2].children[3].color = "#2DB7F5";
        } else {
          this.processUnit[2].children[3].checked = false;
          this.processUnit[2].children[3].color = "#6C767D";
          storeValueInLocalStorage("fc3004", "0");
        }

        // 浊度 < 5000
        if (values.param11 < 5000) {
          // 平流沉淀池
          this.processUnit[2].children[0].color = "#2DB7F5";
        } else {
          this.processUnit[2].children[0].checked = false;
          this.processUnit[2].children[0].color = "#6C767D";
        }

        // 浊度 < 10000
        if (values.param11 < 10000) {
          // 斜管沉淀池
          this.processUnit[2].children[1].color = "#2DB7F5";
          // 高密度沉淀池
          this.processUnit[2].children[2].color = "#2DB7F5";
        } else {
          this.processUnit[2].children[1].checked = false;
          this.processUnit[2].children[2].checked = false;

          this.processUnit[2].children[1].color = "#6C767D";
          this.processUnit[2].children[2].color = "#6C767D";
        }

        // 出水浊度 < 0.5
        if (values.param12 < 0.5) {
          // 超滤 命中时直接勾选
          this.processUnit[4].children[1].checked = true;
          this.processUnit[4].children[1].color = "#00be7f";
          storeValueInLocalStorage("fc5002", "1");
        } else {
          this.processUnit[4].children[1].checked = false;
          this.processUnit[4].children[1].color = "#6C767D";
        }

        // // 13、消毒 == 1
        // if (values.param13 === "1") {
        //   // 接触消毒
        //   this.processUnit[5].children[0].color = "#2DB7F5";
        // } else {
        //   this.processUnit[5].children[0].checked = false;
        //   this.processUnit[5].children[0].color = "#6C767D";
        // }

        // 初始化时常选中：混凝工艺全部、PAC、PAM
        this.processUnit[1].children[0].color = "#2DB7F5";
        this.processUnit[1].children[1].color = "#2DB7F5";
        this.processUnit[1].children[2].color = "#2DB7F5";

        // PAC、PAM 默认勾选
        this.processUnit[1].children[3].checked = true;
        this.processUnit[1].children[3].color = "#00be7f";
        this.processUnit[1].children[4].checked = true;
        this.processUnit[1].children[4].color = "#00be7f";

        this.processUnit[3].children[0].color = "#2DB7F5";
        this.processUnit[3].children[1].color = "#2DB7F5";
        this.processUnit[6].children[0].color = "#2DB7F5";
        // 清水池默认勾选
        this.processUnit[6].children[1].checked = true;
        this.processUnit[6].children[1].color = "#00be7f";

        this.processUnit[7].children[0].color = "#2DB7F5";
        this.processUnit[7].children[1].color = "#f45b21";

        // 沉淀工艺默认选中
        this.processUnit[2].children[0].checked = true;
        this.processUnit[2].children[0].color = "#00be7f";
        this.processUnit[2].children[1].checked = true;
        this.processUnit[2].children[1].color = "#00be7f";
        this.processUnit[2].children[2].checked = true;
        this.processUnit[2].children[2].color = "#00be7f";
        this.processUnit[2].children[3].checked = true;
        this.processUnit[2].children[3].color = "#00be7f";
        this.processUnit[2].children[4].checked = true;
        this.processUnit[2].children[4].color = "#00be7f";
        this.processUnit[2].children[5].checked = true;
        this.processUnit[2].children[5].color = "#00be7f";

        storeValueInLocalStorage("fc2004", "1");
        storeValueInLocalStorage("fc2005", "1");
        storeValueInLocalStorage("fc8002", "1");
        storeValueInLocalStorage("fc3001", "1");
        storeValueInLocalStorage("fc3002", "1");
        storeValueInLocalStorage("fc3003", "1");
        storeValueInLocalStorage("fc3004", "1");
        storeValueInLocalStorage("fc3005", "1");
        storeValueInLocalStorage("fc3006", "1");

        if (
          this.processUnit[0].children[3].checked ||
          this.processUnit[5].children[2].checked
        ) {
          // NaClO开启时，活性炭粉末也开启
          this.processUnit[0].children[6].checked = true;
          this.processUnit[0].children[6].color = "#00be7f";
          storeValueInLocalStorage("fc1007", "1");
        }

        // 将设计水量存入缓存
        if (values.param14 != null && values.param14 != "") {
          this.waterData = values.param14;
          storeValueInLocalStorage("waterData", this.waterData);
        }
        // 将含砂量存入缓存
        if (values.param1 != null && values.param1 != "") {
          this.sandData = values.param1;
          storeValueInLocalStorage("sandData", this.sandData);
        }
        // 将进水浊度存入缓存
        if (values.param11 != null && values.param11 != "") {
          this.inTurbidityData = values.param11;
          storeValueInLocalStorage("inTurbidityData", this.inTurbidityData);
        }
        // 将出水浊度存入缓存
        if (values.param12 != null && values.param12 != "") {
          this.outTurbidityData = values.param12;
          storeValueInLocalStorage("outTurbidityData", this.outTurbidityData);
        }
      });
      
      // 遍历选中的工艺单元并触发 handleChangeMassage 方法
      this.processUnit.forEach((unit) => {
        unit.children.forEach((child) => {
          if (child.checked) {
            this.handleChangeMassage(child.key, child.checked);
          }
        });
      });

      this.$message.success(this.$t("initSucc"));
      // 初始化计算书和工程量缓存数据
      this.reComputeBook();
    },
    reComputeBook() {
      // 重新初始化计算书和工程量数据
      const a1001 = this.$refs.A1001;
      console.log("重新初始化1001计算书数据");
      a1001.refreshInitData();
      const a1002 = this.$refs.A1002;
      a1002.refreshInitData();
      const a1003 = this.$refs.A1003;
      a1003.refreshInitData();
      const a1004 = this.$refs.A1004;
      a1004.refreshInitData();
      const a1005 = this.$refs.A1005;
      a1005.refreshInitData();
      const a1006 = this.$refs.A1006;
      a1006.refreshInitData();
      const a1007 = this.$refs.A1007;
      a1007.refreshInitData();
      const a2001 = this.$refs.A2001;
      a2001.refreshInitData();
      const a2002 = this.$refs.A2002;
      a2002.refreshInitData();
      const a2003 = this.$refs.A2003;
      a2003.refreshInitData();
      const a2004 = this.$refs.A2004;
      a2004.refreshInitData();
      const a2005 = this.$refs.A2005;
      a2005.refreshInitData();
      const a3001 = this.$refs.A3001;
      a3001.refreshInitData();
      const a3002 = this.$refs.A3002;
      a3002.refreshInitData();
      const a3003 = this.$refs.A3003;
      a3003.refreshInitData();
      const a3004 = this.$refs.A3004;
      a3004.refreshInitData();
      const a3005 = this.$refs.A3005;
      a3005.refreshInitData();
      const a3006 = this.$refs.A3006;
      a3006.refreshInitData();
      const a4001 = this.$refs.A4001;
      a4001.refreshInitData();
      const a4002 = this.$refs.A4002;
      a4002.refreshInitData();
      const a5001 = this.$refs.A5001;
      a5001.refreshInitData();
      const a5002 = this.$refs.A5002;
      a5002.refreshInitData();
      const a6003 = this.$refs.A6003;
      a6003.refreshInitData();
      const a6004 = this.$refs.A6004;
      a6004.refreshInitData();
      const a6005 = this.$refs.A6005;
      a6005.refreshInitData();
      const a6006 = this.$refs.A6006;
      a6006.refreshInitData();
      const a8001 = this.$refs.A8001;
      a8001.refreshInitData();
      const a8002 = this.$refs.A8002;
      a8002.refreshInitData();
      const a9001 = this.$refs.A9001;
      a9001.refreshInitData();
    },
    handleReset() {
      this.form.resetFields();
      this.getProcessUnit();
      // 重置时将设计水量和含砂量缓存也清空
      storeValueInLocalStorage("waterData", "");
      storeValueInLocalStorage("sandData", "");
      // 清空单元选择缓存
      this.handleInitChangeCache();
      this.$message.success(this.$t("resetSucc"));
      this.tipMessage = [];
      storeValueInLocalStorage("pacData", "");
      storeValueInLocalStorage("pamData", "");
      storeValueInLocalStorage("dehydrationPamData", "");
      storeValueInLocalStorage("naclo1Data", "");
      storeValueInLocalStorage("naclo2Data", "");
      storeValueInLocalStorage("carbonData", "");
      storeValueInLocalStorage("KMnO4Data", "");
      storeValueInLocalStorage("sludgeData", "");
      storeValueInLocalStorage("fc1001", "0");
      storeValueInLocalStorage("fc1002", "0");
      storeValueInLocalStorage("fc1003", "0");
      storeValueInLocalStorage("fc1004", "0");
      storeValueInLocalStorage("fc1005", "0");
      storeValueInLocalStorage("fc1006", "0");
      storeValueInLocalStorage("fc1007", "0");
      storeValueInLocalStorage("fc2001", "0");
      storeValueInLocalStorage("fc2002", "0");
      storeValueInLocalStorage("fc2003", "0");
      storeValueInLocalStorage("fc2004", "0");
      storeValueInLocalStorage("fc2005", "0");
      storeValueInLocalStorage("fc3001", "0");
      storeValueInLocalStorage("fc3002", "0");
      storeValueInLocalStorage("fc3003", "0");
      storeValueInLocalStorage("fc3004", "0");
      storeValueInLocalStorage("fc3005", "0");
      storeValueInLocalStorage("fc3006", "0");
      storeValueInLocalStorage("fc4001", "0");
      storeValueInLocalStorage("fc4002", "0");
      storeValueInLocalStorage("fc5001", "0");
      storeValueInLocalStorage("fc5002", "0");
      storeValueInLocalStorage("fc6001", "0");
      storeValueInLocalStorage("fc6002", "0");
      storeValueInLocalStorage("fc6003", "0");
      storeValueInLocalStorage("fc6004", "0");
      storeValueInLocalStorage("fc6005", "0");
      storeValueInLocalStorage("fc6006", "0");
      storeValueInLocalStorage("fc8001", "0");
      storeValueInLocalStorage("fc8002", "0");
      storeValueInLocalStorage("fc9001", "0");
      storeValueInLocalStorage("fc9002", "0");
    },
    handleClear() {
      this.processUnit[0].children[0].checked = false;
      this.processUnit[0].children[1].checked = false;
      this.processUnit[0].children[2].checked = false;
      this.processUnit[0].children[3].checked = false;
      this.processUnit[0].children[4].checked = false;
      this.processUnit[0].children[5].checked = false;
      this.processUnit[0].children[6].checked = false;
      this.processUnit[1].children[0].checked = false;
      this.processUnit[1].children[1].checked = false;
      this.processUnit[1].children[2].checked = false;
      this.processUnit[1].children[3].checked = false;
      this.processUnit[1].children[4].checked = false;
      this.processUnit[2].children[0].checked = false;
      this.processUnit[2].children[1].checked = false;
      this.processUnit[2].children[2].checked = false;
      this.processUnit[2].children[3].checked = false;
      this.processUnit[2].children[4].checked = false;
      this.processUnit[2].children[5].checked = false;
      this.processUnit[3].children[0].checked = false;
      this.processUnit[3].children[1].checked = false;
      this.processUnit[4].children[0].checked = false;
      this.processUnit[4].children[1].checked = false;
      this.processUnit[5].children[0].checked = false;
      this.processUnit[5].children[1].checked = false;
      this.processUnit[5].children[2].checked = false;
      this.processUnit[5].children[3].checked = false;
      this.processUnit[6].children[0].checked = false;
      this.processUnit[6].children[1].checked = false;
      this.processUnit[7].children[0].checked = false;
      this.processUnit[7].children[1].checked = false;
      this.processUnit[0].children[0].color = "#6C767D";
      this.processUnit[0].children[1].color = "#6C767D";
      this.processUnit[0].children[2].color = "#6C767D";
      this.processUnit[0].children[3].color = "#6C767D";
      this.processUnit[0].children[4].color = "#6C767D";
      this.processUnit[0].children[5].color = "#6C767D";
      this.processUnit[0].children[6].color = "#6C767D";
      this.processUnit[1].children[0].color = "#6C767D";
      this.processUnit[1].children[1].color = "#6C767D";
      this.processUnit[1].children[2].color = "#6C767D";
      this.processUnit[1].children[3].color = "#6C767D";
      this.processUnit[1].children[4].color = "#6C767D";
      this.processUnit[2].children[0].color = "#6C767D";
      this.processUnit[2].children[1].color = "#6C767D";
      this.processUnit[2].children[2].color = "#6C767D";
      this.processUnit[2].children[3].color = "#6C767D";
      this.processUnit[2].children[4].color = "#6C767D";
      this.processUnit[2].children[5].color = "#6C767D";
      this.processUnit[3].children[0].color = "#6C767D";
      this.processUnit[3].children[1].color = "#6C767D";
      this.processUnit[4].children[0].color = "#6C767D";
      this.processUnit[4].children[1].color = "#6C767D";
      this.processUnit[5].children[0].color = "#6C767D";
      this.processUnit[5].children[1].color = "#6C767D";
      this.processUnit[5].children[2].color = "#6C767D";
      this.processUnit[5].children[3].color = "#6C767D";
      this.processUnit[6].children[0].color = "#6C767D";
      this.processUnit[6].children[1].color = "#6C767D";
      this.processUnit[7].children[0].color = "#6C767D";
      this.processUnit[7].children[1].color = "#6C767D";

      // 重置时将设计水量和含砂量缓存也清空
      storeValueInLocalStorage("waterData", "");
      storeValueInLocalStorage("sandData", "");
      // 清空单元选择缓存
      this.handleInitChangeCache();
      // 请求提示信息
      this.tipMessage = [];
      // 清空工作台传递参数
      storeValueInLocalStorage("pacData", "");
      storeValueInLocalStorage("pamData", "");
      storeValueInLocalStorage("dehydrationPamData", "");
      storeValueInLocalStorage("naclo1Data", "");
      storeValueInLocalStorage("naclo2Data", "");
      storeValueInLocalStorage("carbonData", "");
      storeValueInLocalStorage("KMnO4Data", "");
      storeValueInLocalStorage("sludgeData", "");
    },
    handleChangeMassage(key, checked) {
      // 勾选NaClO || 折点加氯开启时，活性炭粉末也开启
      if (key === "1003" || key === "6004") {
        if (checked) {
          // 活性炭粉末
          this.processUnit[0].children[6].checked = true;
          this.processUnit[0].children[6].color = "#00be7f";
        } else {
          this.form.validateFields((error, values) => {
            // 色度 <= 15 && 嗅味 != 1 && 高锰酸盐指数 != 3 && 0.5 >= 氨氮 > 1 && 藻类 != 1
            // && (this.processUnit[0].children[3].checked == false)
            // && (this.processUnit[5].children[1].checked == false)
            // && (this.processUnit[5].children[2].checked == false)
            console.info("勾选情况");
            console.info(values);
            console.info(!(values.param4 > 15));
            console.info(values.param5 != "1");
            console.info(values.param6 != "1");
            console.info(values.param7 != "3");
            console.info(!(values.param9 > 0.5 && values.param9 <= 1));
            console.info(this.processUnit[0].children[3].checked);
            console.info(this.processUnit[5].children[2].checked);
            console.info(this.processUnit[5].children[2].checked);
            if (
              !(values.param4 > 15) &&
              values.param5 != "1" &&
              values.param6 != "1" &&
              values.param7 != "3" &&
              !(values.param9 > 0.5 && values.param9 <= 1) &&
              this.processUnit[0].children[3].checked == false &&
              this.processUnit[5].children[1].checked == false &&
              this.processUnit[5].children[2].checked == false
            ) {
              // 活性炭粉末
              this.processUnit[0].children[6].checked = false;
              this.processUnit[0].children[6].color = "#6C767D";
            }
          });
        }
      }
      if (key === "5001") {
        // 勾选臭氧活性炭时，橙色预选臭氧消毒
        if (checked) {
          // 臭氧消毒
          this.processUnit[5].children[0].color = "#f45b21";
        } else {
          this.processUnit[5].children[0].checked = false;
          this.processUnit[5].children[0].color = "#6C767D";
        }
      }

      if (key === "1006") {
        // O3
        this.$message.success(
          "厂区深度处理为臭氧活性炭优先选用，进水有溴化物慎用"
        );
        if (checked) {
          this.tipMessage.push({
            id: "1006",
            message: "厂区深度处理为臭氧活性炭优先选用，进水有溴化物慎用",
            color: "#4f6f46",
            tip: "加药系统-活性炭粉末",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "1006"
          );
        }
      }
      if (key === "1005") {
        // 高锰酸钾
        this.$message.success("Fe、Mn超标尤其适用，后端为生物处理慎用");
        if (checked) {
          this.tipMessage.push({
            id: "1005",
            message: "Fe、Mn超标尤其适用，后端为生物处理慎用",
            color: "#2c2f3b",
            tip: "加药系统-高锰酸钾",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "1005"
          );
        }
      }
      if (key === "1004") {
        // ClO2
        this.$message.success("厂区消毒剂为ClO2优选选用，后端为生物处理慎用");
        if (checked) {
          this.tipMessage.push({
            id: "1004",
            message: "厂区消毒剂为ClO2优选选用，后端为生物处理慎用",
            color: "#007175",
            tip: "加药系统-ClO2",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "1004"
          );
        }
      }
      if (key === "1003") {
        // NaClO
        this.$message.success("厂区消毒剂为NaClO优选选用，后端为生物处理慎用");
        if (checked) {
          this.tipMessage.push({
            id: "1003",
            message: "厂区消毒剂为NaClO优选选用，后端为生物处理慎用",
            color: "#2a6e3f",
            tip: "加药系统-NaClO",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "1003"
          );
        }
      }
      if (key === "2002") {
        // 网格絮凝池
        this.$message.success("单池 > 2.5万m3/d 不建议采用网格絮凝池");
        if (checked) {
          this.tipMessage.push({
            id: "2002",
            message: "单池 > 2.5万m3/d 不建议采用网格絮凝池",
            color: "#6e9bc5",
            tip: "网格絮凝池",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "2002"
          );
        }
      }
      if (key === "2003") {
        // 折板絮凝池
        this.$message.success("单池 >= 5万m3/d 不建议采用折板絮凝池");
        if (checked) {
          this.tipMessage.push({
            id: "2003",
            message: "单池 >= 5万m3/d 不建议采用折板絮凝池",
            color: "#b7d332",
            tip: "折板絮凝池",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "2003"
          );
        }
      }
      if (key === "3001") {
        // 平流沉淀池
        this.$message.success("设计规模 < 5万m3/d 不建议");
        if (checked) {
          this.tipMessage.push({
            id: "3001",
            message: "设计规模 < 5万m3/d 不建议",
            color: "#dd6b7b",
            tip: "平流沉淀池",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "3001"
          );
        }
      }
      if (key === "3003") {
        // 高密度沉淀池
        this.$message.success("设计规模 < 5万m3/d 不建议");
        if (checked) {
          this.tipMessage.push({
            id: "3003",
            message: "设计规模 < 5万m3/d 不建议",
            color: "#ef845d",
            tip: "高密度沉淀池",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "3003"
          );
        }
      }
      if (key === "3005") {
        // 水力循环澄清池
        this.$message.success("设计规模 < 5万m3/d 不建议");
        if (checked) {
          this.tipMessage.push({
            id: "3005",
            message: "设计规模 < 5万m3/d 不建议",
            color: "#108b96",
            tip: "水力循环澄清池",
          });
          this.tipMessage = this.arrayDistinct(this.tipMessage);
        } else {
          this.tipMessage = this.tipMessage.filter(
            (item) => item.id !== "3005"
          );
        }
      }
      // if (key === "6006") {
      //   // ClO2
      //   this.$message.success("厂区消毒剂为ClO2优选选用，后端为生物处理慎用");
      //   if (checked) {
      //     this.tipMessage.push({
      //       id: "6006",
      //       message: "厂区消毒剂为ClO2优选选用，后端为生物处理慎用",
      //       color: "#be8a2f",
      //       tip: "ClO2",
      //     });
      //     this.tipMessage = this.arrayDistinct(this.tipMessage);
      //   } else {
      //     this.tipMessage = this.tipMessage.filter(
      //       (item) => item.id !== "6006"
      //     );
      //   }
      // }
      // if (key === "6005") {
      //   // NaClO
      //   this.$message.success("厂区消毒剂为NaClO优选选用，后端为生物处理慎用");
      //   if (checked) {
      //     this.tipMessage.push({
      //       id: "6005",
      //       message: "厂区消毒剂为NaClO优选选用，后端为生物处理慎用",
      //       color: "#cb5c83",
      //       tip: "NaClO",
      //     });
      //     this.tipMessage = this.arrayDistinct(this.tipMessage);
      //   } else {
      //     this.tipMessage = this.tipMessage.filter(
      //       (item) => item.id !== "6005"
      //     );
      //   }
      // }
    },
    handleChangeCache(key, checked) {
      if (key === "1001") {
        if (checked) {
          storeValueInLocalStorage("fc1001", "1");
        } else {
          storeValueInLocalStorage("fc1001", "0");
        }
      }
      if (key === "1002") {
        if (checked) {
          storeValueInLocalStorage("fc1002", "1");
        } else {
          storeValueInLocalStorage("fc1002", "0");
        }
      }
      if (key === "1003") {
        if (checked) {
          storeValueInLocalStorage("fc1003", "1");
        } else {
          storeValueInLocalStorage("fc1003", "0");
        }
      }
      if (key === "1004") {
        if (checked) {
          storeValueInLocalStorage("fc1004", "1");
        } else {
          storeValueInLocalStorage("fc1004", "0");
        }
      }
      if (key === "1005") {
        if (checked) {
          storeValueInLocalStorage("fc1005", "1");
        } else {
          storeValueInLocalStorage("fc1005", "0");
        }
      }
      if (key === "1006") {
        if (checked) {
          storeValueInLocalStorage("fc1006", "1");
        } else {
          storeValueInLocalStorage("fc1006", "0");
        }
      }
      if (key === "1007") {
        if (checked) {
          storeValueInLocalStorage("fc1007", "1");
        } else {
          storeValueInLocalStorage("fc1007", "0");
        }
      }
      if (key === "2001") {
        if (checked) {
          storeValueInLocalStorage("fc2001", "1");
        } else {
          storeValueInLocalStorage("fc2001", "0");
        }
      }
      if (key === "2002") {
        if (checked) {
          storeValueInLocalStorage("fc2002", "1");
        } else {
          storeValueInLocalStorage("fc2002", "0");
        }
      }
      if (key === "2003") {
        if (checked) {
          storeValueInLocalStorage("fc2003", "1");
        } else {
          storeValueInLocalStorage("fc2003", "0");
        }
      }
      if (key === "2004") {
        if (checked) {
          storeValueInLocalStorage("fc2004", "1");
        } else {
          storeValueInLocalStorage("fc2004", "0");
        }
      }
      if (key === "2005") {
        if (checked) {
          storeValueInLocalStorage("fc2005", "1");
        } else {
          storeValueInLocalStorage("fc2005", "0");
        }
      }
      if (key === "3001") {
        if (checked) {
          storeValueInLocalStorage("fc3001", "1");
        } else {
          storeValueInLocalStorage("fc3001", "0");
        }
      }
      if (key === "3002") {
        if (checked) {
          storeValueInLocalStorage("fc3002", "1");
        } else {
          storeValueInLocalStorage("fc3002", "0");
        }
      }
      if (key === "3003") {
        if (checked) {
          storeValueInLocalStorage("fc3003", "1");
        } else {
          storeValueInLocalStorage("fc3003", "0");
        }
      }
      if (key === "3004") {
        if (checked) {
          storeValueInLocalStorage("fc3004", "1");
        } else {
          storeValueInLocalStorage("fc3004", "0");
        }
      }
      if (key === "3005") {
        if (checked) {
          storeValueInLocalStorage("fc3005", "1");
        } else {
          storeValueInLocalStorage("fc3005", "0");
        }
      }
      if (key === "3006") {
        if (checked) {
          storeValueInLocalStorage("fc3006", "1");
        } else {
          storeValueInLocalStorage("fc3006", "0");
        }
      }
      if (key === "4001") {
        if (checked) {
          storeValueInLocalStorage("fc4001", "1");
        } else {
          storeValueInLocalStorage("fc4001", "0");
        }
      }
      if (key === "4002") {
        if (checked) {
          storeValueInLocalStorage("fc4002", "1");
        } else {
          storeValueInLocalStorage("fc4002", "0");
        }
      }
      if (key === "5001") {
        if (checked) {
          storeValueInLocalStorage("fc5001", "1");
        } else {
          storeValueInLocalStorage("fc5001", "0");
        }
      }
      if (key === "5002") {
        if (checked) {
          storeValueInLocalStorage("fc5002", "1");
        } else {
          storeValueInLocalStorage("fc5002", "0");
        }
      }
      if (key === "6001") {
        if (checked) {
          storeValueInLocalStorage("fc6001", "1");
        } else {
          storeValueInLocalStorage("fc6001", "0");
        }
      }
      if (key === "6002") {
        if (checked) {
          storeValueInLocalStorage("fc6002", "1");
        } else {
          storeValueInLocalStorage("fc6002", "0");
        }
      }
      if (key === "6003") {
        if (checked) {
          storeValueInLocalStorage("fc6003", "1");
        } else {
          storeValueInLocalStorage("fc6003", "0");
        }
      }
      if (key === "6004") {
        if (checked) {
          storeValueInLocalStorage("fc6004", "1");
        } else {
          storeValueInLocalStorage("fc6004", "0");
        }
      }
      if (key === "6005") {
        if (checked) {
          storeValueInLocalStorage("fc6005", "1");
        } else {
          storeValueInLocalStorage("fc6005", "0");
        }
      }
      if (key === "6006") {
        if (checked) {
          storeValueInLocalStorage("fc6006", "1");
        } else {
          storeValueInLocalStorage("fc6006", "0");
        }
      }
      if (key === "8001") {
        if (checked) {
          storeValueInLocalStorage("fc8001", "1");
        } else {
          storeValueInLocalStorage("fc8001", "0");
        }
      }
      if (key === "8002") {
        if (checked) {
          storeValueInLocalStorage("fc8002", "1");
        } else {
          storeValueInLocalStorage("fc8002", "0");
        }
      }
      if (key === "9001") {
        if (checked) {
          storeValueInLocalStorage("fc9001", "1");
        } else {
          storeValueInLocalStorage("fc9001", "0");
        }
      }
      if (key === "9002") {
        if (checked) {
          storeValueInLocalStorage("fc9002", "1");
        } else {
          storeValueInLocalStorage("fc9002", "0");
        }
      }
    },
    onChange(item, key, checked) {
      if (checked) {
        item.color = "#00be7f";
      } else {
        item.color = "#6C767D";
      }
      this.handleChangeMassage(key, checked);
      this.handleChangeCache(key, checked);
    },
    handleInitChangeCache() {
      storeValueInLocalStorage("fc1001", "0");
      storeValueInLocalStorage("fc1002", "0");
      storeValueInLocalStorage("fc1003", "0");
      storeValueInLocalStorage("fc1004", "0");
      storeValueInLocalStorage("fc1005", "0");
      storeValueInLocalStorage("fc1006", "0");
      storeValueInLocalStorage("fc1007", "0");
      storeValueInLocalStorage("fc2001", "0");
      storeValueInLocalStorage("fc2002", "0");
      storeValueInLocalStorage("fc2003", "0");
      storeValueInLocalStorage("fc2004", "0");
      storeValueInLocalStorage("fc2005", "0");
      storeValueInLocalStorage("fc3001", "0");
      storeValueInLocalStorage("fc3002", "0");
      storeValueInLocalStorage("fc3003", "0");
      storeValueInLocalStorage("fc3004", "0");
      storeValueInLocalStorage("fc3005", "0");
      storeValueInLocalStorage("fc3006", "0");
      storeValueInLocalStorage("fc4001", "0");
      storeValueInLocalStorage("fc4002", "0");
      storeValueInLocalStorage("fc5001", "0");
      storeValueInLocalStorage("fc5002", "0");
      storeValueInLocalStorage("fc6001", "0");
      storeValueInLocalStorage("fc6002", "0");
      storeValueInLocalStorage("fc6003", "0");
      storeValueInLocalStorage("fc6004", "0");
      storeValueInLocalStorage("fc6005", "0");
      storeValueInLocalStorage("fc6006", "0");
      storeValueInLocalStorage("fc8001", "0");
      storeValueInLocalStorage("fc8002", "0");
      storeValueInLocalStorage("fc9001", "0");
      storeValueInLocalStorage("fc9002", "0");
    },
    // 导出总工程量
    comparison() {
      console.log("获取选中的对象");
      const data1 = [];
      const data2 = [];
      const data3 = [];
      const names = [];
      this.processUnit.forEach((element) => {
        element.children.forEach((child) => {
          if (child.checked) {
            try {
              console.log(`正在获取 ${child.key}`);
              const name = getKeyNameFromLocalStorage(child.key + ".xlsx");
              names.push(name);

              const array1 = getArrayFromLocalStorage(child.key + ".xlsx.1");
              data1.push(array1);
              const array2 = getArrayFromLocalStorage(child.key + ".xlsx.2");
              data2.push(array2);
              const array3 = getArrayFromLocalStorage(child.key + ".xlsx.3");
              data3.push(array3);
            } catch (error) {
              console.error(
                `从 localStorage 获取 ${child.key} 时发生错误:`,
                error
              );
            }
          }
        });
      });

      // 检查 buffers 是否为空
      if (data1.length > 0 || data2.length > 0 || data3.length > 0) {
        try {
          exportExcelAll("总工程量", data1, data2, data3, names, this);
          console.log("合并后的 Excel 数据已存储到本地存储");
        } catch (error) {
          console.error("合并文档时发生错误:", error);
        }
      } else {
        this.$message.warn(this.$t("pleaseSelectProcessUnit"));
      }
    },
    export_case() {
      this.$message.warn(this.$t("importModelNotOpen"));
    },
    // 导出总计算书
    operation() {
      console.log("获取选中的对象");
      const buffers = [];
      this.processUnit.forEach((element) => {
        element.children.forEach((child) => {
          if (child.checked) {
            try {
              console.log(`正在获取 ${child.key}`);
              const buffer = getBufferFromLocalStorage(child.key + ".docx");
              if (buffer instanceof Buffer) {
                // if (child.key === "6004") {
                //   buffers.unshift(buffer);
                // } else {
                //   buffers.push(buffer);
                // }
                buffers.push(buffer);
              } else {
                console.error(
                  `从 localStorage 获取的 ${child.key} 不是 Buffer 类型`
                );
              }
            } catch (error) {
              console.error(
                `从 localStorage 获取 ${child.key} 时发生错误:`,
                error
              );
            }
          }
        });
      });

      // 检查 buffers 是否为空
      if (buffers.length > 0) {
        try {
          exportWord2("总计算书", buffers, this);
          console.log("合并后的 Word 文件已存储到本地存储");
        } catch (error) {
          console.error("合并文档时发生错误:", error);
        }
      } else {
        this.$message.warn(this.$t("pleaseSelectProcessUnit"));
      }
    },
    calc(calcUnit) {
      const path = "/sub/" + calcUnit;
      this.$router.push(path);
      this.$message.info(this.$t("openOperatePage"));
    },
    showModal() {
      this.modelVisible = true;
    },
    handleOk() {
      this.modelVisible = false;
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
  },
  computed: {
    ...mapState("account", { currUser: "user" }),
    ...mapState("setting", ["lang"]),
  },
  created() {
    request("/work/processUnit", METHOD.GET).then((res) => {
      this.processUnit = res.data;
      this.loading = false;
    });
    // 清空单元选择缓存
    this.handleInitChangeCache();

    storeValueInLocalStorage("waterData", 20000);
  },
};
</script>

<style lang="less">
@import "index";

.ant-form-item {
  margin-bottom: 10px;
}

.list-card {
  height: 310px;
  // width: 300px;
  // flex: 0 0 auto
}

/* 设置 label 的字体大小 */
.ant-form-item-label > label {
  font-size: 14px;
  /* 调整为所需的字体大小 */
}

.ant-list-sm .ant-list-item {
  padding-top: 6px;
  padding-bottom: 8px;
}
</style>
