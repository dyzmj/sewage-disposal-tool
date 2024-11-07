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
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                      @change="refreshInitData()"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b8"
                          style="width: 100%;"
                          :disabled="false"
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
                          :disabled="true"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b12"
                          style="width: 100%;"
                          :disabled="true"
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
                          :disabled="true"
                          :suffix="$t('b13_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b14')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b14"
                          style="width: 100%;"
                          :disabled="true"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b16"
                          style="width: 100%;"
                          :disabled="false"
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
                          :disabled="true"
                          :suffix="$t('b17_u')"
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
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b18_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b19')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b19"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b19_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b20')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b23"
                          style="width: 100%;"
                          :disabled="true"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b27"
                          style="width: 100%;"
                          :disabled="true"
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
                          :disabled="true"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b31"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b31_u')"
                          @change="refreshInitData()"
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
                          :disabled="true"
                          :suffix="$t('b32_u')"
                          @change="refreshInitData()"
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
                          style="width: 100%;"
                          :disabled="true"
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
                          style="width: 100%;"
                          :disabled="false"
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
                          :disabled="true"
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
                          style="width: 100%;"
                          :disabled="true"
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
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b37_u')"
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
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b38_u')"
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
                          style="width: 100%;"
                          :disabled="true"
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
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b42"
                          style="width: 50%;"
                          :disabled="true"
                          :suffix="$t('b42_u')"
                        />
                        <a-input
                          v-model="b43"
                          style="width: 50%;"
                          :disabled="true"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b45"
                          style="width: 100%;"
                          :disabled="false"
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
                          style="width: 100%;"
                          :disabled="false"
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
                          style="width: 100%;"
                          :disabled="true"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b50"
                          style="width: 100%;"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b53"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b53_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b54')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b54"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b54_u')"
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
                          style="width: 100%;"
                          :disabled="true"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b56')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b56"
                          style="width: 100%;"
                          :disabled="true"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b58"
                          style="width: 100%;"
                          :disabled="false"
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
                          style="width: 100%;"
                          :disabled="true"
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
                    disabled="true"
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
      <div>
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
  i18n: require("./i18n_8002"),
  data() {
    return {
      modelVisible: false,
      b3: "20000",
      b8: "15",
      b11: "2",
      b16: "1.45",
      b18: "5",
      b20: "1",
      b21: "2",
      b22: "20",
      b25: "4.0",
      b26: "0.2",
      b31: "2",
      b34: "37.5",
      b35_1: "18.75",
      b37: "3.75",
      b38: "1.00",
      b45: "0.15",
      b46: "0.42",
      b50: "0.9",
      b58: "0.8",
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
    refreshInitData() {
      const data = {
        key1: this.b3,
        key2: this.b31,
        key3: this.b32,
      };
      initWordStorage("8002.docx", data);
      this.handleExcelCache("8002.xlsx", "清水池工程量");
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
    ROUND(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.round(number * multiplier) / multiplier;
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
    b9() {
      return (parseFloat(this.b3) * parseFloat(this.b8)/100).toFixed(0);
    },
    b12() {
      return (parseFloat(this.b3) * parseFloat(this.b11)/100).toFixed(0);
    },
    b13() {
      return (60*36.6*(3*4+5*5)/1000).toFixed(2);
    },
    b14() {
      return (parseFloat(this.b12) + parseFloat(this.b13)).toFixed(2);
    },
    b17() {
      return (parseFloat(this.b3) * parseFloat(this.b16)/24).toFixed(2);
    },
    b19() {
      return ((1+(parseFloat(this.b18)/100))*parseFloat(this.b3)/24).toFixed(0);
    },
    b23() {
      return (3.6 * parseFloat(this.b20) * parseFloat(this.b22) * parseFloat(this.b21)).toFixed(0);
    },
    b27() {
      return ((parseFloat(this.b9)+parseFloat(this.b14)+parseFloat(this.b23))/(parseFloat(this.b25)-parseFloat(this.b26))).toFixed(2);
    },
    b28() {
      return (parseFloat(this.b26) * parseFloat(this.b27)).toFixed(2);
    },
    b29() {
      return (parseFloat(this.b9) + parseFloat(this.b14) + parseFloat(this.b23) +parseFloat(this.b28)).toFixed(2);
    },
    b32() {
      return (parseFloat(this.b29) / parseFloat(this.b31)).toFixed(2);
    },
    b33() {
      return (parseFloat(this.b27) / parseFloat(this.b31)).toFixed(2);
    },
    b33_1() {
      return (parseFloat(this.b14) / 2 / parseFloat(this.b33)).toFixed(2);
    },
    b35() {
      return this.ROUND((parseFloat(this.b33)/ parseFloat(this.b34)),1);
    },
    b36() {
      return (parseFloat(this.b25) + 0.5).toFixed(1);
    },
    b39() {
      return 4.2;
    },
    b42() {
      return (parseFloat(this.b19) * 1.5).toFixed(1);
    },
    b43() {
      return (parseFloat(this.b42) / 3600).toFixed(2);
    },
    b47() {
      return (
        parseFloat(this.b43) / (
          Math.pow((
            parseFloat(this.b46)*2*9.8*(Math.pow(parseFloat(this.b45),3))
          ), 0.5)
        )
      ).toFixed(2);
    },
    b53() {
      return (2 * parseFloat(this.b34) * 18.75 * parseFloat(this.b38)).toFixed(2);
    },
    b54() {
      return (24 * parseFloat(this.b53) / parseFloat(this.b3)).toFixed(2);
    },
    b55() {
      return (0.185 * Math.log(18.75*10/parseFloat(this.b37)) - 0.044).toFixed(2);
    },
    b56() {
      return (parseFloat(this.b55) * parseFloat(this.b54)).toFixed(2);
    },
    b59() {
      return (parseFloat(this.b58) * parseFloat(this.b56) * 60).toFixed(2);
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
    this.data1 = [];
    this.data2 = [];
    this.data3 = [];
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
