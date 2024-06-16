<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b7')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b8')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b11" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b12" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b13" style="width: 33%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b14" style="width: 33%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b15" style="width: 33%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b16')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b18" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b19" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b20" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b21" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b22" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b23" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b24" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                </a-card>
                <a-card :title="$t('referenceImage')">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/5000/5001.png" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b25')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b26" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b27" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b28" style="width: 100%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b29" style="width: 100%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b30')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b30" style="width: 100%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b31')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b32')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b45" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b46')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b46" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b47')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b47" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b48')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b48" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b49')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b49" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b50')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b50" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b51')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b51" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b52" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b53')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b53" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b39')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <a-card :title="$t('b55')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b56" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b57')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b57" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b58')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b58" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b59')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b59" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b60" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b61')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b61" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b62" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b63')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b63" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b64')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b64" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b66')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b66" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b67')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b67" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b68')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b68" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b69')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b69" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b70')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b70" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b71')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b71" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b72')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b72" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b73')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b73" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    </a-card>
                    <a-card :title="$t('b48')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b75')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b75" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b76')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b76" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b77')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b77" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b78')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b78" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b79')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b79" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                
                    </a-card>
                    <a-card :title="$t('b51')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b75')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b75" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b76')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b76" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b77')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b77" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b78')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b78" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b79')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b79" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                
                    </a-card>
                    <a-card :title="$t('b60')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b75')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b75" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b76')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b76" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b77')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b77" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b78')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b78" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b79')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b79" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                
                    </a-card>
                    <a-card :title="$t('b64')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b75')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b75" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b76')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b76" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b77')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b77" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b78')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b78" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b79')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b79" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
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
    i18n: require('./i18n_5003'),
    data() {
        return {
            b11:'6000',
            b12:'',
            b13:'',
            b14:'6000',
            b15:'6000',
            b16:'',
            b17:'',
            b18:'25',
            b19:'',
            b20:'',
            b21:'25',
            b22:'25',
            b23:'5',
            b24:'0.8',
            b25:'',
            b26:'4',
            b27:'2',
            b28:'10',
            b29:'8.5',
            b30:'3',
            b31:'',
            b32:'',
            b33:'64',
            b34:'1',
            b35:'1.5',
            b36:'',
            b37:'1.9',
            b38:'0.555555556',
            b39:'',
            b40:'1500',
            b41:'0.7',
            b42:'0.7',
            b43:'0.850340136',
            b44:'0.7',
            b45:'0.7',
            b46:'0.850340136',
            b47:'',
            b48:'',
            b49:'1',
            b50:'2',
            b51:'',
            b52:'50',
            b53:'3.5',
            b54:'0.3',
            b55:'3.8',
            b56:'14.28571429',
            b57:'3.77964473',
            b58:'0.921052632',
            b59:'2.0216',
            b60:'',
            b61:'1.5',
            b62:'3.8',
            b63:'3.45',
            b64:'',
            b65:'800',
            b66:'0.828931995',
            b67:'',
            b68:'0.828931995',
            b69:'0.828931995',
            b70:'0.828931995',
            b71:'0.828931995',
            b72:'0.144437163',
            b73:'',
            b74:'',
            b75:'6',
            b76:'2',
            b77:'',
            b78:'0.153367142',
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
            return parseFloat(this.b4) * (1 + parseFloat(this.b5)/100)
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
</style>