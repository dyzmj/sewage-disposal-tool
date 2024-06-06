<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b3" :placeholder="$t('b3')" :suffix="$t('b3_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b4" :placeholder="$t('b4')" :suffix="$t('b4_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b5" :placeholder="$t('b5')" :suffix="$t('b5_u')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b6" :placeholder="$t('b6')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b7" :placeholder="$t('b7')" :suffix="$t('b7_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b8')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b8" :placeholder="$t('b8')" :suffix="$t('b8_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b9" :placeholder="$t('b9')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b10" :placeholder="$t('b10')" :suffix="$t('b10_u')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="b11" :placeholder="$t('b11')" :suffix="$t('b11_u')" :disabled="true" />
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
    i18n: require('./i18n_3002'),
    data() {
        return {
            b3: '40000',
            b4: '2',
            b5: '15',
            b6: '0.05',
            b9: '4',
            b16: '4',
            b19: '0.5',
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
        b7() {
            return (parseFloat(this.b3) * (1 + parseFloat(this.b6)) / 2 / 86400).toFixed(2)
        },
        b8() {
            return ((parseFloat(this.b3) * (1 + parseFloat(this.b6)) / 2 / 86400) * parseFloat(this.b5) * 60).toFixed(2)
        },
        b10() {
            return (parseFloat(this.b8) / parseFloat(this.b9)).toFixed(2)
        },
        b11() {
            return ((parseFloat(this.b3) * (1 + parseFloat(this.b6)) / 2 / 86400) / 0.12).toFixed(2)
        }
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>