<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b4" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                                <a-input v-model="b4_1" :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" :disabled="true" />
                                <a-input v-model="b4_2" :placeholder="$t('b4_2')" :suffix="$t('b4_2_u')" :disabled="true" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceInformation')">
                    <div>
                        <p>预沉池</p>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
                    </div>
                </a-card>
                <a-card :title="$t('referenceImage')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/1000/1002.png" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b7" :placeholder="$t('b7')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b8" :placeholder="$t('b8')" :suffix="$t('b8_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b9" :placeholder="$t('b9')" :suffix="$t('b9_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b10" :placeholder="$t('b10')" :suffix="$t('b10_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b11" :placeholder="$t('b11')" :suffix="$t('b11_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b12" :placeholder="$t('b12')" :suffix="$t('b12_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b13" :placeholder="$t('b13')" :suffix="$t('b13_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b14" style="width: 50%;" :disabled="true" rows="12" :placeholder="$t('b14')"/>
                                        <a-input v-model="b14_1" style="width: 50%;" :disabled="true" rows="12"  :placeholder="$t('b14_1')" :suffix="$t('b14_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b15')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b16" :placeholder="$t('b16')" :suffix="$t('b16_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b17" :placeholder="$t('b17')" :suffix="$t('b17_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                    <a-input v-model="b18" style="width: 50%;" :disabled="true" rows="12" :placeholder="$t('b18')" :suffix="$t('b18_u')"/>
                                    <a-input v-model="b18_1" style="width: 50%;" :disabled="true" rows="12"  :placeholder="$t('b18_1')" :suffix="$t('b18_1_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                    <a-input v-model="b19" style="width: 33%;" :disabled="true" rows="12" :placeholder="$t('b19')" :suffix="$t('b19_u')"/>
                                    <a-input v-model="b19_1" style="width: 33%;" rows="12"  :placeholder="$t('b19_1')" :suffix="$t('b19_1_u')" />
                                    <a-input v-model="b19_2" style="width: 34%;" :disabled="true" rows="12"  :placeholder="$t('b19_2')" :suffix="$t('b19_2_u')" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b20" :placeholder="$t('b20')" :suffix="$t('b20_u')" />
                            </a-form-item>
                            <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b21" :placeholder="$t('b21')" :suffix="$t('b21_u')" />
                            </a-form-item>
                            <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b22" :placeholder="$t('b22')" :suffix="$t('b22_u')" :disabled="true" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b23')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b24" :placeholder="$t('b24')" :suffix="$t('b24_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b25" :placeholder="$t('b25')" :suffix="$t('b25_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b26" :placeholder="$t('b26')" :suffix="$t('b26_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b27" :placeholder="$t('b27')" :suffix="$t('b27_u')" :disabled="true" />
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
    i18n: require('./i18n_1002'),
    data() {
        return {
            b4: '20000',
            b7: '0.2',
            b8: '30',
            b9: '0.4',
            b10: '80',
            b11: '2',
            b12: '0.3',
            b13: '2',
            b14: '2',
            b14_1: '0.3',
            b18_1: '1.5',
            b19_1: '0.75',
            b20: '0.8',
            b21: '0.3',
            b25: '1.1',
            b27: '500'
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
        b4_1() {
            return (parseFloat(this.b4) / 24).toFixed(4)
        },
        b4_2() {
            return (parseFloat(this.b4) / (24 * 60 * 60) ).toFixed(6)
        },
        b16() {
            return parseFloat(this.b7) * parseFloat(this.b8)
        },
        b17() {
            return (parseFloat(this.b4_2) / parseFloat(this.b13) / parseFloat(this.b7)).toFixed(9)
        },
        b18() {
            return (parseFloat(this.b17) / parseFloat(this.b9)).toFixed(9)
        },
        b19() {
            return (parseFloat(this.b18_1) / parseFloat(this.b14)).toFixed(2)
        },
        b19_2() {
            return (parseFloat(this.b19_1) * parseFloat(this.b14) + parseFloat(this.b14_1) * (parseFloat(this.b14) - 1)).toFixed(1)
        },
        b22() {
            return (parseFloat(this.b21) + parseFloat(this.b20) + parseFloat(this.b9)).toFixed(1)
        },
        b24() {
            return (Math.pow(parseFloat(this.b4_2) / 2 /0.4 / parseFloat(this.b19) / Math.sqrt(2*9.8), (2/3))).toFixed(9)
        },
        b26() {
            return (Math.sqrt(4 * parseFloat(this.b4_2) / 3.14 / parseFloat(this.b25))).toFixed(9)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>