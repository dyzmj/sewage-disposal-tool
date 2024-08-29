<template>
  <div id="testApp" style="background-color: #EDEFF2;">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px"
        :xl="6"
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
                    :style="{ width: '70%' }"
                    v-decorator="[`param1`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                  />
                  <a-input
                    :style="{ width: '30%' }"
                    :value="$t('param1_u')"
                    :disabled="true"
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
                    :style="{ width: '70%' }"
                    v-decorator="[`param2`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                  />
                  <a-input
                    :style="{ width: '30%' }"
                    :value="$t('param2_u')"
                    :disabled="true"
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
                    :style="{ width: '70%' }"
                    v-decorator="[`param3`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                  />
                  <a-input
                    :style="{ width: '30%' }"
                    :value="$t('param3_u')"
                    :disabled="true"
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
                    style="width: 70%"
                    :placeholder="$t('selectOne')"
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
                  <a-input
                    :style="{ width: '30%' }"
                    :value="$t('param7_u')"
                    :disabled="true"
                  />
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
                    :style="{ width: '70%' }"
                    v-decorator="[`param9`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                  />
                  <a-input
                    :style="{ width: '30%' }"
                    :value="$t('param9_u')"
                    :disabled="true"
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
                    :style="{ width: '70%' }"
                    v-decorator="[`param12`]"
                    :placeholder="$t('inputOne')"
                    :disabled="false"
                  />
                  <a-input
                    :style="{ width: '30%' }"
                    :value="$t('param12_u')"
                    :disabled="true"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('param13')"
                :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }"
                :required="false"
              >
                <a-input-group
                  :compact="true"
                  style="display: inline-block; vertical-align: middle"
                >
                  <a-select
                    v-decorator="[`param13`]"
                    style="width: 100%"
                    :placeholder="$t('selectOne')"
                  >
                    <a-select-option value="0">
                      否
                    </a-select-option>
                    <a-select-option value="1">
                      是
                    </a-select-option>
                  </a-select>
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
        style="padding: 14px 6px"
        :xl="18"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :loading="loading"
          :title="$t('processUnit')"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bodyStyle="{ 'padding-bottom': '12px' }"
          style="margin-bottom: 0px"
          :bordered="false"
        >
          <div class="baseQueryParam">
            <a-list
              :grid="{ gutter: 4, column: 6 }"
              :xl="20"
              :lg="24"
              :md="24"
              :sm="24"
              :xs="24"
              style="margin: 0 -16px"
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
                              <a-checkbox
                                :value="item.key"
                                name="processUnit"
                                v-model="item.checked"
                                :disabled="item.disabled"
                                @change="onChange(item.key)"
                              >
                                <a-tag
                                  :color="item.checked ? '#2DB7F5' : '#6C767D'"
                                  style="font-size: 13px;"
                                  @click="calc(item.key)"
                                  >{{ item.title }}</a-tag
                                >
                              </a-checkbox>
                            </div>
                          </div>
                        </a-space>
                      </a-list-item>
                    </a-list>
                  </div>
                </a-card>
              </a-list-item>
              <a-list-item style="padding: 0 4px">
                <a-card
                  class="list-card"
                  size="small"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :title="$t('function')"
                  :loading="loading"
                  :hoverable="true"
                >
                  <div
                    class="content"
                    style="padding: 0 6px"
                    :xl="18"
                    :lg="24"
                    :md="24"
                    :sm="24"
                    :xs="24"
                  >
                    <a-button
                      type="primary"
                      style="margin-top: 19px;"
                      block
                      @click="comparison"
                      >{{ $t("exportQuantities") }}</a-button
                    >
                    <a-button
                      type="danger"
                      danger
                      style="margin-top: 10px;"
                      block
                      @click="operation"
                      >{{ $t("exportCalculation") }}</a-button
                    >
                    <!-- <a-button type="dashed" style="margin-top: 10px;" block @click="export_case">{{ $t('importModel')
                      }}</a-button> -->
                  </div>
                </a-card>
              </a-list-item>
            </a-list>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { request, METHOD } from "@/utils/request";
// import { saveAs } from 'file-saver'
// import { ipcApiRoute } from '@/api/main';
// import { ipc } from '@/utils/ipcRenderer';

export default {
  name: "WorkPlace",
  components: {},
  i18n: require("./i18n"),
  data() {
    return {
      form: this.$form.createForm(this, { name: "advanced_search" }),
      loading: true,
      processUnit: [],
      processUnitData: [],
      modelVisible: false,
      param1: null,
    };
  },
  methods: {
    getProcessUnit() {
      request("/work/processUnit", METHOD.GET).then((res) => {
        this.processUnit = res.data;
        this.loading = false;
      });
    },
    handleSearch(e) {
      e.preventDefault();

      this.form.validateFields((error, values) => {
        // 1、含砂量
        if (values.param1 >= 80) {
          // 沉淀池
          this.processUnit[0].children[1].checked = true;
        } else if (values.param1 < 80) {
          this.processUnit[0].children[1].checked = false;
        }
        // 2、铁
        if (values.param2 > 0.3) {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
        }
        // 3、锰
        if (values.param3 > 0.1) {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
        }
        // 4、色度
        if (values.param4 > 15) {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
          // 活性炭粉末
          this.processUnit[6].children[6].checked = true;
        }

        // 5、嗅味
        if (values.param5 === "1") {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
          // 活性炭粉末
          this.processUnit[6].children[6].checked = true;
        }

        // 6、藻类
        if (values.param6 === "1") {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
        }

        // 7、高锰酸盐指数
        if (values.param7 === "0") {
          // nothing to do
        } else if (values.param7 === "1") {
          // 生物接触氧化
          this.processUnit[0].children[0].checked = true;
        } else if (values.param7 === "2") {
          // 臭氧活性炭
          this.processUnit[4].children[0].checked = true;
        } else if (values.param7 === "3") {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
          // 活性炭粉末
          this.processUnit[6].children[6].checked = true;
        }

        // 8、溴化物
        if (values.param8 === "1") {
          // 不得选用臭氧
          this.processUnit[0].children[5].checked = false;
          this.processUnit[0].children[5].disabled = "true";
          this.$message.error(this.$t("不得选用臭氧"));
        }

        // 9、氨氮
        if (values.param9 <= 0.5) {
          // nothing to do
        } else if (values.param9 > 0.5 && values.param9 <= 1) {
          // 折点加氯
          this.processUnit[6].children[1].checked = true;
        } else if (values.param9 > 1) {
          // 生物接触氧化
          this.processUnit[0].children[0].checked = true;
        }

        // 11、浊度
        if (values.param11 < 50) {
          this.$message.success(
            "增设超越管，超越絮凝、沉淀(气浮)，直接进滤池，并在滤池进水口处投加助凝剂活化硅酸"
          );
        } else if (values.param11 < 100) {
          // 气浮池
          this.processUnit[2].children[5].checked = true;
        } else if (values.param11 < 500) {
          // 水力循环澄清池
          this.processUnit[2].children[4].checked = true;
        } else if (values.param11 < 3000) {
          // 机械搅拌澄清池
          this.processUnit[2].children[3].checked = true;
        } else if (values.param11 < 5000) {
          // 平流沉淀池
          this.processUnit[2].children[0].checked = true;
        } else if (values.param11 < 10000) {
          // 斜管沉淀池
          this.processUnit[2].children[1].checked = true;
          // 高密度沉淀池
          this.processUnit[2].children[2].checked = true;
        }

        // 12、出水浊度
        if (values.param12 < 0.5) {
          // 超滤
          this.processUnit[4].children[1].checked = true;
        }

        // 13、消毒
        if (values.param13 === "0") {
          // nothing to do
        } else if (values.param13 === "1") {
          // 接触消毒
          this.processUnit[5].children[0].checked = true;
        }

        // 初始化时常选中：混凝工艺全部、PAC、PAM (后端数据已处理)
      });

      this.$message.success(this.$t("initSucc"));
      // console.log('Received values of form: ', this.form);
    },
    handleReset() {
      this.form.resetFields();
      this.getProcessUnit();
      this.$message.success(this.$t("resetSucc"));
    },
    onChange(key) {
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
    comparison() {
      this.$message.warn(this.$t("comparisonNotOpen"));
    },
    export_case() {
      this.$message.warn(this.$t("importModelNotOpen"));

      // const htmlToRtf = require('html-to-rtf-node');
      // const fs = window.require('fs');

      // ipc.invoke(ipcApiRoute.selectFolder, '').then(r => {
      //   // this.dir_path = r;
      //   this.$message.info(r);

      //   var path = r + '/test.rtf'

      //   const html = `
      // <h1>Title <span style="color:rgb(255,0,0);">with</span> tag h1<h1>
      // <div>
      //   <p style="color:#333; margin:5px;" class="test" align="center">
      //       text of paragraph <b>text with bold <i>text with italic and bold</i></b><i>text with italic</i>
      //   </p>
      //   <p style="color:rgb(255,0,0);" align="right">red paragraph => right with tag</p>
      //   <p style="color:rgb(0,0,255); text-align:center;">blue paragraph => center with style</p>
      //   <table>
      //     <tbody>
      //       <tr>
      //                 <td><mark>column 1</mark></td>
      //                 <td>column 2</td>
      //         <td><mark>column 3</mark></td>
      //         <td>column 4</td>
      //       </tr>
      //       <tr>
      //         <td>content 1</td>
      //         <td>content 2<br></td>
      //         <td>content 3<br></td>
      //         <td>content 4<br></td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>
      // `

      //   console.info(html)

      //   var element = document.querySelector("#testApp");
      //   var html1 = element.outerHTML;
      //   console.info(html1)

      //   var res1 = htmlToRtf.convertHtmlToRtf(html);
      //   console.info("格式化的结果" + res1)

      //   //  htmlToRtf.saveRtfInFile('./test.rtf', res);

      //   // 打开文件选择对话框
      //   fs.writeFile(path, res1, 'utf8', (err) => {
      //     if (err) throw err;
      //     console.log('The file has been saved!');
      //   });

      // })
    },
    operation() {
      this.$message.warn(this.$t("exportCaseNotOpen"));
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
  },
};
</script>

<style lang="less">
@import "index";

.ant-form-item {
  margin-bottom: 15px;
}

.list-card {
  height: 350px;
  // width: 300px;
  // flex: 0 0 auto
}

/* 设置 label 的字体大小 */
.ant-form-item-label > label {
  font-size: 12px;
  /* 调整为所需的字体大小 */
}

.ant-list-sm .ant-list-item {
  padding-top: 6px;
  padding-bottom: 8px;
}
</style>
