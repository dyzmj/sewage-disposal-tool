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
          :title="$t('b5')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
          :headStyle="{ 'font-weight': 'bolder' }"
          size="small"
        >
          <a-card
            :title="$t('b6')"
            style="margin-bottom: 24px; "
            :bordered="false"
            :body-style="{ padding: 4 }"
            size="small"
          >
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
                    rows="12"
                    :placeholder="$t('b8')"
                    :suffix="$t('b8_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </a-card>
          <a-card
            :title="$t('b9')"
            style="margin-bottom: 24px; "
            :bordered="false"
            :body-style="{ padding: 4 }"
            size="small"
          >
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
                    rows="12"
                    :placeholder="$t('b11')"
                    :suffix="$t('b11_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b11_1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b11_1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b11_1')"
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
          </a-card>
          <a-card
            :title="$t('b17')"
            style="margin-bottom: 24px; "
            :bordered="false"
            :body-style="{ padding: 4 }"
            size="small"
          >
            <p>① {{ $t("b18") }}</p>
            <p>② {{ $t("b19") }}</p>
            <p>③ {{ $t("b20") }}</p>
            <p>④ {{ $t("b21") }}</p>
            <p>⑤ {{ $t("b22") }}</p>
          </a-card>
        </a-card>
        <a-card
          :title="$t('b23')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
          :headStyle="{ 'font-weight': 'bolder' }"
          size="small"
        >
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
          </a-form>
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
          :title="$t('b28')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <a-card
            :title="$t('b29')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
          >
            <a-card
              :title="$t('b30')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
            >
              <a-card
                :title="$t('b31')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
              >
                <a-form>
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
                </a-form>
              </a-card>
              <a-card
                :title="$t('b35')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
              >
                <a-form>
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
                        :suffix="$t('b40_u')"
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
                        :disabled="false"
                        :suffix="$t('b41_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b42')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
              >
                <a-form>
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
                        :disabled="false"
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
                        :disabled="false"
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
                        :disabled="false"
                        :suffix="$t('b47_u')"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b29')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
          >
            <a-card
              :title="$t('b48')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
            >
              <a-card
                :title="$t('b49')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
              >
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b50_u')"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b51_u')"
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
                        :disabled="false"
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
                </a-form>
              </a-card>
              <a-card
                :title="$t('b59')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 4 }"
              >
                <a-form>
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
                        :disabled="false"
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
                        :disabled="false"
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
                        :disabled="false"
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
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b67_u')"
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
                        :disabled="false"
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
                  <a-form-item
                    :label="$t('b72')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b72"
                        style="width: 100%;"
                        :disabled="false"
                        :suffix="$t('b72_u')"
                      />
                    </a-input-group>
                  </a-form-item>
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
  i18n: require("./i18n_7002"),
  data() {
    return {
      b8: "130.00",
      b11: "34.00",
      b11_1: "380.00",
      b14: "5",
      b15: "0.50",
      b16: "330.00",
      b25: "0.5",
      b26: "3.5",
      b27: "1",
      b32: "1.00",
      b33: "1.50",
      b34: "195.00",
      b36: "172.43",
      b37: "125.07",
      b38: "124.57",
      b39: "85.87",
      b40: "258.80",
      b41: "33643.77",
      b43: "172.43",
      b44: "86.21",
      b45: "1.00",
      b46: "260.14",
      b47: "33818.57",
      b50: "172.43",
      b51: "86.21",
      b52: "259.14",
      b53: "7.61",
      b54: "221.11",
      b55: "28.74",
      b57: "175.00",
      b58: "22.75",
      b60: "396.11",
      b61: "51.49",
      b62: "1.46",
      b63: "19.69",
      b64: "102.99",
      b65: "100",
      b66: "2.00",
      b67: "7.5～8.5",
      b68: "11.16",
      b69: "193.40",
      b70: "1.33",
      b71: "145.42",
      b72: "386.81",
      b73: "290.83",
      b74: "300",
      b75: "260.00",
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
        exportExcel3(allData1, allData2, allData3, "生物接触氧化池计算书", this);
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
        key1: this.b8,
        key2: this.b11,
        key3: '20',
        key4: '0.5',
        key5: '2',
        key6: this.b15,
        key7: '0.5',
        key8: '3.5',
        key9: '2',
      };
      exportWord("折点加氯计算书", "7002.docx", data, this);
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
    b13() {
      return ((17 * parseFloat(this.b11)) / 14).toFixed(2);
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
