<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('c3_1')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="c3_1" :placeholder="$t('c3_1')"
                                    :suffix="$t('c3_1_u')" value='120000' :disabled="false" />
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
            c3_1: '40000',
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
        c3_2() {
            return (parseFloat(this.c3_1) / 24).toFixed(0)
        },
        c3_3() {
            return (parseFloat(this.c3_1) / (24 * 60 * 60) ).toFixed(2)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>