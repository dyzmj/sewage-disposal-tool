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
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
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
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 100%"
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
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b5')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b7')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b7"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b7')"
                      :suffix="$t('b7_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b8')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b8"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b9')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b9"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b10')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b10"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b10_u')"
                    />
                    <a-input
                      v-model="b10_1"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b10_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b11')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b11"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b11_u')"
                    />
                    <a-input
                      v-model="b11_1"
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b11_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('referenceImage')"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <div>
              <p>高锰酸钾</p>
              <p>
                《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min
              </p>
            </div>
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img width="400px" src="@/assets/img/1000/1002.png" />
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
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b14')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b15')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b16')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b16"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b16_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b17')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b17"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b17_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b19')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form-item
                :label="$t('b20')"
                style="margin-top: 10px"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b20"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b20_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b21')"
                style="margin-top: 10px"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b21"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b21_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b22')"
                style="margin-top: 10px"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b22"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b22_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b23')"
                style="margin-top: 10px"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b23"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b23_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b24')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b24"
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b24_u')"
                  />
                  <a-input
                    v-model="b24_1"
                    style="width: 50%"
                    :disabled="false"
                    :suffix="$t('b24_1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b25')"
                style="margin-top: 10px"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b25"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b25_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b26')"
                style="margin-top: 10px"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b26"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b26_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b27')"
                style="margin-top: 10px"
                :labelCol="{ span: 12 }"
                :wrapperCol="{ span: 12 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b27"
                    style="width: 100%"
                    :disabled="true"
                    :suffix="$t('b27_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-card>
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
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b30"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b30_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b31')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b31"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b31_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b32')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b32"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b32_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b34')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b35')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b35"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b35_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b36')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b36"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b36_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b37')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b37"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b37_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b38')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b38"
                      style="width: 100%"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b39')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b39"
                      style="width: 100%"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b40')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b40"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b40_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b41')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b41"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b41_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b42')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b42"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b42_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b43')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b43"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b43_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b45')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b46')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b46"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b46_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b47')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b47"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b47_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b48')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b48"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b48_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b49')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b49"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b49_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b50')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b50"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b50_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b51')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b51"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b51_u')"
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
                <br />
                <p style="font-weight: bolder; color: red">
                  {{ $t("b54") }}
                </p>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b57')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b58')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b58"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b58_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b59')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b59"
                      style="width: 50%"
                      :disabled="false"
                      :suffix="$t('b59_u')"
                    />
                    <a-input
                      v-model="b59_1"
                      style="width: 50%"
                      :disabled="false"
                      :suffix="$t('b59_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b60')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b60"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b60_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b61')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b61"
                      style="width: 33%"
                      :disabled="false"
                      :suffix="$t('b61_u')"
                    />
                    <a-input
                      v-model="b61_1"
                      style="width: 33%"
                      :disabled="true"
                      :suffix="$t('b61_1_u')"
                    />
                    <a-input
                      v-model="b61_2"
                      style="width: 33%"
                      :disabled="false"
                      :suffix="$t('b61_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b62')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b62"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b62_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b63')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b63"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b63_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b64')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b64"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b64_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b65')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b65"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b65_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b66')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b66"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b66_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b67')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b67"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b67_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b68')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b68"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b68_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b69')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b69"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b69_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b70')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 12 }"
                  :wrapperCol="{ span: 12 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b70"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b70_u')"
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
  i18n: require("./i18n_5001"),
  data() {
    return {
      b3: "20000",
      b4: "0.005",
      b5: "1.06",
      b7: "4.42",
      b8: "70",
      b10: "1",
      b10_1: "1",
      b11: "13",
      b11_1: "15",
      b16: 10,
      b20: 4,
      b21: 0.5,
      b23: 3,
      b24_1: 12,
      b30: 20,
      b35: 0.2,
      b37: 40,
      b38: 0.19,
      b39: 0.066,
      b40: 2,
      b46: 0.2,
      b49: 0.45,
      b50: 0.5,
      b58: 10,
      b59: 6,
      b59_1: 1,
      b61: 3.8,
      b61_2: 3.8,
      b62: 2.5,
      b65: 0.5,
      b67: 0.55,
      b68: 1.7,
      b69: 0.3,
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
        exportExcel3(allData1, allData2, allData3, "臭氧活性炭工程量", this);
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
        key5: this.b7,
        key6: this.b14,
        key7: this.b28,
      };
      exportWord("臭氧活性炭计算书", "5001.docx", data, this);
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
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(2);
    },
    b6() {
      return (1.06 * parseFloat(this.b4) * parseFloat(this.b3_1)).toFixed(2);
    },
    b9() {
      return (
        (parseFloat(this.b6) + parseFloat(this.b7)) /
        (parseFloat(this.b8) / 100)
      ).toFixed(2);
    },
    b17() {
      return ((parseFloat(this.b3_1) * parseFloat(this.b16)) / 60).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b17) / parseFloat(this.b20)).toFixed(2);
    },
    b24() {
      return (
        (parseFloat(this.b3_1) * parseFloat(this.b16)) /
        60 /
        parseFloat(this.b20) /
        parseFloat(this.b23)
      ).toFixed(8);
    },
    b25() {
      return (parseFloat(this.b24_1) * 0.6).toFixed(1);
    },
    b26() {
      return (parseFloat(this.b24_1) * 0.4).toFixed(1);
    },
    b27() {
      return (
        parseFloat(this.b24_1) *
        parseFloat(this.b23) *
        parseFloat(this.b20)
      ).toFixed(0);
    },
    b31() {
      return ((1000 * parseFloat(this.b9)) / parseFloat(this.b30)).toFixed(2);
    },
    b32() {
      return (parseFloat(this.b31) * 0.614).toFixed(2);
    },
    b36() {
      return ((3.14 * parseFloat(this.b35) * parseFloat(this.b35)) / 4).toFixed(
        4
      );
    },
    b41() {
      return (
        (parseFloat(this.b40) -
          parseFloat(this.b38) * Math.pow(parseFloat(this.b37), 0.333)) /
        parseFloat(this.b39)
      ).toFixed(2);
    },
    b42() {
      return this.ROUNDUP(
        parseFloat(this.b32) / parseFloat(this.b41) / parseFloat(this.b36),
        0
      );
    },
    b43() {
      return this.ROUND(parseFloat(this.b32) / parseFloat(this.b42), 2);
    },
    b47() {
      return ((1 / 4) * 3.14 * 0.2 * 0.2).toFixed(4);
    },
    b48() {
      return (
        parseFloat(this.b32) /
        parseFloat(this.b42) /
        parseFloat(this.b36) /
        10
      ).toFixed(2);
    },
    b51() {
      return (
        parseFloat(this.b20) +
        parseFloat(this.b49) +
        parseFloat(this.b50)
      ).toFixed(2);
    },
    b60() {
      return (
        parseFloat(this.b3_1) /
        parseFloat(this.b58) /
        parseFloat(this.b59)
      ).toFixed(8);
    },
    b61_1() {
      return (parseFloat(this.b60) / parseFloat(this.b61)).toFixed(8);
    },
    b63() {
      return (parseFloat(this.b62) / parseFloat(this.b58)).toFixed(2);
    },
    b64() {
      return (
        parseFloat(this.b61) *
        parseFloat(this.b61_2) *
        parseFloat(this.b62)
      ).toFixed(1);
    },
    b66() {
      return (parseFloat(this.b64) * parseFloat(this.b65)).toFixed(2);
    },
    b70() {
      return (
        parseFloat(this.b69) +
        parseFloat(this.b68) +
        parseFloat(this.b67) +
        parseFloat(this.b62)
      ).toFixed(2);
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
