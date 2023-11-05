<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('baseQueryParam')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('averageFlow')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="averageFlow" :placeholder="$t('averageFlow')"
                                    :suffix="$t('averageFlowUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('maxFlow')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="maxFlow" :placeholder="$t('maxFlow')"
                                    :suffix="$t('maxFlowUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('uvt')" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="uvt" :placeholder="$t('uvt')"
                                :suffix="$t('uvtUnit')" />
                            </a-form-item>
                            <a-form-item :label="$t('waterTurbidity')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="waterTurbidity" :placeholder="$t('waterTurbidity')"
                                    :suffix="$t('waterTurbidityUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('targetMeasurement')" style="margin-top: 10px" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="targetMeasurement" :placeholder="$t('targetMeasurement')"
                                    :suffix="$t('targetMeasurementUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('agingCoefficient')" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="agingCoefficient" :placeholder="$t('agingCoefficient')"
                                :suffix="$t('agingCoefficientUnit')" />
                            </a-form-item>
                            <a-form-item :label="$t('scalingCoefficient')" :labelCol="{ span: 10 }"
                                :wrapperCol="{ span: 14 }">
                                <a-input v-model="scalingCoefficient" :placeholder="$t('scalingCoefficient')"
                                :suffix="$t('scalingCoefficientUnit')" />
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
                <a-card :title="$t('referenceInformation')">
                    <div>
                        <p>缺“紫外线有效剂量曲线图”，选型需要联系厂家</p>
                        <p>缺“紫外线有效剂量曲线图”，选型需要联系厂家</p>
                        <p>缺“紫外线有效剂量曲线图”，选型需要联系厂家</p>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('processDesignCompute')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form-item class="calc" :label="$t('actualNeedMeasurement')" :labelCol="{ span: 12 }"
                                :wrapperCol="{ span: 12 }">
                                <a-input v-model="actualNeedMeasurement" :placeholder="$t('actualNeedMeasurement')"
                                    :suffix="$t('actualNeedMeasurementUnit')" :disabled="true" />
                        </a-form-item>
                        <a-form-item class="calc" :label="$t('singleUvtWaterQuantity')" :labelCol="{ span: 12 }"
                                :wrapperCol="{ span: 12 }">
                                <a-input v-model="singleUvtWaterQuantity" :placeholder="$t('singleUvtWaterQuantity')"
                                    :suffix="$t('singleUvtWaterQuantityUnit')" :disabled="false" />
                        </a-form-item>
                        <a-form-item class="calc" :label="$t('uvtDeviceNumber')" :labelCol="{ span: 12 }"
                                :wrapperCol="{ span: 12 }">
                                <a-input v-model="uvtDeviceNumber" :placeholder="$t('uvtDeviceNumber')"
                                    :suffix="$t('uvtDeviceNumberUnit')" :disabled="true" />
                        </a-form-item>
                        <a-form-item class="calc" :label="$t('uvtDeviceReserveNumber')" :labelCol="{ span: 12 }"
                                :wrapperCol="{ span: 12 }">
                                <a-input v-model="uvtDeviceReserveNumber" :placeholder="$t('uvtDeviceReserveNumber')"
                                    :suffix="$t('uvtDeviceReserveNumberUnit')" :disabled="false" />
                        </a-form-item>
                        <a-form-item class="calc" :label="$t('uvtDeviceTotalNumber')" :labelCol="{ span: 12 }"
                                :wrapperCol="{ span: 12 }">
                                <a-input v-model="uvtDeviceTotalNumber" :placeholder="$t('uvtDeviceTotalNumber')"
                                    :suffix="$t('uvtDeviceTotalNumberUnit')" :disabled="true" />
                        </a-form-item>
                    </div>
                </a-card>
                <a-card :title="$t('waterHeadLossCheck')">
                    <div class="baseQueryParam">
                        <a-form-item class="calc" :label="$t('waterHeadLoss')" :labelCol="{ span: 12 }"
                                :wrapperCol="{ span: 12 }">
                                <a-input v-model="waterHeadLoss" :placeholder="$t('waterHeadLoss')"
                                    :suffix="$t('waterHeadLossUnit')" :disabled="false" />
                        </a-form-item>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('referenceImage')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/2000/Ultravioletd_01.png" />
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
            averageFlow: '50000',
            maxFlow: '60000',
            uvt: '90',
            waterTurbidity: '1',
            targetMeasurement: '40',
            agingCoefficient: '0.5',
            scalingCoefficient: '0.6',
            singleUvtWaterQuantity: '1250',
            uvtDeviceReserveNumber: '1',
            waterHeadLoss: '0.5',
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
        actualNeedMeasurement() {
            return (parseFloat(this.targetMeasurement) / parseFloat(this.agingCoefficient) / parseFloat(this.scalingCoefficient)).toFixed(0)
        },
        uvtDeviceNumber() {
            return (parseFloat(this.maxFlow) / 24 / parseFloat(this.singleUvtWaterQuantity)).toFixed(0)
        },
        uvtDeviceTotalNumber() {
            return parseFloat(this.uvtDeviceNumber) + parseFloat(this.uvtDeviceReserveNumber)
        }
    },
}
</script>

<style lang="less">
.calc{
    margin-bottom: 15px;
}
</style>