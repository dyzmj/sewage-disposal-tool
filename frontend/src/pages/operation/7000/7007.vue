<template>
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
                                    <a-input v-model="b5_1" style="width: 50%;" :disabled="true" rows="12" :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
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
                <a-card :title="$t('b6')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
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
                                        <a-input v-model="b9" style="width: 100%;" :disabled="false" :suffix="$t('b9_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b10" style="width: 100%;" :disabled="false" :suffix="$t('b10_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b11" style="width: 50%;" :disabled="false" :suffix="$t('b11_u')" />
                                        <a-input v-model="b11_1" style="width: 50%;" :disabled="false" :suffix="$t('b11_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
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
    i18n: require('./i18n_7007'),
    data() {
        return {
            b3: '20000.00',
            b4: '1',
            b4_1: '1',
            b7:'35',
            b8:'2',
            b9:'0.5',
            b10:'29.16666667',
            b11:'2.8',
            b11_1:'3',
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
.ant-input-suffix {
  z-index: auto !important;
}
</style>