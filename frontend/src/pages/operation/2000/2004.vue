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
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
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
} from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_2004"),
  data() {
    return {
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
        exportExcel3(
          allData1,
          allData2,
          allData3,
          "生物接触氧化池计算书",
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
        key1: this.b3,
        key2: this.b5,
        key3: this.b5_1,
        key4: this.b9,
        key5: this.b10,
      };
      exportWord("PAC计算书", "7005.docx", data, this);
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
    b5() {
      return (
        parseFloat(this.b3) / 24 +
        parseFloat(this.b4) / parseFloat(this.b4_1)
      ).toFixed(2);
    },
    b5_1() {
      return (parseFloat(this.b5) / 3600).toFixed(2);
    },
    b13() {
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
        parseFloat(this.b24) *
        parseFloat(this.b25) *
        Math.pow(parseFloat(this.b22_1), 3) *
        parseFloat(this.b27) *
        parseFloat(this.b19_1) *
        Math.sin(parseFloat(this.b19_3)) *
        (Math.pow(parseFloat(this.b18_1) / 2, 4) -
          Math.pow(parseFloat(this.b18_1) / 2 - parseFloat(this.b20_1), 4) /
            408 /
            9.81)
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
        名称: "溶液池",
        尺寸: "φ970mm×1230mm",
        标高: "",
        单位: "个",
        数量: "2",
        结构形式: "",
        备注: "",
        暖通要求: "",
      },
      {
        key: "2",
        序号: "",
        单体位号: "",
        名称: "溶液池",
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
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "搅拌机",
        设备类型: "折浆式搅拌机",
        规格及型号: "JBJ1-600",
        单位: "台",
        数量: "3",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "2",
        序号: "",
        设备位号: "",
        设备工艺名称: "计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: "MS1B108A",
        单位: "台",
        数量: "3",
        运行时间: "",
        主要材质: "PC泵头",
        备注: "二用一备",
      },
      {
        key: "3",
        序号: "",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: "3",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "4",
        序号: "",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: "3",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "5",
        序号: "",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: "3",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "6",
        序号: "",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "个",
        数量: "3",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
    ];
    this.data3 = [
      {
        key: "1",
        序号: "",
        仪表位号: "",
        仪表名称: "压力表",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: "3",
        a: "",
        b: "",
        备注: "",
      },
      {
        key: "2",
        序号: "",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: "3",
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
