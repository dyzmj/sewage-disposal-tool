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
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
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

                            <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder" :bordered="false" :body-style="{ padding: 4 }" size="small">
                                <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" style="width: 50%;" rows="12" :placeholder="$t('b10')" :suffix="$t('b10_u')" />
                                        <a-input v-model="b10_1" style="width: 50%;" rows="12" :placeholder="$t('b10_1')" :suffix="$t('b10_1_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" style="width: 50%;" rows="12" :placeholder="$t('b11')" :suffix="$t('b11_u')" />
                                        <a-input v-model="b11_1" style="width: 50%;" rows="12" :placeholder="$t('b11_1')" :suffix="$t('b11_1_u')" />
                                    </a-input-group>
                                    <a-input-group compact>
                                        <a-input v-model="b11_2" style="width: 50%;" rows="12" :placeholder="$t('b11_2')" :suffix="$t('b11_2_u')" />
                                        <a-input v-model="b11_2" style="width: 50%;" rows="12" :placeholder="$t('b11_3')" :suffix="$t('b11_3_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b13" style="width: 50%;" rows="12" :placeholder="$t('b13')" :suffix="$t('b13_u')" />
                                        <a-input v-model="b13_1" style="width: 50%;" rows="12" :placeholder="$t('b13_1')" :suffix="$t('b13_1_u')" />
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b14" style="width: 100%;" rows="12" :placeholder="$t('b14')" :suffix="$t('b14_u')" />
                                    </a-input-group>
                                </a-form-item>
                            </a-card>
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
    i18n: require('./i18n_6002'),
    data() {
        return {
            b3: '20000',
            b4: '5',
            b6: '10',
            b7: '48',
            b10: '15',
            b10_1: '3',
            b11: '15',
            b11_1: '4',
            b11_2: '3',
            b11_3: '4',
            b13: '5',
            b13_1: '5',
            b14: '1.8'
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
            return (parseFloat(this.b3) * parseFloat(this.b4) / 100 + parseFloat(this.b3))
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>