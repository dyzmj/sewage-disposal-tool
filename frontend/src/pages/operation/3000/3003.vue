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
        <a slot="extra" href="#">
            <div class="" style="">
              <a-button type="primary" @click="refreshInitData" icon="sync" size="small">
                {{ $t("refresh") }}</a-button
              >
            </div>
          </a>
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
                      @change="refreshInitData()"
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
                        :disabled="true"
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
                        :disabled="true"
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
                      :label="$t('b156')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b156_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b156_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b156"
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b156_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b156_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b156_e')"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                      <a-input v-model="b171_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b172_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b172"
                        :disabled="true"
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
                      <a-input v-model="b173_0" :disabled="false" style="width: 16%" />
                      <a-input
                        v-model="b173"
                        :disabled="true"
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
                      <a-input v-model="b175_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b175"
                        :disabled="true"
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
                      <a-input v-model="b176_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b180_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b181_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b184_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b185_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b186_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b187_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b187"
                        :disabled="true"
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
                      <a-input v-model="b188_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b191_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b192_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b196_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b196"
                        :disabled="true"
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
                      <a-input v-model="b197_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b197"
                        :disabled="true"
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
                      <a-input v-model="b198_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b199_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b200_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b200"
                        :disabled="true"
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
                      <a-input v-model="b201_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b201"
                        :disabled="true"
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
                        style="width: 68%"
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
                      label=" "
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b210_s')"
                        style="width: 68%"
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
                      label=" "
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b211_s')"
                        style="width: 68%"
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
                        style="width: 68%"
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
                      <a-input v-model="b218_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b221_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b221"
                        :disabled="true"
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
                      <a-input v-model="b222_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b223_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b226_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b227_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b228_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b229_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b230_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b230"
                        :disabled="true"
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
                      <a-input v-model="b234_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b234"
                        :disabled="true"
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
                      <a-input v-model="b235_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b236_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b239_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b240_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b241_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b242_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b242"
                        :disabled="true"
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
                      <a-input v-model="b246_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b248_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b249_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b251_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b251"
                        :disabled="true"
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
                      <a-input v-model="b252_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b253_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b253"
                        :disabled="true"
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
                      <a-input v-model="b257_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b260_0" :disabled="false" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b261_0" :disabled="false" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b263_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      :label="$t('b264')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 5 }"
                      :wrapperCol="{ span: 19 }"
                    >
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b264_s')"
                        style="width: 20%"
                      />
                      <a-input v-model="b264_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b264_u')"
                        style="width: 16%"
                      />
                      <a-input
                        :disabled="true"
                        :placeholder="$t('b264_c')"
                        style="width: 16%"
                      />
                      <a-input
                        :placeholder="$t('b264_e')"
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
                      <a-input v-model="b266_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b267_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b268_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b269_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b270_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b271_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b272_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b273_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b274_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b276_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b276"
                        :disabled="true"
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
                      <a-input v-model="b277_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b277"
                        :disabled="true"
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
                      <a-input v-model="b279_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b280_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b280"
                        :disabled="true"
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
                      <a-input v-model="b281_0" :disabled="true" style="width: 16%" />
                      <a-input
                      v-model="b281"
                        :disabled="true"
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
                      <a-input v-model="b282_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b283_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                        :disabled="true"
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
                      <a-input v-model="b290_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b293_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b294_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b295_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b297_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b297"
                        :disabled="true"
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
                      <a-input v-model="b299_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b299"
                        :disabled="true"
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
                      <a-input v-model="b300_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b300"
                        :disabled="true"
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
                      <a-input v-model="b304" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b304"
                        :disabled="true"
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
                      <a-input v-model="b307_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b307"
                        :disabled="true"
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
                      <a-input v-model="b308_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b309_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b310_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b310"
                        :disabled="true"
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
                      <a-input v-model="b311_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b311"
                        :disabled="true"
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
                      <a-input v-model="b314_0" :disabled="true" style="width: 16%" />
                      <a-input
                        :disabled="true"
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
                      <a-input v-model="b315_0" :disabled="true" style="width: 16%" />
                      <a-input
                        v-model="b315"
                        :disabled="true"
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
                      <a-input v-model="b316_0" :disabled="true" style="width: 16%" />
                      <a-input
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                      <a-input v-model="b326_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b327_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b330_0" :disabled="true" style="width: 16%" />
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
                      <a-input v-model="b331_0" :disabled="true" style="width: 16%" />
                      <a-input
                        
                        :disabled="true"
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
                      <a-input v-model="b332_0" :disabled="true" style="width: 16%" />
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
                        :disabled="true"
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
                        :disabled="true"
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
                      style="width: 68%"
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
                      v-model="b342_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b342_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b342"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b342_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b342_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b342_3"
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
                      v-model="b343_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b343_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b343"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b343_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b343_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b343_3"
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
                      style="width: 20%"
                    />
                    <a-input 
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="false"
                      :placeholder="$t('b344_c')"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b344_3"
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
                    :label="$t('b348')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      v-model="b348_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b348_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b348"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b348_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b348_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b348_3"
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
                      v-model="b349_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b349_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b349"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b349_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b349_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b349_3"
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
                      v-model="b350_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b350_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b350"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b350_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b350_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b350_3"
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
                      v-model="b351_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b351_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b351"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b351_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b351_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b351_3"
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
                      v-model="b352_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b352_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b352"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b352_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b352_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b352_3"
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
                      v-model="b353_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b353_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b353"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b353_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b353_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b353_3"
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
                      v-model="b354_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b354_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b354"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b354_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b354_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b354_3"
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
                      v-model="b355_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b355_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b355"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b355_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b355_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b355_3"
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
                      v-model="b356_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b356_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b356"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b356_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b356_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b356_3"
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
                      v-model="b358_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b358_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b358"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b358_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b358_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b358_3"
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
                      v-model="b359_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b359_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b359"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b359_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b359_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b359_3"
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
                      v-model="b360_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b360_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b360"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b360_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b360_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b360_3"
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
                      v-model="b361_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b361_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b361"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b361_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b361_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b361_3"
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
                      v-model="b362_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b362_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b362"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b362_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b362_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b362_3"
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
                      v-model="b364_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b364_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b364"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b364_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b364_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b364_3"
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
                      v-model="b365_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b365_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b365"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b365_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b365_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b365_3"
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
                      v-model="b366_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b366_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b366"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b366_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b366_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b366_3"
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
                      v-model="b367_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b367_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b367"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b367_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b367_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b367_3"
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
                      
                      :disabled="true"
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
                      v-model="b368_3"
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
                      v-model="b370_1"
                      :disabled="false"
                      :placeholder="$t('b370_u')"
                      style="width: 16%"
                    />
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b370_c')"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b370_3"
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
                      
                      :disabled="true"
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
                      v-model="b371_3"
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
                      
                      :disabled="true"
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
                    v-model="b372_3"
                      :placeholder="$t('b372_e')"
                      :disabled="true"
                      style="width: 16%"
                    />
                  </a-form-item>
                  <a-form-item
                    label=" "
                    :colon="false"
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
                      
                      :disabled="true"
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
                    v-model="b373_3"
                      :placeholder="$t('b373_e')"
                      :disabled="false"
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
                      
                      :disabled="true"
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
                    v-model="b374_3"
                      :placeholder="$t('b374_e')"
                      :disabled="false"
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
                      :disabled="true"
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
                    :label="$t('b381_0')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      :placeholder="$t('b381_s')"
                      style="width: 68%"
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
                      v-model="b383_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b383_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b383"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b383_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b383_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b383_3"
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
                      v-model="b384_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b384_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b384"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b384_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b384_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b384_3"
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
                    :label="$t('b389')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 5 }"
                    :wrapperCol="{ span: 19 }"
                  >
                    <a-input
                      :disabled="true"
                      v-model="b389_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b389_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b389"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b389_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b389_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b389_3"
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
                      v-model="b390_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b390_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b390"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b390_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b390_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b390_3"
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
                      v-model="b391_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b391_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b391"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b391_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b391_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b391_3"
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
                      v-model="b392_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b392_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b392"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b392_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b392_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b392_3"
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
                      v-model="b393_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b393_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b393"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b393_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b393_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b393_3"
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
                      v-model="b394_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b394_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b394"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b394_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b394_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b394_3"
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
                      v-model="b395_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b395_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b395"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b395_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b395_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b395_3"
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
                      v-model="b396_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b396_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b396"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b396_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b396_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b396_3"
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
                      v-model="b398_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b398_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b398"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b398_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b398_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b398_3"
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
                      v-model="b399_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b399_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b399"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b399_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b399_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b399_3"
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
                      v-model="b400_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b400_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b400"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b400_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b400_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b400_3"
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
                      v-model="b401_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b401_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b401"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b401_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b401_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b401_3"
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
                      v-model="b402_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b402_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b402"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b402_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b402_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b402_3"
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
                      v-model="b403_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b403_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b403"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b403_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b403_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b403_3"
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
                      v-model="b404_s"
                      style="width: 20%"
                    />
                    <a-input 
                      v-model="b404_0"
                     :disabled="false" 
                     style="width: 16%" />
                    <a-input
                      v-model="b404"
                      :disabled="true"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b404_1"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b404_2"
                      :disabled="false"
                      style="width: 16%"
                    />
                    <a-input
                      v-model="b404_3"
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
                      
                      :disabled="true"
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
                      v-model="b405_3"
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
                      
                      :disabled="true"
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
                      v-model="b406_3"
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
                    <a-input v-model="b408_0" :disabled="false" style="width: 16%" />
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
                      v-model="b408_3"
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
                      
                      :disabled="true"
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
                      v-model="b409_3"
                      :disabled="false"
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
                      
                      :disabled="true"
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
                      v-model="b410_3"
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
                      
                      :disabled="true"
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
                    v-model="b411_3"
                      :disabled="false"
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
                      
                      :disabled="true"
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
                    v-model="b412_3"
                      :disabled="false"
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
import { exportExcel3, exportWord, getValueFromLocalStorage,    initWordStorage,
  initExcelStorage, } from "@/utils/exportUtil";

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
      b160: "0.50",
      b161: "1.50",
      b162: "0.50",
      b163: "1.45",
      b168: "0.40",
      b169: "0.37",
      b171_0: "50",
      b172_0: "1",
      b173_0: "1.5",
      b174: "0.40",
      b179: "30.00",
      b182: "10",
      b183: "1210.00",
      b188: "500.00",
      b190: "1.00",
      b193: "0.20",
      b194: "0.02",
      b195: "1000.00",
      b204: "1.20",
      b205: "2.91",
      b206: "1.60",
      b207: "2.51",
      b208: "1.60",
      b214: "0",
      b215: "0",
      b216: "0",
      b217: "0.2",
      b219: "90",
      b220: "80",
      b224: "5.0",
      b225: "1033.00",
      b229: "16.00",
      b232: "1.0",
      b233: "99",
      b237: "5.0",
      b238: "1033.00",
      b245: "50.00",
      b247: "98",
      b250: "1800.00",
      b256: "3",
      b257: "50.00",
      b260_0: "25.00",
      b261_0: "10.00",
      b262: "2.00",
      b265: "1.53",
      b278: "30.00",
      b287: "500.00",
      b288: "15.00",
      b291: "0.75",
      b292: "0.60",
      b293: "37.50",
      b296: "1.00",
      b298: "5.00",
      b303: "5",
      b305: "1",
      b306: "3",
      b308: "6.00",
      b309: "19.00",
      b317: "60",
      b325: "1.5",
      b326: "50.00",
      b328: "1",
      b329: "8",
      b330: "42.00",
      b332: "2.10",
      b335: "1",
      b336: "1",
      b342_0: "150",
      b342_1: "15",
      b342_2: "81",
      b343_0: "100",
      b343_1: "20",
      b343_2: "81",
      b348_1: "1",
      b348_2: "1",
      b349_1: "5",
      b349_2: "0.8",
      b350_1: "1",
      b350_2: "1.27",
      b351_1: "1",
      b351_2: "0.1",
      b352_1: "1",
      b352_2: "0.1",
      b353_1: "2",
      b353_2: "0.2",
      b354_1: "1",
      b354_2: "0.21",
      b355_1: "1",
      b355_2: "0.08",
      b356_1: "1",
      b356_2: "1",
      b358_1: "1",
      b358_2: "1",
      b359_1: "1",
      b359_2: "0.17",
      b360_1: "1",
      b360_2: "0.21",
      b361_1: "1",
      b361_2: "6.5",
      b362_1: "1",
      b362_2: "0.2",
      b364_1: "1",
      b364_2: "0.1",
      b365_1: "5",
      b365_2: "0.8",
      b366_1: "1",
      b366_2: "1",
      b370: "5.80",
      b370_1: "5.00",
      b371_3: "2",
      b373_3: "0.20",
      b374_3: "4.00",
      b377: "1.00",
      b378: "1.00",
      b383_0: "150.00",
      b383_1: "15.00",
      b383_2: "81.00",
      b384_0: "100.00",
      b384_1: "30.00",
      b384_2: "81.00",
      b389_1: "1",
      b389_2: "1",
      b390_1: "5",
      b390_2: "0.8",
      b391_1: "1",
      b391_2: "1.27",
      b392_1: "1",
      b392_2: "0.1",
      b393_1: "2",
      b393_2: "0.11",
      b394_1: "1",
      b394_2: "0.21",
      b395_1: "1",
      b395_2: "0.08",
      b396_1: "1",
      b396_2: "1",
      b398_1: "1",
      b398_2: "1",
      b399_1: "1",
      b399_2: "0.17",
      b400_1: "1",
      b400_2: "0.21",
      b401_1: "1",
      b401_2: "6.5",
      b402_1: "1",
      b402_2: "0.2",
      b403_1: "1",
      b403_2: "0.1",
      b404_1: "5",
      b404_2: "0.85",
      b408_0: "5.00",
      b408: "2.50",
      b409_3: "2",
      b411_3: "0.20",
      b412_3: "4.00",
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
            {
              title: "与基础设计不同处",
              dataIndex: "与基础设计不同处",
              key: "11",
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
              title: "备注",
              dataIndex: "备注",
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
              title: "生产厂家",
              dataIndex: "生产厂家",
              key: "10",
              width: "80px",
              align: "center",
            },
            {
              title: "与基础设计不同之处",
              dataIndex: "与基础设计不同之处",
              key: "11",
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
              title: "安装位置",
              dataIndex: "安装位置",
              key: "3",
              width: "150px",
              align: "center",
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "4",
              width: "100px",
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
              title: "备注",
              dataIndex: "备注",
              key: "8",
              width: "80px",
              align: "center",
            },
            {
              title: "生产厂家",
              dataIndex: "生产厂家",
              key: "9",
              width: "50px",
              align: "center",
            },
            {
              title: "-",
              dataIndex: "-",
              key: "10",
              width: "80px",
              align: "center",
            },
            {
              title: "与基础设计不同处",
              dataIndex: "与基础设计不同处",
              key: "11",
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
      const data = {
        key1: this.b9,
        key2: "1",
        key3: "16",
        key4: "10",
      };
      exportWord("高密度沉淀池计算书", "3003.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b9,
        key2: "1",
        key3: "16",
        key4: "10",
      };
      initWordStorage("3003.docx", data);
      this.handleExcelCache("3003.xlsx", "高密度沉淀池工程量");
    },
    handleExcelCache(path, name) {
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
    get_a_1_1() {
      return this.b42+"×"+this.b42+"×"+this.b40;
    },
    get_a_1_2() {
      return (parseFloat(this.b11) * parseFloat(this.b34));
    },
    get_a_2_1() {
      return this.b73+"×"+this.b73+"×"+this.b71;
    },
    get_a_2_2() {
      return (parseFloat(this.b11));
    },
    get_a_3_1() {
      return this.b94+"×"+this.b94+"×"+this.b156;
    },
    get_a_3_2() {
      return (parseFloat(this.b11));
    },
    get_b_1_1() {
      return "池径"+this.b94+"m，池边高度"+this.b156+"m，N="+this.b169+"kW"
    },
    get_b_1_2() {
      return (parseFloat(this.b11));
    },
    get_b_2_1() {
      return "Φ50mm，L=750mm";
    },
    get_b_2_2() {
      return (this.ROUNDUP(parseFloat(this.b104_0)*1.05*parseFloat(this.b11),0)).toFixed(0);
    },
    get_b_3_1() {
      return "L×B×H="+(parseFloat(this.b109)*1000)+"×"+(parseFloat(this.b110)*1000)+"×"+(parseFloat(this.b111)*1000)+"mm，δ=5mm";
    },
    get_b_3_2() {
      return (parseFloat(this.b11) * parseFloat(this.b108));
    },
    get_b_4_1() {
      return "L=3.5m；厚度3mm";
    },
    get_b_4_2() {
      return (parseFloat(this.b11));
    },
    get_b_5_1() {
      return "L×B="+this.b26+"×"+this.b27+"m";
    },
    get_b_5_2() {
      return (parseFloat(this.b11));
    },
    get_b_6_1() {
      return "L×B="+this.b29+"×"+this.b30+"m";
    },
    get_b_6_2() {
      return (parseFloat(this.b11));
    },
    get_b_7_1() {
      return "Φ="+this.b315+"m，H="+this.b322+"m，δ=5mm";
    },
    get_b_7_2() {
      return (parseFloat(this.b11));
    },
    get_b_8_1() {
      return "Φ="+this.b315+"m，H="+this.b322+"m，δ=5mm";
    },
    get_b_8_2() {
      return (parseFloat(this.b11));
    },
    get_b_9_1() {
      return "Φ=1.4m，DN32";
    },
    get_b_9_2() {
      return (parseFloat(this.b11));
    },
    get_b_10_1() {
      return "池深"+this.b40+"m，N="+this.b293+"kW，R="+this.b299+"rpm，叶轮直径"+(parseFloat(this.b297)*1000)+"mm";
    },
    get_b_10_2() {
      return (parseFloat(this.b11));
    },
    get_b_11_1() {
      return "池深"+(this.ROUND(parseFloat(this.b71),2))+"m，N="+(this.ROUND(parseFloat(this.b304),2))+"kW，R="+this.b308+"~"+this.b309+"rpm，叶轮直径"+(parseFloat(this.b307)*1000)+"mm";
    },
    get_b_11_2() {
      return (parseFloat(this.b11));
    },
    get_b_12_1() {
      return "Q="+this.b379+"m³/h，H="+(Math.max(parseFloat(this.b411_3), parseFloat(this.b373_3)))+"MPa，N="+this.b412_3+"kW";
    },
    get_b_12_2() {
      return (parseFloat(this.b11));
    },
    get_b_13_1() {
      return "Q="+this.b338+"m³/h，H="+(Math.max(parseFloat(this.b411_3), parseFloat(this.b373_3)))+"MPa，N="+(Math.max(parseFloat(this.b412_3), parseFloat(this.b374_3)))+"kW";
    },
    get_b_13_2() {
      return (parseFloat(this.b11) * parseFloat(this.b337));
    },
    get_b_14_1() {
      return "撇渣管长5.7m";
    },
    get_b_14_2() {
      return 8;
    },
    get_c_1_1() {
      return "一体式，DN1500，Q=0~"+this.b9+"m³/h，4~20mA信号输出，就地显示，电源：220V";
    },
    get_c_1_2() {
      return 1;
    },
    get_c_2_1() {
      return "0~1.2m，高液位报警";
    },
    get_c_2_2() {
      return 1;
    },
    get_c_3_1() {
      return "pH量程：0~14，温度量程：15~50℃，4~20mA信号输出";
    },
    get_c_3_2() {
      return 1;
    },
    get_c_4_1() {
      return "0~5000NTU，4~20mA信号输出";
    },
    get_c_4_2() {
      return 1;
    },
    get_c_5_1() {
      return "0~"+this.b156+"m，4~20mA信号输出";
    },
    get_c_5_2() {
      return (parseFloat(this.b11));
    },
    get_c_6_1() {
      return "隔膜式压力表，外壳AISI304，测量元件AISI316，测量范围：0~0.6MPa，Φ100mm";
    },
    get_c_6_2() {
      return (parseFloat(this.b11));
    },
    get_c_7_1() {
      return "隔膜式压力表，外壳AISI304，测量元件AISI316，测量范围：0~0.6MPa，Φ100mm";
    },
    get_c_7_2() {
      return (parseFloat(this.b11) * parseFloat(this.b337));
    },
    get_c_8_1() {
      return "一体式，DN"+this.b343_0+"，Q=0~"+this.b257+"m³/h，4~20mA信号输出，就地显示，电源：220V";
    },
    get_c_8_2() {
      return (parseFloat(this.b11));
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
    b156_0() {
      return (parseFloat(this.b167) + parseFloat(this.b168) + parseFloat(this.b166)).toFixed(2);
    },
    b156() {
      return (this.ROUND(parseFloat(this.b156_0), 2)).toFixed(2);
    },
    b157() {
      return this.b111;
    },
    b158() {
      return (parseFloat(this.b110)/2).toFixed(2);
    },
    b159_0() {
      return (parseFloat(this.b100) *
        Math.sin(parseFloat(this.b98) * (Math.PI / 180)) / 1000
      ).toFixed(2);
    },
    b159() {
      return this.b159_0;
    },
    b164() {
      return this.b155;
    },
    b165() {
      return this.b153;
    },
    b166() {
      return this.b150;
    },
    b167() {
      return (parseFloat(this.b157) + parseFloat(this.b158) + parseFloat(this.b159) + parseFloat(this.b160) + 
      parseFloat(this.b161) + parseFloat(this.b162) + parseFloat(this.b163) + parseFloat(this.b164) + parseFloat(this.b165) -
      parseFloat(this.b121)
      ).toFixed(2);
    },
    b172() {
      return (parseFloat(this.b172_0)).toFixed(2);
    },
    b173() {
      return (parseFloat(this.b173_0)).toFixed(2);
    },
    b175_0() {
      return (parseFloat(this.b173_0) + parseFloat(this.b174)).toFixed(2);
    },
    b175() {
      return (parseFloat(this.b175_0)).toFixed(2);
    },
    b176_0() {
      return (parseFloat(this.b9)/parseFloat(this.b172_0)/parseFloat(this.b173_0)/3600/2).toFixed(3);
    },
    b180_0() {
      return (parseFloat(this.b9)/parseFloat(this.b179)/1000).toFixed(2);
    },
    b181_0() {
      return (parseFloat(this.b180_0) * 24).toFixed(2);
    },
    b184_0() {
      return (parseFloat(this.b181_0)/(parseFloat(this.b182)/100)).toFixed(2);
    },
    b185_0() {
      return ((parseFloat(this.b184_0)-parseFloat(this.b181_0))/parseFloat(this.b183)/24).toFixed(2);
    },
    b186_0() {
      return (parseFloat(this.b181_0)/24/parseFloat(this.b182)/parseFloat(this.b183)*1000).toFixed(2);
    },
    b187_0() {
      return (parseFloat(this.b186_0) * 1.3).toFixed(2);
    },
    b187() {
      return (parseFloat(this.b187_0)).toFixed(2);
    },
    b188_0() {
      return (parseFloat(this.b187)/parseFloat(this.b11)).toFixed(2);
    },
    b191_0() {
      return (parseFloat(this.b9)/parseFloat(this.b190)/1000).toFixed(2);
    },
    b192_0() {
      return (parseFloat(this.b191_0) * 24).toFixed(2);
    },
    b196_0() {
      return (parseFloat(this.b192_0)/(parseFloat(this.b194)/100)).toFixed(2);
    },
    b196() {
      return this.b196_0;
    },
    b197_0() {
      return ((parseFloat(this.b196_0)-parseFloat(this.b192_0))/parseFloat(this.b195)/24).toFixed(2);
    },
    b197() {
      return (parseFloat(this.b197_0)).toFixed(1);
    },
    b198_0() {
      return (parseFloat(this.b191_0)/parseFloat(this.b195)/(parseFloat(this.b193)/100)*1000).toFixed(2);
    },
    b199_0() {
      return (parseFloat(this.b197_0) + parseFloat(this.b198_0)/1000).toFixed(2);
    },
    b200_0() {
      return (parseFloat(this.b198_0) * 1.3).toFixed(2);
    },
    b200() {
      return this.b200_0;
    },
    b201_0() {
      return (parseFloat(this.b200)/parseFloat(this.b11)).toFixed(2);
    },
    b201() {
      return this.b201_0;
    },
    b218_0() {
      return (28*(
        2*parseFloat(this.b206) - parseFloat(this.b204) + parseFloat(this.b214) + parseFloat(this.b215) + parseFloat(this.b216) + parseFloat(this.b217)
      )).toFixed(2);
    },
    b221_0() {
      return (parseFloat(this.b218_0) * 74 / 56 /(parseFloat(this.b219)/100)/(parseFloat(this.b220)/100)).toFixed(2);
    },
    b221() {
      return (parseFloat(this.b221_0)).toFixed(2);
    },
    b222_0() {
      return (parseFloat(this.b9) * parseFloat(this.b221)/1000).toFixed(2);
    },
    b223_0() {
      return ((parseFloat(this.b9) * (parseFloat(this.b218_0) * 74 / 56 /(parseFloat(this.b219)/100)/(parseFloat(this.b220)/100))/1000) * 24).toFixed(2);
    },
    b226_0() {
      return (parseFloat(this.b223_0)/(parseFloat(this.b224)/100)).toFixed(2);
    },
    b227_0() {
      return ((parseFloat(this.b226_0)-parseFloat(this.b223_0))/parseFloat(this.b225)/24).toFixed(2);
    },
    b228_0() {
      return (parseFloat(this.b222_0)/(parseFloat(this.b224)/100)/parseFloat(this.b225)*1000).toFixed(2);
    },
    b229_0() {
      return (parseFloat(this.b228_0) * 1.2 /1000).toFixed(2);
    },
    b230_0() {
      return (parseFloat(this.b229) / 4).toFixed(2);
    },
    b230() {
      return this.b230_0;
    },
    b234_0() {
      return (53 * (parseFloat(this.b207) + parseFloat(this.b232))/(parseFloat(this.b233)/100)).toFixed(2);
    },
    b234() {
      return this.b234_0;
    },
    b235_0() {
      return (parseFloat(this.b9)*(53 * (parseFloat(this.b207) + parseFloat(this.b232))/(parseFloat(this.b233)/100))/1000).toFixed(2);
    },
    b236_0() {
      return ((parseFloat(this.b9)*(53 * (parseFloat(this.b207) + parseFloat(this.b232))/(parseFloat(this.b233)/100))/1000) * 24).toFixed(2);
    },
    b239_0() {
      return (((parseFloat(this.b9)*(53 * (parseFloat(this.b207) + parseFloat(this.b232))/(parseFloat(this.b233)/100))/1000) * 24)/(parseFloat(this.b237)/100)).toFixed(2);
    },
    b240_0() {
      return ((parseFloat(this.b239_0)-parseFloat(this.b236_0)/parseFloat(this.b238)/24)).toFixed(2);
    },
    b241_0() {
      return (parseFloat(this.b235_0)/(parseFloat(this.b237)/100)/parseFloat(this.b238)*1000).toFixed(2);
    },
    b242_0() {
      return (parseFloat(this.b241_0)*1.2/1000).toFixed(2);
    },
    b242() {
      return this.b242_0;
    },
    b246_0() {
      return (parseFloat(this.b9)*parseFloat(this.b245)/1000).toFixed(2);
    },
    b248_0() {
      return (parseFloat(this.b246_0) * 24).toFixed(2);
    },
    b249_0() {
      return (parseFloat(this.b248_0)/(parseFloat(this.b247)/100)).toFixed(2);
    },
    b251_0() {
      return (parseFloat(this.b249_0)/parseFloat(this.b250)).toFixed(2);
    },
    b251() {
      return this.b251_0;
    },
    b252_0() {
      return (parseFloat(this.b251)/24*1000).toFixed(2);
    },
    b253_0() {
      return (parseFloat(this.b252_0) * 1.2).toFixed(2);
    },
    b253() {
      return this.b253_0;
    },
    b257_0() {
      return (parseFloat(this.b256)/100*parseFloat(this.b25)).toFixed(2);
    },
    b263_0() {
      return (parseFloat(this.b9)*parseFloat(this.b262)*(parseFloat(this.b260_0)-parseFloat(this.b261_0))/1000).toFixed(2);
    },
    b264_0() {
      return this.b179;
    },
    b266_0() {
      return (parseFloat(this.b264_0)*parseFloat(this.b9)*parseFloat(this.b265)/1000).toFixed(2);
    },
    b267_0() {
      return this.b190;
    },
    b268_0() {
      return (parseFloat(this.b267_0) * parseFloat(this.b9) /1000).toFixed(2);
    },
    b269_0() {
      return this.b221;
    },
    b270_0() {
      return (parseFloat(this.b9) * parseFloat(this.b269_0) * (parseFloat(this.b219)/100)/1000 * 200/74).toFixed(2);
    },
    b271_0() {
      return (parseFloat(this.b9) * parseFloat(this.b269_0) * (1-(parseFloat(this.b219))/100)/1000).toFixed(2);
    },
    b272_0() {
      return (parseFloat(this.b270_0) + parseFloat(this.b271_0)).toFixed(2);
    },
    b273_0() {
      return (parseFloat(this.b234)).toFixed(2);
    },
    b274_0() {
      return (parseFloat(this.b9)*parseFloat(this.b273_0)*(parseFloat(this.b233)/100)/1000*100/106).toFixed(2);
    },
    b276_0() {
      return (parseFloat(this.b263_0) + parseFloat(this.b266_0) + parseFloat(this.b268_0)  + parseFloat(this.b272_0) + parseFloat(this.b274_0)).toFixed(2);
    },
    b276() {
      return this.b276_0;
    },
    b277_0() {
      return (parseFloat(this.b276) * 24).toFixed(2);
    },
    b277() {
      return this.b277_0;
    },
    b279_0() {
      return ((1-(parseFloat(this.b278)/1000))*100).toFixed(1);
    },
    b280_0() {
      return (parseFloat(this.b276_0)/(1-(parseFloat(this.b279_0)/100))/1000).toFixed(2);
    },
    b280() {
      return this.b280_0;
    },
    b281_0() {
      return (parseFloat(this.b280) * 24).toFixed(2);
    },
    b281() {
      return this.b281_0;
    },
    b282_0() {
      return this.b257;
    },
    b283_0() {
      return (parseFloat(this.b280)/parseFloat(this.b11)/parseFloat(this.b282_0) * 60).toFixed(3);
    },
    b289() {
      return (116.5 * 9.8 * 0.000001).toFixed(5);
    },
    b290_0() {
      return (parseFloat(this.b289) * (Math.pow(parseFloat(this.b287),2)) * parseFloat(this.b37_0) /1000).toFixed(2);
    },
    b293_0() {
      return (parseFloat(this.b290_0)/(parseFloat(this.b291)*parseFloat(this.b292))).toFixed(2);
    },
    b294_0() {
      return (2 * parseFloat(this.b42) / Math.sqrt(3.14)).toFixed(2);
    },
    b295_0() {
      return (parseFloat(this.b38) / parseFloat(this.b294_0)).toFixed(2);
    },
    b297_0() {
      return (1/3*parseFloat(this.b294_0)).toFixed(2);
    },
    b297() {
      return (this.ROUND(parseFloat(this.b297_0),2)).toFixed(2);
    },
    b299_0() {
      return (60 * parseFloat(this.b298) / 3.14 / parseFloat(this.b297)).toFixed(2);
    },
    b299() {
      return (this.ROUND(parseFloat(this.b299_0),2)).toFixed(0);
    },
    b300_0() {
      return ((1/3*parseFloat(this.b294_0)) / 2).toFixed(2);
    },
    b300() {
      return this.b300_0;
    },
    b304_0() {
      return (parseFloat(this.b303)*parseFloat(this.b25)/1000);
    },
    b304() {
      return this.b304_0;
    },
    b307_0() {
      return (Math.pow((
        parseFloat(this.b304_0) * 1000 / (
          31.61 * Math.pow(parseFloat(this.b306), 3)
        )
      ),0.5)).toFixed(2);
    },
    b307() {
      return (this.ROUND(parseFloat(this.b307_0),2)).toFixed(2);
    },
    b308_0() {
      return (60 * parseFloat(this.b305)/3.14/parseFloat(this.b307)).toFixed(2);
    },
    b309_0() {
      return (60 * parseFloat(this.b306)/3.14/parseFloat(this.b307)).toFixed(2);
    },
    b310_0() {
      return (980 * parseFloat(this.b306) * Math.pow(parseFloat(this.b307), 2)).toFixed(2);
    },
    b310() {
      return this.b310_0;
    },
    b311_0() {
      return (1.1 * parseFloat(this.b307)).toFixed(2);
    },
    b311() {
      return (1.1 * parseFloat(this.b307)).toFixed(2);
    },
    b314_0() {
      return (parseFloat(this.b310)/3600).toFixed(2);
    },
    b315_0() {
      return (1.03 * parseFloat(this.b307)).toFixed(2);
    },
    b315() {
      return (this.ROUND(parseFloat(this.b315_0),2)).toFixed(2);
    },
    b316_0() {
      return (4 * (parseFloat(this.b310)/3600) / 
      (3.14 * (this.ROUND(parseFloat(this.b315_0),2)) *(this.ROUND(parseFloat(this.b315_0),2)))
      ).toFixed(2);
    },
    b318() {
      return (1.4 * parseFloat(this.b307)).toFixed(2);
    },
    b319() {
      return (1.732 * (parseFloat(this.b318) - parseFloat(this.b315)) / 2).toFixed(2);
    },
    b320() {
      return (0.4 * parseFloat(this.b307)).toFixed(2);
    },
    b321() {
      return (0.3 * parseFloat(this.b307)).toFixed(2);
    },
    b322() {
      return (this.ROUND((
        parseFloat(this.b71) - parseFloat(this.b70) - parseFloat(this.b320) - parseFloat(this.b321)
      ), 2)).toFixed(2);
    },
    b326_0() {
      return (Math.sqrt(
        (parseFloat(this.b199_0) / 2 / parseFloat(this.b11) / 3600 / parseFloat(this.b325)) * 4 / Math.PI
      ) * 1000).toFixed(2);
    },
    b327_0() {
      return (0.25 * parseFloat(this.b199_0)).toFixed(2);
    },
    b330_0() {
      return (4 * parseFloat(this.b327_0) / 3600 / 3.142 / (
        Math.pow(parseFloat(this.b329)/1000, 2)
      ) / parseFloat(this.b328)).toFixed(2);
    },
    b331_0() {
      return (4 * parseFloat(this.b327_0) / 3600 / parseFloat(this.b330) / 3.14 / (
        Math.pow(parseFloat(this.b329)/1000,2)
      )).toFixed(2);
    },
    b332_0() {
      return (0.7 * parseFloat(this.b315)).toFixed(2);
    },
    b337() {
      return (parseFloat(this.b335) + parseFloat(this.b336)).toFixed(2);
    },
    b338() {
      return this.b257;
    },
    b342_s() {
      return (parseFloat(this.b338)/3600).toFixed(3);
    },
    b342() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b342_3() {
      return (6.82 * parseFloat(this.b342_1)/(
        Math.pow(parseFloat(this.b342_0)/1000,1.17)
      )*(
        Math.pow(parseFloat(this.b342)/parseFloat(this.b342_2), 1.85)
      )).toFixed(3);
    },
    b343_s() {
      return this.b342_s;
    },
    b343() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b343_3() {
      return (6.82 * parseFloat(this.b343_1)/(
        Math.pow(parseFloat(this.b343_0)/1000,1.17)
      )*(
        Math.pow(parseFloat(this.b343)/parseFloat(this.b343_2), 1.85)
      )).toFixed(3);
    },
    b344_3() {
      return (parseFloat(this.b342_3) + parseFloat(this.b343_3)).toFixed(4);
    },
    b348_s() {
      return this.b342_s;
    },
    b349_s() {
      return this.b342_s;
    },
    b350_s() {
      return this.b342_s;
    },
    b351_s() {
      return this.b342_s;
    },
    b352_s() {
      return this.b342_s;
    },
    b353_s() {
      return this.b342_s;
    },
    b354_s() {
      return this.b342_s;
    },
    b355_s() {
      return this.b342_s;
    },
    b356_s() {
      return this.b342_s;
    },
    b358_s() {
      return this.b342_s;
    },
    b359_s() {
      return this.b342_s;
    },
    b360_s() {
      return this.b342_s;
    },
    b361_s() {
      return this.b342_s;
    },
    b362_s() {
      return this.b342_s;
    },
    b364_s() {
      return this.b342_s;
    },
    b365_s() {
      return this.b342_s;
    },
    b366_s() {
      return this.b342_s;
    },
    b348_0() {
      return this.b342_0;
    },
    b349_0() {
      return this.b342_0;
    },
    b350_0() {
      return this.b342_0;
    },
    b351_0() {
      return this.b342_0;
    },
    b352_0() {
      return this.b342_0;
    },
    b353_0() {
      return this.b342_0;
    },
    b354_0() {
      return this.b342_0;
    },
    b355_0() {
      return this.b342_0;
    },
    b356_0() {
      return this.b342_0;
    },
    b358_0() {
      return this.b343_0;
    },
    b359_0() {
      return this.b343_0;
    },
    b360_0() {
      return this.b343_0;
    },
    b361_0() {
      return this.b343_0;
    },
    b362_0() {
      return this.b343_0;
    },
    b364_0() {
      return this.b343_0;
    },
    b365_0() {
      return this.b343_0;
    },
    b366_0() {
      return this.b343_0;
    },
    b348() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b349() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b350() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b351() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b352() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b353() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b354() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b355() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b356() {
      return (4*parseFloat(this.b342_s)/(
        3.14 * Math.pow(parseFloat(this.b342_0)/1000,2)
      )).toFixed(2);
    },
    b358() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b359() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b360() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b361() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b362() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b364() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b365() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b366() {
      return (4* (parseFloat(this.b338)/3600) /(
        3.14 * Math.pow(parseFloat(this.b343_0)/1000,2)
      )).toFixed(2);
    },
    b348_3() {
      return (parseFloat(this.b348_2) * parseFloat(this.b348_1) * (
        Math.pow(parseFloat(this.b348),2)
      ) / (2*9.81)).toFixed(3);
    },
    b349_3() {
      return (parseFloat(this.b349_2) * parseFloat(this.b349_1) * (
        Math.pow(parseFloat(this.b349),2)
      ) / (2*9.81)).toFixed(3);
    },
    b350_3() {
      return (parseFloat(this.b350_2) * parseFloat(this.b350_1) * (
        Math.pow(parseFloat(this.b350),2)
      ) / (2*9.81)).toFixed(3);
    },
    b351_3() {
      return (parseFloat(this.b351_2) * parseFloat(this.b351_1) * (
        Math.pow(parseFloat(this.b351),2)
      ) / (2*9.81)).toFixed(3);
    },
    b352_3() {
      return (parseFloat(this.b352_2) * parseFloat(this.b352_1) * (
        Math.pow(parseFloat(this.b352),2)
      ) / (2*9.81)).toFixed(3);
    },
    b353_3() {
      return (parseFloat(this.b353_2) * parseFloat(this.b353_1) * (
        Math.pow(parseFloat(this.b353),2)
      ) / (2*9.81)).toFixed(3);
    },
    b354_3() {
      return (parseFloat(this.b354_2) * parseFloat(this.b354_1) * (
        Math.pow(parseFloat(this.b354),2)
      ) / (2*9.81)).toFixed(3);
    },
    b355_3() {
      return (parseFloat(this.b355_2) * parseFloat(this.b355_1) * (
        Math.pow(parseFloat(this.b355),2)
      ) / (2*9.81)).toFixed(3);
    },
    b356_3() {
      return (parseFloat(this.b356_2) * parseFloat(this.b356_1) * (
        Math.pow(parseFloat(this.b356),2)
      ) / (2*9.81)).toFixed(3);
    },
    b358_3() {
      return (parseFloat(this.b358_2) * parseFloat(this.b358_1) * (
        Math.pow(parseFloat(this.b358),2)
      ) / (2*9.81)).toFixed(3);
    },
    b359_3() {
      return (parseFloat(this.b359_2) * parseFloat(this.b359_1) * (
        Math.pow(parseFloat(this.b359),2)
      ) / (2*9.81)).toFixed(3);
    },
    b360_3() {
      return (parseFloat(this.b360_2) * parseFloat(this.b360_1) * (
        Math.pow(parseFloat(this.b360),2)
      ) / (2*9.81)).toFixed(3);
    },
    b361_3() {
      return (parseFloat(this.b361_2) * parseFloat(this.b361_1) * (
        Math.pow(parseFloat(this.b361),2)
      ) / (2*9.81)).toFixed(3);
    },
    b362_3() {
      return (parseFloat(this.b362_2) * parseFloat(this.b362_1) * (
        Math.pow(parseFloat(this.b362),2)
      ) / (2*9.81)).toFixed(3);
    },
    b364_3() {
      return (parseFloat(this.b364_2) * parseFloat(this.b364_1) * (
        Math.pow(parseFloat(this.b364),2)
      ) / (2*9.81)).toFixed(3);
    },
    b365_3() {
      return (parseFloat(this.b365_2) * parseFloat(this.b365_1) * (
        Math.pow(parseFloat(this.b365),2)
      ) / (2*9.81)).toFixed(3);
    },
    b366_3() {
      return (parseFloat(this.b366_2) * parseFloat(this.b366_1) * (
        Math.pow(parseFloat(this.b366),2)
      ) / (2*9.81)).toFixed(3);
    },
    b367_3() {
      return (parseFloat(this.b348_3) + 
      parseFloat(this.b349_3) + 
      parseFloat(this.b350_3) + 
      parseFloat(this.b351_3) + 
      parseFloat(this.b352_3) + 
      parseFloat(this.b353_3) + 
      parseFloat(this.b354_3) + 
      parseFloat(this.b355_3) + 
      parseFloat(this.b356_3) + 
      parseFloat(this.b358_3) + 
      parseFloat(this.b359_3) + 
      parseFloat(this.b360_3) + 
      parseFloat(this.b361_3) + 
      parseFloat(this.b362_3) + 
      parseFloat(this.b364_3) + 
      parseFloat(this.b365_3) + 
      parseFloat(this.b366_3)
      ).toFixed(3);
    },
    b368_3() {
      return ((parseFloat(this.b367_3) + parseFloat(this.b344_3)) * 1.3).toFixed(3);
    },
    b370_3() {
      return (parseFloat(this.b370) - parseFloat(this.b370_1)).toFixed(1);
    },
    b372_3() {
      return (parseFloat(this.b368_3) + parseFloat(this.b370_3) + parseFloat(this.b371_3)).toFixed(3);
    },
    b379() {
      return this.b338;
    },
    b383_s() {
      return (parseFloat(this.b379)/3600).toFixed(3);
    },
    b383() {
      return (4*parseFloat(this.b383_s)/(
        3.14 * Math.pow(parseFloat(this.b383_0)/1000,2)
      )).toFixed(2);
    },
    b383_3() {
      return (6.82 * parseFloat(this.b383_1)/(
        Math.pow(parseFloat(this.b383_0)/1000,1.17)
      )*(
        Math.pow(parseFloat(this.b383)/parseFloat(this.b383_2), 1.85)
      )).toFixed(3);
    },
    b384_s() {
      return this.b383_s;
    },
    b384() {
      return (4* (parseFloat(this.b379)/3600) /(
        3.14 * Math.pow(parseFloat(this.b384_0)/1000,2)
      )).toFixed(2);
    },
    b384_3() {
      return (6.82 * parseFloat(this.b384_1)/(
        Math.pow(parseFloat(this.b384_0)/1000,1.17)
      )*(
        Math.pow(parseFloat(this.b384)/parseFloat(this.b384_2), 1.85)
      )).toFixed(3);
    },
    b385_3() {
      return (parseFloat(this.b383_3) + parseFloat(this.b384_3)).toFixed(3);
    },
    b389_0() {
      return this.b383_0;
    },
    b390_0() {
      return this.b383_0;
    },
    b391_0() {
      return this.b383_0;
    },
    b392_0() {
      return this.b383_0;
    },
    b393_0() {
      return this.b383_0;
    },
    b394_0() {
      return this.b383_0;
    },
    b395_0() {
      return this.b383_0;
    },
    b396_0() {
      return this.b383_0;
    },
    b398_0() {
      return this.b384_0;
    },
    b399_0() {
      return this.b384_0;
    },
    b400_0() {
      return this.b384_0;
    },
    b401_0() {
      return this.b384_0;
    },
    b402_0() {
      return this.b384_0;
    },
    b403_0() {
      return this.b384_0;
    },
    b404_0() {
      return this.b384_0;
    },
    b389_s() {
      return this.b383_s;
    },
    b390_s() {
      return this.b383_s;
    },
    b391_s() {
      return this.b383_s;
    },
    b392_s() {
      return this.b383_s;
    },
    b393_s() {
      return this.b383_s;
    },
    b394_s() {
      return this.b383_s;
    },
    b395_s() {
      return this.b383_s;
    },
    b396_s() {
      return this.b383_s;
    },
    b398_s() {
      return this.b383_s;
    },
    b399_s() {
      return this.b383_s;
    },
    b400_s() {
      return this.b383_s;
    },
    b401_s() {
      return this.b383_s;
    },
    b402_s() {
      return this.b383_s;
    },
    b403_s() {
      return this.b383_s;
    },
    b404_s() {
      return this.b383_s;
    },
    b389() {
      return this.b383;
    },
    b390() {
      return this.b383;
    },
    b391() {
      return this.b383;
    },
    b392() {
      return this.b383;
    },
    b393() {
      return this.b383;
    },
    b394() {
      return this.b383;
    },
    b395() {
      return this.b383;
    },
    b396() {
      return this.b383;
    },
    b398() {
      return this.b384;
    },
    b399() {
      return this.b384;
    },
    b400() {
      return this.b384;
    },
    b401() {
      return this.b383;
    },
    b402() {
      return this.b384;
    },
    b403() {
      return this.b384;
    },
    b404() {
      return this.b384;
    },
    b389_3() {
      return (parseFloat(this.b389_2) * parseFloat(this.b389_1) * (
        Math.pow(parseFloat(this.b389),2)
      ) / (2*9.81)).toFixed(3);
    },
    b390_3() {
      return (parseFloat(this.b390_2) * parseFloat(this.b390_1) * (
        Math.pow(parseFloat(this.b390),2)
      ) / (2*9.81)).toFixed(3);
    },
    b391_3() {
      return (parseFloat(this.b391_2) * parseFloat(this.b391_1) * (
        Math.pow(parseFloat(this.b391),2)
      ) / (2*9.81)).toFixed(3);
    },
    b392_3() {
      return (parseFloat(this.b392_2) * parseFloat(this.b392_1) * (
        Math.pow(parseFloat(this.b392),2)
      ) / (2*9.81)).toFixed(3);
    },
    b393_3() {
      return (parseFloat(this.b393_2) * parseFloat(this.b393_1) * (
        Math.pow(parseFloat(this.b393),2)
      ) / (2*9.81)).toFixed(3);
    },
    b394_3() {
      return (parseFloat(this.b394_2) * parseFloat(this.b394_1) * (
        Math.pow(parseFloat(this.b394),2)
      ) / (2*9.81)).toFixed(3);
    },
    b395_3() {
      return (parseFloat(this.b395_2) * parseFloat(this.b395_1) * (
        Math.pow(parseFloat(this.b395),2)
      ) / (2*9.81)).toFixed(3);
    },
    b396_3() {
      return (parseFloat(this.b396_2) * parseFloat(this.b396_1) * (
        Math.pow(parseFloat(this.b396),2)
      ) / (2*9.81)).toFixed(3);
    },
    b398_3() {
      return (parseFloat(this.b398_2) * parseFloat(this.b398_1) * (
        Math.pow(parseFloat(this.b398),2)
      ) / (2*9.81)).toFixed(3);
    },
    b399_3() {
      return (parseFloat(this.b399_2) * parseFloat(this.b399_1) * (
        Math.pow(parseFloat(this.b399),2)
      ) / (2*9.81)).toFixed(3);
    },
    b400_3() {
      return (parseFloat(this.b400_2) * parseFloat(this.b400_1) * (
        Math.pow(parseFloat(this.b400),2)
      ) / (2*9.81)).toFixed(3);
    },
    b401_3() {
      return (parseFloat(this.b401_2) * parseFloat(this.b401_1) * (
        Math.pow(parseFloat(this.b401),2)
      ) / (2*9.81)).toFixed(3);
    },
    b402_3() {
      return (parseFloat(this.b402_2) * parseFloat(this.b402_1) * (
        Math.pow(parseFloat(this.b402),2)
      ) / (2*9.81)).toFixed(3);
    },
    b403_3() {
      return (parseFloat(this.b403_2) * parseFloat(this.b403_1) * (
        Math.pow(parseFloat(this.b403),2)
      ) / (2*9.81)).toFixed(3);
    },
    b404_3() {
      return (parseFloat(this.b404_2) * parseFloat(this.b404_1) * (
        Math.pow(parseFloat(this.b404),2)
      ) / (2*9.81)).toFixed(3);
    },
    b405_3() {
      return (parseFloat(this.b389_3) + 
      parseFloat(this.b390_3) + 
      parseFloat(this.b391_3) + 
      parseFloat(this.b392_3) + 
      parseFloat(this.b393_3) + 
      parseFloat(this.b394_3) + 
      parseFloat(this.b395_3) + 
      parseFloat(this.b396_3) + 
      parseFloat(this.b398_3) + 
      parseFloat(this.b399_3) + 
      parseFloat(this.b400_3) + 
      parseFloat(this.b401_3) + 
      parseFloat(this.b402_3) + 
      parseFloat(this.b403_3) + 
      parseFloat(this.b404_3)
      ).toFixed(3);
    },
    b406_3() {
      return ((parseFloat(this.b405_3) + parseFloat(this.b385_3)) * 1.3).toFixed(3);
    },
    b408_3() {
      return (parseFloat(this.b408) - parseFloat(this.b408_0)).toFixed(2);
    },
    b410_3() {
      return (parseFloat(this.b406_3) + parseFloat(this.b408_3) + parseFloat(this.b409_3)).toFixed(3);
    },
    data1() {
      return [
      {
        序号: "1",
        单体位号: "",
        名称: "混合池",
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_1_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
      {
        序号: "2",
        单体位号: "",
        名称: "絮凝区",
        尺寸: this.get_a_2_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_2_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
      {
        序号: "3",
        单体位号: "",
        名称: "沉淀区",
        尺寸: this.get_a_3_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_3_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
    ];
    },
    data2() {
      return [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "刮泥机",
        设备类型: "中心传动刮泥机",
        规格及型号: this.get_b_1_1(),
        单位: "套",
        数量: this.get_b_1_2(),
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
        规格及型号: this.get_b_2_1(),
        单位: "m²",
        数量: this.get_b_2_2(),
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
        规格及型号: this.get_b_3_1(),
        单位: "套",
        数量: this.get_b_3_2(),
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
        规格及型号: this.get_b_4_1(),
        单位: "个",
        数量: this.get_b_4_2(),
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
        规格及型号: this.get_b_5_1(),
        单位: "套",
        数量: this.get_b_5_2(),
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
        规格及型号: this.get_b_6_1(),
        单位: "套",
        数量: this.get_b_6_2(),
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
        规格及型号: this.get_b_7_1(),
        单位: "个",
        数量: this.get_b_7_2(),
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
        规格及型号: this.get_b_8_1(),
        单位: "套",
        数量: this.get_b_8_2(),
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
        规格及型号: this.get_b_9_1(),
        单位: "套",
        数量: this.get_b_9_2(),
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
        规格及型号: this.get_b_10_1(),
        单位: "台",
        数量: this.get_b_10_2(),
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
        规格及型号: this.get_b_11_1(),
        单位: "台",
        数量: this.get_b_11_2(),
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
        规格及型号: this.get_b_12_1(),
        单位: "台",
        数量: this.get_b_12_2(),
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
        规格及型号: this.get_b_13_1(),
        单位: "台",
        数量: this.get_b_13_2(),
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
        规格及型号: this.get_b_14_1(),
        单位: "台",
        数量: this.get_b_14_2(),
        备注: "带撇渣管及手动控制器",
        主要材质: "",
        生产厂家: "",
        与基础设计不同之处: "",
      },
    ];
    },
    data3() {
      return [
      {
        序号: "1",
        仪表位号: "",
        安装位置: "进水管",
        仪表名称: "超声波流量计",
        规格及型号: this.get_c_1_1(),
        单位: "台",
        数量: this.get_c_1_2(),
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
        规格及型号: this.get_c_2_1(),
        单位: "个",
        数量: this.get_c_2_2(),
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
        规格及型号: this.get_c_3_1(),
        单位: "台",
        数量: this.get_c_3_2(),
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
        规格及型号: this.get_c_4_1(),
        单位: "台",
        数量: this.get_c_4_2(),
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
        规格及型号: this.get_c_5_1(),
        单位: "台",
        数量: this.get_c_5_2(),
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
        规格及型号: this.get_c_6_1(),
        单位: "台",
        数量: this.get_c_6_2(),
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
        规格及型号: this.get_c_7_1(),
        单位: "台",
        数量: this.get_c_7_2(),
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
        规格及型号: this.get_c_8_1(),
        单位: "台",
        数量: this.get_c_8_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
      },
    ];
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
        序号: "1",
        单体位号: "",
        名称: "混合池",
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_1_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
      {
        序号: "2",
        单体位号: "",
        名称: "絮凝区",
        尺寸: this.get_a_2_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_2_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
      {
        序号: "3",
        单体位号: "",
        名称: "沉淀区",
        尺寸: this.get_a_3_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_3_2(),
        结构形式: "钢砼",
        备注: "地上，无盖；池顶设置走道及栏杆。",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "刮泥机",
        设备类型: "中心传动刮泥机",
        规格及型号: this.get_b_1_1(),
        单位: "套",
        数量: this.get_b_1_2(),
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
        规格及型号: this.get_b_2_1(),
        单位: "m²",
        数量: this.get_b_2_2(),
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
        规格及型号: this.get_b_3_1(),
        单位: "套",
        数量: this.get_b_3_2(),
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
        规格及型号: this.get_b_4_1(),
        单位: "个",
        数量: this.get_b_4_2(),
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
        规格及型号: this.get_b_5_1(),
        单位: "套",
        数量: this.get_b_5_2(),
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
        规格及型号: this.get_b_6_1(),
        单位: "套",
        数量: this.get_b_6_2(),
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
        规格及型号: this.get_b_7_1(),
        单位: "个",
        数量: this.get_b_7_2(),
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
        规格及型号: this.get_b_8_1(),
        单位: "套",
        数量: this.get_b_8_2(),
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
        规格及型号: this.get_b_9_1(),
        单位: "套",
        数量: this.get_b_9_2(),
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
        规格及型号: this.get_b_10_1(),
        单位: "台",
        数量: this.get_b_10_2(),
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
        规格及型号: this.get_b_11_1(),
        单位: "台",
        数量: this.get_b_11_2(),
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
        规格及型号: this.get_b_12_1(),
        单位: "台",
        数量: this.get_b_12_2(),
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
        规格及型号: this.get_b_13_1(),
        单位: "台",
        数量: this.get_b_13_2(),
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
        规格及型号: this.get_b_14_1(),
        单位: "台",
        数量: this.get_b_14_2(),
        备注: "带撇渣管及手动控制器",
        主要材质: "",
        生产厂家: "",
        与基础设计不同之处: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        安装位置: "进水管",
        仪表名称: "超声波流量计",
        规格及型号: this.get_c_1_1(),
        单位: "台",
        数量: this.get_c_1_2(),
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
        规格及型号: this.get_c_2_1(),
        单位: "个",
        数量: this.get_c_2_2(),
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
        规格及型号: this.get_c_3_1(),
        单位: "台",
        数量: this.get_c_3_2(),
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
        规格及型号: this.get_c_4_1(),
        单位: "台",
        数量: this.get_c_4_2(),
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
        规格及型号: this.get_c_5_1(),
        单位: "台",
        数量: this.get_c_5_2(),
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
        规格及型号: this.get_c_6_1(),
        单位: "台",
        数量: this.get_c_6_2(),
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
        规格及型号: this.get_c_7_1(),
        单位: "台",
        数量: this.get_c_7_2(),
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
        规格及型号: this.get_c_8_1(),
        单位: "台",
        数量: this.get_c_8_2(),
        备注: "",
        生产厂家: "",
        a: "",
        与基础设计不同处: "",
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
