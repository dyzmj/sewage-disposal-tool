<template>
  <div class="calc_page" style="background-color: #EDEFF2;">
    <a-row style="margin: 0 -6px">
      <a-col
        style="padding: 14px 6px; margin-left: 0px;"
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
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <a-card
              :title="$t('b3')"
              style="margin-bottom: 24px; "
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              :body-style="{ padding: 4 }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      style="width: 100%;"
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
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 6 }"
                  :wrapperCol="{ span: 18 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      style="width: 33%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
                    <a-input
                      v-model="b6_1"
                      style="width: 33%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b6_1')"
                      :suffix="$t('b6_1_u')"
                    />
                    <a-input
                      v-model="b6_2"
                      style="width: 34%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b6_2')"
                      :suffix="$t('b6_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b7')"
              style="margin-bottom: 24px; "
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              :body-style="{ padding: 4 }"
              size="small"
            >
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
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b8')"
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
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b9')"
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
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b10')"
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
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b11')"
                      :suffix="$t('b11_u')"
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
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b12')"
                      :suffix="$t('b12_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b13')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b13"
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b13')"
                      :suffix="$t('b13_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
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
          style="margin-bottom: 0px; "
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b15')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <a-form>
              <a-form-item
                :label="$t('b16')"
                style="margin-top: 10px"
                :labelCol="{ span: 14 }"
                :wrapperCol="{ span: 10 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b16"
                    style="width: 100%;"
                    :disabled="true"
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
                    style="width: 100%;"
                    :disabled="false"
                    :suffix="$t('b17_u')"
                  />
                </a-input-group>
              </a-form-item>
              <br />
              <p style="font-weight: bolder; color: red">
                {{ $t("b18") }}
              </p>
            </a-form>
            <a-card
              :title="$t('b19')"
              style="margin-bottom: 24px; "
              :headStyle="{ 'font-weight': 'bolder' }"
              :hoverable="true"
              :bordered="false"
              :body-style="{ padding: 4 }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b20')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b19"
                      style="width: 100%;"
                      :disabled="true"
                      :suffix="$t('b20_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b21')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b21"
                      style="width: 100%;"
                      :disabled="true"
                      :suffix="$t('b21_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b22')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b22"
                      style="width: 100%;"
                      :disabled="true"
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
                      style="width: 100%;"
                      :disabled="false"
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
                      style="width: 100%;"
                      :disabled="false"
                      :suffix="$t('b24_u')"
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
                      style="width: 100%;"
                      :disabled="true"
                      :suffix="$t('b25_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b26')"
              style="margin-bottom: 24px; "
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              :body-style="{ padding: 4 }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b27')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b27"
                      style="width: 100%;"
                      :disabled="false"
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
                      style="width: 100%;"
                      :disabled="false"
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
                      style="width: 100%;"
                      :disabled="true"
                      :suffix="$t('b29_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b30')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b30"
                      style="width: 100%;"
                      :disabled="true"
                      :suffix="$t('b30_u')"
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
                      style="width: 100%;"
                      :disabled="false"
                      :suffix="$t('b31_u')"
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
                      style="width: 100%;"
                      :disabled="false"
                      :suffix="$t('b32_u')"
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
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b33_u')"
                    />
                    <a-input
                      v-model="b33_1"
                      style="width: 50%;"
                      :disabled="false"
                      :suffix="$t('b33_1_u')"
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
                      style="width: 100%;"
                      :disabled="true"
                      :suffix="$t('b34_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b35')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b35"
                      style="width: 100%;"
                      :disabled="false"
                      :suffix="$t('b35_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b36')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b36"
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b36_u')"
                    />
                    <a-input
                      v-model="b36_1"
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b36_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <br />
                <p style="font-weight: bolder; color: red">
                  {{ $t("b37") }}
                </p>
                <a-form-item
                  :label="$t('b38')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b38"
                      style="width: 100%;"
                      :disabled="true"
                      :suffix="$t('b38_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b39')"
              style="margin-bottom: 24px; "
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              :body-style="{ padding: 4 }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b40')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b40"
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b40_u')"
                    />
                    <a-input
                      v-model="b40_1"
                      style="width: 50%;"
                      :disabled="false"
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
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b41_u')"
                    />
                    <a-input
                      v-model="b41_1"
                      style="width: 50%;"
                      :disabled="false"
                      :suffix="$t('b41_1_u')"
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
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b42_u')"
                    />
                    <a-input
                      v-model="b42_1"
                      style="width: 50%;"
                      :disabled="false"
                      :suffix="$t('b42_1_u')"
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
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b40_u')"
                    />
                    <a-input
                      v-model="b43_1"
                      style="width: 50%;"
                      :disabled="false"
                      :suffix="$t('b43_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b44')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b44"
                      style="width: 50%;"
                      :disabled="true"
                      :suffix="$t('b40_u')"
                    />
                    <a-input
                      v-model="b44_1"
                      style="width: 50%;"
                      :disabled="false"
                      :suffix="$t('b44_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
          </a-card>

          <a-card
            :title="$t('b47')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <a-card
              :title="$t('b48')"
              style="margin-bottom: 24px; "
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :body-style="{ padding: 4 }"
              size="small"
            >
              <a-card
                :title="$t('b49')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
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
                        style="width: 100%;"
                        :disabled="true"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b51_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b52')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b53')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b53"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b53_u')"
                      />
                      <a-input
                        v-model="b53_1"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b53_1_u')"
                      />
                      <a-input
                        v-model="b53_2"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b53_2_u')"
                      />
                      <a-input
                        v-model="b53_3"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b53_3_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b55')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b56')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b56"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b56_u')"
                      />
                      <a-input
                        v-model="b56_1"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b56_1_u')"
                      />
                      <a-input
                        v-model="b56_2"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b56_2_u')"
                      />
                      <a-input
                        v-model="b56_3"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b56_3_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b57')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b59')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 6 }"
                    :wrapperCol="{ span: 18 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b59"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b59_u')"
                      />
                      <a-input
                        v-model="b59_1"
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b59_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-card>
            <a-card
              :title="$t('b60')"
              style="margin-bottom: 24px; "
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :body-style="{ padding: 4 }"
              size="small"
            >
              <a-card
                :title="$t('b61')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b62')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 6 }"
                    :wrapperCol="{ span: 18 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b62"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b62_u')"
                      />
                      <a-input
                        v-model="b62_1"
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b62_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b63')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 6 }"
                    :wrapperCol="{ span: 18 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b63"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b63_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b64')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b65')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 6 }"
                    :wrapperCol="{ span: 18 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b65"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b65_u')"
                      />
                      <a-input
                        v-model="b65_1"
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b65_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b66')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b67')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b67"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b67_u')"
                      />
                      <a-input
                        v-model="b67_1"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b67_1_u')"
                      />
                      <a-input
                        v-model="b67_2"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b67_2_u')"
                      />
                      <a-input
                        v-model="b67_3"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b67_3_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b68')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b69')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 6 }"
                    :wrapperCol="{ span: 18 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b69"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b69_u')"
                      />
                      <a-input
                        v-model="b69_1"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b69_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b71')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b72')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b72"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b72_u')"
                      />
                      <a-input
                        v-model="b72_1"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b72_1_u')"
                      />
                      <a-input
                        v-model="b72_2"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b72_2_u')"
                      />
                      <a-input
                        v-model="b72_3"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b72_3_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b73')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b74')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b74"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b74_u')"
                      />
                      <a-input
                        v-model="b74_1"
                        style="width: 25%;"
                        :disabled="true"
                        :suffix="$t('b74_1_u')"
                      />
                      <a-input
                        v-model="b74_2"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b74_2_u')"
                      />
                      <a-input
                        v-model="b74_3"
                        style="width: 25%;"
                        :disabled="false"
                        :suffix="$t('b74_3_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b75')"
                style="margin-bottom: 24px; "
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                :body-style="{ padding: 4 }"
                size="small"
              >
                <a-form>
                  <br />
                  <p style="font-weight: bolder; color: red">
                    {{ $t("b76") }}
                  </p>
                </a-form>
              </a-card>
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
import {
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_6005"),
  data() {
    return {
      b4: "20000",
      b5: "5",
      b8: "2.0",
      b9: "8",
      b10: "0.5",
      b11: "1000",
      b12: "3.0",
      b13: "1000",
      b17: "0.875",
      b19: "525",
      b23: "7",
      b24: "2",
      b25_1: "3.00",
      b27: "4.5",
      b28: "10.0",
      b31: "3.0",
      b32: "2.0",
      b33_1: "2.00",
      b35: "2.0",
      b36_1: "7.00",
      b40_1: "50.00",
      b41_1: "50.00",
      b42_1: "500.00",
      b43_1: "50.00",
      b44_1: "300.00",
      b53_2: "1",
      b53_3: "1",
      b56_2: "1",
      b56_3: "1",
      b59_1: "1",
      b62_1: "3.0",
      b63: "3.0",
      b67_2: "1",
      b67_3: "1",
      b72_2: "1",
      b72_3: "1",
      b74_2: "1",
      b74_3: "1",
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
        this.b4 = 40000;
      } else {
        this.b4 = waterData;
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
          "生物接触氧化池计算书",
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
        key1: this.b4,
        key2: this.b8,
      };
      exportWord("次氯酸钠计算书", "7003.docx", data, this);
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b6() {
      return (parseFloat(this.b4) * (1 + parseFloat(this.b5) / 100)).toFixed(0);
    },
    b6_1() {
      return (parseFloat(this.b6) / 24).toFixed(1);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 3600).toFixed(2);
    },
    b16() {
      return (parseFloat(this.b8) * parseFloat(this.b6_1) / 1000).toFixed(2);
    },
    b20() {
      return (parseFloat(this.b16) * 24 / (parseFloat(this.b9)/100)).toFixed(0);
    },
    b21() {
      return (parseFloat(this.b17) * 24 / (parseFloat(this.b9)/100)).toFixed(1);
    },
    b22() {
      return ((parseFloat(this.b20) + parseFloat(this.b21)) / parseFloat(this.b11)).toFixed(4);
    },
    b25() {
      return ((parseFloat(this.b22) * parseFloat(this.b23)) / parseFloat(this.b24)).toFixed(5);
    },
    b29() {
      return (parseFloat(this.b27) * (parseFloat(this.b16) + parseFloat(this.b17))).toFixed(4);
    },
    b30() {
      return (parseFloat(this.b29) / (parseFloat(this.b12)/100)).toFixed(2);
    },
    b33() {
      return (parseFloat(this.b30) * 8 / parseFloat(this.b13) / parseFloat(this.b32)).toFixed(3);
    },
    b34() {
      return ((parseFloat(this.b16) + parseFloat(this.b17)) * 24 / (parseFloat(this.b10)/100) / parseFloat(this.b11)).toFixed(1);
    },
    b36() {
      return (parseFloat(this.b34) / parseFloat(this.b35)).toFixed(1);
    },
    b38() {
      return ((parseFloat(this.b16) + parseFloat(this.b17)) * parseFloat(this.b28)).toFixed(2);
    },
    b40() {
      return (parseFloat(this.b20) / parseFloat(this.b11) * 1000 / 24).toFixed(2);
    },
    b41() {
      return (parseFloat(this.b21) / parseFloat(this.b11) * 1000 / 24).toFixed(2);
    },
    b42() {
      return (parseFloat(this.b16) * 24 / (parseFloat(this.b10)/100) / parseFloat(this.b11) * 1000 / 24).toFixed(2);
    },
    b43() {
      return (parseFloat(this.b17) * 24 / (parseFloat(this.b10)/100) / parseFloat(this.b11) * 1000 / 24).toFixed(2);
    },
    b44() {
      return (parseFloat(this.b30) * 1000 / parseFloat(this.b13)).toFixed(2);
    },
    b50() {
      return this.b25_1;
    },
    b51() {
      return this.b24;
    },
    b53() {
      return this.b40_1;
    },
    b53_1() {
      return (parseFloat(this.b53_2) + parseFloat(this.b53_3)).toFixed(0);
    },
    b56() {
      return this.b41_1;
    },
    b56_1() {
      return (parseFloat(this.b56_2) + parseFloat(this.b56_3)).toFixed(0);
    },
    b59() {
      return (parseFloat(this.b25_1) * 2 / 0.5).toFixed(2);
    },
    b62() {
      return (parseFloat(this.b34) / 24).toFixed(1);
    },
    b65() {
      return this.b33;
    },
    b65_1() {
      return this.b32;
    },
    b67() {
      return this.b44_1;
    },
    b67_1() {
      return (parseFloat(this.b67_2) + parseFloat(this.b67_3)).toFixed(0);
    },
    b69() {
      return this.b36;
    },
    b69_1() {
      return this.b35;
    },
    b72() {
      return this.b42_1;
    },
    b72_1() {
      return (parseFloat(this.b72_2) + parseFloat(this.b72_3)).toFixed(0);
    },
    b74() {
      return this.b43_1;
    },
    b74_1() {
      return (parseFloat(this.b74_2) + parseFloat(this.b74_3)).toFixed(0);
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
