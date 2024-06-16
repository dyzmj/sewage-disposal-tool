、<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                        <a-input v-model="b4_1" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b4_1')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b5" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    <a-input v-model="b5_1" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
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
                <a-card :title="$t('b7')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b8')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 100%;" :disabled="false" :suffix="$t('b9_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b10" style="width: 33%;" :disabled="false" :suffix="$t('b10_u')" />
                                        <a-input v-model="b10_1" style="width: 33%;" :disabled="true" :suffix="$t('b10_1_u')" />
                                        <a-input v-model="b10_2" style="width: 34%;" :disabled="true" :suffix="$t('b10_2_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b11" style="width: 50%;" :disabled="false" :suffix="$t('b11_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b12" style="width: 50%;" :disabled="false" :suffix="$t('b12_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b13" style="width: 50%;" :disabled="false" :suffix="$t('b13_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b14" style="width: 50%;" :disabled="false" :suffix="$t('b14_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b15" style="width: 50%;" :disabled="false" :suffix="$t('b15_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b16" style="width: 50%;" :disabled="false" :suffix="$t('b16_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b17" style="width: 50%;" :disabled="false" :suffix="$t('b17_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b18" style="width: 50%;" :disabled="false" :suffix="$t('b18_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                </a-card>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
            </a-col>
        </a-row>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    components: {},
    i18n: require('./i18n_7006'),
    data() {
        return {
            b3: '20000.00',
            b4: '1',
            b4_1: '1',
            b9:'2.00 ',
            b10:'1.67',
            b10_1:'1666.67',
            b10_2:'2000',
            b11:'0.65',
            b12:'0.70',
            b13:'1.55',
            b14:'0.30',
            b15:'5.16',
            b16:'1.30',
            b17:'0.80',
            b18:'8.74',
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
            return (parseFloat(this.b3) / 24 + parseFloat(this.b4) / parseFloat(this.b4_1)).toFixed(2)
        },
        b5_1() {
            return (parseFloat(this.b5) / 3600).toFixed(2)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>