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
          :headStyle="{ 'font-weight': 'bolder'}"
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
          :headStyle="{ 'font-weight': 'bolder', 'height' : '56px' }"
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
                                  @change="onChange(item.key, item.checked)"
                                >
                                </a-checkbox>
                                <a-tag
                                  :color="processColor"
                                  style="font-size: 13px;margin-left: 10px;"
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
          :size="small"
          :loading="loading"
          :bordered="false"
          :body-style="{ padding: 2, height: '90px'}"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <div
            style="padding: 2"
          >
            <a-tag style="margin: 4px 4px;" color="#00be7f">厂区深度处理为臭氧活性炭优先选用，进水有溴化物慎用</a-tag>
            <a-tag style="margin: 4px 4px;" color="#f3e449">Fe、Mn超标尤其适用，后端为生物处理慎用</a-tag>
            <a-tag style="margin: 4px 4px;" color="#96b7c3">单池 > 2.5万m3/d 不建议采用网格絮凝池</a-tag>
            <a-tag style="margin: 4px 4px;" color="#1ba7ed">厂区消毒剂为ClO2优选选用，后端为生物处理慎用</a-tag>
            <a-tag style="margin: 4px 4px;" color="#96b7c3">单池 > 2.5万m3/d 不建议采用网格絮凝池</a-tag>
            <a-tag style="margin: 4px 4px;" color="#ee5531">不得选用臭氧</a-tag>
            <a-tag style="margin: 4px 4px;" color="#1ba7ed">Fe、Mn超标尤其适用，后端为生物处理慎用</a-tag>
            <a-tag style="margin: 4px 4px;" color="#ee5531">不得选用臭氧</a-tag>
            <a-tag style="margin: 4px 4px;" color="#00be7f">厂区深度处理为臭氧活性炭优先选用，进水有溴化物慎用</a-tag>
            <a-tag style="margin: 4px 4px;" color="#f3e449">厂区消毒剂为ClO2优选选用，后端为生物处理慎用</a-tag>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { request, METHOD } from "@/utils/request";
import {
  getBufferFromLocalStorage,
  exportWord2,
  storeValueInLocalStorage,
  initWordStorage,
  getArrayFromLocalStorage,
  getKeyNameFromLocalStorage,
  exportExcelAll,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  name: "WorkPlace",
  components: {},
  i18n: require("./i18n"),
  data() {
    return {
      form: this.$form.createForm(this, { name: "advanced_search" }),
      processColor: "#6C767D",
      loading: true,
      processUnit: [],
      processUnitData: [],
      modelVisible: false,
      param1: null,
      waterData: "20000",
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
    changeColor(checked) {
      // 初始化字体为蓝色
      if (checked === null) {
        this.processColor = "#2DB7F5";
      }
      // 选中时字体变为绿色
      if (checked) {
        this.processColor = "#00a24e";
      } else {
        // 其他情况为灰色
        this.processColor = "#6C767D";
      }
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
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        // 1、含砂量 2、铁 3、锰 4、色度 5、嗅味 6、藻类 7、高锰酸盐指数 8、溴化物 9、氨氮  11、浊度 12、出水浊度  13、消毒
        // 含砂量 >= 80
        if (values.param1 >= 80) {
          // 沉淀池
          this.processUnit[0].children[1].checked = true;
          // this.processUnit[0].children[5].color = '#2DB7F5'
          this.changeColor(null);
          // this.processColor = '#00a24e';
          // #00a24e  #2DB7F5
          storeValueInLocalStorage("fc1002", "1");
        } else {
          this.processUnit[0].children[1].checked = false;
          storeValueInLocalStorage("fc1002", "0");
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
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
          storeValueInLocalStorage("fc1003", "1");
          storeValueInLocalStorage("fc1004", "1");
          storeValueInLocalStorage("fc1005", "1");
          storeValueInLocalStorage("fc1006", "1");
          //   this.processUnit[0].children[5].color = '#00a24e'
        } else {
          this.processUnit[0].children[2].checked = false;
          this.processUnit[0].children[3].checked = false;
          this.processUnit[0].children[4].checked = false;
          this.processUnit[0].children[5].checked = false;
          storeValueInLocalStorage("fc1003", "0");
          storeValueInLocalStorage("fc1004", "0");
          storeValueInLocalStorage("fc1005", "0");
          storeValueInLocalStorage("fc1006", "0");
        }

        // 色度 > 15 || 嗅味 == 1 || 高锰酸盐指数 == 3 || 0.5 < 氨氮 <=1
        if (
          values.param4 > 15 ||
          values.param5 === "1" ||
          values.param7 === "3" ||
          (values.param9 > 0.5 && values.param9 <= 1)
        ) {
          // 活性炭粉末
          this.processUnit[0].children[6].checked = true;
          storeValueInLocalStorage("fc1007", "1");
        } else {
          this.processUnit[0].children[6].checked = false;
          storeValueInLocalStorage("fc1007", "0");
        }

        // 高锰酸盐指数 == 1 || 氨氮 > 1
        if (values.param7 === "1" || values.param9 > 1) {
          // 生物接触氧化
          this.processUnit[0].children[0].checked = true;
          storeValueInLocalStorage("fc1001", "1");
        } else {
          this.processUnit[0].children[0].checked = false;
          storeValueInLocalStorage("fc1001", "0");
        }

        // 高锰酸盐指数 == 2
        if (values.param7 === "2") {
          // 臭氧活性炭
          this.processUnit[4].children[0].checked = true;
          storeValueInLocalStorage("fc5001", "1");
        } else {
          this.processUnit[4].children[0].checked = false;
          storeValueInLocalStorage("fc5001", "0");
        }

        // 溴化物 == 1
        if (values.param8 === "1") {
          // 不得选用臭氧
          this.processUnit[0].children[5].checked = false;
          this.processUnit[0].children[5].disabled = true;
          this.$message.error(this.$t("不得选用臭氧"));
          storeValueInLocalStorage("fc1006", "0");
        } else {
          this.processUnit[0].children[5].disabled = false;
          storeValueInLocalStorage("fc1006", "0");
        }

        // 氨氮 <= 0.5
        if (values.param9 > 0.5 && values.param9 <= 1) {
          // 折点加氯
          this.processUnit[5].children[3].checked = true;
          storeValueInLocalStorage("fc6004", "1");
        } else {
          this.processUnit[5].children[3].checked = false;
          storeValueInLocalStorage("fc6004", "0");
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
          this.processUnit[2].children[5].checked = true;
          storeValueInLocalStorage("fc3006", "1");
        } else {
          this.processUnit[2].children[5].checked = false;
          storeValueInLocalStorage("fc3006", "0");
        }

        // 浊度 < 500
        if (values.param11 < 500) {
          // 水力循环澄清池
          this.processUnit[2].children[4].checked = true;
          storeValueInLocalStorage("fc3005", "1");
        } else {
          this.processUnit[2].children[4].checked = false;
          storeValueInLocalStorage("fc3005", "0");
        }

        // 浊度 < 3000
        if (values.param11 < 3000) {
          // 机械搅拌澄清池
          this.processUnit[2].children[3].checked = true;
          storeValueInLocalStorage("fc3004", "1");
        } else {
          this.processUnit[2].children[3].checked = false;
          storeValueInLocalStorage("fc3004", "0");
        }

        // 浊度 < 5000
        if (values.param11 < 5000) {
          // 平流沉淀池
          this.processUnit[2].children[0].checked = true;
          storeValueInLocalStorage("fc3001", "1");
        } else {
          this.processUnit[2].children[0].checked = false;
          storeValueInLocalStorage("fc3001", "0");
        }

        // 浊度 < 10000
        if (values.param11 < 10000) {
          // 斜管沉淀池
          this.processUnit[2].children[1].checked = true;
          // 高密度沉淀池
          this.processUnit[2].children[2].checked = true;
          storeValueInLocalStorage("fc3002", "1");
          storeValueInLocalStorage("fc3003", "1");
        } else {
          this.processUnit[2].children[1].checked = false;
          this.processUnit[2].children[2].checked = false;
          storeValueInLocalStorage("fc3002", "0");
          storeValueInLocalStorage("fc3003", "0");
        }

        // 出水浊度 < 0.5
        if (values.param12 < 0.5) {
          // 超滤
          this.processUnit[4].children[1].checked = true;
          storeValueInLocalStorage("fc5002", "1");
        } else {
          this.processUnit[4].children[1].checked = false;
          storeValueInLocalStorage("fc5002", "0");
        }

        // 13、消毒 == 1
        if (values.param13 === "1") {
          // 接触消毒
          this.processUnit[5].children[0].checked = true;
          storeValueInLocalStorage("fc5001", "1");
        } else {
          this.processUnit[5].children[0].checked = false;
          storeValueInLocalStorage("fc5001", "0");
        }

        // 初始化时常选中：混凝工艺全部、PAC、PAM
        this.processUnit[1].children[0].checked = true;
        this.processUnit[1].children[1].checked = true;
        this.processUnit[1].children[2].checked = true;
        this.processUnit[1].children[3].checked = true;
        this.processUnit[1].children[4].checked = true;
        storeValueInLocalStorage("fc5001", "1");
        storeValueInLocalStorage("fc5002", "1");
        storeValueInLocalStorage("fc5003", "1");
        storeValueInLocalStorage("fc5004", "1");
        storeValueInLocalStorage("fc5005", "1");

        if (
          this.processUnit[0].children[2].checked ||
          this.processUnit[5].children[3].checked
        ) {
          // NaClO开启时，活性炭粉末也开启
          this.processUnit[0].children[6].checked = true;
          storeValueInLocalStorage("fc1007", "1");
        }

        // 将设计水量存入缓存
        this.waterData = values.param14;
        storeValueInLocalStorage("waterData", this.waterData);
      });

      this.$message.success(this.$t("initSucc"));
      // console.log('Received values of form: ', this.form);

      // 初始化计算书缓存数据
      this.exportAllComputeBook();
    },
    handleReset() {
      this.form.resetFields();
      this.getProcessUnit();
      // 重置时将设计水量缓存也清空
      storeValueInLocalStorage("waterData", "");
      // 清空单元选择缓存
      this.handleInitChangeCache();
      this.$message.success(this.$t("resetSucc"));
    },
    handleChangeMassage(key, checked) {
      if (key === "1003" || key === "6004") {
        if (checked) {
          // 活性炭粉末
          this.processUnit[0].children[6].checked = true;
        } else {
          // 活性炭粉末
          this.processUnit[0].children[6].checked = false;
        }
      }
      if (key === "1006") {
        // O3
        this.$message.success(
          "厂区深度处理为臭氧活性炭优先选用，进水有溴化物慎用"
        );
      }
      if (key === "1005") {
        // 高锰酸钾
        this.$message.success("Fe、Mn超标尤其适用，后端为生物处理慎用");
      }
      if (key === "1004") {
        // ClO2
        this.$message.success("厂区消毒剂为ClO2优选选用，后端为生物处理慎用");
      }
      if (key === "1003") {
        // NaClO
        this.$message.success("厂区消毒剂为NaClO优选选用，后端为生物处理慎用");
      }
      if (key === "2002") {
        // 网格絮凝池
        this.$message.success("单池 > 2.5万m3/d 不建议采用网格絮凝池");
      }
      if (key === "2003") {
        // 折板絮凝池
        this.$message.success("单池 >= 5万m3/d 不建议采用折板絮凝池");
      }
      if (key === "3001") {
        // 平流沉淀池
        this.$message.success("设计规模 < 5万m3/d 不建议");
      }
      if (key === "3002") {
        // 斜管沉淀池
        this.$message.success("设计规模 < 5万m3/d 不建议");
      }
      if (key === "3003") {
        // 高密度沉淀池
        this.$message.success("设计规模 < 5万m3/d 不建议");
      }
      if (key === "3004") {
        // 机械搅拌澄清池
        this.$message.success("设计规模 < 5万m3/d 不建议");
      }
      if (key === "3005") {
        // 水力循环澄清池
        this.$message.success("设计规模 < 5万m3/d 不建议");
      }
      if (key === "3006") {
        // 气浮池
        this.$message.success("设计规模 < 5万m3/d 不建议");
      }
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
    onChange(key, checked) {
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
      const datas = [];
      const names = [];
      this.processUnit.forEach((element) => {
        element.children.forEach((child) => {
          if (child.checked) {
            try {
              console.log(`正在获取 ${child.key}`);
              const array = getArrayFromLocalStorage(child.key + ".xlsx");
              const name = getKeyNameFromLocalStorage(child.key + ".xlsx");
              datas.push(array);
              names.push(name);
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
      if (datas.length > 0) {
        try {
          exportExcelAll("总工程量", datas, names, this);
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
    // 初始化总计算书
    exportAllComputeBook() {
      const data1001 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: "5",
        key4: "72",
        key5: "6",
        key6: "14",
        key7: "1.05",
      };
      const data1002 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
        key4: "0.2",
        key5: "30",
        key6: "2",
        key7: "2",
      };
      const data1003 = {
        key1: this.waterData,
      };
      const data1004 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
      };
      const data1005 = {
        key1: this.waterData,
        key2: "1",
        key3: "4",
      };
      const data1006 = {
        key1: this.waterData,
        key2: "5",
        key3: "0.005",
      };
      const data1007 = {
        key1: this.waterData,
        key2: "35",
        key3: ((35 * parseFloat(this.waterData)) / 1000 / 24).toFixed(3),
        key4: "3",
      };
      const data2001 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: "4",
        key4: "20",
      };
      const data2002 = {
        key1: this.waterData,
        key2: "2",
        key3: "15",
      };
      const data2003 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) * 1.05).toFixed(0),
        key3: ((parseFloat(this.waterData) * 1.05) / (24 * 60 * 60)).toFixed(2),
        key4: "20",
        key5: "10",
        key6: "4.5",
        key7: "2",
        key8: (
          (parseFloat(this.waterData) * 1.05) /
          (24 * 60 * 60) /
          2
        ).toFixed(4),
        key9: "500",
      };
      const data2004 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
        key4: "20",
        key5: "15",
      };
      const data2005 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
        key4: "0.1",
        key5: "0.5",
      };
      const data3001 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: "2",
        key4: "1",
        key5: "10",
      };
      const data3002 = {
        key1: this.waterData,
        key2: "9.0",
        key3: "2",
      };
      const data3003 = {
        key1: this.waterData,
        key2: "1",
        key3: "16",
        key4: "10",
      };
      const data3004 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: "1.2",
        key4: "4",
        key5: "100",
        key6: "5",
      };
      const data3005 = {
        key1: (parseFloat(this.waterData) / 24).toFixed(2),
        key2: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
        key3: "1",
        key4: "4",
        key5: "1.2",
        key6: "15",
      };
      const data3006 = {
        key1: this.waterData,
        key2: "15",
        key3: "1.5",
        key4: "10",
      };
      const data4001 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
        key4: "6",
        key5: "24",
        key6: "30",
        key7: "6",
        key8: "0.5",
      };
      const data4002 = {
        key1: this.waterData,
        key2: "10",
        key3: "15",
        key4: "3",
        key5: "15",
        key6: "4",
        key7: "4",
        key8: "5",
        key9: "5",
        key10: "12",
        key11: "48",
        key12: "1.8",
      };
      const data5001 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: "0.005",
        key4: "1.06",
        key5: "70",
        key6: "10",
        key7: "20",
      };
      const data5002 = {
        key1: "10",
        key2: "2660",
        key3: "53",
        key4: "7.4",
        key5: "20",
        key6: "888.9",
        key7: "200",
        key8: "4",
        key9: "50",
        key10: "90",
        key11: "51.1",
        key12: "1.0",
        key13: "0.2",
        key14: "3",
      };
      const data6001 = {
        key1: this.waterData,
        unit1: "m3/d",
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        unit2: "m3/h",
        key3: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
        unit3: "m3/s",
      };
      const data6002 = {
        key1: "50000",
        key2: "60000",
        key3: "90",
        key4: "1",
        key5: "40",
        key6: "0.5",
        key7: "0.8",
      };
      const data6003 = {
        key1: this.waterData,
        key2: "5",
        key3: "0.005",
        key4: "20",
        key5: "10",
      };
      const data6004 = {
        key1: (parseFloat(this.waterData) / 24).toFixed(2),
        key2: "34",
        key3: "20",
        key4: "0.5",
        key5: "2",
        key6: "0.5",
        key7: "0.5",
        key8: "3.5",
        key9: "2",
      };
      const data6005 = {
        key1: this.waterData,
      };
      const data6006 = {
        key1: this.waterData,
        key2: (parseFloat(this.waterData) / 24).toFixed(2),
        key3: (parseFloat(this.waterData) / (24 * 60 * 60)).toFixed(2),
      };
      const data8001 = {
        key1: this.waterData,
        key2: "50",
        key3: "10",
        key4: "5",
        key5: "1.6",
      };
      const data8002 = {
        key1: this.waterData,
        key2: "2",
        key3: (
          (parseFloat(this.waterData) * 0.15 +
            (parseFloat(this.waterData) * 0.02 + 81.25) +
            144 +
            ((parseFloat(this.waterData) * 0.15 +
              (parseFloat(this.waterData) * 0.02 + 81.25) +
              144) /
              3.8) *
              0.2) /
          2
        ).toFixed(2),
      };
      const data9001 = {
        key1: this.waterData,
        key2: "20",
        key3: "20",
        key4: "0",
        key5: "2",
        key6: "0",
        key7: "1.5",
        key8: "99.2",
        key9: "97",
        key10: "2",
        key11: "24",
      };
      const data9002 = {
        key1: "347.13",
        key2: "97",
        key3: "1",
        key4: "0.5",
        key5: "0.1",
        key6: "0.1",
      };

      initWordStorage("1001.docx", data1001);
      initWordStorage("1002.docx", data1002);
      initWordStorage("1003.docx", data1003);
      initWordStorage("1004.docx", data1004);
      initWordStorage("1005.docx", data1005);
      initWordStorage("1006.docx", data1006);
      initWordStorage("1007.docx", data1007);
      initWordStorage("2001.docx", data2001);
      initWordStorage("2002.docx", data2002);
      initWordStorage("2003.docx", data2003);
      initWordStorage("2004.docx", data2004);
      initWordStorage("2005.docx", data2005);
      initWordStorage("3001.docx", data3001);
      initWordStorage("3002.docx", data3002);
      initWordStorage("3003.docx", data3003);
      initWordStorage("3004.docx", data3004);
      initWordStorage("3005.docx", data3005);
      initWordStorage("3006.docx", data3006);
      initWordStorage("4001.docx", data4001);
      initWordStorage("4002.docx", data4002);
      initWordStorage("5001.docx", data5001);
      initWordStorage("5002.docx", data5002);
      initWordStorage("6001.docx", data6001);
      initWordStorage("6002.docx", data6002);
      initWordStorage("6003.docx", data6003);
      initWordStorage("6004.docx", data6004);
      initWordStorage("6005.docx", data6005);
      initWordStorage("6006.docx", data6006);
      initWordStorage("8001.docx", data8001);
      initWordStorage("8002.docx", data8002);
      initWordStorage("9001.docx", data9001);
      initWordStorage("9002.docx", data9002);
    },
    // 初始化总工程量
    exportAllQuantities() {
      this.call1001("1001.xlsx", "生物接触氧化池工程量");
      this.call1002("1002.xlsx", "预沉池工程量");
      this.call1003("1003.xlsx", "次氯酸钠工程量");
      this.call1004("1004.xlsx", "二氧化氯工程量");
      this.call1005("1005.xlsx", "高锰酸钾工程量");
      this.call1006("1006.xlsx", "臭氧工程量");
      this.call1007("1007.xlsx", "活性炭粉末工程量");
      this.call2001("2001.xlsx", "机械絮凝池工程量");
      this.call2002("2002.xlsx", "网格絮凝池工程量");
      this.call2003("2003.xlsx", "折板絮凝池工程量");
      this.call2004("2004.xlsx", "PAC工程量");
      this.call2005("2005.xlsx", "PAM工程量");
      this.call3001("3001.xlsx", "平流沉淀池工程量");
      this.call3002("3002.xlsx", "斜管沉淀池工程量");
      this.call3003("3003.xlsx", "高密度沉淀池工程量");
      this.call3004("3004.xlsx", "机械搅拌澄清池工程量");
      this.call3005("3005.xlsx", "水力循环澄清池工程量");
      this.call3006("3006.xlsx", "平流式气浮池工程量");
      this.call4001("4001.xlsx", "普通快滤池工程量");
      this.call4002("4002.xlsx", "V型滤池工程量");
      this.call5001("5001.xlsx", "臭氧活性炭工程量");
      this.call5002("5002.xlsx", "UF-GE工程量");
      this.call6001("6001.xlsx", "接触消毒池工程量");
      this.call6002("6002.xlsx", "沉浸式紫外线消毒工程量");
      this.call6003("6003.xlsx", "臭氧消毒工程量");
      this.call6004("6004.xlsx", "折点加氯工程量");
      this.call6005("6005.xlsx", "加药系统次氯酸钠工程量");
      this.call6006("6006.xlsx", "加药系统二氧化氯工程量");
      this.call8001("8001.xlsx", "提升泵房工程量");
      this.call8002("8002.xlsx", "清水池工程量");
      this.call9001("9001.xlsx", "浓缩池工程量");
      this.call9002("9002.xlsx", "脱水加药工程量");
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
    call1001(path, name) {
      console.info("初始化1001工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "陶粒生物接触氧化池",
            尺寸: "70.1m x20.9m x4.4m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "反冲洗泵",
            设备类型: "",
            规格及型号: "Q=554.4m3/h, H=13.26m",
            单位: "台",
            数量: "8",
            运行时间: "",
            主要材质: "",
            备注: "6用2备",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "反冲洗风机",
            设备类型: "",
            规格及型号: "7.28m3/min, P=52.92KPa",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
        ];
        const data3 = [
          {
            序号: "",
            仪表位号: "",
            仪表名称: "电动阀",
            安装位置: "",
            规格及型号: "",
            单位: "台",
            数量: "80",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call1002(path, name) {
      console.info("初始化1002工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "1",
            名称: "预沉池",
            尺寸: "6m x0.75m x1.5m",
            标高: "",
            单位: "座",
            数量: "2",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "1",
            设备工艺名称: "桁车式吸泥机",
            设备类型: "吸泥机",
            规格及型号: "池深1.5m，N=2*0.55kW，池宽1.8m，轨距2.1m",
            单位: "台",
            数量: "2",
            运行时间: "4h",
            主要材质: "水上部分碳钢防腐，水下部分SS304",
            备注:
              "本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];
        const data = [...allData1, null, null, ...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call1003(path, name) {
      console.info("初始化1003工程量缓存");
      try {
        const data1 = [];
        const data2 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];
        const data = [...allData1, null, null, ...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call1004(path, name) {
      console.info("初始化1004工程量缓存");
      try {
        const data2 = [
          {
            序号: "1",
            设备位号: "1",
            设备工艺名称: "二氧化氯发生器",
            规格及型号: "WTL（Z）-1000",
            单位: "台",
            数量: "2",
            运行时间: "24h",
            主要材质: "",
            备注: "一用一备",
          },
        ];
        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];
        const data = [...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call1005(path, name) {
      console.info("初始化1005工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "溶液池",
            尺寸: "φ970mm×1230mm",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "搅拌机",
            设备类型: "折浆式搅拌机",
            规格及型号: "JBJ1-600",
            单位: "台",
            数量: "",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "计量泵",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1A094B",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "液压阀",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "背压阀",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "脉冲阻尼器",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "Y型过滤器",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
        ];
        const data3 = [
          {
            序号: "",
            仪表位号: "",
            仪表名称: "压力表",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "",
            仪表位号: "",
            仪表名称: "流量计",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call1006(path, name) {
      console.info("初始化1006工程量缓存");
      try {
        const data1 = [];
        const data2 = [];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call1007(path, name) {
      console.info("初始化1007工程量缓存");
      try {
        const data2 = [
          {
            key: "1",
            序号: "",
            设备位号: "",
            设备工艺名称: "投加系统",
            设备类型: "粉末活性炭干式投加系统",
            规格及型号: "料仓容积=3 m3",
            单位: "套",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "含物料储存、定量投加、射流混合及相关辅助部分",
          },
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];
        const data = [...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call2001(path, name) {
      console.info("初始化2001工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "1",
            名称: "机械搅拌絮凝池",
            尺寸: "14×9.5×3m",
            标高: "",
            单位: "座",
            数量: "2",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "机械搅拌絮凝池搅拌机",
            设备类型: "水平轴搅拌器",
            规格及型号:
              "池深3m，N=1.29kW，R1=3.83rpm，R2=2.68rpm，R3=1.53rpm，叶轮直径2700mm	",
            单位: "台",
            数量: "4",
            运行时间: "24h",
            主要材质: "水上部分碳钢防腐，水下部分SS304",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        const data = [...allData1, null, null, ...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call2002(path, name) {
      console.info("初始化2002工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "1",
            名称: "网格絮凝池",
            尺寸: "6.2×11×4m",
            标高: "",
            单位: "座",
            数量: "2",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "小孔眼网格板",
            设备类型: "网格板",
            规格及型号: "池L*B=1.40*1.40m，网格孔尺寸80×80mm，厚度10mm	",
            单位: "层",
            数量: "21",
            运行时间: "",
            主要材质: "SS304边框，PE网格",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "小孔眼网格板",
            设备类型: "网格板",
            规格及型号: "池L*B=1.40*1.40m，网格孔尺寸100×100mm，厚度10mm	",
            单位: "层",
            数量: "21",
            运行时间: "",
            主要材质: "SS304边框，PE网格",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "絮凝池排泥阀",
            设备类型: "电动闸阀",
            规格及型号: "DN150，PN10，开关型",
            单位: "个",
            数量: "28",
            运行时间: "",
            主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        const data = [...allData1, null, null, ...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call2003(path, name) {
      console.info("初始化2003工程量缓存");
      try {
        const data1 = [
          {
            key: "1",
            序号: "",
            单体位号: "",
            名称: "折板絮凝池",
            尺寸: "15.3×10×5m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            key: "1",
            序号: "",
            设备位号: "",
            设备工艺名称: "异波折板",
            设备类型: "单通道折板",
            规格及型号:
              "折板长度=1.5m，折板宽度=500mm，折板夹角=90°，折板厚度=3mm，缩放数=5",
            单位: "组",
            数量: "9",
            运行时间: "",
            主要材质: "SS304",
            备注: "",
          },
          {
            key: "2",
            序号: "",
            设备位号: "",
            设备工艺名称: "同波折板",
            设备类型: "单通道折板",
            规格及型号:
              "折板长度=2.4m，折板宽度=500mm，折板夹角=90°，折板厚度=3mm，转弯数=9",
            单位: "组",
            数量: "6",
            运行时间: "",
            主要材质: "SS304",
            备注: "",
          },
          {
            key: "3",
            序号: "",
            设备位号: "",
            设备工艺名称: "直板",
            设备类型: "单通道折板",
            规格及型号: "	折板长度=m，折板宽度=3m，直板厚度=3mm",
            单位: "组",
            数量: "9",
            运行时间: "",
            主要材质: "SS304",
            备注: "",
          },
          {
            key: "4",
            序号: "",
            设备位号: "",
            设备工艺名称: "絮凝池排泥阀",
            设备类型: "单通道折板",
            规格及型号: "DN150，PN10，开关型",
            单位: "个",
            数量: "24",
            运行时间: "",
            主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
            备注: "带配套电动执行机构",
          },
        ];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call2004(path, name) {
      console.info("初始化2004工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "溶液池",
            尺寸: "φ970mm×1230mm",
            标高: "",
            单位: "个",
            数量: "2",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
          {
            序号: "",
            单体位号: "",
            名称: "溶解池",
            尺寸: "",
            标高: "",
            单位: "个",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "搅拌机",
            设备类型: "折浆式搅拌机",
            规格及型号: "JBJ1-600",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "计量泵",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1B108C",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "液压阀",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "背压阀",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "脉冲阻尼器",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "Y型过滤器",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
        ];
        const data3 = [
          {
            序号: "",
            仪表位号: "",
            仪表名称: "压力表",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "3",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "",
            仪表位号: "",
            仪表名称: "流量计",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "3",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call2005(path, name) {
      console.info("初始化2005工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "溶液池",
            尺寸: "φ780mm×1110mm	",
            标高: "",
            单位: "个",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "搅拌机",
            设备类型: "折浆式搅拌机",
            规格及型号: "JBJ1-600	",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "计量泵",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1A094C",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "液压阀",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "背压阀",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "脉冲阻尼器",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "Y型过滤器",
            设备类型: "",
            规格及型号: "",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
        ];
        const data3 = [
          {
            序号: "",
            仪表位号: "",
            仪表名称: "压力表",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "1",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "",
            仪表位号: "",
            仪表名称: "流量计",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "1",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call3001(path, name) {
      console.info("初始化3001工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "平流沉淀池",
            尺寸: "72×8×6.34m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "桁车式刮泥机",
            设备类型: "刮泥机",
            规格及型号: "池深4.84m，池长72m，N=0.75kW，池宽2*4.00m，轨距8.3m	",
            单位: "台",
            数量: "1",
            运行时间: "4h",
            主要材质: "水上部分碳钢防腐，水下部分SS304",
            备注:
              "本机含主梁、轨道、驱动装置、机架、刮板、撇渣装置，配套控制箱",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "集水槽",
            设备类型: "集水槽",
            规格及型号: "L×B×H=4×0.3×0.3mm，δ=3mm",
            单位: "套",
            数量: "12",
            运行时间: "",
            主要材质: "SS304",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];
        const data = [...allData1, null, null, ...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call3002(path, name) {
      console.info("初始化3002工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "斜管沉淀池",
            尺寸: "12×11×5.37m",
            标高: "",
            单位: "座",
            数量: "2",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "桁车式吸泥机",
            设备类型: "吸泥机",
            规格及型号: "池深m，N=2*0.55kW，池宽2*11m，轨距22.3m	",
            单位: "台",
            数量: "1",
            运行时间: "4h",
            主要材质: "水上部分碳钢防腐，水下部分SS304",
            备注:
              "本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "集水槽",
            设备类型: "集水槽",
            规格及型号: "L×B×H=12×0.20×0.55m，δ=3mm	",
            单位: "套",
            数量: "16",
            运行时间: "",
            主要材质: "SS304",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];
        const data = [...allData1, null, null, ...allData2];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call3003(path, name) {
      console.info("初始化3003工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "",
            名称: "混合池",
            尺寸: "3.80×3.80×3.80	",
            标高: "",
            单位: "座",
            数量: "4",
            结构形式: "钢砼",
            备注: "地上，无盖；池顶设置走道及栏杆。",
            暖通要求: "无",
          },
          {
            序号: "2",
            单体位号: "",
            名称: "絮凝区",
            尺寸: "6.50×6.50×6.60",
            标高: "",
            单位: "座",
            数量: "4",
            结构形式: "钢砼",
            备注: "地上，无盖；池顶设置走道及栏杆。",
            暖通要求: "无",
          },
          {
            序号: "3",
            单体位号: "",
            名称: "沉淀区",
            尺寸: "13.00×13.00×9.90",
            标高: "",
            单位: "座",
            数量: "4",
            结构形式: "钢砼",
            备注: "地上，无盖；池顶设置走道及栏杆。",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "刮泥机",
            设备类型: "中心传动刮泥机",
            规格及型号: "池径13.00m，池边高度9.90m，N=0.37kW	",
            单位: "套",
            数量: "4",
            备注: "配冷却风扇",
            主要材质: "水上部分碳钢防腐，水下部分SS304",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "斜管填料",
            设备类型: "斜管蜂窝填料",
            规格及型号: "Φ50mm，L=750mm",
            单位: "m²",
            数量: "484",
            备注: "含碳钢防腐支撑",
            主要材质: "乙丙共聚",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "高密池集水槽",
            设备类型: "",
            规格及型号: "L×B×H=5700×300×400mm，δ=5mm",
            单位: "套",
            数量: "56",
            备注: "",
            主要材质: "SS304",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "进水堰板",
            设备类型: "可调堰板",
            规格及型号: "L=3.5m；厚度3mm",
            单位: "个",
            数量: "4",
            备注: "",
            主要材质: "SS304",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "5",
            设备位号: "",
            设备工艺名称: "进水闸门",
            设备类型: "方形闸板阀",
            规格及型号: "L×B=0.70×0.70m	",
            单位: "套",
            数量: "4",
            备注: "",
            主要材质: "闸框铸铁，闸板球墨铸铁",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "6",
            设备位号: "",
            设备工艺名称: "出水闸门",
            设备类型: "方形闸板阀",
            规格及型号: "L×B=0.70×0.70m",
            单位: "套",
            数量: "4",
            备注: "",
            主要材质: "闸框铸铁，闸板球墨铸铁",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "7",
            设备位号: "",
            设备工艺名称: "导流筒",
            设备类型: "",
            规格及型号: "Φ=3.05m，H=4.13m，δ=5mm",
            单位: "个",
            数量: "4",
            备注: "",
            主要材质: "SS304",
            生产厂家: "需要厂家确认",
            与基础设计不同之处: "",
          },
          {
            序号: "8",
            设备位号: "",
            设备工艺名称: "PAM投加环",
            设备类型: "",
            规格及型号: "Φ=3.05m，H=4.13m，δ=5mm",
            单位: "套",
            数量: "4",
            备注: "",
            主要材质: "SS304",
            生产厂家: "需要厂家确认",
            与基础设计不同之处: "",
          },
          {
            序号: "9",
            设备位号: "",
            设备工艺名称: "Na2CO3投加环",
            设备类型: "",
            规格及型号: "Φ=1.4m，DN32",
            单位: "套",
            数量: "4",
            备注: "",
            主要材质: "SS304",
            生产厂家: "需要厂家确认",
            与基础设计不同之处: "",
          },
          {
            序号: "10",
            设备位号: "",
            设备工艺名称: "混合池搅拌机",
            设备类型: "桨叶式搅拌机",
            规格及型号: "池深3.80m，N=37.50kW，R=67rpm，叶轮直径1430mm",
            单位: "台",
            数量: "4",
            备注: "桨叶形式：单层",
            主要材质: "桨叶：SS304",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "11",
            设备位号: "",
            设备工艺名称: "絮凝池搅拌机",
            设备类型: "提升式搅拌机",
            规格及型号: "池深6.6m，N=7.5kW，R=6.00~19.00rpm，叶轮直径2960mm",
            单位: "台",
            数量: "4",
            备注: "桨叶形式：单层，变频，",
            主要材质: "桨叶：SS304",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "12",
            设备位号: "",
            设备工艺名称: "污泥排放泵",
            设备类型: "单螺杆泵",
            规格及型号: "Q=50.00m³/h，H=0.2MPa，N=4.00kW",
            单位: "台",
            数量: "4",
            备注: "",
            主要材质: "转子：工具钢，定子：丁腈橡胶 ",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "13",
            设备位号: "",
            设备工艺名称: "污泥回流泵",
            设备类型: "单螺杆泵",
            规格及型号: "Q=50.00m³/h，H=0.2MPa，N=4kW",
            单位: "台",
            数量: "8",
            备注: "4用4备",
            主要材质: "转子：工具钢，定子：丁腈橡胶 ",
            生产厂家: "",
            与基础设计不同之处: "",
          },
          {
            序号: "14",
            设备位号: "",
            设备工艺名称: "撇渣器",
            设备类型: "手动撇渣器",
            规格及型号: "撇渣管长5.7m",
            单位: "台",
            数量: "8",
            备注: "带撇渣管及手动控制器",
            主要材质: "",
            生产厂家: "",
            与基础设计不同之处: "",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            安装位置: "进水管",
            仪表名称: "超声波流量计",
            规格及型号:
              "一体式，DN1500，Q=0~6000m³/h，4~20mA信号输出，就地显示，电源：220V",
            单位: "台",
            数量: "1",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
          {
            序号: "2",
            仪表位号: "",
            安装位置: "进水渠",
            仪表名称: "浮球液位开关",
            规格及型号: "0~1.2m，高液位报警",
            单位: "个",
            数量: "1",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
          {
            序号: "3",
            仪表位号: "",
            安装位置: "进水渠",
            仪表名称: "pH/T在线监测仪",
            规格及型号: "pH量程：0~14，温度量程：15~50℃，4~20mA信号输出	",
            单位: "台",
            数量: "1",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
          {
            序号: "4",
            仪表位号: "",
            安装位置: "进水渠",
            仪表名称: "浊度仪",
            规格及型号: "0~5000NTU，4~20mA信号输出",
            单位: "台",
            数量: "1",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
          {
            序号: "5",
            仪表位号: "",
            安装位置: "沉淀池池壁",
            仪表名称: "超声波泥位计",
            规格及型号: "0~9.90m，4~20mA信号输出",
            单位: "台",
            数量: "4",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
          {
            序号: "6",
            仪表位号: "",
            安装位置: "污泥排放泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜式压力表，外壳AISI304，测量元件AISI316，测量范围：0~0.6MPa，Φ100mm",
            单位: "台",
            数量: "4",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
          {
            序号: "7",
            仪表位号: "",
            安装位置: "污泥回流泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜式压力表，外壳AISI304，测量元件AISI316，测量范围：0~0.6MPa，Φ100mm	",
            单位: "台",
            数量: "8",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
          {
            序号: "8",
            仪表位号: "",
            安装位置: "污泥回流泵出口管路",
            仪表名称: "污泥回流电磁流量计",
            规格及型号:
              "一体式，DN100，Q=0~50.00m³/h，4~20mA信号输出，就地显示，电源：220V	",
            单位: "台",
            数量: "4",
            备注: "",
            生产厂家: "",
            a: "",
            与基础设计不同处: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call3004(path, name) {
      console.info("初始化3004工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "机械搅拌澄清池",
            尺寸: "Ø26.68×5.27m",
            标高: "",
            单位: "座",
            数量: "m",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "澄清池搅拌机",
            设备类型: "提升搅拌机",
            规格及型号: "叶轮直径2.00m，n=11.46rpm，N=1.50kW	",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "SS304",
            备注: "",
          },
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "澄清池刮泥机",
            设备类型: "中心传动刮泥机",
            规格及型号: "刮臂直径26.68m，n=1~3rpm，N=1.5kW	",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "液下部分SS304，刮板橡胶",
            备注: "",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "1",
            安装位置: "污泥斗",
            仪表名称: "超声波泥位计",
            规格及型号: "0~5.27m，4~20mA信号输出，就地显示	",
            单位: "台",
            数量: "1",
            备注: "",
            生产厂家: "",
            a: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call3005(path, name) {
      console.info("初始化3005工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "1",
            名称: "机械搅拌澄清池",
            尺寸: "Ø118×5.21m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "1",
            安装位置: "污泥斗",
            仪表名称: "超声波泥位计",
            规格及型号: "0~5.21m，4~20mA信号输出，就地显示	",
            单位: "台",
            数量: "1",
            备注: "",
            生产厂家: "",
            a: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [...allData1, null, null, ...allData3];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call3006(path, name) {
      console.info("初始化3006工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "1",
            名称: "平流式气浮池",
            尺寸: "22.00×8×2.5m",
            标高: "",
            单位: "座",
            数量: "2",
            结构形式: "钢砼",
            备注: "半地下式",
            暖通要求: "无",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "桥式刮渣机",
            设备类型: "刮渣机",
            规格及型号: "池宽8m，池长22.00m，行走速度5m/min，N=0.75kW	",
            单位: "台",
            数量: "1",
            运行时间: "4h",
            主要材质: "水上部分碳钢防腐，水下部分SS304",
            备注: "本机含主梁、轨道、驱动装置、机架、集渣斗，配套控制箱",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "溶气释放器",
            设备类型: "溶气释放器",
            规格及型号: "溶气压力0.25MPa，释放器出流量5.6m3/h	",
            单位: "个",
            数量: "30",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "溶气罐",
            设备类型: "压力溶气罐",
            规格及型号:
              "Φ1.00*3m，工作压力0.2~0.5MPa，过水能力166.67m3/h，含填料	",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "碳钢防腐",
            备注: "配安全阀、压力表、放空阀",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "溶气泵",
            设备类型: "立式离心泵",
            规格及型号: "Q=83.34m3/h，H=25m，N=7.5kW	",
            单位: "台",
            数量: "3",
            运行时间: "24h",
            主要材质: "",
            备注: "",
          },
          {
            序号: "5",
            设备位号: "",
            设备工艺名称: "空压机",
            设备类型: "活塞式空压机",
            规格及型号: "Q=0.19m3/min，P=0.6MPa，N=0.375kW",
            单位: "台",
            数量: "2",
            运行时间: "24h",
            主要材质: "",
            备注: "",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            安装位置: "溶气泵出口总管",
            仪表名称: "电磁流量计",
            规格及型号:
              "一体式，DN80，0~83.34m3/h，4-20mA信号输出，就地显示，电源：220V，防爆	",
            单位: "台",
            数量: "2",
            备注: "",
            生产厂家: "",
            a: "",
          },
          {
            序号: "2",
            仪表位号: "",
            安装位置: "空压机出口总管",
            仪表名称: "涡街流量计",
            规格及型号:
              "一体式，DN40，0~0.19m3/h，4-20mA信号输出，就地显示，电源：220V，防爆	",
            单位: "台",
            数量: "2",
            备注: "",
            生产厂家: "",
            a: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call4001(path, name) {
      console.info("初始化4001工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "",
            名称: "普通快滤池",
            尺寸: "52.5m×22.9m×3.40m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "",
            设备位号: "",
            设备工艺名称: "反冲洗泵",
            设备类型: "",
            规格及型号: "Q=518.4m3/h，H=9.24m	",
            单位: "台",
            数量: "7",
            运行时间: "",
            主要材质: "",
            备注: "5用2备",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "电动阀",
            安装位置: "",
            规格及型号: "",
            单位: "台",
            数量: "64",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call4002(path, name) {
      console.info("初始化4002工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "",
            名称: "V型滤池",
            尺寸: "14.38m * 14.7m * 4.6",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "反冲洗泵",
            设备类型: "Q=486m³/h，H=12m",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "反冲洗风机",
            设备类型: "Q=50.4m3/min，P=49kPa，N=75kW",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "1用1备",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "电动阀",
            安装位置: "",
            规格及型号: "",
            单位: "台",
            数量: "8",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call5001(path, name) {
      console.info("初始化5001工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "",
            名称: "臭氧接触池",
            尺寸: "3m×12m×4.5m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
          {
            序号: "1",
            单体位号: "",
            名称: "活性炭吸附池",
            尺寸: "3.8m×3.8m×5.05m",
            标高: "",
            单位: "座",
            数量: "",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "微孔扩散板",
            设备类型: "鼓气量>0.64m3/h",
            规格及型号: "",
            单位: "个",
            数量: "905",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "臭氧发生器",
            设备类型: "臭氧产气量15kg/h，工作压力>4.95m",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "颗粒活性炭",
            设备类型: "粒径0.8～1.7mm",
            规格及型号: "",
            单位: "t",
            数量: "126.35",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
        ];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call5002(path, name) {
      console.info("初始化5002工程量缓存");
      try {
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "超滤提升泵",
            设备类型: "卧式离心泵",
            规格及型号: "流量=222.22m3/h，扬程=0.3MPa，功率=37kW	",
            单位: "台",
            数量: "5",
            备注: "4用1备，变频",
            主要材质: "泵壳：铸铁，叶轮：SS304",
            运行时间: "24h",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "超滤进水管道混合器",
            设备类型: "管道混合器",
            规格及型号: "DN500，PN10，L=1500mm",
            单位: "台",
            数量: "1",
            备注: "管道混合器",
            主要材质: "碳钢衬胶",
            运行时间: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "超滤自清洗过滤器",
            设备类型: "网式自清洗过滤器",
            规格及型号: "流量=222.22m3/h，扬程=200MPa，N=0.37kW	",
            单位: "台",
            数量: "5",
            备注: "带自动清洗系统，带自动控制箱；清洁方式：吸吮式",
            主要材质: "壳体碳钢凃环氧树脂，滤网SS316",
            运行时间: "24h",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "超滤装置",
            设备类型: "",
            规格及型号: "单套进水量=222.22m3/h",
            单位: "套",
            数量: "5",
            备注: "4用1备，含电磁阀箱、设备上气源管材及设备上的电缆及管材",
            主要材质: "",
            运行时间: "",
          },
          {
            序号: "5",
            设备位号: "",
            设备工艺名称: "超滤膜",
            设备类型: "外压中空纤维超滤膜元件",
            规格及型号: "净通量：50L/m2.h，膜面积：51.1m2/支，单套79支膜",
            单位: "支",
            数量: "316",
            备注: "",
            主要材质: "膜材质：PVDF",
            运行时间: "",
          },
          {
            序号: "6",
            设备位号: "",
            设备工艺名称: "超滤滑架",
            设备类型: "超滤滑架",
            规格及型号: "尺寸：L×W×H=5.2×2.6×3.1m，含取样和压力表面板等",
            单位: "套",
            数量: "5",
            备注: "",
            主要材质: "碳钢防腐",
            运行时间: "",
          },
          {
            序号: "7",
            设备位号: "",
            设备工艺名称: "超滤反洗泵",
            设备类型: "卧式离心泵",
            规格及型号: "流量=403.69m3/h，扬程=0.25MPa，功率=45kW",
            单位: "台",
            数量: "2",
            备注: "1用1备，变频",
            主要材质: "泵壳：铸铁，叶轮：SS304",
            运行时间: "3h",
          },
          {
            序号: "8",
            设备位号: "",
            设备工艺名称: "超滤产水箱",
            设备类型: "立式圆筒水箱",
            规格及型号: "V≥889m3",
            单位: "座",
            数量: "1",
            备注: "配溢流管、排污管、通气口、旋转爬梯，配套就地液位计",
            主要材质: "",
            运行时间: "",
          },
          {
            序号: "9",
            设备位号: "",
            设备工艺名称: "工艺压缩空气储罐",
            设备类型: "立式空气储罐",
            规格及型号: "V=6.4m3/h，设计压力：0.7MPa",
            单位: "台",
            数量: "1",
            备注: "配压力表、安全阀、排污阀各1套",
            主要材质: "Q345R",
            运行时间: "",
          },
          {
            序号: "10",
            设备位号: "",
            设备工艺名称: "仪表压缩空气储罐",
            设备类型: "立式空气储罐",
            规格及型号: "V=5m3，设计压力：0.7MPa	",
            单位: "台",
            数量: "1",
            备注: "配压力表、安全阀、排污阀各1套",
            主要材质: "Q345R",
            运行时间: "",
          },
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "超滤化学清洗水箱",
            设备类型: "立式圆筒水箱",
            规格及型号: "V=8m³",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "碳钢衬胶",
            运行时间: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "超滤化学清洗水泵",
            设备类型: "卧式离心泵",
            规格及型号: "流量=158m3/h，扬程=0.35MPa，功率=15kW",
            单位: "台",
            数量: "2",
            备注: "1用1备",
            主要材质: "泵壳及叶轮：SS316L",
            运行时间: "1h",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "超滤化学清洗过滤器",
            设备类型: "保安过滤器",
            规格及型号: "流量=158m3/h",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "碳钢衬胶",
            运行时间: "",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "滤芯",
            设备类型: "折叠式大通量滤芯",
            规格及型号: "40英寸，过滤精度：50μm",
            单位: "支",
            数量: "4",
            备注: "",
            主要材质: "聚丙烯",
            运行时间: "",
          },
          {
            序号: "5",
            设备位号: "",
            设备工艺名称: "电加热器",
            设备类型: "电加热器",
            规格及型号: "N=30kW，侧装式",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "SS316L",
            运行时间: "",
          },
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "杀菌剂储罐",
            设备类型: "卧式储罐",
            规格及型号: "V=25m3",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "碳钢衬胶",
            运行时间: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "杀菌剂卸料泵",
            设备类型: "化工泵",
            规格及型号: "Q=25m3/h，H=20m，N=4kW",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "氟塑料",
            运行时间: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "杀菌剂计量箱",
            设备类型: "立式计量箱",
            规格及型号: "V=1m³",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "",
            运行时间: "",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "超滤化学清洗杀菌剂计量泵",
            设备类型: "机械隔膜计量泵",
            规格及型号: "流量=977.11L/h，扬程=5bar，N=0.37kW",
            单位: "台",
            数量: "2",
            备注:
              "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
            主要材质: "泵头PVC，隔膜PTFE",
            运行时间: "0.1h",
          },
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "碱储罐",
            设备类型: "卧式储罐",
            规格及型号: "V=25m3",
            单位: "台",
            数量: "3",
            备注: "伴热功率4KW",
            主要材质: "碳钢衬胶",
            运行时间: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "卸盐酸泵",
            设备类型: "化工泵",
            规格及型号: "Q=25m3/h，H=20m，N=4kW",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "氟塑料",
            运行时间: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "碱计量箱",
            设备类型: "立式圆筒水箱",
            规格及型号: "V=1m³",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "",
            运行时间: "",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "化学清洗碱计量泵",
            设备类型: "机械隔膜计量泵",
            规格及型号: "流量=274.59L/h，扬程=5bar，N=0.25kW	",
            单位: "台",
            数量: "2",
            备注:
              "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
            主要材质: "泵头PVC，隔膜PTFE",
            运行时间: "",
          },
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "盐酸储罐",
            设备类型: "卧式储罐",
            规格及型号: "V=25m3",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "碳钢衬胶",
            运行时间: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "卸盐酸泵",
            设备类型: "化工泵",
            规格及型号: "Q=25m3/h，H=20m，N=4kW",
            单位: "台",
            数量: "1",
            备注: "",
            主要材质: "氟塑料",
            运行时间: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "盐酸计量箱",
            设备类型: "立式圆筒水箱",
            规格及型号: "V=1m³",
            单位: "台",
            数量: "3",
            备注: "",
            主要材质: "",
            运行时间: "",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "化学清洗盐酸计量泵",
            设备类型: "机械隔膜计量泵",
            规格及型号: "流量=242.7L/h，扬程=5bar，N=0.25kW",
            单位: "台",
            数量: "2",
            备注:
              "1用1备，含配套Y型过滤器、背压阀、安全阀，缓冲器等附件，与CEB计量泵共用",
            主要材质: "泵头PVC，隔膜PTFE",
            运行时间: "",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            安装位置: "超滤进水泵出口管",
            仪表名称: "就地压力表",
            规格及型号:
              "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "2",
            仪表位号: "",
            安装位置: "超滤进水支管",
            仪表名称: "压力变送器",
            规格及型号:
              "一体式，外壳材质：铸铝，测量范围：0～0.3MPa，输出信号：4～20mA+Hart协议，测量元件：304，配安装附件，就地显示。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "3",
            仪表位号: "",
            安装位置: "超滤进水支管",
            仪表名称: "就地压力表",
            规格及型号:
              "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "4",
            仪表位号: "",
            安装位置: "超滤产水支管",
            仪表名称: "压力变送器",
            规格及型号:
              "一体式，外壳材质：铸铝，测量范围：0～0.3MPa，输出信号：4～20mA+Hart协议，测量元件：SS304，配安装附件，就地显示。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "5",
            仪表位号: "",
            安装位置: "超滤产水支管",
            仪表名称: "就地压力表",
            规格及型号:
              "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：SS304，Φ100mm，配表阀。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "6",
            仪表位号: "",
            安装位置: "超滤产水支管",
            仪表名称: "电磁流量计",
            规格及型号:
              "分体式，电源：AC220V，测量范围：0~173m³/h，DN200，输出信号：4~20mA+Hart协议，本体：碳钢衬塑，电极材质：304，衬里材质：氯丁橡胶，配接地环及安装附件，就地显示。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "7",
            仪表位号: "",
            安装位置: "超滤产水支管",
            仪表名称: "在线浊度分析仪",
            规格及型号:
              "电源：AC 220V，测量范围：0~10NTU，输出信号：4~20mA，配套安装附件，电缆：10米，就地显示。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "8",
            仪表位号: "",
            安装位置: "超滤产水箱",
            仪表名称: "超声波液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～10米，输出信号：4～20mA+Hart协议，配安装附件，就地显示。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "9",
            仪表位号: "",
            安装位置: "超滤浓水错流排放管",
            仪表名称: "转子流量计",
            规格及型号:
              "测量范围：0~5m³/h，DN50，本体：有机玻璃，带导杆；承插连接，就地显示。",
            单位: "台",
            数量: "5",
            备注: "",
          },
          {
            序号: "10",
            仪表位号: "",
            安装位置: "超滤反洗泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "内充甘油耐震压力表，测量范围：0~0.3Mpa，外壳材质：不锈钢304，测量元件：304，Φ100mm，配表阀。",
            单位: "台",
            数量: "2",
            备注: "",
          },
          {
            序号: "1",
            仪表位号: "",
            安装位置: "超滤化学清洗水箱侧壁",
            仪表名称: "磁翻板液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～2.5米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：UPVC，浮子材质：UPVC，配通气阀、排污阀及安装附件，就地显示。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "2",
            仪表位号: "",
            安装位置: "超滤化学清洗水箱侧壁",
            仪表名称: "温度变送器",
            规格及型号: "测量范围：0～100℃ ，输出信号：4~20mA+Hart协议",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "3",
            仪表位号: "",
            安装位置: "超滤化学清洗水泵出水",
            仪表名称: "就地压力表",
            规格及型号:
              "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
            单位: "台",
            数量: "2",
            备注: "",
          },
          {
            序号: "4",
            仪表位号: "",
            安装位置: "超滤化学清洗保安过滤器进水",
            仪表名称: "就地压力表",
            规格及型号:
              "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "5",
            仪表位号: "",
            安装位置: "超滤化学清洗保安过滤器出水",
            仪表名称: "就地压力表",
            规格及型号:
              "内充甘油耐震压力表，测量范围：0~0.4Mpa，外壳材质：不锈钢304，测量元件：316L，Φ100mm，配表阀。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "6",
            仪表位号: "",
            安装位置: "超滤化学清洗保安过滤器出水",
            仪表名称: "浮子流量计",
            规格及型号: "测量范围：0~158m3/h，DN150",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "1",
            仪表位号: "",
            安装位置: "次氯酸钠储罐",
            仪表名称: "磁翻板液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "2",
            仪表位号: "",
            安装位置: "次氯酸钠卸料泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
            单位: "台",
            数数量: "1",
            备注: "",
          },
          {
            序号: "3",
            仪表位号: "",
            安装位置: "次氯酸钠计量箱",
            仪表名称: "磁翻板液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "5",
            仪表位号: "",
            安装位置: "化学清洗次氯酸钠计量泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
            单位: "台",
            数量: "2",
            备注: "",
          },
          {
            序号: "1",
            仪表位号: "",
            安装位置: "盐酸储罐",
            仪表名称: "磁翻板液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "2",
            仪表位号: "",
            安装位置: "盐酸卸料泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "3",
            仪表位号: "",
            安装位置: "盐酸计量箱",
            仪表名称: "磁翻板液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "4",
            仪表位号: "",
            安装位置: "化学清洗盐酸计量泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
            单位: "台",
            数量: "2",
            备注: "",
          },
          {
            序号: "1",
            仪表位号: "",
            安装位置: "碱储罐",
            仪表名称: "磁翻板液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～2.2米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "2",
            仪表位号: "",
            安装位置: "碱卸料泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜耐震压力表，测量范围：0～0.2MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "3",
            仪表位号: "",
            安装位置: "碱计量箱",
            仪表名称: "磁翻板液位计",
            规格及型号:
              "一体式，电源：DC24V，测量范围：0～0.8米，输出信号：4～20mA+Hart协议，外壳材质：铝合金、塑料翻柱，旁通管材质：PVC，浮子材质：PVC，配通气阀、排污阀及安装附件，就地显示。",
            单位: "台",
            数量: "1",
            备注: "",
          },
          {
            序号: "4",
            仪表位号: "",
            安装位置: "化学清洗碱计量泵出口",
            仪表名称: "就地压力表",
            规格及型号:
              "隔膜耐震压力表，测量范围：0～0.5MPa，外壳材质：PP，隔膜材质：PTFE，Φ63mm，配表阀。",
            单位: "台",
            数量: "2",
            备注: "",
          },
        ];
        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [...allData2, null, null, ...allData3];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call6001(path, name) {
      console.info("初始化6001工程量缓存");
      try {
        const data1 = [
          {
            序号: "",
            单体位号: "",
            名称: "接触消毒池",
            尺寸: "13.1m x 8.60m x 2.00m",
            标高: "",
            单位: "座",
            数量: "2",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        const data = [...allData1];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call6002(path, name) {
      console.info("初始化6002工程量缓存");
      try {
        const data1 = [];
        const data2 = [];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call6003(path, name) {
      console.info("初始化6003工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "",
            名称: "臭氧接触池",
            尺寸: "3m×12m×4.5m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "微孔扩散板",
            设备类型: "鼓气量>0.64m3/h",
            规格及型号: "",
            单位: "个",
            数量: "603",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "臭氧发生器",
            设备类型: "臭氧产气量8kg/h，工作压力>4.95m",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "一用一备，配套尾气破坏器",
          },
        ];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call6004(path, name) {
      console.info("初始化6004工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "",
            名称: "反应池",
            尺寸: "10×6.5×4.5	",
            标高: "池顶标高+3.0m,池底标高-1.5m。",
            单位: "座",
            数量: "1",
            结构形式: "钢砼",
            备注: "",
            暖通要求: "",
            与基础设计不同处: "",
            土建说明: "",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "加氯成套装置",
            设备类型: "加氯成套装置",
            规格及型号: "液氯投加能力Q＝100kg/h	",
            单位: "台",
            数量: "1",
            备注:
              "成套装置，含就地控制箱，氨瓶，加压泵，水射器，管道加热器，液氯膨胀室，液氯蒸发器，氯气过滤器，真空调节器，加氯机，漏氯报警仪，漏氯吸收装置，配套阀门管道等。",
          },
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "加碱成套装置",
            设备类型: "加碱成套装置",
            规格及型号: "碱投加能力Q＝300L/h	",
            单位: "台",
            数量: "1",
            备注:
              "成套装置，含就地控制箱（1个）、安装机架（1个）、碱加药泵（2台）、Y型过滤器（2个）、脉冲缓冲器（1个）、安全阀（2个）、背压阀（1个），磁翻板液位计（1个），配套阀门管道等。",
          },
        ];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call6005(path, name) {
      console.info("初始化6005工程量缓存");
      try {
        const data1 = [];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "次氯酸钠储罐",
            设备类型: "",
            规格及型号: "3.00m3	",
            单位: "个",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "计量泵-消毒",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1B108A",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "PC泵头",
            备注: "一用一备",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "计量泵-预处理",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1B108A",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "PC泵头",
            备注: "一用一备",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "液压阀",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "4",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "5",
            设备位号: "",
            设备工艺名称: "背压阀",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "4",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "6",
            设备位号: "",
            设备工艺名称: "脉冲阻尼器",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "4",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "7",
            设备位号: "",
            设备工艺名称: "Y型过滤器",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "4",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "8",
            设备位号: "",
            设备工艺名称: "卸液泵",
            设备类型: "",
            规格及型号: "流量=12.00m3/h",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "9",
            设备位号: "",
            设备工艺名称: "次氯酸钠储罐（PE储罐）",
            设备类型: "",
            规格及型号: "容积=3.00m3",
            单位: "个",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "次氯酸钠发生器",
            设备类型: "",
            规格及型号: "发生量=0.9m3/h功率=3.0kw	",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "溶盐箱",
            设备类型: "",
            规格及型号: "容积=2.625m3	",
            单位: "个",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "食盐水计量泵",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1C138C",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "PC泵头",
            备注: "一用一备",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "计量泵-消毒",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1C165C",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "PC泵头",
            备注: "一用一备",
          },
          {
            序号: "5",
            设备位号: "",
            设备工艺名称: "次氯酸钠储罐",
            设备类型: "机械隔膜计量泵",
            规格及型号: "MS1B108A",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "PC泵头",
            备注: "一用一备",
          },
          {
            序号: "6",
            设备位号: "",
            设备工艺名称: "液压阀",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "6",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "7",
            设备位号: "",
            设备工艺名称: "背压阀",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "6",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "8",
            设备位号: "",
            设备工艺名称: "脉冲阻尼器",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "6",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "9",
            设备位号: "",
            设备工艺名称: "Y型过滤器",
            设备类型: "",
            规格及型号: "",
            单位: "个",
            数量: "",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "10",
            设备位号: "",
            设备工艺名称: "次氯酸钠储罐（PE储罐）",
            设备类型: "",
            规格及型号: "容积=10.5m3",
            单位: "个",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "压力表",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "4",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "2",
            仪表位号: "",
            仪表名称: "流量计",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "4",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "压力表",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "6",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "2",
            仪表位号: "",
            仪表名称: "流量计",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "6",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call6006(path, name) {
      console.info("初始化6006工程量缓存");
      try {
        const data1 = [];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "二氧化氯发生器",
            设备类型: "",
            规格及型号: "WTL（Z）-5000",
            单位: "台",
            数量: "2",
            运行时间: "24h",
            主要材质: "",
            备注: "一用一备",
          },
        ];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call8001(path, name) {
      console.info("初始化8001工程量缓存");
      try {
        const data1 = [];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "",
            设备类型: "",
            规格及型号: "Q=500m3/h,H=50m,N=80.09kw	",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "二用一备",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "",
            设备类型: "",
            规格及型号: "Q=750m3/h,H=50m,N=120.14kw",
            单位: "台",
            数量: "4",
            运行时间: "",
            主要材质: "",
            备注: "二用一备",
          },
        ];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "电磁流量计",
            安装位置: "",
            规格及型号:
              "一体式，DN80，0~1000m3/h，4-20mA信号输出，就地显示，电源：220V，防爆	",
            单位: "台",
            数量: "1",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "电磁流量计",
            安装位置: "",
            规格及型号:
              "一体式，DN80，0~1500m3/h，4-20mA信号输出，就地显示，电源：220V，防爆	",
            单位: "台",
            数量: "1",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call8002(path, name) {
      console.info("初始化8002工程量缓存");
      try {
        const data1 = [];
        const data2 = [];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call9001(path, name) {
      console.info("初始化9001工程量缓存");
      try {
        const data1 = [
          {
            序号: "1",
            单体位号: "",
            名称: "排泥池",
            尺寸: "10m×12.5m×4.4m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
          {
            序号: "2",
            单体位号: "",
            名称: "排泥池",
            尺寸: "7.90m×7.91m×4.4m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
          {
            序号: "3",
            单体位号: "",
            名称: "污泥浓缩池",
            尺寸: "φ11m×4.81m",
            标高: "",
            单位: "座",
            数量: "2",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
          {
            序号: "4",
            单体位号: "",
            名称: "污泥平衡池",
            尺寸: "5.00m×4.00m×2.9m",
            标高: "",
            单位: "座",
            数量: "1",
            结构形式: "",
            备注: "",
            暖通要求: "",
          },
        ];
        const data2 = [
          {
            序号: "1",
            设备位号: "",
            设备工艺名称: "排水池搅拌机",
            设备类型: "P=5.00kW",
            规格及型号: "",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "2",
            设备位号: "",
            设备工艺名称: "排水池提升泵",
            设备类型: "流量Q=10.42m3/h，扬程H=10m",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
          {
            序号: "3",
            设备位号: "",
            设备工艺名称: "排泥池搅拌机",
            设备类型: "P=2.50kW",
            规格及型号: "",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "4",
            设备位号: "",
            设备工艺名称: "排泥池提升泵",
            设备类型: "流量Q=5.21m3/h，扬程H=11m",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
          {
            序号: "5",
            设备位号: "",
            设备工艺名称: "污泥浓缩机",
            设备类型: "φ=11m",
            规格及型号: "",
            单位: "台",
            数量: "2",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "6",
            设备位号: "",
            设备工艺名称: "污泥平衡池搅拌机",
            设备类型: "P=2.50kW",
            规格及型号: "",
            单位: "台",
            数量: "1",
            运行时间: "",
            主要材质: "",
            备注: "",
          },
          {
            序号: "7",
            设备位号: "",
            设备工艺名称: "离心脱水机进泥泵",
            设备类型: "流量Q=3.13m3/h，扬程H=65m",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
          {
            序号: "8",
            设备位号: "",
            设备工艺名称: "离心脱水机",
            设备类型: "生产能力>0.2m3/h",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
          {
            序号: "9",
            设备位号: "",
            设备工艺名称: "板框进泥泵",
            设备类型: "流量Q=50.00m3/h，扬程H=165m",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
          {
            序号: "10",
            设备位号: "",
            设备工艺名称: "板框脱水机",
            设备类型: "过滤面积>127m2，过滤压力=1.6MPa",
            规格及型号: "",
            单位: "台",
            数量: "3",
            运行时间: "",
            主要材质: "",
            备注: "2用1备",
          },
        ];
        const data3 = [];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
    },
    call9002(path, name) {
      console.info("初始化9002工程量缓存");
      try {
        const data1 = [];
        const data2 = [];
        const data3 = [
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "压力表",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "2",
            a: "",
            b: "",
            备注: "",
          },
          {
            序号: "1",
            仪表位号: "",
            仪表名称: "流量计",
            安装位置: "",
            规格及型号: "",
            单位: "个",
            数量: "2",
            a: "",
            b: "",
            备注: "",
          },
        ];
        // 处理表头信息1
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData1
        const allData1 = [
          ...headerData1,
          ...data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息2
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData2
        const allData2 = [
          ...headerData2,
          ...data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息3
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData3
        const allData3 = [
          ...headerData3,
          ...data3.map((item) => Object.values(item)),
        ];
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
          null,
          null,
          ...allData3,
        ];
        initExcelStorage(path, data, name);
      } catch (error) {
        console.error("Error Init Excel Data:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
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
    // 初始化计算书缓存数据
    this.exportAllComputeBook();
    this.exportAllQuantities();
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
