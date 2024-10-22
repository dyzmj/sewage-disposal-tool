<template>
  <div id="testApp" style="background-color: #EDEFF2;">
    <a-row style="margin: 0 -6px">
      <a-col style="padding: 14px 6px" :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :title="$t('baseQueryParam')" :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
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
              <a-form-item :label="$t('param14')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-input :style="{ width: '70%' }" v-decorator="[`param14`]" :placeholder="$t('inputOne')"
                    :disabled="false" />
                  <a-input :style="{ width: '30%' }" :value="$t('param14_u')" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item style="margin-top: 0px; margin-bottom: 7px" :wrapperCol="{ span: 18, offset: 6 }">
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
      <a-col style="padding: 14px 6px" :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :title="$t('processUnit')" :headStyle="{ 'font-weight': 'bolder' }"
          :bodyStyle="{ 'padding-bottom': '12px' }" style="margin-bottom: 0px" :bordered="false">
          <a slot="extra" href="#">
            <div class="" style="">
              <a-button type="primary" style="margin-right: 20px;" @click="comparison" icon="file-done">
                {{ $t("exportQuantities") }}</a-button>
              <a-button type="danger" @click="operation" icon="file-search">
                {{ $t("exportCalculation") }}</a-button>
            </div>
          </a>
          <div class="baseQueryParam">
            <a-list :grid="{ gutter: 4, column: 4 }" :xl="20" :lg="24" :md="24" :sm="24" :xs="24"
              style="margin: 0 -16px" :loading="loading">
              <a-list-item :key="i" v-for="(item, i) in processUnit" style="padding: 0 4px">
                <a-card class="list-card" size="small" :headStyle="{ 'font-weight': 'bolder' }" :title="item.title"
                  :loading="loading" :hoverable="true" :bordered="true">
                  <div class="content">
                    <a-list size="small">
                      <a-list-item :key="j" v-for="(item, j) in item.children">
                        <a-space direction="vertical" size="large">
                          <div class="list-content">
                            <div class="list-content-item">
                              <a-tooltip placement="top" :title="item.message" :get-popup-container="getPopupContainer">
                                <a-checkbox :value="item.key" name="processUnit" v-model="item.checked"
                                  :disabled="item.disabled" @change="onChange(item.key, item.checked)">
                                  <a-tag :color="item.checked ? '#2DB7F5' : '#6C767D'" style="font-size: 13px;"
                                    @click="calc(item.key)">{{ item.title }}</a-tag>
                                </a-checkbox>
                              </a-tooltip>
                            </div>
                          </div>
                        </a-space>
                      </a-list-item>
                    </a-list>
                  </div>
                </a-card>
              </a-list-item>
              <!-- <a-list-item style="padding: 0 4px">
                <a-card class="list-card" size="small" :headStyle="{ 'font-weight': 'bolder' }" :title="$t('function')"
                  :loading="loading" :hoverable="true">
                  <div class="content" style="padding: 0 6px" :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
                    <a-button type="primary" style="margin-top: 19px;" block @click="comparison">{{
                      $t("exportQuantities") }}</a-button>
                    <a-button type="danger" danger style="margin-top: 10px;" block @click="operation">{{
                      $t("exportCalculation") }}</a-button>
                  </div>
                </a-card>
              </a-list-item> -->
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
import { getBufferFromLocalStorage, exportWord2, storeValueInLocalStorage } from "@/utils/exportUtil";

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
        } else {
          this.processUnit[0].children[1].checked = false;
        }

        // 铁 > 0.3 || 锰 > 0.1 || 色度 > 15 || 嗅味 == 1 || 藻类 == 1 || 高锰酸盐指数 == 3
        if (values.param2 > 0.3 || values.param3 > 0.1 || values.param4 > 15 || values.param5 === "1" || values.param6 === "1" || values.param7 === "3") {
          // 高锰酸钾、ClO2、NaClO、O3
          this.processUnit[0].children[2].checked = true;
          this.processUnit[0].children[3].checked = true;
          this.processUnit[0].children[4].checked = true;
          this.processUnit[0].children[5].checked = true;
          //   this.processUnit[0].children[5].color = '#00a24e'
        } else {
          this.processUnit[0].children[2].checked = false;
          this.processUnit[0].children[3].checked = false;
          this.processUnit[0].children[4].checked = false;
          this.processUnit[0].children[5].checked = false;
        }

        // 色度 > 15 || 嗅味 == 1 || 高锰酸盐指数 == 3 || 0.5 < 氨氮 <=1
        if (values.param4 > 15 || values.param5 === "1" || values.param7 === "3" || (values.param9 > 0.5 && values.param9 <= 1)) {
          // 活性炭粉末
          this.processUnit[0].children[6].checked = true;
        } else {
          this.processUnit[0].children[6].checked = false;
        }

        // 高锰酸盐指数 == 1 || 氨氮 > 1
        if (values.param7 === "1" || values.param9 > 1) {
          // 生物接触氧化
          this.processUnit[0].children[0].checked = true;
        } else {
          this.processUnit[0].children[0].checked = false;
        }

        // 高锰酸盐指数 == 2
        if (values.param7 === "2") {
          // 臭氧活性炭
          this.processUnit[4].children[0].checked = true;
        } else {
          this.processUnit[4].children[0].checked = false;
        }

        // 溴化物 == 1
        if (values.param8 === "1") {
          // 不得选用臭氧
          this.processUnit[0].children[5].checked = false;
          this.processUnit[0].children[5].disabled = true;
          this.$message.error(this.$t("不得选用臭氧"));
        } else {
          this.processUnit[0].children[5].disabled = false;
        }

        // 氨氮 <= 0.5
        if (values.param9 > 0.5 && values.param9 <= 1) {
          // 折点加氯
          this.processUnit[5].children[3].checked = true;
        } else {
          this.processUnit[5].children[3].checked = false;
        }

        // 浊度 < 50
        if (values.param11 < 50) {
          this.$message.success("增设超越管，超越絮凝、沉淀(气浮)，直接进滤池，并在滤池进水口处投加助凝剂活化硅酸");
        }

        // 浊度 < 100
        if (values.param11 < 100) {
          // 气浮池
          this.processUnit[2].children[5].checked = true;
        } else {
          this.processUnit[2].children[5].checked = false;
        }

        // 浊度 < 500 
        if (values.param11 < 500) {
          // 水力循环澄清池
          this.processUnit[2].children[4].checked = true;
        } else {
          this.processUnit[2].children[4].checked = false;
        }

        // 浊度 < 3000
        if (values.param11 < 3000) {
          // 机械搅拌澄清池
          this.processUnit[2].children[3].checked = true;
        } else {
          this.processUnit[2].children[3].checked = false;
        }

        // 浊度 < 5000
        if (values.param11 < 5000) {
          // 平流沉淀池
          this.processUnit[2].children[0].checked = true;
        } else {
          this.processUnit[2].children[0].checked = false;
        }

        // 浊度 < 10000
        if (values.param11 < 10000) {
          // 斜管沉淀池
          this.processUnit[2].children[1].checked = true;
          // 高密度沉淀池
          this.processUnit[2].children[2].checked = true;
        } else {
          this.processUnit[2].children[1].checked = false;
          this.processUnit[2].children[2].checked = false;
        }

        // 出水浊度 < 0.5
        if (values.param12 < 0.5) {
          // 超滤
          this.processUnit[4].children[1].checked = true;
        } else {
          this.processUnit[4].children[1].checked = false;
        }

        // 13、消毒 == 1
        if (values.param13 === "1") {
          // 接触消毒
          this.processUnit[5].children[0].checked = true;
        } else {
          this.processUnit[5].children[0].checked = false;
        }

        // 初始化时常选中：混凝工艺全部、PAC、PAM
        this.processUnit[1].children[0].checked = true;
        this.processUnit[1].children[1].checked = true;
        this.processUnit[1].children[2].checked = true;
        this.processUnit[1].children[3].checked = true;
        this.processUnit[1].children[4].checked = true;

        if(this.processUnit[0].children[2].checked || this.processUnit[5].children[3].checked) {
          // NaClO开启时，活性炭粉末也开启
          this.processUnit[0].children[6].checked = true;
        }

        // 将设计水量存入缓存
        const waterData = values.param14
        storeValueInLocalStorage("waterData", waterData)
      });

      this.$message.success(this.$t("initSucc"));
      // console.log('Received values of form: ', this.form);

    },
    handleReset() {
      this.form.resetFields();
      this.getProcessUnit();
      // 重置时将设计水量缓存也清空
      storeValueInLocalStorage("waterData", '');
      this.$message.success(this.$t("resetSucc"));
    },
    onChange(key, checked) {
      if (key === "1003" || key === "6004") {
        if(checked){
          // 活性炭粉末
          this.processUnit[0].children[6].checked = true;
        }else {
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
    comparison() {
      this.$message.warn(this.$t("comparisonNotOpen"));
    },
    export_case() {
      this.$message.warn(this.$t("importModelNotOpen"));
    },
    operation() {
      console.log("获取选中的对象")
      const buffers = []
      this.processUnit.forEach((element) => {
        element.children.forEach((child) => {
          if (child.checked) {
            try {
              console.log(`正在获取 ${child.key}`);
              const buffer = getBufferFromLocalStorage(child.key + ".docx");
              if (buffer instanceof Buffer) {
                buffers.push(buffer);
              } else {
                console.error(`从 localStorage 获取的 ${child.key} 不是 Buffer 类型`);
              }
            } catch (error) {
              console.error(`从 localStorage 获取 ${child.key} 时发生错误:`, error);
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
.ant-form-item-label>label {
  font-size: 14px;
  /* 调整为所需的字体大小 */
}

.ant-list-sm .ant-list-item {
  padding-top: 6px;
  padding-bottom: 8px;
}
</style>
