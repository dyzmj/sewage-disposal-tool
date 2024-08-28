<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b3')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}' :bordered="false"
                        :body-style="{ padding: 4 }" size="small">
                        <a-form>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b4" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b5" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b6" style="width: 33%;" :disabled="true" rows="12"
                                        :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    <a-input v-model="b6_1" style="width: 33%;" :disabled="true" rows="12"
                                        :placeholder="$t('b6_1')" :suffix="$t('b6_1_u')" />
                                    <a-input v-model="b6_2" style="width: 34%;" :disabled="true" rows="12"
                                        :placeholder="$t('b6_2')" :suffix="$t('b6_2_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b7')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}' :bordered="false"
                        :body-style="{ padding: 4 }" size="small">
                        <a-form>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b11" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b11')" :suffix="$t('b11_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b9')" :suffix="$t('b9_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b10" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b10')" :suffix="$t('b10_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b11" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b11')" :suffix="$t('b11_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b12" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b12')" :suffix="$t('b12_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b13" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b13')" :suffix="$t('b13_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
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
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b15')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-form>
                        <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                            :wrapperCol="{ span: 16 }">
                            <a-input-group compact>
                                <a-input v-model="b16" style="width: 100%;" :disabled="false" :suffix="$t('b16_u')" />
                            </a-input-group>
                        </a-form-item>
                        <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 24 }"
                            :wrapperCol="{ span: 0 }">
                        </a-form-item>
                    </a-form>
                    <a-card :title="$t('b18')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}' :bordered="false"
                        :body-style="{ padding: 4 }" size="small">
                        <a-form>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b19" style="width: 100%;" :disabled="false" :suffix="$t('b19_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b20" style="width: 100%;" :disabled="false" :suffix="$t('b20_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b21" style="width: 100%;" :disabled="false" :suffix="$t('b21_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b22" style="width: 100%;" :disabled="false" :suffix="$t('b22_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b23" style="width: 100%;" :disabled="false" :suffix="$t('b23_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b24')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}' :bordered="false"
                        :body-style="{ padding: 4 }" size="small">
                        <a-form>
                            <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b25" style="width: 100%;" :disabled="false" :suffix="$t('b25_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b26" style="width: 100%;" :disabled="false" :suffix="$t('b26_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b27" style="width: 100%;" :disabled="false" :suffix="$t('b27_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b28" style="width: 100%;" :disabled="false" :suffix="$t('b28_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b29" style="width: 100%;" :disabled="false" :suffix="$t('b29_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b30')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b30" style="width: 100%;" :disabled="false" :suffix="$t('b30_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b31')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b31" style="width: 100%;" :disabled="false" :suffix="$t('b31_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b32')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b32" style="width: 100%;" :disabled="false" :suffix="$t('b32_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b33" style="width: 100%;" :disabled="false" :suffix="$t('b33_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b34" style="width: 100%;" :disabled="false" :suffix="$t('b34_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b35" style="width: 100%;" :disabled="false" :suffix="$t('b35_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b36" style="width: 100%;" :disabled="false" :suffix="$t('b36_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b37')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}' :bordered="false"
                        :body-style="{ padding: 4 }" size="small">
                        <a-form>
                            <a-form-item :label="$t('b38')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b38" style="width: 100%;" :disabled="false" :suffix="$t('b38_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b39" style="width: 100%;" :disabled="false" :suffix="$t('b39_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b40')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b40" style="width: 100%;" :disabled="false" :suffix="$t('b40_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b41')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b42')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}' :bordered="false"
                        :body-style="{ padding: 4 }" size="small">
                        <a-card :title="$t('b43')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b44')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b44" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b44_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b45" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b45_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                        <a-card :title="$t('b46')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b47')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b47" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b47_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b48')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b48" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b48_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b49')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b49" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b49_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b50')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b50" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b50_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                        <a-card :title="$t('b51')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b44')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b44" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b44_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b45" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b45_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                    </a-card>
                    <a-card :title="$t('b56')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}' :bordered="false"
                        :body-style="{ padding: 4 }" size="small">
                        <a-card :title="$t('b57')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b58')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b58" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b58_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b59')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b59" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b59_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b60" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b60_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                        <a-card :title="$t('b61')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b62" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b62_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b63')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b63" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b63_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                        <a-card :title="$t('b64')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b65')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b65" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b65_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b66')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b66" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b66_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b67')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b67" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b67_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b68')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b68" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b68_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                        <a-card :title="$t('b69')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b70')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b70" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b70_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b71')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b71" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b71_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                        <a-card :title="$t('b72')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b73')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b73" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b73_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b74')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b74" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b74_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b75')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b75" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b75_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b76')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b76" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b76_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                        <a-card :title="$t('b77')" style="margin-bottom: 24px; " :headStyle='{"font-weight": "bolder"}'
                            :bordered="false" :body-style="{ padding: 4 }" size="small">
                            <a-form>
                                <a-form-item :label="$t('b78')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b78" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b78_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b79')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b79" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b79_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b80')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b80" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b80_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b81')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b81" style="width: 100%;" :disabled="false"
                                            :suffix="$t('b81_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-form>
                        </a-card>
                    </a-card>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    components: {},
    i18n: require('./i18n_1003'),
    data() {
        return {
            b4: '20000',
            b5: '5',
            b8: '2.0',
            b9: '8',
            b10: '0.5',
            b11: '1000',
            b12: '3.0',
            b13: '1000',
            b16: '1.75',
            b19: '525',
            b20: '0.525',
            b21: '7.0',
            b22: '2.0',
            b23: '1.8375',
            b25: '4.5',
            b26: '10.0',
            b27: '7.875',
            b28: '262.5',
            b29: '3.0',
            b30: '2.0',
            b31: '1.05',
            b32: '8.4',
            b33: '2.0',
            b34: '4.2',
            b36: '17.5',
            b38: '21.88',
            b39: '350.00',
            b44: '1.80',
            b45: '2.00',
            b46: '',
            b47: '50.00',
            b48: '0.50',
            b49: '2.0',
            b50: '0.25',
            b51: '',
            b52: '7.20',
            b53: '5.0',
            b54: '1.0',
            b55: '3.0',
            b56: '',
            b57: '',
            b58: '0.0',
            b59: '3.0',
            b60: '3.0',
            b61: '',
            b62: '1.20',
            b63: '2.00',
            b64: '',
            b65: '300',
            b66: '0.50',
            b67: '2.0',
            b68: '0.25',
            b69: '',
            b70: '0.00',
            b71: '1.80',
            b72: '',
            b73: '500.00',
            b74: '0.50',
            b75: '2.0',
            b76: '0.25',
            b77: '',
            b78: '0.00',
            b79: '0.50',
            b80: '2.0',
            b81: '0.25',
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
        }

    },
    computed: {
        ...mapState('setting', ['lang']),
        b6() {
            return (parseFloat(this.b4) * (1 + parseFloat(this.b5) / 100)).toFixed(0)
        },
        b6_1() {
            return (parseFloat(this.b6) / 24).toFixed(1)
        },
        b6_2() {
            return (parseFloat(this.b6_1) / 3600).toFixed(2)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
.ant-input-suffix {
  z-index: auto !important;
}
</style>