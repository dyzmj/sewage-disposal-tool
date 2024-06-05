<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b1')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b1" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b1')" :suffix="$t('b1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b2')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b2" rows="12" :placeholder="$t('b2')" :suffix="$t('b2_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b3" :disabled="true" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')"/>
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b8" rows="12" :placeholder="$t('b8')" :suffix="$t('b8_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                    <a-input-group compact>
                                        <a-input v-model="b9" rows="12" :placeholder="$t('b9')" />
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
    i18n: require('./i18n_4001'),
    data() {
        return {
            b1: '100000',
            b2: '5',
            b4: '30',
            b5: '25',
            b6: '0',
            b7: '20',
            b8: '0',
            b9: '1.5',
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
        b3() {
            return (parseFloat(this.b1) * (parseFloat(this.b2) / 100 + 1))
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>