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
          style="margin-bottom: 0px"
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
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b3_u')"
                      @change="refreshInitData()"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b4" rows="12" :suffix="$t('b4_u')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :suffix="$t('b5_u')"
                      disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :suffix="$t('b6_u')"
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
                    <a-input v-model="b7" rows="12" :suffix="$t('b7_u')" />
                  </a-input-group>
                </a-form-item>
                <br />
                <a-card
                  style="margin-bottom: 24px"
                  :bordered="false"
                  :body-style="{ padding: 4 }"
                  size="small"
                >
                  <a-form-item
                    :label="$t('b9')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        style="width: 50%"
                        :placeholder="$t('b9_1')"
                        rows="12"
                        disabled="true"
                      />
                      <a-input
                        style="width: 50%"
                        :placeholder="$t('b9_2')"
                        rows="12"
                        disabled="true"
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
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b10_1"
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
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
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b11_1"
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
                      />
                    </a-input-group>
                    <a-input-group compact>
                      <a-input
                        v-model="b12"
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b12_1"
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
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
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
                      />
                      <a-input
                        v-model="b13_1"
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
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
                        style="width: 50%"
                        rows="12"
                        @change="refreshInitData()"
                      />
                      <a-input style="width: 50%" rows="12" disabled="true" />
                    </a-input-group>
                  </a-form-item>
                </a-card>
              </a-form>
            </div>
          </a-card>
          <a-card :title="$t('referenceInformation')">
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img
                    style="max-width: 360px; height: auto;"
                    src="@/assets/img/4000/4002.jpg"
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
            :title="$t('b16')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
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
                  <a-card
                    :title="$t('b18')"
                    style="margin-bottom: 24px"
                    :bordered="false"
                    :body-style="{ padding: 4 }"
                    :headStyle="{ 'font-weight': 'bolder' }"
                    size="small"
                  >
                    <div class="baseQueryParam">
                      <a-form>
                        <a-form-item
                          :label="$t('b18_1')"
                          style="margin-top: 10px"
                          :labelCol="{ span: 14 }"
                          :wrapperCol="{ span: 10 }"
                        >
                          <a-input-group compact>
                            <a-input
                              v-model="b18"
                              style="width: 100%"
                              :disabled="true"
                              rows="12"
                              :suffix="$t('b18_u')"
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
                          :label="$t('b19_1')"
                          style="margin-top: 10px"
                          :labelCol="{ span: 14 }"
                          :wrapperCol="{ span: 10 }"
                        >
                          <a-input-group compact>
                            <a-input
                              v-model="b19"
                              style="width: 100%"
                              :disabled="true"
                              rows="12"
                              :suffix="$t('b19_u')"
                            />
                          </a-input-group>
                        </a-form-item>
                      </a-form>
                    </div>
                  </a-card>
                  <a-card
                    :title="$t('b20')"
                    style="margin-bottom: 24px"
                    :bordered="false"
                    :body-style="{ padding: 4 }"
                    :headStyle="{ 'font-weight': 'bolder' }"
                    size="small"
                  >
                    <div class="baseQueryParam">
                      <a-form>
                        <a-form-item
                          :label="$t('b20_1')"
                          style="margin-top: 10px"
                          :labelCol="{ span: 14 }"
                          :wrapperCol="{ span: 10 }"
                        >
                          <a-input-group compact>
                            <a-input
                              v-model="b20"
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
                              :suffix="$t('b20_u')"
                            />
                          </a-input-group>
                        </a-form-item>
                      </a-form>
                    </div>
                  </a-card>
                  <a-form-item
                    :label="$t('b21')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b21"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b29_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
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
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
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
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
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
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
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
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
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
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
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
                              style="width: 100%"
                              :disabled="false"
                              rows="12"
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
                              style="width: 100%"
                              :disabled="true"
                              rows="12"
                              :suffix="$t('b38_u')"
                            />
                          </a-input-group>
                        </a-form-item>
                      </a-form>
                    </div>
                  </a-card>
                </a-form>
              </div>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b40')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
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
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b42"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b42_u')"
                      />
                      <a-input
                        v-model="b42_1"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :addon-before="$t('b42_1')"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b43_u')"
                      />
                      <a-input
                        v-model="b43_1"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :addon-before="$t('b43_1')"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b44_u')"
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
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b46"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b46_u')"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b47_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <br />
                  <p style="font-weight: bolder; color: red">
                    {{ $t("b48") }}
                  </p>
                  <a-form-item
                    :label="$t('b49')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b49"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b49_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b50')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b50"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b51_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b52')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b52"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b52_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b53')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b53"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
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
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b55_u')"
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
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b56_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b57')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b57"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b57_u')"
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
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b59"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b59_u')"
                      />
                      <a-input
                        v-model="b59_1"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :addon-before="$t('b59_1')"
                      />
                      <a-input
                        v-model="b60_1"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :addon-before="$t('b60_1')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b60')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b61')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b61"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b61_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b62')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b62"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b62_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <br />
                  <p style="font-weight: bolder; color: red">
                    {{ $t("b63") }}
                  </p>
                  <a-form-item
                    :label="$t('b64')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b64"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b64_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b65')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b65"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b65_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b66')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b66"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b66_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b67')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b67"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b67_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b68')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b68"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b68_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b69')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b69"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b69_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b70')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b71')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b71"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b71_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b72')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b72"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b72_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b73')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b73"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b73_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b74')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b74"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b74_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b75')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b75"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b75_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b76')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b77')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b77"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b77_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b78')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b78"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b78_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b79')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b79"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b79_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b80')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
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
                <a-form>
                  <a-form-item
                    :label="$t('b83')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b83"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b83_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b84')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b84"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b84_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b85')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b85"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b85_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b86')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b86"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b86_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b87')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b87"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b87_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b88')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b88"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b88_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b89')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b89"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b89_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b90')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b91')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b91"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b91_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b92')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b92"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b92_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b93')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b93"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b93_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b94')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b94"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b95')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b96')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b96"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b96_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b97')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b97"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b97_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b98')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b98"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b98_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b99')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b99"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b99_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b100')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b100"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b100_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b101')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b101"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b101_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b102')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b102"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b103')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b103"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b103_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b104')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b104"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b104_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b105')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b105"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b105_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-card>
            <a-card
              :title="$t('b106')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b107')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b108')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b108"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b108_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b109')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b109"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b109_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b110')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b110"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b110_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b111')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b111"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b111_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b112')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b112"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b112_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b113')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b113"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b113_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b114')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b115')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b115"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b115_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <br />
                  <p style="font-weight: bolder; color: red">
                    {{ $t("b116") }}
                  </p>
                  <a-form-item
                    :label="$t('b118')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b118"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b118_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b119')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b119"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b119_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b120')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b120"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b120_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b121')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b121"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b121_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b122')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b122"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b122_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b123')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b123"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b123_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b124')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b124"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b124_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b125')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <br />
                  <p style="font-weight: bolder; color: red">
                    {{ $t("b126") }}
                  </p>
                  <a-form-item
                    :label="$t('b128')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b128"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b128_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b129')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b129"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b129_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b130')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <br />
                  <p style="font-weight: bolder; color: red">
                    {{ $t("b131") }}
                  </p>
                  <a-form-item
                    :label="$t('b132')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b132"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b132_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b133')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b133"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b133_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b134')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b134"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b134_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b135')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b135"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b135_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b136')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b136"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b136_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b137')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b138')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b138"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b138_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b139')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b139"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b140')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b140"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b140_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b141')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b141"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b141_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-card>
            <a-card
              :title="$t('b142')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b143')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b143"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b143_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b144')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b144"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b144_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b145')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b145"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b145_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b146')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b146"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b146_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b147')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b147"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b147_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b148')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b148"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b148_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b149')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b149"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b149_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b150')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b150"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b150_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b151')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b151"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b151_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b152')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b152"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b152_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b153')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b153"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b153_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b154')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b155')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b155"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b155_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b156')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b156"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b156_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b157')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b157"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b157_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b158')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b158"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b158_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b159')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b159"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b160')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b160"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b160_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b161')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b161"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b161_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b162')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b162"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b162_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b163')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b163"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b163_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b164')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b164"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b164_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b165')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b166')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b166')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b166"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b166_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b167')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b168')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b168"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b168_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b169')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b169"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b169_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b170')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b170"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b170_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b171')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b171"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b171_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b172')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b172"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b172_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b173')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b173"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b173_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b174')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b174"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b174_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b175')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b175"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b175_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b176')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b176"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b176_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b177')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b177"
                        style="width: 100%"
                        :disabled="true"
                        rows="12"
                        :suffix="$t('b177_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b178')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b178"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b178_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b179')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 14 }"
                    :wrapperCol="{ span: 10 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b179"
                        style="width: 100%"
                        :disabled="false"
                        rows="12"
                        :suffix="$t('b179_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-card>
            <a-card
              :title="$t('b180')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <br />
                <p style="font-weight: bolder; color: red">
                  {{ $t("b181") }}
                </p>
                <a-form-item
                  :label="$t('b182')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b182"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b182_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b183')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b183"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b183_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b184')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b184"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b184_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b185')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <br />
                <p style="font-weight: bolder; color: red">
                  {{ $t("b186") }}
                </p>
                <a-form-item
                  :label="$t('b187')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b187"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b187_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b188')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b188"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b188_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b189')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b189"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b189_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b190')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b190"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b191')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b191"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b191_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b192')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b192"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b192_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b193')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b193"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b194')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b194"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b194_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <br />
                <p style="font-weight: bolder; color: red">
                  {{ $t("b195") }}
                </p>
                <a-form-item
                  :label="$t('b196')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b196"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b196_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b197')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b197"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b197_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b198')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b198"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b198_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b199')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b199"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b199_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b200')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b200"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b200_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b201')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b201"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b201_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b202')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b202"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b202_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b203')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b203"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b203_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b204')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b204"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b204_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b205')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b205"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b205_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b206')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b207')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b207"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b207_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b208')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b208"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b208_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b209')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b209"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b209_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b210')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b210"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b210_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b211')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b211"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b211_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b212')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b212"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :suffix="$t('b212_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b213')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b213"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b213_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b214')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b214"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b214_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <br />
                <p style="font-weight: bolder; color: red">
                  {{ $t("b215") }}
                </p>
              </a-form>
            </a-card>
            <a-card
              title="计算值"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  label=" "
                  :colon="false"
                  style="margin-top: 10px"
                  :labelCol="{ span: 4 }"
                  :wrapperCol="{ span: 20 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b222"
                      style="width: 33%;"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b222_u')"
                    />
                    <a-input
                      v-model="b223"
                      style="width: 33%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b223_u')"
                    />
                    <a-input
                      v-model="b224"
                      style="width: 34%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b224_u')"
                    />
                    <a-input
                      v-model="b223_1"
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
          </a-card>
          <a-card
            :title="$t('c0')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-form>
              <a-form-item
                :label="$t('c2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="c2"
                    style="width: 100%"
                    :disabled="true"
                    rows="12"
                    :suffix="$t('c2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('c3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="c3"
                    style="width: 100%"
                    :disabled="true"
                    rows="12"
                    :suffix="$t('c3_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('c4')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="c4"
                    style="width: 100%"
                    :disabled="false"
                    rows="12"
                    :suffix="$t('c4_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('c4_1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="c4_1"
                    style="width: 100%"
                    :disabled="false"
                    rows="12"
                    :suffix="$t('c4_1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('c8')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="c8"
                    style="width: 100%"
                    :disabled="true"
                    rows="12"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('c9')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="c9"
                    style="width: 100%"
                    :disabled="true"
                    rows="12"
                    :suffix="$t('c9_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('c10')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="c10"
                    style="width: 100%"
                    :disabled="true"
                    rows="12"
                    :suffix="$t('c10_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
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
  i18n: require("./i18n_4002"),
  data() {
    return {
      modelVisible: false,
      b3: "20000",
      b4: "5",
      b6: "10",
      b7: "48",
      b10: "15",
      b10_1: "3",
      b11: "15",
      b11_1: "4",
      b12: "3",
      b12_1: "4",
      b13: "5",
      b13_1: "5",
      b14: "1.8",
      b16: "",
      b17: "",
      b20: "2",
      b21: "2",
      b23: "3",
      b24: "9",
      b31: "0.3",
      b32: "1.2",
      b33: "0.1",
      b34: "1.5",
      b35: "0.2",
      b36: "0.9",
      b37: "0.4",
      b42_1: "2",
      b59_1: "1",
      b46: "400",
      b49: "1",
      b51: "10",
      b55: "0.1×0.1",
      b61: "300",
      b65: "10",
      b73: "1.5",
      b74: "5",
      b78: "500",
      b83: "0.4",
      b84: "1.5",
      b85: "0.4",
      b86: "1",
      b91: "0.5",
      b96: "0.5",
      b97: "0.4",
      b102: "0.013",
      b108: "0.8",
      b110: "1",
      b113: "0.5",
      b118: "0.05",
      b121: "0.5",
      b123: "0.4",
      b128: "3",
      b132: "0.6",
      b133: "0.6",
      b135: "0.35",
      b143: "0.025",
      b146: "0.15",
      b150: "45",
      b151: "0.6",
      b155: "1173×620",
      b156: "24",
      b157: "48",
      b160: "1.235",
      b161: "2.36",
      b166: "4.4",
      b170: "40",
      b172: "1.77",
      b173: "0.22",
      b174: "0",
      b176: "1.5",
      b178: "12",
      b182: "1.2",
      b187: "0.1",
      b188: "0.0101",
      b189: "981",
      b190: "0.5",
      b193: "0.8",
      b196: "0.3",
      b197: "0.22",
      b199: "2",
      b200: "2",
      b201: "0.3",
      b211: "2",
      b212: "10",
      c4: "1",
      c4_1: "1",
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
              dataIndex: "尺寸",
              key: "4",
              width: "150px",
              align: "center",
              scopedSlots: { customRender: "尺寸" },
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
              dataIndex: "数量",
              key: "7",
              width: "50px",
              align: "center",
              scopedSlots: { customRender: "数量" },
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
        exportExcel3(allData1, allData2, allData3, "V型滤池工程量", this);
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
        key2: this.b6,
        key3: this.b10,
        key4: this.b10_1,
        key5: this.b11,
        key6: "4",
        key7: this.b11_1,
        key8: this.b13,
        key9: this.b13_1,
        key10: "12",
        key11: "48",
        key12: this.b14,
      };
      exportWord("V型滤池计算书", "4002.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b3,
        key2: this.b6,
        key3: this.b10,
        key4: this.b10_1,
        key5: this.b11,
        key6: "4",
        key7: this.b11_1,
        key8: this.b13,
        key9: this.b13_1,
        key10: "12",
        key11: "48",
        key12: this.b14,
      };
      initWordStorage("4002.docx", data);
      this.handleExcelCache("4002.xlsx", "V型滤池工程量");
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
    quickSort(arr, left, right) {
      let index;
      index = this.partition(arr, left, right);
      if (left < index - 1) {
        this.quickSort(arr, left, index - 1);
      }
      if (index < right) {
        this.quickSort(arr, index, right);
      }
      return arr;
    },
    partition(arr, left, right) {
      let point = arr[Math.floor((left + right) / 2)];
      let i = left,
        j = right;
      while (i <= j) {
        while (arr[i] > point) {
          i++;
        }
        while (arr[j] < point) {
          j--;
        }
        if (i <= j) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      }
      return i;
    },
    findKthLargest(nums, k) {
      nums = this.quickSort(nums, 0, nums.length - 1);
      console.log(nums[k - 1]);
      return nums[k - 1];
    },
    get_a_1_1() {
      return this.b223_1;
    },
    get_b_1_1() {
      return (
        "Q=" +
        parseFloat(this.b179) / parseFloat(this.b42_1) +
        "m³/h，H=" +
        this.b178 +
        "m"
      );
    },
    get_b_1_2() {
      return parseFloat(this.b42_1) + parseFloat(this.b43_1);
    },
    get_b_1_3() {
      return this.b42_1 + "用" + this.b43_1 + "备";
    },
    get_b_2_1() {
      return "Q=" + this.c9 + "m3/min，P=49kPa，N=" + this.c10 + "kW";
    },
    get_b_2_2() {
      return parseFloat(this.c4) + parseFloat(this.c4_1);
    },
    get_b_2_3() {
      return this.c4 + "用" + this.c4_1 + "备";
    },
    get_c_1_1() {
      return parseFloat(this.b20) * 4;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b43_1() {
      if (this.ROUND(parseFloat(this.b59_1) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b59_1) / 3, 0);
      }
    },
    b60_1() {
      if (this.ROUND(parseFloat(this.b59_1) / 3, 0) == 0) {
        return 1;
      } else {
        return this.ROUND(parseFloat(this.b59_1) / 3, 0);
      }
    },
    b5() {
      return (
        (parseFloat(this.b3) * parseFloat(this.b4)) / 100 + parseFloat(this.b3)
      );
    },
    b18() {
      return (
        24 -
        (((parseFloat(this.b10_1) +
          parseFloat(this.b11_1) +
          parseFloat(this.b13_1)) /
          60) *
          24) /
          parseFloat(this.b7)
      ).toFixed(2);
    },
    b19() {
      return (
        parseFloat(this.b5) /
        parseFloat(this.b6) /
        parseFloat(this.b18)
      ).toFixed(2);
    },
    b22() {
      return (
        parseFloat(this.b19) /
        parseFloat(this.b20) /
        parseFloat(this.b21)
      ).toFixed(2);
    },
    b25() {
      return (parseFloat(this.b24) / parseFloat(this.b23)).toFixed(1);
    },
    b26() {
      return (
        parseFloat(this.b24) *
        parseFloat(this.b23) *
        parseFloat(this.b21)
      ).toFixed(1);
    },
    b27() {
      return (parseFloat(this.b26) * parseFloat(this.b20)).toFixed(1);
    },
    b28() {
      return (
        parseFloat(this.b5) /
        parseFloat(this.b18) /
        parseFloat(this.b27)
      ).toFixed(2);
    },
    b29() {
      return (
        (parseFloat(this.b28) * parseFloat(this.b20)) /
        (parseFloat(this.b20) - 1)
      ).toFixed(1);
    },
    b38() {
      return (
        parseFloat(this.b31) +
        parseFloat(this.b32) +
        parseFloat(this.b33) +
        parseFloat(this.b34) +
        parseFloat(this.b35) +
        parseFloat(this.b36) +
        parseFloat(this.b37)
      ).toFixed(2);
    },
    b42() {
      return (parseFloat(this.b13) * parseFloat(this.b26) * 3.6).toFixed(0);
    },
    b43() {
      return (parseFloat(this.b14) * parseFloat(this.b26) * 3.6).toFixed(0);
    },
    b44() {
      return (parseFloat(this.b42) + parseFloat(this.b43)).toFixed(0);
    },
    b47() {
      return (
        ((parseFloat(this.b42) / 3600) * 4) /
        3.1415926 /
        Math.pow(parseFloat(this.b46) / 1000, 2)
      ).toFixed(2);
    },
    b50() {
      return (parseFloat(this.b42) / 3600 / parseFloat(this.b49)).toFixed(2);
    },
    b52() {
      return (parseFloat(this.b51) * 2).toFixed(0);
    },
    b53() {
      return (parseFloat(this.b24) / parseFloat(this.b51)).toFixed(3);
    },
    b54() {
      return (parseFloat(this.b50) / parseFloat(this.b52)).toFixed(4);
    },
    b56() {
      return 0.01;
    },
    b57() {
      return (
        parseFloat(this.b42) /
        3600 /
        parseFloat(this.b52) /
        parseFloat(this.b56)
      ).toFixed(2);
    },
    b59() {
      return ((parseFloat(this.b10) * parseFloat(this.b26) * 3.6) / 60).toFixed(
        2
      );
    },
    b62() {
      return (
        ((parseFloat(this.b59) / 60) * 4) /
        3.1415926 /
        Math.pow(parseFloat(this.b61) / 1000, 2)
      ).toFixed(1);
    },
    b64() {
      return this.b52;
    },
    b66() {
      return (parseFloat(this.b59) / 60 / parseFloat(this.b65)).toFixed(3);
    },
    b67() {
      return (parseFloat(this.b66) / parseFloat(this.b64)).toFixed(5);
    },
    b68() {
      return Math.pow((4 * parseFloat(this.b67)) / 3.1415926, 0.5).toFixed(2);
    },
    b69() {
      return ((parseFloat(this.b59) * 60) / parseFloat(this.b64)).toFixed(1);
    },
    b71() {
      return ((parseFloat(this.b12) * parseFloat(this.b26)) / 1000).toFixed(3);
    },
    b72() {
      return ((parseFloat(this.b11) * parseFloat(this.b26)) / 1000).toFixed(3);
    },
    b75() {
      return (
        parseFloat(this.b71) / parseFloat(this.b73) +
        parseFloat(this.b72) / parseFloat(this.b74)
      ).toFixed(2);
    },
    b77() {
      return (parseFloat(this.b5) / parseFloat(this.b18)).toFixed(1);
    },
    b79() {
      return (
        (parseFloat(this.b77) * 4 * 1000 * 1000) /
        3.1415926 /
        parseFloat(this.b78) /
        parseFloat(this.b78) /
        3600
      ).toFixed(2);
    },
    b87() {
      return (parseFloat(this.b83) * parseFloat(this.b84)).toFixed(1);
    },
    b88() {
      return (parseFloat(this.b85) * parseFloat(this.b86)).toFixed(1);
    },
    b89() {
      return (parseFloat(this.b75) / parseFloat(this.b64)).toFixed(4);
    },
    b92() {
      return (
        parseFloat(this.b36) +
        parseFloat(this.b35) +
        parseFloat(this.b33) +
        parseFloat(this.b32) +
        parseFloat(this.b91) -
        parseFloat(this.b84)
      ).toFixed(1);
    },
    b93() {
      return (
        parseFloat(this.b32) +
        parseFloat(this.b33) +
        parseFloat(this.b35) +
        parseFloat(this.b36) +
        parseFloat(this.b91) -
        parseFloat(this.b86)
      ).toFixed(1);
    },
    b94() {
      return (
        (parseFloat(this.b93) - parseFloat(this.b92)) /
        parseFloat(this.b24)
      ).toFixed(2);
    },
    b98() {
      return (parseFloat(this.b92) - parseFloat(this.b96)).toFixed(2);
    },
    b99() {
      return (parseFloat(this.b97) + 2 * parseFloat(this.b98)).toFixed(1);
    },
    b100() {
      return (parseFloat(this.b97) * parseFloat(this.b98)).toFixed(2);
    },
    b101() {
      return (parseFloat(this.b100) / parseFloat(this.b99)).toFixed(2);
    },
    b103() {
      return (
        (Math.pow(parseFloat(this.b101), 2 / 3) *
          Math.pow(parseFloat(this.b94), 0.5)) /
        parseFloat(this.b102)
      ).toFixed(2);
    },
    b104() {
      return (parseFloat(this.b100) * parseFloat(this.b103)).toFixed(2);
    },
    b105() {
      return (
        Math.pow(
          Math.pow(
            parseFloat(this.b44) /
              3600 /
              2 /
              0.42 /
              parseFloat(this.b24) /
              (2 * 9.81),
            0.5
          ),
          2
        ) / 3
      ).toFixed(3);
    },
    b109() {
      return (parseFloat(this.b77) / 3600 / parseFloat(this.b108)).toFixed(2);
    },
    b111() {
      return (parseFloat(this.b109) / parseFloat(this.b110)).toFixed(3);
    },
    b112() {
      return this.ROUND(parseFloat(this.b109), 1);
    },
    b115() {
      return (parseFloat(this.b29) * parseFloat(this.b26)).toFixed(2);
    },
    b119() {
      return (
        parseFloat(this.b115) /
        3600 /
        0.64 /
        Math.pow(2 * 9.81 * parseFloat(this.b118), 0.5)
      ).toFixed(4);
    },
    b120() {
      return (
        parseFloat(this.b119) *
        (parseFloat(this.b43) / parseFloat(this.b115))
      ).toFixed(3);
    },
    b122() {
      return this.ROUNDUP(parseFloat(this.b120) / parseFloat(this.b121), 1);
    },
    b124() {
      return (
        (parseFloat(this.b119) - parseFloat(this.b120)) /
        2 /
        parseFloat(this.b123)
      ).toFixed(1);
    },
    b129() {
      return Math.pow(
        parseFloat(this.b115) / 3600 / (1.84 * parseFloat(this.b128)),
        2 / 3
      ).toFixed(3);
    },
    b134() {
      return (
        parseFloat(this.b23) * 2 +
        parseFloat(this.b97) +
        2 * 0.3
      ).toFixed(1);
    },
    b136() {
      return (
        parseFloat(this.b115) /
        3600 /
        (2 * parseFloat(this.b132) * parseFloat(this.b135))
      ).toFixed(2);
    },
    b138() {
      return (
        (parseFloat(this.b132) * parseFloat(this.b135)) /
        (2 * parseFloat(this.b135) + parseFloat(this.b132))
      ).toFixed(2);
    },
    b139() {
      return Math.pow(
        (0.013 * parseFloat(this.b136)) /
          Math.pow(parseFloat(this.b138), 2 / 3),
        2
      ).toFixed(6);
    },
    b140() {
      return ((parseFloat(this.b139) * parseFloat(this.b134)) / 2).toFixed(6);
    },
    b141() {
      return (parseFloat(this.b135) + parseFloat(this.b140)).toFixed(6);
    },
    b144() {
      return (parseFloat(this.b24) / 0.15).toFixed(0);
    },
    b145() {
      return (
        ((3.1415926 * Math.pow(parseFloat(this.b143), 2)) / 4) *
        parseFloat(this.b144)
      ).toFixed(5);
    },
    b147() {
      return (
        Math.pow(
          parseFloat(this.b43) / 3600 / (2 * 0.8 * parseFloat(this.b145)),
          2
        ) /
        2 /
        9.8
      ).toFixed(3);
    },
    b148() {
      return this.b24;
    },
    b149() {
      return Math.pow(
        parseFloat(this.b44) / 3600 / (2 * 1.84 * parseFloat(this.b148)),
        2 / 3
      ).toFixed(3);
    },
    b152() {
      return (
        parseFloat(this.b151) -
        parseFloat(this.b146) -
        parseFloat(this.b149)
      ).toFixed(2);
    },
    b153() {
      return (parseFloat(this.b152) - parseFloat(this.b147)).toFixed(2);
    },
    b158() {
      return (parseFloat(this.b156) * parseFloat(this.b157)).toFixed(0);
    },
    b159() {
      return (parseFloat(this.b158) * parseFloat(this.b20)).toFixed(0);
    },
    b162() {
      return (parseFloat(this.b158) / parseFloat(this.b26)).toFixed(0);
    },
    b163() {
      return (
        ((parseFloat(this.b158) * 6.12) / 10000 / parseFloat(this.b26)) *
        100
      ).toFixed(2);
    },
    b164() {
      return (
        parseFloat(this.b3) /
        parseFloat(this.b18) /
        3600 /
        ((parseFloat(this.b159) * 6.12) / 10000)
      ).toFixed(3);
    },
    b168() {
      return (parseFloat(this.b46) / 1000).toFixed(1);
    },
    b169() {
      return (
        (parseFloat(this.b42) * 4) /
        3.14 /
        3600 /
        Math.pow(parseFloat(this.b168), 2)
      ).toFixed(2);
    },
    b171() {
      return (
        (0.00107 * parseFloat(this.b170) * Math.pow(parseFloat(this.b169), 2)) /
        Math.pow(parseFloat(this.b168), 1.3)
      ).toFixed(2);
    },
    b175() {
      return ((2.65 / 1 - 1) * (1 - 0.41) * 1.2).toFixed(2);
    },
    b177() {
      return (
        parseFloat(this.b166) +
        parseFloat(this.b171) +
        parseFloat(this.b173) +
        parseFloat(this.b174) +
        parseFloat(this.b175) +
        parseFloat(this.b176) +
        parseFloat(this.b172)
      ).toFixed(2);
    },
    b179() {
      return this.b42;
    },
    b183() {
      return this.ROUND(
        parseFloat(this.b182) +
          parseFloat(this.b32) +
          parseFloat(this.b33) +
          parseFloat(this.b175) +
          parseFloat(this.b174) +
          parseFloat(this.b173) +
          0.55,
        1
      );
    },
    b184() {
      return this.b59;
    },
    b191() {
      return (parseFloat(this.b32) * 100).toFixed(0);
    },
    b192() {
      return (parseFloat(this.b6) / 36).toFixed(3);
    },
    b194() {
      return (
        180 *
        (parseFloat(this.b188) / parseFloat(this.b189)) *
        (Math.pow(1 - parseFloat(this.b190), 2) /
          Math.pow(parseFloat(this.b190), 3)) *
        (1 / parseFloat(this.b193) / parseFloat(this.b187)) *
        parseFloat(this.b191) *
        parseFloat(this.b192)
      ).toFixed(2);
    },
    b198() {
      return (parseFloat(this.b196) + parseFloat(this.b197)).toFixed(2);
    },
    b202() {
      return (
        parseFloat(this.b201) +
        parseFloat(this.b36) +
        parseFloat(this.b35) +
        parseFloat(this.b32) +
        parseFloat(this.b33)
      ).toFixed(2);
    },
    b203() {
      return (
        parseFloat(this.b5) /
        parseFloat(this.b18) /
        parseFloat(this.b20)
      ).toFixed(2);
    },
    b204() {
      return Math.pow(
        parseFloat(this.b203) / 3600 / 1.84 / parseFloat(this.b200),
        2 / 3
      ).toFixed(2);
    },
    b205() {
      return (parseFloat(this.b198) + parseFloat(this.b204)).toFixed(2);
    },
    b207() {
      return (
        (parseFloat(this.b12) *
          parseFloat(this.b26) *
          3.6 *
          parseFloat(this.b12_1)) /
        60
      ).toFixed(2);
    },
    b208() {
      return ((parseFloat(this.b42) * parseFloat(this.b13_1)) / 60).toFixed(1);
    },
    b209() {
      return ((parseFloat(this.b43) * 15) / 60).toFixed(1);
    },
    b210() {
      return (28.7 * 2.9 * 2).toFixed(1);
    },
    b213() {
      return (
        parseFloat(this.b210) /
        parseFloat(this.b211) /
        parseFloat(this.b212)
      ).toFixed(2);
    },
    b214() {
      return (5.4 + 2).toFixed(2);
    },
    b222() {
      return (
        (parseFloat(this.b23) * parseFloat(this.b21) + 0.2 * 2 + 0.64) *
          parseFloat(this.b20) +
        0.3
      ).toFixed(2);
    },
    b223() {
      return (
        parseFloat(this.b24) +
        0.3 * 3 +
        parseFloat(this.b199) +
        2.8
      ).toFixed(1);
    },
    b224() {
      return parseFloat(this.b38).toFixed(1);
    },
    b223_1() {
      return (
        parseFloat(this.b222).toString() +
        "m * " +
        parseFloat(this.b223).toString() +
        "m * " +
        parseFloat(this.b224).toString()
      );
    },
    c2() {
      return this.b183;
    },
    c3() {
      return this.b184;
    },
    c9() {
      var cal1 = parseFloat(this.c3) / parseFloat(this.c4);
      var cal2 = 0;
      if (cal1 < 0.78) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 0.94) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.09) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.2) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.3) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.43) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.53) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.67) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.81) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.01) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.07) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.32) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.56) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.74) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 1.9) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.12) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.32) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.71) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.09) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.76) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 2.97) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.16) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.46) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.77) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.05) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.3) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.58) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.82) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 3.9) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.32) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 4.74) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 5.58) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 5.99) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 6.73) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7.23) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7.77) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8.28) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 5.55) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 6.03) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 7.82) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8.37) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 8.77) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 9.33) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 10.01) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 10.83) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 10.65) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 11.54) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 13.5) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 15.95) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 17.17) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 18.23) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 21.05) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 23.04) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 24.48) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26.08) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 19.35) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 22.98) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 24.98) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 26.37) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 30.54) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 33.55) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 35.84) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 38.38) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 28.22) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 32.34) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 36.03) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 40.15) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 43.78) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 47.08) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 50.4) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 53.68) {
        cal2 = cal2 + 1;
      }
      if (cal1 < 57.37) {
        cal2 = cal2 + 1;
      }
      var array = [
        0.78,
        0.94,
        1.09,
        1.2,
        1.3,
        1.43,
        1.53,
        1.67,
        1.81,
        2.01,
        1.07,
        1.32,
        1.56,
        1.74,
        1.9,
        2.12,
        2.32,
        2.48,
        2.71,
        3.09,
        2.48,
        2.76,
        2.97,
        3.16,
        3.46,
        3.77,
        4.05,
        4.3,
        4.58,
        4.82,
        3.48,
        3.9,
        4.32,
        4.74,
        5.58,
        5.99,
        6.73,
        7.23,
        7.77,
        8.28,
        5.55,
        6.03,
        7,
        7.82,
        8.37,
        8.77,
        9.33,
        10.01,
        10.83,
        11.5,
        10.65,
        11.54,
        13.5,
        15.95,
        17.17,
        18.23,
        21.05,
        23.04,
        24.48,
        26.08,
        19.35,
        22.98,
        24.98,
        26.37,
        30.54,
        33.55,
        35.84,
        38.38,
        28.22,
        32.34,
        36.03,
        40.15,
        43.78,
        47.08,
        50.4,
        53.68,
        57.37,
      ];

      return this.findKthLargest(array, cal2);
    },
    c10() {
      var array1 = [
        0.78,
        0.94,
        1.09,
        1.2,
        1.3,
        1.43,
        1.53,
        1.67,
        1.81,
        2.01,
        1.07,
        1.32,
        1.56,
        1.74,
        1.9,
        2.12,
        2.32,
        2.48,
        2.71,
        3.09,
        2.48,
        2.76,
        2.97,
        3.16,
        3.46,
        3.77,
        4.05,
        4.3,
        4.58,
        4.82,
        3.48,
        3.9,
        4.32,
        4.74,
        5.58,
        5.99,
        6.73,
        7.23,
        7.77,
        8.28,
        5.55,
        6.03,
        7,
        7.82,
        8.37,
        8.77,
        9.33,
        10.01,
        10.83,
        11.5,
        10.65,
        11.54,
        13.5,
        15.95,
        17.17,
        18.23,
        21.05,
        23.04,
        24.48,
        26.08,
        19.35,
        22.98,
        24.98,
        26.37,
        30.54,
        33.55,
        35.84,
        38.38,
        28.22,
        32.34,
        36.03,
        40.15,
        43.78,
        47.08,
        50.4,
        53.68,
        57.37,
      ];

      var array2 = [
        1.5,
        2.2,
        2.2,
        2.2,
        2.2,
        3,
        3,
        3,
        3,
        4,
        2.2,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4,
        5.5,
        4,
        4,
        5.5,
        5.5,
        5.5,
        5.5,
        5.5,
        7.5,
        7.5,
        7.5,
        5.5,
        7.5,
        7.5,
        7.5,
        11,
        11,
        11,
        11,
        11,
        15,
        7.5,
        11,
        11,
        11,
        11,
        15,
        15,
        15,
        15,
        18.5,
        15,
        18.5,
        18.5,
        22,
        30,
        30,
        30,
        30,
        37,
        37,
        30,
        30,
        37,
        37,
        45,
        45,
        55,
        55,
        37,
        45,
        45,
        55,
        55,
        75,
        75,
        75,
        75,
      ];
      var index = array1.indexOf(this.c9);
      return array2[index];
    },
    c8() {
      var array1 = [
        0.78,
        0.94,
        1.09,
        1.2,
        1.3,
        1.43,
        1.53,
        1.67,
        1.81,
        2.01,
        1.07,
        1.32,
        1.56,
        1.74,
        1.9,
        2.12,
        2.32,
        2.48,
        2.71,
        3.09,
        2.48,
        2.76,
        2.97,
        3.16,
        3.46,
        3.77,
        4.05,
        4.3,
        4.58,
        4.82,
        3.48,
        3.9,
        4.32,
        4.74,
        5.58,
        5.99,
        6.73,
        7.23,
        7.77,
        8.28,
        5.55,
        6.03,
        7,
        7.82,
        8.37,
        8.77,
        9.33,
        10.01,
        10.83,
        11.5,
        10.65,
        11.54,
        13.5,
        15.95,
        17.17,
        18.23,
        21.05,
        23.04,
        24.48,
        26.08,
        19.35,
        22.98,
        24.98,
        26.37,
        30.54,
        33.55,
        35.84,
        38.38,
        28.22,
        32.34,
        36.03,
        40.15,
        43.78,
        47.08,
        50.4,
        53.68,
        57.37,
      ];
      var array2 = [
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR50",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR65",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR80",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR100",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR125",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR150",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR175",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
        "SSR200",
      ];
      var index = array1.indexOf(this.c9);
      return array2[index];
    },
    data1() {
      return [
        {
          序号: "1",
          单体位号: "",
          名称: "V型滤池",
          尺寸: this.get_a_1_1(),
          标高: "",
          单位: "座",
          数量: "1",
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
      ];
    },
    data2() {
      return [
        {
          序号: "1",
          设备位号: "",
          设备工艺名称: "反冲洗泵",
          设备类型: this.get_b_1_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_1_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_1_3(),
        },
        {
          序号: "2",
          设备位号: "",
          设备工艺名称: "反冲洗风机",
          设备类型: this.get_b_2_1(),
          规格及型号: "",
          单位: "台",
          数量: this.get_b_2_2(),
          运行时间: "",
          主要材质: "",
          备注: this.get_b_2_3(),
        },
      ];
    },
    data3() {
      return [
        {
          序号: "1",
          仪表位号: "",
          仪表名称: "电动阀",
          安装位置: "",
          规格及型号: "",
          单位: "台",
          数量: this.get_c_1_1(),
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
        序号: "1",
        单体位号: "",
        名称: "V型滤池",
        尺寸: this.get_a_1_1(),
        标高: "",
        单位: "座",
        数量: "1",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "反冲洗泵",
        设备类型: this.get_b_1_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_1_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_1_3(),
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "反冲洗风机",
        设备类型: this.get_b_2_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_b_2_2(),
        运行时间: "",
        主要材质: "",
        备注: this.get_b_2_3(),
      },
    ];
    this.data3 = [
      {
        序号: "1",
        仪表位号: "",
        仪表名称: "电动阀",
        安装位置: "",
        规格及型号: "",
        单位: "台",
        数量: this.get_c_1_1(),
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
