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
          style="margin-bottom: 0px; "
          :headStyle="{ 'font-weight': 'bolder' }"
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
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
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
                    <a-input
                      v-model="b3_1"
                      style="width: 100%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
                    />
                    <a-input
                      v-model="b3_2"
                      style="width: 100%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_2')"
                      :suffix="$t('b3_2_u')"
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
                    <a-input
                      v-model="b4"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                      style="width: 50%;"
                      rows="12"
                      :placeholder="$t('b8')"
                      :suffix="$t('b8_u')"
                    />
                    <a-input
                      v-model="b8_1"
                      :disabled="true"
                      style="width: 50%;"
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
                      style="width: 50%;"
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
                    />
                    <a-input
                      v-model="b9_1"
                      :disabled="true"
                      style="width: 50%;"
                      rows="12"
                      :placeholder="$t('b9_1')"
                      :suffix="$t('b9_1_u')"
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
                    <a-input v-model="b10" rows="12" :placeholder="$t('b10')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b11')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b11"
                      rows="12"
                      :placeholder="$t('b11')"
                      :suffix="$t('b11_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b11_1')"
                  style="margin-top: 1e0px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b11_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b11_1')"
                      :suffix="$t('b11_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b12')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b12"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b12')"
                      :suffix="$t('b12_u')"
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
          :title="$t('设计参数计算')"
          style="margin-bottom: 0px; "
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b13')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b14')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b15')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b15"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b15_u')"
                      />
                      <a-input
                        v-model="b15_1"
                        style="width: 100%;"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b15_1_u')"
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
                      <a-input :disabled="true" v-model="b16" rows="12" />
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
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b18_u')"
                      />
                      <a-input
                        v-model="b18_1"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b18_1_u')"
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
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b20"
                        style="width: 100%;"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b20_u')"
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
                      <a-input v-model="b21" rows="12" :suffix="$t('b21_u')" />
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
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b22_u')"
                      />
                      <a-input
                        v-model="b22_1"
                        rows="12"
                        style="width: 50%;"
                        :suffix="$t('b22_1_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b23_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b24')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b24"
                        rows="12"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b24_u')"
                      />
                      <a-input
                        v-model="b24_1"
                        rows="12"
                        style="width: 50%;"
                        :suffix="$t('b24_1_u')"
                        :disabled="false"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        style="width: 100%;"
                        :disabled="true"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b26')"
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
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b27"
                        rows="12"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b27_u')"
                      />
                      <a-input
                        v-model="b27_1"
                        rows="12"
                        style="width: 50%;"
                        :suffix="$t('b27_1_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b28_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b29')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b29"
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b29_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b30_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b31_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b32_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b33_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b34_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b35_u')"
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
                        style="width: 100%;"
                        :disabled="true"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b38_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b39_u')"
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
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b40_u')"
                      />
                      <a-input
                        v-model="b40_1"
                        rows="12"
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b40_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b41')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b42_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b43_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b44_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b45_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b46_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b47_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b48_u')"
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
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b49_u')"
                      />
                      <a-input
                        v-model="b49_1"
                        rows="12"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b49_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b50')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b50"
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b50_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b51_u')"
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
                        style="width: 100%;"
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
                        style="width: 100%;"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b54_u')"
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
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b55_u')"
                      />
                      <a-input
                        v-model="b55_1"
                        rows="12"
                        style="width: 50%;"
                        :disabled="true"
                        :suffix="$t('b55_1_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b56_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b57_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b58')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b58"
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b58_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b59_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b60_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b61')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b62')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b62"
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b62_u')"
                      />
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b63_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b64_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b65')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b65"
                        rows="12"
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b65_u')"
                      />
                      <a-input
                        v-model="b65_1"
                        rows="12"
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b65_1_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b66_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b67_u')"
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
                        style="width: 100%;"
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
                      <a-input
                        v-model="b69"
                        rows="12"
                        style="width: 100%;"
                        :disabled="false"
                      />
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b70_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b71_u')"
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
                        rows="12"
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b72_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b73_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b74_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b75_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b76')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b76"
                        rows="12"
                        style="width: 50%;"
                        :disabled="false"
                      />
                      <a-input
                        v-model="b76_1"
                        rows="12"
                        style="width: 50%;"
                        :disabled="false"
                        :suffix="$t('b76_1_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b77_u')"
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
                        style="width: 100%;"
                        :disabled="false"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b78_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b79')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b79"
                        rows="12"
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b79_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b80')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b80"
                        rows="12"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b80_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b81')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b82')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b83')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b83"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b83_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b84')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b84"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b84_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b85')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b85"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b85_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b86')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b86"
                          rows="12"
                          style="width: 33%;"
                          :disabled="true"
                          :suffix="$t('b86_u')"
                        />
                        <a-input
                          v-model="b86_1"
                          rows="12"
                          style="width: 33%;"
                          :disabled="false"
                        />
                        <a-input
                          v-model="b86_2"
                          rows="12"
                          style="width: 34%;"
                          :disabled="true"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b87')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b88')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b88"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b88_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b89')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b89"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b89_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b90')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b90"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b90_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b91')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b91"
                          rows="12"
                          style="width: 33%;"
                          :disabled="true"
                          :suffix="$t('b91_u')"
                        />
                        <a-input
                          v-model="b91_1"
                          rows="12"
                          style="width: 33%;"
                          :disabled="false"
                        />
                        <a-input
                          v-model="b91_2"
                          rows="12"
                          style="width: 34%;"
                          :disabled="true"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b92')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b93')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b93"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b93_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b94')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b94"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b94_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b95')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b95"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b95_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b96')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b96"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b96_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b97')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b98')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b98"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b98_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b99')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b99"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b99_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b100')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b100"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b100_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b101')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b101"
                          rows="12"
                          style="width: 33%;"
                          :disabled="true"
                          :suffix="$t('b101_u')"
                        />
                        <a-input
                          v-model="b101_1"
                          rows="12"
                          style="width: 33%;"
                          :disabled="false"
                        />
                        <a-input
                          v-model="b101_2"
                          rows="12"
                          style="width: 34%;"
                          :disabled="true"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b103')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b103"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b103_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b104')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b104"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b104_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b105')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b105"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b105_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b106')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b106"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b106_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b107')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b107"
                          rows="12"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b107_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b108')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b108"
                          rows="12"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b108_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b111')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b111_1"
                          rows="12"
                          style="width: 33%;"
                          :disabled="true"
                          :suffix="$t('b111_1_u')"
                        />
                        <a-input
                          v-model="b111_2"
                          rows="12"
                          style="width: 33%;"
                          :disabled="true"
                          :suffix="$t('b111_2_u')"
                        />
                        <a-input
                          v-model="b111_3"
                          rows="12"
                          style="width: 34%;"
                          :disabled="true"
                          :suffix="$t('b111_3_u')"
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
import {
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_4001"),
  data() {
    return {
      b3: "125000",
      b4: "6",
      b5: "0.5",
      b6: "1.5",
      b7: "24",
      b8: "30",
      b9: "6",
      b10: "0.5",
      b11: "1.14",
      b11_1: "15",
      b13: "",
      b14: "",
      b15_1: "12",
      b17: "",
      b19: "",
      b21: "16",
      b22_1: "60",
      b23: "9.5",
      b24_1: "6.3",
      b26: "",
      b31: "0.6",
      b34: "0.05",
      b37: "",
      b38: "0.75",
      b40_1: "1",
      b41: "",
      b42: "1.5",
      b45: "0.1",
      b46: "0.25",
      b49: "75",
      b49_1: "0.075",
      b53: "0.0024",
      b55: "12",
      b61: "",
      b62: "388.8",
      b63: "3.5",
      b64: "11.89280136",
      b65: "600",
      b65_1: "0.6",
      b66: "70",
      b67: "2.546479089",
      b68: "7.38",
      b69: "0.0135",
      b70: "3.384144825",
      b71: "3.261195785",
      b72: "0.45",
      b73: "0.1188",
      b74: "2.65",
      b75: "1",
      b76: "0.41",
      b76_1: "2592",
      b77: "1",
      b77_1: "5",
      b78: "0.9735",
      b78_1: "2",
      b79: "1.5",
      b80: "9.24",
      b81: "",
      b82: "",
      b83: "1.522240328",
      b84: "1",
      b85: "1.522240328",
      b86: "2×0.76",
      b86_1: "2",
      b86_2: "0.76112",
      b87: "",
      b88: "1.522240328",
      b89: "1.2",
      b90: "1.268533607",
      b91: "2×0.63",
      b91_1: "2",
      b91_2: "0.634267",
      b92: "",
      b93: "0.72",
      b94: "2.55",
      b95: "0.282352941",
      b96: "0.6",
      b97: "",
      b98: "0.72",
      b99: "1.2",
      b100: "0.6",
      b101: "1×0.6",
      b101_1: "1",
      b101_2: "0.6",
      b102: "",
      b103: "0.3",
      b104: "0.3",
      b105: "1",
      b106: "0.6",
      b107: "1.5",
      b108: "3.4",
      b111_1: "52.5",
      b111_2: "22.9",
      b111_3: "3.4",
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
        exportExcel3(allData1, allData2, allData3, "普通快滤池工程量", this);
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
        key3: this.b3_2,
        key4: this.b4,
        key5: this.b7,
        key6: this.b8,
        key7: this.b9,
        key8: this.b10,
      };
      exportWord("普通快滤池计算书", "4001.docx", data, this);
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
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(8);
    },
    b3_2() {
      return (parseFloat(this.b3_1) / 3600).toFixed(8);
    },
    b8_1() {
      return (parseFloat(this.b8) / 60).toFixed(1);
    },
    b9_1() {
      return (parseFloat(this.b9) / 60).toFixed(1);
    },
    b12() {
      return (0.9 * parseFloat(this.b6) * parseFloat(this.b5)).toFixed(3);
    },
    b15() {
      return (
        (43.2 *
          Math.pow(parseFloat(this.b12), 1.45) *
          Math.pow(parseFloat(this.b10) + 0.35, 1.632)) /
        ((1 + parseFloat(this.b10)) * Math.pow(parseFloat(this.b11), 0.632))
      ).toFixed(8);
    },
    b16() {
      return (
        parseFloat(this.b7) /
        (parseFloat(this.b7) -
          parseFloat(this.b8_1) -
          (3.6 * parseFloat(this.b15) * parseFloat(this.b9_1)) /
            parseFloat(this.b4))
      ).toFixed(8);
    },
    b18() {
      return (parseFloat(this.b16) * parseFloat(this.b3_1)).toFixed(8);
    },
    b18_1() {
      return (parseFloat(this.b18) / 3600).toFixed(2);
    },
    b20() {
      return (parseFloat(this.b18) / parseFloat(this.b4)).toFixed(8);
    },
    b22() {
      return (parseFloat(this.b20) / parseFloat(this.b21)).toFixed(8);
    },
    b24() {
      return (parseFloat(this.b22_1) / parseFloat(this.b23)).toFixed(8);
    },
    b25() {
      return (parseFloat(this.b23) / parseFloat(this.b24_1)).toFixed(8);
    },
    b27() {
      return (parseFloat(this.b15_1) * parseFloat(this.b22_1)).toFixed(0);
    },
    b27_1() {
      return (parseFloat(this.b27) / 1000).toFixed(2);
    },
    b28() {
      return 2;
    },
    b29() {
      return this.ROUNDUP(parseFloat(this.b23) / parseFloat(this.b28), 0);
    },
    b30() {
      return this.b24_1;
    },
    b32() {
      return Math.pow(
        (parseFloat(this.b15_1) *
          parseFloat(this.b24_1) *
          parseFloat(this.b28)) /
          (4570 * parseFloat(this.b31)),
        0.5
      ).toFixed(8);
    },
    b33() {
      return this.b105;
    },
    b35() {
      return (
        parseFloat(this.b10) * parseFloat(this.b33) +
        2.5 * parseFloat(this.b32) +
        parseFloat(this.b34) +
        0.075
      ).toFixed(3);
    },
    b36() {
      return (
        (5 * 2 * parseFloat(this.b32) * parseFloat(this.b30)) /
        parseFloat(this.b22_1)
      ).toFixed(8);
    },
    b39() {
      return (
        0.81 *
        Math.pow(
          (parseFloat(this.b22_1) * parseFloat(this.b15_1)) /
            (1000 * parseFloat(this.b38)),
          2 / 3
        )
      ).toFixed(9);
    },
    b40() {
      return parseFloat(this.b39) + 0.2;
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
