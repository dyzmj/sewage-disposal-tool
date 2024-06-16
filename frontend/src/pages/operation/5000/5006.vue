<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b4" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b5" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b6')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b6" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b7')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b7" rows="12" :placeholder="$t('b7')" :suffix="$t('b7_u')" />
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
                <a-card :title="$t('b8')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    <a-card :title="$t('b13')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b19')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b24')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <a-card :title="$t('b25')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b29')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b35')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                    <a-card :title="$t('b42')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b10" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b11" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 10 }" :wrapperCol="{ span: 14 }">
                                    <a-input-group compact>
                                        <a-input v-model="b12" rows="12" :placeholder="$t('b6')"/>
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                    </a-card>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    components: {},
    i18n: require('./i18n_5006'),
    data() {
        return {
            b3: '25000',
            b4: '15',
            b5: '1.5',
            b6: '0.1',
            b7: '2',
            b8:'',
            b9:'2',
            b10:'13750',
            b11:'572.9166667',
            b12:'0.159143519',
            b13:'',
            b14:'106.095679',
            b15:'8',
            b16:'14',
            b17:'22.22222222',
            b18:'9.946469907',
            b19:'',
            b20:'10.6095679',
            b21:'8',
            b22:'1.4',
            b23:'2.222222222',
            b24:'',
            b25:'',
            b26:'0.25',
            b27:'8',
            b28:'0.079571759',
            b29:'',
            b30:'12',
            b31:'200',
            b32:'0.42235541',
            b33:'600',
            b34:'0.563140547',
            b35:'',
            b36:'2500',
            b37:'104.17',
            b38:'2',
            b39:'120',
            b40:'0.8',
            b41:'3',
            b42:'',
            b43:'5.6',
            b44:'10',
            b45:'20',
            b46:'',
            b47:'104.17',
            b48:'0.25',
            b49:'2',
            b50:'52.09',
            b51:'',
            b52:'40',
            b53:'1.2',
            b54:'5000.16',
            b55:'1.4',
            b56:'0.12',
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
            return (parseFloat(this.b3) / 3600).toFixed(4)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>