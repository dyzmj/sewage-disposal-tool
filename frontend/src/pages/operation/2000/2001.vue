<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-tabs default-active-key="1" size="small">
            <a-tab-pane key="1">
                <span slot="tab">
                    <a-icon type="smile" theme="outlined" />
                    {{ $t('tab_1') }}
                </span>
                <a-row style="margin: 0 -6px">
                    <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                        <a-card :title="$t('b2')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b3_1')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                        :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b3_1" :placeholder="$t('b3_1')"
                                            :suffix="$t('b3_1_u')" value='120000' :disabled="false" />
                                        <a-input v-model="b3_2" :placeholder="$t('b3_2')"
                                            :suffix="$t('b3_2_u')" :disabled="true" />
                                        <a-input v-model="b3_3" :placeholder="$t('b3_3')"
                                            :suffix="$t('b3_3_u')" :disabled="true" />
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b6')" style="margin-bottom: 24px"  headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b7" :placeholder="$t('b7')" :suffix="$t('b7_u')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b8" :placeholder="$t('b8')" :suffix="$t('b8_u')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b9" :placeholder="$t('b9')" :suffix="$t('b9_u')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b10" :placeholder="$t('b10')" :suffix="$t('b10_u')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b11" :placeholder="$t('b11')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b12" :placeholder="$t('b12')" :suffix="$t('b12_u')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b13" :placeholder="$t('b13')" :suffix="$t('b13_u')" :disabled="false" />
                                    </a-form-item>
                                    <br>
                                    <p style="font-weight: bolder; color: red"> {{ $t('b14') }}</p>
                                </a-form>
                            </div>
                        </a-card>
                    </a-col>
                    <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                        <a-card :title="$t('b15')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b16" :placeholder="$t('b16')" :suffix="$t('b16_u')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b17" style="width: 50%;" :placeholder="$t('b17')" :suffix="$t('b17_u')" :disabled="true" />
                                        <a-input v-model="b17_1" :prefix="$t('sel')" style="width: 50%;" :placeholder="$t('b17_1')" :suffix="$t('b17_1_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b18" style="width: 50%;" :placeholder="$t('b18')" :suffix="$t('b18_u')" :disabled="true" />
                                        <a-input v-model="b18_1" :prefix="$t('sel')" style="width: 50%;" :placeholder="$t('b18_1')" :suffix="$t('b18_1_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b20')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <a-card :title="$t('b21')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b22" :placeholder="$t('b22')" :suffix="$t('b22_u')" :disabled="true" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b23" style="width: 100%;" :placeholder="$t('b23')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b24" style="width: 100%;" :placeholder="$t('b24')" :suffix="$t('b24_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b25" style="width: 100%;" :placeholder="$t('b25')" :suffix="$t('b25_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b26" style="width: 100%;" :placeholder="$t('b26')" :suffix="$t('b26_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b27" style="width: 100%;" :placeholder="$t('b27')" :suffix="$t('b27_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b28" style="width: 100%;" :placeholder="$t('b28')" :suffix="$t('b28_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b29" style="width: 100%;" :placeholder="$t('b29')" :suffix="$t('b29_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                            </a-card>
                            <a-card :title="$t('b31')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b32')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b32" :placeholder="$t('b32')" :disabled="true" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b33" style="width: 100%;" :placeholder="$t('b33')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b34" style="width: 100%;" :placeholder="$t('b34')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b35" style="width: 100%;" :placeholder="$t('b35')" :suffix="$t('b35_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b36" style="width: 100%;" :placeholder="$t('b36')" :suffix="$t('b36_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input style="width: 33%;" :suffix="$t('b39_1')" :disabled="true" />
                                        <a-input style="width: 33%;" :suffix="$t('b39_2')"  :disabled="true" />
                                        <a-input style="width: 34%;" :suffix="$t('b39_3')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b39_1" style="width: 33%;" :placeholder="$t('b39_1')" :disabled="false" />
                                        <a-input v-model="b39_2" style="width: 33%;" :placeholder="$t('b39_2')" :disabled="false" />
                                        <a-input v-model="b39_3" style="width: 34%;" :placeholder="$t('b39_3')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b40')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b40_1" style="width: 33%;" :placeholder="$t('b40')" :disabled="true" />
                                        <a-input v-model="b40_2" style="width: 33%;" :placeholder="$t('b40')" :disabled="true" />
                                        <a-input v-model="b40_3" style="width: 34%;" :placeholder="$t('b40')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b41')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b41_1" style="width: 33%;" :placeholder="$t('b41')"  :disabled="true" />
                                        <a-input v-model="b41_2" style="width: 33%;" :placeholder="$t('b41')"  :disabled="true" />
                                        <a-input v-model="b41_3" style="width: 34%;" :placeholder="$t('b41')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b42')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b42_1" style="width: 33%;" :placeholder="$t('b42')" :disabled="true" />
                                        <a-input v-model="b42_2" style="width: 33%;" :placeholder="$t('b42')" :disabled="true" />
                                        <a-input v-model="b42_3" style="width: 34%;" :placeholder="$t('b42')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                            </a-card>
                            <a-card :title="$t('b44')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b45" :placeholder="$t('b45')" :suffix="$t('b45_u')"  :disabled="true" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b46')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b46" style="width: 100%;" :placeholder="$t('b46')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b47')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b47" style="width: 100%;" :placeholder="$t('b47')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b48')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b48" style="width: 100%;" :placeholder="$t('b48')" :suffix="$t('b48_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                            </a-card>
                        </a-card>
                    </a-col>
                    <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                        <a-card :title="$t('b50')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input style="width: 33%;" :suffix="$t('b51_1')" :disabled="true" />
                                        <a-input style="width: 33%;" :suffix="$t('b51_2')"  :disabled="true" />
                                        <a-input style="width: 34%;" :suffix="$t('b51_3')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b52_1" style="width: 33%;" :placeholder="$t('b52_1')" :disabled="true" />
                                        <a-input v-model="b52_2" style="width: 33%;" :placeholder="$t('b52_2')" :disabled="true" />
                                        <a-input v-model="b52_3" style="width: 34%;" :placeholder="$t('b52_3')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b54')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b54_1" style="width: 33%;" :placeholder="$t('b54')" :disabled="true" />
                                        <a-input v-model="b54_2" style="width: 33%;" :placeholder="$t('b54')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b55')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b55_1" style="width: 33%;" :placeholder="$t('b55')" :disabled="true" />
                                        <a-input v-model="b55_2" style="width: 33%;" :placeholder="$t('b55')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b56_1" style="width: 33%;" :placeholder="$t('b56')" :disabled="true" />
                                        <a-input v-model="b56_2" style="width: 33%;" :placeholder="$t('b56')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>

                        <a-card :title="$t('b58')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input style="width: 33%;" :suffix="$t('b59_1')" :disabled="true" />
                                        <a-input style="width: 33%;" :suffix="$t('b59_2')"  :disabled="true" />
                                        <a-input style="width: 34%;" :suffix="$t('b59_3')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b60_1" style="width: 33%;" :placeholder="$t('b60')" :disabled="true" />
                                        <a-input v-model="b60_2" style="width: 33%;" :placeholder="$t('b60')" :disabled="true" />
                                        <a-input v-model="b60_3" style="width: 34%;" :placeholder="$t('b60')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b61')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b61" style="width: 33%;" :placeholder="$t('b61')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b62" style="width: 33%;" :placeholder="$t('b62')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane key="2" force-render>
                <span slot="tab">
                    <a-icon type="smile" :rotate="180" />
                    {{ $t('tab_2') }}
                </span>
                <a-row style="margin: 0 -6px">
                    <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                        <a-card :title="$t('c2')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('c3_1')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                        :wrapperCol="{ span: 14 }">
                                        <a-input v-model="c3_1" :placeholder="$t('c3_1')"
                                            :suffix="$t('b3_1_u')" value='120000' :disabled="false" />
                                        <a-input v-model="c3_2" :placeholder="$t('c3_2')"
                                            :suffix="$t('b3_2_u')" :disabled="true" />
                                        <a-input v-model="c3_3" :placeholder="$t('c3_3')"
                                            :suffix="$t('c3_3_u')" :disabled="true" />
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('c6')" style="margin-bottom: 24px"  headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('c7')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b7" :placeholder="$t('b7')" :suffix="$t('b7_u')" :disabled="false" />
                                    </a-form-item>
                                </a-form>
                                <a-form>
                                    <a-form-item :label="$t('c8')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="c8" :placeholder="$t('c8')" :suffix="$t('b8_u')" :disabled="false" />
                                    </a-form-item>
                                </a-form>
                                <a-form>
                                    <a-form-item :label="$t('c10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="c10" style="width: 33%;" :placeholder="$t('c10')" :suffix="$t('c10_u')" :disabled="false" />
                                        <a-input v-model="c10_1" style="width: 33%;" :placeholder="$t('c10_1')" :suffix="$t('c10_1_u')" :disabled="false" />
                                        <a-input v-model="c10_2" style="width: 34%;" :placeholder="$t('c10_2')" :suffix="$t('c10_2_u')" :disabled="false" />
                                    </a-form-item>
                                    <br>
                                    <p style="font-weight: bolder; color: red"> {{ $t('c12') }}</p>
                                </a-form>
                            </div>
                        </a-card>
                    </a-col>
                    <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                        <a-card :title="$t('b15')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b16" :placeholder="$t('b16')" :suffix="$t('b16_u')" :disabled="false" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b17" style="width: 50%;" :placeholder="$t('b17')" :suffix="$t('b17_u')" :disabled="true" />
                                        <a-input v-model="b17_1" :prefix="$t('sel')" style="width: 50%;" :placeholder="$t('b17_1')" :suffix="$t('b17_1_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b18" style="width: 50%;" :placeholder="$t('b18')" :suffix="$t('b18_u')" :disabled="true" />
                                        <a-input v-model="b18_1" :prefix="$t('sel')" style="width: 50%;" :placeholder="$t('b18_1')" :suffix="$t('b18_1_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b20')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <a-card :title="$t('b21')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b22" :placeholder="$t('b22')" :suffix="$t('b22_u')" :disabled="true" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b23" style="width: 100%;" :placeholder="$t('b23')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b24" style="width: 100%;" :placeholder="$t('b24')" :suffix="$t('b24_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b25" style="width: 100%;" :placeholder="$t('b25')" :suffix="$t('b25_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b26" style="width: 100%;" :placeholder="$t('b26')" :suffix="$t('b26_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b27" style="width: 100%;" :placeholder="$t('b27')" :suffix="$t('b27_u')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b28" style="width: 100%;" :placeholder="$t('b28')" :suffix="$t('b28_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b29" style="width: 100%;" :placeholder="$t('b29')" :suffix="$t('b29_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                            </a-card>
                            <a-card :title="$t('b31')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b32')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b32" :placeholder="$t('b32')" :disabled="true" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b33" style="width: 100%;" :placeholder="$t('b33')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b34" style="width: 100%;" :placeholder="$t('b34')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b35" style="width: 100%;" :placeholder="$t('b35')" :suffix="$t('b35_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b36" style="width: 100%;" :placeholder="$t('b36')" :suffix="$t('b36_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input style="width: 33%;" :suffix="$t('b39_1')" :disabled="true" />
                                        <a-input style="width: 33%;" :suffix="$t('b39_2')"  :disabled="true" />
                                        <a-input style="width: 34%;" :suffix="$t('b39_3')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b39_1" style="width: 33%;" :placeholder="$t('b39_1')" :disabled="false" />
                                        <a-input v-model="b39_2" style="width: 33%;" :placeholder="$t('b39_2')" :disabled="false" />
                                        <a-input v-model="b39_3" style="width: 34%;" :placeholder="$t('b39_3')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b40')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b40_1" style="width: 33%;" :placeholder="$t('b40')" :disabled="true" />
                                        <a-input v-model="b40_2" style="width: 33%;" :placeholder="$t('b40')" :disabled="true" />
                                        <a-input v-model="b40_3" style="width: 34%;" :placeholder="$t('b40')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b41')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b41_1" style="width: 33%;" :placeholder="$t('b41')"  :disabled="true" />
                                        <a-input v-model="b41_2" style="width: 33%;" :placeholder="$t('b41')"  :disabled="true" />
                                        <a-input v-model="b41_3" style="width: 34%;" :placeholder="$t('b41')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b42')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b42_1" style="width: 33%;" :placeholder="$t('b42')" :disabled="true" />
                                        <a-input v-model="b42_2" style="width: 33%;" :placeholder="$t('b42')" :disabled="true" />
                                        <a-input v-model="b42_3" style="width: 34%;" :placeholder="$t('b42')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                            </a-card>
                            <a-card :title="$t('b44')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input v-model="b45" :placeholder="$t('b45')" :suffix="$t('b45_u')"  :disabled="true" />
                                    </a-form-item>
                                    <a-form-item :label="$t('b46')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b46" style="width: 100%;" :placeholder="$t('b46')" :disabled="false" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b47')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b47" style="width: 100%;" :placeholder="$t('b47')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b48')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b48" style="width: 100%;" :placeholder="$t('b48')" :suffix="$t('b48_u')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                            </a-card>
                        </a-card>
                    </a-col>
                    <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                        <a-card :title="$t('b50')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input style="width: 33%;" :suffix="$t('b51_1')" :disabled="true" />
                                        <a-input style="width: 33%;" :suffix="$t('b51_2')"  :disabled="true" />
                                        <a-input style="width: 34%;" :suffix="$t('b51_3')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b52_1" style="width: 33%;" :placeholder="$t('b52_1')" :disabled="true" />
                                        <a-input v-model="b52_2" style="width: 33%;" :placeholder="$t('b52_2')" :disabled="true" />
                                        <a-input v-model="b52_3" style="width: 34%;" :placeholder="$t('b52_3')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b54')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b54_1" style="width: 33%;" :placeholder="$t('b54')" :disabled="true" />
                                        <a-input v-model="b54_2" style="width: 33%;" :placeholder="$t('b54')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b55')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b55_1" style="width: 33%;" :placeholder="$t('b55')" :disabled="true" />
                                        <a-input v-model="b55_2" style="width: 33%;" :placeholder="$t('b55')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b56_1" style="width: 33%;" :placeholder="$t('b56')" :disabled="true" />
                                        <a-input v-model="b56_2" style="width: 33%;" :placeholder="$t('b56')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>

                        <a-card :title="$t('b58')" style="margin-bottom: 24px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input style="width: 33%;" :suffix="$t('b59_1')" :disabled="true" />
                                        <a-input style="width: 33%;" :suffix="$t('b59_2')"  :disabled="true" />
                                        <a-input style="width: 34%;" :suffix="$t('b59_3')"  :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b60_1" style="width: 33%;" :placeholder="$t('b60')" :disabled="true" />
                                        <a-input v-model="b60_2" style="width: 33%;" :placeholder="$t('b60')" :disabled="true" />
                                        <a-input v-model="b60_3" style="width: 34%;" :placeholder="$t('b60')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b61')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b61" style="width: 33%;" :placeholder="$t('b61')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                        <a-input-group compact>
                                        <a-input v-model="b62" style="width: 33%;" :placeholder="$t('b62')" :disabled="true" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                    </a-col>
                </a-row>
            </a-tab-pane>
        </a-tabs>

    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    components: {},
    i18n: require('./i18n_2001'),
    data() {
        return {
            b3_1: '105000',
            b7: '20',
            b8: '4',
            b9: '3',
            b10: '3',
            b11: '1.5',
            b12: '0.2',
            b13: '0.3',
            b17_1: '14',
            b18_1: '9.5',
            b24: '3',
            b25: '4',
            b27: '0.2',
            b33: '1.1',
            b39_1: '0.5',
            b39_2: '0.35',
            b39_3: '0.2',
            b46:'0.75',
            b47:'0.7',
            c3_1: '20000',
            c7: '20',
            c8: '2',
            c10: '0.5',
            c10_1: '0.35',
            c10_2: '0.2',
        }
    },
    methods: {
        backHome() {
            this.$router.push('/work')
        },
        exportQuantities() {
            this.$message.warn(this.$t('exportQuantitiesNotOpen'))
        },
        exportComputeBook() {
            this.$message.warn(this.$t('exportComputeBookNotOpen'))
        },
        ROUNDUP(number, num_digits) {
            var multiplier = Math.pow(10, num_digits);
            return Math.ceil(number * multiplier) / multiplier;
        },
        truncateDecimals(number, digits) {
            let power = Math.pow(10, digits);
            return (Math.floor(number * power) / power);
        },
        
    },
    computed: {
        ...mapState('setting', ['lang']),
        b3_2() {
            return (parseFloat(this.b3_1) / 24).toFixed(0)
        },
        b3_3() {
            return (parseFloat(this.b3_1) / (24 * 60 * 60) ).toFixed(2)
        },
        b16() {
            return (parseFloat(this.b3_2) * parseFloat(this.b7) / 60 / parseFloat(this.b8)).toFixed(2)
        },
        b17() {
            return (parseFloat(this.b11) * parseFloat(this.b10) * parseFloat(this.b9)).toFixed(1)
        },
        b18() {
            return (parseFloat(this.b16) / parseFloat(this.b17) / parseFloat(this.b9)).toFixed(2)
        },
        b22() {
            return (parseFloat(this.b9) - parseFloat(this.b13)).toFixed(1)
        },
        b26() {
            return ((parseFloat(this.b18_1) - (parseFloat(this.b24) + 1) * parseFloat(this.b12)) / parseFloat(this.b24)).toFixed(1)
        },
        b28() {
            return (parseFloat(this.b26) * parseFloat(this.b27) * parseFloat(this.b25) * parseFloat(this.b24) / (parseFloat(this.b18_1)* parseFloat(this.b9))).toFixed(2)
        },
        b29() {
            return (parseFloat(this.b27) / parseFloat(this.b26)).toFixed(3)
        },
        b32() {
            return (parseFloat(this.b22) - parseFloat(this.b27)).toFixed(2)
        },
        b34() {
            return (parseFloat(this.b33) * 1000 / 2 / 9.81).toFixed(2)
        },
        b35() {
            return (parseFloat(this.b22) / 2).toFixed(2)
        },
        b36() {
            return (parseFloat(this.b35) - parseFloat(this.b27)).toFixed(2)
        },
        b40_1() {
            return (this.ROUNDUP((60 * parseFloat(this.b39_1) / 3.14 / parseFloat(this.b32)), 2)).toFixed(2)
        },
        b40_2() {
            return (this.ROUNDUP((60 * parseFloat(this.b39_2) / 3.14 / parseFloat(this.b32)), 2)).toFixed(2)
        },
        b40_3() {
            return (this.ROUNDUP((60 * parseFloat(this.b39_3) / 3.14 / parseFloat(this.b32)), 2)).toFixed(2)
        },
        b41_1() {
            return (2 * parseFloat(this.b39_1) / parseFloat(this.b32)).toFixed(1)
        },
        b41_2() {
            return (2 * parseFloat(this.b39_2) / parseFloat(this.b32)).toFixed(2)
        },
        b41_3() {
            return (2 * parseFloat(this.b39_3) / parseFloat(this.b32)).toFixed(2)
        },
        b42_1() {
            return ( parseFloat(this.b25) * parseFloat(this.b34) * parseFloat(this.b26) * Math.pow(parseFloat(this.b41_1), 3) * (Math.pow(parseFloat(this.b35), 4) - Math.pow(parseFloat(this.b36), 4)) / 408).toFixed(3)
        },
        b42_2() {
            return ( parseFloat(this.b25) * parseFloat(this.b34) * parseFloat(this.b26) * Math.pow(parseFloat(this.b41_2), 3) * (Math.pow(parseFloat(this.b35), 4) - Math.pow(parseFloat(this.b36), 4)) / 408).toFixed(3)
        },
        b42_3() {
            return ( parseFloat(this.b25) * parseFloat(this.b34) * parseFloat(this.b26) * Math.pow(parseFloat(this.b41_3), 3) * (Math.pow(parseFloat(this.b35), 4) - Math.pow(parseFloat(this.b36), 4)) / 408).toFixed(3)
        },
        b45() {
            return ((parseFloat(this.b42_1) + parseFloat(this.b42_2) + parseFloat(this.b42_3)) * parseFloat(this.b24)).toFixed(2)
        },
        b48() {
            return this.truncateDecimals(this.ROUNDUP((parseFloat(this.b45) / parseFloat(this.b46) / parseFloat(this.b47)), 3), 2)
        },
        b52_1() {
            return (1.75 * parseFloat(this.b41_1)).toFixed(2)
        },
        b52_2() {
            return (1.75 * parseFloat(this.b41_2)).toFixed(2)
        },
        b52_3() {
            return (1.75 * parseFloat(this.b41_3)).toFixed(2)
        },
        b54_1() {
            return (parseFloat(this.b3_3) / parseFloat(this.b8) / parseFloat(this.b52_2)).toFixed(2)
        },
        b54_2() {
            return (parseFloat(this.b3_3) / parseFloat(this.b8) / parseFloat(this.b52_3)).toFixed(2)
        },
        b55_1() {
            return (Math.pow(parseFloat(this.b54_1), 0.5)).toFixed(2)
        },
        b55_2() {
            return (Math.pow(parseFloat(this.b54_2), 0.5)).toFixed(2)
        },
        b56_1() {
            return ((parseFloat(this.b55_1)).toFixed(1) + '*' + (parseFloat(this.b55_1)).toFixed(1))
        },
        b56_2() {
            return ((parseFloat(this.b55_2)).toFixed(1) + '*' + (parseFloat(this.b55_2)).toFixed(1))
        },
        b60_1() {
            return (Math.sqrt((102 * parseFloat(this.b42_1) * parseFloat(this.b24)) * 1000000 * 3 / 102 / parseFloat(this.b16))).toFixed(2)
        },
        b60_2() {
            return (Math.sqrt(parseFloat(this.b42_2)  * 1000000 * 3 / parseFloat(this.b16))).toFixed(2)
        },
        b60_3() {
            return (Math.sqrt(parseFloat(this.b42_3)  * 1000000 * 3 / parseFloat(this.b16))).toFixed(2)
        },
        b61() {
            return (Math.sqrt(parseFloat(this.b45)  * 1000000 / parseFloat(this.b16))).toFixed(2)
        },
        b62() {
            return (parseFloat(this.b61) * parseFloat(this.b7) * 60).toFixed(2)
        },
        c3_2() {
            return (parseFloat(this.c3_1) / 24).toFixed(0)
        },
        c3_3() {
            return (parseFloat(this.c3_1) / (24 * 60 * 60) ).toFixed(2)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>