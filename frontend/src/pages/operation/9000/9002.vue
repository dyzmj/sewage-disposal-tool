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
          :title="$t('b0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card :title="$t('referenceImage')">
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
          :title="$t('b6_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b12_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b26_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b28_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b32_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
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
          :title="$t('b37_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b42_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b48_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b62_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
              </a-form-item>
            </a-form>
          </div>
        </a-card>
        <a-card
          :title="$t('b64_0')"
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 4 }"
        >
          <div class="baseQueryParam">
            <a-form>
              <a-form-item
                :label="$t('b1')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b1"
                    style="width: 100%;"
                    :disabled="false"
                    rows="12"
                    :placeholder="$t('b1')"
                    :suffix="$t('b1_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b2')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b2"
                    rows="12"
                    :placeholder="$t('b2')"
                    :suffix="$t('b2_u')"
                  />
                </a-input-group>
              </a-form-item>
              <a-form-item
                :label="$t('b3')"
                style="margin-top: 10px"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
              >
                <a-input-group compact>
                  <a-input
                    v-model="b3"
                    :disabled="true"
                    rows="12"
                    :placeholder="$t('b3')"
                    :suffix="$t('b3_u')"
                  />
                </a-input-group>
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

export default {
  components: {},
  i18n: require("./i18n_9002"),
  data() {
    return {
      b1: "7000",
      b2: "97",
      b6: "0.035",
      b7: "0.5",
      b8: "100",
      b9: "1",
      b10: "0.7",
      b11: "970",
      b12: "600",
      b13: "200",
      b14: "300",
      b15: "1",
      b16: "2",
      b17: "63.66197724",
      b18: "0.5",
      b19: "1000",
      b20: "2",
      b21: "2",
      b22: "0.119925646",
      b23: "0.75",
      b24: "0.6",
      b25: "0.266501436",
      b26: "JBJ1-600",
      b27: "0.55",
      b28: "0.008166667",
      b29: "8",
      b30: "2",
      b31: "437.5",
      b32: "0.008166667",
      b33: "3",
      b34: "1.5",
      b35: "2",
      b36: "0.544444444",
      b37: "2.8",
      b38: "2",
      b39: "0.8",
      b40: "1866.666667",
      b41: "7",
      b42: "2.1",
      b43: "40",
      b44: "100",
      b45: "1",
      b46: "0.525",
      b47: "970",
      b48: "600",
      b49: "200",
      b50: "300",
      b51: "1",
      b52: "2",
      b53: "63.66197724",
      b54: "0.5",
      b55: "1000",
      b56: "2",
      b57: "2",
      b58: "0.119925646",
      b59: "0.75",
      b60: "0.6",
      b61: "0.266501436",
      b62: "JBJ1-600",
      b63: "0.55",
      b64: "2100",
      b65: "1.5",
      b66: "2",
      b67: "1750",
    };
  },
  methods: {
    backHome() {
      this.$router.push("/work");
    },
    exportQuantities() {
      this.$message.warn(this.$t("exportQuantitiesNotOpen"));
    },
    exportComputeBook() {
      this.$message.warn(this.$t("exportComputeBookNotOpen"));
    },
  },
  computed: {
    ...mapState("setting", ["lang"]),
    b3() {
      return (
        parseFloat(this.b1) /
        (1 - parseFloat(this.b2) / 100) /
        1000
      ).toFixed(7);
    },
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
