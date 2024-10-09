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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 33%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 33%;"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b3_1')"
                      :suffix="$t('b3_1_u')"
                    />
                    <a-input
                      v-model="b3_2"
                      style="width: 34%;"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                <a-form-item
                  :label="$t('b11')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                    :label="$t('b3')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :label="$t('b3')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :label="$t('b3')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :label="$t('b3')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :label="$t('b3')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b3"
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
              :title="$t('b81')"
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
                        style="width: 33%;"
                        :disabled="false"
                        rows="12"
                        :placeholder="$t('b3')"
                        :suffix="$t('b3_u')"
                      />
                      <a-input
                        v-model="b3_1"
                        style="width: 33%;"
                        :disabled="true"
                        rows="12"
                        :placeholder="$t('b3_1')"
                        :suffix="$t('b3_1_u')"
                      />
                      <a-input
                        v-model="b3_2"
                        style="width: 34%;"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b6')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                  <a-form-item
                    :label="$t('b11')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
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
      b15: "11.50087224",
      b16: "1.052172515",
      b17: "",
      b18: "5480.065182",
      b19: "",
      b20: "913.344197",
      b21: "16",
      b22: "57.08401231",
      b23: "9.5",
      b24: "6.315789474",
      b25: "1.507936508",
      b26: "",
      b27: "720",
      b28: "2",
      b29: "5",
      b30: "6.3",
      b31: "0.6",
      b32: "0.234823832",
      b33: "1",
      b34: "0.05",
      b35: "1.212059579",
      b36: "0.246565023",
      b37: "",
      b38: "0.75",
      b39: "0.788253379",
      b40: "0.988253379",
      b41: "",
      b42: "1.5",
      b43: "0.72",
      b44: "0.48",
      b45: "0.1",
      b46: "0.25",
      b47: "76",
      b48: "0.009473684",
      b49: "75",
      b50: "2.144403444",
      b51: "2.7",
      b52: "36",
      b53: "0.0024",
      b54: "0.144",
      b55: "12",
      b56: "0.000113097",
      b57: "1274",
      b58: "17",
      b59: "0.317647059",
      b60: "4.927397619",
      b61: "",
      b62: "388.8",
      b63: "3.5",
      b64: "11.89280136",
      b65: "600",
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
      b77: "1",
      b78: "0.9735",
      b79: "1.5",
      b80: "9.24",
      b81: "",
      b82: "",
      b83: "1.522240328",
      b84: "1",
      b85: "1.522240328",
      b86: "2×0.76",
      b87: "",
      b88: "1.522240328",
      b89: "1.2",
      b90: "1.268533607",
      b91: "2×0.63",
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
      b102: "",
      b103: "0.3",
      b104: "0.3",
      b105: "1",
      b106: "0.6",
      b107: "1.5",
      b108: "3.4",
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
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(6);
    },
    b3_2() {
      return (parseFloat(this.b3_1) / 3600).toFixed(6);
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
