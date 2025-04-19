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
          <a-card
            :title="$t('b0')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b1"
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b1_u')"
                      @change="refreshInitData()"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b2')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b2"
                      rows="12"
                      :suffix="$t('b2_u')"
                      @change="refreshInitData()"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b3')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
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
            :title="$t('b6_0')"
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
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b6_1')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b6_1"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b6_1_u')"
                        @change="refreshInitData()"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b7')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b7"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b7_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        rows="12"
                        :suffix="$t('b8_u')"
                        @change="refreshInitData()"
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
                        rows="12"
                        :suffix="$t('b9_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b10"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b11"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b11_u')"
                      />
                      <a-input
                        v-model="b11_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b11_1_u')"
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
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b12_u')"
                      />
                      <a-input
                        v-model="b12_1"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b12_1_u')"
                      />
                      <a-input
                        v-model="b12_2"
                        style="width: 34%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b12_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b13_0')"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b13"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b13_u')"
                      />
                      <a-input
                        v-model="b13_1"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b13_1_u')"
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
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b14_u')"
                      />
                      <a-input
                        v-model="b14_1"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b14_1_u')"
                      />
                      <a-input
                        v-model="b14_2"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :addon-before="$t('b14_2')"
                        :suffix="$t('b14_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b15')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b15"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b15_u')"
                      />
                      <a-input
                        v-model="b15_1"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b15_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        rows="12"
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
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b17_u')"
                      />
                      <a-input
                        v-model="b17_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b17_1_u')"
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
                        :disabled="true"
                        rows="12"
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
                        rows="12"
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
                        rows="12"
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
                        rows="12"
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
                        :disabled="true"
                        rows="12"
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
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        rows="12"
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
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b26_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b27_0')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b27')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b27"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                      />
                      <a-input
                        v-model="b27_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b27_1_u')"
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
                        rows="12"
                        :suffix="$t('b28_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b29_0')"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b30"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b30_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b31')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b31"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b31_u')"
                      />
                      <a-input
                        v-model="b31_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :addon-before="$t('b31_1')"
                        :suffix="$t('b31_1_u')"
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
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b32_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b33_0')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
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
                        :disabled="true"
                        rows="12"
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
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b34_1')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b34_1"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b34_1_u')"
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
                        :disabled="true"
                        rows="12"
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
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b36_u')"
                      />
                      <a-input
                        v-model="b36_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b36_1_u')"
                        :addon-before="$t('b36_1')"
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
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b37_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>

          <a-card
            :title="$t('b38_0')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b38')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b38_1')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b38_1"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b38_1_u')"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b38_2"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b38_2_u')"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b38_3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b38_3_u')"
                        @change="refreshInitData()"
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
                        rows="12"
                        :suffix="$t('b39_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b40')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b40"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b41')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b41"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b41_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b42_u')"
                      />
                      <a-input
                        v-model="b42_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b42_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>

          <a-card
            :title="$t('b43_0')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b43')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b43_1')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b43_1"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b43_1_u')"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b43_2"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b43_2_u')"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b43_3"
                        style="width: 34%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b43_3_u')"
                        @change="refreshInitData()"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b44')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b44"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b44_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b45')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b45"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
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
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
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
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b47_u')"
                      />
                      <a-input
                        v-model="b47_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b47_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b48')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b48"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b48_u')"
                      />
                      <a-input
                        v-model="b48_1"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b48_1_u')"
                      />
                      <a-input
                        v-model="b48_2"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b48_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b49_0')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b49')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b49"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b49_u')"
                      />
                      <a-input
                        v-model="b49_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b49_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        rows="12"
                        :suffix="$t('b50_u')"
                      />
                      <a-input
                        v-model="b50_1"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b50_1_u')"
                      />
                      <a-input
                        v-model="b50_2"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :addon-before="$t('b50_2')"
                        :suffix="$t('b50_2_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b51')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b51"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b51_u')"
                      />
                      <a-input
                        v-model="b51_1"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b51_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b52')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b52"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        rows="12"
                        :suffix="$t('b53_u')"
                      />
                      <a-input
                        v-model="b53_1"
                        style="width: 50%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b53_1_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
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
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b56_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b57')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b57"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b58')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b58"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b59_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b60')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b60"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
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
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b62')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b62"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b62_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b63_0')"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b63"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                      />
                      <a-input
                        v-model="b63_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b63_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b64')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b64"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b64_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b65_0')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b65')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b65"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b65_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b66')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b66"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b66_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b67')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b67"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b67_u')"
                      />
                      <a-input
                        v-model="b67_1"
                        style="width: 50%;"
                        :disabled="false"
                        rows="12"
                        :addon-before="$t('b67_1')"
                        :suffix="$t('b67_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b68')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b68"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b68_u')"
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
          <a
            slot="extra"
            style="color: rgb(120, 120, 120); font-size: 15px;"
            @click="showModal"
          >
            <a-icon type="zoom-in" />
          </a>
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
            <div slot="序号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.序号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="仪表位号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.仪表位号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="安装位置" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.安装位置"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="仪表名称" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.仪表名称"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="规格及型号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.规格及型号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="单位" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.单位"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="数量" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.数量"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="备注" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.备注"
                @blur="handleTableChange()"
              ></a-input>
            </div>
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
    <a-modal
      :visible="modelVisible"
      title="工程量计算"
      :footer="null"
      width="1200"
      @ok="handleOk"
      @cancel="handleOk"
    >
      <div>
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
            <div slot="序号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.序号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="仪表位号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.仪表位号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="安装位置" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.安装位置"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="仪表名称" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.仪表名称"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="规格及型号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.规格及型号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="单位" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.单位"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="数量" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.数量"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="备注" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.备注"
                @blur="handleTableChange()"
              ></a-input>
            </div>
          </a-table>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  exportExcel,
  exportWord,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_9002"),
  data() {
    return {
      modelVisible: false,
      b1: "347.13",
      b2: "97",
      b6_1: "1",
      b8: "0.5",
      b9: "100",
      b10: "1",
      b11_1: "0.80",
      b12: "970",
      b12_1: "1230",
      b12_2: "1",
      b13: "600",
      b14: "200",
      b14_2: "90",
      b16: "1",
      b17: "2",
      b19: "0.5",
      b20: "1000",
      b21: "2",
      b24: "0.75",
      b25: "0.6",
      b27: "JBJ1-600",
      b27_1: "1",
      b28: "0.55",
      b30: "8.00",
      b31: "1",
      b31_1: "1",
      b34: "3",
      b34_1: "0.5",
      b36: "2",
      b36_1: "1",
      b38_1: "0.1",
      b38_2: "0.07",
      b38_3: "0.14",
      b39: "2",
      b40: "0.8",
      b42_1: "7",
      b43_1: "0.1",
      b44: "40",
      b45: "100",
      b46: "1",
      b47_1: "0.80",
      b48: "970",
      b48_1: "1230",
      b48_2: "1",
      b49: "600",
      b50: "200",
      b50_2: "90",
      b52: "1",
      b53: "2",
      b55: "0.5",
      b56: "1000",
      b57: "2",
      b60: "0.75",
      b61: "0.6",
      b63: "JBJ1-600",
      b63_1: "1",
      b64: "0.55",
      b67: "2",
      b67_1: "1",
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
              scopedSlots: { customRender: "序号" },
            },
            {
              title: "仪表位号",
              dataIndex: "仪表位号",
              key: "2",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "仪表位号" },
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "3",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "仪表名称" },
            },
            {
              title: "安装位置",
              dataIndex: "安装位置",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "安装位置" },
            },
            {
              title: "规格及型号",
              dataIndex: "规格及型号",
              key: "5",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "规格及型号" },
            },
            {
              title: "单位",
              dataIndex: "单位",
              key: "6",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "单位" },
            },
            {
              title: "数量",
              dataIndex: "数量",
              key: "7",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "数量" },
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
              scopedSlots: { customRender: "备注" },
            },
          ],
        },
      ],
      data: [],
    };
  },
  methods: {
    handleTableChange() {
      this.refreshInitData();
    },
    backHome() {
      this.$router.push("/works");
    },
    showModal() {
      this.modelVisible = true;
    },
    handleOk() {
      this.modelVisible = false;
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
        exportExcel(allData3, "脱水加药工程量", this);
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
        key1: this.b1,
        key2: this.b2,
        key3: this.b6_1,
        key4: this.b8,
        key5: this.b38_1,
        key6: this.b43_1,
      };
      exportWord("脱水加药计算书", "9002.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b1,
        key2: this.b2,
        key3: this.b6_1,
        key4: this.b8,
        key5: this.b38_1,
        key6: this.b43_1,
      };
      initWordStorage("9002.docx", data);
      this.handleExcelCache("9002.xlsx", "脱水加药工程量");
    },
    handleExcelCache(path, name) {
      try {
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
        const data = [...allData3];
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
    get_a_1() {
      return parseFloat(this.b31) + parseFloat(this.b31_1);
    },
    get_a_2() {
      return parseFloat(this.b31) + parseFloat(this.b31_1);
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3() {
      return (
        parseFloat(this.b1) /
        (1 - parseFloat(this.b2) / 100) /
        1000
      ).toFixed(7);
    },
    b7() {
      storeValueInLocalStorage("dehydrationPamData", this.b6_1);
      return ((parseFloat(this.b6_1) * parseFloat(this.b1)) / 1000000).toFixed(
        8
      );
    },
    b11() {
      return (
        (parseFloat(this.b7) * 1000) /
        parseFloat(this.b8) /
        parseFloat(this.b9) /
        parseFloat(this.b10)
      ).toFixed(2);
    },
    b13_1() {
      return (parseFloat(this.b13) / 1000).toFixed(2);
    },
    b14_1() {
      return (parseFloat(this.b14) / 1000).toFixed(2);
    },
    b15() {
      return (parseFloat(this.b13) / 2).toFixed(2);
    },
    b15_1() {
      return (parseFloat(this.b15) / 1000).toFixed(2);
    },
    b17_1() {
      return ((parseFloat(this.b17) * 2) / parseFloat(this.b13_1)).toFixed(2);
    },
    b18() {
      return (
        (parseFloat(this.b17) / Math.PI / parseFloat(this.b13_1)) *
        60
      ).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b16) * parseFloat(this.b21)).toFixed(0);
    },
    b23() {
      return (
        (parseFloat(this.b19) *
          parseFloat(this.b20) *
          Math.pow((parseFloat(this.b17) * 2) / parseFloat(this.b13_1), 3) *
          parseFloat(this.b22) *
          parseFloat(this.b14_1) *
          Math.sin(parseFloat(this.b14_2)) *
          (Math.pow(parseFloat(this.b13_1) / 2, 4) -
            Math.pow(parseFloat(this.b13_1) / 2 - parseFloat(this.b15_1), 4))) /
        408 /
        9.81
      ).toFixed(2);
    },
    b26() {
      return (
        parseFloat(this.b23) /
        parseFloat(this.b23) /
        parseFloat(this.b25)
      ).toFixed(2);
    },
    b32() {
      return (
        (((parseFloat(this.b7) * 1000) /
          parseFloat(this.b30) /
          parseFloat(this.b8) /
          parseFloat(this.b9)) *
          10000) /
        parseFloat(this.b31)
      ).toFixed(2);
    },
    b33() {
      return (
        (parseFloat(this.b3) * parseFloat(this.b7)) /
        parseFloat(this.b9 / 100) /
        1000
      ).toFixed(8);
    },
    b35() {
      return (parseFloat(this.b34) * parseFloat(this.b34_1)).toFixed(2);
    },
    b37() {
      return (
        (parseFloat(this.b3) * parseFloat(this.b7)) /
        (parseFloat(this.b8) / 100) /
        1000 /
        parseFloat(this.b35) /
        parseFloat(this.b36)
      ).toFixed(8);
    },
    b41() {
      return ((parseFloat(this.b38_1) * 1000) / parseFloat(this.b35)).toFixed(
        8
      );
    },
    b42() {
      return (
        (parseFloat(this.b38_1) * parseFloat(this.b39)) /
        parseFloat(this.b40)
      ).toFixed(2);
    },
    b43_2() {
      return ((parseFloat(this.b1) * 0.1) / 1000).toFixed(2);
    },
    b43_3() {
      return ((parseFloat(this.b1) * 0.3) / 1000).toFixed(2);
    },
    b47() {
      return (
        (parseFloat(this.b43_1) * 1000) /
        parseFloat(this.b44) /
        parseFloat(this.b45) /
        parseFloat(this.b46)
      ).toFixed(2);
    },
    b49_1() {
      return (parseFloat(this.b49) / 1000).toFixed(2);
    },
    b50_1() {
      return (parseFloat(this.b50) / 1000).toFixed(2);
    },
    b51() {
      return (parseFloat(this.b49) / 2).toFixed(2);
    },
    b51_1() {
      return (parseFloat(this.b51) / 1000).toFixed(2);
    },
    b53_1() {
      return ((parseFloat(this.b53) * 2) / parseFloat(this.b49_1)).toFixed(2);
    },
    b54() {
      return (
        (parseFloat(this.b53) / Math.PI / parseFloat(this.b49_1)) *
        60
      ).toFixed(2);
    },
    b58() {
      return (parseFloat(this.b52) * parseFloat(this.b57)).toFixed(0);
    },
    b59() {
      return (
        (parseFloat(this.b55) *
          parseFloat(this.b56) *
          Math.pow(parseFloat(this.b53_1), 3) *
          parseFloat(this.b58) *
          parseFloat(this.b50_1) *
          Math.sin(parseFloat(this.b50_2)) *
          (Math.pow(parseFloat(this.b49_1) / 2, 4) -
            Math.pow(parseFloat(this.b49_1) / 2 - parseFloat(this.b51_1), 4))) /
        408 /
        9.81
      ).toFixed(2);
    },
    b62() {
      return (
        parseFloat(this.b59) /
        parseFloat(this.b60) /
        parseFloat(this.b61)
      ).toFixed(2);
    },
    b65() {
      return (parseFloat(this.b43_1) * 1000).toFixed(2);
    },
    b66() {
      return this.b35;
    },
    b68() {
      return (
        (((parseFloat(this.b43_1) * 1000) /
          parseFloat(this.b66) /
          parseFloat(this.b44) /
          parseFloat(this.b45)) *
          10000) /
        parseFloat(this.b67)
      ).toFixed(2);
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "",
          仪表名称: "压力表",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_1(),
          a: "",
          b: "",
          备注: "",
        },
        {
          序号: "1",
          仪表位号: "",
          仪表名称: "流量计",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.get_a_2(),
          a: "",
          b: "",
          备注: "",
        },
      ];
    },
  },
  activated() {
    this.initWaterData();
    console.log("9002-activated被调用了");
    this.refreshInitData();
  },
  created() {
    this.data1 = [];
    this.data2 = [];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "压力表",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_1(),
        a: "",
        b: "",
        备注: "",
      },
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.get_a_2(),
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
