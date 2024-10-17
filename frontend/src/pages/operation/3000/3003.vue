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
                    <a-input :disabled="true" style="width: 16%" />
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
                    <a-input :disabled="true" style="width: 16%" />
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
                    <a-input :disabled="true" style="width: 16%" />
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
                    <a-input :disabled="true" style="width: 16%" />
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
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b23"
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
                      :disabled="false"
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
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b28"
                      :disabled="false"
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
                    <a-input :disabled="true" style="width: 16%" />
                    <a-input
                      v-model="b31"
                      :disabled="false"
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b37"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b40"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b41"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b42"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b43"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b44"
                        :disabled="false"
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
                        :disabled="false"
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b51"
                        :disabled="false"
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
                        :disabled="true"
                        :placeholder="$t('b53_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b53"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
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
                        :disabled="true"
                        :placeholder="$t('b54_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b54"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
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
                        :disabled="true"
                        :placeholder="$t('b55_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b55"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
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
                        :disabled="true"
                        :placeholder="$t('b56_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b56"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
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
                        v-model="b57"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
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
                        :placeholder="$t('b60_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b60"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b60_u')"
                        style="width: 16%"
                      />
                      <a-input
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
                        :placeholder="$t('b61_s')"
                        style="width: 20%"
                      />
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b61"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b61_u')"
                        style="width: 16%"
                      />
                      <a-input
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
                        v-model="b62"
                        :disabled="false"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b62_u')"
                        style="width: 16%"
                      />
                      <a-input
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b68"
                        :disabled="false"
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b72"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b74"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b75"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b77"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b78"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b85"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b88"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b89"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b92"
                        :disabled="false"
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b95"
                        :disabled="false"
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b101"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b104"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b106"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b112"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b113"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b123"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b125"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b126"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b127"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b128"
                        :disabled="false"
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
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b133"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b134"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b135"
                        :disabled="false"
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
                      <a-input :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b136"
                        :disabled="false"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
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
      b11: "4",
      b12: "2",
      b13: "10",
      b14: "8.50",
      b15: "3.00",
      b16: "",
      b17: "",
      b18: "25",
      b19: "",
      b20: "",
      b21: "25",
      b22: "25",
      b23: "5",
      b24: "0.8",
      b25: "",
      b26: "4",
      b27: "2",
      b28: "10",
      b29: "8.5",
      b30: "3",
      b31: "",
      b32: "",
      b33: "64",
      b34: "1",
      b35: "1.5",
      b36: "",
      b37: "1.9",
      b38: "0.555555556",
      b39: "",
      b40: "1500",
      b41: "0.7",
      b42: "0.7",
      b43: "0.850340136",
      b44: "0.7",
      b45: "0.7",
      b46: "0.850340136",
      b47: "",
      b48: "",
      b49: "1",
      b50: "2",
      b51: "",
      b52: "50",
      b53: "3.5",
      b54: "0.3",
      b55: "3.8",
      b56: "14.28571429",
      b57: "3.77964473",
      b58: "0.921052632",
      b59: "2.0216",
      b60: "",
      b61: "1.5",
      b62: "3.8",
      b63: "3.45",
      b64: "",
      b65: "800",
      b66: "0.828931995",
      b67: "",
      b68: "0.828931995",
      b69: "0.828931995",
      b70: "0.828931995",
      b71: "0.828931995",
      b72: "0.144437163",
      b73: "",
      b74: "",
      b75: "6",
      b76: "2",
      b77: "",
      b78: "0.153367142",
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
