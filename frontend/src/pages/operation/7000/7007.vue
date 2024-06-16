、<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('b2')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b3')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b3" style="width: 100%;" :disabled="false" rows="12" :placeholder="$t('b3')" :suffix="$t('b3_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b4')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b4" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b4')" :suffix="$t('b4_u')" />
                                        <a-input v-model="b4_1" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b4_1')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b5')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="b5" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b5')" :suffix="$t('b5_u')" />
                                    <a-input v-model="b5_1" style="width: 50%;" :disabled="false" rows="12" :placeholder="$t('b5_1')" :suffix="$t('b5_1_u')" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
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
                    <a-card :title="$t('b9_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b9')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b9" style="width: 100%;" :disabled="false" :suffix="$t('b9_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b10')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b10" style="width: 100%;" :disabled="false" :suffix="$t('b10_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b11')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b11" style="width: 100%;" :disabled="false" :suffix="$t('b11_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b12')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b12" style="width: 100%;" :disabled="false" :suffix="$t('b12_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b13')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b13" style="width: 100%;" :disabled="false" :suffix="$t('b13_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b14')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b14" style="width: 33%;" :disabled="false" :suffix="$t('b14_u')" />
                                        <a-input v-model="b14_1" style="width: 33%;" :disabled="true" :suffix="$t('b14_u')" />
                                        <a-input v-model="b14_2" style="width: 34%;" :disabled="true" :suffix="$t('b14_2_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b15_0')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b15')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b15" style="width: 50%;" :disabled="false"  :suffix="$t('b15_u')" />
                                        <a-input v-model="b15_1" style="width: 50%;" :disabled="false"  :suffix="$t('b15_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b16')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b16" style="width: 50%;" :disabled="false"  :suffix="$t('b16_u')" />
                                        <a-input v-model="b16_1" style="width: 50%;" :disabled="false"  :suffix="$t('b16_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b17')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b18')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b18" style="width: 100%;" :disabled="false"  :suffix="$t('b18_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b19')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b19" style="width: 100%;" :disabled="false"  :suffix="$t('b19_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b20')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b20" style="width: 100%;" :disabled="false"  :suffix="$t('b20_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b21')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b21" style="width: 100%;" :disabled="false"  :suffix="$t('b21_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b22')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b22" style="width: 100%;" :disabled="false"  :suffix="$t('b22_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b23')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b23" style="width: 100%;" :disabled="false"  :suffix="$t('b23_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b24')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b24" style="width: 100%;" :disabled="false"  :suffix="$t('b24_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b25')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b25" style="width: 100%;" :disabled="false"  :suffix="$t('b25_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b26')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b26" style="width: 100%;" :disabled="false"  :suffix="$t('b26_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b27')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b27" style="width: 100%;" :disabled="false"  :suffix="$t('b27_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b28')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b28" style="width: 100%;" :disabled="false"  :suffix="$t('b28_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b29')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b29" style="width: 100%;" :disabled="false"  :suffix="$t('b29_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b30')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b30" style="width: 100%;" :disabled="false"  :suffix="$t('b30_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b31')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b31" style="width: 100%;" :disabled="false"  :suffix="$t('b31_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b32')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b33')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b33" style="width: 50%;" :disabled="false" />
                                        <a-input v-model="b33_1" style="width: 50%;" :disabled="false" :suffix="$t('b33_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b34')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b34" style="width: 100%;" :disabled="false" :suffix="$t('b34_u')" />                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                    <a-card :title="$t('b35')" style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                        <a-form>
                            <a-form-item :label="$t('b36')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b36" style="width: 100%;" :disabled="false" :suffix="$t('b36_u')" />
                                    </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('b37')" style="margin-top: 10px" :labelCol="{ span: 8 }" :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                        <a-input v-model="b37" style="width: 100%;" :disabled="true" :suffix="$t('b37_u')" />
                                    </a-input-group>
                            </a-form-item>
                        </a-form>
                    </a-card>
                </a-card>
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
    i18n: require('./i18n_7007'),
    data() {
        return {
            b3: '20000.00',
            b4: '1',
            b4_1: '1',
            b9:'20',
            b10:'15',
            b11:'100',
            b12:'2',
            b13:'1.33',
            b14:'970',
            b14_1:'1230',
            b14_2:'2',
            b15:'0.45',
            b15_1:'0.50',
            b16:'780',
            b16_1:'1110',
            b18:'600',
            b18_1:'0.60',
            b19:'200',
            b19_1:'0.20',
            b20:'300',
            b20_1:'0.30',
            b21:'1',
            b22:'2',
            b23:'63.66',
            b24:'0.5',
            b25:'1000',
            b26:'2',
            b27:'2',
            b28:'0.12',
            b29:'0.75',
            b30:'0.6',
            b31:'0.27',
            b32:'',
            b33:'JBJ1-600',
            b33_1:'1',
            b34:'0.55',
            b35:'',
            b36:'16.67',
            b37:'111.11'
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
        b5() {
            return (parseFloat(this.b3) / 24 + parseFloat(this.b4) / parseFloat(this.b4_1)).toFixed(2)
        },
        b5_1() {
            return (parseFloat(this.b5) / 3600).toFixed(2)
        },
    }
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>