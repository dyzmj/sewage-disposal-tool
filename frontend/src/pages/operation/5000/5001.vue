<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="b3" :placeholder="$t('b3')" :suffix="$t('b3_u')" :disabled="false" />
                                <a-input v-model="b3_1" :placeholder="$t('b3_1')" :suffix="$t('b3_1_u')" :disabled="true" />
                                <a-input v-model="b3_2" :placeholder="$t('b3_2')" :suffix="$t('b3_2_u')" :disabled="true" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceInformation')">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/5000/5001_1.png" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceImage')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/5000/5001.png" />
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
    i18n: require('./i18n_5001'),
    data() {
        return {
            b3: '20000',
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
            return (parseFloat(this.b3) / 24).toFixed(4)
        },
        b3_2() {
            return (parseFloat(this.b3) / (24 * 60 * 60) ).toFixed(6)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>