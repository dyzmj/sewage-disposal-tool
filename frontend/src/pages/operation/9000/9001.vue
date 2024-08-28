<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')"
                                        :suffix="$t('b3_u')" />
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
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
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
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b10_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')"
                                        :suffix="$t('b3_u')" />
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
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b18_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')"
                                        :suffix="$t('b3_u')" />
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
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b26_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')"
                                        :suffix="$t('b3_u')" />
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
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b47_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')"
                                        :suffix="$t('b3_u')" />
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
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b56_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')"
                                        :suffix="$t('b3_u')" />
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
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b67_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')"
                                        :suffix="$t('b3_u')" />
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
                                    <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
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

import { mapState } from 'vuex'

export default {
    components: {},
    i18n: require('./i18n_9001'),
    data() {
        return {
            b1: '100000',
            b2: '5',
            b4: '30',
            b5: '25',
            b6: '0',
            b7: '20',
            b8: '0',
            b9: '1.5',
            b10: '500',
            b11: '4',
            b12: '10',
            b13: '12.5',
            b14: '5',
            b15: '2',
            b16: '1',
            b17: '10.42',
            b18: '250',
            b19: '4',
            b20: '7.9',
            b21: '7.91',
            b22: '2.5',
            b23: '2',
            b24: '1',
            b25: '5.21',
            b26: '0.992',
            b27: '0.97',
            b28: '8',
            b29: '24',
            b30: '297.9375',
            b31: '14',
            b32: '2',
            b33: '149',
            b34: '4.89',
            b35: '0.3',
            b36: '3',
            b37: '24',
            b38: '0.3',
            b39: '0.05',
            b40: '1',
            b41: '2.4',
            b42: '0.29',
            b43: '0.999703605',
            b44: '55',
            b45: '238.35',
            b46: '',
            b47: '50',
            b48: '2.5',
            b49: '5',
            b50: '4',
            b51: '2.5',
            b52: '',
            b53: '7150.5',
            b54: '0.97',
            b55: '238.35',
            b56: '0.8',
            b57: '35.7525',
            b58: '0.6',
            b59: '8',
            b60: '4.4690625',
            b61: '2',
            b62: '1',
            b63: '2.23453125',
            b64: '2',
            b65: '1',
            b66: '3.125',
            b67: '0.6',
            b68: '17.87625',
            b69: '1.6',
            b70: '2',
            b71: '1',
            b72: '3',
            b73: '30',
            b74: '1.1',
            b75: '218',
            b76: '2',
            b77: '1',
            b78: '50',
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
        b3() {
            return (parseFloat(this.b1) * (parseFloat(this.b2) / 100 + 1))
        },
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