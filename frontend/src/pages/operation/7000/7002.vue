<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12"
                                        :placeholder="$t('b3')" :suffix="$t('b3_u')" />
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
                    <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-card :title="$t('b7')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b8" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b3_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b9" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b9_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b10')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b11" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b11_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b12" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b12_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b13" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b13_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b14" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b14_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b15')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b16" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b16_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b17')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b17" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b17_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b18" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b18_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b19" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b19_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b20" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b20_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b21" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b21_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b22" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b22_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b23" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b23_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b24')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b25" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b25_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b26" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b26_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b27" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b27_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b28" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b28_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b29')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b29" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b29_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b30')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b31')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b31" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b31_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b32')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b32" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b32_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b33" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b33_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b34" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b34_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b35')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b35" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b35_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b36" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b36_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b37')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b37" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b37_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b38')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b38" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b38_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b39')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b39" style="width: 100%;" :disabled="false"
                                                :suffix="$t('b39_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                    </a-card>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b5')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b41')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-card :title="$t('b42')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b42')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b42" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b42_u')" />
                                            <a-input v-model="b43" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b42_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b44')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b45')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b45" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b45_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b46')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b46" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b46_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b47')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b47" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b47_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b48')" style="margin-top: 10px;" :labelCol="{ span: 24 }"
                                        :wrapperCol="{ span: 0 }">
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b49')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b50')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b50" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b50_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                    </a-card>
                    <a-card :title="$t('b51')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-card :title="$t('b52')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b53')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b53" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b53_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b54')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b54" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b54_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b55')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b55" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b55_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b56')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b56" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b56_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
                        <a-card :title="$t('b57')" style="margin-bottom: 24px" :bordered="false"
                            :body-style="{ padding: 4 }">
                            <div class="baseQueryParam">
                                <a-form>
                                    <a-form-item :label="$t('b58')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b58" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b58_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                    <a-form-item :label="$t('b59')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                        :wrapperCol="{ span: 16 }">
                                        <a-input-group compact>
                                            <a-input v-model="b59" style="width: 50%;" :disabled="false"
                                                :suffix="$t('b59_u')" />
                                        </a-input-group>
                                    </a-form-item>
                                </a-form>
                            </div>
                        </a-card>
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
    i18n: require('./i18n_7002'),
    data() {
        return {
            b3: '20000',
            b8: '15',
            b9: '3000',
            b11: '2',
            b12: '400',
            b13: '81.25',
            b14: '481.25',
            b16: '1.45',
            b17: '1208.33',
            b18: '5',
            b19: '875',
            b20: '1',
            b21: '2',
            b22: '20',
            b23: '144',
            b25: '4.0',
            b26: '0.2',
            b27: '954.01',
            b28: '190.80',
            b29: '3816.05',
            b31: '2',
            b32: '1908.03',
            b33: '477.01',
            b33_1: '0.50',
            b34: '37.5',
            b35: '12.7',
            b35_1: '18.75',
            b36: '4.5',
            b37: '3.75',
            b38: '1.00',
            b39: '4.2',
            b42: '1312.5',
            b43: '0.36',
            b45: '0.15',
            b46: '0.42',
            b47: '2.19',
            b50: '0.9',
            b53: '1406.25',
            b54: '1.69',
            b55: '0.68',
            b56: '1.15',
            b58: '0.8',
            b59: '55.06',
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
    }
}
</script>

<style lang="less">.calc {
    margin-bottom: 15px;
}</style>