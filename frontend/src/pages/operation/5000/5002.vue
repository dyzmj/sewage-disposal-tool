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
            :title="$t('b4')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b12"
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b12')"
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
                      rows="12"
                      :placeholder="$t('b13')"
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
                      rows="12"
                      :placeholder="$t('b14')"
                      :suffix="$t('b14_u')"
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
                      style="width: 100%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b15')"
                      :suffix="$t('b15_u')"
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
                      :placeholder="$t('b16')"
                      :suffix="$t('b16_u')"
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
            :title="$t('b17')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b19')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b20')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :suffix="$t('b24_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-card>
            <a-card
              :title="$t('b25')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b26')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
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
                        style="width: 100%;"
                        :disabled="true"
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
                        :disabled="true"
                        :suffix="$t('b28_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        :disabled="true"
                        :suffix="$t('b29_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                        :disabled="true"
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
                        style="width: 100%;"
                        :disabled="true"
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
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b41')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b42_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b43')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b43"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b43_u')"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        :disabled="true"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b47_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b48_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b49')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b49"
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b49_u')"
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
                        style="width: 100%;"
                        :disabled="true"
                        :suffix="$t('b50_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
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
                  <a-form>
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
                          :suffix="$t('b52_u')"
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
                          style="width: 100%;"
                          :disabled="true"
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
                          style="width: 100%;"
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
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b55_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </a-card>
                <a-card
                  :title="$t('b56')"
                  style="margin-bottom: 24px"
                  :bordered="false"
                  :body-style="{ padding: 4 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
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
                          :suffix="$t('b57_u')"
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
                          style="width: 100%;"
                          :disabled="false"
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
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b61_u')"
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
                          :disabled="false"
                          :suffix="$t('b62_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b63')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b63"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b63_u')"
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
                          :disabled="true"
                          :suffix="$t('b64_u')"
                        />
                      </a-input-group>
                    </a-form-item>
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
                          :suffix="$t('b66_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </a-card>
                <a-card
                  :title="$t('b67')"
                  style="margin-bottom: 24px"
                  :bordered="false"
                  :body-style="{ padding: 4 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
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
                          :disabled="false"
                          :suffix="$t('b68_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b69')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b69"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b69_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b70')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b70"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b70_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b71')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b71"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b71_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </a-card>
                <a-card
                  :title="$t('b72')"
                  style="margin-bottom: 24px"
                  :bordered="false"
                  :body-style="{ padding: 4 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
                    <a-form-item
                      :label="$t('b73')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b73"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b73_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b74')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b74"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b74_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b75')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b75"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b75_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b76')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b76"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b76_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b77')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b77"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b77_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b78')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b78"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b78_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b79')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b79"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b79_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b80')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b80"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b80_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b81')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b81"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b81_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b82')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b82"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b82_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b83')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b83"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b83_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b84')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b84"
                          style="width: 100%;"
                          :disabled="true"
                          :suffix="$t('b84_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </a-card>
                <a-card
                  :title="$t('b85')"
                  style="margin-bottom: 24px"
                  :bordered="false"
                  :body-style="{ padding: 4 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
                    <a-form-item
                      :label="$t('b86')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b86"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b86_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b87')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b87"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b87_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b88')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b88"
                          style="width: 100%;"
                          :disabled="false"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b89')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b89"
                          style="width: 100%;"
                          :disabled="false"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b90')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b90"
                          style="width: 100%;"
                          :disabled="false"
                          :suffix="$t('b90_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </a-card>
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
import { exportExcel3, exportWord } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_5002"),
  data() {
    return {
      b6: "10",
      b7: "",
      b8: "2660",
      b9: "53",
      b10: "7.4",
      b11: "",
      b12: "",
      b13: "20",
      b14: "200",
      b15: "4",
      b16: "50",
      b17: "",
      b18: "参数",
      b19: "",
      b20: "",
      b24: "200",
      b25: "",
      b26: "",
      b32: "90",
      b33: "0.02",
      b34: "ZW1500-600",
      b35: "PVDF",
      b36: "外压式中空纤维",
      b37: "51.1",
      b38: "<= 1.0",
      b39: "<= 0.2",
      b40: "<= 3",
      b51: "",
      b52: "29",
      b54: "0.3",
      b56: "",
      b57: "1",
      b58: "60",
      b59: "100",
      b61: "0.25",
      b62: "2",
      b63: "8.5",
      b67: "",
      b68: "2",
      b70: "0.35",
      b71: "2",
      b72: "",
      b73: "1",
      b74: "2",
      b75: "5~10",
      b76: "500",
      b77: "500",
      b78: "500",
      b85: "",
      b86: "1",
      b87: "5",
      b88: "1000",
      b89: "2000",
      b90: "1000",
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
        exportExcel3(allData1, allData2, allData3, "UF-GE工程量", this);
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
        key1: this.b6,
        key2: this.b8,
        key3: this.b9,
        key4: this.b10,
        key5: this.b13,
        key6: this.b21,
        key7: this.b30,
        key8: this.b22,
        key9: this.b16,
        key10: this.b32,
        key11: this.b37,
        key12: this.b38,
        key13: this.b39,
        key14: this.b40,
      };
      exportWord("UF-GE计算书", "5002.docx", data, this);
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
    b21() {
      return (parseFloat(this.b30)*parseFloat(this.b22)/parseFloat(this.b32)*100).toFixed(1);
    },
    b22() {
      return this.b15;
    },
    b23() {
      return (parseFloat(this.b21)/parseFloat(this.b22)).toFixed(1);
    },
    b27() {
      return this.b21;
    },
    b28() {
      return (parseFloat(this.b14)*parseFloat(this.b15)).toFixed(1);
    },
    b29() {
      return this.b22;
    },
    b30() {
      return this.b14;
    },
    b31() {
      return (parseFloat(this.b42)*parseFloat(this.b37)/1000).toFixed(1);
    },
    b42() {
      return this.b16;
    },
    b43() {
      return (parseFloat(this.b42)/parseFloat(this.b32)*100).toFixed(1);
    },
    b44() {
      return this.ROUNDUP(parseFloat(this.b30)/parseFloat(this.b42)/parseFloat(this.b37)*1000,0);
    },
    b45() {
      return (parseFloat(this.b44)*parseFloat(this.b37)).toFixed(1);
    },
    b46() {
      return this.b22;
    },
    b47() {
      return (parseFloat(this.b44)*parseFloat(this.b46)).toFixed(0);
    },
    b48() {
      return (parseFloat(this.b45)*parseFloat(this.b46)).toFixed(1);
    },
    b49() {
      return (parseFloat(this.b30)/parseFloat(this.b44)/parseFloat(this.b37)*1000).toFixed(1);
    },
    b50() {
      return (parseFloat(this.b49)/parseFloat(this.b32)*100).toFixed(1);
    },
    b53() {
      return this.ROUND(parseFloat(this.b30)/parseFloat(this.b32)*100, 2);
    },
    b55() {
      return (parseFloat(this.b22) + 1).toFixed(0);
    },
    b60() {
      return (parseFloat(this.b59)*parseFloat(this.b44)*parseFloat(this.b37)/1000).toFixed(2);
    },
    b64() {
      return (parseFloat(this.b63)*parseFloat(this.b44)).toFixed(1);
    },
    b65() {
      return (parseFloat(this.b64)*0.1/0.7).toFixed(0);
    },
    b66() {
      return this.ROUND(parseFloat(this.b65)/60*parseFloat(this.b22),2);
    },
    b69() {
      return (parseFloat(this.b68)*parseFloat(this.b44)).toFixed(0);
    },
    b79() {
      return this.ROUND(parseFloat(this.b69)*parseFloat(this.b76)/0.1/1.155/1000,2);
    },
    b80() {
      return this.ROUND(parseFloat(this.b69)*parseFloat(this.b77)/0.3/1.55/1000,2);
    },
    b81() {
      return this.ROUND(parseFloat(this.b69)*parseFloat(this.b78)/0.3/1.37/1000,2);
    },
    b82() {
      return this.ROUND(parseFloat(this.b79)/0.7,2);
    },
    b83() {
      return this.ROUND(parseFloat(this.b80)/0.7,2);
    },
    b84() {
      return this.ROUND(parseFloat(this.b81)/0.7,2);
    },
  },
  created() {
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
