<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b3')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b4" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="b5" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b6" style="width: 33%;" :disabled="true" rows="12" :placeholder="$t('b6')" :suffix="$t('b6_u')" />
                                        <a-input v-model="b6_1" style="width: 33%;" :disabled="true" rows="12"  :placeholder="$t('b6_1')" :suffix="$t('b6_1_u')" />
                                        <a-input v-model="b6_2" style="width: 34%;" :disabled="true" rows="12"  :placeholder="$t('b6_2')" :suffix="$t('b6_2_u')" />
                                    </a-input-group>
                            </a-form-item>
                            

                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b7')" style="margin-bottom: 0px" headStyle="font-weight: bolder"  :bordered="false" :hoverable="true" size="small"
                        :body-style="{ padding: 2 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b4" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b5" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                        </a-form>
                    </div>
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
    i18n: require('./i18n_5002'),
    data() {
        return {
            b4: '20000',
            b5: '5',
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
        b6() {
            return parseFloat(this.b4) * (1 + parseFloat(this.b5)/100)
        },
        b6_1() {
            return (parseFloat(this.b6) / 24).toFixed(1)
        },
        b6_2() {
            return (parseFloat(this.b6_1) / 3600).toFixed(2)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>