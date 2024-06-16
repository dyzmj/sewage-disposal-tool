<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" style="width: 50%;" :suffix="$t('b3_u')" :disabled="true" />
                                    <a-input v-model="b3_1" style="width: 50%;" :suffix="$t('b3_1_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b4" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b5" :placeholder="$t('b5')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b6" :placeholder="$t('b6')" :suffix="$t('b6_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b7" :placeholder="$t('b7')" :suffix="$t('b7_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b8" :suffix="$t('b8_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b9" style="width: 50%;" :suffix="$t('b9_u')" :disabled="true" />
                                    <a-input v-model="b9_1" style="width: 50%;" :suffix="$t('b9_1_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b10" style="width: 50%;" :suffix="$t('b10_u')" :disabled="true" />
                                    <a-input v-model="b10_1" style="width: 50%;" :suffix="$t('b10_1_u')"
                                        :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceImage')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/2000/Ozone_01.png" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b12')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b13" style="width: 50%;"  :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b14" style="width: 100%;" :suffix="$t('b14_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b15" style="width: 100%;" :suffix="$t('b15_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b17" style="width: 100%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b18" style="width: 100%;" :suffix="$t('b18_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b19" style="width: 100%;" :suffix="$t('b19_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b20" style="width: 100%;" :suffix="$t('b20_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b21" style="width: 100%;" :suffix="$t('b21_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b22" style="width: 50%;" :suffix="$t('b22_u')" :disabled="true" />
                                    <a-input v-model="b22_1" style="width: 50%;" :suffix="$t('b22_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b23" style="width: 100%;" :suffix="$t('b23_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b24" style="width: 100%;" :suffix="$t('b24_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b25" style="width: 50%;" :suffix="$t('b25_u')" :disabled="true" />
                                    <a-input v-model="b25_1" style="width: 50%;" :suffix="$t('b25_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b27')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b28" style="width: 50%;" :suffix="$t('b28_u')"   :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b29" style="width: 100%;" :suffix="$t('b29_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b30')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b30" style="width: 100%;" :suffix="$t('b30_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b32')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b33" style="width: 50%;" :suffix="$t('b33_u')"   :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b34" style="width: 100%;" :suffix="$t('b34_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b35" style="width: 100%;" :suffix="$t('b35_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b36" style="width: 100%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b37')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b37" style="width: 100%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b38')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b38" style="width: 100%;" :suffix="$t('b38_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b39" style="width: 100%;" :suffix="$t('b39_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b40')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b40" style="width: 100%;" :suffix="$t('b40_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b41')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b41" style="width: 100%;" :suffix="$t('b41_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b43')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b44')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b44" style="width: 50%;" :suffix="$t('b44_u')"   :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b45" style="width: 100%;" :suffix="$t('b45_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b46')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b46" style="width: 100%;" :suffix="$t('b46_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b47')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b47" style="width: 100%;" :suffix="$t('b47_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b48')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b48" style="width: 100%;" :suffix="$t('b48_u')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b49')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b49" style="width: 100%;" :suffix="$t('b49_u')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('export')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 120px;">
                                <a-button style="margin-left: 30px;" type="primary" @click="exportComputeBook()">{{
                                    $t('exportComputeBook') }}</a-button>
                                <a-button style="margin-left: 10px" type="danger" @click="exportQuantities()">{{
                                    $t('exportQuantities') }}</a-button>
                                <a-button style="margin-left: 10px" type="dashed" @click="backHome()">{{ $t('backWork')
                                }}</a-button>
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
    i18n: require('./i18n_2003'),
    data() {
        return {
            b3: '20000',
            b4: '0.005',
            b5: '1.06',
            b7: '70',
            b9: '1',
            b9_1: '1',
            b10_1: '8',
            b13: '',
            b14: '10',
            b17: '',
            b18: '4',
            b19: '0.5',
            b21: '3',
            b22_1: '12',
            b28:'20',
            b33: '0.2',
            b35: '40',
            b36: '0.19',
            b37: '0.066',
            b38: '2',
            b44: '0.2',
            b47: '0.45',
            b48: '0.5'

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
        b3_1() {
            return (parseFloat(this.b3) / 24).toFixed(2)
        },
        b6() {
            return (parseFloat(this.b4) * parseFloat(this.b3_1) * 1.06).toFixed(2)
        },
        b8() {
            return (parseFloat(this.b6) / (parseFloat(this.b7) / 100)).toFixed(2)
        },
        b10() {
            return (parseFloat(this.b8)).toFixed(2)
        },
        b15() {
            return (parseFloat(this.b3_1) * parseFloat(this.b14) / 60).toFixed(2)
        },
        b20() {
            return (parseFloat(this.b15) / parseFloat(this.b18)).toFixed(2)
        },
        b22() {
            return (parseFloat(this.b20) / parseFloat(this.b21)).toFixed(8)
        },
        b23() {
            return (parseFloat(this.b22_1) * 0.6).toFixed(1)
        },
        b24() {
            return (parseFloat(this.b22_1) * 0.4).toFixed(1)
        },
        b25() {
            return (parseFloat(this.b22_1) * parseFloat(this.b21) * parseFloat(this.b18)).toFixed(0)
        },
        b25_1() {
            return '> 138.89 m3'
        },
        b29() {
            return (1000 * parseFloat(this.b8) / parseFloat(this.b28)).toFixed(2)
        },
        b30() {
            return (0.614 * parseFloat(this.b29)).toFixed(2)
        },
        b34() {
            return (3.14 * parseFloat(this.b33) * parseFloat(this.b33) / 4).toFixed(4)
        },
        b39() {
            return ((parseFloat(this.b38) - parseFloat(this.b36) * (Math.pow(parseFloat(this.b35), 0.333))) / parseFloat(this.b37)).toFixed(2)
        },
        b40() {
            return (this.ROUNDUP((parseFloat(this.b30) / (parseFloat(this.b39) / (parseFloat(this.b34)))), 0))
        },
        b41() {
            return (this.truncateDecimals(((parseFloat(this.b30) / (parseFloat(this.b40)))), 2))
        },
        b45() {
            return (1 / 4 * 3.14 * 0.2 * 0.2).toFixed(4)
        },
        b46() {
            return ((parseFloat(this.b30) / parseFloat(this.b40) / parseFloat(this.b34) / 10)).toFixed(2)
        },
        b49() {
            return ((parseFloat(this.b18) + parseFloat(this.b47) + parseFloat(this.b48))).toFixed(2)
        }
    },
}
</script>