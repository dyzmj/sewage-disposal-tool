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
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
        <a slot="extra" href="#">
            <div class="" style="">
              <a-button type="primary" @click="refreshInitData" icon="sync" size="small">
                {{ $t("refresh") }}</a-button
              >
            </div>
          </a>
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
          <a-card
            :title="$t('referenceImage')"
            :headStyle="{ 'font-weight': 'bolder' }"
          >
            <div>
              <p>高锰酸钾</p>
              <p>
                《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min
              </p>
            </div>
            <div class="baseQueryParam">
              <a-form>
                <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                  <img width="400px" src="@/assets/img/1000/1002.png" />
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
          :title="$t('b7')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
          :headStyle="{ 'font-weight': 'bolder' }"
        >
          <a-card
            :title="$t('b8')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-form>
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
                    style="width: 100%"
                    :disabled="false"
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
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b14_u')"
                  />
                  <a-input
                    v-model="b14_1"
                    style="width: 50%"
                    :disabled="false"
                    :suffix="$t('b14_u')"
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
                    style="width: 33%"
                    :disabled="false"
                    :suffix="$t('b15_u')"
                  />
                  <a-input
                    v-model="b15_1"
                    style="width: 33%"
                    :disabled="false"
                    :suffix="$t('b15_u')"
                  />
                  <a-input
                    v-model="b15_2"
                    style="width: 34%"
                    :disabled="false"
                    :suffix="$t('b15_2_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </a-card>
          <a-card
            :title="$t('b16')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-form>
              <a-form-item
                :label="$t('b17')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b17"
                    style="width: 50%"
                    :disabled="false"
                    :suffix="$t('b17_u')"
                  />
                  <a-input
                    v-model="b17_1"
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b17_1_u')"
                  />
                </a-input-group>
              </a-form-item>
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
                    style="width: 50%"
                    :disabled="false"
                    :suffix="$t('b19_u')"
                  />
                  <a-input
                    v-model="b19_1"
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b19_1_u')"
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
                    :disabled="false"
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
                    :suffix="$t('b21_u')"
                  />
                  <a-input
                    v-model="b21_1"
                    style="width: 50%"
                    :disabled="true"
                    :suffix="$t('b21_1_u')"
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
                    :suffix="$t('b22_u')"
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
                    :disabled="false"
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
                    :suffix="$t('b24_u')"
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
                  <a-input v-model="b26" style="width: 100%" :disabled="true" />
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
                    :disabled="true"
                    :suffix="$t('b30_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </a-card>
          <a-card
            :title="$t('b31')"
            style="margin-bottom: 24px"
            :bordered="false"
            :body-style="{ padding: 4 }"
            :headStyle="{ 'font-weight': 'bolder' }"
            size="small"
          >
            <a-form>
              <a-form-item
                :label="$t('b32')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input v-model="b32" style="width: 50%" :disabled="false" />
                  <a-input
                    v-model="b32_1"
                    style="width: 50%"
                    :disabled="false"
                    :suffix="$t('b32_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b33')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b33"
                    style="width: 100%"
                    :disabled="false"
                    :suffix="$t('b33_u')"
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
  i18n: require("./i18n_1005"),
  data() {
    return {
      b3: "20000.00",
      b4: "1",
      b4_1: "1",
      b10: "1",
      b11: "4",
      b12: "100",
      b13: "1",
      b14_1: "0.80",
      b15: "970",
      b15_1: "1230",
      b15_2: "1",
      b17: "600",
      b18: "200",
      b19: "300",
      b20: "1",
      b21: "2",
      b23: "0.5",
      b24: "1000",
      b25: "2",
      b27: "0.12",
      b28: "0.75",
      b29: "0.6",
      b32: "JBJ1-600",
      b32_1: "1",
      b33: "0.55",
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
      const waterData = getValueFromLocalStorage("waterData");
      if (waterData == null || waterData == "") {
        this.b3 = 20000;
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
        exportExcel3(allData1, allData2, allData3, "高锰酸钾工程量", this);
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
        key2: this.b9,
        key3: this.b10,
      };
      exportWord("高锰酸钾计算书", "1005.docx", data, this);
    },
    refreshInitData() {
      this.$message.info(this.$t("refreshSucc"));
      const data = {
        key1: this.b3,
        key2: this.b9,
        key3: this.b10,
      };
      initWordStorage("1005.docx", data);
      this.handleExcelCache("1005.xlsx", "高锰酸钾工程量");
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
      return "φ"+this.b15+"mm×"+this.b15_1+"mm"
    },
    getkey2() {
      return this.b15_2;
    },
    getkey3() {
      return this.b32;
    },
    getkey4() {
      return this.b15_2;
    },
    getkey5() {
      if (parseFloat(this.b37_1) == 5.5) {
        return "MS1A064A";
      }else if (parseFloat(this.b37_1) == 8) {
        return "MS1A064B";
      }else if (parseFloat(this.b37_1) == 11) {
        return "MS1A064C";
      }else if (parseFloat(this.b37_1) == 20) {
        return "MS1A094A";
      }else if (parseFloat(this.b37_1) == 26) {
        return "MS1A094B";
      }else if (parseFloat(this.b37_1) == 40) {
        return "MS1A094C";
      }else if (parseFloat(this.b37_1) == 60) {
        return "MS1B108A";
      }else if (parseFloat(this.b37_1) == 80) {
        return "MS1B108B";
      }else if (parseFloat(this.b37_1) == 120) {
        return "MS1B108C";
      }else if (parseFloat(this.b37_1) == 155) {
        return "MS1C138A";
      }else if (parseFloat(this.b37_1) == 230) {
        return "MS1C165A";
      }else if (parseFloat(this.b37_1) == 310) {
        return "MS1C138C";
      }else if (parseFloat(this.b37_1) == 330) {
        return "MS1C165B";
      }else if (parseFloat(this.b37_1) == 460) {
        return "MS1C165C";
      }else if (parseFloat(this.b37_1) == 530) {
        return "MS1C165C";
      }else {
        return "MS1C138B";
      }
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
    b14() {
      return (
        (parseFloat(this.b10) * parseFloat(this.b5)) /
        parseFloat(this.b11) /
        parseFloat(this.b12) /
        4.17
      ).toFixed(2);
    },
    b17_1() {
      return (parseFloat(this.b17) / 1000).toFixed(2);
    },
    b18_1() {
      return (parseFloat(this.b18) / 1000).toFixed(2);
    },
    b19_1() {
      return (parseFloat(this.b19) / 1000).toFixed(2);
    },
    b21_1() {
      return ((parseFloat(this.b21) * 2) / parseFloat(this.b17_1)).toFixed(2);
    },
    b22() {
      return (
        (parseFloat(this.b21) / 3.1415926 / parseFloat(this.b17_1)) *
        60
      ).toFixed(2);
    },
    b26() {
      return (parseFloat(this.b20) / parseFloat(this.b25)).toFixed(0);
    },
    b30() {
      return (
        parseFloat(this.b27) /
        parseFloat(this.b28) /
        parseFloat(this.b29)
      ).toFixed(2);
    },
    b36() {
      return (
        (parseFloat(this.b5) * parseFloat(this.b10)) /
        (parseFloat(this.b12) / 100) /
        1000
      ).toFixed(2);
    },
    b37() {
      return (
        (parseFloat(this.b5) * parseFloat(this.b10)) /
        (parseFloat(this.b11) / 100) /
        1000
      ).toFixed(2);
    },
    b37_1() {
      if(parseFloat(this.b37) <= 5.5) {
        return 5.5;
      }else if(parseFloat(this.b37) <= 8) {
        return 8;
      }else if(parseFloat(this.b37) <= 11) {
        return 11;
      }else if(parseFloat(this.b37) <= 20) {
        return 20;
      }else if(parseFloat(this.b37) <= 26) {
        return 26;
      }else if(parseFloat(this.b37) <= 40) {
        return 40;
      }else if(parseFloat(this.b37) <= 60) {
        return 60;
      }else if(parseFloat(this.b37) <= 80) {
        return 80;
      }else if(parseFloat(this.b37) <= 120) {
        return 120;
      }else if(parseFloat(this.b37) <= 155) {
        return 155;
      }else if(parseFloat(this.b37) <= 230) {
        return 230;
      }else if(parseFloat(this.b37) <= 310) {
        return 310;
      }else if(parseFloat(this.b37) <= 330) {
        return 330;
      }else if(parseFloat(this.b37) <= 460) {
        return 460;
      }else if(parseFloat(this.b37) <= 530) {
        return 530;
      }else {
        return 550;
      }
    },
    data1() {
      return [
      {
        序号: "",
        单体位号: "",
        名称: "溶液池",
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getkey2(),
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
        数量: "2",
        运行时间: "",
        主要材质: "",
        备注: "",
      },{
        序号: "",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: "2",
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
        数量: "2",
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
        数量: "2",
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
        数量: "2",
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
        数量: "",
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
        数量: "",
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
        Dimensions: this.getkey1(),
        标高: "",
        单位: "座",
        disinfectiontank: this.getkey2(),
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
        规格及型号: this.getkey3(),
        单位: "台",
        数量: this.getkey4(),
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "计量泵",
        设备类型: "机械隔膜计量泵",
        规格及型号: this.getkey5(),
        单位: "台",
        数量: "2",
        运行时间: "",
        主要材质: "",
        备注: "",
      },{
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "液压阀",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: "2",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "背压阀",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: "2",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "脉冲阻尼器",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: "2",
        运行时间: "",
        主要材质: "",
        备注: "",
      },
      {
        key: "1",
        序号: "",
        设备位号: "",
        设备工艺名称: "Y型过滤器",
        设备类型: "",
        规格及型号: "",
        单位: "台",
        数量: "2",
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
        数量: "",
        a: "",
        b: "",
        备注: "",
      },
      {
        key: "1",
        序号: "",
        仪表位号: "",
        仪表名称: "流量计",
        安装位置: "",
        规格及型号: "",
        单位: "个",
        数量: "",
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
