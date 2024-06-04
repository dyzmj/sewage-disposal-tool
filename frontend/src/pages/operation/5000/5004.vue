<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 25%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                        <a-input v-model="b3_1" style="width: 25%;" :disabled="true" rows="12"  :placeholder="$t('b3_1')" :suffix="$t('b3_1_u')" />
                                        <a-input v-model="b3_2" style="width: 25%;" :disabled="true" rows="12"  :placeholder="$t('b3_2')" :suffix="$t('b3_2_u')" />
                                        <a-input v-model="b3_3" style="width: 25%;" :disabled="true" rows="12"  :placeholder="$t('b3_3')" :suffix="$t('b3_3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" :disabled="true" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b4_1" :disabled="true" rows="12"  :placeholder="$t('b4_1')" :suffix="$t('b4_1_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                        <a-input v-model="b5" :disabled="true" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5_1')" style="margin-top: 10px" :labelCol="{ span: 5 }" :wrapperCol="{ span: 19 }">
                                <a-input-group compact>
                                    <a-input v-model="b5_1" :disabled="true" rows="12"  :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
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
    i18n: require('./i18n_5004'),
    data() {
        return {
            b3: '5250',
            b4: '1.2',
            b4_1: '100',
            b5: '4',
            b5_1: '5',
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
        b3_2() {
            return (parseFloat(this.b3_1) / 3.6).toFixed(2)
        },
        b3_3() {
            return (parseFloat(this.b3_2) / 1000).toFixed(2)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>