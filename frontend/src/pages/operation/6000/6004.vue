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
        <a slot="extra" href="#">
            <div class="" style="">
              <a-button type="primary" @click="refreshInitData" icon="sync" size="small">
                {{ $t("refresh") }}</a-button
              >
            </div>
          </a>
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
                      style="width: 100%"
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
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              size="small"
            >
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
                      style="width: 100%"
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
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b11_1"
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b11_1')"
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
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b13')"
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
                      style="width: 100%"
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
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b15"
                      style="width: 100%"
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
                  :labelCol="{ span: 14 }"
                  :wrapperCol="{ span: 10 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b16"
                      style="width: 100%"
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
              style="margin-bottom: 24px"
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
                :labelCol="{ span: 14 }"
                :wrapperCol="{ span: 10 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b25"
                    style="width: 100%"
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
                    style="width: 100%"
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
                    style="width: 100%"
                    :disabled="false"
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
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b29')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 2 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b30')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 2 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-card
                  :title="$t('b31')"
                  style="margin-bottom: 24px"
                  :bordered="false"
                  :body-style="{ padding: 2 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
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
                          :disabled="true"
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
                          style="width: 100%"
                          :disabled="true"
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
                  :body-style="{ padding: 2 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
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
                          style="width: 100%"
                          :disabled="true"
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
                          style="width: 100%"
                          ::disabled="true"
                          :suffix="$t('b39_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b40')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b40"
                          style="width: 100%"
                          :disabled="true"
                          :suffix="$t('b40_u')"
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
                          style="width: 100%"
                          :disabled="true"
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
                  :body-style="{ padding: 2 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
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
                          :suffix="$t('b43_u')"
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
                          :suffix="$t('b44_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b45')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b45"
                          style="width: 100%"
                          :disabled="true"
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
                          style="width: 100%"
                          :disabled="true"
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
              :body-style="{ padding: 2 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-card
                :title="$t('b48')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 2 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-card
                  :title="$t('b49')"
                  style="margin-bottom: 24px"
                  :bordered="false"
                  :body-style="{ padding: 2 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
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
                          style="width: 100%"
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
                          style="width: 100%"
                          :disabled="true"
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
                  :body-style="{ padding: 2 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
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
                          :suffix="$t('b57_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b58')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b58"
                          style="width: 100%"
                          :disabled="true"
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
                  :body-style="{ padding: 2 }"
                  :headStyle="{ 'font-weight': 'bolder' }"
                  size="small"
                >
                  <a-form>
                    <a-form-item
                      :label="$t('b60')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b60"
                          style="width: 100%"
                          :disabled="true"
                        />
                      </a-input-group>
                    </a-form-item>
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
                          :disabled="true"
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
                          :suffix="$t('b62_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b63')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b67"
                          style="width: 100%"
                          :disabled="true"
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
                          :suffix="$t('b69_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                    <a-form-item
                      :label="$t('b70')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
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
                          :disabled="true"
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
                          :suffix="$t('b75_u')"
                        />
                      </a-input-group>
                    </a-form-item>
                  </a-form>
                </a-card>
              </a-card>
            </a-card>
          </a-card>
          <a-card
            title="四、仪表设置"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
            <a-table
              :columns="columns4"
              :data-source="data4"
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
            :title="$t('b102')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
          <a-card
            :title="$t('b103')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
          <a-card
            :title="$t('b104')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
          <a-form>
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
                          :suffix="$t('b105_u')"
                        />
                      </a-input-group>
            </a-form-item>
            <a-form-item
                      :label="$t('b106')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b106"
                          style="width: 100%"
                          :disabled="true"
                          :suffix="$t('b106_u')"
                        />
                      </a-input-group>
            </a-form-item>
            <a-form-item
                      :label="$t('b107')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 14 }"
                      :wrapperCol="{ span: 10 }"
                    >
                      <a-input-group compact>
                        <a-input
                          v-model="b107"
                          style="width: 100%"
                          :disabled="true"
                          :suffix="$t('b107_u')"
                        />
                      </a-input-group>
            </a-form-item>
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
                          :disabled="true"
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
                          :disabled="true"
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
                          :suffix="$t('b112_u')"
                        />
                      </a-input-group>
            </a-form-item>
          </a-form>
          </a-card>
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
  initWordStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_6004"),
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
      b65: "100",
      b67: "7.5～8.5",
      b74: "300",
      b105: "260",
      b106: "1",
      b107: "4",
      b108: "0.5",
      b111: "10",
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
              dataIndex: "尺寸",
              key: "4",
              width: "150px",
              align: "center",
            },
            {
              title: "标高(m)",
              dataIndex: "标高",
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
              dataIndex: "数量",
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
            {
              title: "与基础设计不同处",
              dataIndex: "与基础设计不同处",
              key: "11",
              width: "80px",
              align: "center",
            },
            {
              title: "土建说明",
              dataIndex: "土建说明",
              key: "12",
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
              dataIndex: "设备类型",
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
              dataIndex: "数量",
              key: "7",
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
      columns4: [
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
              title: "安装位置",
              dataIndex: "安装位置",
              key: "3",
              width: "150px",
              align: "center",
            },
            {
              title: "仪表名称",
              dataIndex: "仪表名称",
              key: "4",
              width: "100px",
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
              dataIndex: "数量",
              key: "7",
              width: "50px",
              align: "center",
            },
            {
              title: "生产厂家",
              dataIndex: "生产厂家",
              key: "8",
              width: "80px",
              align: "center",
            }
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
        this.b8 = 40000;
      } else {
        this.b8 = waterData;
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
          "折点加氯工程量",
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
        key1: this.b8,
        key2: this.b11,
        key3: "20",
        key4: "0.5",
        key5: "2",
        key6: this.b15,
        key7: "0.5",
        key8: "3.5",
        key9: "2",
      };
      exportWord("折点加氯计算书", "6004.docx", data, this);
    },
    refreshInitData() {
      this.$message.info(this.$t("refreshSucc"));
      const data = {
        key1: this.b8,
        key2: this.b11,
        key3: "20",
        key4: "0.5",
        key5: "2",
        key6: this.b15,
        key7: "0.5",
        key8: "3.5",
        key9: "2",
      };
      initWordStorage("6004.docx", data);
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
    get_a_1() {
      return "液氯投加能力Q＝"+this.b65+"kg/h";
    },
    get_a_2() {
      return "碱投加能力Q＝"+this.b74+"L/h";
    },
    get_b_1() {
      return this.b111+"×"+this.b112+"×" +this.b109;
    },
    get_b_2() {
      return this.b106;
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b13() {
      return ((17 * parseFloat(this.b11)) / 14).toFixed(2);
    },
    b32() {
      return ((71 * parseFloat(this.b15)) / 35.5).toFixed(2);
    },
    b33() {
      return (parseFloat(this.b25) + parseFloat(this.b32)).toFixed(2);
    },
    b34() {
      return (parseFloat(this.b33) * parseFloat(this.b8)).toFixed(2);
    },
    b36() {
      return ((71 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b37() {
      return ((51.5 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b38() {
      return (parseFloat(this.b37) - parseFloat(this.b15)).toFixed(2);
    },
    b39() {
      return ((71 * parseFloat(this.b38)) / 103).toFixed(2);
    },
    b40() {
      return (
        parseFloat(this.b25) +
        parseFloat(this.b36) +
        parseFloat(this.b39)
      ).toFixed(2);
    },
    b41() {
      return (parseFloat(this.b40) * parseFloat(this.b8)).toFixed(2);
    },
    b43() {
      return ((71 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b44() {
      return ((71 * parseFloat(this.b37)) / 103).toFixed(2);
    },
    b45() {
      return ((71 * parseFloat(this.b15)) / 35.5).toFixed(2);
    },
    b46() {
      return (
        parseFloat(this.b25) +
        parseFloat(this.b43) +
        parseFloat(this.b44) +
        parseFloat(this.b45)
      ).toFixed(2);
    },
    b47() {
      return (parseFloat(this.b46) * parseFloat(this.b8)).toFixed(2);
    },
    b50() {
      return ((71 * parseFloat(this.b13)) / 17).toFixed(2);
    },
    b51() {
      return ((71 * parseFloat(this.b37)) / 103).toFixed(2);
    },
    b52() {
      return (
        parseFloat(this.b25) +
        parseFloat(this.b50) +
        parseFloat(this.b51)
      ).toFixed(2);
    },
    b53() {
      return (
        (parseFloat(this.b50) + parseFloat(this.b51)) /
        parseFloat(this.b11)
      ).toFixed(2);
    },
    b54() {
      return (
        parseFloat(this.b25) +
        (parseFloat(this.b11) - parseFloat(this.b14)) * parseFloat(this.b53)
      ).toFixed(2);
    },
    b55() {
      return (
        (parseFloat(this.b54) * parseFloat(this.b8) * parseFloat(this.b27)) /
        1000
      ).toFixed(2);
    },
    b57() {
      return (
        (parseFloat(this.b11_1) - parseFloat(this.b16)) *
        parseFloat(this.b26)
      ).toFixed(2);
    },
    b58() {
      return (
        (parseFloat(this.b57) * parseFloat(this.b8) * parseFloat(this.b27)) /
        1000
      ).toFixed(2);
    },
    b60() {
      return (parseFloat(this.b54) + parseFloat(this.b57)).toFixed(2);
    },
    b61() {
      return (parseFloat(this.b55) + parseFloat(this.b58)).toFixed(2);
    },
    b62() {
      return 1.46;
    },
    b63() {
      return (parseFloat(this.b55) / parseFloat(this.b62)).toFixed(2);
    },
    b64() {
      return (2 * parseFloat(this.b61)).toFixed(2);
    },
    b66() {
      return 2;
    },
    b68() {
      return ((parseFloat(this.b60) * 2) / 71).toFixed(2);
    },
    b69() {
      return (
        (parseFloat(this.b68) * 40 * parseFloat(this.b8)) /
        0.3 /
        1000
      ).toFixed(2);
    },
    b70() {
      return 1.33;
    },
    b71() {
      return (parseFloat(this.b69) / parseFloat(this.b70)).toFixed(2);
    },
    b72() {
      return (2 * parseFloat(this.b69)).toFixed(2);
    },
    b73() {
      return (parseFloat(this.b72) / parseFloat(this.b70)).toFixed(2);
    },
    b75() {
      return (parseFloat(this.b66) * parseFloat(this.b8)).toFixed(2);
    },
    b109() {
      return (parseFloat(this.b107) + parseFloat(this.b108)).toFixed(1);
    },
    b110() {
      return (parseFloat(this.b105)/parseFloat(this.b106)/parseFloat(this.b107)).toFixed(1);
    },
    b112() {
      return (parseFloat(this.b110)/parseFloat(this.b111)).toFixed(1);
    },
    data1() {
      return [
      {
        序号: "1",
        单体位号: "",
        名称: "反应池",
        尺寸: this.get_b_1(),
        标高: "池顶标高+3.0m,池底标高-1.5m。",
        单位: "座",
        数量: this.get_b_2(),
        结构形式: "钢砼",
        备注: "",
        暖通要求: "",
        与基础设计不同处: "",
        土建说明: ""
      },
    ];
    },
    data2() {
      return [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "加氯成套装置",
        设备类型: "加氯成套装置",
        规格及型号: this.get_a_1(),
        单位: "台",
        数量: "1",
        备注: "成套装置，含就地控制箱，氨瓶，加压泵，水射器，管道加热器，液氯膨胀室，液氯蒸发器，氯气过滤器，真空调节器，加氯机，漏氯报警仪，漏氯吸收装置，配套阀门管道等。",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "加碱成套装置",
        设备类型: "加碱成套装置",
        规格及型号: this.get_a_2(),
        单位: "台",
        数量: "1",
        备注: "成套装置，含就地控制箱（1个）、安装机架（1个）、碱加药泵（2台）、Y型过滤器（2个）、脉冲缓冲器（1个）、安全阀（2个）、背压阀（1个），磁翻板液位计（1个），配套阀门管道等。",
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
        名称: "反应池",
        尺寸: this.get_b_1(),
        标高: "池顶标高+3.0m,池底标高-1.5m。",
        单位: "座",
        数量: this.get_b_2(),
        结构形式: "钢砼",
        备注: "",
        暖通要求: "",
        与基础设计不同处: "",
        土建说明: ""
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "加氯成套装置",
        设备类型: "加氯成套装置",
        规格及型号: this.get_a_1(),
        单位: "台",
        数量: "1",
        备注: "成套装置，含就地控制箱，氨瓶，加压泵，水射器，管道加热器，液氯膨胀室，液氯蒸发器，氯气过滤器，真空调节器，加氯机，漏氯报警仪，漏氯吸收装置，配套阀门管道等。",
      },
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "加碱成套装置",
        设备类型: "加碱成套装置",
        规格及型号: this.get_a_2(),
        单位: "台",
        数量: "1",
        备注: "成套装置，含就地控制箱（1个）、安装机架（1个）、碱加药泵（2台）、Y型过滤器（2个）、脉冲缓冲器（1个）、安全阀（2个）、背压阀（1个），磁翻板液位计（1个），配套阀门管道等。",
      },
    ];
    this.data3 = []
    this.data4 = [
      {
        序号: "1",
        仪表位号: "",
        安装位置: "产水外输管道",
        仪表名称: "余氯分析仪",
        规格及型号: "0-5mg/L，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "2",
        仪表位号: "",
        安装位置: "产水外输管道",
        仪表名称: "氨氮分析仪",
        规格及型号: "0-12mg/L，介质：工业废水，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "3",
        仪表位号: "",
        安装位置: "产水外输管道",
        仪表名称: "COD分析仪",
        规格及型号: "0-100mg/L，介质：工业废水，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "4",
        仪表位号: "",
        安装位置: "反应池",
        仪表名称: "PH在线监测仪",
        规格及型号: "pH量程范围：0-14，温度量程范围：0-100℃，4-20mA输出",
        单位: "台",
        数量: "1",
        生产厂家: "",
      },
      {
        序号: "5",
        仪表位号: "",
        安装位置: "反应池",
        仪表名称: "静压式液位计",
        规格及型号: "一体式，0-6m，介质：回用水，4~20mA信号输出，就地显示",
        单位: "台",
        数量: "1",
        生产厂家: "",
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
