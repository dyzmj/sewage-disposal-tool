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
                    :placeholder="$t('b3')"
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
                  <a-input
                    v-model="b4"
                    style="width: 50%"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b4')"
                    :suffix="$t('b4_u')"
                  />
                  <a-input
                    v-model="b4_1"
                    style="width: 50%"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b4_1')"
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
                  <a-input
                    v-model="b5"
                    style="width: 50%"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b5')"
                    :suffix="$t('b5_u')"
                    @change="refreshInitData()"
                  />
                  <a-input
                    v-model="b5_1"
                    style="width: 50%"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b5_1')"
                    :suffix="$t('b5_1_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </a-card>
          <a-card :title="$t('referenceInformation')">
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img
                    style="max-width: 360px; height: auto;"
                    src="@/assets/img/2000/2004.jpg"
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
          :headStyle="{ 'font-weight': 'bolder' }"
          style="margin-bottom: 24px"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b8')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-card
              :title="$t('b9_0')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b9')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b9"
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b9_u')"
                      @change="refreshInitData()"
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
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b10_u')"
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
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b11_u')"
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
                      style="width: 100%"
                      :disabled="false"
                      :suffix="$t('b12_u')"
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
                      :disabled="true"
                      :suffix="$t('b13_u')"
                    />
                    <a-input
                      v-model="b13_1"
                      style="width: 50%"
                      :disabled="false"
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
                      style="width: 33%"
                      :disabled="false"
                      :suffix="$t('b14_u')"
                    />
                    <a-input
                      v-model="b14_1"
                      style="width: 33%"
                      :disabled="false"
                      :suffix="$t('b14_u')"
                    />
                    <a-input
                      v-model="b14_2"
                      style="width: 34%"
                      :disabled="false"
                      :suffix="$t('b14_2_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b15_0')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b15')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b15"
                      style="width: 50%"
                      :disabled="true"
                      :suffix="$t('b15_u')"
                    />
                    <a-input
                      v-model="b15_1"
                      style="width: 50%"
                      :disabled="false"
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
                      style="width: 50%"
                      :disabled="false"
                      :suffix="$t('b16_u')"
                    />
                    <a-input
                      v-model="b16_1"
                      style="width: 50%"
                      :disabled="false"
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
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b18')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b18"
                      style="width: 50%"
                      :disabled="false"
                      :suffix="$t('b18_u')"
                    />
                    <a-input
                      v-model="b18_1"
                      style="width: 50%"
                      :disabled="true"
                      :suffix="$t('b18_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b19')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 4 }"
                  :wrapperCol="{ span: 20 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b19"
                      style="width: 25%"
                      :disabled="false"
                      :suffix="$t('b19_u')"
                    />
                    <a-input
                      v-model="b19_1"
                      style="width: 25%"
                      :disabled="true"
                      :suffix="$t('b19_1_u')"
                    />
                    <a-input
                      v-model="b19_2"
                      style="width: 25%"
                      :disabled="false"
                      :suffix="$t('b19_2_u')"
                    />
                    <a-input
                      v-model="b19_3"
                      style="width: 25%"
                      :disabled="true"
                    />
                  </a-input-group>
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
                      style="width: 50%"
                      :disabled="false"
                      :suffix="$t('b20_u')"
                    />
                    <a-input
                      v-model="b20_1"
                      style="width: 50%"
                      :disabled="false"
                      :suffix="$t('b20_1_u')"
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
                      style="width: 100%"
                      :disabled="false"
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
                      style="width: 50%"
                      :disabled="false"
                      :suffix="$t('b22_u')"
                    />
                    <a-input
                      v-model="b22_1"
                      style="width: 50%"
                      :disabled="true"
                      :suffix="$t('b22_1_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b23')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b23"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b23_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b24')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b24"
                      style="width: 100%"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b25')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b26"
                      style="width: 100%"
                      :disabled="false"
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
                      :disabled="false"
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
                      :disabled="true"
                      :suffix="$t('b28_u')"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b29')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b29"
                      style="width: 100%"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b30')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b30"
                      style="width: 100%"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b31')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b31"
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b31_u')"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </a-card>
            <a-card
              :title="$t('b32')"
              style="margin-bottom: 24px"
              :bordered="false"
              :body-style="{ padding: 4 }"
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
            >
              <a-form>
                <a-form-item
                  :label="$t('b33')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b33"
                      style="width: 50%"
                      :disabled="false"
                    />
                    <a-input
                      v-model="b33_1"
                      style="width: 50%"
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
                      style="width: 100%"
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
              :headStyle="{ 'font-weight': 'bolder' }"
              size="small"
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
                      style="width: 100%"
                      :disabled="true"
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
                      style="width: 100%"
                      :disabled="true"
                      :suffix="$t('b37_u')"
                    />
                    <a-input
                      v-model="b37_1"
                      style="width: 100%"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
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
              <div slot="尺寸" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.尺寸"
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
              <div slot="数量" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.数量"
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
              <div slot="序号" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.备注"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="仪表位号" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.仪表位号"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="仪表名称" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.仪表名称"
                  @blur="handleTableChange()"
                ></a-input>
              </div>
              <div slot="安装位置" slot-scope="text, record">
                <a-input
                  style="border: none;"
                  v-model="record.安装位置"
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
            <div slot="尺寸" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.尺寸"
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
            <div slot="数量" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.数量"
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
            <div slot="序号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.备注"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="仪表位号" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.仪表位号"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="仪表名称" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.仪表名称"
                @blur="handleTableChange()"
              ></a-input>
            </div>
            <div slot="安装位置" slot-scope="text, record">
              <a-input
                style="border: none;"
                v-model="record.安装位置"
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
  exportExcel3,
  exportWord,
  getValueFromLocalStorage,
  storeValueInLocalStorage,
  initWordStorage,
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_2004"),
  data() {
    return {
      modelVisible: false,
      pacData: 20,
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b9: "20",
      b10: "15",
      b11: "100",
      b12: "2",
      b13_1: "1.50",
      b14: "970",
      b14_1: "1230",
      b14_2: "2",
      b15_1: "0.50",
      b16: "780",
      b16_1: "1110",
      b18: "600",
      b19: "200",
      b19_2: "90",
      b20: "300",
      b21: "1",
      b22: "2",
      b24: "0.5",
      b25: "1000",
      b26: "2",
      b29: "0.75",
      b30: "0.6",
      b32: "",
      b33: "JBJ1-600",
      b33_1: "1",
      b34: "0.55",
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
        exportExcel3(allData1, allData2, allData3, "加药系统PAC工程量", this);
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
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b13_1,
        key12: this.b14,
        key13: this.b14_1,
        key14: this.b14_2,
        key15: this.b15,
        key16: this.b15_1,
        key17: this.b16,
        key18: this.b16_1,
        key19: this.b18,
        key20: this.b18_1,
        key21: this.b19,
        key22: this.b19_1,
        key23: this.b19_2,
        key24: this.b19_3,
        key25: this.b20,
        key26: this.b20_1,
        key27: this.b21,
        key28: this.b22,
        key29: this.b22_1,
        key30: this.b23,
        key31: this.b24,
        key32: this.b25,
        key33: this.b26,
        key34: this.b27,
        key35: this.b28,
        key36: this.b29, 
        key37: this.b30, 
        key38: this.b31,
        key39: this.b33,
        key40: this.b33_1,
        key41: this.b34,
        key42: this.b36,
        key43: this.b37,
        key44: this.b37_1,     
      };
      exportWord("PAC计算书", "2004.docx", data, this);
    },
    refreshInitData() {
      this.initWaterData();
      const data = {
        key1: this.b3,
        key2: this.b4,
        key3: this.b4_1,
        key4: this.b5,
        key5: this.b5_1,
        key6: this.b9,
        key7: this.b10,
        key8: this.b11,
        key9: this.b12,
        key10: this.b13,
        key11: this.b13_1,
        key12: this.b14,
        key13: this.b14_1,
        key14: this.b14_2,
        key15: this.b15,
        key16: this.b15_1,
        key17: this.b16,
        key18: this.b16_1,
        key19: this.b18,
        key20: this.b18_1,
        key21: this.b19,
        key22: this.b19_1,
        key23: this.b19_2,
        key24: this.b19_3,
        key25: this.b20,
        key26: this.b20_1,
        key27: this.b21,
        key28: this.b22,
        key29: this.b22_1,
        key30: this.b23,
        key31: this.b24,
        key32: this.b25,
        key33: this.b26,
        key34: this.b27,
        key35: this.b28,
        key36: this.b29, 
        key37: this.b30, 
        key38: this.b31,
        key39: this.b33,
        key40: this.b33_1,
        key41: this.b34,
        key42: this.b36,
        key43: this.b37,
        key44: this.b37_1,    
      };
      initWordStorage("2004.docx", data);
      this.handleExcelCache("2004.xlsx", "PAC工程量");
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
    getkey1() {
      return "φ" + this.b14 + "mm×" + this.b14_1 + "mm";
    },
    getkey2() {
      return this.b14_2;
    },
    getkey3() {
      return this.b33;
    },
    getkey4() {
      return parseFloat(this.b14_2) + 1;
    },
    getkey5() {
      if (parseFloat(this.b37_1) == 5.5) {
        return "MS1A064A";
      } else if (parseFloat(this.b37_1) == 8) {
        return "MS1A064B";
      } else if (parseFloat(this.b37_1) == 11) {
        return "MS1A064C";
      } else if (parseFloat(this.b37_1) == 20) {
        return "MS1A094A";
      } else if (parseFloat(this.b37_1) == 26) {
        return "MS1A094B";
      } else if (parseFloat(this.b37_1) == 40) {
        return "MS1A094C";
      } else if (parseFloat(this.b37_1) == 60) {
        return "MS1B108A";
      } else if (parseFloat(this.b37_1) == 80) {
        return "MS1B108B";
      } else if (parseFloat(this.b37_1) == 120) {
        return "MS1B108C";
      } else if (parseFloat(this.b37_1) == 155) {
        return "MS1C138A";
      } else if (parseFloat(this.b37_1) == 230) {
        return "MS1C165A";
      } else if (parseFloat(this.b37_1) == 310) {
        return "MS1C138C";
      } else if (parseFloat(this.b37_1) == 330) {
        return "MS1C165B";
      } else if (parseFloat(this.b37_1) == 460) {
        return "MS1C165C";
      } else if (parseFloat(this.b37_1) == 530) {
        return "MS1C165C";
      } else {
        return "MS1C138B";
      }
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b5() {
      return (
        ((parseFloat(this.b3) / 24) * parseFloat(this.b4)) /
        parseFloat(this.b4_1)
      ).toFixed(2);
    },
    b5_1() {
      return (parseFloat(this.b5) / 3600).toFixed(2);
    },
    b13() {
      storeValueInLocalStorage("pacData", this.b9);
      return (
        (parseFloat(this.b9) * parseFloat(this.b5)) /
        parseFloat(this.b10) /
        parseFloat(this.b12) /
        parseFloat(this.b11) /
        4.17
      ).toFixed(2);
    },
    b15() {
      return (parseFloat(this.b13_1) * 0.3).toFixed(2);
    },
    b18_1() {
      return (parseFloat(this.b18) / 1000).toFixed(2);
    },
    b19_1() {
      return (parseFloat(this.b19) / 1000).toFixed(2);
    },
    b19_3() {
      return ((parseFloat(this.b19_2) / 180) * 3.1415926).toFixed(2);
    },
    b20_1() {
      return (parseFloat(this.b20) / 1000).toFixed(2);
    },
    b22_1() {
      return ((parseFloat(this.b22) * 2) / parseFloat(this.b18_1)).toFixed(2);
    },
    b23() {
      return (
        (parseFloat(this.b22) / 3.1415926 / parseFloat(this.b18_1)) *
        60
      ).toFixed(2);
    },
    b27() {
      return (parseFloat(this.b21) * parseFloat(this.b26)).toFixed(0);
    },
    b28() {
      return (
        (parseFloat(this.b24) *
          parseFloat(this.b25) *
          Math.pow(parseFloat(this.b22_1), 3) *
          parseFloat(this.b27) *
          parseFloat(this.b19_1) *
          Math.sin(parseFloat(this.b19_3)) *
          (Math.pow(parseFloat(this.b18_1) / 2, 4) -
            Math.pow(parseFloat(this.b18_1) / 2 - parseFloat(this.b20_1), 4))) /
        408 /
        9.81
      ).toFixed(2);
    },
    b31() {
      return (
        parseFloat(this.b28) /
        parseFloat(this.b29) /
        parseFloat(this.b30)
      ).toFixed(2);
    },
    b36() {
      return (
        (parseFloat(this.b5) * parseFloat(this.b9)) /
        (parseFloat(this.b11) / 100) /
        1000
      ).toFixed(2);
    },
    b37() {
      return (
        (parseFloat(this.b5) * parseFloat(this.b9)) /
        (parseFloat(this.b10) / 100) /
        1000
      ).toFixed(2);
    },
    b37_1() {
      if (parseFloat(this.b37) / 2 <= 5.5) {
        return 5.5;
      } else if (parseFloat(this.b37) / 2 <= 8) {
        return 8;
      } else if (parseFloat(this.b37) / 2 <= 11) {
        return 11;
      } else if (parseFloat(this.b37) / 2 <= 20) {
        return 20;
      } else if (parseFloat(this.b37) / 2 <= 26) {
        return 26;
      } else if (parseFloat(this.b37) / 2 <= 40) {
        return 40;
      } else if (parseFloat(this.b37) / 2 <= 60) {
        return 60;
      } else if (parseFloat(this.b37) / 2 <= 80) {
        return 80;
      } else if (parseFloat(this.b37) / 2 <= 120) {
        return 120;
      } else if (parseFloat(this.b37) / 2 <= 155) {
        return 155;
      } else if (parseFloat(this.b37) / 2 <= 230) {
        return 230;
      } else if (parseFloat(this.b37) / 2 <= 310) {
        return 310;
      } else if (parseFloat(this.b37) / 2 <= 330) {
        return 330;
      } else if (parseFloat(this.b37) / 2 <= 460) {
        return 460;
      } else if (parseFloat(this.b37) / 2 <= 530) {
        return 530;
      } else {
        return 550;
      }
    },
    data1() {
      return [
        {
          序号: "",
          单体位号: "",
          名称: "溶液池",
          尺寸: this.getkey1(),
          标高: "",
          单位: "个",
          数量: this.getkey2(),
          结构形式: "",
          备注: "",
          暖通要求: "",
        },
        {
          序号: "",
          单体位号: "",
          名称: "溶解池",
          尺寸: "",
          标高: "",
          单位: "个",
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
          序号: "",
          设备位号: "",
          设备工艺名称: "搅拌机",
          设备类型: "折浆式搅拌机",
          规格及型号: this.getkey3(),
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "计量泵",
          设备类型: "机械隔膜计量泵",
          规格及型号: this.getkey5(),
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "液压阀",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "背压阀",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "脉冲阻尼器",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
        {
          序号: "",
          设备位号: "",
          设备工艺名称: "Y型过滤器",
          设备类型: "",
          规格及型号: "",
          单位: "台",
          数量: this.getkey4(),
          运行时间: "",
          主要材质: "",
          备注: "",
        },
      ];
    },
    data3() {
      return [
        {
          序号: "",
          仪表位号: "",
          仪表名称: "压力表",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.getkey4(),
          a: "",
          b: "",
          备注: "",
        },
        {
          序号: "",
          仪表位号: "",
          仪表名称: "流量计",
          安装位置: "",
          规格及型号: "",
          单位: "个",
          数量: this.getkey4(),
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
    console.log("2004-activated被调用了");
    this.refreshInitData();
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
        名称: "溶液池",
        尺寸: this.getkey1(),
        标高: "",
        单位: "个",
        数量: this.getkey2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
      {
        序号: "",
        单体位号: "",
        名称: "溶解池",
        尺寸: "",
        标高: "",
        单位: "个",
        数量: "1",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "搅拌机",
        设备类型: "折浆式搅拌机",
        规格及型号: this.getkey3(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.getkey5(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
    ];
    this.data3 = [
      {
        序号: "",
        仪表位号: "",
        仪表名称: "压力表",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.getkey4(),
        a: "",
        b: "",
        备注: "",
      },
      {
        序号: "",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: this.getkey4(),
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
