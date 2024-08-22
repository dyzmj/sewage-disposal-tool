<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
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
                <a-card :title="$t('b5')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b7" style="width: 100%;" :disabled="false" :suffix="$t('b7_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b8" style="width: 100%;" :disabled="false" :suffix="$t('b8_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" :suffix="$t('b9_u')" />
                                        <a-input v-model="b9_1" style="width: 50%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b10" style="width: 100%;" :disabled="false" :suffix="$t('b10_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b11" style="width: 100%;" :disabled="false" :suffix="$t('b11_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b12" style="width: 100%;" :disabled="false" :suffix="$t('b12_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b14" style="width: 100%;" :disabled="false" :suffix="$t('b14_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b15" style="width: 100%;" :disabled="false" :suffix="$t('b15_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b16" style="width: 100%;" :disabled="false" :suffix="$t('b16_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b17" style="width: 100%;" :disabled="false" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b18" style="width: 100%;" :disabled="false" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b19" style="width: 100%;" :disabled="false" :suffix="$t('b19_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b20" style="width: 100%;" :disabled="false" :suffix="$t('b20_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>    
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b5')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-card :title="$t('b22')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b23" style="width: 100%;" :disabled="false" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b24" style="width: 50%;" :disabled="false" :suffix="$t('b24_u')" />
                                        <a-input v-model="b24_1" style="width: 50%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b25" style="width: 100%;" :disabled="false" :suffix="$t('b25_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b26" style="width: 100%;" :disabled="false" :suffix="$t('b26_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b27" style="width: 100%;" :disabled="false" :suffix="$t('b27_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                            </a-form-item>
                            <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b29" style="width: 100%;" :disabled="false" :suffix="$t('b29_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b30')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b30" style="width: 100%;" :disabled="false" :suffix="$t('b30_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b31')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b31" style="width: 100%;" :disabled="false" :suffix="$t('b31_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b32')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b32" style="width: 100%;" :disabled="false" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b33" style="width: 100%;" :disabled="false" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b34" style="width: 100%;" :disabled="false" :suffix="$t('b34_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b35" style="width: 100%;" :disabled="false" :suffix="$t('b35_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>    
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
    i18n: require('./i18n_8001'),
    data() {
        return {
            b3: '20000',
            b7:'10',
            b8:'5',
            b9_1:'1000',
            b10:'2',
            b11:'1',
            b13:'',
            b14:'1',
            b17:'0.85',
            b18:'1.5',
            b23:'1.60',
            b24_1:'1500',
            b25:'3',
            b26:'1',
            b28:'',
            b29:'1',
            b32:'0.85',
            b33:'1.5',
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
        b9() {
            return (( 1 + parseFloat(this.b8)/100 + parseFloat(this.b7)/100) * parseFloat(this.b3) / 24).toFixed(2)
        },
        b12() {
            return (parseFloat(this.b9_1) / 2).toFixed(0)
        },
        b15() {
            return (parseFloat(this.b12) * 1000 / 3600).toFixed(2)
        },
        b16() {
            return 50
        },
        b19() {
            return this.truncateDecimals((parseFloat(this.b16) * parseFloat(this.b14) * parseFloat(this.b15) / 102 / parseFloat(this.b17)), 2)
        },
        b20() {
            return (parseFloat(this.b18) * parseFloat(this.b14) * parseFloat(this.b15) * parseFloat(this.b16) / 102 / parseFloat(this.b17)).toFixed(2)
        },
        b24() {
            return (parseFloat(this.b23) * parseFloat(this.b3) / 24).toFixed(2)
        },
        b27() { 
            return (parseFloat(this.b24_1) / 2).toFixed(0)
        },
        b30() {
            return (parseFloat(this.b27) * 1000 / 3600).toFixed(2)
        },
        b31() {
            return 50
        },
        b34() {
            return this.truncateDecimals((parseFloat(this.b31) * parseFloat(this.b29) * parseFloat(this.b30) / 102 / parseFloat(this.b32)), 2)
        },
        b35() {
            return (parseFloat(this.b33) * parseFloat(this.b29) * parseFloat(this.b30) * parseFloat(this.b31) / 102 / parseFloat(this.b32)).toFixed(2)
        },

    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>