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
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b3"
                  :placeholder="$t('b3')"
                  :disabled="false"
                />
              </a-form-item>
              <a-form-item
                :label="$t('b4')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b4"
                  :placeholder="$t('b4')"
                  :disabled="false"
                />
              </a-form-item>
              <a-form-item
                :label="$t('b5')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b5"
                  :placeholder="$t('b5')"
                  :disabled="false"
                />
              </a-form-item>
              <a-form-item
                :label="$t('b6')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input v-model="b6" :disabled="false" />
              </a-form-item>
              <a-form-item
                :label="$t('b7')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input
                  v-model="b7"
                  :placeholder="$t('b7')"
                  :disabled="true"
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
                  :disabled="true"
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
                  :disabled="true"
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
                  :disabled="true"
                />
              </a-form-item>
              <a-form-item
                :label="$t('b12')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b12" style="width: 50%" :disabled="true" />
                  <a-input
                    v-model="b12_1"
                    :prefix="$t('sel')"
                    style="width: 50%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b13')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b13" style="width: 50%" :disabled="true" />
                  <a-input
                    v-model="b13_1"
                    :prefix="$t('sel')"
                    style="width: 50%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b14')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b14" style="width: 100%" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b15')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b15" style="width: 50%" :disabled="true" />
                  <a-input
                    v-model="b15_1"
                    :prefix="$t('sel')"
                    style="width: 50%"
                    :disabled="false"
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
                  <a-input
                    v-model="b16"
                    style="width: 100%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b17')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b17" style="width: 50%" :disabled="true" />
                  <a-input
                    v-model="b17_1"
                    :prefix="$t('sel')"
                    style="width: 50%"
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
                    style="width: 100%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b19')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b19" style="width: 100%" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b20')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b20" style="width: 100%" :disabled="true" />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b21')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input v-model="b21" style="width: 100%" :disabled="true" />
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
                    style="width: 100%"
                    :disabled="false"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
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
            :title="$t('b23_0')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
          >
            <div class="baseQueryParam">
              <a-form>
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
                <a-form-item
                  :label="$t('b33')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b33" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b34')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b34" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b35')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b35" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b36')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b36" :disabled="false" />
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
                  <a-input v-model="b38" :disabled="false" />
                </a-form-item>
                <a-form-item
                  :label="$t('b39')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b39" :disabled="false" />
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
                <a-form-item
                  :label="$t('b42')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b42" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b43')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b43" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b44')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b44" :disabled="true" />
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b45_0')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
          >
            <div class="baseQueryParam">
              <a-form>
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
                  <a-input v-model="b51" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b52')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b52" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b53')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b53" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b54')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b54" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b55')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b55" :disabled="true" />
                </a-form-item>
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
                  <a-input v-model="b60" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b61')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b61" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b62')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b62" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b63')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b63" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b64')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b64" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b65')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b65" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b66')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b66" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b67')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b67" :disabled="true" />
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
                  <a-input v-model="b69" :disabled="true" />
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
                <a-form-item
                  :label="$t('b73')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b73" :disabled="true" />
                </a-form-item>
                <a-form-item
                  :label="$t('b74')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b74" :disabled="true" />
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
                <a-form-item
                  :label="$t('b77')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input v-model="b77" :disabled="true" />
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
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_2002"),
  data() {
    return {
      b3: "40000",
      b4: "2",
      b5: "15",
      b6: "0.05",
      b9: "4",
      b16: "4",
      b18: "0.2",
      b22: "0.5",
      b33: "0.25",
      b34: "0.2",
      b35: "0.16",
      b36: "0.3",
      b37: "0.2",
      b38: "0.15",
      b39: "0.1",
      b45: "3",
      b46: "2",
      b47: "1",
      b48: "0",
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
        // 导出 Excel
        exportExcel2(allData1, allData2, "网格絮凝池工程量", this);
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
        key2: this.b4,
        key3: this.b5,
      };
      exportWord("网格絮凝池计算书", "2002.docx", data, this);
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
    getkey1() {
      return this.b20 + "×"+this.b19+"×"+this.b9+"m"
    },
    getkey2() {
      return this.b4;
    },
    getkey3() {
      return "池L*B="+this.b12_1+"*"+this.b13_1+"m，网格孔尺寸80×80mm，厚度10mm"
    },
    getkey4() {
      return (parseFloat(this.b17_1) * parseFloat(this.b45));
    },
    getkey5() {
      return "池L*B="+this.b12_1+"*"+this.b13_1+"m，网格孔尺寸100×100mm，厚度10mm";
    },
    getkey6() {
      return (parseFloat(this.b17_1) * parseFloat(this.b46) + parseFloat(this.b17_1))
    },
    getkey7() {
      return (parseFloat(this.b15_1)).toFixed(0);
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b7() {
      return (
        (parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
        2 /
        86400
      ).toFixed(2);
    },
    b8() {
      return (
        ((parseFloat(this.b3) * (1 + parseFloat(this.b6))) / 2 / 86400) *
        parseFloat(this.b5) *
        60
      ).toFixed(2);
    },
    b10() {
      return (parseFloat(this.b8) / parseFloat(this.b9)).toFixed(2);
    },
    b11() {
      return (
        (parseFloat(this.b3) * (1 + parseFloat(this.b6))) /
        2 /
        86400 /
        0.12
      ).toFixed(2);
    },
    b12() {
      return Math.pow(parseFloat(this.b11), 0.5).toFixed(2);
    },
    b12_1() {
      return parseFloat(parseFloat(this.b12).toFixed(1)).toFixed(2);
    },
    b13() {
      return (parseFloat(this.b11) / parseFloat(this.b12)).toFixed(2);
    },
    b13_1() {
      return parseFloat(parseFloat(this.b13).toFixed(1)).toFixed(2);
    },
    b14() {
      return (parseFloat(this.b12) * parseFloat(this.b13_1)).toFixed(2);
    },
    b15() {
      return (
        parseFloat(this.b8) /
        parseFloat(this.b9) /
        parseFloat(this.b12_1) /
        parseFloat(this.b13_1)
      ).toFixed(4);
    },
    b15_1() {
      return parseFloat(parseFloat(this.b15).toFixed(0)).toFixed(2);
    },
    b17() {
      return (parseFloat(this.b15) / parseFloat(this.b16)).toFixed(0);
    },
    b17_1() {
      return parseFloat(this.b17).toFixed(2);
    },
    b19() {
      return (
        parseFloat(this.b12_1) * parseFloat(this.b17_1) +
        (parseFloat(this.b17_1) - 1) * parseFloat(this.b18)
      ).toFixed(0);
    },
    b20() {
      return (
        parseFloat(this.b13_1) * parseFloat(this.b16) +
        (parseFloat(this.b16) - 1) * parseFloat(this.b18)
      ).toFixed(1);
    },
    b21() {
      return (
        (parseFloat(this.b15_1) *
          parseFloat(this.b12) *
          parseFloat(this.b13_1) *
          parseFloat(this.b9)) /
        parseFloat(this.b7) /
        60
      ).toFixed(4);
    },
    b20_1() {
      return (parseFloat(this.b12) * parseFloat(this.b13_1)).toFixed(4);
    },
    b21_1() {
      return parseFloat(parseFloat(this.b13).toFixed(1)).toFixed(1);
    },
    b23() {
      return (
        Math.pow(
          parseFloat(
            (parseFloat(this.b3) * (1 + parseFloat(this.b6))) / 2 / 86400 / 0.12
          ),
          0.5
        ) * parseFloat(this.b13_1)
      ).toFixed(4);
    },
    b24() {
      return this.b13_1;
    },
    b25() {
      return Math.pow(parseFloat(this.b26), 2).toFixed(2);
    },
    b26() {
      return 0.5;
    },
    b27() {
      return 60;
    },
    b28() {
      return (
        (parseFloat(this.b24) - parseFloat(this.b26)) *
        Math.tan((parseFloat(this.b27) / 180) * 3.1415) *
        0.5
      ).toFixed(2);
    },
    b29() {
      return 0.8;
    },
    b30() {
      return (
        (parseFloat(this.b23) +
          parseFloat(this.b25) +
          Math.sqrt(parseFloat(this.b23) * parseFloat(this.b25)) *
            parseFloat(this.b29)) /
        3
      ).toFixed(2);
    },
    b31() {
      return (parseFloat(this.b30) * parseFloat(this.b15_1)).toFixed(2);
    },
    b32() {
      return parseFloat(this.b9) + parseFloat(this.b22) + parseFloat(this.b29);
    },
    b40() {
      return this.b13_1;
    },
    b41() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b36) /
        parseFloat(this.b40)
      ).toFixed(4);
    },
    b42() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b37) /
        parseFloat(this.b40)
      ).toFixed(5);
    },
    b43() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b38) /
        parseFloat(this.b40)
      ).toFixed(5);
    },
    b44() {
      return (
        parseFloat(this.b7) /
        parseFloat(this.b39) /
        parseFloat(this.b40)
      ).toFixed(5);
    },
    b49() {
      return ((1 * Math.pow(parseFloat(this.b33), 2)) / (2 * 9.8)).toFixed(5);
    },
    b50() {
      return ((1 * Math.pow(parseFloat(this.b34), 2)) / (2 * 9.8)).toFixed(5);
    },
    b51() {
      return ((1 * Math.pow(parseFloat(this.b35), 2)) / (2 * 9.8)).toFixed(5);
    },
    b52() {
      return ((1 * Math.pow(parseFloat(this.b36), 2)) / (2 * 9.8)).toFixed(5);
    },
    b53() {
      return ((1 * Math.pow(parseFloat(this.b37), 2)) / (2 * 9.8)).toFixed(5);
    },
    b54() {
      return ((3 * Math.pow(parseFloat(this.b38), 2)) / (2 * 9.8)).toFixed(5);
    },
    b55() {
      return ((3 * Math.pow(parseFloat(this.b39), 2)) / (2 * 9.8)).toFixed(5);
    },
    b56() {
      return (
        parseFloat(this.b49) *
        parseFloat(this.b45) *
        parseFloat(this.b17_1)
      ).toFixed(5);
    },
    b57() {
      return (
        parseFloat(this.b50) *
        parseFloat(this.b46) *
        parseFloat(this.b17_1)
      ).toFixed(5);
    },
    b58() {
      return (
        parseFloat(this.b51) *
        parseFloat(this.b47) *
        parseFloat(this.b17_1)
      ).toFixed(5);
    },
    b59() {
      return (parseFloat(this.b52) * parseFloat(this.b17_1)).toFixed(5);
    },
    b60() {
      return (parseFloat(this.b53) * parseFloat(this.b17_1)).toFixed(5);
    },
    b61() {
      return (parseFloat(this.b54) * parseFloat(this.b17_1)).toFixed(5);
    },
    b62() {
      return (parseFloat(this.b55) * parseFloat(this.b17_1)).toFixed(5);
    },
    b63() {
      return (parseFloat(this.b56) + parseFloat(this.b59)).toFixed(5);
    },
    b64() {
      return (parseFloat(this.b57) + parseFloat(this.b60)).toFixed(5);
    },
    b65() {
      return (parseFloat(this.b58) + parseFloat(this.b61)).toFixed(5);
    },
    b66() {
      return this.b62;
    },
    b67() {
      return (
        parseFloat(this.b63) +
        parseFloat(this.b64) +
        parseFloat(this.b65) +
        parseFloat(this.b66)
      ).toFixed(5);
    },
    b68() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b69() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b70() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b71() {
      return (
        (parseFloat(this.b12_1) *
          parseFloat(this.b13_1) *
          parseFloat(this.b32) *
          parseFloat(this.b17_1)) /
        parseFloat(this.b7) /
        60
      ).toFixed(5);
    },
    b72() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b63)) /
          (parseFloat(this.b68) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b73() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b64)) /
          (parseFloat(this.b69) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b74() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b65)) /
          (parseFloat(this.b70) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b75() {
      return Math.pow(
        (1000 * 9.8 * parseFloat(this.b66)) /
          (parseFloat(this.b71) * 60 * (1.029 * Math.pow(10, -3))),
        0.5
      ).toFixed(4);
    },
    b76() {
      return Math.pow(
        ((1000 * 9.8 * parseFloat(this.b67)) /
          (parseFloat(this.b68) +
            parseFloat(this.b69) +
            parseFloat(this.b70) +
            parseFloat(this.b71))) *
          60 *
          (1.029 * Math.pow(10, -3)),
        0.5
      ).toFixed(4);
    },
    b77() {
      return (
        parseFloat(this.b76) *
        (parseFloat(this.b68) +
          parseFloat(this.b69) +
          parseFloat(this.b70) +
          parseFloat(this.b71)) *
        60
      ).toFixed(1);
    },
    data1() {
      return [
      {
        key: "1",
        序号: "1",
        单体位号: "1",
        名称: "网格絮凝池",
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
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "小孔眼网格板",
        设备类型: "网格板",
        规格及型号: this.getkey3(),
        单位: "层",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "SS304边框，PE网格",
        备注: "",
      },
      {
        key: "2",
        序号: "",
        设备位号: "",
        设备工艺名称: "小孔眼网格板",
        设备类型: "网格板",
        规格及型号: this.getkey5(),
        单位: "层",
        数量: this.getkey6(),
        运行时间: "",
        主要材质: "SS304边框，PE网格",
        备注: "",
      },
      {
        key: "3",
        序号: "",
        设备位号: "",
        设备工艺名称: "絮凝池排泥阀",
        设备类型: "电动闸阀",
        规格及型号: "DN150，PN10，开关型",
        单位: "个",
        数量: this.getkey7(),
        运行时间: "",
        主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
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
        key: "1",
        序号: "1",
        单体位号: "1",
        名称: "网格絮凝池",
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
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "小孔眼网格板",
        设备类型: "网格板",
        规格及型号: this.getkey3(),
        单位: "层",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "SS304边框，PE网格",
        备注: "",
      },
      {
        key: "2",
        序号: "",
        设备位号: "",
        设备工艺名称: "小孔眼网格板",
        设备类型: "网格板",
        规格及型号: this.getkey5(),
        单位: "层",
        数量: this.getkey6(),
        运行时间: "",
        主要材质: "SS304边框，PE网格",
        备注: "",
      },
      {
        key: "3",
        序号: "",
        设备位号: "",
        设备工艺名称: "絮凝池排泥阀",
        设备类型: "电动闸阀",
        规格及型号: "DN150，PN10，开关型",
        单位: "个",
        数量: this.getkey7(),
        运行时间: "",
        主要材质: "阀体：球墨铸铁，阀板：球墨铸铁衬尼龙覆层，密封：EPDM",
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
