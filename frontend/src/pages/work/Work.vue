<template>
  <div>
    <a-row style="margin: 0 -6px">
      <a-col style="padding: 0 6px" :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
          :body-style="{ padding: 4 }">
          <div class="baseQueryParam">
            <a-form>
              <a-form-item :label="$t('param1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                :wrapperCol="{ span: 18 }">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param2')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param3')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                <a-input rows="4" :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param4')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                <a-input rows="4" :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param5')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param6')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param7')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param8')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param9')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param10')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param11')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item :label="$t('param12')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }" :required="false">
                <a-input :placeholder="$t('titleInput')" />
              </a-form-item>
              <a-form-item style="margin-top: 50px; margin-bottom: 99px" :wrapperCol="{ span: 18, offset: 6 }">
                <a-button type="primary">{{ $t('submit') }}</a-button>
                <a-button style="margin-left: 8px">{{ $t('reset') }}</a-button>
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
                          <a-checkbox-group v-model="processUnitData">
                            <a-checkbox :value="item.key" name="processUnit">
                              <a-tag :color="item.color" style="font-size: 13px;" @click="calc(item.key)">{{ item.title }}</a-tag>
                            </a-checkbox>
                          </a-checkbox-group>
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
                  <a-button type="danger" danger style="margin-top: 10px;" block @click="operation">{{ $t('operation')
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

export default {
  name: 'WorkPlace',
  components: {},
  i18n: require('./i18n'),
  data() {
    return {
      loading: false,
      processUnit: [],
      processUnitData: [],
      modelVisible: false,
    }
  },
  methods: {
    comparison() {
      this.$message.warn(this.$t('comparisonNotOpen'))
    },
    export_case() {
      this.$message.warn(this.$t('exportCaseNotOpen'))
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
</style>
