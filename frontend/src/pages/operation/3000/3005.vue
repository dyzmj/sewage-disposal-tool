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
          :title="$t('b2')"
          style="margin-bottom: 24px"
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
                    style="width: 50%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                  <a-input
                    v-model="b3_1"
                    style="width: 50%;"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3_1')"
                    :suffix="$t('b3_1_u')"
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
                  <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b5')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b5"
                    rows="12"
                    :placeholder="$t('b5')"
                    :suffix="$t('b5_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b6')"
                style="margin-top: 10px"
                :labelCol="{ span: 10 }"
                :wrapperCol="{ span: 14 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b6"
                    rows="12"
                    :placeholder="$t('b6')"
                    :suffix="$t('b6_u')"
                  />
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
                    style="width: 50%;"
                    :disabled="true"
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
                    rows="12"
                    :placeholder="$t('b9')"
                    :suffix="$t('b9_u')"
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
                  <a-input
                    v-model="b10"
                    rows="12"
                    :placeholder="$t('b10')"
                    :suffix="$t('b10_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card :title="$t('referenceImage')" 
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
          :title="$t('b11')"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b12')"
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
                      style="width: 50%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
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
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
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
                      style="width: 50%;"
                      :disabled="true"
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
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
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
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
                    />
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
                  :label="$t('b3')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 50%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
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
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
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
                      style="width: 50%;"
                      :disabled="true"
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
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
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
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b24')"
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
                      style="width: 50%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
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
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
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
                      style="width: 50%;"
                      :disabled="true"
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
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
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
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b29')"
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
                      style="width: 50%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
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
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
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
                      style="width: 50%;"
                      :disabled="true"
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
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
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
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
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
                  :label="$t('b3')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 50%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
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
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
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
                      style="width: 50%;"
                      :disabled="true"
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
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
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
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b50')"
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
                      style="width: 50%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
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
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
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
                      style="width: 50%;"
                      :disabled="true"
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
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
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
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
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
                  :label="$t('b3')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 50%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
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
                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 10 }"
                  :wrapperCol="{ span: 14 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b6"
                      rows="12"
                      :placeholder="$t('b6')"
                      :suffix="$t('b6_u')"
                    />
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
                      style="width: 50%;"
                      :disabled="true"
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
                      rows="12"
                      :placeholder="$t('b9')"
                      :suffix="$t('b9_u')"
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
                    <a-input
                      v-model="b10"
                      rows="12"
                      :placeholder="$t('b10')"
                      :suffix="$t('b10_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
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
import { exportExcel3, exportWord, getValueFromLocalStorage } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3005"),
  data() {
    return {
      b3: "50",
      b4: "4",
      b5: "7.5",
      b6: "0.08",
      b7: "0.04",
      b8: "1.2",
      b9: "15",
      b10: "1.5",
      b11: "",
      b12: "",
      b13: "0.108578336",
      b14: "0.048557708",
      b15: "460",
      b16: "0.1",
      b17: "",
      b18: "3",
      b19: "0.055555556",
      b20: "3.143801345",
      b21: "0.9",
      b22: "0.15",
      b23: "0.45",
      b24: "",
      b25: "0.694444444",
      b26: "0.940315973",
      b27: "3.038057372",
      b28: "3.1",
      b29: "",
      b30: "1.388888889",
      b31: "1.62867504",
      b32: "3",
      b33: "5.729166667",
      b34: "103.125",
      b35: "88.34122166",
      b36: "90",
      b37: "",
      b38: "11.57407407",
      b39: "4.170030119",
      b40: "0.51",
      b41: "5.21",
      b42: "0.8",
      b43: "1.685015059",
      b44: "3.524984941",
      b45: "48.83663456",
      b46: "9.424946062",
      b47: "58.26158062",
      b48: "2375",
      b49: "41.33333333",
      b50: "",
      b51: "0.582615806",
      b52: "1.204574589",
      b53: "30",
      b54: "0.019420527",
      b55: "3",
      b56: "0.090787266",
      b57: "0.1",
      b58: "",
      b59: "1.5",
      b60: "0.108578336",
      b61: "",
      b62: "1.5",
      b63: "0.010416667",
      b64: "0.144988653",
      b65: "",
      b66: "0.22874149",
      b67: "0.301235817",
      b68: "0.3",
      b69: "0.62",
      b70: "0.05",
      b71: "0.016962997",
      b72: "20",
      b73: "54",
      b74: "0.614081754",
      b75: "0.122173048",
      b76: "",
      b77: "150",
      b78: "100",
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
      const waterData = getValueFromLocalStorage("waterData")
      if (waterData == null || waterData == ''){
        this.b3 = 40000
      }else{
        this.b3 = waterData
      }
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
        exportExcel3(allData1, allData2, allData3, "水力循环澄清池工程量", this);
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
        key3: '1',
        key4: this.b4,
        key5: this.b8,
        key6: this.b9,
      };
      exportWord("水力循环澄清池计算书", "3005.docx", data, this);
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
    b3_1() {
      return (parseFloat(this.b3) / 3600).toFixed(4);
    },
    b8_1() {
      return (parseFloat(this.b8) / 1000).toFixed(4);
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
