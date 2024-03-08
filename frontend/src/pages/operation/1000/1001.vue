<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b3_1" :placeholder="$t('b3_1')"
                                    :suffix="$t('b3_1_u')" value='120000' :disabled="false" />
                                <a-input v-model="b3_2" :placeholder="$t('b3_2')"
                                    :suffix="$t('b3_2_u')" :disabled="true" />
                                <a-input v-model="b3_3" :placeholder="$t('b3_3')"
                                    :suffix="$t('b3_3_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b4')" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b4" :placeholder="$t('b4')" :suffix="$t('b4_u')" value="1" />
                            </a-form-item>
                            <a-form-item :label="$t('b5')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b5" rows="4" :placeholder="$t('b5')"
                                    :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6_1')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b6_1" rows="4" :placeholder="$t('b6_1')" :suffix="$t('b6_1_u')" :disabled="false" />
                                <a-input v-model="b6_2" rows="4" :placeholder="$t('b6_2')" :suffix="$t('b6_2_u')" :disabled="true" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceInformation')">
                    <div>
                        <p>陶粒生物</p>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
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
    i18n: require('./i18n_1001'),
    data() {
        return {
            b3_1: '120000',
            b4: '5',
            b5: '72',
            b6_1: '6'
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
        b3_2() {
            return (parseFloat(this.b3_1) / 24).toFixed(0)
        },
        b3_3() {
            return (parseFloat(this.b3_1) / (24 * 60 * 60) ).toFixed(6)
        },
        b6_2() {
            return (parseFloat(this.b6_1) / (60) ).toFixed(1)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>