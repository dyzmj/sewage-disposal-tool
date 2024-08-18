<template>
  <div  id="testApp">
    <a-row style="margin: 0 -6px">
      <a-col style="padding: 0 6px" :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
          :body-style="{ padding: 4 }">
          <div class="baseQueryParam">
            <a-form class="diy-advanced-search-form" :form="form" @submit="handleSearch">
              <a-form-item :label="$t('param1')" :labelCol="{ span: 7 }"
                :wrapperCol="{ span: 17 }">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                <a-select v-decorator="[`param1`]" style="width: 70%" :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &lt;= 80
                  </a-select-option>
                  <a-select-option value="1">
                    &gt; 80
                  </a-select-option>
                </a-select>
                <a-input :style="{width: '30%'}" :value="$t('param1_u')" :disabled="true"/>
              </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param2')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-select v-decorator="[`param2`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &lt;= 0.3
                  </a-select-option>
                  <a-select-option value="1">
                    &gt; 0.3
                  </a-select-option>
                </a-select>
                <a-input :style="{width: '30%'}" :value="$t('param2_u')" :disabled="true"/>
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param3')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-select v-decorator="[`param3`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &lt;= 0.1
                  </a-select-option>
                  <a-select-option value="1">
                    &gt; 0.1
                  </a-select-option>
                </a-select>
                <a-input :style="{width: '30%'}" :value="$t('param3_u')" :disabled="true"/>
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param4')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }">
                <a-select v-decorator="[`param4`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &lt;= 15
                  </a-select-option>
                  <a-select-option value="1">
                    &gt; 15
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item :label="$t('param5')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-select v-decorator="[`param5`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    无
                  </a-select-option>
                  <a-select-option value="1">
                    有
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item :label="$t('param6')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-select v-decorator="[`param6`]" style="width: 70%"  :placeholder="$t('selectOne')">
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
                  <a-select v-decorator="[`param7`]" style="width: 70%"  :placeholder="$t('selectOne')">
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
                <a-input :style="{width: '30%'}" :value="$t('param7_u')" :disabled="true"/>
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param8')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-select v-decorator="[`param8`]" style="width: 70%"  :placeholder="$t('selectOne')">
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
                  <a-select v-decorator="[`param9`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &lt;= 0.5
                  </a-select-option>
                  <a-select-option value="1">
                    0.5~1
                  </a-select-option>
                  <a-select-option value="2">
                    常年 > 1
                  </a-select-option>
                </a-select>
                <a-input :style="{width: '30%'}" :value="$t('param9_u')" :disabled="true"/>
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param10')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-select v-decorator="[`param10`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &gt; 2.5 万
                  </a-select-option>
                  <a-select-option value="1">
                    &gt;= 5 万
                  </a-select-option>
                  <a-select-option value="2">
                    &lt; 5 万
                  </a-select-option>
                </a-select>
                <a-input :style="{width: '30%'}" :value="$t('param10_u')" :disabled="true"/>
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param11')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-select v-decorator="[`param11`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &lt; 10000
                  </a-select-option>
                  <a-select-option value="1">
                    &lt; 5000
                  </a-select-option>
                  <a-select-option value="2">
                    &lt; 3000
                  </a-select-option>
                  <a-select-option value="3">
                    &lt; 500
                  </a-select-option>
                  <a-select-option value="4">
                    &lt; 100
                  </a-select-option>
                  <a-select-option value="5">
                    &lt; 50
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item :label="$t('param12')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-select v-decorator="[`param12`]" style="width: 70%"  :placeholder="$t('selectOne')">
                  <a-select-option value="0">
                    &gt; 0.5
                  </a-select-option>
                </a-select>
                <a-input :style="{width: '30%'}" :value="$t('param12_u')" :disabled="true"/>
                </a-input-group>
              </a-form-item>
              <a-form-item :label="$t('param13')" :labelCol="{ span: 7 }" :wrapperCol="{ span: 17 }" :required="false">
                <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
                  <a-select v-decorator="[`param13`]" style="width: 70%"  :placeholder="$t('selectOne')">
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
        <a-card :loading="loading" :title="$t('processUnit')" style="margin-bottom: 0px" :bordered="false">
          <a-list :grid="{ gutter: 16, column: 4 }" style="margin: 0 -16px" :split="false">
            <a-list-item :key="i" v-for="(item, i) in processUnit" style="padding: 0 4px">
              <a-card size='default' :title="item.title" :loading="loading" :hoverable="true">
                <a slot="extra" style="color: rgb(120, 120, 120); font-size: 12px; font-style: italic;" @click="showModal">{{ $t('detail') }}</a>
                <div class="content">
                  <a-list size="small" :split="false">
                    <a-list-item :key="j" v-for="(item, j) in item.children">
                      <div class="list-content">
                        <div class="list-content-item">
                          <!-- <a-checkbox-group v-model="processUnitData" > -->
                            <a-checkbox :value="item.key" name="processUnit" :checked="item.checked">
                              <a-tag :color="item.color" style="font-size: 13px;" @click="calc(item.key)">{{ item.title }}</a-tag>
                            </a-checkbox>
                          <!-- </a-checkbox-group> -->
                        </div>
                      </div>
                    </a-list-item>
                  </a-list>
                </div>
              </a-card>
            </a-list-item>
            <a-list-item>
              <a-card size='default' :title="$t('function')" :loading="loading" :hoverable="true">
                <div class="content" style="padding: 0 6px" :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
                  <a-button type="primary" style="margin-top: 19px;" block @click="comparison">{{ $t('comparison')
                  }}</a-button>
                  <a-button type="danger" disabled danger style="margin-top: 10px;" block @click="operation">{{ $t('operation')
                  }}</a-button>
                  <a-button type="dashed" style="margin-top: 10px;" block @click="export_case">{{ $t('export')
                  }}</a-button>
                </div>
              </a-card>
            </a-list-item>

          </a-list>

        </a-card>
      </a-col>
    </a-row>
    <a-modal :visible="modelVisible" :title="$t('detail')" @ok="handleOk" @cancel="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { request, METHOD } from '@/utils/request'
// import { saveAs } from 'file-saver'
import { ipcApiRoute } from '@/api/main';
import { ipc } from '@/utils/ipcRenderer';

export default {
  name: 'WorkPlace',
  components: {},
  i18n: require('./i18n'),
  data() {
    return {
      form: this.$form.createForm(this, { name: 'advanced_search' }),
      loading: false,
      processUnit: [],
      processUnitData: [],
      modelVisible: false,
    }
  },
  methods: {
    getProcessUnit() {
      request('/work/processUnit', METHOD.GET).then(res => {
      this.processUnit = res.data
      this.loading = false
    })
    },
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        console.log('error', error);
        console.log('Received values of form: ', values);
        console.log(values.param1)
        console.log(this.processUnit)

        // 含砂量
        if(values.param1 === '1'){
          this.processUnit[0].children[1].checked = true
          this.processUnit[0].children[1].color = '#2db7f5' 
          // 2db7f5
        }else if(values.param1 === '0'){
          this.processUnit[0].children[1].checked = false
          this.processUnit[0].children[1].color = '#6C767D' 
        }
        // 铁
        if(values.param2 === '1'){
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
        if(values.param3 === '1'){
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
        if(values.param4 === '1'){
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
        if(values.param9 === '1'){
          this.processUnit[7].children[3].checked = true
          this.processUnit[7].children[3].color = '#2db7f5'
        } else if(values.param9 === '2'){
          this.processUnit[0].children[0].checked = true
          this.processUnit[0].children[0].color = '#2db7f5'
        }

        // 水量
        if(values.param10 === '0'){
          this.processUnit[1].children[1].checked = true
          this.processUnit[1].children[1].color = '#2db7f5'
        } else if(values.param10 === '1'){
          this.processUnit[1].children[2].checked = true
          this.processUnit[1].children[2].color = '#2db7f5'
        }

        // 浊度
        if(values.param11 === '0'){
          this.processUnit[2].children[0].checked = true
          this.processUnit[2].children[0].color = '#2db7f5'
        } else if(values.param11 === '1'){
          this.processUnit[2].children[1].checked = true
          this.processUnit[2].children[1].color = '#2db7f5'
        } else if(values.param11 === '2'){
          this.processUnit[2].children[3].checked = true
          this.processUnit[2].children[3].color = '#2db7f5'
        } else if(values.param11 === '3'){
          this.processUnit[2].children[4].checked = true
          this.processUnit[2].children[4].color = '#2db7f5'
        } else if(values.param11 === '4'){
          this.processUnit[2].children[2].checked = true
          this.processUnit[2].children[2].color = '#2db7f5'
        } else if(values.param11 === '5'){
          this.processUnit[2].children[5].checked = true
          this.processUnit[2].children[5].color = '#2db7f5'
        } else if(values.param11 === '6'){
          this.processUnit[3].children[0].checked = true
          this.processUnit[3].children[0].color = '#2db7f5'
        }

        // 出水浊度
        if(values.param12 === '1'){
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
      });
      
      this.$message.info(this.$t('initSucc'))
      // console.log('Received values of form: ', this.form);


    },
    handleReset() {
      this.$message.info(this.$t('resetSucc'))
      this.form.resetFields();
      this.getProcessUnit();
    },
    comparison() {
      this.$message.warn(this.$t('comparisonNotOpen'))
    },
    export_case() {
      this.$message.warn(this.$t('exportCaseNotOpen'));

      const htmlToRtf = require('html-to-rtf-node');
      const fs = window.require('fs');

      ipc.invoke(ipcApiRoute.selectFolder, '').then(r => {
        // this.dir_path = r;
        this.$message.info(r);

        var path  = r + '/test.rtf'

        const html = `
      <h1>Title <span style="color:rgb(255,0,0);">with</span> tag h1<h1>
      <div>
        <p style="color:#333; margin:5px;" class="test" align="center">
            text of paragraph <b>text with bold <i>text with italic and bold</i></b><i>text with italic</i>
        </p>
        <p style="color:rgb(255,0,0);" align="right">red paragraph => right with tag</p>
        <p style="color:rgb(0,0,255); text-align:center;">blue paragraph => center with style</p>
        <table>
          <tbody>
            <tr>
                      <td><mark>column 1</mark></td>
                      <td>column 2</td>
              <td><mark>column 3</mark></td>
              <td>column 4</td>
            </tr>
            <tr>
              <td>content 1</td>
              <td>content 2<br></td>
              <td>content 3<br></td>
              <td>content 4<br></td>
            </tr>
          </tbody>
        </table>
      </div>
      `

      console.info(html)

      var element  = document.querySelector("#testApp");
      var html1 = element.outerHTML;
      console.info(html1)

       var res1 = htmlToRtf.convertHtmlToRtf(html);
       console.info("格式化的结果"+res1)

       //  htmlToRtf.saveRtfInFile('./test.rtf', res);
       
      // 打开文件选择对话框
        fs.writeFile(path, res1, 'utf8', (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });

      }) 
    },
    operation() {
      if (this.processUnitData.length > 0) {
        console.info(this.processUnitData)
        const path = '/sub/' + this.processUnitData[0];
        this.$router.push(path);
        this.$message.info(this.$t('openOperatePage'))
      } else {
        this.$message.error(this.$t('pleaseSelectProcessUnit'))
      }
    },
    calc(calcUnit) {
      const path = '/sub/' + calcUnit;
      this.$router.push(path);
      this.$message.info(this.$t('openOperatePage'))
    },
    showModal() {
      this.modelVisible = true
    },
    handleOk() {
      this.modelVisible = false
    },
  },
  computed: {
    ...mapState('account', { currUser: 'user' }),
    ...mapState('setting', ['lang'])
  },
  created() {
    request('/work/processUnit', METHOD.GET).then(res => {
      this.processUnit = res.data
      this.loading = false
    })
  },
}
</script>

<style lang="less">
@import "index";
.ant-form-item {
  margin-bottom: 15px;
}

</style>
