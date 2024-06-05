<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                        <a-input v-model="b3_1" style="width: 50%;" :disabled="true" rows="12" :placeholder="$t('b3_1')" :suffix="$t('b3_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b5')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b6" style="width: 100%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b7" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b8" style="width: 100%;" :disabled="true" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b9')" :suffix="$t('b9_u')" />
                                        <a-input v-model="b9_1" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b9_1')" :suffix="$t('b9_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b10" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b10')" :suffix="$t('b10_u')" />
                                        <a-input v-model="b10_1" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
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
    i18n: require('./i18n_8001'),
    data() {
        return {
            b3: '20000',
            b4: '0.005',
            b5: '1.06',
            b7: '70',
            b9: '1',
            b9_1: '1',
            b10: '6.31'
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
            return (parseFloat(this.b3) / 24).toFixed(2)
        },
        b6() {
            return (1.06 * parseFloat(this.b4) * parseFloat(this.b3_1)).toFixed(2)
        },
        b8() {
            return (parseFloat(this.b6) / (parseFloat(this.b7)/ 100)).toFixed(2)
        },
        b10_1() {
            return 8
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>