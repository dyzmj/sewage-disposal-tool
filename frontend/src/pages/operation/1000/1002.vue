<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b4_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="b4_1" :placeholder="$t('b4_1')"
                                    :suffix="$t('b4_1_u')" value='20000' :disabled="false" />
                                <a-input v-model="b4_2" :placeholder="$t('b4_2')"
                                    :suffix="$t('b4_2_u')" :disabled="true" />
                                <a-input v-model="b4_3" :placeholder="$t('b4_3')"
                                    :suffix="$t('b4_3_u')" :disabled="true" />
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
    i18n: require('./i18n_1002'),
    data() {
        return {
            b4_1: '20000',
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
        b4_2() {
            return (parseFloat(this.b4_1) / 24).toFixed(4)
        },
        b4_3() {
            return (parseFloat(this.b4_1) / (24 * 60 * 60) ).toFixed(6)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>