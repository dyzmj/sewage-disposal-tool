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
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
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
            :title="$t('baseQueryParam1')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b5"
                    :placeholder="$t('b5')"
                    value="40000"
                    :disabled="false"
                    @change="refreshInitData()"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input
                    v-model="b6"
                    :placeholder="$t('b6')"
                    ::disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b7_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b7_1"
                      :placeholder="$t('b7_1')"
                      style="width: 50%"
                      :disabled="true"
                      @change="refreshInitData()"
                    />
                    <a-input
                      v-model="b7_2"
                      :placeholder="$t('b7_2')"
                      style="width: 50%"
                      :disabled="true"
                      @change="refreshInitData()"
                    />
                  </a-input-group>
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
                    :disabled="false"
                    @change="refreshInitData()"
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
                    :disabled="false"
                    @change="refreshInitData()"
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
                    @change="refreshInitData()"
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
                    :disabled="true"
                    @change="refreshInitData()"
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
                    :placeholder="$t('b14')"
                    :disabled="false"
                    @change="refreshInitData()"
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
                    :placeholder="$t('b15')"
                    :disabled="false"
                    @change="refreshInitData()"
                  />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card :title="$t('referenceInformation')">
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img
                    style="max-width: 360px; height: auto;"
                    src="@/assets/img/2000/2003.jpg"
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
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b17')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b17" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b18')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b18" ::disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b19')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b19" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b20')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b20" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b21')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b21" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b22')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b22" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b23')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b23" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b24')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b24" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b25')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b25" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b26')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b26" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b27')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b27" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b28')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b28" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b29')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b29" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b30')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b30" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b31')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b31" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b32')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b32" :disabled="true" />
                </a-form-item>
              </a-form>
            </div>
            <a-card
              :title="$t('b33')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b34')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b34" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b35')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b35" ::disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b36')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b36" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b37')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b37" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b38')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b38" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b39')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b39" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b40')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b40" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b41')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b41" :disabled="true" />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
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
                    :label="$t('b43')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b43" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b44')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b44" ::disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b45')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b45" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b46')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b46" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b47')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b47" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b48')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b48" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b49')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b49" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b50')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b50" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b51')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b51" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b52')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b52" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b53')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b53" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b54')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b54" :disabled="true" />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b55')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b56')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b56" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b57')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b57" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b58')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b58" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b59')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b59" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b60')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b60" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b61')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b61" :disabled="false" />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b62')"
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
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b63" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b64')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b64" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b65')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b65" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b66')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b66" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b67')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b67" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b68')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b68" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b69')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b69" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b70')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b70" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b71')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b71" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b72')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b72" :disabled="true" />
                </a-form-item>
              </a-form>
            </div>
            <a-card
              :title="$t('b73')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b74')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b74" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b75')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b75" :disabled="true" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b76')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b76" :disabled="true" />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b77')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b78')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b78" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b79')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b79" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b80')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b80" :disabled="false" />
                  </a-form-item>
                  <a-form-item
                    :label="$t('b81')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 10 }"
                    :wrapperCol="{ span: 14 }"
                  >
                    <a-input v-model="b81" :disabled="false" />
                  </a-form-item>
                </a-form>
                <a-form-item
                  :label="$t('b82')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b82" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b83')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b83" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b84')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b84" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b85')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b85" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b86')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b86" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b87')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b87" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b88')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b88" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b89')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b89" :disabled="true" />
                </a-form-item>
              </div>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b90')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b91')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b91" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b92')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b92" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b93')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b93" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b94')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b94" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b95')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b95" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b96')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b96" :disabled="false" />
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
                  <a-input v-model="b98" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b99')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b99" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b100')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b100" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b101')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b101" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b102')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b102" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b103')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b103"
                      style="width: 50%"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b103"
                      style="width: 50%"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b104')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b104" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b105')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b105" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b106')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b106" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b107')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b107" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b108')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b108" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b109')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b109" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b110')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b110" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b111')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b111" :disabled="false" />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b112_0')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b112')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b112" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b113')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b113" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b114')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b114" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b115')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b115" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b116')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b116" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b117')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b117" :disabled="false" />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b118')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-table :columns="columns" :data-source="tableData"> </a-table>
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
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_2003"),
  data() {
    return {
      modelVisible: false,
      b5: "40000",
      b6: "1.05",
      b8: "20",
      b9: "10",
      b10: "4.5",
      b11: "2",
      b13: "500",
      b14: "90",
      b15: "3",
      b17: "3",
      b18: "3",
      b19: "1.5",
      b20: "5",
      b21: "0.29",
      b35: "0.5",
      b37: "0.1",
      b43: "1",
      b44: "1",
      b45: "2",
      b46: "0.5",
      b47: "0.44",
      b48: "0.3",
      b51: "1.8",
      b52: "3",
      b53: "3",
      b60: "0.0001029",
      b61: "1000",
      b63: "2",
      b64: "3",
      b65: "500",
      b66: "90",
      b67: "3",
      b69: "0.18",
      b71: "2.4",
      b74: "0.6",
      b78: "1",
      b79: "1",
      b80: "2",
      b81: "0.5",
      b82: "0.44",
      b83: "0.2",
      b86: "1.8",
      b87: "3",
      b88: "3",
      b95: "0.0001029",
      b96: "1000",
      b98: "3",
      b99: "3",
      b100: "3",
      b102: "0.1",
      b106: "1",
      b107: "1",
      b108: "2",
      b109: "0.5",
      b110: "0.44",
      b111: "3",
      b116: "0.0001029",
      b117: "1000",
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
      columns: [
        {
          title: "絮凝段",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "絮凝时间min",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "水头损失",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "G（S^-1）",
          dataIndex: "tags",
          key: "tags",
        },
        {
          title: "GT值10^4",
          dataIndex: "action",
          key: "action",
        },
      ],
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
        this.b5 = 40000;
      } else {
        this.b5 = waterData;
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
        exportExcel2(allData1, allData2, "折板絮凝池工程量", this);
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
        key1: this.b5,
        key2: this.b7_1,
        key3: this.b7_2,
        key4: this.b8,
        key5: this.b9,
        key6: this.b10,
        key7: this.b11,
        key8: this.b12,
        key9: this.b13,
        key10: this.b14,
        key11: this.b15,
      };
      exportWord("折板絮凝池计算书", "2003.docx", data, this);
    },
    refreshInitData() {
      const data = {
        key1: this.b5,
        key2: this.b7_1,
        key3: this.b7_2,
        key4: this.b8,
        key5: this.b9,
        key6: this.b10,
        key7: this.b11,
        key8: this.b12,
        key9: this.b13,
        key10: this.b14,
        key11: this.b15,
      };
      initWordStorage("2003.docx", data);
      this.handleExcelCache("2003.xlsx", "折板絮凝池工程量");
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

        const data = [...allData1, null, null, ...allData2];
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
    getKey120_1() {
      return this.b120_1;
    },
    getKey120_2() {
      return this.b120_2;
    },
    getKey120_3() {
      return this.b120_3;
    },
    getKey120_4() {
      return this.b120_4;
    },
    getKey121_1() {
      return this.b121_1;
    },
    getKey121_2() {
      return this.b121_2;
    },
    getKey121_3() {
      return this.b121_3;
    },
    getKey121_4() {
      return this.b121_4;
    },
    getKey122_1() {
      return this.b122_1;
    },
    getKey122_2() {
      return this.b122_2;
    },
    getKey122_3() {
      return this.b122_3;
    },
    getKey122_4() {
      return this.b122_4;
    },
    getKey123_1() {
      return this.b123_1;
    },
    getKey123_2() {
      return this.b123_2;
    },
    getKey123_3() {
      return this.b123_3;
    },
    getKey123_4() {
      return this.b123_4;
    },
    getkey1() {
      return (
        parseFloat(this.b22) +
        parseFloat(this.b72) +
        parseFloat(this.b105) +
        "×" +
        parseFloat(this.b9) +
        "×5m"
      );
    },
    getkey2() {
      return (
        "折板长度=" +
        this.b19 +
        "m，折板宽度=" +
        this.b13 +
        "mm，折板夹角=" +
        this.b14 +
        "°，折板厚度=" +
        this.b15 +
        "mm，缩放数=" +
        this.b20
      );
    },
    getkey3() {
      return parseFloat(this.b17) * parseFloat(this.b18);
    },
    getkey4() {
      return (
        "折板长度=" +
        this.b71 +
        "m，折板宽度=" +
        this.b65 +
        "mm，折板夹角=" +
        this.b66 +
        "°，折板厚度=" +
        this.b67 +
        "mm，转弯数=" +
        this.b68
      );
    },
    getkey5() {
      return parseFloat(this.b63) * parseFloat(this.b64);
    },
    getkey6() {
      return (
        "折板长度=m，折板宽度=" + this.b15 + "m，直板厚度=" + this.b100 + "mm"
      );
    },
    getkey7() {
      return parseFloat(this.b98) * parseFloat(this.b99);
    },
    getkey8() {
      return (
        parseFloat(this.b17) * parseFloat(this.b18) +
        parseFloat(this.b63) * parseFloat(this.b64) +
        parseFloat(this.b98) * parseFloat(this.b99)
      );
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b7_1() {
      return (parseFloat(this.b5) * parseFloat(this.b6)).toFixed(0);
    },
    b7_2() {
      return (parseFloat(this.b7_1) / (24 * 60 * 60)).toFixed(4);
    },
    b12() {
      return (parseFloat(this.b7_2) / parseFloat(this.b11)).toFixed(4);
    },
    b22() {
      return (parseFloat(this.b17) * parseFloat(this.b19)).toFixed(2);
    },
    b23() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b21) /
        parseFloat(this.b19)
      ).toFixed(4);
    },
    b24() {
      return ((parseFloat(this.b13) * 0.707) / 1000).toFixed(4);
    },
    b25() {
      return (parseFloat(this.b23) + 2 * parseFloat(this.b24)).toFixed(4);
    },
    b26() {
      return (parseFloat(this.b9) / parseFloat(this.b11)).toFixed(2);
    },
    b27() {
      return ((parseFloat(this.b15) * 0.707) / 1000).toFixed(4);
    },
    b28() {
      return (
        (parseFloat(this.b26) -
          (parseFloat(this.b18) - 1) * parseFloat(this.b23) -
          parseFloat(this.b18) *
            (parseFloat(this.b27) + parseFloat(this.b24))) /
        2
      ).toFixed(4);
    },
    b29() {
      return (parseFloat(this.b28) + parseFloat(this.b24)).toFixed(4);
    },
    b30() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b25) /
        parseFloat(this.b19)
      ).toFixed(2);
    },
    b31() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b28) /
        parseFloat(this.b19)
      ).toFixed(4);
    },
    b32() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b29) /
        parseFloat(this.b19)
      ).toFixed(4);
    },
    b34() {
      return (
        (parseFloat(this.b35) *
          (parseFloat(this.b21) * parseFloat(this.b21) -
            parseFloat(this.b30) * parseFloat(this.b30))) /
        2 /
        9.8
      ).toFixed(4);
    },
    b36() {
      return (
        ((1 +
          parseFloat(this.b37) -
          ((parseFloat(this.b23) * parseFloat(this.b23)) /
            parseFloat(this.b25)) *
            parseFloat(this.b25)) *
          parseFloat(this.b21) *
          parseFloat(this.b21)) /
        2 /
        9.8
      ).toFixed(4);
    },
    b38() {
      return (
        parseFloat(this.b20) *
        (parseFloat(this.b18) - 1) *
        (parseFloat(this.b34) + parseFloat(this.b36))
      ).toFixed(4);
    },
    b39() {
      return (
        (parseFloat(this.b35) *
          (parseFloat(this.b31) * parseFloat(this.b31) -
            parseFloat(this.b32) * parseFloat(this.b32))) /
        2 /
        9.8
      ).toFixed(4);
    },
    b40() {
      return (
        ((1 +
          parseFloat(this.b37) -
          (parseFloat(this.b28) * parseFloat(this.b28)) /
            (parseFloat(this.b29) * parseFloat(this.b29))) *
          parseFloat(this.b31) *
          parseFloat(this.b31)) /
        2 /
        9.8
      ).toFixed(4);
    },
    b41() {
      return (
        2 *
        parseFloat(this.b20) *
        (parseFloat(this.b39) + parseFloat(this.b40))
      ).toFixed(4);
    },
    b49() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b19) /
        parseFloat(this.b46)
      ).toFixed(4);
    },
    b50() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b19) /
        parseFloat(this.b47)
      ).toFixed(4);
    },
    b54() {
      return (
        (parseFloat(this.b44) *
          parseFloat(this.b51) *
          parseFloat(this.b49) *
          parseFloat(this.b49)) /
          2 /
          9.8 +
        (parseFloat(this.b45) *
          parseFloat(this.b52) *
          parseFloat(this.b50) *
          parseFloat(this.b50)) /
          2 /
          9.8 +
        (parseFloat(this.b43) *
          parseFloat(this.b53) *
          parseFloat(this.b48) *
          parseFloat(this.b48)) /
          2 /
          9.8
      ).toFixed(4);
    },
    b56() {
      return (
        parseFloat(this.b54) +
        parseFloat(this.b41) +
        parseFloat(this.b38)
      ).toFixed(4);
    },
    b57() {
      return (parseFloat(this.b56) * parseFloat(this.b17)).toFixed(4);
    },
    b58() {
      return (
        (parseFloat(this.b22) * parseFloat(this.b26) * parseFloat(this.b10)) /
        parseFloat(this.b12) /
        60
      ).toFixed(4);
    },
    b59() {
      return Math.sqrt(
        (parseFloat(this.b61) * parseFloat(this.b57)) /
          60 /
          parseFloat(this.b60) /
          parseFloat(this.b58)
      ).toFixed(4);
    },
    b68() {
      return (parseFloat(this.b20) * 2 - 1).toFixed(0);
    },
    b70() {
      return this.b23;
    },
    b72() {
      return (parseFloat(this.b63) * parseFloat(this.b71)).toFixed(4);
    },
    b75() {
      return (
        (parseFloat(this.b74) * (parseFloat(this.b69) * parseFloat(this.b69))) /
        2 /
        9.8
      ).toFixed(4);
    },
    b76() {
      return (
        parseFloat(this.b68) *
        parseFloat(this.b64) *
        parseFloat(this.b63) *
        parseFloat(this.b75)
      ).toFixed(4);
    },
    b84() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b71) /
        parseFloat(this.b81)
      ).toFixed(4);
    },
    b85() {
      return (
        parseFloat(this.b12) /
        parseFloat(this.b71) /
        parseFloat(this.b82)
      ).toFixed(4);
    },
    b89() {
      return (
        (parseFloat(this.b79) *
          parseFloat(this.b86) *
          parseFloat(this.b84) *
          parseFloat(this.b84)) /
          2 /
          9.8 +
        (parseFloat(this.b80) *
          parseFloat(this.b87) *
          parseFloat(this.b85) *
          parseFloat(this.b85)) /
          2 /
          9.8 +
        (parseFloat(this.b78) *
          parseFloat(this.b88) *
          parseFloat(this.b83) *
          parseFloat(this.b83)) /
          2 /
          9.8
      ).toFixed(4);
    },
    b91() {
      return (parseFloat(this.b89) + parseFloat(this.b76)).toFixed(4);
    },
    b92() {
      return (parseFloat(this.b91) * parseFloat(this.b63)).toFixed(4);
    },
    b93() {
      return (
        (parseFloat(this.b72) * parseFloat(this.b26) * parseFloat(this.b10)) /
        parseFloat(this.b12) /
        60
      ).toFixed(4);
    },
    b94() {
      return Math.sqrt(
        (parseFloat(this.b96) * parseFloat(this.b92)) /
          60 /
          parseFloat(this.b95) /
          parseFloat(this.b93)
      ).toFixed(4);
    },
    b101() {
      return (parseFloat(this.b9) / parseFloat(this.b11)).toFixed(4);
    },
    b103() {
      return (parseFloat(this.b101) / (parseFloat(this.b99) + 1)).toFixed(4);
    },
    b104() {
      return this.ROUNDUP(
        parseFloat(this.b12) / parseFloat(this.b102) / parseFloat(this.b103),
        1
      ).toFixed(4);
    },
    b105() {
      return (parseFloat(this.b98) * parseFloat(this.b104)).toFixed(4);
    },
    b112() {
      return (
        ((parseFloat(this.b106) +
          parseFloat(this.b107) +
          parseFloat(this.b108)) *
          parseFloat(this.b111) *
          parseFloat(this.b102) *
          parseFloat(this.b102)) /
        2 /
        9.8
      ).toFixed(4);
    },
    b113() {
      return (parseFloat(this.b112) * parseFloat(this.b98)).toFixed(4);
    },
    b114() {
      return (
        (parseFloat(this.b105) * parseFloat(this.b10) * parseFloat(this.b101)) /
        parseFloat(this.b12) /
        60
      ).toFixed(4);
    },
    b115() {
      return Math.sqrt(
        (parseFloat(this.b117) * parseFloat(this.b113)) /
          60 /
          parseFloat(this.b116) /
          parseFloat(this.b114)
      ).toFixed(4);
    },
    b120_1() {
      return this.b58;
    },
    b120_2() {
      return this.b57;
    },
    b120_3() {
      return this.b59;
    },
    b120_4() {
      return (
        (parseFloat(this.b120_3) * parseFloat(this.b120_1) * 60) /
        10000
      ).toFixed(4);
    },
    b121_1() {
      return this.b93;
    },
    b121_2() {
      return this.b92;
    },
    b121_3() {
      return this.b94;
    },
    b121_4() {
      return (
        (parseFloat(this.b121_3) * parseFloat(this.b121_1) * 60) /
        10000
      ).toFixed(4);
    },
    b122_1() {
      return this.b114;
    },
    b122_2() {
      return this.b113;
    },
    b122_3() {
      return this.b115;
    },
    b122_4() {
      return (
        (parseFloat(this.b122_3) * parseFloat(this.b122_1) * 60) /
        10000
      ).toFixed(4);
    },
    b123_1() {
      return (
        parseFloat(this.b120_1) +
        parseFloat(this.b121_1) +
        parseFloat(this.b122_1)
      ).toFixed(4);
    },
    b123_2() {
      return (
        parseFloat(this.b120_2) +
        parseFloat(this.b121_2) +
        parseFloat(this.b122_2)
      ).toFixed(4);
    },
    b123_3() {
      return Math.sqrt(
        (parseFloat(this.b117) * parseFloat(this.b123_2)) /
          60 /
          parseFloat(this.b116) /
          parseFloat(this.b123_1)
      ).toFixed(4);
    },
    b123_4() {
      return (
        (parseFloat(this.b123_3) * parseFloat(this.b123_1) * 60) /
        10000
      ).toFixed(4);
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "折板絮凝池",
          Dimensions: this.getkey1(),
          标高: "",
          单位: "座",
          disinfectiontank: "1",
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
          设备工艺名称: "异波折板",
          设备类型: "单通道折板",
          规格及型号: this.getkey2(),
          单位: "组",
          数量: this.getkey3(),
          运行时间: "",
          主要材质: "SS304",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "同波折板",
          设备类型: "单通道折板",
          规格及型号: this.getkey4(),
          单位: "组",
          数量: this.getkey5(),
          运行时间: "",
          主要材质: "SS304",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "直板",
          设备类型: "单通道折板",
          规格及型号: this.getkey6(),
          单位: "组",
          数量: this.getkey7(),
          运行时间: "",
          主要材质: "SS304",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "絮凝池排泥阀",
          设备类型: "单通道折板",
          规格及型号: "DN150，PN10，开关型",
          单位: "个",
          数量: this.getkey8(),
          运行时间: "",
          主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
          备注: "带配套电动执行机构",
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
        key: "1",
        序号: "",
        单体位号: "",
        名称: "折板絮凝池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: "1",
        结构形式: "钢砼",
        备注: "半地下式",
        暖通要求: "无",
      },
    ];
    this.data2 = [
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "异波折板",
        设备类型: "单通道折板",
        规格及型号: this.getkey2(),
        单位: "组",
        数量: this.getkey3(),
        运行时间: "",
        主要材质: "SS304",
        备注: "",
      },
      {
        key: "2",
        序号: "",
        设备位号: "",
        设备工艺名称: "同波折板",
        设备类型: "单通道折板",
        规格及型号: this.getkey4(),
        单位: "组",
        数量: this.getkey5(),
        运行时间: "",
        主要材质: "SS304",
        备注: "",
      },
      {
        key: "3",
        序号: "",
        设备位号: "",
        设备工艺名称: "直板",
        设备类型: "单通道折板",
        规格及型号: this.getkey6(),
        单位: "组",
        数量: this.getkey7(),
        运行时间: "",
        主要材质: "SS304",
        备注: "",
      },
      {
        key: "4",
        序号: "",
        设备位号: "",
        设备工艺名称: "絮凝池排泥阀",
        设备类型: "单通道折板",
        规格及型号: "DN150，PN10，开关型",
        单位: "个",
        数量: this.getkey8(),
        运行时间: "",
        主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
        备注: "带配套电动执行机构",
      },
    ];
    (this.data3 = []),
      (this.tableData = [
        {
          key: "1",
          name: "第一絮凝段",
          age: this.getKey120_1(),
          address: this.getKey120_2(),
          tags: this.getKey120_3(),
          action: this.getKey120_4(),
        },
        {
          key: "2",
          name: "第二絮凝段",
          age: this.getKey121_1(),
          address: this.getKey121_2(),
          tags: this.getKey121_3(),
          action: this.getKey121_4(),
        },
        {
          key: "3",
          name: "第三絮凝段",
          age: this.getKey122_1(),
          address: this.getKey122_2(),
          tags: this.getKey122_3(),
          action: this.getKey122_4(),
        },
        {
          key: "4",
          name: "合计",
          age: this.getKey123_1(),
          address: this.getKey123_2(),
          tags: this.getKey123_3(),
          action: this.getKey123_4(),
        },
      ]);
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
