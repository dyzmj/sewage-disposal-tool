<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 33%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                        <a-input v-model="b3_1" style="width: 33%;" :disabled="true" rows="12" :placeholder="$t('b3_1')" :suffix="$t('b3_1_u')" />
                                        <a-input v-model="b3_2" style="width: 34%;" :disabled="true" rows="12" :placeholder="$t('b3_2')" :suffix="$t('b3_2_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b8" style="width: 50%;" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                        <a-input v-model="b8_1" :disabled="true" style="width: 50%;" rows="12" :placeholder="$t('b8_1')" :suffix="$t('b8_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" rows="12" :placeholder="$t('b9')" :suffix="$t('b9_u')" />
                                        <a-input v-model="b9_1" :disabled="true" style="width: 50%;" rows="12" :placeholder="$t('b9_1')" :suffix="$t('b9_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b10')" :suffix="$t('b10_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b11')" :suffix="$t('b11_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11_1')" style="margin-top: 1e0px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11_1" :disabled="true" rows="12" :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" :disabled="true" rows="12" :placeholder="$t('b12')" :suffix="$t('b12_u')" />
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
    i18n: require('./i18n_6001'),
    data() {
        return {
            b3: '125000',
            b4: '6',
            b5: '0.5',
            b6: '1.5',
            b7: '24',
            b8: '30',
            b9: '6',
            b10: '0.5',
            b11: '1.14',
            b11_1: '15',
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
            return (parseFloat(this.b3) / 24).toFixed(6)
        },
        b3_2() {
            return (parseFloat(this.b3_1) / 3600).toFixed(6)
        },
        b8_1() {
            return (parseFloat(this.b8) / 60).toFixed(1)
        },
        b9_1() {
            return (parseFloat(this.b9) / 60).toFixed(1)
        },
        b12() {
            return (0.9 * parseFloat(this.b6) * parseFloat(this.b5)).toFixed(3)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>