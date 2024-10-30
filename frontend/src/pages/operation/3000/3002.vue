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
          :title="$t('b2')"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
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
            :title="$t('b3')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b4"
                    :suffix="$t('b4_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b5"
                    :suffix="$t('b5_u')"
                    :disabled="false"
                  />
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
                      style="width: 33%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b6_u')"
                      @change="refreshInitData()"
                    />
                    <a-input
                      v-model="b6_1"
                      style="width: 33%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b6_1_u')"
                    />
                    <a-input
                      v-model="b6_2"
                      style="width: 34%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b6_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b7')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b8')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b8"
                    :suffix="$t('b8_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <br />
                <p style="font-weight: bolder; color: red">
                  {{ $t("b9") }}
                </p>
                <br />
                <a-form-item
                  :label="$t('b10')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b10"
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
                    :suffix="$t('b11_u')"
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
                    :suffix="$t('b12_u')"
                    :disabled="true"
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
                    :suffix="$t('b13_u')"
                    :disabled="false"
                    @change="refreshInitData()"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b14')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b14"
                    :suffix="$t('b14_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b15')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b15"
                    :suffix="$t('b15_u')"
                    :disabled="false"
                    @change="refreshInitData()"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card :title="$t('referenceImage')">
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img width="400px" src="@/assets/img/5000/5001.png" />
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
          :title="$t('b16')"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b17')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b18')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b18"
                    :suffix="$t('b18_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b19')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input v-model="b19" :disabled="false" />
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
                      style="width: 100%"
                      :disabled="true"
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
                      style="width: 50%"
                      :disabled="false"
                      rows="12"
                      :addonAfter="$t('b21_u')"
                    />
                    <a-input
                      v-model="b21_1"
                      style="width: 50%"
                      :disabled="true"
                      rows="12"
                      :addonAfter="$t('b21_1_u')"
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
                      style="width: 100%"
                      :disabled="true"
                      rows="12"
                      :suffix="$t('b22_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b23')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b24')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b24"
                    :suffix="$t('b24_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b25')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b25"
                    :suffix="$t('b25_u')"
                    :disabled="true"
                  />
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
                      style="width: 100%"
                      :disabled="false"
                      rows="12"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b28"
                      style="width: 100%"
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
            :title="$t('b29')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b30')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b30"
                    :suffix="$t('b30_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b31')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b31"
                    :suffix="$t('b31_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b32')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b32"
                    :suffix="$t('b32_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b33')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b33"
                    :suffix="$t('b33_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b34')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b34"
                    :suffix="$t('b34_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b35')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b35"
                    :suffix="$t('b35_u')"
                    :disabled="true"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b36')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-card
                :title="$t('b37')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
                ><a-form>
                  <a-form-item
                    :label="$t('b38')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b38"
                      :suffix="$t('b38_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b39')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b39"
                      :suffix="$t('b39_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b40')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b40"
                      :suffix="$t('b40_u')"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b41')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b41"
                      :disabled="true"
                    />
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b42')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b43')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b43"
                      :suffix="$t('b43_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                </a-form>
              </a-card>
            </div>
          </a-card>
          <a-card
            :title="$t('b44')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b45')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b45"
                    :suffix="$t('b45_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b46')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b46"
                    :suffix="$t('b46_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b47')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b47"
                    :suffix="$t('b47_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b48')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b48"
                    :suffix="$t('b48_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b49')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b49"
                    :suffix="$t('b49_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b50')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b50"
                    :suffix="$t('b50_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b51')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b51"
                    :suffix="$t('b51_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b52')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b52"
                    :suffix="$t('b52_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b53')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b53"
                    :suffix="$t('b53_u')"
                    :disabled="true"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b54')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <a-card
              :title="$t('b55')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b56')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b56"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b57')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b57"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b58')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b58"
                      :suffix="$t('b58_u')"
                      :disabled="true"
                    />
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
                        style="width: 50%"
                        :suffix="$t('b59_u')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="b59_1"
                        style="width: 50%"
                        :suffix="$t('b59_1_u')"
                        :disabled="false"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b60')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b60"
                      :suffix="$t('b60_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b61')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b61"
                      :suffix="$t('b61_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b62')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b62"
                      :suffix="$t('b62_u')"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b63')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b63"
                      :suffix="$t('b63_u')"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b64')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b64"
                      :suffix="$t('b64_u')"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b65')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b65"
                      :suffix="$t('b65_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b66')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b66"
                      :suffix="$t('b66_u')"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b67')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b67"
                      :suffix="$t('b67_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b68')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b68"
                      :suffix="$t('b68_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b69')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b69"
                      :disabled="false"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b70')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b70"
                      :suffix="$t('b70_u')"
                      :disabled="false"
                    />
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
                        style="width: 50%"
                        :suffix="$t('b71_u')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="b71_1"
                        style="width: 50%"
                        :suffix="$t('b71_1_u')"
                        :disabled="false"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b72')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b72"
                      :suffix="$t('b72_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b73')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b73"
                      :suffix="$t('b73_u')"
                      :disabled="true"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b74')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b75')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b75"
                    :suffix="$t('b75_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b76')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b76"
                    :suffix="$t('b76_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b77')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b77"
                    :suffix="$t('b77_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b78')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b78"
                    :suffix="$t('b78_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b79')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b79"
                    :suffix="$t('b79_u')"
                    :disabled="true"
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
  exportExcel2,
  exportWord,
  getValueFromLocalStorage,
    initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3002"),
  data() {
    return {
      b4: "20000",
      b5: "5",
      b8: "0.35",
      b10: "30",
      b11: "60",
      b13: "7",
      b15: "2",
      b19: "0.95",
      b21: "12",
      b26: "250",
      b28: "1000",
      b30: "0.5",
      b31: "1.2",
      b33: "2",
      b34: "0.8",
      b38: "0.75",
      b40: "0.01",
      b45: "0.1",
      b47: "0.15",
      b50: "3",
      b56: "8",
      b57: "1.2",
      b59_1: "0.20",
      b62: "0.12",
      b63: "0.05",
      b64: "0.15",
      b66: "0.025",
      b69: "0.62",
      b70: "9.81",
      b71_1: "40",
      b76: "1",
      b78: "0.08",
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
        // 导出 Excel
        exportExcel2(allData1, allData2, "斜管沉淀池工程量", this);
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
        key2: this.b13,
        key3: this.b15,
      };
      exportWord("斜管沉淀池计算书", "3002.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b6,
        key2: this.b13,
        key3: this.b15,
      };
      initWordStorage("3002.docx", data);
      this.handleExcelCache("3002.xlsx", "斜管沉淀池工程量");
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
        const data = [
          ...allData1,
          null,
          null,
          ...allData2,
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
    getkey1() {
      return this.b21 + "×"+this.b21_1+"×"+this.b35+"m";
    },
    getkey2() {
      return this.b15;
    },
    getkey3() {
      return "池深m，N=2*0.55kW，池宽2*"+this.b21_1+"m，轨距"+(2*parseFloat(this.b21_1)+0.3)+"m";
    },
    getkey4() {
      return "L×B×H="+this.b21+"×"+this.b59_1+"×"+this.b65+"m，δ=3mm";
    },
    getkey5() {
      return (parseFloat(this.b56) * parseFloat(this.b15));
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b6() {
      return parseFloat(this.b4) * (1 + parseFloat(this.b5) / 100);
    },
    b6_1() {
      return (parseFloat(this.b6) / 24).toFixed(1);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 3600).toFixed(2);
    },
    b12() {
      return (parseFloat(this.b11) * 3.14159265354 / 180).toFixed(9);
    },
    b14() {
      return (parseFloat(this.b13) / 3.6).toFixed(1);
    },
    b18() {
      return (parseFloat(this.b6) / 24 / 3600 * 1000 / (parseFloat(this.b13) / 3.6)).toFixed(2);
    },
    b20() {
      return (parseFloat(this.b18) / parseFloat(this.b19)).toFixed(2);
    },
    b21_1() {
      return this.ROUND(parseFloat(this.b20)/2/parseFloat(this.b21), 1);
    },
    b22() {
      return (parseFloat(this.b6_1) / parseFloat(this.b21) / parseFloat(this.b21_1) / parseFloat(this.b15)).toFixed(2);
    },
    b24() {
      return ((parseFloat(this.b13) / 3.6) / Math.sin(parseFloat(this.b12))).toFixed(2);
    },
    b25() {
      return ((
        1.33 * parseFloat(this.b24) - parseFloat(this.b8)* Math.sin(parseFloat(this.b12))
      ) * parseFloat(this.b10) / (
        parseFloat(this.b8) * Math.cos(parseFloat(this.b12))
      )).toFixed(2);
    },
    b27() {
      return (parseFloat(this.b25) + parseFloat(this.b26)).toFixed(2);
    },
    b32() {
      return (parseFloat(this.b28) * Math.sin(parseFloat(this.b12)) / 1000).toFixed(2);
    },
    b35() {
      return this.ROUND((parseFloat(this.b30)+parseFloat(this.b31)+parseFloat(this.b32)+parseFloat(this.b33)+parseFloat(this.b34)), 2)
    },
    b36() {
      return (parseFloat(this.b10) / 4 / 10).toFixed(2);
    },
    b39() {
      return (parseFloat(this.b24) / 10).toFixed(2);
    },
    b41() {
      return (parseFloat(this.b38) * parseFloat(this.b39) / parseFloat(this.b40)).toFixed(2);
    },
    b43() {
      return (parseFloat(this.b28) / parseFloat(this.b24) / 60).toFixed(2);
    },
    b46() {
      return (parseFloat(this.b6_2) / parseFloat(this.b45)).toFixed(2);
    },
    b48() {
      return (3.1415926 * (Math.pow(parseFloat(this.b47), 2)) / 4).toFixed(3);
    },
    b49() {
      return this.ROUND((parseFloat(this.b46) / parseFloat(this.b48) / parseFloat(this.b15)), 0);
    },
    b51() {
      return (parseFloat(this.b49) / parseFloat(this.b50)).toFixed(1);
    },
    b52() {
      return this.ROUND((parseFloat(this.b21)/(parseFloat(this.b51)+1)), 2);
    },
    b53() {
      return ((parseFloat(this.b21)-(parseFloat(this.b51)-1)*parseFloat(this.b52))/2).toFixed(3);
    },
    b58() {
      return ((parseFloat(this.b6_2) / parseFloat(this.b15) / parseFloat(this.b56)) * parseFloat(this.b57)).toFixed(3);
    },
    b59() {
      return 0.181;
    },
    b60() {
      return (0.75 * parseFloat(this.b59_1)).toFixed(2);
    },
    b61() {
      return (1.25 * parseFloat(this.b59)).toFixed(2);
    },
    b65() {
      return this.ROUND((parseFloat(this.b61) + parseFloat(this.b62) + parseFloat(this.b63) + parseFloat(this.b64)),2)
    },
    b67() {
      return (3.1415926 * Math.pow(parseFloat(this.b66),2) / 4).toFixed(9);
    },
    b68() {
      return (parseFloat(this.b69) * parseFloat(this.b67) * Math.sqrt(2*parseFloat(this.b70)*parseFloat(this.b62))).toFixed(9);
    },
    b71() {
      return (parseFloat(this.b58) / parseFloat(this.b68)).toFixed(2);
    },
    b72() {
      return (parseFloat(this.b71_1) / 2).toFixed(0);
    },
    b73() {
      return this.ROUND((parseFloat(this.b21)-0.6)/(parseFloat(this.b72)+1), 2);
    },
    b75() {
      return (parseFloat(this.b6_2) * parseFloat(this.b57)).toFixed(2);
    },
    b77() {
      return (1.73 * Math.pow((
        parseFloat(this.b75) / parseFloat(this.b70) / (Math.pow(parseFloat(this.b76),2))
      ),(1/3))).toFixed(2);
    },
    b79() {
      return (parseFloat(this.b65) + parseFloat(this.b77) + parseFloat(this.b78)).toFixed(2);
    },
    data1() {
      return [
      {
        序号: "",
        单体位号: "",
        名称: "斜管沉淀池",
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
        设备工艺名称: "桁车式吸泥机",
        设备类型: "吸泥机",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: "1",
        运行时间: "4h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "集水槽",
        设备类型: "集水槽",
        规格及型号: this.getkey4(),
        单位: "套",
        数量: this.getkey5(),
        运行时间: "",
        主要材质: "SS304",
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
        序号: "",
        单体位号: "",
        名称: "斜管沉淀池",
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
        设备工艺名称: "桁车式吸泥机",
        设备类型: "吸泥机",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: "1",
        运行时间: "4h",
        主要材质: "水上部分碳钢防腐，水下部分SS304",
        备注: "本机含主梁、轨道、驱动装置、机架、吸砂系统、吸砂泵/虹吸管、撇渣装置，配套控制箱（池体有斜板）",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "集水槽",
        设备类型: "集水槽",
        规格及型号: this.getkey4(),
        单位: "套",
        数量: this.getkey5(),
        运行时间: "",
        主要材质: "SS304",
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
