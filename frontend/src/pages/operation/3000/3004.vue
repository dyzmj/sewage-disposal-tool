<template>
  <div class="calc_page" style="background-color: #edeff2">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px; margin-left: 0px"
        :xl="8"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :title="$t('b2')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 4 }"
                :wrapperCol="{ span: 20 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    style="width: 25%"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                  <a-input
                    v-model="b3_1"
                    style="width: 25%"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3_1')"
                    :suffix="$t('b3_1_u')"
                  />
                  <a-input
                    v-model="b3_2"
                    style="width: 25%"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3_2')"
                    :suffix="$t('b3_2_u')"
                  />
                  <a-input
                    v-model="b3_3"
                    style="width: 25%"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3_3')"
                    :suffix="$t('b3_3_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b4')"
                style="margin-top: 10px"
                :labelCol="{ span: 14 }"
                :wrapperCol="{ span: 10 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b4"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b4')"
                    :suffix="$t('b4_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b4_1')"
                style="margin-top: 10px"
                :labelCol="{ span: 14 }"
                :wrapperCol="{ span: 10 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b4_1"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b4_1')"
                    :suffix="$t('b4_1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b5')"
                style="margin-top: 10px"
                :labelCol="{ span: 14 }"
                :wrapperCol="{ span: 10 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b5"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b5')"
                    :suffix="$t('b5_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b5_1')"
                style="margin-top: 10px"
                :labelCol="{ span: 14 }"
                :wrapperCol="{ span: 10 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b5_1"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b5_1')"
                    :suffix="$t('b5_1_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
          <a-card
            :title="$t('referenceImage')"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img width="400px" src="@/assets/img/5000/5001_1.png" />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
        </a-card>
      </a-col>
      <a-col
        style="padding: 14px 6px"
        :xl="8"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
      >
        <a-card
          :title="$t('b6')"
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
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b8')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b8"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b8_u')"
                    />
                    <a-input
                      v-model="b8_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b8_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b9')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b9"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b9_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b10')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b10"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b10_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b11')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b11"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b11_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b11_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b11_1"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b11_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b12')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b12"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b12_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b13')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b14')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b14"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b14_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b15')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b15"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b15_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b16')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b16"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b16_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b17')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b17"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b17_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b17_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b17_1"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b17_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b18')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b18"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b18_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b19')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b20')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b20"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b20_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b20_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b20_1"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b20_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b21')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b22')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b22"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b22_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b23')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b23"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b23_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b24')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b24"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b24_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b24_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b24_1"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b24_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b25')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b25"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b25_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b26')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b26"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b26_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b26_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b26_1"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b26_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b27')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b27"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b27_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b28')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b28"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b28_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b29')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b29"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b29_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b31')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b31"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b31_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b31_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b31_1"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b32')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b32"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b32_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b32_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b32_1"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b33')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b33"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b33_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b34')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b34"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b34_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b35')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b36')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b36"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b36_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b37')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b37"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b37_u')"
                    />
                    <a-input
                      v-model="b37_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b37_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b38')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b38"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b39')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b39"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b40')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b40"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b40_u')"
                    />
                    <a-input
                      v-model="b40_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b40_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b41')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b41"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b41_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b42')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b42"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b43')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b43"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b44')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b45')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b45"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b45_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b46')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b46"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b46_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b47')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b47"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b47_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b48')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b48"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b48_u')"
                    />
                    <a-input
                      v-model="b48_1"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b48_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b49')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b50')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b50"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b50_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b51')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b51"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b51_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b52')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b52"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b52_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b53')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b54')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b54"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b54_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b54_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b54_1"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b54_1_u')"
                    />
                    <a-input
                      v-model="b54_2"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b54_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b55')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b55"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b55_u')"
                    />
                    <a-input
                      v-model="b55_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b55_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b56')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b57')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b57"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b57_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b58')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b58"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b58_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b59')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b59"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b59_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b60')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b60"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b61')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b61"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b61_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b61_1"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b62')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b63')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b63"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b63_u')"
                    />
                    <a-input
                      v-model="b63_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b63_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b64')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b64"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b64_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b65')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b65"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b65_u')"
                    />
                    <a-input
                      v-model="b65_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b65_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b67')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b68')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b68"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b68_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b69')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b69"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b69_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b70')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b70"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b71')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b71"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b71_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b72')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b72"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b72_u')"
                    />
                    <a-input
                      v-model="b72_1"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b72_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b73')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b73"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b73_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b74')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b74"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b74_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b75')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b75"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b75_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b76')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b76"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b76_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b77')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b77"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b77_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b78')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b78"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b78_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b78_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b78_1"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b78_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b79')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b79"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b79_u')"
                    />
                    <a-input
                      v-model="b79_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b79_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b81')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b81"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b81_u')"
                    />
                    <a-input
                      v-model="b81_1"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b81_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b83')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b83"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b83_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b84')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b84"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b84_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b84_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b84_1"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b84_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b85')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b85"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b85_u')"
                    />
                    <a-input
                      v-model="b85_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b85_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b86')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b87')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b87"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b87_u')"
                    />
                    <a-input
                      v-model="b87_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b87_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b88')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b88"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b88_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b89')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b89"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b89_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b91')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b91"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b91_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b92')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b92"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b92_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b94')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b95')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b96')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b96"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b97')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b97"
                        style="width: 50%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b97_u')"
                      />
                      <a-input
                        v-model="b97_1"
                        style="width: 50%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b98')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b98"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b98_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b99')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b99"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b99_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b100')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b100"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b100_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b101')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b101"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b102')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b102"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b103')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b103"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b103_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b104')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b104"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b105')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b105"
                        style="width: 50%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b105_u')"
                      />
                      <a-input
                        v-model="b105_1"
                        style="width: 50%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b106')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b107')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b107"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b107_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b108')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b108"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b108_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b109')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b109"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b109_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b110')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b110"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b110_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b111')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b111"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b111_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b112')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form> </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b113')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b114')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b114"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b114_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b115')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b115"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b116')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b116"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b116_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b117')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b118')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b118"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b119')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b119"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b119_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b120')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b120"
                        style="width: 50%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b120_u')"
                      />
                      <a-input
                        v-model="b120_1"
                        style="width: 50%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b121')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 20 }"
                    :wrapperCol="{ span: 4 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b121"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b121_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b122')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b123')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b123"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b123_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b124')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b124"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b125')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b125"
                        style="width: 50%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b125_u')"
                      />
                      <a-input
                        v-model="b125_1"
                        style="width: 50%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>
        </a-card>
      </a-col>
      <a-col
        style="padding: 14px 6px; margin-right: 0px"
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
                <a-form-item style="margin-top: 50px; margin-bottom: 120px">
                  <a-button
                    style="margin-left: 30px"
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
import {
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3004"),
  data() {
    return {
      b3: "5250",
      b4: "1.2",
      b4_1: "100",
      b5: "4",
      b5_1: "5",
      b6: "",
      b7: "",
      b9: "0.05",
      b11_1: "0.05",
      b15: "0.3",
      b17_1: "0.05",
      b20_1: "0.001",
      b24_1: "14",
      b26: "0.5",
      b26_1: "2.6",
      b32_1: "0.05",
      b36: "0.6",
      b37: "50",
      b40: "60",
      b45: "0.25",
      b47: "0.4",
      b48_1: "2",
      b54_1: "150",
      b55_1: "0.1",
      b61_1: "1:1.6:7.2",
      b63: "300",
      b65: "200",
      b69: "7.8",
      b70: "1.5",
      b72_1: "0.3",
      b75: "0.45",
      b76: "0.05",
      b78: "25",
      b81_1: "0.25",
      b84: "0.7",
      b84_1: "0.22",
      b85_1: "0.6",
      b87: "15",
      b88: "2500",
      b92: "100",
      b93: "",
      b94: "",
      b95: "",
      b96: "0.7",
      b97_1: "2.00",
      b98: "1.2",
      b100: "0.05",
      b102: "1.8",
      b104: "3",
      b105_1: "0.15",
      b107: "1",
      b108_1: "2.00",
      b111: "6",
      b114: "1010",
      b115: "0.6",
      b118: "0.3",
      b120_1: "1.00",
      b124: "0.48",
      b125_1: "1.50",
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
              dataIndex: "标高",
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
              width: "50px",
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
        this.b3 = 40000;
      } else {
        this.b3 = waterData;
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
        exportExcel3(
          allData1,
          allData2,
          allData3,
          "机械搅拌澄清池工程量",
          this
        );
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
        key1: this.b3,
        key2: this.b3_1,
        key3: this.b4,
        key4: this.b5,
        key5: this.b4_1,
        key6: this.b5_1,
      };
      exportWord("机械搅拌澄清池计算书", "3004.docx", data, this);
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
    get_a_1() {
      return "Ø"+this.b23+"×"+this.b34+"m";
    },
    get_b_1() {
      return "叶轮直径"+this.b97_1+"m，n="+this.b99+"rpm，N="+this.b125_1+"kW";
    },
    get_b_2() {
      return "刮臂直径"+this.b23+"m，n=1~3rpm，N=1.5kW";
    },
    get_c_1() {
      return "0~"+this.b34+"m，4~20mA信号输出，就地显示";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(2);
    },
    b3_2() {
      return (parseFloat(this.b3_1) / 3.6).toFixed(2);
    },
    b3_3() {
      return (parseFloat(this.b3_2) / 1000).toFixed(2);
    },
    b8() {
      return (
        (parseFloat(this.b5) + 1) *
        (parseFloat(this.b3_1) / 3.6)
      ).toFixed(2);
    },
    b8_1() {
      return (parseFloat(this.b8) / 1000).toFixed(3);
    },
    b10() {
      return (parseFloat(this.b8_1) / parseFloat(this.b9)).toFixed(2);
    },
    b11() {
      return Math.pow((4 * parseFloat(this.b10)) / Math.PI, 0.5).toFixed(3);
    },
    b12() {
      return (parseFloat(this.b11) + 2 * parseFloat(this.b11_1)).toFixed(2);
    },
    b14() {
      return this.b10;
    },
    b16() {
      return (
        parseFloat(this.b15) +
        parseFloat(this.b14) +
        (Math.PI * Math.pow(parseFloat(this.b12), 2)) / 4
      ).toFixed(2);
    },
    b17() {
      return Math.pow((4 * parseFloat(this.b16)) / Math.PI, 0.5).toFixed(2);
    },
    b18() {
      return (parseFloat(this.b17) + parseFloat(this.b17_1) * 2).toFixed(2);
    },
    b20() {
      return (
        parseFloat(this.b3) /
        24 /
        3.6 /
        1000 /
        parseFloat(this.b20_1)
      ).toFixed(2);
    },
    b22() {
      return (
        parseFloat(this.b20) +
        (Math.PI * Math.pow(parseFloat(this.b18), 2)) / 4
      ).toFixed(2);
    },
    b23() {
      return this.ROUND(Math.pow((4 * parseFloat(this.b22)) / Math.PI, 0.5), 2);
    },
    b24() {
      return (parseFloat(this.b3_1) * parseFloat(this.b4)).toFixed(1);
    },
    b25() {
      return (parseFloat(this.b24) + parseFloat(this.b24_1)).toFixed(1);
    },
    b27() {
      return (
        (Math.PI * Math.pow(parseFloat(this.b23), 2) * parseFloat(this.b26_1)) /
        4
      ).toFixed(2);
    },
    b28() {
      return (parseFloat(this.b25) - parseFloat(this.b27)).toFixed(2);
    },
    b29() {
      return (parseFloat(this.b23) / 2).toFixed(1);
    },
    b31() {
      return 1.58;
    },
    b31_1() {
      return (
        Math.pow(parseFloat(this.b31), 3) -
        3 * parseFloat(this.b29) * Math.pow(parseFloat(this.b31), 2) +
        3 * Math.pow(parseFloat(this.b29), 2) * parseFloat(this.b31) -
        (3 * parseFloat(this.b28)) / Math.PI
      ).toFixed(5);
    },
    b32() {
      return (parseFloat(this.b23) - 2 * parseFloat(this.b31)).toFixed(2);
    },
    b33() {
      return ((parseFloat(this.b32) * parseFloat(this.b32_1)) / 2).toFixed(2);
    },
    b34() {
      return this.ROUND(
        parseFloat(this.b26) +
          parseFloat(this.b26_1) +
          parseFloat(this.b31) +
          parseFloat(this.b33),
        2
      );
    },
    b37_1() {
      return (parseFloat(this.b37) / 1000).toFixed(2);
    },
    b38() {
      return (
        (parseFloat(this.b8_1) * parseFloat(this.b36) * 60) /
        parseFloat(this.b10)
      ).toFixed(1);
    },
    b39() {
      return (
        ((parseFloat(this.b5) + 1) * (parseFloat(this.b3_1) / 3.6 / 1000)) /
        (Math.PI * parseFloat(this.b11) * parseFloat(this.b37_1))
      ).toFixed(2);
    },
    b40_1() {
      return (parseFloat(this.b40) / 1000).toFixed(2);
    },
    b41() {
      return ((parseFloat(this.b12) + parseFloat(this.b17)) / 2).toFixed(2);
    },
    b42() {
      return (
        parseFloat(this.b8_1) /
        (parseFloat(this.b40_1) * Math.PI * parseFloat(this.b41))
      ).toFixed(2);
    },
    b43() {
      return (parseFloat(this.b42) / Math.cos((45 * Math.PI) / 180)).toFixed(2);
    },
    b46() {
      return (parseFloat(this.b3_3) / (2 * parseFloat(this.b45))).toFixed(2);
    },
    b48() {
      return (
        parseFloat(this.b3_3) /
        (parseFloat(this.b47) * Math.PI * (parseFloat(this.b12) + 2 * 0.73))
      ).toFixed(3);
    },
    b50() {
      return (parseFloat(this.b12) + 2 * 0.75).toFixed(2);
    },
    b51() {
      return (
        parseFloat(this.b26_1) +
        parseFloat(this.b31) -
        parseFloat(this.b39) -
        parseFloat(this.b38)
      ).toFixed(2);
    },
    b52() {
      return (
        parseFloat(this.b32) +
        parseFloat(this.b18) / 2 +
        parseFloat(this.b31) -
        parseFloat(this.b32) / 2
      ).toFixed(2);
    },
    b54() {
      return (parseFloat(this.b5) * parseFloat(this.b3_3)).toFixed(3);
    },
    b54_2() {
      return (parseFloat(this.b54_1) / 1000).toFixed(2);
    },
    b55() {
      return (
        parseFloat(this.b54) /
        (parseFloat(this.b54_2) * Math.PI * parseFloat(this.b52))
      ).toFixed(3);
    },
    b57() {
      return (
        (Math.PI *
          Math.pow(parseFloat(this.b11), 2) *
          (parseFloat(this.b39) + parseFloat(this.b38))) /
          4 +
        (Math.PI *
          (Math.pow(parseFloat(this.b17), 2) -
            Math.pow(parseFloat(this.b12), 2)) *
          parseFloat(this.b38)) /
          4
      ).toFixed(2);
    },
    b58() {
      return (
        (Math.PI *
          (parseFloat(this.b51) - parseFloat(this.b33)) *
          (Math.pow(parseFloat(this.b52) / 2, 2) +
            Math.pow(parseFloat(this.b18) / 2, 2) +
            (parseFloat(this.b52) * parseFloat(this.b18)) / 4)) /
          3 +
        (Math.PI *
          parseFloat(this.b33) *
          (Math.pow(parseFloat(this.b52) / 2, 2) +
            Math.pow(parseFloat(this.b32) / 2, 2) +
            (parseFloat(this.b52) * parseFloat(this.b32)) / 4)) /
          3
      ).toFixed(2);
    },
    b59() {
      return (parseFloat(this.b24) -(parseFloat(this.b57)+parseFloat(this.b58))).toFixed(2);
    },
    b60() {
      return (parseFloat(this.b58)/parseFloat(this.b57)).toFixed(5);
    },
    b61() {
      return (parseFloat(this.b59)/parseFloat(this.b57)).toFixed(5);
    },
    b63_1() {
      return (parseFloat(this.b63)/1000).toFixed(1);
    },
    b64() {
      return (4 * parseFloat(this.b3_3) / (
        Math.PI * Math.pow(parseFloat(this.b63_1), 2)
      )).toFixed(2);
    },
    b65_1() {
      return (parseFloat(this.b65)/1000).toFixed(1);
    },
    b68() {
      return (Math.pow((
        ((0.45 * parseFloat(this.b20) + 
        Math.PI * Math.pow(parseFloat(this.b18),2) / 4
      )) * 4 / Math.PI
      ),0.5)).toFixed(2);
    },
    b71() {
      return (parseFloat(this.b3_3) * 1.5 / 2).toFixed(3);
    },
    b72() {
      return (0.9 * Math.pow(parseFloat(this.b71), 0.4)).toFixed(3);
    },
    b73() {
      return (0.75 * parseFloat(this.b72)).toFixed(3);
    },
    b74() {
      return (1.25 * parseFloat(this.b72)).toFixed(3);
    },
    b77() {
      return (parseFloat(this.b71) / (
        0.62 * Math.pow((2 * 9.81 *parseFloat(this.b76)), 0.5)
      )).toFixed(4);
    },
    b78_1() {
      return ((
        Math.PI * Math.pow(parseFloat(this.b78)/10, 2)
      )/4).toFixed(2);
    },
    b79() {
      return (parseFloat(this.b77) * 10000 / parseFloat(this.b78_1)).toFixed(3);
    },
    b79_1() {
      return this.ROUND(parseFloat(this.b79), 0);
    },
    b81() {
      return (2 * Math.PI * parseFloat(this.b69) / parseFloat(this.b79_1)).toFixed(5);
    },
    b83() {
      return (2 * parseFloat(this.b71)).toFixed(5);
    },
    b85() {
      return (parseFloat(this.b83) / (parseFloat(this.b84) * parseFloat(this.b84_1))).toFixed(5);
    },
    b87_1() {
      return (parseFloat(this.b87) / 60).toFixed(2);
    },
    b89() {
      return (parseFloat(this.b3_1) * (parseFloat(this.b4_1) - parseFloat(this.b5_1)) 
      * parseFloat(this.b87_1) / parseFloat(this.b88) 
    ).toFixed(2);
    },
    b91() {
      return ((1.6*1.6 + 
        0.4*0.4 + 
        Math.pow(1.6*1.6*0.4*0.4, 0.5))
        * 1.8 /3
      ).toFixed(3);
    },
    b97() {
      return (parseFloat(this.b96) * parseFloat(this.b11)).toFixed(2);
    },
    b99() {
      return this.ROUND(parseFloat(this.b98)/Math.PI/parseFloat(this.b97_1)*60, 2);
    },
    b101() {
      return (3.65 * parseFloat(this.b99) * Math.pow(parseFloat(this.b8_1),0.5)/(
        Math.pow(parseFloat(this.b100), 0.75)
      )).toFixed(2);
    },
    b103() {
      return (parseFloat(this.b97_1) / parseFloat(this.b102)).toFixed(2);
    },
    b105() {
      return (60*parseFloat(this.b8_1)/(
        parseFloat(this.b104) * parseFloat(this.b99) * Math.pow(parseFloat(this.b97_1), 2)
      )).toFixed(2);
    },
    b108() {
      return (60*parseFloat(this.b107)/Math.PI/parseFloat(this.b99)).toFixed(2);
    },
    b109() {
      return (parseFloat(this.b51) / 3).toFixed(2);
    },
    b110() {
      return (parseFloat(this.b109) / 3).toFixed(2);
    },
    b116() {
      return (parseFloat(this.b114) * parseFloat(this.b8_1) * parseFloat(this.b100) / 102 /parseFloat(this.b115)).toFixed(2);
    },
    b119() {
      return (2 * parseFloat(this.b107) / parseFloat(this.b108_1)).toFixed(2);
    },
    b120() {
      return (parseFloat(this.b108_1) / 2 - parseFloat(this.b110)).toFixed(2);
    },
    b121() {
      return (parseFloat(this.b118) * parseFloat(this.b114) * 
      Math.pow(parseFloat(this.b119),3) * parseFloat(this.b109) / 
      400 / 9.81 * (
        (Math.pow(parseFloat(this.b108_1)/2, 4)) - 
        (Math.pow(parseFloat(this.b120_1)/2, 4))
      ) * parseFloat(this.b111)
    ).toFixed(2);
    },
    b123() {
      return (parseFloat(this.b116) + parseFloat(this.b121)).toFixed(2);
    },
    b125() {
      return (parseFloat(this.b123) / parseFloat(this.b124)).toFixed(2);
    },
    data1() {
      return [
      {
        序号: "",
        单体位号: "",
        名称: "机械搅拌澄清池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: "m",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    },
    data2() {
      return [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "澄清池搅拌机",
        设备类型: "提升搅拌机",
        规格及型号: this.get_b_1(),
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
        规格及型号: this.get_b_2(),
        单位: "台",
        数量: "1",
        运行时间: "",
        主要材质: "液下部分SS304，刮板橡胶",
        备注: "",
      },
    ];
    },
    data3() {
      return [
      {
        序号: "1",
        仪表位号: "1",
        安装位置: "污泥斗",
        仪表名称: "超声波泥位计",
        规格及型号: this.get_c_1(),
        单位: "台",
        数量: "1",
        备注: "",
        生产厂家: "",
        a: "",
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
        序号: "",
        单体位号: "",
        名称: "机械搅拌澄清池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: "m",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "澄清池搅拌机",
        设备类型: "提升搅拌机",
        规格及型号: this.get_b_1(),
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
        规格及型号: this.get_b_2(),
        单位: "台",
        数量: "1",
        运行时间: "",
        主要材质: "液下部分SS304，刮板橡胶",
        备注: "",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "1",
        安装位置: "污泥斗",
        仪表名称: "超声波泥位计",
        规格及型号: this.get_c_1(),
        单位: "台",
        数量: "1",
        备注: "",
        生产厂家: "",
        a: "",
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
