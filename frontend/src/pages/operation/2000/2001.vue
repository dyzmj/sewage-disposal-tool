<template>
  <div class="calc_page" style="background-color: #edeff2">
    <a-tabs default-active-key="1" size="small">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="smile" theme="outlined" />
          {{ $t("tab_1") }}
        </span>
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
              <a-card
                :title="$t('b2')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
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
                        value="120000"
                        :disabled="false"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b3_2"
                        :placeholder="$t('b3_2')"
                        :suffix="$t('b3_2_u')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="b3_3"
                        :placeholder="$t('b3_3')"
                        :suffix="$t('b3_3_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b6')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b7')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b7"
                        :placeholder="$t('b7')"
                        :suffix="$t('b7_u')"
                        :disabled="false"
                        @change="refreshInitData()"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b8')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b8"
                        :placeholder="$t('b8')"
                        :suffix="$t('b8_u')"
                        :disabled="false"
                        @change="refreshInitData()"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b9')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b9"
                        :placeholder="$t('b9')"
                        :suffix="$t('b9_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b10"
                        :placeholder="$t('b10')"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b11')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b11"
                        :placeholder="$t('b11')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b12')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b12"
                        :placeholder="$t('b12')"
                        :suffix="$t('b12_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b13')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b13"
                        :placeholder="$t('b13')"
                        :suffix="$t('b13_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <br />
                    <p style="font-weight: bolder; color: red">
                      {{ $t("b14") }}
                    </p>
                  </a-form>
                </div>
              </a-card>
              <a-card :title="$t('referenceInformation')">
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                      <img
                        style="max-width: 360px; height: auto;"
                        src="@/assets/img/2000/2001.jpg"
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
                :title="$t('b15')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b16')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b16"
                        :placeholder="$t('b16')"
                        :suffix="$t('b16_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('b17')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b17"
                          style="width: 50%"
                          :placeholder="$t('b17')"
                          :suffix="$t('b17_u')"
                          :disabled="true"
                        />
                        <a-input
                          v-model="b17_1"
                          :prefix="$t('sel')"
                          style="width: 50%"
                          :placeholder="$t('b17_1')"
                          :suffix="$t('b17_1_u')"
                          :disabled="false"
                        />
                      </a-input-group>
                    </a-form-item>
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
                          :placeholder="$t('b18')"
                          :suffix="$t('b18_u')"
                          :disabled="true"
                        />
                        <a-input
                          v-model="b18_1"
                          :prefix="$t('sel')"
                          style="width: 50%"
                          :placeholder="$t('b18_1')"
                          :suffix="$t('b18_1_u')"
                          :disabled="false"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b20')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <a-card
                  :title="$t('b21')"
                  style="margin-bottom: 24px"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        :label="$t('b22')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="b22"
                          :placeholder="$t('b22')"
                          :suffix="$t('b22_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                      <!-- <a-form-item
                        :label="$t('b23')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-input
                            v-model="b23"
                            style="width: 100%"
                            :placeholder="$t('b23')"
                            :disabled="false"
                          />
                        </a-input-group>
                      </a-form-item> -->
                      <a-form-item
                        :label="$t('b24')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-input
                            v-model="b24"
                            style="width: 100%"
                            :placeholder="$t('b24')"
                            :suffix="$t('b24_u')"
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
                            style="width: 100%"
                            :placeholder="$t('b25')"
                            :suffix="$t('b25_u')"
                            :disabled="false"
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
                            style="width: 100%"
                            :placeholder="$t('b26')"
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
                            style="width: 100%"
                            :placeholder="$t('b27')"
                            :suffix="$t('b27_u')"
                            :disabled="false"
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
                            style="width: 100%"
                            :placeholder="$t('b28')"
                            :disabled="true"
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
                            style="width: 100%"
                            :placeholder="$t('b29')"
                            :disabled="true"
                          />
                        </a-input-group>
                      </a-form-item>
                    </a-form>
                  </div>
                </a-card>
                <a-card
                  :title="$t('b31')"
                  style="margin-bottom: 24px"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        :label="$t('b32')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="b32"
                          :placeholder="$t('b32')"
                          :disabled="true"
                        />
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
                            style="width: 100%"
                            :placeholder="$t('b33')"
                            :disabled="false"
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
                            style="width: 100%"
                            :placeholder="$t('b34')"
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
                            style="width: 100%"
                            :placeholder="$t('b35')"
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
                            style="width: 100%"
                            :placeholder="$t('b36')"
                            :suffix="$t('b36_u')"
                            :disabled="true"
                          />
                        </a-input-group>
                      </a-form-item>
                      <a-form-item
                        label="   "
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-input
                            style="width: 33%"
                            :suffix="$t('b39_1')"
                            :disabled="true"
                          />
                          <a-input
                            style="width: 33%"
                            :suffix="$t('b39_2')"
                            :disabled="true"
                          />
                          <a-input
                            style="width: 34%"
                            :suffix="$t('b39_3')"
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
                            v-model="b39_1"
                            style="width: 33%"
                            :placeholder="$t('b39_1')"
                            :disabled="false"
                          />
                          <a-input
                            v-model="b39_2"
                            style="width: 33%"
                            :placeholder="$t('b39_2')"
                            :disabled="false"
                          />
                          <a-input
                            v-model="b39_3"
                            style="width: 34%"
                            :placeholder="$t('b39_3')"
                            :disabled="false"
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
                            v-model="b40_1"
                            style="width: 33%"
                            :placeholder="$t('b40')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b40_2"
                            style="width: 33%"
                            :placeholder="$t('b40')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b40_3"
                            style="width: 34%"
                            :placeholder="$t('b40')"
                            :disabled="true"
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
                            v-model="b41_1"
                            style="width: 33%"
                            :placeholder="$t('b41')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b41_2"
                            style="width: 33%"
                            :placeholder="$t('b41')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b41_3"
                            style="width: 34%"
                            :placeholder="$t('b41')"
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
                            v-model="b42_1"
                            style="width: 33%"
                            :placeholder="$t('b42')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b42_2"
                            style="width: 33%"
                            :placeholder="$t('b42')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b42_3"
                            style="width: 34%"
                            :placeholder="$t('b42')"
                            :disabled="true"
                          />
                        </a-input-group>
                      </a-form-item>
                    </a-form>
                  </div>
                </a-card>
                <a-card
                  :title="$t('b44')"
                  style="margin-bottom: 24px"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <br />
                    <p style="font-weight: bolder; color: red">
                      {{ $t("b44_1") }}
                    </p>
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        :label="$t('b45')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="b45"
                          :placeholder="$t('b45')"
                          :suffix="$t('b45_u')"
                          :disabled="true"
                        />
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
                            style="width: 100%"
                            :placeholder="$t('b46')"
                            :disabled="false"
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
                            style="width: 100%"
                            :placeholder="$t('b47')"
                            :disabled="false"
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
                            style="width: 100%"
                            :placeholder="$t('b48')"
                            :suffix="$t('b48_u')"
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
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        label="       "
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-input
                            style="width: 33%"
                            :suffix="$t('b51_1')"
                            :disabled="true"
                          />
                          <a-input
                            style="width: 33%"
                            :suffix="$t('b51_2')"
                            :disabled="true"
                          />
                          <a-input
                            style="width: 34%"
                            :suffix="$t('b51_3')"
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
                            v-model="b52_1"
                            style="width: 33%"
                            :placeholder="$t('b52_1')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b52_2"
                            style="width: 33%"
                            :placeholder="$t('b52_2')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b52_3"
                            style="width: 34%"
                            :placeholder="$t('b52_3')"
                            :disabled="true"
                          />
                        </a-input-group>
                      </a-form-item>
                      <a-form-item
                        label="                  "
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-textarea
                            style="width: 33%"
                            :placeholder="$t('b53')"
                            auto-size
                            :disabled="true"
                          />
                          <a-textarea
                            style="width: 33%"
                            :placeholder="$t('b53_1')"
                            auto-size
                            :disabled="true"
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
                            v-model="b54_1"
                            style="width: 33%"
                            :placeholder="$t('b54')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b54_2"
                            style="width: 33%"
                            :placeholder="$t('b54')"
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
                            v-model="b55_1"
                            style="width: 33%"
                            :placeholder="$t('b55')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b55_2"
                            style="width: 33%"
                            :placeholder="$t('b55')"
                            :disabled="true"
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
                            v-model="b56_1"
                            style="width: 33%"
                            :placeholder="$t('b56')"
                            :disabled="false"
                          />
                          <a-input
                            v-model="b56_2"
                            style="width: 33%"
                            :placeholder="$t('b56')"
                            :disabled="false"
                          />
                        </a-input-group>
                      </a-form-item>
                    </a-form>
                  </div>
                </a-card>

                <a-card
                  :title="$t('b58')"
                  style="margin-bottom: 24px"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <br />
                  <p style="font-weight: bolder; color: red">
                    {{ $t("b58_1") }}
                  </p>
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        label=" "
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-input
                            style="width: 33%"
                            :suffix="$t('b59_1')"
                            :disabled="true"
                          />
                          <a-input
                            style="width: 33%"
                            :suffix="$t('b59_2')"
                            :disabled="true"
                          />
                          <a-input
                            style="width: 34%"
                            :suffix="$t('b59_3')"
                            :disabled="true"
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
                            v-model="b60_1"
                            style="width: 33%"
                            :placeholder="$t('b60')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b60_2"
                            style="width: 33%"
                            :placeholder="$t('b60')"
                            :disabled="true"
                          />
                          <a-input
                            v-model="b60_3"
                            style="width: 34%"
                            :placeholder="$t('b60')"
                            :disabled="true"
                          />
                        </a-input-group>
                      </a-form-item>
                      <a-form-item
                        :label="$t('b61')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-input
                            v-model="b61"
                            style="width: 33%"
                            :placeholder="$t('b61')"
                            :disabled="true"
                          />
                          <a-input
                            style="width: 33%"
                            :placeholder="$t('b61_u')"
                            :disabled="true"
                          />
                        </a-input-group>
                      </a-form-item>
                      <a-form-item
                        :label="$t('b62')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input-group compact>
                          <a-input
                            v-model="b62"
                            style="width: 33%"
                            :placeholder="$t('b62')"
                            :disabled="true"
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
              <a
                slot="extra"
                style="color: rgb(120, 120, 120); font-size: 15px;"
                @click="showModal"
              >
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
                  <div slot="序号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.序号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="单体位号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.单体位号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="名称" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.名称"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="Dimensions" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.Dimensions"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="标高" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.标高"
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
                  <div slot="disinfectiontank" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.disinfectiontank"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="结构形式" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.结构形式"
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
                  <div slot="暖通要求" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.暖通要求"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
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
                  <div slot="序号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.序号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="设备位号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.设备位号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="设备工艺名称" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.设备工艺名称"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="设备类型" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.设备类型"
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
                  <div slot="运行时间" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.运行时间"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="主要材质" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.主要材质"
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
      </a-tab-pane>
      <a-tab-pane key="2" force-render>
        <span slot="tab">
          <a-icon type="smile" :rotate="180" />
          {{ $t("tab_2") }}
        </span>
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
              <a-card
                :title="$t('c2')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('c3_1')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c3_1"
                        :placeholder="$t('c3_1')"
                        :suffix="$t('b3_1_u')"
                        value="120000"
                        :disabled="false"
                      />
                      <a-input
                        v-model="c3_2"
                        :placeholder="$t('c3_2')"
                        :suffix="$t('b3_2_u')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="c3_3"
                        :placeholder="$t('c3_3')"
                        :suffix="$t('c3_3_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('c6')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('c7')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="b7"
                        :placeholder="$t('b7')"
                        :suffix="$t('b7_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                  </a-form>
                  <a-form>
                    <a-form-item
                      :label="$t('c8')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c8"
                        :placeholder="$t('c8')"
                        :suffix="$t('b8_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                  </a-form>
                  <a-form>
                    <a-form-item
                      label=" "
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        style="width: 33%"
                        :placeholder="$t('c9_1')"
                        :disabled="false"
                      />
                      <a-input
                        style="width: 33%"
                        :placeholder="$t('c9_2')"
                        :disabled="false"
                      />
                      <a-input
                        style="width: 34%"
                        :placeholder="$t('c9_3')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c10"
                        style="width: 33%"
                        :placeholder="$t('c10')"
                        :disabled="false"
                      />
                      <a-input
                        v-model="c10_1"
                        style="width: 33%"
                        :placeholder="$t('c10_1')"
                        :disabled="false"
                      />
                      <a-input
                        v-model="c10_2"
                        style="width: 34%"
                        :placeholder="$t('c10_2')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <br />
                    <p style="font-weight: bolder; color: red">
                      {{ $t("c12") }}
                    </p>
                  </a-form>
                </div>
              </a-card>
              <a-card :title="$t('referenceInformation')">
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                      <img
                        style="max-width: 360px; height: auto;"
                        src="@/assets/img/2000/2001.jpg"
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
                :title="$t('b15')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('c14')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c14"
                        :suffix="$t('c14_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c15')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c15"
                        :suffix="$t('c15_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c16')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c16"
                        :suffix="$t('c16_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c17')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c17"
                        :suffix="$t('c17_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c18')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c18"
                        :suffix="$t('c18_u')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c19')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c19"
                        :suffix="$t('c19_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c21')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c21"
                        :suffix="$t('c21_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('c23')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <a-card
                  :title="$t('c24')"
                  style="margin-bottom: 24px"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        :label="$t('c25')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c25"
                          :suffix="$t('c25_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c26')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c26"
                          :suffix="$t('c26_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c27')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c27"
                          :suffix="$t('c27_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c28')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c28"
                          :suffix="$t('c28_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c29')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c29"
                          :suffix="$t('c29_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c30')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c30"
                          :suffix="$t('c30_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c31')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c31"
                          :suffix="$t('c31_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c32')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c32"
                          :suffix="$t('c32_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c33')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c33"
                          :suffix="$t('c33_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c34')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c34"
                          :suffix="$t('c34_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                    </a-form>
                  </div>
                </a-card>
                <a-card
                  :title="$t('c36')"
                  style="margin-bottom: 24px"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        :label="$t('c37')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c37"
                          :suffix="$t('c37_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c38')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c38"
                          :suffix="$t('c38_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c39')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c39"
                          :suffix="$t('c39_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c40')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c40"
                          :suffix="$t('c40_u')"
                          :disabled="true"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c41')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c41"
                          :suffix="$t('c41_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c42')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c42"
                          :suffix="$t('c42_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c43')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c43"
                          :suffix="$t('c43_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c44')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c44"
                          :suffix="$t('c44_u')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        label=" "
                        :colon="false"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          style="width: 33%"
                          :placeholder="$t('c9_1')"
                          :disabled="false"
                        />
                        <a-input
                          style="width: 33%"
                          :placeholder="$t('c9_2')"
                          :disabled="false"
                        />
                        <a-input
                          style="width: 34%"
                          :placeholder="$t('c9_3')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c46')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c46"
                          style="width: 33%"
                          :placeholder="$t('c46')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c46_1"
                          style="width: 33%"
                          :placeholder="$t('c46_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c46_2"
                          style="width: 34%"
                          :placeholder="$t('c46_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c47')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c47"
                          style="width: 33%"
                          :placeholder="$t('c47')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c47_1"
                          style="width: 33%"
                          :placeholder="$t('c47_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c47_2"
                          style="width: 34%"
                          :placeholder="$t('c47_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c48')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c48"
                          style="width: 33%"
                          :placeholder="$t('c48')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c48_1"
                          style="width: 33%"
                          :placeholder="$t('c48_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c48_2"
                          style="width: 34%"
                          :placeholder="$t('c48_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c49')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c49"
                          style="width: 33%"
                          :placeholder="$t('c49')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c49_1"
                          style="width: 33%"
                          :placeholder="$t('c49_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c49_2"
                          style="width: 34%"
                          :placeholder="$t('c49_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c50')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c50"
                          style="width: 33%"
                          :placeholder="$t('c50')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c50_1"
                          style="width: 33%"
                          :placeholder="$t('c50_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c50_2"
                          style="width: 34%"
                          :placeholder="$t('c50_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c51')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c51"
                          style="width: 33%"
                          :placeholder="$t('c51')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c51_1"
                          style="width: 33%"
                          :placeholder="$t('c51_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c51_2"
                          style="width: 34%"
                          :placeholder="$t('c51_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c52')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c52"
                          style="width: 33%"
                          :suffix="$t('c52_u')"
                          :disabled="false"
                        />
                        <a-input style="width: 33%" :disabled="true" />
                        <a-input style="width: 34%" :disabled="true" />
                      </a-form-item>
                    </a-form>
                  </div>
                </a-card>
                <a-card
                  :title="$t('c53')"
                  style="margin-bottom: 24px"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  :bordered="false"
                  :hoverable="true"
                  size="small"
                  :body-style="{ padding: 4 }"
                >
                  <div class="baseQueryParam">
                    <a-form>
                      <a-form-item
                        label=" "
                        :colon="false"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          style="width: 33%"
                          :placeholder="$t('c9_1')"
                          :disabled="false"
                        />
                        <a-input
                          style="width: 33%"
                          :placeholder="$t('c9_2')"
                          :disabled="false"
                        />
                        <a-input
                          style="width: 34%"
                          :placeholder="$t('c9_3')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c55')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c55"
                          style="width: 33%"
                          :placeholder="$t('c55')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c55_1"
                          style="width: 33%"
                          :placeholder="$t('c55_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c55_2"
                          style="width: 34%"
                          :placeholder="$t('c55_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c56')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c56"
                          style="width: 33%"
                          :placeholder="$t('c56')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c56_1"
                          style="width: 33%"
                          :placeholder="$t('c56_1')"
                          :disabled="false"
                        />
                        <a-input
                          v-model="c56_2"
                          style="width: 34%"
                          :placeholder="$t('c56_2')"
                          :disabled="false"
                        />
                      </a-form-item>
                      <a-form-item
                        :label="$t('c57')"
                        style="margin-top: 10px"
                        :labelCol="{ span: 10 }"
                        :wrapperCol="{ span: 14 }"
                      >
                        <a-input
                          v-model="c57"
                          style="width: 33%"
                          :placeholder="$t('c57')"
                          :disabled="true"
                        />
                        <a-input
                          v-model="c57_1"
                          style="width: 33%"
                          :placeholder="$t('c57_1')"
                          :disabled="true"
                        />
                        <a-input
                          v-model="c57_2"
                          style="width: 34%"
                          :placeholder="$t('c57_2')"
                          :disabled="true"
                        />
                      </a-form-item>
                    </a-form>
                  </div>
                </a-card>
              </a-card>

              <a-card
                :title="$t('c58')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      label=" "
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        style="width: 33%"
                        :placeholder="$t('c9_1')"
                        :disabled="false"
                      />
                      <a-input
                        style="width: 33%"
                        :placeholder="$t('c9_2')"
                        :disabled="false"
                      />
                      <a-input
                        style="width: 34%"
                        :placeholder="$t('c9_3')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c60')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c60"
                        style="width: 33%"
                        :disabled="true"
                      />
                      <a-input
                        v-model="c60_1"
                        style="width: 33%"
                        :disabled="true"
                      />
                      <a-input
                        v-model="c60_2"
                        style="width: 34%"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c61')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-textarea
                        style="width: 33%"
                        :placeholder="$t('c61')"
                        auto-size
                        :disabled="true"
                      />
                      <a-textarea
                        style="width: 33%"
                        :placeholder="$t('c61_1')"
                        auto-size
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c62')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c62"
                        style="width: 33%"
                        :disabled="true"
                      />
                      <a-input
                        v-model="c62_1"
                        style="width: 33%"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c63')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c63"
                        style="width: 33%"
                        :disabled="false"
                      />
                      <a-input
                        v-model="c63_1"
                        style="width: 33%"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c64')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c64"
                        style="width: 33%"
                        :disabled="false"
                      />
                      <a-input
                        v-model="c64_1"
                        style="width: 33%"
                        :disabled="false"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>

              <a-card
                :title="$t('c66')"
                style="margin-bottom: 24px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 4 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      label=" "
                      :colon="false"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        style="width: 33%"
                        :placeholder="$t('c9_1')"
                        :disabled="false"
                      />
                      <a-input
                        style="width: 33%"
                        :placeholder="$t('c9_2')"
                        :disabled="false"
                      />
                      <a-input
                        style="width: 34%"
                        :placeholder="$t('c9_3')"
                        :disabled="false"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c68')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c68"
                        style="width: 33%"
                        :placeholder="$t('c68')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="c68_1"
                        style="width: 33%"
                        :placeholder="$t('c68_1')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="c68_2"
                        style="width: 34%"
                        :placeholder="$t('c68_2')"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c69')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c69"
                        style="width: 33%"
                        :suffix="$t('c69_u')"
                        :disabled="true"
                      />
                    </a-form-item>
                    <a-form-item
                      :label="$t('c70')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 10 }"
                      :wrapperCol="{ span: 14 }"
                    >
                      <a-input
                        v-model="c70"
                        style="width: 33%"
                        :placeholder="$t('c70')"
                        :disabled="false"
                      />
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
              <a
                slot="extra"
                style="color: rgb(120, 120, 120); font-size: 15px;"
                @click="showModal"
              >
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
                  <div slot="序号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.序号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="单体位号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.单体位号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="名称" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.名称"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="Dimensions" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.Dimensions"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="标高" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.标高"
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
                  <div slot="disinfectiontank" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.disinfectiontank"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="结构形式" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.结构形式"
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
                  <div slot="暖通要求" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.暖通要求"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
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
                  <div slot="序号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.序号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="设备位号" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.设备位号"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="设备工艺名称" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.设备工艺名称"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="设备类型" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.设备类型"
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
                  <div slot="运行时间" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.运行时间"
                      @blur="handleTableChange()"
                    ></a-input>
                  </div>
                  <div slot="主要材质" slot-scope="text, record">
                    <a-input
                      style="border: none;"
                      v-model="record.主要材质"
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
      </a-tab-pane>
    </a-tabs>
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
            :columns="columns1"
            :data-source="data1"
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
            <div slot="单体位号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.单体位号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="名称" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.名称"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="Dimensions" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.Dimensions"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="标高" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.标高"
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
            <div slot="disinfectiontank" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.disinfectiontank"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="结构形式" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.结构形式"
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
            <div slot="暖通要求" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.暖通要求"
                @blur="handleTableChange()"
              ></a-input>
            </div>
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
            <div slot="序号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.序号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="设备位号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.设备位号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="设备工艺名称" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.设备工艺名称"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="设备类型" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.设备类型"
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
            <div slot="运行时间" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.运行时间"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="主要材质" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.主要材质"
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
  exportExcel2,
  exportWord,
  getValueFromLocalStorage,
  initWordStorage,
  initExcelStorage,
  initPowerStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_2001"),
  data() {
    return {
      modelVisible: false,
      b3_1: "105000",
      b7: "20",
      b8: "4",
      b9: "3",
      b10: "3",
      b11: "1.5",
      b12: "0.2",
      b13: "0.3",
      b17_1: "14",
      b18_1: "9.5",
      b23: "",
      b24: "3",
      b25: "4",
      b27: "0.2",
      b33: "1.1",
      b39_1: "0.5",
      b39_2: "0.35",
      b39_3: "0.2",
      b46: "0.75",
      b47: "0.7",
      c3_1: "20000",
      c7: "20",
      c8: "2",
      c10: "0.5",
      c10_1: "0.35",
      c10_2: "0.2",
      c15: "2.5",
      c16: "2.5",
      c18: "0.3",
      c26: "1.2",
      c28: "0.12",
      c29: "8",
      c31: "0.12",
      c32: "1.80",
      c39: "1.1",
      c43: "0.56",
      c46: "0.5",
      c46_1: "0.35",
      c46_2: "0.2",
      c55: "0.75",
      c55_1: "0.75",
      c55_2: "0.75",
      c56: "0.8",
      c56_1: "0.8",
      c56_2: "0.8",
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
              scopedSlots: { customRender: "序号" },
            },
            {
              title: "单体位号",
              dataIndex: "单体位号",
              key: "2",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "单体位号" },
            },
            {
              title: "名称",
              dataIndex: "名称",
              key: "3",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "名称" },
            },
            {
              title: "尺寸(m)",
              dataIndex: "Dimensions",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "Dimensions" },
            },
            {
              title: "标高(m)",
              dataIndex: "标高",
              key: "5",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "标高" },
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
              dataIndex: "disinfectiontank",
              key: "7",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "disinfectiontank" },
            },
            {
              title: "结构形式",
              dataIndex: "结构形式",
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "结构形式" },
            },
            {
              title: "备注",
              dataIndex: "备注",
              key: "9",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "备注" },
            },
            {
              title: "暖通要求",
              dataIndex: "暖通要求",
              key: "10",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "暖通要求" },
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
              scopedSlots: { customRender: "序号" },
            },
            {
              title: "设备位号",
              dataIndex: "设备位号",
              key: "2",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "设备位号" },
            },
            {
              title: "设备工艺名称",
              dataIndex: "设备工艺名称",
              key: "3",
              width: "100px",
              align: "center",
              scopedSlots: { customRender: "设备工艺名称" },
            },
            {
              title: "设备类型",
              dataIndex: "设备类型",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "设备类型" },
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
              title: "运行时间",
              dataIndex: "运行时间",
              key: "8",
              width: "80px",
              align: "center",
              scopedSlots: { customRender: "运行时间" },
            },
            {
              title: "主要材质",
              dataIndex: "主要材质",
              key: "9",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "主要材质" },
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
    initWaterData() {
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b3_1 = 105000;
        this.c3_1 = 20000;
      } else {
        this.b3_1 = waterData;
        this.c3_1 = waterData;
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
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData4 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData
        const allData4 = [
          ...headerData4,
          ...this.data4.map((item) => Object.values(item)),
        ];

        var d1 = [...allData1, null, null, ['垂直轴式工程量'], ...allData3];
        d1.unshift(['水平轴式工程量']);

        var d2 = [...allData2, null, null, ['垂直轴式工程量'], ...allData4];
        d2.unshift(['水平轴式工程量']);

        // 导出 Excel
        exportExcel2(d1, d2, "机械搅拌絮凝池工程量", this);
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
        key1: this.b3_1,
        key2: this.b3_2,
        key3: this.b3_3,
        key4: this.b7,
        key5: this.b8,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b16,
        key12: this.b17,
        key13: this.b17_1,
        key14: this.b18,
        key15: this.b18_1,
        key16: this.b22,
        key17: this.b26,
        key18: this.b27,
        key19: this.b25,
        key20: this.b24,
        key21: this.b28,
        key22: this.b29,
        key23: this.b32,
        key24: this.b33,
        key25: this.b34,
        key26: this.b35,
        key27: this.b36,
        key28: this.b39_1,
        key29: this.b39_2,
        key30: this.b39_3,
        key31: this.b40_1,
        key32: this.b40_2,
        key33: this.b40_3,
        key34: this.b41_1,
        key35: this.b41_2,
        key36: this.b41_3,
        key37: this.b42_1,
        key38: this.b42_2,
        key39: this.b42_3,
        key40: this.b45,
        key41: this.b46,
        key42: this.b47,
        key43: this.b48,
        key44: this.b52_1,
        key45: this.b52_2,
        key46: this.b52_3,
        key47: this.b54_1,
        key48: this.b54_2,
        key49: this.b55_1,
        key50: this.b55_2,
        key51: this.b56_1,
        key52: this.b56_2,
        key53: this.b60_1,
        key54: this.b60_2,
        key55: this.b60_3,
        key56: this.b61,
        key57: this.b62,
        akey1: this.c3_1,
        akey2: this.c3_2,
        akey3: this.c3_3,
        akey4: this.c7,
        akey5: this.c8,
        akey6: this.c10,
        akey7: this.c10_1,
        akey8: this.c10_2,
        akey9: this.c14,
        akey10: this.c15,
        akey11: this.c16,
        akey12: this.c17,
        akey13: this.c18,
        akey14: this.c19,
        akey15: this.c20,
        akey16: this.c25,
        akey17: this.c26,
        akey18: this.c27,
        akey19: this.c28,
        akey20: this.c29,
        akey21: this.c30,
        akey22: this.c31,
        akey23: this.c32,
        akey24: this.c33,
        akey25: this.c34,
        akey26: this.c37,
        akey27: this.c38,
        akey28: this.c39,
        akey29: this.c40,
        akey30: this.c41,
        akey31: this.c42,
        akey32: this.c43,
        akey33: this.c44,
        akey34: this.c46,
        akey35: this.c46_1,
        akey36: this.c46_2,
        akey37: this.c47,
        akey38: this.c47_1,
        akey39: this.c47_2,
        akey40: this.c48,
        akey41: this.c48_1,
        akey42: this.c48_2,
        akey43: this.c49,
        akey44: this.c49_1,
        akey45: this.c49_2,
        akey46: this.c50,
        akey47: this.c50_1,
        akey48: this.c50_2,
        akey49: this.c51,
        akey50: this.c51_1,
        akey51: this.c51_2,
        akey52: this.c52,
        akey53: this.c55,
        akey54: this.c56,
        akey55: this.c57,
        akey56: this.c57_1,
        akey57: this.c57_2,
        akey58: this.c60,
        akey59: this.c60_1,
        akey60: this.c60_2,
        akey61: this.c62,
        akey62: this.c62_1,
        akey63: this.c63,
        akey64: this.c63_1,
        akey65: this.c64,
        akey66: this.c64_1,
        akey67: this.c68,
        akey68: this.c68_1,
        akey69: this.c68_2,
        akey70: this.c69,
        akey71: this.c70,
      };
      exportWord("机械絮凝池计算书", "2001.docx", data, this);
    },
    exportComputeBook1() {
      const data = {
        akey1: this.c3_1,
        akey2: this.c3_2,
        akey3: this.c3_3,
        akey4: this.c7,
        akey5: this.c8,
        akey6: this.c10,
        akey7: this.c10_1,
        akey8: this.c10_2,
        akey9: this.c14,
        akey10: this.c15,
        akey11: this.c16,
        akey12: this.c17,
        akey13: this.c18,
        akey14: this.c19,
        akey15: this.c20,
        akey16: this.c25,
        akey17: this.c26,
        akey18: this.c27,
        akey19: this.c28,
        akey20: this.c29,
        akey21: this.c30,
        akey22: this.c31,
        akey23: this.c32,
        akey24: this.c33,
        akey25: this.c34,
        akey26: this.c37,
        akey27: this.c38,
        akey28: this.c39,
        akey29: this.c40,
        akey30: this.c41,
        akey31: this.c42,
        akey32: this.c43,
        akey33: this.c44,
        akey34: this.c46,
        akey35: this.c46_1,
        akey36: this.c46_2,
        akey37: this.c47,
        akey38: this.c47_1,
        akey39: this.c47_2,
        akey40: this.c48,
        akey41: this.c48_1,
        akey42: this.c48_2,
        akey43: this.c49,
        akey44: this.c49_1,
        akey45: this.c49_2,
        akey46: this.c50,
        akey47: this.c50_1,
        akey48: this.c50_2,
        akey49: this.c51,
        akey50: this.c51_1,
        akey51: this.c51_2,
        akey52: this.c52,
        akey53: this.c55,
        akey54: this.c56,
        akey55: this.c57,
        akey56: this.c57_1,
        akey57: this.c57_2,
        akey58: this.c60,
        akey59: this.c60_1,
        akey60: this.c60_2,
        akey61: this.c62,
        akey62: this.c62_1,
        akey63: this.c63,
        akey64: this.c63_1,
        akey65: this.c64,
        akey66: this.c64_1,
        akey67: this.c68,
        akey68: this.c68_1,
        akey69: this.c68_2,
        akey70: this.c69,
        akey71: this.c70,
      };
      exportWord("机械絮凝池计算书", "2001_1.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3_1,
        key2: this.b3_2,
        key3: this.b3_3,
        key4: this.b7,
        key5: this.b8,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b16,
        key12: this.b17,
        key13: this.b17_1,
        key14: this.b18,
        key15: this.b18_1,
        key16: this.b22,
        key17: this.b26,
        key18: this.b27,
        key19: this.b25,
        key20: this.b24,
        key21: this.b28,
        key22: this.b29,
        key23: this.b32,
        key24: this.b33,
        key25: this.b34,
        key26: this.b35,
        key27: this.b36,
        key28: this.b39_1,
        key29: this.b39_2,
        key30: this.b39_3,
        key31: this.b40_1,
        key32: this.b40_2,
        key33: this.b40_3,
        key34: this.b41_1,
        key35: this.b41_2,
        key36: this.b41_3,
        key37: this.b42_1,
        key38: this.b42_2,
        key39: this.b42_3,
        key40: this.b45,
        key41: this.b46,
        key42: this.b47,
        key43: this.b48,
        key44: this.b52_1,
        key45: this.b52_2,
        key46: this.b52_3,
        key47: this.b54_1,
        key48: this.b54_2,
        key49: this.b55_1,
        key50: this.b55_2,
        key51: this.b56_1,
        key52: this.b56_2,
        key53: this.b60_1,
        key54: this.b60_2,
        key55: this.b60_3,
        key56: this.b61,
        key57: this.b62,
        akey1: this.c3_1,
        akey2: this.c3_2,
        akey3: this.c3_3,
        akey4: this.c7,
        akey5: this.c8,
        akey6: this.c10,
        akey7: this.c10_1,
        akey8: this.c10_2,
        akey9: this.c14,
        akey10: this.c15,
        akey11: this.c16,
        akey12: this.c17,
        akey13: this.c18,
        akey14: this.c19,
        akey15: this.c20,
        akey16: this.c25,
        akey17: this.c26,
        akey18: this.c27,
        akey19: this.c28,
        akey20: this.c29,
        akey21: this.c30,
        akey22: this.c31,
        akey23: this.c32,
        akey24: this.c33,
        akey25: this.c34,
        akey26: this.c37,
        akey27: this.c38,
        akey28: this.c39,
        akey29: this.c40,
        akey30: this.c41,
        akey31: this.c42,
        akey32: this.c43,
        akey33: this.c44,
        akey34: this.c46,
        akey35: this.c46_1,
        akey36: this.c46_2,
        akey37: this.c47,
        akey38: this.c47_1,
        akey39: this.c47_2,
        akey40: this.c48,
        akey41: this.c48_1,
        akey42: this.c48_2,
        akey43: this.c49,
        akey44: this.c49_1,
        akey45: this.c49_2,
        akey46: this.c50,
        akey47: this.c50_1,
        akey48: this.c50_2,
        akey49: this.c51,
        akey50: this.c51_1,
        akey51: this.c51_2,
        akey52: this.c52,
        akey53: this.c55,
        akey54: this.c56,
        akey55: this.c57,
        akey56: this.c57_1,
        akey57: this.c57_2,
        akey58: this.c60,
        akey59: this.c60_1,
        akey60: this.c60_2,
        akey61: this.c62,
        akey62: this.c62_1,
        akey63: this.c63,
        akey64: this.c63_1,
        akey65: this.c64,
        akey66: this.c64_1,
        akey67: this.c68,
        akey68: this.c68_1,
        akey69: this.c68_2,
        akey70: this.c69,
        akey71: this.c70,
      };
      initWordStorage("2001.docx", data);
      this.handleExcelCache("2001.xlsx", "机械搅拌絮凝池工程量");
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
          this.flattenFirstRowColumns(this.columns1),
          this.flattenSecondRowColumns(this.columns1),
        ];
        // 初始化 allData
        const allData3 = [
          ...headerData3,
          ...this.data3.map((item) => Object.values(item)),
        ];

        // 处理表头信息
        const headerData4 = [
          this.flattenFirstRowColumns(this.columns2),
          this.flattenSecondRowColumns(this.columns2),
        ];
        // 初始化 allData
        const allData4 = [
          ...headerData4,
          ...this.data4.map((item) => Object.values(item)),
        ];
        var d1 = [...allData1, null, null, ['垂直轴式工程量'], ...allData3];
        d1.unshift(['水平轴式工程量']);
        var d2 = [...allData2, null, null, ['垂直轴式工程量'], ...allData4];
        d2.unshift(['水平轴式工程量']);
        initPowerStorage(this.d2, path);
        initExcelStorage(d1, d2, null, path, name);
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
    getkey1() {
      return this.b17_1 + "×" + this.b18_1 + "×" + this.b9 + "m";
    },
    getkey2() {
      return this.b8;
    },
    getkey3() {
      return (
        "池深" +
        this.b9 +
        "m，N=" +
        this.b48 +
        "kW，R1=" +
        this.b40_1 +
        "rpm，R2=" +
        this.b40_2 +
        "rpm，R3=" +
        this.b40_3 +
        "rpm，叶轮直径" +
        parseFloat(this.b22) * 1000 +
        "mm"
      );
    },
    getkey4() {
      return this.b8;
    },
    getkey1c() {
      return this.c15 + "×" + this.c16 + "×" + this.c19 + "m";
    },
    getkey2c() {
      return this.c8;
    },
    getkey3c() {
      return (
        "池深m，N=" +
        this.c57 +
        "kW，R1=" +
        this.c57_1 +
        "rpm，R2=" +
        this.c57 +
        "rpm，N3=" +
        this.c57_1 +
        "R3=" +
        this.c57_2 +
        "rpm，叶轮直径" +
        parseFloat(this.c25) * 1000 +
        "mm"
      );
    },
    getkey4c() {
      return this.c8;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_2() {
      return (parseFloat(this.b3_1) / 24).toFixed(0);
    },
    b3_3() {
      return (parseFloat(this.b3_1) / (24 * 60 * 60)).toFixed(2);
    },
    b16() {
      return (
        (parseFloat(this.b3_2) * parseFloat(this.b7)) /
        60 /
        parseFloat(this.b8)
      ).toFixed(2);
    },
    b17() {
      return (
        parseFloat(this.b11) *
        parseFloat(this.b10) *
        parseFloat(this.b9)
      ).toFixed(1);
    },
    b18() {
      return (
        parseFloat(this.b16) /
        parseFloat(this.b17) /
        parseFloat(this.b9)
      ).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b9) - parseFloat(this.b13)).toFixed(1);
    },
    b26() {
      return (
        (parseFloat(this.b18_1) -
          (parseFloat(this.b24) + 1) * parseFloat(this.b12)) /
        parseFloat(this.b24)
      ).toFixed(1);
    },
    b28() {
      return (
        (parseFloat(this.b26) *
          parseFloat(this.b27) *
          parseFloat(this.b25) *
          parseFloat(this.b24)) /
        (parseFloat(this.b18_1) * parseFloat(this.b9))
      ).toFixed(2);
    },
    b29() {
      return (parseFloat(this.b27) / parseFloat(this.b26)).toFixed(3);
    },
    b32() {
      return (parseFloat(this.b22) - parseFloat(this.b27)).toFixed(2);
    },
    b34() {
      return ((parseFloat(this.b33) * 1000) / 2 / 9.81).toFixed(2);
    },
    b35() {
      return (parseFloat(this.b22) / 2).toFixed(2);
    },
    b36() {
      return (parseFloat(this.b35) - parseFloat(this.b27)).toFixed(2);
    },
    b40_1() {
      return this.ROUNDUP(
        (60 * parseFloat(this.b39_1)) / 3.14 / parseFloat(this.b32),
        2
      ).toFixed(2);
    },
    b40_2() {
      return this.ROUNDUP(
        (60 * parseFloat(this.b39_2)) / 3.14 / parseFloat(this.b32),
        2
      ).toFixed(2);
    },
    b40_3() {
      return this.ROUNDUP(
        (60 * parseFloat(this.b39_3)) / 3.14 / parseFloat(this.b32),
        2
      ).toFixed(2);
    },
    b41_1() {
      return ((2 * parseFloat(this.b39_1)) / parseFloat(this.b32)).toFixed(1);
    },
    b41_2() {
      return ((2 * parseFloat(this.b39_2)) / parseFloat(this.b32)).toFixed(2);
    },
    b41_3() {
      return ((2 * parseFloat(this.b39_3)) / parseFloat(this.b32)).toFixed(2);
    },
    b42_1() {
      return (
        (parseFloat(this.b25) *
          parseFloat(this.b34) *
          parseFloat(this.b26) *
          Math.pow(parseFloat(this.b41_1), 3) *
          (Math.pow(parseFloat(this.b35), 4) -
            Math.pow(parseFloat(this.b36), 4))) /
        408
      ).toFixed(3);
    },
    b42_2() {
      return (
        (parseFloat(this.b25) *
          parseFloat(this.b34) *
          parseFloat(this.b26) *
          Math.pow(parseFloat(this.b41_2), 3) *
          (Math.pow(parseFloat(this.b35), 4) -
            Math.pow(parseFloat(this.b36), 4))) /
        408
      ).toFixed(3);
    },
    b42_3() {
      return (
        (parseFloat(this.b25) *
          parseFloat(this.b34) *
          parseFloat(this.b26) *
          Math.pow(parseFloat(this.b41_3), 3) *
          (Math.pow(parseFloat(this.b35), 4) -
            Math.pow(parseFloat(this.b36), 4))) /
        408
      ).toFixed(3);
    },
    b45() {
      return (
        (parseFloat(this.b42_1) +
          parseFloat(this.b42_2) +
          parseFloat(this.b42_3)) *
        parseFloat(this.b24)
      ).toFixed(2);
    },
    b48() {
      return this.truncateDecimals(
        this.ROUNDUP(
          parseFloat(this.b45) / parseFloat(this.b46) / parseFloat(this.b47),
          3
        ),
        2
      );
    },
    b52_1() {
      return (1.75 * parseFloat(this.b41_1)).toFixed(2);
    },
    b52_2() {
      return (1.75 * parseFloat(this.b41_2)).toFixed(2);
    },
    b52_3() {
      return (1.75 * parseFloat(this.b41_3)).toFixed(2);
    },
    b54_1() {
      return (
        parseFloat(this.b3_3) /
        parseFloat(this.b8) /
        parseFloat(this.b52_2)
      ).toFixed(2);
    },
    b54_2() {
      return (
        parseFloat(this.b3_3) /
        parseFloat(this.b8) /
        parseFloat(this.b52_3)
      ).toFixed(2);
    },
    b55_1() {
      return Math.pow(parseFloat(this.b54_1), 0.5).toFixed(2);
    },
    b55_2() {
      return Math.pow(parseFloat(this.b54_2), 0.5).toFixed(2);
    },
    b56_1() {
      return (
        parseFloat(this.b55_1).toFixed(1) +
        "*" +
        parseFloat(this.b55_1).toFixed(1)
      );
    },
    b56_2() {
      return (
        parseFloat(this.b55_2).toFixed(1) +
        "*" +
        parseFloat(this.b55_2).toFixed(1)
      );
    },
    b60_1() {
      return Math.sqrt(
        (102 * parseFloat(this.b42_1) * parseFloat(this.b24) * 1000000 * 3) /
          102 /
          parseFloat(this.b16)
      ).toFixed(2);
    },
    b60_2() {
      return Math.sqrt(
        (parseFloat(this.b42_2) * 1000000 * 3) / parseFloat(this.b16)
      ).toFixed(2);
    },
    b60_3() {
      return Math.sqrt(
        (parseFloat(this.b42_3) * 1000000 * 3) / parseFloat(this.b16)
      ).toFixed(2);
    },
    b61() {
      return Math.sqrt(
        (parseFloat(this.b45) * 1000000) / parseFloat(this.b16)
      ).toFixed(2);
    },
    b62() {
      return (parseFloat(this.b61) * parseFloat(this.b7) * 60).toFixed(2);
    },
    c3_2() {
      return (parseFloat(this.c3_1) / 24).toFixed(0);
    },
    c3_3() {
      return (parseFloat(this.c3_1) / (24 * 60 * 60)).toFixed(2);
    },
    c14() {
      return (
        (parseFloat(this.c3_2) * parseFloat(this.c7)) /
        60 /
        parseFloat(this.c8)
      ).toFixed(2);
    },
    c17() {
      return (
        parseFloat(this.c14) /
        parseFloat(this.c8) /
        3 /
        parseFloat(this.c15) /
        parseFloat(this.c16)
      ).toFixed(2);
    },
    c19() {
      return this.ROUND(parseFloat(this.c18) + parseFloat(this.c17), 2).toFixed(
        2
      );
    },
    c20() {
      return this.c16;
    },
    c21() {
      return (parseFloat(this.c15) * 3).toFixed(2);
    },
    c25() {
      return (parseFloat(this.c20) * 0.8).toFixed(2);
    },
    c27() {
      return (parseFloat(this.c26) / parseFloat(this.c25)).toFixed(2);
    },
    c30() {
      return (
        (parseFloat(this.c29) * parseFloat(this.c26) * parseFloat(this.c28)) /
        (parseFloat(this.c17) * parseFloat(this.c16))
      ).toFixed(2);
    },
    c33() {
      return (
        (parseFloat(this.c31) * parseFloat(this.c32) * 4) /
        (parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(3);
    },
    c34() {
      return (parseFloat(this.c33) + parseFloat(this.c30)).toFixed(2);
    },
    c37() {
      return ((((1000 - 440) / 2 + 440) * 2) / 1000).toFixed(2);
    },
    c38() {
      return (parseFloat(this.c28) / parseFloat(this.c26)).toFixed(1);
    },
    c40() {
      return ((parseFloat(this.c39) * 1000) / 2 / 9.81).toFixed(2);
    },
    c41() {
      return (parseFloat(this.c25) / 2).toFixed(2);
    },
    c42() {
      return 0.88;
    },
    c44() {
      return 0.44;
    },
    c47() {
      return this.ROUND(
        (60 * parseFloat(this.c46)) / 3.14 / parseFloat(this.c37),
        2
      ).toFixed(2);
    },
    c47_1() {
      return this.ROUND(
        (60 * parseFloat(this.c46_1)) / 3.14 / parseFloat(this.c37),
        2
      ).toFixed(2);
    },
    c47_2() {
      return this.ROUND(
        (60 * parseFloat(this.c46_2)) / 3.14 / parseFloat(this.c37),
        2
      ).toFixed(2);
    },
    c48() {
      return ((2 * parseFloat(this.c46)) / parseFloat(this.c37)).toFixed(2);
    },
    c48_1() {
      return ((2 * parseFloat(this.c46_1)) / parseFloat(this.c37)).toFixed(2);
    },
    c48_2() {
      return ((2 * parseFloat(this.c46_2)) / parseFloat(this.c37)).toFixed(2);
    },
    c49() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48), 3) *
          (Math.pow(parseFloat(this.c41), 4) -
            Math.pow(parseFloat(this.c42), 4))) /
        408
      ).toFixed(2);
    },
    c49_1() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_1), 3) *
          (Math.pow(parseFloat(this.c41), 4) -
            Math.pow(parseFloat(this.c42), 4))) /
        408
      ).toFixed(2);
    },
    c49_2() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_2), 3) *
          (Math.pow(parseFloat(this.c41), 4) -
            Math.pow(parseFloat(this.c42), 4))) /
        408
      ).toFixed(2);
    },
    c50() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48), 3) *
          (Math.pow(parseFloat(this.c43), 4) -
            Math.pow(parseFloat(this.c44), 4))) /
        408
      ).toFixed(2);
    },
    c50_1() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_1), 3) *
          (Math.pow(parseFloat(this.c43), 4) -
            Math.pow(parseFloat(this.c44), 4))) /
        408
      ).toFixed(2);
    },
    c50_2() {
      return (
        (4 *
          parseFloat(this.c40) *
          parseFloat(this.c26) *
          Math.pow(parseFloat(this.c48_2), 3) *
          (Math.pow(parseFloat(this.c43), 4) -
            Math.pow(parseFloat(this.c44), 4))) /
        408
      ).toFixed(2);
    },
    c51() {
      return (parseFloat(this.c49) + parseFloat(this.c50)).toFixed(3);
    },
    c51_1() {
      return (parseFloat(this.c49_1) + parseFloat(this.c50_1)).toFixed(3);
    },
    c51_2() {
      return (parseFloat(this.c49_2) + parseFloat(this.c50_2)).toFixed(3);
    },
    c52() {
      return (
        parseFloat(this.c51) +
        parseFloat(this.c51_1) +
        parseFloat(this.c51_2)
      ).toFixed(2);
    },
    c57() {
      return this.ROUND(
        parseFloat(this.c51) / parseFloat(this.c55) / parseFloat(this.c56),
        2
      ).toFixed(2);
    },
    c57_1() {
      return this.ROUND(
        parseFloat(this.c51_1) /
          parseFloat(this.c55_1) /
          parseFloat(this.c56_1),
        2
      ).toFixed(2);
    },
    c57_2() {
      return this.ROUND(
        parseFloat(this.c51_2) /
          parseFloat(this.c55_2) /
          parseFloat(this.c56_2),
        2
      ).toFixed(2);
    },
    c60() {
      return (1.75 * parseFloat(this.c48)).toFixed(2);
    },
    c60_1() {
      return (1.75 * parseFloat(this.c48_1)).toFixed(2);
    },
    c60_2() {
      return (1.75 * parseFloat(this.c48_2)).toFixed(2);
    },
    c62() {
      return (
        parseFloat(this.c3_3) /
        parseFloat(this.c8) /
        parseFloat(this.c60_1)
      ).toFixed(2);
    },
    c62_1() {
      return (
        parseFloat(this.c3_3) /
        parseFloat(this.c8) /
        parseFloat(this.c60_2)
      ).toFixed(2);
    },
    c63() {
      return Math.pow(parseFloat(this.c62), 0.5).toFixed(2);
    },
    c63_1() {
      return Math.pow(parseFloat(this.c62_1), 0.5).toFixed(2);
    },
    c64() {
      return "0.4*0.4";
    },
    c64_1() {
      return "0.5*0.5";
    },
    c68() {
      return Math.sqrt(
        (102 * parseFloat(this.c51) * 1000000) /
          102 /
          (parseFloat(this.c15) * parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(2);
    },
    c68_1() {
      return Math.sqrt(
        (102 * parseFloat(this.c51_1) * 1000000) /
          102 /
          (parseFloat(this.c15) * parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(2);
    },
    c68_2() {
      return Math.sqrt(
        (102 * parseFloat(this.c51_2) * 1000000) /
          102 /
          (parseFloat(this.c15) * parseFloat(this.c16) * parseFloat(this.c17))
      ).toFixed(2);
    },
    c69() {
      return Math.sqrt(
        (parseFloat(this.c52) * 1000000) /
          (3 *
            parseFloat(this.c15) *
            parseFloat(this.c16) *
            parseFloat(this.c17))
      ).toFixed(2);
    },
    c70() {
      return (parseFloat(this.c69) * parseFloat(this.c7) * 60).toFixed(2);
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "机械搅拌絮凝池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: this.getkey2(),
          结构形式: "钢砼",
          备注: "半地下式",
          暖通要求: "无",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "机械搅拌絮凝池搅拌机",
          设备类型: "水平轴搅拌器",
          规格及型号: this.getkey3(),
          单位: "台",
          数量: this.getkey4(),
          运行时间: "24h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注: "",
          运行数量: this.getkey4(),
          单台功率: "",
          用电量: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "机械搅拌絮凝池",
          Dimensions: this.getkey1c(),
          标高: "",
          单位: "座",
          disinfectiontank: this.getkey2c(),
          结构形式: "钢砼",
          备注: "半地下式",
          暖通要求: "无",
        },
      ];
    },
    data4() {
      return [
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "机械搅拌絮凝池搅拌机",
          设备类型: "水平轴搅拌器",
          规格及型号: this.getkey3c(),
          单位: "台",
          数量: this.getkey4c(),
          运行时间: "24h",
          主要材质: "水上部分碳钢防腐，水下部分SS304",
          备注: "",
          运行数量: this.getkey4c(),
          单台功率: "",
          用电量: "",
        },
      ];
    },
  },
  watch() {
    this.initWaterData();
  },
  activated() {
    this.initWaterData();
    console.log("2001-activated被调用了");
    this.refreshInitData();
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
        名称: "机械搅拌絮凝池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getkey2(),
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "机械搅拌絮凝池搅拌机",
        设备类型: "水平轴搅拌器",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "24h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "",
        运行数量: this.getkey4(),
        单台功率: "",
        用电量: "",
      },
    ];
    this.data3 = [
      {
        序号: "",
        单体位号: "",
        名称: "机械搅拌絮凝池",
        Dimensions: this.getkey1c(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getkey2c(),
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data4 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "机械搅拌絮凝池搅拌机",
        设备类型: "水平轴搅拌器",
        规格及型号: this.getkey3c(),
        单位: "台",
        数量: this.getkey4c(),
        运行时间: "24h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "",
        运行数量: this.getkey4c(),
        单台功率: "",
        用电量: "",
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
