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
          :title="$t('baseQueryParam')"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a slot="extra" href="#">
            <div class="" style="">
              <a-button
                type="primary"
                @click="refreshInitData"
                icon="sync"
                size="small"
              >
                {{ $t("refresh") }}</a-button
              >
            </div>
          </a>
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b3_1')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b3_1"
                  :placeholder="$t('b3_1')"
                  :suffix="$t('b3_1_u')"
                  :disabled="false"
                  @change="refreshInitData()"
                />
                <a-input
                  v-model="b3_2"
                  :placeholder="$t('b3_2')"
                  :suffix="$t('b3_2_u')"
                  :disabled="true"
                  @change="refreshInitData()"
                />
                <a-input
                  v-model="b3_3"
                  :placeholder="$t('b3_3')"
                  :suffix="$t('b3_3_u')"
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                :label="$t('b4')"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b4"
                  :placeholder="$t('b4')"
                  :suffix="$t('b4_u')"
                  value="1"
                  @change="refreshInitData()"
                />
              </a-form-item>
              <a-form-item
                :label="$t('b5')"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b5"
                  rows="4"
                  :placeholder="$t('b5')"
                  :suffix="$t('b5_u')"
                  :disabled="false"
                  @change="refreshInitData()"
                />
              </a-form-item>
              <a-form-item
                :label="$t('b6_1')"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b6_1"
                  rows="4"
                  :placeholder="$t('b6_1')"
                  :suffix="$t('b6_1_u')"
                  :disabled="false"
                  @change="refreshInitData()"
                />
                <a-input
                  v-model="b6_2"
                  rows="4"
                  :placeholder="$t('b6_2')"
                  :suffix="$t('b6_2_u')"
                  :disabled="true"
                />
              </a-form-item>
            </a-form>
          </div>
          <a-card :title="$t('referenceInformation')">
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img
                    style="max-width: 360px; height: auto;"
                    src="@/assets/img/1000/1001.png"
                  />
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
          :title="$t('processDesignCompute')"
          style="margin-bottom: 0px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
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
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b9')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b9"
                    :placeholder="$t('b9')"
                    :suffix="$t('b9_u')"
                    value="14"
                    @change="refreshInitData()"
                  />
                </a-form-item>
              </a-form>
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b10')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b10"
                    :placeholder="$t('b10')"
                    value="1.05"
                    @change="refreshInitData()"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b11')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b12')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b12"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b12')"
                      :suffix="$t('b12_u')"
                      value="14"
                    />
                    <a-input
                      v-model="b12_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b12_1')"
                      :suffix="$t('b12_1_u')"
                      value="14"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b13')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b14')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b14"
                    :disabled="true"
                    :placeholder="$t('b14')"
                    :suffix="$t('b14_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b15')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b15"
                    :placeholder="$t('b15')"
                    :suffix="$t('b15_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b16')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b16"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b16')"
                      :suffix="$t('b16_u')"
                      value="14"
                    />
                    <a-input
                      v-model="b16_1"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b16_1')"
                      :suffix="$t('b16_1_u')"
                      value="14"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b17')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b17"
                    :placeholder="$t('b17')"
                    :suffix="$t('b17_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b18')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b18"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b18')"
                      :suffix="$t('b18_u')"
                    />
                    <a-input
                      v-model="b18_1"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b18_1')"
                      :suffix="$t('b18_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b19')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b19"
                    :disabled="true"
                    :placeholder="$t('b19')"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b20')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b21')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 7 }"
                  :wrapperCol="{ span: 17 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b21"
                      style="width: 33%"
                      :disabled="true"
                      rows="8"
                      :placeholder="$t('b21')"
                      :suffix="$t('b21_u')"
                    />
                    <a-input
                      v-model="b21_1"
                      style="width: 33%"
                      :disabled="true"
                      rows="8"
                      :placeholder="$t('b21_1')"
                      :suffix="$t('b21_1_u')"
                    />
                    <a-input
                      v-model="b21_2"
                      style="width: 34%"
                      :disabled="true"
                      rows="8"
                      :placeholder="$t('b21_2')"
                      :suffix="$t('b21_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b22')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b22"
                    :disabled="false"
                    :placeholder="$t('b22')"
                    :suffix="$t('b22_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b23')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b23"
                    :disabled="false"
                    :placeholder="$t('b23')"
                    :suffix="$t('b23_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b24')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b24"
                    :disabled="false"
                    :placeholder="$t('b24')"
                    :suffix="$t('b24_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b25')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b25"
                    :placeholder="$t('b25')"
                    :suffix="$t('b25_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b26')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b26"
                    :disabled="true"
                    :placeholder="$t('b26')"
                    :suffix="$t('b26_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b27')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b27"
                    :disabled="true"
                    :placeholder="$t('b27')"
                    :suffix="$t('b27_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b28')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b28"
                    :placeholder="$t('b28')"
                    :suffix="$t('b28_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b29')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b29"
                    :disabled="true"
                    :placeholder="$t('b29')"
                    :suffix="$t('b29_u')"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b30')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b31')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b31"
                    :placeholder="$t('b31')"
                    :suffix="$t('b31_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b32')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b32"
                    :disabled="true"
                    :placeholder="$t('b32')"
                    :suffix="$t('b32_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b33')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b33"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b33')"
                      :suffix="$t('b33_u')"
                    />
                    <a-input
                      v-model="b33_1"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b33_1')"
                      :suffix="$t('b33_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b34')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b35')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b35"
                    :placeholder="$t('b35')"
                    :suffix="$t('b35_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b36')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b36"
                    :disabled="true"
                    :placeholder="$t('b36')"
                    :suffix="$t('b36_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b37')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b37"
                    :disabled="true"
                    :placeholder="$t('b37')"
                    :suffix="$t('b37_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b38')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b38"
                    :placeholder="$t('b38')"
                    :suffix="$t('b38_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b39')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b39"
                    :placeholder="$t('b39')"
                    :suffix="$t('b39_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b40')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b40"
                    :disabled="true"
                    :placeholder="$t('b40')"
                    :suffix="$t('b40_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b41')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b41"
                    :disabled="true"
                    :placeholder="$t('b41')"
                    :suffix="$t('b41_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b42')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b42"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b42')"
                      :suffix="$t('b42_u')"
                    />
                    <a-input
                      v-model="b42_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b42_1')"
                      :suffix="$t('b42_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b43')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b43"
                    :disabled="true"
                    :placeholder="$t('b43')"
                    :suffix="$t('b43_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b44')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b44"
                    :disabled="true"
                    :placeholder="$t('b44')"
                    :suffix="$t('b44_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b45')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b45"
                    :disabled="true"
                    :placeholder="$t('b45')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b46')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b46" :placeholder="$t('b46')" />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b47')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b47"
                    :disabled="true"
                    :placeholder="$t('b47')"
                    :suffix="$t('b47_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b48')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b48"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b48')"
                      :suffix="$t('b48_u')"
                    />
                    <a-input
                      v-model="b48_1"
                      :disabled="true"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b48_1')"
                      :suffix="$t('b48_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b49')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b49"
                    :disabled="true"
                    :placeholder="$t('b49')"
                    :suffix="$t('b49_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b50')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b50"
                    :disabled="true"
                    :placeholder="$t('b50')"
                    :suffix="$t('b50_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b51')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b51"
                    :disabled="true"
                    :placeholder="$t('b51')"
                    :suffix="$t('b51_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b52')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b52"
                    :disabled="true"
                    :placeholder="$t('b52')"
                    :suffix="$t('b52_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b53')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b53"
                    :disabled="true"
                    :placeholder="$t('b53')"
                    :suffix="$t('b53_u')"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b54')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b55')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b55"
                    :disabled="true"
                    :placeholder="$t('b55')"
                    :suffix="$t('b55_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b56')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b56"
                    :placeholder="$t('b56')"
                    :suffix="$t('b56_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b57')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b57"
                    :disabled="true"
                    :placeholder="$t('b57')"
                    :suffix="$t('b57_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b58')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b58"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b58')"
                      :suffix="$t('b58_u')"
                    />
                    <a-input
                      v-model="b58_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b58_1')"
                      :suffix="$t('b58_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b59')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b59"
                    :placeholder="$t('b59')"
                    :suffix="$t('b59_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b60')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b60"
                    :disabled="true"
                    :placeholder="$t('b60')"
                    :suffix="$t('b60_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b61')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b61" :placeholder="$t('b61')" />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b62')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b62" :placeholder="$t('b62')" />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b63')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b63"
                    :disabled="true"
                    :placeholder="$t('b63')"
                    :suffix="$t('b63_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b64')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b64"
                    :disabled="true"
                    :placeholder="$t('b64')"
                    :suffix="$t('b64_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b65')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b65"
                    :placeholder="$t('b65')"
                    :suffix="$t('b65_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b66')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b66"
                    :disabled="true"
                    :placeholder="$t('b66')"
                    :suffix="$t('b66_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b67')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b67"
                    :placeholder="$t('b67')"
                    :suffix="$t('b67_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b68')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b68"
                    :placeholder="$t('b68')"
                    :suffix="$t('b68_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b69')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b69"
                      style="width: 50%"
                      rows="12"
                      :placeholder="$t('b69')"
                      suffix=""
                    />
                    <a-input
                      v-model="b69_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b69_1')"
                      :suffix="$t('b69_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b70')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b70"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b70')"
                    :suffix="$t('b70_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b70_1')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b70_1"
                    rows="12"
                    :placeholder="$t('b70_1')"
                    :suffix="$t('b70_1_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b71')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b71"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b71')"
                    :suffix="$t('b71_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b71_1')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b71_1"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b71_1')"
                    :suffix="$t('b71_1_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b72')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b72"
                    :placeholder="$t('b72')"
                    :suffix="$t('b72_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b73')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b73"
                    :disabled="true"
                    :placeholder="$t('b73')"
                    :suffix="$t('b73_u')"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b74')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <a-card
              :title="$t('b75')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b76')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b76"
                    :disabled="true"
                    :placeholder="$t('b76')"
                    :suffix="$t('b76_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b77')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b77"
                    :placeholder="$t('b77')"
                    :suffix="$t('b77_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b78')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b78"
                    :disabled="true"
                    :placeholder="$t('b78')"
                    :suffix="$t('b78_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b79')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 6 }"
                  :wrapperCol="{ span: 18 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b79"
                      style="width: 33%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b79')"
                      :suffix="$t('b79_u')"
                    />
                    <a-input
                      v-model="b79_1"
                      style="width: 33%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b79_1')"
                    />
                    <a-input
                      v-model="b79_2"
                      style="width: 34%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b79_2')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b80')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b81')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b81"
                    :disabled="true"
                    :placeholder="$t('b81')"
                    :suffix="$t('b81_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b82')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b82"
                    :placeholder="$t('b82')"
                    :suffix="$t('b82_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b83')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b83"
                    :disabled="true"
                    :placeholder="$t('b83')"
                    :suffix="$t('b83_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b84')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 6 }"
                  :wrapperCol="{ span: 18 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b84"
                      style="width: 33%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b84')"
                      :suffix="$t('b84_u')"
                    />
                    <a-input
                      v-model="b84_1"
                      style="width: 33%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b84_1')"
                    />
                    <a-input
                      v-model="b84_2"
                      style="width: 34%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b84_2')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b85')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b86')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b86"
                    :disabled="true"
                    :placeholder="$t('b86')"
                    :suffix="$t('b86_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b87')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b87"
                    :placeholder="$t('b87')"
                    :suffix="$t('b87_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b88')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b88"
                    :disabled="true"
                    :placeholder="$t('b88')"
                    :suffix="$t('b88_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b89')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b89"
                    :placeholder="$t('b89')"
                    :suffix="$t('b89_u')"
                  />
                </a-form-item>
              </a-form>
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
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b91')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b91"
                    :disabled="true"
                    :placeholder="$t('b91')"
                    :suffix="$t('b91_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b92')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b92"
                    :placeholder="$t('b92')"
                    :suffix="$t('b92_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b93')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b93"
                    :disabled="true"
                    :placeholder="$t('b93')"
                    :suffix="$t('b93_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b94')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 6 }"
                  :wrapperCol="{ span: 18 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b94"
                      style="width: 33%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b94')"
                      :suffix="$t('b94_u')"
                    />
                    <a-input
                      v-model="b94_1"
                      style="width: 33%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b94_1')"
                    />
                    <a-input
                      v-model="b94_2"
                      style="width: 34%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b94_2')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b95')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <a-form style="margin-bottom: 24px">
                <a-form-item
                  class="calc"
                  :label="$t('b96')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b96"
                      style="width: 50%"
                      :disabled="false"
                      :placeholder="$t('b96')"
                    />
                    <a-input
                      v-model="b96_1"
                      style="width: 50%"
                      :disabled="false"
                      :placeholder="$t('b96_1')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b97')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 6 }"
                  :wrapperCol="{ span: 18 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b97"
                      style="width: 50%"
                      :disabled="true"
                      :placeholder="$t('b97')"
                      :suffix="$t('b97_u')"
                    />
                    <a-input
                      v-model="b97_1"
                      style="width: 50%"
                      :disabled="true"
                      :placeholder="$t('b97_1')"
                      :suffix="$t('b97_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b98')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b98"
                      style="width: 50%"
                      :disabled="true"
                      :placeholder="$t('b98')"
                      :suffix="$t('b98_u')"
                    />
                    <a-input
                      v-model="b98_1"
                      style="width: 50%"
                      :disabled="true"
                      :placeholder="$t('b98_1')"
                      :suffix="$t('b98_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b99')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b99"
                      style="width: 100%"
                      :disabled="false"
                      :placeholder="$t('b99')"
                      :suffix="$t('b99_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b99_1')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b99_1"
                      style="width: 100%"
                      :disabled="false"
                      :placeholder="$t('b99_1')"
                      :suffix="$t('b99_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b100')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b100"
                      style="width: 50%"
                      :disabled="true"
                      :placeholder="$t('b100')"
                      :suffix="$t('b100_u')"
                    />
                    <a-input
                      v-model="b100_1"
                      style="width: 50%"
                      :disabled="true"
                      :placeholder="$t('b100_1')"
                      :suffix="$t('b100_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b102')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b102"
                    :placeholder="$t('b102')"
                    :suffix="$t('b102_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b103')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b103"
                    :placeholder="$t('b103')"
                    :suffix="$t('b103_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b104')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b104"
                    :placeholder="$t('b104')"
                    :suffix="$t('b104_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b105')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b105"
                    :placeholder="$t('b105')"
                    :suffix="$t('b105_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b106')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b106"
                    :placeholder="$t('b106')"
                    :suffix="$t('b106_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b107')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b107"
                    :placeholder="$t('b107')"
                    :suffix="$t('b107_u')"
                  />
                </a-form-item>
                <a-form-item
                  class="calc"
                  :label="$t('b110')"
                  style="margin-top: 5px"
                  :labelCol="{ span: 6 }"
                  :wrapperCol="{ span: 18 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b110"
                      style="width: 33%"
                      :disabled="true"
                      :placeholder="$t('b110')"
                      :suffix="$t('b110_u')"
                    />
                    <a-input
                      v-model="b110_1"
                      style="width: 33%"
                      :disabled="true"
                      :placeholder="$t('b110_1')"
                      :suffix="$t('b110_1_u')"
                    />
                    <a-input
                      v-model="b110_2"
                      style="width: 34%"
                      :disabled="true"
                      :placeholder="$t('b110_2')"
                      :suffix="$t('b110_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
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
        <a slot="extra" style="color: rgb(120, 120, 120); font-size: 15px;" @click="showModal">
          <a-icon type="zoom-in" />
        </a>
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
    <a-modal :visible="modelVisible" title="工程量计算" :footer="null" width="1200" @ok="handleOk" @cancel="handleOk">
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
    </a-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
  initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_1001"),
  data() {
    return {
      modelVisible: false,
      b3_1: "120000",
      b4: "5",
      b5: "72",
      b6_1: "6",
      b9: "14",
      b10: "1.05",
      b15: "16",
      b16_1: "66",
      b17: "8",
      b18_1: "8.5",
      b22: "2",
      b25: "0.6",
      b28: "0.05",
      b31: "2",
      b33_1: "0.75",
      b35: "1.12",
      b38: "0.1",
      b39: "0.25",
      b42: "75",
      b46: "0.0024",
      b48: "12",
      b56: "3.5",
      b58: "600",
      b59: "70",
      b61: "7.38",
      b62: "0.0135",
      b65: "0.45",
      b67: "1.5",
      b68: "1",
      b69: "0.3",
      b70_1: "6",
      b72: "1.5",
      b77: "1",
      b79_1: "2",
      b82: "1.2",
      b84_1: "2",
      b87: "2.55",
      b89: "0.6",
      b92: "1.2",
      b94_1: "2",
      b96: "1",
      b96_1: "1",
      b99: "2",
      b102: "0.3",
      b103: "0.3",
      b104: "2.0",
      b105: "0.6",
      b106: "1.5",
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
    };
  },
  methods: {
    backHome() {
      this.$router.push("/works");
    },
    showModal() {
      this.modelVisible = true
    },
    handleOk() {
      this.modelVisible = false
    },
    initWaterData() {
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b3_1 = 120000;
      } else {
        this.b3_1 = waterData;
      }
    },
    exportComputeBook() {
      const data = {
        key1: this.b3_1,
        key2: this.b3_2,
        key3: this.b4,
        key4: this.b5,
        key5: this.b6_1,
        key6: this.b9,
        key7: this.b10,
      };
      exportWord("生物接触氧化池计算书", "1001.docx", data, this);
    },
    refreshInitData() {
      console.log("刷新方法被调用");
      // this.$message.info(this.$t("refreshSucc"));
      const data = {
        key1: this.b3_1,
        key2: this.b3_2,
        key3: this.b4,
        key4: this.b5,
        key5: this.b6_1,
        key6: this.b9,
        key7: this.b10,
      };
      initWordStorage("1001.docx", data);
      this.handleExcelCache("1001.xlsx", "生物接触氧化池工程量");
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
    ROUNDUP(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.ceil(number * multiplier) / multiplier;
    },
    truncateDecimals(number, digits) {
      let power = Math.pow(10, digits);
      return Math.floor(number * power) / power;
    },
    getDisinfectiontank() {
      return "to do";
    },
    getkey1() {
      return this.b110 + "m x" + this.b110_1 + "m x" + this.b110_2 + "m";
    },
    getKey2() {
      return (
        "Q=" +
        (parseFloat(this.b69_1) / parseFloat(this.b70_1)).toFixed(1) +
        "m3/h, H=" +
        this.b73 +
        "m"
      );
    },
    getKey3() {
      return (parseFloat(this.b70_1) + parseFloat(this.b71_1)).toFixed(0);
    },
    getKey4() {
      return this.b100_1 + "m3/min, P=" + this.b98_1 + "KPa";
    },
    getKey5() {
      return (parseFloat(this.b99) + parseFloat(this.b99_1)).toFixed(0);
    },
    getKey6() {
      return this.b70_1 + "用" + this.b71_1 + "备";
    },
    getKey7() {
      return this.b99 + "用" + this.b99_1 + "备";
    },
    getKey8() {
      return (parseFloat(this.b15) * 5).toFixed(0);
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
          "生物接触氧化池工程量",
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
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_2() {
      return (parseFloat(this.b3_1) / 24).toFixed(0);
    },
    b3_3() {
      return (parseFloat(this.b3_1) / (24 * 60 * 60)).toFixed(6);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 60).toFixed(2);
    },
    b12() {
      return (this.b3_2 * this.b10).toFixed(0);
    },
    b12_1() {
      return (parseFloat(this.b12) / 3600).toFixed(2);
    },
    b14() {
      return (parseFloat(this.b12) / this.b4).toFixed(0);
    },
    b16() {
      return (parseFloat(this.b14) / this.b15).toFixed(3);
    },
    b18() {
      return (parseFloat(this.b16_1) / this.b17).toFixed(2);
    },
    b19() {
      return (parseFloat(this.b17) / this.b18_1).toFixed(6);
    },
    b21() {
      return (parseFloat(this.b9) * this.b16_1).toFixed(0);
    },
    b21_1() {
      return (parseFloat(this.b21) / 1000).toFixed(3);
    },
    b21_2() {
      return (parseFloat(this.b21_1) * 3600).toFixed(1);
    },
    b23() {
      return this.ROUNDUP(this.b17 / this.b22, 0);
    },
    b24() {
      return this.b18_1;
    },
    b26() {
      return parseFloat(0.45 * Math.pow(this.b21_1, 0.4)).toFixed(6);
    },
    b27() {
      return this.b104;
    },
    b29() {
      return this.ROUNDUP(
        (
          parseFloat(0.2 * this.b27) +
          parseFloat(2.5 * this.b26) +
          parseFloat(this.b28) +
          0.075
        ).toFixed(2),
        2
      );
    },
    b32() {
      return (
        0.81 *
        Math.pow(
          parseFloat(
            (parseFloat(this.b16_1) * parseFloat(this.b9)) /
              (1000 * parseFloat(this.b31))
          ),
          2 / 3
        )
      ).toFixed(6);
    },
    b33() {
      return parseFloat(this.b32) + 0.2;
    },
    b36() {
      return parseFloat(this.b21_1);
    },
    b37() {
      return (parseFloat(this.b36) / parseFloat(this.b35)).toFixed(3);
    },
    b40() {
      return this.ROUNDUP((2 * parseFloat(this.b17)) / parseFloat(this.b39), 0);
    },
    b41() {
      return (parseFloat(this.b36) / parseFloat(this.b40)).toFixed(6);
    },
    b42_1() {
      return this.b42 / 1000;
    },
    b43() {
      return (
        (4 * parseFloat(this.b36)) /
        parseFloat(this.b40) /
        (Math.PI.toFixed(9) * Math.pow(parseFloat(this.b42_1), 2))
      ).toFixed(6);
    },
    b44() {
      return (parseFloat(this.b18_1) - 0.9) / 2;
    },
    b45() {
      return (parseFloat(this.b44) / parseFloat(this.b42_1)).toFixed(5);
    },
    b47() {
      return (parseFloat(this.b46) * parseFloat(this.b16_1)).toFixed(4);
    },
    b48_1() {
      return parseFloat(this.b48) / 1000;
    },
    b49() {
      return ((Math.PI * Math.pow(parseFloat(this.b48_1), 2)) / 4).toFixed(6);
    },
    b50() {
      return this.ROUNDUP(parseFloat(this.b47) / parseFloat(this.b49), 0);
    },
    b51() {
      return this.ROUNDUP(parseFloat(this.b50) / parseFloat(this.b40), 0);
    },
    b52() {
      return ((2 * parseFloat(this.b44)) / parseFloat(this.b51)).toFixed(6);
    },
    b53() {
      let a1 = parseFloat(this.b9) * parseFloat(this.b16_1);
      let a2 =
        1000 *
        parseFloat(this.b40) *
        parseFloat(this.b51) *
        parseFloat(this.b49);
      return this.truncateDecimals(a1 / a2, 2);
    },
    b55() {
      return (
        (1.5 *
          parseFloat(this.b9) *
          parseFloat(this.b16_1) *
          60 *
          parseFloat(this.b6_1)) /
        1000
      ).toFixed(2);
    },
    b57() {
      return Math.pow(
        (4 * parseFloat(this.b55)) / (Math.PI * parseFloat(this.b56)),
        0.5
      ).toFixed(5);
    },
    b58_1() {
      return parseFloat(this.b58) / 1000;
    },
    b60() {
      return (
        (parseFloat(this.b21_1) * 4) /
        (Math.PI * Math.pow(parseFloat(this.b58_1), 2))
      ).toFixed(3);
    },
    b63() {
      return (
        parseFloat(this.b62) * parseFloat(this.b59) +
        (parseFloat(this.b61) * Math.pow(parseFloat(this.b60), 2)) / (2 * 9.81)
      ).toFixed(6);
    },
    b64() {
      return (
        (8 * Math.pow(parseFloat(this.b35), 2)) / (2 * 9.81) +
        (10 * Math.pow(parseFloat(this.b43), 2)) / (2 * 9.81)
      ).toFixed(6);
    },
    b66() {
      return (0.022 * parseFloat(this.b65) * parseFloat(this.b9)).toFixed(4);
    },
    b69_1() {
      return (parseFloat(this.b55) / parseFloat(this.b6_2) / 1.5).toFixed(1);
    },
    b70() {
      return this.b104;
    },
    b71() {
      return (
        (parseFloat(this.b67) / parseFloat(this.b68) - 1) *
        ((1 - parseFloat(this.b69)) * parseFloat(this.b70))
      ).toFixed(1);
    },
    b71_1() {
      if (this.ROUNDUP(parseFloat(this.b70_1) / 3, 0) === 0) {
        return 1;
      }
      return this.ROUNDUP(parseFloat(this.b70_1) / 3, 0);
    },
    b73() {
      return this.ROUNDUP(
        parseFloat(this.b63) +
          parseFloat(this.b64) +
          parseFloat(this.b66) +
          parseFloat(this.b71) +
          parseFloat(this.b72),
        2
      );
    },
    b76() {
      return this.b12_1;
    },
    b78() {
      return (parseFloat(this.b12) / 3600 / parseFloat(this.b77)).toFixed(6);
    },
    b79_2() {
      return (parseFloat(this.b78) / parseFloat(this.b79_1)).toFixed(6);
    },
    b79() {
      return "2" + "×" + this.ROUNDUP(parseFloat(this.b79_2), 2).toFixed(2);
    },
    b81() {
      return this.b12_1;
    },
    b83() {
      return (parseFloat(this.b12) / 3600 / parseFloat(this.b82)).toFixed(6);
    },
    b84_2() {
      return (parseFloat(this.b83) / parseFloat(this.b84_1)).toFixed(6);
    },
    b84() {
      return "2" + "×" + this.ROUNDUP(parseFloat(this.b84_2), 2).toFixed(2);
    },
    b86() {
      return ((parseFloat(this.b16_1) * parseFloat(this.b9)) / 1000).toFixed(3);
    },
    b88() {
      return (parseFloat(this.b86) / parseFloat(this.b87)).toFixed(6);
    },
    b91() {
      return ((parseFloat(this.b16_1) * parseFloat(this.b9)) / 1000).toFixed(3);
    },
    b93() {
      return (parseFloat(this.b91) / parseFloat(this.b92)).toFixed(6);
    },
    b94_2() {
      return (parseFloat(this.b93) / parseFloat(this.b94_1)).toFixed(6);
    },
    b94() {
      return "2" + "×" + this.ROUNDUP(parseFloat(this.b94_2), 2).toFixed(2);
    },
    b97() {
      return (parseFloat(this.b12) / parseFloat(this.b15)).toFixed(3);
    },
    b97_1() {
      return (parseFloat(this.b97) / 60).toFixed(5);
    },
    b107() {
      return (
        parseFloat(this.b103) +
        parseFloat(this.b104) +
        parseFloat(this.b105) +
        parseFloat(this.b106)
      );
    },
    b98() {
      return parseFloat(this.b107) + 1;
    },
    b98_1() {
      return (parseFloat(this.b98) * 9.8).toFixed(2);
    },
    b99_1() {
      if (this.ROUNDUP(parseFloat(this.b99) / 3, 0) === 0) {
        return 1;
      }
      return this.ROUNDUP(parseFloat(this.b99) / 3, 0);
    },
    b100() {
      return this.ROUNDUP(
        (parseFloat(this.b97) * parseFloat(this.b15)) / parseFloat(this.b99),
        2
      ).toFixed(0);
    },
    b100_1() {
      return (parseFloat(this.b100) / 60).toFixed(2);
    },
    b110() {
      return (
        (parseFloat(this.b18_1) * parseFloat(this.b15)) / 2 +
        (parseFloat(this.b15) / 2 - 1) * parseFloat(this.b102)
      ).toFixed(1);
    },
    b110_1() {
      return (
        parseFloat(this.b17) * 2 +
        parseFloat(this.b79_1) +
        parseFloat(this.b94_1) +
        3 * parseFloat(this.b102)
      ).toFixed(1);
    },
    b110_2() {
      return this.b107;
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "陶粒生物接触氧化池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: "1",
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
          设备工艺名称: "反冲洗泵",
          设备类型: "",
          规格及型号: this.getKey2(),
          单位: "台",
          disinfectiontank: this.getKey3(),
          运行时间: "",
          主要材质: "",
          备注: this.getKey6(),
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "反冲洗风机",
          设备类型: "",
          规格及型号: this.getKey4(),
          单位: "台",
          disinfectiontank: this.getKey5(),
          运行时间: "",
          主要材质: "",
          备注: this.getKey7(),
        },
      ];
    },
    data3() {
      return [
        {
          序号: "",
          仪表位号: "",
          仪表名称: "电动阀",
          安装位置: "",
          规格及型号: "",
          单位: "台",
          disinfectiontank: this.getKey8(),
          a: "",
          b: "",
          备注: "",
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
        名称: "陶粒生物接触氧化池",
        Dimensions: this.getkey1(),
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
        序号: "",
        设备位号: "",
        设备工艺名称: "反冲洗泵",
        设备类型: "",
        规格及型号: this.getKey2(),
        单位: "台",
        disinfectiontank: this.getKey3(),
        运行时间: "",
        主要材质: "",
        备注: this.getKey6(),
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "反冲洗风机",
        设备类型: "",
        规格及型号: this.getKey4(),
        单位: "台",
        disinfectiontank: this.getKey5(),
        运行时间: "",
        主要材质: "",
        备注: this.getKey7(),
      },
    ];
    this.data3 = [
      {
        序号: "",
        仪表位号: "",
        仪表名称: "电动阀",
        安装位置: "",
        规格及型号: "",
        单位: "台",
        disinfectiontank: this.getKey8(),
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
