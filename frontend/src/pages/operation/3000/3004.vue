<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                        <a-input v-model="b3_1" style="width: 25%;" :disabled="true" rows="12"  :placeholder="$t('b3_1')" :suffix="$t('b3_1_u')" />
                                        <a-input v-model="b3_2" style="width: 25%;" :disabled="true" rows="12"  :placeholder="$t('b3_2')" :suffix="$t('b3_2_u')" />
                                        <a-input v-model="b3_3" style="width: 25%;" :disabled="true" rows="12"  :placeholder="$t('b3_3')" :suffix="$t('b3_3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
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
                <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b7')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b13')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b19')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b21')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b35')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b44')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b49')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b53')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b56')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b62')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b67')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b86')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b94')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                    </a-input-group>
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

import { mapState } from 'vuex'

export default {
    components: {},
    i18n: require('./i18n_3004'),
    data() {
        return {
            b3: '5250',
            b4: '1.2',
            b4_1: '100',
            b5: '4',
            b5_1: '5',
            b6:'',
            b7:'',
            b8:'303.8194444',
            b9:'0.05',
            b10:'6.076388889',
            b11:'2.781492158',
            b12:'2.881492158',
            b13:'',
            b14:'6.076388889',
            b15:'0.3',
            b16:'12.89754753',
            b17:'4.052365672',
            b18:'4.152365672',
            b19:'',
            b20:'60.76388889',
            b21:'',
            b22:'74.30583451',
            b23:'9.73',
            b24:'262.5',
            b25:'276.5',
            b26:'0.5',
            b27:'193.3253966',
            b28:'83.17460336',
            b29:'4.865',
            b30:'',
            b31:'1.57742972',
            b32:'6.575140561',
            b33:'0.164378514',
            b34:'4.84',
            b35:'',
            b36:'0.6',
            b37:'50',
            b38:'1.8',
            b39:'0.695373039',
            b40:'60',
            b41:'3.466928915',
            b42:'0.464910661',
            b43:'0.657482962',
            b44:'',
            b45:'0.25',
            b46:'0.121527778',
            b47:'0.4',
            b48:'0.01113773',
            b49:'',
            b50:'4.381492158',
            b51:'1.68205668',
            b52:'6.941182836',
            b53:'',
            b54:'0.243055556',
            b55:'0.074307207',
            b56:'',
            b57:'26.64035701',
            b58:'43.34381184',
            b59:'192.5158312',
            b60:'1.62699816',
            b61:'7.226473394',
            b62:'',
            b63:'300',
            b64:'0.85963318',
            b65:'200',
            b66:'',
            b67:'45%',
            b68:'7.215073421',
            b69:'7.8',
            b70:'1.5',
            b71:'0.045572917',
            b72:'0.261652711',
            b73:'0.196239533',
            b74:'0.327065889',
            b75:'0.45',
            b76:'0.05',
            b77:'0.07421311',
            b78:'25',
            b79:'151.185706',
            b80:'',
            b81:'0.322426614',
            b82:'',
            b83:'0.091145833',
            b84:'0.7',
            b85:'0.591856061',
            b86:'',
            b87:'15',
            b88:'2500',
            b89:'2.078125',
            b90:'',
            b91:'2.016',
            b92:'100',
            b93:'',
            b94:'',
            b95:'',
            b96:'0.7',
            b97:'1.94704451',
            b98:'1.2',
            b99:'11.46',
            b100:'0.05',
            b101:'218.0508387',
            b102:'1.8',
            b103:'1.111111111',
            b104:'3',
            b105:'0.132556477',
            b106:'',
            b107:'1',
            b108:'1.666543907',
            b109:'0.56068556',
            b110:'0.186895187',
            b111:'6',
            b112:'',
            b113:'',
            b114:'1010',
            b115:'0.6',
            b116:'0.250700685',
            b117:'',
            b118:'0.3',
            b119:'1',
            b120:'0.813104813',
            b121:'0.243531715',
            b122:'',
            b123:'0.494232401',
            b124:'0.48',
            b125:'1.029650835',
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
        b3_1() {
            return (parseFloat(this.b3) / 24).toFixed(2)
        },
        b3_2() {
            return (parseFloat(this.b3_1) / 3.6).toFixed(2)
        },
        b3_3() {
            return (parseFloat(this.b3_2) / 1000).toFixed(2)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>