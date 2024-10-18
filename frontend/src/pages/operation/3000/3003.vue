<template>
  <div class="calc_page" style="background-color: #EDEFF2;">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px; margin-right: 0px;"
        :xl="16"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          title="高密度沉淀池"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b7')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b8')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b6')"
                    :colon="false"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :placeholder="$t('b6_s')"
                      :disabled="true"
                      style="width: 20%"
                    />
                    <a-input
                      :placeholder="$t('b6_1')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_2')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_3')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_4')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b9')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b9_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b9"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b9_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b9_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b9_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b10')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b6')"
                  :colon="false"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input
                    :placeholder="$t('b6_s')"
                    :disabled="true"
                    style="width: 20%"
                  />
                  <a-input
                    :placeholder="$t('b6_1')"
                    :disabled="true"
                    style="width: 16%"
                  />
                  <a-input
                    :placeholder="$t('b6_2')"
                    :disabled="true"
                    style="width: 16%"
                  />
                  <a-input
                    :placeholder="$t('b6_3')"
                    :disabled="true"
                    style="width: 16%"
                  />
                  <a-input
                    :placeholder="$t('b6_4')"
                    :disabled="true"
                    style="width: 16%"
                  />
                  <a-input
                    :placeholder="$t('b6_e')"
                    :disabled="true"
                    style="width: 16%"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b11')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input
                    :disabled="true"
                    :placeholder="$t('b11_s')"
                    style="width: 20%"
                  />
                  <a-input :disabled="true" style="width: 16%" />
                  <a-input v-model="b11" :disabled="false" style="width: 16%" />
                  <a-input
                    :disabled="true"
                    :placeholder="$t('b11_u')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :placeholder="$t('b11_c')"
                    style="width: 16%"
                  />
                  <a-input
                    :placeholder="$t('b11_e')"
                    :disabled="true"
                    style="width: 16%"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b12')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input
                    :disabled="true"
                    :placeholder="$t('b12_s')"
                    style="width: 20%"
                  />
                  <a-input :disabled="true" style="width: 16%" />
                  <a-input :disabled="false" v-model="b12" style="width: 16%" />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b12_u')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b12_c')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b12_e')"
                    style="width: 16%"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b13')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input
                    :disabled="true"
                    :placeholder="$t('b13_s')"
                    style="width: 20%"
                  />
                  <a-input :disabled="true" style="width: 16%" />
                  <a-input :disabled="false" v-model="b13" style="width: 16%" />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b13_u')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b13_c')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b13_e')"
                    style="width: 16%"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b14')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input
                    :disabled="true"
                    :placeholder="$t('b14_s')"
                    style="width: 20%"
                  />
                  <a-input :disabled="true" style="width: 16%" />
                  <a-input :disabled="false" v-model="b14" style="width: 16%" />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b14_u')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b14_c')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b14_e')"
                    style="width: 16%"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b15')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input
                    :disabled="true"
                    :placeholder="$t('b15_s')"
                    style="width: 20%"
                  />
                  <a-input :disabled="true" style="width: 16%" />
                  <a-input :disabled="false" v-model="b15" style="width: 16%" />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b15_u')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b15_c')"
                    style="width: 16%"
                  />
                  <a-input
                    :disabled="true"
                    :default-value="$t('b15_e')"
                    style="width: 16%"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b16')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <a-card
              :title="$t('b17')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b6')"
                    :colon="false"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :placeholder="$t('b6_s')"
                      :disabled="true"
                      style="width: 20%"
                    />
                    <a-input
                      :placeholder="$t('b6_1')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_2')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_3')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_4')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b18')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b18_s')"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b18_0"
                      :disabled="false" style="width: 16%" />
                    <a-input
                      v-model="b18"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b18_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b18_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b18_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b19')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b19_s')"
                      style="width: 20%"
                    />
                    <a-input v-model="b19_0" :disabled="false" style="width: 16%" />
                    <a-input
                      v-model="b19"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b19_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b19_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b19_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b20')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b20_s')"
                      style="width: 20%"
                    />
                    <a-input v-model="b20_0" :disabled="false" style="width: 16%" />
                    <a-input
                      v-model="b20"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b20_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b20_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b20_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b21')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b21_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b21"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b21_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b21_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b21_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b22')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b22_s')"
                      style="width: 20%"
                    />
                    <a-input v-model="b22_0" :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b22"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b22_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b22_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b22_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b23')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b23_s')"
                      style="width: 20%"
                    />
                    <a-input v-model="b23_0" :disabled="true" style="width: 16%" />
                    <a-input
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b23_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b23_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b23_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b24')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b6')"
                    :colon="false"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :placeholder="$t('b6_s')"
                      :disabled="true"
                      style="width: 20%"
                    />
                    <a-input
                      :placeholder="$t('b6_1')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_2')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_3')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_4')"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b6_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b25')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b25_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b25"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b25_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b25_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b25_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b26')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b26_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b26"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b26_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b26_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b26_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b27')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b27_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b27"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b27_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b27_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b27_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b28')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b28_s')"
                      style="width: 20%"
                    />
                    <a-input v-model="b28_0" :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b28"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b28_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b28_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b28_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b29')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b29_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b29"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b29_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b29_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b29_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b30')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b30_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b30"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b30_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b30_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b30_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b31')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b31_s')"
                      style="width: 20%"
                    />
                    <a-input v-model="b31_0" :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b31"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b31_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b31_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b31_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
              <a-card
                :title="$t('b33')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b34')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b34_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b34"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b34_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b34_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b34_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b35')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b35_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b35"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b35_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b35_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b35_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b36')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b37')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b37_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b37_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b37_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b37_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b37_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b38')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b38_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b38"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b38_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b38_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b38_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b39')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b39_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b39"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b39_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b39_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b39_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b40')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b40_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b40_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b40"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b40_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b40_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b40_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b41')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b41_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b41_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b41_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b41_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b41_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b42')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b42_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b42_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b42"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b42_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b42_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b42_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b43')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b43_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b43_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b43_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b43_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b43_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b44')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b44_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b44_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b44_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b44_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b44_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b45')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b46')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b46_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b46"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b46_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b46_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b46_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b47')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b47_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b47"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b47_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b47_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b47_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b48')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b48_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b48"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b48_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b48_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b48_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b49')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b50')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b50_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b50"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b50_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b50_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b50_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b51')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b51_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b51_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b51_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b51_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b51_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b52')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b52_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b52"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b52_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b52_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b52_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b53')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="false"
                        v-model="b53_s"
                        :placeholder="$t('b53_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b53_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b53"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        v-model="b53_1"
                        :placeholder="$t('b53_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b53_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b53_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b54')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="false"
                        v-model="b54_s"
                        :placeholder="$t('b54_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b54_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b54"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        v-model="b54_1"
                        :disabled="true"
                        :placeholder="$t('b54_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b54_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b54_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b55')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                      v-model="b55_s"
                        :disabled="false"
                        :placeholder="$t('b55_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b55_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b55"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                      v-model="b55_1"
                        :disabled="true"
                        :placeholder="$t('b55_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b55_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b55_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b56')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                      v-model="b56_s"
                        :disabled="false"
                        :placeholder="$t('b56_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b56_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b56"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                      v-model="b56_1"
                        :disabled="true"
                        :placeholder="$t('b56_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b56_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b56_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b57')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b57_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        v-model="b57_1"
                        :disabled="true"
                        :placeholder="$t('b57_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b57_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b57_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b58')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b58_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b58"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b58_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b58_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b58_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b59')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b59_1')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b59_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b59_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b59_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b59_5')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b59_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b60')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        v-model="b60_s"
                        :placeholder="$t('b60_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b60_0" :disabled="false" style="width: 16%" />
                      <a-input
                        v-model="b60"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        v-model="b60_1"
                        :disabled="false"
                        :placeholder="$t('b60_u')"
                        style="width: 16%"
                      />
                      <a-input
                        v-model="b60_2"
                        :disabled="true"
                        :placeholder="$t('b60_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b60_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b61')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        v-model="b61_s"
                        :placeholder="$t('b61_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b61_0" :disabled="false" style="width: 16%" />
                      <a-input
                        v-model="b61"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        v-model="b61_1"
                        :disabled="false"
                        :placeholder="$t('b61_u')"
                        style="width: 16%"
                      />
                      <a-input
                        v-model="b61_2"
                        :disabled="true"
                        :placeholder="$t('b61_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b61_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b62')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b62_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b62_u')"
                        style="width: 16%"
                      />
                      <a-input
                      v-model="b62_2"
                        :disabled="true"
                        :placeholder="$t('b62_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b62_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b63')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b63_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b63_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b63"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b63_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b63_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b63_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b64')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
              </a-card>
              <a-card
                :title="$t('b65')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b66')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b66_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b66"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b66_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b66_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b66_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b67')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b68')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b68_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b68_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b68_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b68_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b68_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b69')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b69_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b69"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b69_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b69_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b69_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b70')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b70_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b70"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b70_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b70_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b70_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b71')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b71_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b71_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b71"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b71_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b71_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b71_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b72')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b72_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b72_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b72_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b72_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b72_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b73')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b73_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b73_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b73"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b73_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b73_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b73_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b74')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b74_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b74_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b74_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b74_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b74_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b75')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b75_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b75_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b75_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b75_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b75_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b76')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b77')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b77_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b77_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b77_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b77_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b77_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b78')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b78_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b78_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b78_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b78_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b78_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b79')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b80')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b80_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b80"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b80_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b80_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b80_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b81')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b81_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b81_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b81"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b81_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b81_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b81_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b82')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b82_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b82"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b82_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b82_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b82_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b83')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b84')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b84_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b84"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b84_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b84_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b84_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b85')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b85_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b85_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b85_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b85_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b85_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b86')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b87')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b87_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b87"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b87_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b87_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b87_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b88')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b88_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b88_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b88_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b88_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b88_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b89')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b89_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b89_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b89_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b89_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b89_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b90')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
              </a-card>
              <a-card
                :title="$t('b91')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b92')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b92_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b92_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b92"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b92_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b92_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b92_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b93')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b93_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b93"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b93_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b93_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b93_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b94')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b94_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b94_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b94"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b94_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b94_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b94_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b95')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b95_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b95_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b95_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b95_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b95_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b96')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b96_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b96"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b96_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b96_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b96_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b97')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b98')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b98_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b98"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b98_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b98_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b98_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b99')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b99_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b99"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b99_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b99_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b99_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b100')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b100_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b100"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b100_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b100_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b100_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b101')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b101_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b101_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b101_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b101_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b101_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b102')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b102_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b102_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b102"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b102_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b102_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b102_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b103')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b103_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b103_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b103"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b103_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b103_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b103_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b104')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b104_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b104_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b104_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b104_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b104_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b105')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b105_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b105_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b105"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b105_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b105_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b105_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b106')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b106_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b106_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b106"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b106_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b106_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b106_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b107')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b108')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b108_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b108_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b108"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b108_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b108_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b108_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b109')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b109_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b109"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b109_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b109_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b109_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b110')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b110_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b110"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b110_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b110_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b110_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b111')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b111_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b111_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b111"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b111_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b111_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b111_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b112')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b112_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b112_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b112"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b112_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b112_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b112_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b113')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b113_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b113_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b113"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b113_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b113_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b113_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b114')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b114_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b114"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b114_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b114_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b114_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b115')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b115_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b115_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b115"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b115_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b115_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b115_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <p style="font-weight: bolder; color: black">
                      {{ $t("b116") }}
                    </p>
                    <a-form-item
                      :label="$t('b117')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b117_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b117"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b117_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b117_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b117_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b118')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b118_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b118"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b118_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b118_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b118_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b119')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b119_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b119_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b119"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b119_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b119_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b119_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b120')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b120_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b120_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b120"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b120_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b120_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b120_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b121')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b121_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b121"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b121_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b121_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b121_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <p style="font-weight: bolder; color: black">
                      {{ $t("b122") }}
                    </p>
                    <a-form-item
                      :label="$t('b123')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b123_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b123_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b123_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b123_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b123_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b124')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b124_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b124"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b124_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b124_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b124_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b125')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b125_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b125_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b125_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b125_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b125_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b126')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b126_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b126_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b126_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b126_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b126_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b127')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b127_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b127_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b127"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b127_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b127_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b127_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b128')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b128_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b128_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b128"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b128_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b128_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b128_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b129')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b129_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b129"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b129_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b129_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b129_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b130')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b130_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b130"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b130_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b130_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b130_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b131')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b131_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b131_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b131"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b131_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b131_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b131_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b132')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b132_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b132_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b132"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b132_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b132_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b132_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b133')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b133_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b133_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b133_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b133_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b133_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b134')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b134_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b134_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b134_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b134_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b134_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b135')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b135_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b135_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b135_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b135_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b135_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b136')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b136_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b136_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b136"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b136_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b136_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b136_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b137')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b138')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b138_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b138"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b138_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b138_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b138_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b139')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b139_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b139"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b139_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b139_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b139_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b140')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b140_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b140"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b140_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b140_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b140_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b141')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b141_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b141_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b141_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b141_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b141_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b142')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b142_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b142"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b142_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b142_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b142_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b143')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b143_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b143_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b143_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b143_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b143_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b144')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b144_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b144_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b144_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b144_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b144_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b145')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b146')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b146_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b146_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b146_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b146_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b146_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b147')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b147_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b147"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b147_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b147_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b147_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b148')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b148_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b148"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b148_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b148_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b148_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b149')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b149_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b149"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b149_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b149_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b149_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b150')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b150_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b150_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b150"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b150_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b150_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b150_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b151')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b151_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b151_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b151_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b151_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b151_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b152')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b152_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b152"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b152_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b152_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b152_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b153')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b153_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b153_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b153"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b153_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b153_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b153_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b154')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b154_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b154_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b154_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b154_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b154_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b155')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b155_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b155_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b155"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b155_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b155_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b155_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b156')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b157')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b157_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b157"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b157_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b157_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b157_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b158')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b158_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b158"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b158_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b158_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b158_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b159')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b159_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b159"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b159_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b159_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b159_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b160')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b160_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b160"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b160_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b160_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b160_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b161')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b161_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b161"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b161_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b161_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b161_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b162')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b162_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b162"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b162_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b162_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b162_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b163')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b163_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b163"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b163_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b163_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b163_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b164')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b164_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b164"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b164_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b164_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b164_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b165')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b165_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b165"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b165_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b165_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b165_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b166')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b166_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b166"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b166_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b166_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b166_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b167')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b167_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b167"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b167_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b167_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b167_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b168')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b168_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b168"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b168_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b168_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b168_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b169')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b169_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b169"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b169_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b169_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b169_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b170')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b171')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b171_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b171"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b171_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b171_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b171_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b172')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b172_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b172"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b172_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b172_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b172_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b173')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b173_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b173"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b173_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b173_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b173_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b174')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b174_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b174"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b174_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b174_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b174_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b175')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b175_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b175"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b175_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b175_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b175_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b176')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b176_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b176"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b176_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b176_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b176_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b177')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
              </a-card>
              <a-card
                :title="$t('b178')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b179')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b179_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b179"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b179_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b179_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b179_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b180')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b180_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b180"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b180_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b180_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b180_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b181')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b181_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b181"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b181_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b181_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b181_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b182')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b182_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b182"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b182_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b182_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b182_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b183')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b183_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b183"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b183_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b183_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b183_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b184')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b184_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b184"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b184_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b184_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b184_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b185')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b185_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b185"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b185_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b185_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b185_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b186')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b186_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b186"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b186_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b186_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b186_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b187')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b187_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b187"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b187_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b187_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b187_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b188')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b188_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b188"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b188_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b188_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b188_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b189')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b190')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b190_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b190"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b190_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b190_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b190_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b191')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b191_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b191"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b191_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b191_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b191_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b192')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b192_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b192"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b192_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b192_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b192_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b193')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b193_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b193"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b193_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b193_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b193_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b194')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b194_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b194"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b194_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b194_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b194_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b195')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b195_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b195"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b195_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b195_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b195_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b196')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b196_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b196"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b196_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b196_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b196_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b197')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b197_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b197"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b197_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b197_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b197_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b198')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b198_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b198"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b198_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b198_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b198_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b199')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b199_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b199"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b199_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b199_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b199_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b200')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b200_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b200"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b200_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b200_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b200_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b201')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b201_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b201"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b201_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b201_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b201_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b202')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
              </a-card>
              <a-card
                :title="$t('b203')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b204')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b204_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b204"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b204_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b204_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b204_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b205')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b205_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b205"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b205_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b205_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b205_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b206')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b206_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b206"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b206_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b206_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b206_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b207')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b207_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b207"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b207_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b207_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b207_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b208')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b208_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b208"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b208_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b208_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b208_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b209')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b209_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b209"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b209_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b209_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b209_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b210')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b210_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b210"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b210_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b210_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b210_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b211')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b211_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b211"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b211_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b211_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b211_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b212')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b212_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b212"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b212_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b212_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b212_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b213')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b214')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b214_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b214"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b214_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b214_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b214_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b215')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b215_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b215"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b215_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b215_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b215_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b216')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b216_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b216"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b216_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b216_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b216_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b217')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b217_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b217"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b217_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b217_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b217_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b218')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b218_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b218"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b218_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b218_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b218_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b219')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b219_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b219"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b219_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b219_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b219_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b220')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b220_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b220"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b220_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b220_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b220_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b221')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b221_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b221"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b221_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b221_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b221_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b222')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b222_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b222"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b222_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b222_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b222_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b223')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b223_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b223"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b223_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b223_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b223_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b224')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b224_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b224"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b224_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b224_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b224_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b225')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b225_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b225"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b225_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b225_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b225_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b226')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b226_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b226"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b226_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b226_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b226_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b227')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b227_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b227"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b227_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b227_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b227_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b228')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b228_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b228"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b228_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b228_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b228_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b229')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b229_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b229"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b229_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b229_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b229_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b230')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b230_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b230"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b230_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b230_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b230_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b231')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b232')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b232_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b232"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b232_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b232_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b232_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b233')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b233_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b233"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b233_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b233_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b233_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b234')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b234_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b234"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b234_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b234_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b234_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b235')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b235_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b235"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b235_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b235_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b235_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b236')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b236_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b236"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b236_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b236_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b236_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b237')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b237_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b237"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b237_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b237_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b237_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b238')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b238_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b238"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b238_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b238_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b238_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b239')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b239_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b239"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b239_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b239_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b239_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b240')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b240_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b240"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b240_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b240_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b240_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b241')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b241_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b241"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b241_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b241_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b241_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b242')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b242_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b242"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b242_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b242_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b242_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b244')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b245')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b245_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b245"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b245_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b245_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b245_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b246')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b246_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b246"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b246_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b246_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b246_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b247')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b247_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b247"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b247_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b247_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b247_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b248')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b248_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b248"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b248_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b248_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b248_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b249')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b249_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b249"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b249_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b249_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b249_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b250')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b250_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b250"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b250_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b250_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b250_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b251')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b251_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b251"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b251_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b251_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b251_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b252')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b252_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b252"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b252_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b252_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b252_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b253')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b253_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b253"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b253_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b253_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b253_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b254')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
              </a-card>
              <a-card
                :title="$t('b255')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b256')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b256_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b256"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b256_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b256_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b256_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b257')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b257_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b257"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b257_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b257_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b257_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b258')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
              </a-card>
              <a-card
                :title="$t('b259')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b260')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b260_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b260"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b260_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b260_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b260_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b261')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b261_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b261"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b261_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b261_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b261_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b262')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b262_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b262"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b262_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b262_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b262_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b263')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b263_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b263"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b263_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b263_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b263_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b264')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b265')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b265_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b265"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b265_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b265_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b265_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b266')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b266_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b266"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b266_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b266_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b266_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b267')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b267')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b267_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b267"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b267_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b267_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b267_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b268')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b268_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b268"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b268_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b268_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b268_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b269')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b269')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b269_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b269"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b269_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b269_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b269_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b270')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b270_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b270"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b270_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b270_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b270_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b271')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b271_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b271"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b271_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b271_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b271_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b272')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b272_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b272"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b272_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b272_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b272_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b273')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b273')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b273_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b273"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b273_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b273_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b273_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b274')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b274_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b274"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b274_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b274_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b274_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b275')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b276')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b276_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b276"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b276_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b276_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b276_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b277')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b277_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b277"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b277_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b277_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b277_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>	
                    <a-form-item
                      :label="$t('b278')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b278_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b278"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b278_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b278_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b278_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b279')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b279_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b279"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b279_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b279_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b279_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>	
                    <a-form-item
                      :label="$t('b280')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b280_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b280"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b280_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b280_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b280_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>	
                    <a-form-item
                      :label="$t('b281')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b281_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b281"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b281_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b281_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b281_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>	
                    <a-form-item
                      :label="$t('b282')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b282_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b282"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b282_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b282_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b282_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>	
                    <a-form-item
                      :label="$t('b283')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b283_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b283"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b283_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b283_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b283_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>	
                  </a-form>
                </div>
              </a-card>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b284')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <a-card
              :title="$t('b285')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b286')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                    <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b287')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b287_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b287"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b287_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b287_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b287_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b288')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b288_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b288"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b288_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b288_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b288_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b289')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b289_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b289"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b289_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b289_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b289_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b290')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b290_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b290"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b290_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b290_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b290_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b291')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b291_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b291"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b291_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b291_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b291_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b292')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b292_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b292"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b292_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b292_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b292_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b293')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b293_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b293"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b293_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b293_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b293_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b294')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b294_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b294"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b294_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b294_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b294_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b295')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b295_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b295"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b295_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b295_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b295_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b296')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b296_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b296"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b296_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b296_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b296_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b297')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b297_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b297"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b297_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b297_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b297_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b298')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b298_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b298"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b298_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b298_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b298_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b299')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b299_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b299"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b299_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b299_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b299_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b300')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b300_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b300"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b300_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b300_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b300_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b301')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b302')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b303')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b303_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b303"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b303_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b303_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b303_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b304')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b304_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b304"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b304_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b304_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b304_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b305')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b305_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b305"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b305_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b305_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b305_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b306')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b306_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b306"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b306_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b306_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b306_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b307')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b307_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b307"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b307_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b307_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b307_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b308')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b308_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b308"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b308_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b308_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b308_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b309')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b309_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b309"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b309_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b309_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b309_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b310')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b310_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b310"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b310_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b310_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b310_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b311')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b311_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b311"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b311_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b311_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b311_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b312')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b313')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b314')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b314_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b314"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b314_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b314_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b314_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b315')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b315_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b315"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b315_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b315_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b315_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b316')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b316_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b316"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b316_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b316_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b316_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b317')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b317_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b317"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b317_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b317_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b317_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b318')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b318_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b318"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b318_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b318_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b318_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b319')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b319_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b319"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b319_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b319_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b319_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b320')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b320_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b320"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b320_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b320_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b320_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b321')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b321_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b321"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b321_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b321_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b321_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b322')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b322_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b322"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b322_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b322_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b322_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b323')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b324')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b325')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b325_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b325"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b325_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b325_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b325_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b326')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b326_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b326"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b326_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b326_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b326_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b327')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b327_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b327"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b327_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b327_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b327_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b328')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b328_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b328"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b328_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b328_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b328_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b329')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b329_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b329"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b329_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b329_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b329_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b330')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b330_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b330"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b330_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b330_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b330_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b331')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b331_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b331"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b331_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b331_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b331_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b332')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b332_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b332"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b332_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b332_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b332_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b333')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b334')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b335')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b335_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b335"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b335_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b335_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b335_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b336')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b336_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b336"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b336_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b336_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b336_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b337')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b337_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b337"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b337_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b337_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b337_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b338')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b338_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b338"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b338_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b338_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b338_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                    </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b339')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b340')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b340_1')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b340_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b340"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b340_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b340_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b340_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                      :label="$t('b341')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b341_1')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b341_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b341_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b341_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b341_5')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b341_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b342')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b342_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b342"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b342_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b342_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b342_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b343')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b343_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b343"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b343_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b343_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b343_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b344')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b344_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b344"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b344_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b344_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b344_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b345')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b346')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b346_1')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b346_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b346_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b346_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b346_5')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b346_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b347')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b347_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b347"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b347_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b347_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b347_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b348')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b348_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b348"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b348_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b348_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b348_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b349')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b349_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b349"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b349_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b349_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b349_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b350')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b350_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b350"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b350_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b350_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b350_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b351')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b351_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b351"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b351_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b351_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b351_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b352')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b352_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b352"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b352_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b352_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b352_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b353')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b353_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b353"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b353_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b353_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b353_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b354')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b354_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b354"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b354_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b354_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b354_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b355')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b355_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b355"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b355_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b355_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b355_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b356')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b356_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b356"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b356_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b356_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b356_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b357')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b357_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b357"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b357_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b357_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b357_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b358')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b358_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b358"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b358_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b358_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b358_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b359')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b359_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b359"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b359_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b359_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b359_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b360')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b360_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b360"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b360_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b360_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b360_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b361')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b361_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b361"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b361_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b361_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b361_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b362')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b362_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b362"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b362_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b362_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b362_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b363')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b363_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b363"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b363_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b363_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b363_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b364')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b364_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b364"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b364_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b364_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b364_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b365')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b365_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b365"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b365_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b365_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b365_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b366')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b366_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b366"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b366_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b366_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b366_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b367')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b367_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b367"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b367_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b367_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b367_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b368')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b368')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b368_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b368"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b368_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b368_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b368_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b369')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b369')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b369_1')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b369_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b369_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b369_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b369_5')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b369_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b370')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b370_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b370"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b370_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b370_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b370_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b371')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b371')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b371_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b371"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b371_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b371_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b371_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b372')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b372')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b372_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b372"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b372_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b372_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b372_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b373')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b373_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b373"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b373_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b373_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b373_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b374')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b374')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b374_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b374"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b374_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b374_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b374_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b375')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b376')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b377')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b377_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b377"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b377_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b377_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b377_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b378')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b378_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b378"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b378_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b378_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b378_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b379')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b379_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b379"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b379_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b379_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b379_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b380')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
            </a-card>
            <a-card
              :title="$t('b381')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b6')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b6_s')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b6_1')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b6_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b381')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b381_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b381"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b381_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b381_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b381_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                      :label="$t('b382')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b382_1')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b382_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b382_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b382_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b382_5')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b382_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b383')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b383_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b383"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b383_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b383_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b383_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b384')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b384_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b384"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b384_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b384_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b384_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b385')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b385_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b385"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b385_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b385_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b385_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b386')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b387')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b387_1')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b387_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b387_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b387_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b387_5')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b387_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b388')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b388_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b388"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b388_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b388_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b388_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b389')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b389_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b389"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b389_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b389_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b389_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b390')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b390_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b390"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b390_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b390_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b390_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b391')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b391_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b391"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b391_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b391_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b391_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b392')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b392_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b392"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b392_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b392_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b392_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b393')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b393_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b393"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b393_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b393_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b393_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b394')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b394_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b394"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b394_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b394_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b394_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b395')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b395_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b395"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b395_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b395_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b395_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b396')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b396_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b396"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b396_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b396_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b396_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b397')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b397_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b397"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b397_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b397_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b397_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b398')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b398_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b398"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b398_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b398_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b398_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b399')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b399_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b399"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b399_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b399_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b399_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b400')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b400_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b400"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b400_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b400_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b400_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b401')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b401_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b401"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b401_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b401_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b401_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b402')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b402_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b402"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b402_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b402_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b402_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b403')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b403_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b403"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b403_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b403_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b403_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b404')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b404_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b404"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b404_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b404_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b404_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b405')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b405_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b405"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b405_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b405_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b405_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b406')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b406')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b406_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b406"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b406_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b406_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b406_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b407')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                      :label="$t('b407_0')"
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :placeholder="$t('b407_1')"
                        :disabled="true"
                        style="width: 20%"
                      />
                      <a-input
                        :placeholder="$t('b407_2')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b407_3')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b407_4')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b407_5')"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b407_e')"
                        :disabled="true"
                        style="width: 16%"
                      />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b408')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b408_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b408"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b408_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b408_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b408_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b409')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b409')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b409_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b409"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b409_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b409_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b409_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b410')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b410')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b410_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b410"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b410_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b410_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b410_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b411')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b411_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b411"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b411_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b411_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b411_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b412')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b412')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b412_s')"
                      style="width: 20%"
                    />
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b412"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b412_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b412_c')"
                      style="width: 16%"
                    />
                    <a-input
                      :placeholder="$t('b412_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>
        </a-card>
      </a-col>
      <a-col
        style="padding: 14px 6px; margin-right: 0px;"
        :xl="8"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :title="$t('quantities')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <div class="baseQueryParam">
            <a-table
              :columns="columns1"
              :data-source="data1"
              bordered
              size="small"
              :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
              :pagination="false"
              :row-style="{ paddin: 16 }"
            >
              <a slot="序号" slot-scope="text">{{ text }}</a>
            </a-table>
          </div>
          <a-divider :dashed="true" />
          <div class="baseQueryParam">
            <a-table
              :columns="columns2"
              :data-source="data2"
              bordered
              size="small"
              :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
              :pagination="false"
              :row-style="{ paddin: 16 }"
            >
              <a slot="序号" slot-scope="text">{{ text }}</a>
            </a-table>
          </div>
          <a-divider :dashed="true" />
          <div class="baseQueryParam">
            <a-table
              :columns="columns3"
              :data-source="data3"
              bordered
              size="small"
              :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
              :pagination="false"
              :row-style="{ paddin: 16 }"
            >
              <a slot="序号" slot-scope="text">{{ text }}</a>
            </a-table>
          </div>
          <a-card
            :title="$t('export')"
            :headStyle="{ 'font-weight': 'bolder' }"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 120px;">
                  <a-button
                    style="margin-left: 30px;"
                    type="primary"
                    @click="exportComputeBook()"
                    >{{ $t("exportComputeBook") }}</a-button
                  >
                  <a-button
                    style="margin-left: 10px"
                    type="danger"
                    @click="exportQuantities()"
                    >{{ $t("exportQuantities") }}</a-button
                  >
                  <a-button
                    style="margin-left: 10px"
                    type="dashed"
                    @click="backHome()"
                    >{{ $t("backWork") }}</a-button
                  >
                </a-form-item>
              </a-form>
            </div>
          </a-card>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { exportExcel3, getValueFromLocalStorage } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3003"),
  data() {
    return {
      b9: "6000",
      b11: "4.00",
      b12: "2.00",
      b13: "10.00",
      b14: "8.50",
      b15: "3.00",
      b16: "",
      b17: "",
      b18_0: "64",
      b19_0: "1",
      b19: "1.00",
      b20_0: "1.5",
      b20: "1.5",
      b20_1: "1.50",
      b21: "0.40",
      b26: "0.70",
      b27: "0.70",
      b29: "0.70",
      b30: "0.70",
      b32: "",
      b33: "64",
      b34: "1.00",
      b36: "",
      b38: "3.50",
      b39: "0.30",
      b42: "3.80",
      b45: "0.7",
      b46: "1.50",
      b50: "800",
      b53_s: "0.26",
      b53: "1.00",
      b54_s: "0.75",
      b54: "1.00",
      b55_s: "1.5",
      b55: "1.00",
      b56_s: "1.61",
      b56: "1.00",
      b60_0: "6.00",
      b60_1: "100.00",
      b61_0: "2.00",
      b61_1: "100.00",
      b63: "0.15",
      b64: "",
      b65: "800",
      b66: "10.00",
      b69: "6.20",
      b71: "6.60",
      b73: "6.50",
      b80: "0.028",
      b81: "2.30",
      b84: "1.80",
      b87: "1.10",
      b94: "13.00",
      b98: "60.00",
      b99: "32.00",
      b100: "1000.00",
      b102: "11.40",
      b103: "10.10",
      b105: "10.50",
      b108: "14.00",
      b110: "0.30",
      b111: "0.40",
      b114: "0.50",
      b115: "0.20",
      b117: "0.07",
      b118: "0.05",
      b119: "46.00",
      b120: "2.33",
      b121: "0.05",
      b124: "0.05",
      b129: "0.10",
      b131: "3.00",
      b132: "34.00",
      b138: "600.00",
      b139: "1.20",
      b142: "0.30",
      b147: "1.80",
      b148: "0.36",
      b149: "60",
      b150: "1.25",
      b152: "0.07",
      b153: "0.39",
      b168: "0.40",
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
              dataIndex: "Dimensions",
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
              dataIndex: "disinfectiontank",
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
              dataIndex: "Dimensions",
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
              dataIndex: "disinfectiontank",
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
              dataIndex: "Dimensions",
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
              dataIndex: "disinfectiontank",
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
      data: [],
    };
  },
  methods: {
    backHome() {
      this.$router.push("/work");
    },
    initWaterData() {
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b9 = 6000;
      } else {
        this.b9 = waterData;
      }
    },
    exportQuantities() {
      try {
        this.exportExcel();
      } catch (error) {
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
        this.$message.warn(this.$t("exportExcelError"));
        return;
      }
    },
    exportExcel() {
      try {
        // 处理表头信息
        const headerData1 = [
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData
        const allData1 = [
          ...headerData1,
          ...this.data1.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData2 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData
        const allData2 = [
          ...headerData2,
          ...this.data2.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData3 = [
          this.flattenFirstRowColumns(this.columns3),
          this.flattenSecondRowColumns(this.columns3),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];

        // 导出 Excel
        exportExcel3(allData1, allData2, allData3, "高密度沉淀池工程量", this);
      } catch (error) {
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
      }
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
    exportComputeBook() {
      this.$message.warn(this.$t("exportComputeBookNotOpen"));
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
    ROUNDUP(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.ceil(number * multiplier) / multiplier;
    },
    ROUND(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.round(number * multiplier) / multiplier;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b6() {
      return parseFloat(this.b4) * (1 + parseFloat(this.b5) / 100);
    },
    b6_1() {
      return (parseFloat(this.b6) / 24).toFixed(1);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 3600).toFixed(2);
    },
    b10() {
      return "0";
    },
    b22_0() {
      return (parseFloat(this.b20_0) + parseFloat(this.b21)).toFixed(2);
    },
    b22() {
      return this.b22_0;
    },
    b23_0() {
      return (parseFloat(this.b9) / parseFloat(this.b19_0)/parseFloat(this.b20_0)/3600/2).toFixed(3);
    },
    b25() {
      return (parseFloat(this.b9)/parseFloat(this.b11)).toFixed(2);
    },
    b28_0() {
      return (parseFloat(this.b25)/parseFloat(this.b26)/parseFloat(this.b27)/3600).toFixed(2);
    },
    b28() {
      return this.b28_0;
    },
    b31_0() {
      return (parseFloat(this.b25)/parseFloat(this.b29)/parseFloat(this.b30)/3600).toFixed(2);
    },
    b31() {
      return this.b31_0;
    },
    b35() {
      return (parseFloat(this.b12)/parseFloat(this.b34)).toFixed(2)
    },
    b37_0() {
      return (parseFloat(this.b25)/60*parseFloat(this.b35)).toFixed(2);
    },
    b40_0() {
      return (parseFloat(this.b38)+parseFloat(this.b39)).toFixed(2);
    },
    b40() {
      return this.b40_0;
    },
    b41_0() {
      return (parseFloat(this.b37_0)/parseFloat(this.b38)).toFixed(2);
    },
    b42_0() {
      return (
        Math.sqrt(parseFloat(this.b41_0))
      ).toFixed(2);
    },
    b43_0() {
      return (parseFloat(this.b38)/parseFloat(this.b42)).toFixed(2);
    },
    b44_0() {
      return (
        Math.pow(parseFloat(this.b42), 2) * parseFloat(this.b38) * 60 / parseFloat(this.b25)
      ).toFixed(2);
    },
    b47() {
      return this.b42;
    },
    b48() {
      return (parseFloat(this.b38) - 0.05).toFixed(2);
    },
    b51_0() {
      return (parseFloat(this.b25)/3600/(
        Math.PI * Math.pow(parseFloat(this.b50)/2/1000, 2)
      )).toFixed(3);
    },
    b53_0() {
      return (parseFloat(this.b51_0)).toFixed(2);
    },
    b53_1() {
      return (parseFloat(this.b53_s)*
      Math.pow(parseFloat(this.b53_0),2) / 2 / 9.8 * parseFloat(this.b53)
    ).toFixed(3);
    },
    b54_0() {
      return (parseFloat(this.b51_0)).toFixed(2);
    },
    b54_1() {
      return (parseFloat(this.b54_s)*
      Math.pow(parseFloat(this.b54_0),2) / 2 / 9.8 * parseFloat(this.b54)
    ).toFixed(3);
    },
    b55_0() {
      return (parseFloat(this.b51_0)).toFixed(2);
    },
    b55_1() {
      return (parseFloat(this.b55_s)*
      Math.pow(parseFloat(this.b55_0),2) / 2 / 9.8 * parseFloat(this.b55)
    ).toFixed(3);
    },
    b56_0() {
      return (parseFloat(this.b51_0)).toFixed(2);
    },
    b56_1() {
      return (parseFloat(this.b56_s)*
      Math.pow(parseFloat(this.b51_0),2) / 2 / 9.8 * parseFloat(this.b56)
    ).toFixed(3);
    },
    b57_1() {
      return (parseFloat(this.b53_1) + 
      parseFloat(this.b54_1) + 
      parseFloat(this.b55_1) + 
      parseFloat(this.b56_1)
    ).toFixed(3);
    },
    b60_s() {
      return this.b50;
    },
    b60() {
      return (parseFloat(this.b51_0)).toFixed(2);
    },
    b60_2() {
      return (10.7 * parseFloat(this.b60_0) *
      Math.pow(parseFloat(this.b9)/3600/parseFloat(this.b11), 1.85) / 
      Math.pow(parseFloat(this.b60_1), 1.85) / 
      Math.pow(parseFloat(this.b60_s)/1000, 4.87)
    ).toFixed(3);
    },
    b61_s() {
      return (parseFloat(this.b60_s) + 100).toFixed(0);
    },
    b61() {
      return (parseFloat(this.b25)/3600 / (
        Math.PI * Math.pow(parseFloat(this.b61_s)/2/1000, 2)
      )).toFixed(2);
    },
    b61_2() {
      return (10.7 * parseFloat(this.b61_0) *
      Math.pow(parseFloat(this.b9)/3600/parseFloat(this.b11), 1.85) / 
      Math.pow(parseFloat(this.b61_1), 1.85) / 
      Math.pow(parseFloat(this.b61_s)/1000, 4.87)
    ).toFixed(3);
    },
    b62_2() {
      return (parseFloat(this.b60_2) + parseFloat(this.b61_2)).toFixed(3);
    },
    b63_0() {
      return (parseFloat(this.b57_1) + parseFloat(this.b62_2)).toFixed(2);
    },
    b68_0() {
      return (parseFloat(this.b25)/60*parseFloat(this.b66)).toFixed(2);
    },
    b70() {
      return this.b168;
    },
    b71_0() {
      return (parseFloat(this.b69) + parseFloat(this.b70)).toFixed(2);
    },
    b72_0() {
      return (parseFloat(this.b68_0)/parseFloat(this.b69)).toFixed(2);
    },
    b73_0() {
      return (Math.sqrt(parseFloat(this.b72_0))).toFixed(2);
    },
    b74_0() {
      return (parseFloat(this.b69) / parseFloat(this.b73)).toFixed(2);
    },
    b75_0() {
      return (parseFloat(this.b66) * (
        parseFloat(this.b69) * Math.pow(parseFloat(this.b73), 2)
      )/parseFloat(this.b68_0)).toFixed(2);
    },
    b77_0() {
      return this.b73;
    },
    b78_0() {
      return this.b94;
    },
    b81_0() {
      return (parseFloat(this.b25)/3600/parseFloat(this.b77_0)/parseFloat(this.b80)).toFixed(3);
    },
    b82() {
      return (parseFloat(this.b25)/parseFloat(this.b81)/parseFloat(this.b77_0)/3600).toFixed(3);
    },
    b85_0() {
      return (parseFloat(this.b25)/3600/parseFloat(this.b78_0)/parseFloat(this.b84)).toFixed(3);
    },
    b88_0() {
      return (parseFloat(this.b25)/3600/parseFloat(this.b78_0)/parseFloat(this.b87)).toFixed(3);
    },
    b89_0() {
      return (parseFloat(this.b69) - parseFloat(this.b87)).toFixed(3);
    },
    b92_0() {
      return (parseFloat(this.b93) / 0.65).toFixed(2);
    },
    b92() {
      return (parseFloat(this.b92_0)).toFixed(0);
    },
    b93() {
      return this.b14;
    },
    b94_0() {
      return (Math.pow((parseFloat(this.b25)/parseFloat(this.b93)), 0.5)).toFixed(2);
    },
    b95_0() {
      return (Math.pow(parseFloat(this.b94), 2)).toFixed(3);
    },
    b96() {
      return (parseFloat(this.b25) / parseFloat(this.b94) / parseFloat(this.b94)).toFixed(2);
    },
    b140() {
      return (parseFloat(this.b139) + 2*0.2).toFixed(2);
    },
    b101_0() {
      return (parseFloat(this.b25) / parseFloat(this.b92_0)).toFixed(2);
    },
    b102_0() {
      return (parseFloat(this.b94)-parseFloat(this.b140)).toFixed(2);
    },
    b103_0() {
      return (parseFloat(this.b101_0) / parseFloat(this.b102)).toFixed(2);
    },
    b104_0() {
      return (parseFloat(this.b102) * parseFloat(this.b103)).toFixed(3);
    },
    b105_0() {
      return (parseFloat(this.b103) + parseFloat(this.b100)/1000*
      Math.cos(
        parseFloat(this.b98) * (Math.PI / 180)
      )
    ).toFixed(2);
    },
    b106_0() {
      return (parseFloat(this.b25)/parseFloat(this.b102)/parseFloat(this.b103)).toFixed(2);
    },
    b106() {
      return this.b106_0;
    },
    b108_0() {
      return (2*parseFloat(this.b105)/1.5).toFixed(2);
    },
    b109() {
      return (parseFloat(this.b102) / 2).toFixed(2);
    },
    b111_0() {
      return (parseFloat(this.b110) * 1.25).toFixed(2)
    },
    b112_0() {
      return (parseFloat(this.b25)/parseFloat(this.b108)).toFixed(2);
    },
    b112() {
      return this.b112_0;
    },
    b113_0() {
      return (
        Math.pow(3, 0.5) * 
        Math.pow(1/9.81, (1/3)) * 
        Math.pow((parseFloat(this.b112_0)/3600/parseFloat(this.b110)), (2/3))
      ).toFixed(2);
    },
    b113() {
      return this.b113_0;
    },
    b115_0() {
      return (parseFloat(this.b112_0)/3600/parseFloat(this.b110)/parseFloat(this.b114)).toFixed(2);
    },
    b119_0() {
      return (parseFloat(this.b109) * 8).toFixed(2);
    },
    b120_0() {
      return (parseFloat(this.b112_0) / parseFloat(this.b119)).toFixed(2);
    },
    b123_0() {
      return (parseFloat(this.b111) - parseFloat(this.b129) - parseFloat(this.b115)).toFixed(2);
    },
    b125_0() {
      return (parseFloat(this.b112_0) / 2 / 3600).toFixed(4);
    },
    b126_0() {
      return (1.401 * Math.pow(parseFloat(this.b124), 2.5)).toFixed(4);
    },
    b127_0() {
      return ((parseFloat(this.b112_0) / 2 / 3600) / 
      (1.401 * Math.pow(parseFloat(this.b124), 2.5))  
    ).toFixed(2);
    },
    b127() {
      return (
        this.ROUND(parseFloat(this.b127_0), 2)
      ).toFixed(2);
    },
    b128_0() {
      return (Math.pow((
        parseFloat(this.b125_0)/parseFloat(this.b127)/1.401
      ),(1/2.5))).toFixed(2);
    },
    b128() {
      return this.b128_0;
    },
    b130() {
      return (2 * parseFloat(this.b129)).toFixed(2);
    },
    b131_0() {
      return (parseFloat(this.b127)/parseFloat(this.b109)).toFixed(2);
    },
    b132_0() {
      return (parseFloat(this.b131)*parseFloat(this.b109)*2).toFixed(2);
    },
    b133_0() {
      return (parseFloat(this.b109)*2/parseFloat(this.b132)).toFixed(2);
    },
    b134_0() {
      return (parseFloat(this.b112_0)/parseFloat(this.b132)).toFixed(2);
    },
    b135_0() {
      return this.b123_0;
    },
    b136_0() {
      return (parseFloat(this.b135_0) + parseFloat(this.b124)).toFixed(2);
    },
    b136() {
      return this.b136_0;
    },
    b141_0() {
      return (parseFloat(this.b25) / 3600).toFixed(2);
    },
    b143_0() {
      return (parseFloat(this.b158) + parseFloat(this.b159)- parseFloat(this.b142)).toFixed(2);
    },
    b144_0() {
      return (parseFloat(this.b25) / 3600/parseFloat(this.b143_0)/parseFloat(this.b139)).toFixed(2);
    },
    b146_0() {
      return (parseFloat(this.b280) * 4).toFixed(2);
    },
    b150_0() {
      return (1/2*(
        parseFloat(this.b147) - parseFloat(this.b148)
      )*(
        Math.tan(parseFloat(this.b149) * (Math.PI / 180)))
      ).toFixed(2);
    },
    b151_0() {
      return (1 / 3 * 3.14 * parseFloat(this.b150_0)*(
        Math.pow(parseFloat(this.b147), 2) +
        Math.pow(parseFloat(this.b148), 2) + 
        parseFloat(this.b147) * parseFloat(this.b148)
      )/4).toFixed(2);
    },
    b153_0() {
      return (parseFloat(this.b152)*(
        parseFloat(this.b94) - parseFloat(this.b147)
      )/2).toFixed(2);
    },
    b154_0() {
      return (1/3*3.14*parseFloat(this.b153_0)*(
        Math.pow(parseFloat(this.b147), 2) +
        Math.pow(parseFloat(this.b148), 2) + 
        parseFloat(this.b147) * parseFloat(this.b148)
      )/4).toFixed(2);
    },
    b155_0() {
      return ((
        parseFloat(this.b146_0) - parseFloat(this.b151_0) - parseFloat(this.b154_0)
      )/(
        Math.pow(parseFloat(this.b94),2)
      )).toFixed(2);
    },
    b155() {
      return this.b155_0;
    },
    b158() {
      return (parseFloat(this.b110)/2).toFixed(2);
    },
    b159() {
      return 0.87;
    },
    b280() {
      return 107.74;
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
  },
  mounted() {
    this.initWaterData();
  },
  created() {
    this.initWaterData();
    this.data1 = [
      {
        key: "1",
        序号: "1",
        单体位号: "1",
        名称: "普通快滤池",
        Dimensions: "70.1m x 20.9m x 4.4m",
        标高: "",
        单位: "座",
        disinfectiontank: "1",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        key: "1",
        序号: "1",
        设备位号: "1",
        设备工艺名称: "反冲洗泵",
        规格及型号: "8",
        单位: "台",
        数量: "Q=554.4m3/h,H=13.26m",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "1",
        序号: "1",
        设备位号: "1",
        设备工艺名称: "反冲洗风机",
        规格及型号: "3",
        单位: "台",
        数量: "Q=554.4m3/h,H=13.26m",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
    ];
    this.data3 = [
      {
        key: "1",
        序号: "1",
        仪表位号: "1",
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
  },
};
</script>

<style lang="less">
.calc {
  margin-bottom: 15px;
}
.ant-input-suffix {
  z-index: auto !important;
}
</style>
