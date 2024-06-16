<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b3" :placeholder="$t('b3')" :suffix="$t('b3_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b4" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b5" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b6" :placeholder="$t('b6')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b7" :placeholder="$t('b7')" :suffix="$t('b7_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b8" :placeholder="$t('b8')" :suffix="$t('b8_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b9" :placeholder="$t('b9')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b10" :placeholder="$t('b10')" :suffix="$t('b10_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b11" :placeholder="$t('b11')" :suffix="$t('b11_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b12" style="width: 50%;" :disabled="true" />
                                    <a-input v-model="b12_1" :prefix="$t('sel')" style="width: 50%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b13" style="width: 50%;" :disabled="true" />
                                    <a-input v-model="b13_1" :prefix="$t('sel')" style="width: 50%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b14" style="width: 100%;" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b15" style="width: 50%;" :disabled="true" />
                                    <a-input v-model="b15_1" :prefix="$t('sel')" style="width: 50%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b16" style="width: 100%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b17" style="width: 50%;" :disabled="true" />
                                    <a-input v-model="b17_1" :prefix="$t('sel')" style="width: 50%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b18" style="width: 100%;" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b19" style="width: 100%;" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b20_0')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b20" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b21" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b22" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b23" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b24" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b25" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b26" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b27" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b28" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b29" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b30')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b30" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b31')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b31" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b32')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b32" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b33" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b34" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b35" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b36" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b37')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b37" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b38')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b38" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b39" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b40')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b40" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b41')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b41" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b42')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b42" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b43')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b43" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b44')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b44" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b45" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b46_0')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b46')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b46" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b47')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b47" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b48')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b48" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b49')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b49" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b50')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b50" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b51')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b51" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b52')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b52" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b53')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b53" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b54')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b54" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b55')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b55" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b56" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b57')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b57" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b58')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b58" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b59')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b59" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b60')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b60" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b61')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b61" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b62')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b62" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b63')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b63" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b64')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b64" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b65')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b65" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b66')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b66" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b67')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b67" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b68')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b68" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b69')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b69" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b70')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b70" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b71')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b71" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b72')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b72" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b73')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b73" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b74')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input v-model="b74" :disabled="false" />
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
    i18n: require('./i18n_3002'),
    data() {
        return {
            b3: '40000',
            b4: '2',
            b5: '15',
            b6: '0.05',
            b9: '4',
            b16: '4',
            b19: '0.5',
            b30: '0.25',
            b31: '0.2',
            b32: '0.16',
            b33: '0.3',
            b34: '0.2',
            b35: '0.15',
            b36: '0.1',
            b42: '3',
            b43: '2',
            b44: '1',
            b45: '0',
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
        b7() {
            return (parseFloat(this.b3) * (1 + parseFloat(this.b6)) / 2 / 86400).toFixed(2)
        },
        b8() {
            return ((parseFloat(this.b3) * (1 + parseFloat(this.b6)) / 2 / 86400) * parseFloat(this.b5) * 60).toFixed(2)
        },
        b10() {
            return (parseFloat(this.b8) / parseFloat(this.b9)).toFixed(2)
        },
        b11() {
            return ((parseFloat(this.b3) * (1 + parseFloat(this.b6)) / 2 / 86400) / 0.12).toFixed(2)
        },
        b12() {
            return (Math.pow(parseFloat(this.b11), 0.5)).toFixed(2)
        },
        b12_1() {
            return (parseFloat(parseFloat(this.b12).toFixed(1))).toFixed(2)
        },
        b13() {
            return (parseFloat(this.b11) / parseFloat(this.b12)).toFixed(2)
        },
        b13_1(){
            return (parseFloat(parseFloat(this.b13).toFixed(1))).toFixed(2)
        },
        b14() {
            return (parseFloat(this.b12) * parseFloat(this.b13_1)).toFixed(2)
        },
        b15() {
            return (parseFloat(this.b10) / parseFloat(this.b12_1) / parseFloat(this.b13_1)).toFixed(4)
        },
        b15_1() {
            return (parseFloat(parseFloat(this.b15).toFixed(0))).toFixed(2)
        },
        b17() {
            return (parseFloat(this.b15) / parseFloat(this.b16)).toFixed(0)
        },
        b17_1() {
            return (parseFloat(this.b17)).toFixed(2)
        },
        b18() {
            return (parseFloat(this.b15_1) * parseFloat(this.b12) * parseFloat(this.b13_1) * parseFloat(this.b9) / parseFloat(this.b7) / 60).toFixed(4)
        },
        b20() {
            return (parseFloat(this.b12) * parseFloat(this.b13_1)).toFixed(4)
        },
        b21() {
            return (parseFloat(parseFloat(this.b13).toFixed(1))).toFixed(1)
        },
        b22() {
            return (Math.pow(parseFloat(this.b23), 2)).toFixed(2)
        },
        b23() {
            return 0.5
        },
        b24() {
            return 60
        },
        b25() {
            return ((parseFloat(this.b21) - parseFloat(this.b23)) * Math.tan(parseFloat(this.b24) / 180 * 3.1415) * 0.5) .toFixed(2)
        },
        b26() {
            return 0.8
        },
        b27() {
            return ((parseFloat(this.b20) + parseFloat(this.b22) + Math.sqrt(parseFloat(this.b20) * parseFloat(this.b22)) * parseFloat(this.b26)) / 3).toFixed(2)
        },
        b28() {
            return (parseFloat(this.b27) * parseFloat(this.b15_1)).toFixed(2)
        },
        b29() {
            return (parseFloat(this.b9) + parseFloat(this.b19) + parseFloat(this.b26))
        },
        b37() {
            return this.b13_1
        },
        b38() {
            return (parseFloat(this.b7) / parseFloat(this.b33) / parseFloat(this.b37)).toFixed(4)
        },
        b39() {
            return (parseFloat(this.b7) / parseFloat(this.b34) / parseFloat(this.b37)).toFixed(5)
        },
        b40() {
            return (parseFloat(this.b7) / parseFloat(this.b35) / parseFloat(this.b37)).toFixed(5)
        },
        b41() {
            return (parseFloat(this.b7) / parseFloat(this.b36) / parseFloat(this.b37)).toFixed(5)
        },
        b46() {
            return (1 * Math.pow(parseFloat(this.b30), 2) / (2 * 9.8)).toFixed(5)
        },
        b47() {
            return (1 * Math.pow(parseFloat(this.b31), 2) / (2 * 9.8)).toFixed(5)
        },
        b48() {
            return (1 * Math.pow(parseFloat(this.b32), 2) / (2 * 9.8)).toFixed(5)
        },
        b49() {
            return (1 * Math.pow(parseFloat(this.b33), 2) / (2 * 9.8)).toFixed(5)
        },
        b50() {
            return (1 * Math.pow(parseFloat(this.b34), 2) / (2 * 9.8)).toFixed(5)
        },
        b51() {
            return (3 * Math.pow(parseFloat(this.b35), 2) / (2 * 9.8)).toFixed(5)
        },
        b52() {
            return (3 * Math.pow(parseFloat(this.b36), 2) / (2 * 9.8)).toFixed(5)
        },
        b53() {
            return (parseFloat(this.b46) * parseFloat(this.b42) * parseFloat(this.b17_1)).toFixed(5)
        },
        b54() {
            return (parseFloat(this.b47) * parseFloat(this.b43) * parseFloat(this.b17_1)).toFixed(5)
        },
        b55() {
            return (parseFloat(this.b48) * parseFloat(this.b44) * parseFloat(this.b17_1)).toFixed(5)
        },
        b56() {
            return (parseFloat(this.b49) * parseFloat(this.b17_1)).toFixed(5)
        },
        b57() {
            return (parseFloat(this.b50) * parseFloat(this.b17_1)).toFixed(5)
        },
        b58() {
            return (parseFloat(this.b51) * parseFloat(this.b17_1)).toFixed(5)
        },
        b59() {
            return (parseFloat(this.b52) * parseFloat(this.b17_1)).toFixed(5)
        },
        b60() {
            return (parseFloat(this.b53) + parseFloat(this.b56)).toFixed(5)
        },
        b61() {
            return (parseFloat(this.b54) + parseFloat(this.b57)).toFixed(5)
        },
        b62() {
            return (parseFloat(this.b55) + parseFloat(this.b58)).toFixed(5)
        },
        b63() {
            return (parseFloat(this.b52) * parseFloat(this.b17_1)).toFixed(5)
        },
        b64() {
            return (parseFloat(this.b60) + parseFloat(this.b61) + parseFloat(this.b62) + parseFloat(this.b63)).toFixed(5)
        },
        b65() {
            return (parseFloat(this.b12_1) * parseFloat(this.b13_1) * parseFloat(this.b29) * parseFloat(this.b17_1) / parseFloat(this.b7) / 60).toFixed(5)
        },
        b66() {
            return (parseFloat(this.b12_1) * parseFloat(this.b13_1) * parseFloat(this.b29) * parseFloat(this.b17_1) / parseFloat(this.b7) / 60).toFixed(5)
        },
        b67() {
            return (parseFloat(this.b12_1) * parseFloat(this.b13_1) * parseFloat(this.b29) * parseFloat(this.b17_1) / parseFloat(this.b7) / 60).toFixed(5)
        },
        b68() {
            return (parseFloat(this.b12_1) * parseFloat(this.b13_1) * parseFloat(this.b29) * parseFloat(this.b17_1) / parseFloat(this.b7) / 60).toFixed(5)
        },
        b69() {
            return (Math.pow((1000 * 9.8 * parseFloat(this.b60) / (parseFloat(this.b65) * 60 * (1.029 * (Math.pow(10, -3))))), 0.5)).toFixed(4)
        },
        b70() {
            return (Math.pow((1000 * 9.8 * parseFloat(this.b61) / (parseFloat(this.b66) * 60 * (1.029 * (Math.pow(10, -3))))), 0.5)).toFixed(4)
        },
        b71() {
            return (Math.pow((1000 * 9.8 * parseFloat(this.b62) / (parseFloat(this.b67) * 60 * (1.029 * (Math.pow(10, -3))))), 0.5)).toFixed(4)
        },
        b72() {
            return (Math.pow((1000 * 9.8 * parseFloat(this.b63) / (parseFloat(this.b68) * 60 * (1.029 * (Math.pow(10, -3))))), 0.5)).toFixed(4)
        },
        b73() {
            return (Math.pow((1000 * 9.8 * parseFloat(this.b64) / (parseFloat(this.b65) + parseFloat(this.b66) + parseFloat(this.b67) + parseFloat(this.b68)) * 60 * (1.029 * (Math.pow(10, -3)))), 0.5)).toFixed(4)
        },
        b74() {
            return (parseFloat(this.b73) * (parseFloat(this.b65) + parseFloat(this.b66) + parseFloat(this.b67) + parseFloat(this.b68)) * 60).toFixed(1)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>