<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b3" :placeholder="$t('b3')" :suffix="$t('b3_u')" :disabled="false" />
                                <a-input v-model="b3_1" :placeholder="$t('b3_1')" :suffix="$t('b3_1_u')" :disabled="true" />
                                <a-input v-model="b3_2" :placeholder="$t('b3_2')" :suffix="$t('b3_2_u')" :disabled="true" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b7" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b8" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b9" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b10" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b11" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceInformation')">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/5000/5001.png" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceImage')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
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
                <a-card :title="$t('b14')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b15" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b16" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b17" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b18" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b19" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b20" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b21" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b22" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b23" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b24" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b25" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b26" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b27" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b28" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b30')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <a-card :title="$t('b31')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b32')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b32" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b33" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b34" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b35" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b3" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b37')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b37" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b38')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b39" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b40')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b40" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b41')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b41" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b42')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b42" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b43')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b43" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b44')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b44" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b45" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b47')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <a-card :title="$t('b48')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b49')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b49" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b50')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b50" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b51')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b51" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b52" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b53')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b53" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b54')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b54" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b55')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b56" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b57')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b57" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b58')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b58" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b59')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b59" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b60" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b61')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b61" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b62" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b63')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b63" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b64')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b64" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b65')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b65" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b66')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b66" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b67')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b67" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b68')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b68" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b69')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b69" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                </a-card>
                <a-card :title="$t('b71')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <a-card :title="$t('b72')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b49')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b49" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b50')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b50" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b51')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b51" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b52" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b53')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b53" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b54')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b54" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b83')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b56" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b57')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b57" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b58')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b58" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b59')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b59" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b60" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b61')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b61" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b62" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b63')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b63" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b64')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b64" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b65')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b65" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b66')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b66" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b67')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b67" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b68')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b68" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b69')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b69" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b95')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b56" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b57')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b57" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b58')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b58" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b59')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b59" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b60" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b61')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b61" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b62" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b63')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b63" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b64')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b64" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b65')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b65" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b66')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b66" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b67')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b67" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b68')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b68" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b69')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b69" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                </a-card>
                <a-card :title="$t('b102')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <a-card :title="$t('b102')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b103')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b103" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b104')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input v-model="b104" :placeholder="$t('b3')" :suffix="$t('b7_u')" :disabled="false" />
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
    i18n: require('./i18n_3001'),
    data() {
        return {
            b3: '20000',
            b6:'',
            b7:'2',
            b8:'2',
            b9:'3',
            b10:'10',
            b11:'0.01',
            b12:'',
            b13:'',
            b14:'',
            b15:'72',
            b16:'555.5555556',
            b17:'1666.666667',
            b18:'833.3333333',
            b19:'7.716049383',
            b20:'3.858024691',
            b21:'9.3312',
            b22:'24',
            b23:'',
            b24:'12',
            b25:'10',
            b26:'1.2',
            b27:'8.49473E-06',
            b28:'11881.18812',
            b29:'',
            b30:'',
            b31:'',
            b32:'4',
            b33:'3.8',
            b34:'0.1',
            b35:'1.157407407',
            b36:'0.2',
            b37:'28.93518519',
            b38:'',
            b39:'5',
            b40:'6',
            b41:'0.4',
            b42:'0.5',
            b43:'0.7',
            b44:'0.4',
            b45:'0.4',
            b46:'',
            b47:'',
            b48:'',
            b49:'100',
            b50:'5',
            b51:'1.9',
            b52:'98',
            b53:'1.02',
            b54:'93.1372549',
            b55:'',
            b56:'2',
            b57:'4',
            b58:'4',
            b59:'1',
            b60:'1',
            b61:'45',
            b62:'1.498805985',
            b63:'10.4916419',
            b64:'20.98328379',
            b65:'5.407060918',
            b66:'0.544',
            b67:'0.8',
            b68:'0.5',
            b69:'6.34',
            b70:'',
            b71:'',
            b72:'',
            b73:'0.3',
            b74:'4',
            b75:'6',
            b76:'41',
            b77:'243.902439',
            b78:'83.33333333',
            b79:'0.4',
            b80:'0.192901235',
            b81:'0.292901235',
            b82:'',
            b83:'注：采用90°三角堰',
            b84:'0.07',
            b85:'0.001814985',
            b86:'63.76951615',
            b87:'62.5',
            b88:'0.14',
            b89:'8.96',
            b90:'0.5',
            b91:'0.14',
            b92:'0.28',
            b93:'',
            b94:'',
            b95:'',
            b96:'0.8',
            b97:'0.222717297',
            b98:'0.535618532',
            b99:'0.8',
            b100:'0.635618532',
            b101:'',
            b102:'',
            b103:'3',
            b104:'0.179809942',
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
            return (parseFloat(this.b3) / 24).toFixed(4)
        },
        b3_2() {
            return (parseFloat(this.b3) / (24 * 60 * 60) ).toFixed(6)
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