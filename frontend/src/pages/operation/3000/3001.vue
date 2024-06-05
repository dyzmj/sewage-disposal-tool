<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-tabs default-active-key="1" size="small">
            <a-tab-pane key="1" :tab="$t('tab_1')">
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
            <a-tab-pane key="2" :tab="$t('tab_2')" force-render>
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