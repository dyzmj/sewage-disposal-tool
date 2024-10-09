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
          :bordered="false"
          :body-style="{ padding: 4 }"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 19 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    style="width: 25%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                  <a-input
                    v-model="b3_1"
                    style="width: 25%;"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3_1')"
                    :suffix="$t('b3_1_u')"
                  />
                  <a-input
                    v-model="b3_2"
                    style="width: 25%;"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3_2')"
                    :suffix="$t('b3_2_u')"
                  />
                  <a-input
                    v-model="b3_3"
                    style="width: 25%;"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3_3')"
                    :suffix="$t('b3_3_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b4')"
                style="margin-top: 10px"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 19 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b4"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b4')"
                    :suffix="$t('b4_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b4_1')"
                style="margin-top: 10px"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 19 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b4_1"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b4_1')"
                    :suffix="$t('b4_1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b5')"
                style="margin-top: 10px"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 19 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b5"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b5')"
                    :suffix="$t('b5_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b5_1')"
                style="margin-top: 10px"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 19 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b5_1"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b5_1')"
                    :suffix="$t('b5_1_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('referenceImage')"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                <img width="400px" src="@/assets/img/5000/5001_1.png" />
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
          :title="$t('b6')"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b7')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b13')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b21')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b35')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b44')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b49')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b53')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b56')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
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
                  :label="$t('b3')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b67')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b86')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b94')"
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
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b3"
                      style="width: 25%;"
                      :disabled="false"
                      rows="12"
                      :placeholder="$t('b3')"
                      :suffix="$t('b3_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4')"
                      :suffix="$t('b4_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b4_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b4_1')"
                      :suffix="$t('b4_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5')"
                      :suffix="$t('b5_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b5_1')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 5 }"
                  :wrapperCol="{ span: 19 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b5_1"
                      :disabled="true"
                      rows="12"
                      :placeholder="$t('b5_1')"
                      :suffix="$t('b5_1_u')"
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
  i18n: require("./i18n_3004"),
  data() {
    return {
      b3: "5250",
      b4: "1.2",
      b4_1: "100",
      b5: "4",
      b5_1: "5",
      b6: "",
      b7: "",
      b8: "303.8194444",
      b9: "0.05",
      b10: "6.076388889",
      b11: "2.781492158",
      b12: "2.881492158",
      b13: "",
      b14: "6.076388889",
      b15: "0.3",
      b16: "12.89754753",
      b17: "4.052365672",
      b18: "4.152365672",
      b19: "",
      b20: "60.76388889",
      b21: "",
      b22: "74.30583451",
      b23: "9.73",
      b24: "262.5",
      b25: "276.5",
      b26: "0.5",
      b27: "193.3253966",
      b28: "83.17460336",
      b29: "4.865",
      b30: "",
      b31: "1.57742972",
      b32: "6.575140561",
      b33: "0.164378514",
      b34: "4.84",
      b35: "",
      b36: "0.6",
      b37: "50",
      b38: "1.8",
      b39: "0.695373039",
      b40: "60",
      b41: "3.466928915",
      b42: "0.464910661",
      b43: "0.657482962",
      b44: "",
      b45: "0.25",
      b46: "0.121527778",
      b47: "0.4",
      b48: "0.01113773",
      b49: "",
      b50: "4.381492158",
      b51: "1.68205668",
      b52: "6.941182836",
      b53: "",
      b54: "0.243055556",
      b55: "0.074307207",
      b56: "",
      b57: "26.64035701",
      b58: "43.34381184",
      b59: "192.5158312",
      b60: "1.62699816",
      b61: "7.226473394",
      b62: "",
      b63: "300",
      b64: "0.85963318",
      b65: "200",
      b66: "",
      b67: "45%",
      b68: "7.215073421",
      b69: "7.8",
      b70: "1.5",
      b71: "0.045572917",
      b72: "0.261652711",
      b73: "0.196239533",
      b74: "0.327065889",
      b75: "0.45",
      b76: "0.05",
      b77: "0.07421311",
      b78: "25",
      b79: "151.185706",
      b80: "",
      b81: "0.322426614",
      b82: "",
      b83: "0.091145833",
      b84: "0.7",
      b85: "0.591856061",
      b86: "",
      b87: "15",
      b88: "2500",
      b89: "2.078125",
      b90: "",
      b91: "2.016",
      b92: "100",
      b93: "",
      b94: "",
      b95: "",
      b96: "0.7",
      b97: "1.94704451",
      b98: "1.2",
      b99: "11.46",
      b100: "0.05",
      b101: "218.0508387",
      b102: "1.8",
      b103: "1.111111111",
      b104: "3",
      b105: "0.132556477",
      b106: "",
      b107: "1",
      b108: "1.666543907",
      b109: "0.56068556",
      b110: "0.186895187",
      b111: "6",
      b112: "",
      b113: "",
      b114: "1010",
      b115: "0.6",
      b116: "0.250700685",
      b117: "",
      b118: "0.3",
      b119: "1",
      b120: "0.813104813",
      b121: "0.243531715",
      b122: "",
      b123: "0.494232401",
      b124: "0.48",
      b125: "1.029650835",
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
        exportExcel3(allData1, allData2, allData3, "机械搅拌澄清池工程量", this);
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
        key3: this.b4,
        key4: this.b5,
        key5: this.b4_1,
        key6: this.b5_1,
      };
      exportWord("机械搅拌澄清池计算书", "3004.docx", data, this);
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
      return (parseFloat(this.b3) / 24).toFixed(2);
    },
    b3_2() {
      return (parseFloat(this.b3_1) / 3.6).toFixed(2);
    },
    b3_3() {
      return (parseFloat(this.b3_2) / 1000).toFixed(2);
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
