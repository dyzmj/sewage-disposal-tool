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
                        </a-card>
                    </a-col>
                    <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                    
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
                                </a-form>
                            </div>
                        </a-card>
                    </a-col>
                    <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                    
                    </a-col>
                    <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                    
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
    i18n: require('./i18n_3001'),
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
        }
        
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