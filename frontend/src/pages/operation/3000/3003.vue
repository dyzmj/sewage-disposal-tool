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
            <a-card
              :title="$t('b8')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b9')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b9"
                      :suffix="$t('b9_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b10')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <div class="baseQueryParam">
              <a-form>
                <a-form-item
                  :label="$t('b10')"
                  style="margin-top: 10px"
                  :labelCol="{ span: 8 }"
                  :wrapperCol="{ span: 16 }"
                >
                  <a-input
                    v-model="b10"
                    :suffix="$t('b10_u')"
                    :disabled="false"
                    style="width: 100%"
                  />
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
          :title="$t('processDesignCompute')"
          style="margin-bottom: 24px"
          :headStyle="{ 'font-weight': 'bolder' }"
          :bordered="false"
          :hoverable="true"
          :body-style="{ padding: 2, height: '820px', overflow: 'auto' }"
        >
          <a-card
            :title="$t('b16')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <a-card
              :title="$t('b17')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b24')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
              <a-card
                :title="$t('b33')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b36')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b45')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b49')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b64')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b65')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b67')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b76')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b79')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b83')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b86')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b90')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b91')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b97')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b107')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b137')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b145')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b156')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b170')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b177')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b178')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b189')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b202')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b203')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b213')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b231')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b244')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b254')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b255')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b258')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b259')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b264')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b267')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b269')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b273')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
              <a-card
                :title="$t('b275')"
                style="margin-bottom: 0px"
                :headStyle="{ 'font-weight': 'bolder' }"
                :bordered="false"
                :hoverable="true"
                size="small"
                :body-style="{ padding: 2 }"
              >
                <div class="baseQueryParam">
                  <a-form>
                    <a-form-item
                      :label="$t('b10')"
                      style="margin-top: 10px"
                      :labelCol="{ span: 8 }"
                      :wrapperCol="{ span: 16 }"
                    >
                      <a-input
                        v-model="b10"
                        :suffix="$t('b10_u')"
                        :disabled="false"
                        style="width: 100%"
                      />
                    </a-form-item>
                  </a-form>
                </div>
              </a-card>
            </a-card>
          </a-card>
          <a-card
            :title="$t('b284')"
            style="margin-bottom: 0px"
            :headStyle="{ 'font-weight': 'bolder' }"
            :bordered="false"
            :hoverable="true"
            size="small"
            :body-style="{ padding: 2 }"
          >
            <a-card
              :title="$t('b285')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b286')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b301')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b302')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b312')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b313')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b323')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b324')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b333')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b334')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b339')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b340')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b345')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b368')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b369')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b371')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b372')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b374')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b375')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b376')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b380')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b381')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b386')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b406')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b407')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b409')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b410')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
                  </a-form-item>
                </a-form>
              </div>
            </a-card>
            <a-card
              :title="$t('b412')"
              style="margin-bottom: 0px"
              :headStyle="{ 'font-weight': 'bolder' }"
              :bordered="false"
              :hoverable="true"
              size="small"
              :body-style="{ padding: 2 }"
            >
              <div class="baseQueryParam">
                <a-form>
                  <a-form-item
                    :label="$t('b10')"
                    style="margin-top: 10px"
                    :labelCol="{ span: 8 }"
                    :wrapperCol="{ span: 16 }"
                  >
                    <a-input
                      v-model="b10"
                      :suffix="$t('b10_u')"
                      :disabled="false"
                      style="width: 100%"
                    />
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
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { exportExcel3, getValueFromLocalStorage } from "@/utils/exportUtil";

export default {
  components: {},
  i18n: require("./i18n_3003"),
  data() {
    return {
      b11: "6000",
      b12: "",
      b13: "",
      b14: "6000",
      b15: "6000",
      b16: "",
      b17: "",
      b18: "25",
      b19: "",
      b20: "",
      b21: "25",
      b22: "25",
      b23: "5",
      b24: "0.8",
      b25: "",
      b26: "4",
      b27: "2",
      b28: "10",
      b29: "8.5",
      b30: "3",
      b31: "",
      b32: "",
      b33: "64",
      b34: "1",
      b35: "1.5",
      b36: "",
      b37: "1.9",
      b38: "0.555555556",
      b39: "",
      b40: "1500",
      b41: "0.7",
      b42: "0.7",
      b43: "0.850340136",
      b44: "0.7",
      b45: "0.7",
      b46: "0.850340136",
      b47: "",
      b48: "",
      b49: "1",
      b50: "2",
      b51: "",
      b52: "50",
      b53: "3.5",
      b54: "0.3",
      b55: "3.8",
      b56: "14.28571429",
      b57: "3.77964473",
      b58: "0.921052632",
      b59: "2.0216",
      b60: "",
      b61: "1.5",
      b62: "3.8",
      b63: "3.45",
      b64: "",
      b65: "800",
      b66: "0.828931995",
      b67: "",
      b68: "0.828931995",
      b69: "0.828931995",
      b70: "0.828931995",
      b71: "0.828931995",
      b72: "0.144437163",
      b73: "",
      b74: "",
      b75: "6",
      b76: "2",
      b77: "",
      b78: "0.153367142",
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
        this.b11 = 40000;
      } else {
        this.b11 = waterData;
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
        exportExcel3(allData1, allData2, allData3, "高密度沉淀池工程量", this);
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
      this.$message.warn(this.$t("exportComputeBookNotOpen"));
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
    b6() {
      return parseFloat(this.b4) * (1 + parseFloat(this.b5) / 100);
    },
    b6_1() {
      return (parseFloat(this.b6) / 24).toFixed(1);
    },
    b6_2() {
      return (parseFloat(this.b6_1) / 3600).toFixed(2);
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
