、<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b5')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b6')" style="margin-bottom: 24px" headStyle="font-weight: bolder" :bordered="false" :body-style="{ padding: 4 }" size="small">
                        <a-form>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b8" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b9')" style="margin-bottom: 24px" headStyle="font-weight: bolder" :bordered="false" :body-style="{ padding: 4 }" size="small">
                        <a-form>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b11" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b11')" :suffix="$t('b11_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11_1')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b11_1" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b11_1')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b13" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b13')" :suffix="$t('b13_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b14" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b14')" :suffix="$t('b14_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b15" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b15')" :suffix="$t('b15_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b16" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b16')" :suffix="$t('b16_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b17')" style="margin-bottom: 24px" headStyle="font-weight: bolder" :bordered="false" :body-style="{ padding: 4 }" size="small">
                        <p>① {{$t('b18')}}</p>
                        <p>② {{$t('b19')}}</p>
                        <p>③ {{$t('b20')}}</p>
                        <p>④ {{$t('b21')}}</p>
                        <p>⑤ {{$t('b22')}}</p>
                    </a-card>
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
    i18n: require('./i18n_7004'),
    data() {
        return {
            b8: '130.00',
            b11: '34.00',
            b11_1: '380.00', 
            b14: '5',
            b15: '0.50',
            b16: '330.00'
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
        b13() {
            return (17 * parseFloat(this.b11) / 14).toFixed(2)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style