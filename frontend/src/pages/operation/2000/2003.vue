<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b5" :placeholder="$t('b5')"
                                    :suffix="$t('b5_u')" value='40000' :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b6" :placeholder="$t('b6')"
                                    ::disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b7_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b7_1" :placeholder="$t('b7_1')"
                                    :suffix="$t('b7_1_u')" :disabled="false" />
                                    <a-input v-model="b7_2" :placeholder="$t('b7_2')"
                                    :suffix="$t('b7_2_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b8" :placeholder="$t('b8')"
                                    :suffix="$t('b8_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b9" :placeholder="$t('b9')"
                                    :suffix="$t('b9_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b10" :placeholder="$t('b10')"
                                    :suffix="$t('b10_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b11" :placeholder="$t('b11')"
                                    :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b12" :placeholder="$t('b12')"
                                    :suffix="$t('b12_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b13" :placeholder="$t('b13')"
                                    :suffix="$t('b13_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b14" :placeholder="$t('b14')"
                                    :suffix="$t('b14_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b15" :placeholder="$t('b15')"
                                    :suffix="$t('b15_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b16')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b5" :placeholder="$t('b5')"
                                    :suffix="$t('b5_u')" value='40000' :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b6" :placeholder="$t('b6')"
                                    ::disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b7_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b7_1" :placeholder="$t('b7_1')"
                                    :suffix="$t('b7_1_u')" :disabled="false" />
                                    <a-input v-model="b7_2" :placeholder="$t('b7_2')"
                                    :suffix="$t('b7_2_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b8" :placeholder="$t('b8')"
                                    :suffix="$t('b8_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b9" :placeholder="$t('b9')"
                                    :suffix="$t('b9_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b10" :placeholder="$t('b10')"
                                    :suffix="$t('b10_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b11" :placeholder="$t('b11')"
                                    :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b12" :placeholder="$t('b12')"
                                    :suffix="$t('b12_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b13" :placeholder="$t('b13')"
                                    :suffix="$t('b13_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b14" :placeholder="$t('b14')"
                                    :suffix="$t('b14_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b15" :placeholder="$t('b15')"
                                    :suffix="$t('b15_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b62')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b5" :placeholder="$t('b5')"
                                    :suffix="$t('b5_u')" value='40000' :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b6" :placeholder="$t('b6')"
                                    ::disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b7_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b7_1" :placeholder="$t('b7_1')"
                                    :suffix="$t('b7_1_u')" :disabled="false" />
                                    <a-input v-model="b7_2" :placeholder="$t('b7_2')"
                                    :suffix="$t('b7_2_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b8" :placeholder="$t('b8')"
                                    :suffix="$t('b8_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b9" :placeholder="$t('b9')"
                                    :suffix="$t('b9_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b10" :placeholder="$t('b10')"
                                    :suffix="$t('b10_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b11" :placeholder="$t('b11')"
                                    :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b12" :placeholder="$t('b12')"
                                    :suffix="$t('b12_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b13" :placeholder="$t('b13')"
                                    :suffix="$t('b13_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b14" :placeholder="$t('b14')"
                                    :suffix="$t('b14_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b15" :placeholder="$t('b15')"
                                    :suffix="$t('b15_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b97')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b5" :placeholder="$t('b5')"
                                    :suffix="$t('b5_u')" value='40000' :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b6" :placeholder="$t('b6')"
                                    ::disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b7_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b7_1" :placeholder="$t('b7_1')"
                                    :suffix="$t('b7_1_u')" :disabled="false" />
                                    <a-input v-model="b7_2" :placeholder="$t('b7_2')"
                                    :suffix="$t('b7_2_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b8" :placeholder="$t('b8')"
                                    :suffix="$t('b8_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b9" :placeholder="$t('b9')"
                                    :suffix="$t('b9_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b10" :placeholder="$t('b10')"
                                    :suffix="$t('b10_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b11" :placeholder="$t('b11')"
                                    :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b12" :placeholder="$t('b12')"
                                    :suffix="$t('b12_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b13" :placeholder="$t('b13')"
                                    :suffix="$t('b13_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b14" :placeholder="$t('b14')"
                                    :suffix="$t('b14_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b15" :placeholder="$t('b15')"
                                    :suffix="$t('b15_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('b118')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b5" :placeholder="$t('b5')"
                                    :suffix="$t('b5_u')" value='40000' :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b6" :placeholder="$t('b6')"
                                    ::disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b7_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b7_1" :placeholder="$t('b7_1')"
                                    :suffix="$t('b7_1_u')" :disabled="false" />
                                    <a-input v-model="b7_2" :placeholder="$t('b7_2')"
                                    :suffix="$t('b7_2_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b8" :placeholder="$t('b8')"
                                    :suffix="$t('b8_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b9" :placeholder="$t('b9')"
                                    :suffix="$t('b9_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b10" :placeholder="$t('b10')"
                                    :suffix="$t('b10_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b11" :placeholder="$t('b11')"
                                    :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b12" :placeholder="$t('b12')"
                                    :suffix="$t('b12_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b13" :placeholder="$t('b13')"
                                    :suffix="$t('b13_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b14" :placeholder="$t('b14')"
                                    :suffix="$t('b14_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b15" :placeholder="$t('b15')"
                                    :suffix="$t('b15_u')" :disabled="false" />
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
            b5: '40000',
            b6: '1.05',
            b8: '20',
            b9: '10',
            b10: '4.5',
            b11: '2',
            b13: '500',
            b14: '90',
            b15: '3',
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
        b7_1() {
            return (parseFloat(this.b5) * parseFloat(this.b6)).toFixed(0)
        },
        b7_2() {
            return (parseFloat(this.b7_1) / (24 * 60 * 60) ).toFixed(4)
        },
        b12() {
            return (parseFloat(this.b7_2) / parseFloat(this.b11)).toFixed(4)
        }
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