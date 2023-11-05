<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('designScale')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="designScale" :placeholder="$t('designScale')"
                                    :suffix="$t('designScaleUnit')" value='20000.00' :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('totalChangeFactor')" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="totalChangeFactor" :placeholder="$t('totalChangeFactor')" value="1" />
                            </a-form-item>
                            <a-form-item :label="$t('singleTankVolume')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="singleTankVolume1" rows="4" :placeholder="$t('singleTankVolume')"
                                    :suffix="$t('singleUnit1')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('singleTankVolume')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="singleTankVolume2" rows="4" :placeholder="$t('singleTankVolume')" :suffix="$t('singleUnit2')" :disabled="true" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                
                <a-card :title="$t('referenceInformation')">
                    <div>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
                        <p>《室外给水设计标准》9.9.9：水与氯、氨应充分混合，氯消毒有效接触时间不应小于30min，氯胺消毒有效接触时间不应小于120min</p>
                    </div>
                </a-card>

            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('processDesignCompute')" style="margin-bottom: 0px" :bordered="false"
                    :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form style="margin-bottom: 24px">
                            <a-form-item class="calc" :label="$t('contactTime')" style="margin-top: 5px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="contactTime" :placeholder="$t('contactTime')"
                                    :suffix="$t('contactTimeUnit')" value='30' />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('totalPoolCapacity')" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="totalPoolCapacity" :placeholder="$t('totalPoolCapacity')"
                                    :suffix="$t('totalPoolCapacityUnit')" value="1" :disabled="true" />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('disinfectiontank')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="disinfectiontank" rows="4" :placeholder="$t('disinfectiontank')"
                                    :suffix="$t('disinfectiontankUnit')" />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('everyPoolCapacity')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="everyPoolCapacity" rows="4" :placeholder="$t('everyPoolCapacity')" 
                                    :suffix="$t('everyPoolCapacityUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('contactPoolDepth')" style="margin-top: 10px" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="contactPoolDepth" :placeholder="$t('contactPoolDepth')"
                                    :suffix="$t('contactPoolDepthUnit')" value='20000.00' />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('singlecellWidth')" :labelCol="{ span: 6 }"
                                :wrapperCol="{ span: 18 }">
                                <a-input v-model="singlecellWidth" :placeholder="$t('singlecellWidth')"
                                    :suffix="$t('singlecellWidthUnit')" value="1" />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('flowLength')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input-group compact>
                                    <a-input v-model="flowLength" style="width: 50%;" rows="4" :placeholder="$t('flowLength')"
                                     :disabled="true" />
                                    <a-input v-model="roundingFlowLength" style="width: 50%;" rows="4" :placeholder="$t('flowLength')"
                                    :suffix="$t('flowLengthUnit')" :disabled="false" />
                                </a-input-group>
                                
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('division')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="division" rows="4" :placeholder="$t('division')" 
                                 />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('partitionWallThickness')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="partitionWallThickness" rows="4" :placeholder="$t('partitionWallThickness')"
                                    :suffix="$t('partitionWallThicknessUnit')" />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('poolLength')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="poolLength" rows="4" :placeholder="$t('poolLength')" 
                                :suffix="$t('poolLengthUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item class="calc" :label="$t('poolWidth')" :labelCol="{ span: 6 }" :wrapperCol="{ span: 18 }">
                                <a-input v-model="poolWidth" rows="4" :placeholder="$t('poolWidth')" 
                                :suffix="$t('poolWidthUnit')" :disabled="true" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('referenceImage')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/2000/Disinfection_01.png" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('export')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 120px;"
                                >
                                <a-button style="margin-left: 30px;" type="primary" @click="exportComputeBook()">{{ $t('exportComputeBook') }}</a-button>
                                <a-button style="margin-left: 10px"  type="danger"  @click="exportQuantities()">{{ $t('exportQuantities') }}</a-button>
                                <a-button style="margin-left: 10px"  type="dashed"  @click="backHome()">{{ $t('backWork') }}</a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    components: {},
    i18n: require('./i18n'),
    data() {
        return {
            designScale: '20000',
            totalChangeFactor: '1',
            contactTime: '30',
            disinfectiontank: '2',
            contactPoolDepth: '2.00',
            singlecellWidth: '2.00',
            division: '4',
            roundingFlowLength: '52.40',
            partitionWallThickness: '0.20'
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
        singleTankVolume1() {
            return (parseFloat(this.designScale) * parseFloat(this.totalChangeFactor) / 24 ).toFixed(2)
        },
        singleTankVolume2() {
            return (parseFloat(this.designScale) * parseFloat(this.totalChangeFactor) / (24 * 60 * 60)).toFixed(2)
        },
        totalPoolCapacity() {
            return (parseFloat(this.singleTankVolume1) * (parseFloat(this.contactTime) / 60)).toFixed(2)
        },
        everyPoolCapacity() {
            return (parseFloat(this.totalPoolCapacity) / parseFloat(this.disinfectiontank)).toFixed(2)
        },
        flowLength() {
            return (parseFloat(this.everyPoolCapacity).toFixed(1) / parseFloat(this.contactPoolDepth) / parseFloat(this.singlecellWidth)).toFixed(2)
        },
        poolLength() {
            return ((parseFloat(this.roundingFlowLength)) / parseFloat(this.division)).toFixed(2)
        },
        poolWidth() {
            return (((parseFloat(this.division) * parseFloat(this.singlecellWidth)) + ((parseFloat(this.division) - 1) * parseFloat(this.partitionWallThickness)))).toFixed(2)
        }
    },
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>