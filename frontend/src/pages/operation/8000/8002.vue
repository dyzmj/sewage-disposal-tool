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
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b3')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
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
          :title="$t('processDesignCompute')"
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b5')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b6')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b8"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b3_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b9')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b9"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b9_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b10')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b11')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b11"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b11_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b12')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b12_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b13')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b13"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b13_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b14')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b14"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b14_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b15')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b16')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b16"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b16_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b17')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
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
                    <a-form-item
                      :label="$t('b18')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b18"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b18_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b19')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b19"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b19_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b20')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b20"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b20_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b21')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b21"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b21_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b22')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b22"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b22_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b23')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b25"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b25_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b26')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b26"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b26_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b27')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
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
                      :label="$t('b29')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b29"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b29_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b30')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b31')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b33"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b33_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b34')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b34"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b34_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b35')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b36"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b36_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b37')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b37"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b37_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b38')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b38"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b38_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b39')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b39"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b39_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
            </a-card>

            <a-card
              :title="$t('b41')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b42')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b42')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b42"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b42_u')"
                        />
                        <a-input
                          v-model="b43"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b42_u')"
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b45"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b45_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b46')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b46"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b46_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b47')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b47"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b47_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b48')"
                      style="margin-top: 10px;"
                      :labelCol="{ span: 24 }"
                      :wrapperCol="{ span: 0 }"
                    >
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b50"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b50_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
            </a-card>
            <a-card
              :title="$t('b51')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b52')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b53')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b53"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b53_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b54')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b54"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b54_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b55')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b55"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b55_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b56')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b56"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b56_u')"
                        />
                      </a-input-group>
                    </a-form-item>
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
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b58"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b58_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b59')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b59"
                          style="width: 50%;"
                          :disabled="false"
                          :suffix="$t('b59_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
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
          :body-style="{ padding: 4 }"
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
        </a-card>
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
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { exportExcel3, exportWord, getValueFromLocalStorage } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_8002"),
  data() {
    return {
      b3: "20000",
      b8: "15",
      b9: "3000",
      b11: "2",
      b12: "400",
      b13: "81.25",
      b14: "481.25",
      b16: "1.45",
      b17: "1208.33",
      b18: "5",
      b19: "875",
      b20: "1",
      b21: "2",
      b22: "20",
      b23: "144",
      b25: "4.0",
      b26: "0.2",
      b27: "954.01",
      b28: "190.80",
      b29: "3816.05",
      b31: "2",
      b32: "1908.03",
      b33: "477.01",
      b33_1: "0.50",
      b34: "37.5",
      b35: "12.7",
      b35_1: "18.75",
      b36: "4.5",
      b37: "3.75",
      b38: "1.00",
      b39: "4.2",
      b42: "1312.5",
      b43: "0.36",
      b45: "0.15",
      b46: "0.42",
      b47: "2.19",
      b50: "0.9",
      b53: "1406.25",
      b54: "1.69",
      b55: "0.68",
      b56: "1.15",
      b58: "0.8",
      b59: "55.06",
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
      const waterData = getValueFromLocalStorage("waterData")
      if (waterData == null || waterData == ''){
        this.b3 = 40000
      }else{
        this.b3 = waterData
      }
    },
    exportQuantities() {
      try{
        this.exportExcel();
      }catch(error){
        console.error("Error exporting Excel:", error);
        // 可以在这里添加更多的错误处理逻辑
        this.$message.warn(this.$t("exportExcelError"));
        return;
      }
    },
    exportExcel() {
      try {
        // 处理表头信息
        const headerData1 = [this.flattenFirstRowColumns(this.columns1), this.flattenSecondRowColumns(this.columns1)];
        // 初始化 allData
        const allData1 = [...headerData1, ...this.data1.map(item => Object.values(item))];

        // 处理表头信息
        const headerData2 = [this.flattenFirstRowColumns(this.columns2), this.flattenSecondRowColumns(this.columns2)];
        // 初始化 allData
        const allData2 = [...headerData2, ...this.data2.map(item => Object.values(item))];

        // 处理表头信息
        const headerData3 = [this.flattenFirstRowColumns(this.columns3), this.flattenSecondRowColumns(this.columns3)];
        // 初始化 allData
        const allData3 = [...headerData3, ...this.data3.map(item => Object.values(item))];

        // 导出 Excel
        exportExcel3(allData1, allData2, allData3, "清水池工程量", this);
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
        key2: this.b31,
        key3: this.b32,
      };
      exportWord("清水池计算书", "8002.docx", data, this);
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
    getDimensions() {
      return "to do";
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
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
