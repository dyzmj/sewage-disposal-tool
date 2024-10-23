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
            :title="$t('b2')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
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
                      style="width: 50%"
                      :suffix="$t('b3_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b3_1"
                      style="width: 50%"
                      :suffix="$t('b3_1_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b4')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b4"
                    :placeholder="$t('b4')"
                    :suffix="$t('b4_u')"
                    :disabled="true"
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
                    :placeholder="$t('b5')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b6')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b6"
                    :placeholder="$t('b6')"
                    :suffix="$t('b6_u')"
                    :disabled="true"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b7')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b7"
                    :placeholder="$t('b7')"
                    :suffix="$t('b7_u')"
                    :disabled="false"
                  />
                </a-form-item>
                <a-form-item
                  :label="$t('b8')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input v-model="b8" :suffix="$t('b8_u')" :disabled="true" />
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
                      style="width: 50%"
                      :suffix="$t('b9_u')"
                      :disabled="false"
                    />
                    <a-input
                      v-model="b9_1"
                      style="width: 50%"
                      :suffix="$t('b9_1_u')"
                      :disabled="false"
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
                      :suffix="$t('b10_u')"
                      :disabled="true"
                    />
                    <a-input
                      v-model="b10_1"
                      style="width: 50%"
                      :suffix="$t('b10_1_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('referenceImage')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img width="400px" src="@/assets/img/2000/Ozone_01.png" />
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
            :title="$t('b12')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-card
                :title="$t('b13')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 2 }"
                :headStyle="{ 'font-weight': 'bolder' }"
                size="small"
              >
                <a-form>
                  <a-form-item
                    :label="$t('b14')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b14"
                        style="width: 100%"
                        :suffix="$t('b14_u')"
                        :disabled="false"
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
                        style="width: 100%"
                        :suffix="$t('b15_u')"
                        :disabled="true"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
              <a-card
                :title="$t('b17')"
                style="margin-bottom: 24px"
                :bordered="false"
                :body-style="{ padding: 2 }"
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
                        style="width: 100%"
                        :suffix="$t('b18_u')"
                        :disabled="false"
                      />
                    </a-input-group>
                  </a-form-item>
                  <a-form-item
                    :label="$t('b19')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input-group compact>
                      <a-input
                        v-model="b19"
                        style="width: 100%"
                        :suffix="$t('b19_u')"
                        :disabled="false"
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
                        style="width: 100%"
                        :suffix="$t('b20_u')"
                        :disabled="true"
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
                        :suffix="$t('b21_u')"
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
                        :suffix="$t('b22_u')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="b22_1"
                        style="width: 50%"
                        :suffix="$t('b22_u')"
                        :disabled="false"
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
                        :suffix="$t('b23_u')"
                        :disabled="true"
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
                        :suffix="$t('b24_u')"
                        :disabled="true"
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
                        style="width: 50%"
                        :suffix="$t('b25_u')"
                        :disabled="true"
                      />
                      <a-input
                        v-model="b25_1"
                        style="width: 50%"
                        :suffix="$t('b25_u')"
                        :disabled="true"
                      />
                    </a-input-group>
                  </a-form-item>
                </a-form>
              </a-card>
            </div>
          </a-card>
          <a-card
            :title="$t('b27')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b28')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b28"
                      style="width: 50%"
                      :suffix="$t('b28_u')"
                      :disabled="false"
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
                      :suffix="$t('b29_u')"
                      :disabled="true"
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
                      :suffix="$t('b30_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b32')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
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
                      :suffix="$t('b33_u')"
                      :disabled="false"
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
                      :suffix="$t('b34_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b35')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b35"
                      style="width: 100%"
                      :suffix="$t('b35_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
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
                      :disabled="false"
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
                      :disabled="false"
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
                      style="width: 100%"
                      :suffix="$t('b38_u')"
                      :disabled="false"
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
                      style="width: 100%"
                      :suffix="$t('b39_u')"
                      :disabled="true"
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
                      style="width: 100%"
                      :suffix="$t('b40_u')"
                      :disabled="true"
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
                      style="width: 100%"
                      :suffix="$t('b41_u')"
                      :disabled="true"
                    />
                  </a-input-group>
                </a-form-item>
              </a-form>
            </div>
          </a-card>
          <a-card
            :title="$t('b43')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 2 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b44')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b44"
                      style="width: 50%"
                      :suffix="$t('b44_u')"
                      :disabled="false"
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
                      style="width: 100%"
                      :suffix="$t('b45_u')"
                      :disabled="true"
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
                      style="width: 100%"
                      :suffix="$t('b46_u')"
                      :disabled="true"
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
                      style="width: 100%"
                      :suffix="$t('b47_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b48')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b48"
                      style="width: 100%"
                      :suffix="$t('b48_u')"
                      :disabled="false"
                    />
                  </a-input-group>
                </a-form-item>
                <a-form-item
                  :label="$t('b49')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input-group compact>
                    <a-input
                      v-model="b49"
                      style="width: 100%"
                      :suffix="$t('b49_u')"
                      :disabled="true"
                    />
                  </a-input-group>
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
  initExcelStorage,
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_6003"),
  data() {
    return {
      b3: "20000",
      b4: "0.005",
      b5: "1.06",
      b7: "70",
      b9: "1",
      b9_1: "1",
      b10_1: "8",
      b13: "",
      b14: "10",
      b17: "",
      b18: "4",
      b19: "0.5",
      b21: "3",
      b22_1: "12",
      b28: "20",
      b33: "0.2",
      b35: "40",
      b36: "0.19",
      b37: "0.066",
      b38: "2",
      b44: "0.2",
      b47: "0.45",
      b48: "0.5",
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
              dataIndex: "安装位置",
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
        exportExcel3(allData1, allData2, allData3, "臭氧消毒工程量", this);
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
        key2: parseFloat(this.b4) * 1000,
        key3: this.b4,
        key4: this.b28,
        key5: this.b14,
      };
      exportWord("臭氧消毒计算书", "6003.docx", data, this);
    },
    refreshInitData() {
      this.$message.info(this.$t("refreshSucc"));
      const data = {
        key1: this.b3,
        key2: parseFloat(this.b4) * 1000,
        key3: this.b4,
        key4: this.b28,
        key5: this.b14,
      };
      initWordStorage("6003.docx", data);
      this.handleExcelCache("6003.xlsx", "臭氧消毒工程量");
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
    ROUNDUP(number, num_digits) {
      var multiplier = Math.pow(10, num_digits);
      return Math.ceil(number * multiplier) / multiplier;
    },
    truncateDecimals(number, digits) {
      let power = Math.pow(10, digits);
      return Math.floor(number * power) / power;
    },
    getDisinfectiontank() {
      return "to do";
    },
    getDimensions() {
      return "to do";
    },
    get_a_1() {
      return this.b21+"m×"+this.b22_1+"m×"+(parseFloat(this.b18)+parseFloat(this.b19))+"m";
    },
    get_a_2() {
      return 1;
    },
    get_b_1() {
      return "鼓气量>"+this.b41+"m3/h";
    },
    get_b_2() {
      return this.b40;
    },
    get_c_1() {
      return "臭氧产气量"+this.b10_1+"kg/h，工作压力>"+this.b49+"m";
    },
    get_c_2() {
      return (parseFloat(this.b9) + parseFloat(this.b9_1))
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3_1() {
      return (parseFloat(this.b3) / 24).toFixed(2);
    },
    b6() {
      return (parseFloat(this.b4) * parseFloat(this.b3_1) * 1.06).toFixed(2);
    },
    b8() {
      return (parseFloat(this.b6) / (parseFloat(this.b7) / 100)).toFixed(2);
    },
    b10() {
      return parseFloat(this.b8).toFixed(2);
    },
    b15() {
      return ((parseFloat(this.b3_1) * parseFloat(this.b14)) / 60).toFixed(2);
    },
    b20() {
      return (parseFloat(this.b15) / parseFloat(this.b18)).toFixed(2);
    },
    b22() {
      return (parseFloat(this.b20) / parseFloat(this.b21)).toFixed(8);
    },
    b23() {
      return (parseFloat(this.b22_1) * 0.6).toFixed(1);
    },
    b24() {
      return (parseFloat(this.b22_1) * 0.4).toFixed(1);
    },
    b25() {
      return (
        parseFloat(this.b22_1) *
        parseFloat(this.b21) *
        parseFloat(this.b18)
      ).toFixed(0);
    },
    b25_1() {
      return "> 138.89";
    },
    b29() {
      return ((1000 * parseFloat(this.b8)) / parseFloat(this.b28)).toFixed(2);
    },
    b30() {
      return (0.614 * parseFloat(this.b29)).toFixed(2);
    },
    b34() {
      return ((3.14 * parseFloat(this.b33) * parseFloat(this.b33)) / 4).toFixed(
        4
      );
    },
    b39() {
      return (
        (parseFloat(this.b38) -
          parseFloat(this.b36) * Math.pow(parseFloat(this.b35), 0.333)) /
        parseFloat(this.b37)
      ).toFixed(2);
    },
    b40() {
      return this.ROUNDUP(
        parseFloat(this.b30) / parseFloat(this.b39) / parseFloat(this.b34),
        0
      );
    },
    b41() {
      return this.truncateDecimals(
        parseFloat(this.b30) / parseFloat(this.b40),
        2
      );
    },
    b45() {
      return ((1 / 4) * 3.14 * 0.2 * 0.2).toFixed(4);
    },
    b46() {
      return (
        parseFloat(this.b30) /
        parseFloat(this.b40) /
        parseFloat(this.b34) /
        10
      ).toFixed(2);
    },
    b49() {
      return (
        parseFloat(this.b18) +
        parseFloat(this.b47) +
        parseFloat(this.b48)
      ).toFixed(2);
    },
    data1() {
      return [
      {
        序号: "1",
        单体位号: "",
        名称: "臭氧接触池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_2(),
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
        设备工艺名称: "微孔扩散板",
        设备类型: this.get_b_1(),
        规格及型号: "",
        单位: "个",
        数量: this.get_b_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "臭氧发生器",
        设备类型: this.get_c_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_c_2(),
        运行时间: "",
        主要材质: "",
        备注: "一用一备，配套尾气破坏器",
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
        名称: "臭氧接触池",
        尺寸: this.get_a_1(),
        标高: "",
        单位: "座",
        数量: this.get_a_2(),
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
    ];
    this.data2 = [
      {
        序号: "1",
        设备位号: "",
        设备工艺名称: "微孔扩散板",
        设备类型: this.get_b_1(),
        规格及型号: "",
        单位: "个",
        数量: this.get_b_2(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        序号: "2",
        设备位号: "",
        设备工艺名称: "臭氧发生器",
        设备类型: this.get_c_1(),
        规格及型号: "",
        单位: "台",
        数量: this.get_c_2(),
        运行时间: "",
        主要材质: "",
        备注: "一用一备，配套尾气破坏器",
      },
    ];
    this.data3 = [];
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
