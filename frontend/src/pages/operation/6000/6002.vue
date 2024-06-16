<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>

                            <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                :bordered="false" :body-style="{ padding: 4 }" size="small">
                                <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                            :suffix="$t('b10_u')" />
                                        <a-input v-model="b10_1" style="width: 50%;" rows="12" :placeholder="$t('b10_1')"
                                            :suffix="$t('b10_1_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                            :suffix="$t('b11_u')" />
                                        <a-input v-model="b11_1" style="width: 50%;" rows="12" :placeholder="$t('b11_1')"
                                            :suffix="$t('b11_1_u')" />
                                    </a-input-group>
                                    <a-input-group compact>
                                        <a-input v-model="b11_2" style="width: 50%;" rows="12" :placeholder="$t('b11_2')"
                                            :suffix="$t('b11_2_u')" />
                                        <a-input v-model="b11_2" style="width: 50%;" rows="12" :placeholder="$t('b11_3')"
                                            :suffix="$t('b11_3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                            :suffix="$t('b13_u')" />
                                        <a-input v-model="b13_1" style="width: 50%;" rows="12" :placeholder="$t('b13_1')"
                                            :suffix="$t('b13_1_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                            :suffix="$t('b14_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-card>
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
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b16')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b17')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
                    </a-card>
                    <a-card :title="$t('b30')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
                    </a-card>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b16')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b40')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-card :title="$t('b41')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
                        </a-card>
                        <a-card :title="$t('b45')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
                        </a-card>
                        <a-card :title="$t('b58')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
                        </a-card>
                        <a-card :title="$t('b60')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
                        </a-card>
                        <a-card :title="$t('b70')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
                        </a-card>
                        <a-card :title="$t('b76')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                            <a-form>
                                <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                            :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                    :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                                </a-form-item>

                                <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder"
                                    :bordered="false" :body-style="{ padding: 4 }" size="small">
                                    <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')"
                                                :suffix="$t('b10_u')" />
                                            <a-input v-model="b10_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')"
                                                :suffix="$t('b11_u')" />
                                            <a-input v-model="b11_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                        </a-input-group>
                                        <a-input-group compact>
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                            <a-input v-model="b11_2" style="width: 50%;" rows="12"
                                                :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')"
                                                :suffix="$t('b13_u')" />
                                            <a-input v-model="b13_1" style="width: 50%;" rows="12"
                                                :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-card>
                            </a-form>
                        </div>
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
    i18n: require('./i18n_6002'),
    data() {
        return {
            b3: '20000',
            b4: '5',
            b6: '10',
            b7: '48',
            b10: '15',
            b10_1: '3',
            b11: '15',
            b11_1: '4',
            b11_2: '3',
            b11_3: '4',
            b13: '5',
            b13_1: '5',
            b14: '1.8',
            b16: '',
            b17: '',
            b18: '23.9',
            b19: '87.86610879',
            b20: '2',
            b21: '2',
            b22: '21.9665272',
            b23: '3',
            b24: '9',
            b25: '3',
            b26: '54',
            b27: '108',
            b28: '8.135750814',
            b29: '16.27150163',
            b30: '',
            b31: '0.3',
            b32: '1.2',
            b33: '0.1',
            b34: '1.5',
            b35: '0.2',
            b36: '0.9',
            b37: '0.4',
            b38: '4.6',
            b39: '',
            b40: '',
            b41: '',
            b42: '972',
            b43: '349.92',
            b44: '1321.92',
            b45: '',
            b46: '400',
            b47: '2.148591732',
            b48: '',
            b49: '1',
            b50: '0.27',
            b51: '10',
            b52: '20',
            b53: '0.9',
            b54: '0.0135',
            b55: '0.1×0.1',
            b56: '0.01',
            b57: '1.35',
            b58: '',
            b59: '48.6',
            b60: '',
            b61: '300',
            b62: '11.4591559',
            b63: '',
            b64: '20',
            b65: '10',
            b66: '0.081',
            b67: '0.00405',
            b68: '0.07180961',
            b69: '145.8',
            b70: '按气水同时反冲洗的情况设计',
            b71: '0.162',
            b72: '0.81',
            b73: '1.5',
            b74: '5',
            b75: '0.27',
            b76: '',
            b77: '878.6610879',
            b78: '500',
            b79: '1.243051159',
            b80: '',
            b81: '',
            b82: '',
            b83: '0.4',
            b84: '1.5',
            b85: '0.4',
            b86: '1',
            b87: '0.6',
            b88: '0.4',
            b89: '0.0135',
            b90: '',
            b91: '0.5',
            b92: '1.4',
            b93: '1.9',
            b94: '0.055555556',
            b95: '',
            b96: '0.5',
            b97: '0.4',
            b98: '0.9',
            b99: '2.2',
            b100: '0.36',
            b101: '0.163636364',
            b102: '0.013',
            b103: '5.424257212',
            b104: '1.952732596',
            b105: '0.049357625',
            b106: '',
            b107: '',
            b108: '0.8',
            b109: '0.305090656',
            b110: '1',
            b111: '0.305090656',
            b112: '0.3',
            b113: '0.5',
            b114: '',
            b115: '878.6610879',
            b116: '',
            b117: '',
            b118: '0.05',
            b119: '0.385038729',
            b120: '0.153338704',
            b121: '0.5',
            b122: '0.4',
            b123: '0.4',
            b124: '0.289625032',
            b125: '',
            b126: '',
            b127: '',
            b128: '3',
            b129: '0.125041222',
            b130: '',
            b131: '',
            b132: '0.6',
            b133: '0.6',
            b134: '7',
            b135: '0.35',
            b136: '0.581125058',
            b137: '',
            b138: '0.161538462',
            b139: '0.000648721',
            b140: '0.002270524',
            b141: '0.352270524',
            b142: '',
            b143: '0.025',
            b144: '60',
            b145: '0.029452431',
            b146: '0.15',
            b147: '0.217067195',
            b148: '9',
            b149: '0.049721196',
            b150: '45°',
            b151: '0.6',
            b152: '0.400278804',
            b153: '0.183211609',
            b154: '',
            b155: '1173×620',
            b156: '24',
            b157: '48',
            b158: '1152',
            b159: '2304',
            b160: '1.235',
            b161: '2.36',
            b162: '21.33333333',
            b163: '0.013056',
            b164: '0.164852561',
            b165: '',
            b166: '4.4',
            b167: '',
            b168: '0.4',
            b169: '2.149681529',
            b170: '40',
            b171: '0.650899638',
            b172: '1.77',
            b173: '0.22',
            b174: '0',
            b175: '1.1682',
            b176: '1.5',
            b177: '9.709099638',
            b178: '12',
            b179: '972',
            b180: '',
            b181: '',
            b182: '1.2',
            b183: '4.4',
            b184: '48.6',
            b185: '',
            b186: '',
            b187: '0.1',
            b188: '0.0101',
            b189: '981',
            b190: '0.5',
            b191: '120',
            b192: '0.277777778',
            b193: '0.8',
            b194: '1.544342508',
            b195: '',
            b196: '0.3',
            b197: '0.22',
            b198: '0.52',
            b199: '2',
            b200: '2',
            b201: '0.3',
            b202: '2.7',
            b203: '439.3305439',
            b204: '0.103219255',
            b205: '0.623219255',
            b206: '',
            b207: '38.88',
            b208: '81',
            b209: '87.48',
            b210: '160.72',
            b211: '2',
            b212: '10',
            b213: '8.036',
            b214: '7.4',
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
        b5() {
            return (parseFloat(this.b3) * parseFloat(this.b4) / 100 + parseFloat(this.b3))
        },
    }
}
</script>

<style lang="less">
.calc {
    margin-bottom: 15px;
}
</style>