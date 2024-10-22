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
            :title="$t('b2')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b3')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b7')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b7"
                      rows="12"
                      :placeholder="$t('b7')"
                      :suffix="$t('b7_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b8')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b8"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b8')"
                      :suffix="$t('b8_u')"
                    />
                    <a-input
                      v-model="b8_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b8_1')"
                      :suffix="$t('b8_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b9')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b9"
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b10')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('referenceImage')"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
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
          :title="$t('b11')"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b12')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b13')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b13"
                      style="width: 33%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b13_u')"
                    />
                    <a-input
                      v-model="b13_1"
                      style="width: 33%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b13_1_u')"
                    />
                    <a-input
                      v-model="b13_2"
                      style="width: 34%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b13_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b14')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b14"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b14_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b14_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b14_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b15')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b15"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b15_u')"
                      :disabled="false"
                    />
                    <a-input
                      v-model="b15_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b15_1_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b16')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b16"
                      rows="12"
                      :suffix="$t('b16_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b17')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b18')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b18"
                      style="width: 50%"
                      rows="12"
                      :disabled="false"
                    />
                    <a-input
                      v-model="b18_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b18_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b19')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b19"
                      rows="12"
                      :suffix="$t('b19_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b20')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b20"
                      rows="12"
                      :suffix="$t('b20_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b21')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b21"
                      rows="12"
                      :suffix="$t('b21_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b22')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b22"
                      rows="12"
                      :suffix="$t('b22_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b23')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b23"
                      :suffix="$t('b23_u')"
                      rows="12"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b24')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b25')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b25"
                      rows="12"
                      :suffix="$t('b25_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b26')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b26"
                      rows="12"
                      :suffix="$t('b26_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b27')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b27"
                      rows="12"
                      :suffix="$t('b27_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b28')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b28"
                      rows="12"
                      :suffix="$t('b28_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b29')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b30')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b30"
                      rows="12"
                      :suffix="$t('b30_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b31')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b31"
                      rows="12"
                      :suffix="$t('b31_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b32')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b32"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b32_u')"
                      :disabled="false"
                    />
                    <a-input
                      v-model="b32_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b32_1_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b33')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b33"
                      rows="12"
                      :suffix="$t('b33_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b34')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b34"
                      rows="12"
                      :suffix="$t('b34_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b35')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b35"
                      rows="12"
                      :suffix="$t('b35_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b36')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b36"
                      rows="12"
                      :suffix="$t('b36_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b37')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b38')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b38"
                      rows="12"
                      :suffix="$t('b38_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b39')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b39"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b39_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b39_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b39_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b40')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b40"
                      rows="12"
                      :suffix="$t('b40_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b41')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b41"
                      rows="12"
                      :suffix="$t('b41_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b42')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b42"
                      rows="12"
                      :suffix="$t('b42_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b43')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b43"
                      rows="12"
                      :suffix="$t('b43_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b44')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b44"
                      rows="12"
                      :suffix="$t('b44_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b45')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b45"
                      rows="12"
                      :suffix="$t('b45_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b46')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b46"
                      rows="12"
                      :suffix="$t('b46_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b47')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b47"
                      rows="12"
                      :suffix="$t('b47_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b48')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b48"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b48_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b48_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b48_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b49')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b49"
                      rows="12"
                      :suffix="$t('b49_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b50')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b51')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b51"
                      rows="12"
                      :suffix="$t('b51_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b52')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b52"
                      rows="12"
                      :suffix="$t('b52_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b53')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b53"
                      rows="12"
                      :suffix="$t('b53_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b54')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b54"
                      rows="12"
                      :suffix="$t('b54_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b55')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b55"
                      rows="12"
                      :suffix="$t('b55_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b56')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b56"
                      rows="12"
                      :suffix="$t('b56_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b57')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b57"
                      rows="12"
                      :suffix="$t('b57_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b58')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b59')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b59"
                      rows="12"
                      :suffix="$t('b59_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b60')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b60"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b60_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b60_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b60_1_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <p style="font-weight: bolder; color: red">
                  {{ $t("b61") }}
                </p>
                <a-form-item
                  :label="$t('b62')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b62" rows="12" :disabled="false" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b63')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b63"
                      rows="12"
                      :suffix="$t('b63_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b64')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b64"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b64_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b64_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b64_1_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <p style="font-weight: bolder; color: red">
                  {{ $t("b65") }}
                </p>
                <a-form-item
                  :label="$t('b66')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b66"
                      rows="12"
                      :suffix="$t('b66_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b67')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b67"
                      rows="12"
                      :suffix="$t('b67_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b68')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b68"
                      rows="12"
                      :suffix="$t('b68_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b69')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b69" rows="12" :disabled="false" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b70')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b70"
                      rows="12"
                      :suffix="$t('b70_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b71')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b71"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b71_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b71_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b71_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b72')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b72"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b72_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b72_1"
                      style="width: 50%"
                      rows="12"
                      :suffix="$t('b72_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b73')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b73"
                      rows="12"
                      :suffix="$t('b73_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b74')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b74"
                      rows="12"
                      :suffix="$t('b74_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b75')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b75"
                      rows="12"
                      :suffix="$t('b75_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>

                <a-form-item
                  :label="$t('b77')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b77"
                      rows="12"
                      :suffix="$t('b77_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b77_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b77_1"
                      rows="12"
                      :suffix="$t('b77_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b78')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b78"
                      rows="12"
                      :suffix="$t('b78_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b78_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b78_1"
                      rows="12"
                      :suffix="$t('b78_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
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
  exportExcel2,
  exportWord,
  getValueFromLocalStorage,
  initWordStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3005"),
  data() {
    return {
      b3: "50",
      b4: "4",
      b5: "7.5",
      b6: "0.08",
      b7: "0.04",
      b8: "1.2",
      b9: "15",
      b10: "1.5",
      b13_1: "0.1",
      b14_1: "0.05",
      b15: "460",
      b18: "3",
      b22: "0.15",
      b28: "3.1",
      b32: "3",
      b32_1: "0.25",
      b36: "90",
      b40: "0.51",
      b40_1: "0.3",
      b42: "0.8",
      b42_1: "45",
      b53: "30",
      b55: "3",
      b59: "1.5",
      b60_1: "0.1",
      b62: "1.5",
      b64_1: "0.15",
      b68: "0.3",
      b69: "0.62",
      b70: "0.05",
      b77: "150",
      b78: "100",
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
        exportExcel2(
          allData1,
          allData3,
          "水力循环澄清池工程量",
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
        key3: "1",
        key4: this.b4,
        key5: this.b8,
        key6: this.b9,
      };
      exportWord("水力循环澄清池计算书", "3005.docx", data, this);
    },
    refreshInitData() {
      this.$message.info(this.$t("refreshSucc"));
      const data = {
        key1: this.b3,
        key2: this.b3_1,
        key3: "1",
        key4: this.b4,
        key5: this.b8,
        key6: this.b9,
      };
      initWordStorage("3005.docx", data);
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
      return "Ø"+this.b39_1+"×"+this.b41+"m";
    },
    get_b_1() {
      return "0~"+this.b41+"m，4~20mA信号输出，就地显示";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 3600).toFixed(4);
    },
    b8_1() {
      return (parseFloat(this.b8) / 1000).toFixed(4);
    },
    b13() {
      return Math.pow(
        (4 * parseFloat(this.b3_1)) / (Math.PI * parseFloat(this.b10)),
        0.5
      ).toFixed(4);
    },
    b13_2() {
      return (parseFloat(this.b13_1) * 1000).toFixed(0);
    },
    b14() {
      return Math.pow(
        (4 * parseFloat(this.b3_1)) / (Math.PI * parseFloat(this.b5)),
        0.5
      ).toFixed(3);
    },
    b15_1() {
      return (parseFloat(this.b15) / 1000).toFixed(2);
    },
    b16() {
      return this.b13_1;
    },
    b18_1() {
      return (parseFloat(this.b18) * parseFloat(this.b14_1)).toFixed(2);
    },
    b19() {
      return (parseFloat(this.b4) * parseFloat(this.b3_1)).toFixed(4);
    },
    b20() {
      return (
        (4 * parseFloat(this.b19)) /
        (Math.PI * Math.pow(parseFloat(this.b18_1), 2))
      ).toFixed(6);
    },
    b21() {
      return (6 * parseFloat(this.b18_1)).toFixed(2);
    },
    b23() {
      return (3 * parseFloat(this.b18_1)).toFixed(2);
    },
    b25() {
      return (parseFloat(this.b19) / parseFloat(this.b6)).toFixed(4);
    },
    b26() {
      return Math.pow((4 * parseFloat(this.b25)) / Math.PI, 0.5).toFixed(4);
    },
    b27() {
      return (
        (12 * parseFloat(this.b9) * parseFloat(this.b19)) /
        (Math.PI *
          (Math.pow(parseFloat(this.b18_1), 2) +
            Math.pow(parseFloat(this.b26), 2) +
            parseFloat(this.b18_1) * parseFloat(this.b26)))
      ).toFixed(4);
    },
    b30() {
      return (parseFloat(this.b19) / parseFloat(this.b7)).toFixed(4);
    },
    b31() {
      return Math.pow(
        (4 * (parseFloat(this.b25) + parseFloat(this.b30))) / Math.PI,
        0.5
      ).toFixed(3);
    },
    b33() {
      return (
        (Math.PI *
          (parseFloat(this.b32) - parseFloat(this.b32_1)) *
          Math.pow(parseFloat(this.b31), 2)) /
        4
      ).toFixed(3);
    },
    b34() {
      return (parseFloat(this.b33) / parseFloat(this.b19)).toFixed(3);
    },
    b35_1() {
      return (
        (Math.PI *
          2.45 *
          (Math.pow(0.94, 2) + Math.pow(0.316, 2) + 0.94 * 0.316)) /
        12
      ).toFixed(6);
    },
    b35() {
      return (
        (parseFloat(this.b33) - parseFloat(this.b35_1)) /
        parseFloat(this.b19)
      ).toFixed(5);
    },
    b38() {
      return (parseFloat(this.b3_1) / parseFloat(this.b8_1)).toFixed(2);
    },
    b39() {
      return Math.pow(
        (4 *
          (parseFloat(this.b25) +
            parseFloat(this.b30) +
            parseFloat(this.b38))) /
          Math.PI,
        0.5
      ).toFixed(5);
    },
    b39_1() {
      return this.ROUNDUP(parseFloat(this.b39), 1);
    },
    b41() {
      return (
        parseFloat(this.b40) +
        parseFloat(this.b22) +
        parseFloat(this.b21) +
        parseFloat(this.b28) +
        parseFloat(this.b40_1) +
        parseFloat(this.b32_1)
      ).toFixed(2);
    },
    b43() {
      return ((parseFloat(this.b39) - parseFloat(this.b42)) / 2).toFixed(3);
    },
    b44() {
      return (parseFloat(this.b41) - parseFloat(this.b43)).toFixed(3);
    },
    b45() {
      return (
        (Math.PI * Math.pow(parseFloat(this.b39_1), 2) * parseFloat(this.b44)) /
        4
      ).toFixed(3);
    },
    b46() {
      return (
        (Math.PI *
          parseFloat(this.b43) *
          (Math.pow(parseFloat(this.b39), 2) +
            Math.pow(parseFloat(this.b42), 2) +
            parseFloat(this.b39) * parseFloat(this.b42))) /
        12
      ).toFixed(3);
    },
    b47() {
      return (parseFloat(this.b45) + parseFloat(this.b46)).toFixed(3);
    },
    b48() {
      return (
        (parseFloat(this.b28) - parseFloat(this.b32_1)) /
        parseFloat(this.b8_1)
      ).toFixed(0);
    },
    b48_1() {
      return (parseFloat(this.b48) / 60).toFixed(2);
    },
    b49() {
      return (
        (parseFloat(this.b9) + parseFloat(this.b36) + parseFloat(this.b48)) /
        60
      ).toFixed(2);
    },
    b51() {
      return (parseFloat(this.b47) * 0.01).toFixed(3);
    },
    b52() {
      return Math.pow(3 * parseFloat(this.b51), 0.333333).toFixed(6);
    },
    b54() {
      return (parseFloat(this.b51) / parseFloat(this.b53)).toFixed(6);
    },
    b56() {
      return Math.pow(
        (4 * parseFloat(this.b54)) / (Math.PI * parseFloat(this.b55)),
        0.5
      ).toFixed(6);
    },
    b57() {
      return this.ROUNDUP(parseFloat(this.b56), 2);
    },
    b60() {
      return Math.pow(
        (4 * parseFloat(this.b3_1)) / (Math.PI * parseFloat(this.b59)),
        0.5
      ).toFixed(6);
    },
    b63() {
      return ((parseFloat(this.b3_1) * parseFloat(this.b62)) / 2).toFixed(6);
    },
    b64() {
      return (0.9 * Math.pow(parseFloat(this.b63), 0.4)).toFixed(6);
    },
    b66() {
      return (0.75 * parseFloat(this.b64) + 0.05 + 0.07).toFixed(6);
    },
    b67() {
      return (1.25 * parseFloat(this.b64) + 0.05 + 0.07).toFixed(6);
    },
    b71() {
      return (
        parseFloat(this.b63) /
        (parseFloat(this.b69) * Math.pow(2 * 9.81 * parseFloat(this.b70), 0.5))
      ).toFixed(6);
    },
    b71_1() {
      return (parseFloat(this.b71) * 10000).toFixed(3);
    },
    b72() {
      return 20;
    },
    b72_1() {
      return (parseFloat(this.b72) / 10).toFixed(0);
    },
    b73() {
      return this.ROUNDUP(
        (4 * parseFloat(this.b71_1)) /
          (Math.PI * Math.pow(parseFloat(this.b72_1), 2)),
        1
      );
    },
    b74() {
      return (parseFloat(this.b63) / parseFloat(this.b71)).toFixed(6);
    },
    b75() {
      return (
        (Math.PI * parseFloat(this.b39_1)) /
        (parseFloat(this.b73) * 2)
      ).toFixed(6);
    },
    b65() {
      return (
        (Math.PI * parseFloat(this.b39_1)) /
        (parseFloat(this.b73) * 2)
      ).toFixed(6);
    },
    b77_1() {
      return (
        (4 * parseFloat(this.b3_1)) /
        (Math.PI * Math.pow(parseFloat(this.b77) / 1000, 2))
      ).toFixed(3);
    },
    b78_1() {
      return (
        (4 * parseFloat(this.b3_1)) /
        (Math.PI * Math.pow(parseFloat(this.b78) / 1000, 2))
      ).toFixed(4);
    },
    data1() {
      return [
      {
        序号: "1",
        单体位号: "1",
        名称: "机械搅拌澄清池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: "1",
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
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
        规格及型号: this.get_b_1(),
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
        序号: "1",
        单体位号: "1",
        名称: "机械搅拌澄清池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: "1",
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "1",
        安装位置: "污泥斗",
        仪表名称: "超声波泥位计",
        规格及型号: this.get_b_1(),
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
