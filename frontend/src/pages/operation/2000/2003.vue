<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('requiredAmountOfOzone')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item :label="$t('disinfectionWaterAuantity1')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="disinfectionWaterAuantity1" style="width: 50%;" 
                                    :suffix="$t('disinfectionWaterAuantity1Unit')" :disabled="true" />
                                    <a-input v-model="disinfectionWaterAuantity2" style="width: 50%;"
                                    :suffix="$t('disinfectionWaterAuantity2Unit')" :disabled="true" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('ozoneDosage')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="ozoneDosage" :placeholder="$t('ozoneDosage')"
                                    :suffix="$t('ozoneDosageUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('safetyFactor')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="safetyFactor" :placeholder="$t('safetyFactor')"
                                :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('requiredAmountOfOzone')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="requiredAmountOfOzone" :placeholder="$t('requiredAmountOfOzone')"
                                    :suffix="$t('requiredAmountOfOzoneUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('ozoneActualUtilization')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="ozoneActualUtilization" :placeholder="$t('ozoneActualUtilization')"
                                    :suffix="$t('ozoneActualUtilizationUnit')" :disabled="false" />
                            </a-form-item>
                            <a-form-item :label="$t('ozoneGeneratorYield')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input v-model="ozoneGeneratorYield" :placeholder="$t('ozoneGeneratorYield')"
                                    :suffix="$t('ozoneGeneratorYieldUnit')" :disabled="true" />
                            </a-form-item>
                            <a-form-item :label="$t('ozoneGeneratorNumber')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="ozoneGeneratorNumber" style="width: 50%;" 
                                    :suffix="$t('ozoneGeneratorNumberUnit')" :disabled="true" />
                                    <a-input v-model="ozoneGeneratorReserveNumber" style="width: 50%;"
                                    :suffix="$t('ozoneGeneratorReserveNumberUnit')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                            <a-form-item :label="$t('ozoneOutput')" style="margin-top: 10px" :labelCol="{ span: 8 }"
                                :wrapperCol="{ span: 16 }">
                                <a-input-group compact>
                                    <a-input v-model="ozoneOutput" style="width: 50%;" 
                                    :suffix="$t('ozoneOutputUnit')" :disabled="true" />
                                    <a-input v-model="ozoneReserveOutput" style="width: 50%;"
                                    :suffix="$t('ozoneReserveOutputUnit')" :disabled="false" />
                                </a-input-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('ozoneContactCell')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 2 }">
                    <div class="baseQueryParam">
                    </div>
                </a-card>
            </a-col>
            <a-col style="padding: 14px 6px; margin-right: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :title="$t('referenceImage')" style="margin-bottom: 24px" :bordered="false"
                    :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form>
                            <a-form-item style="margin-top: 50px; margin-bottom: 60px">
                                <img width="400px" src="@/assets/img/2000/Ozone_01.png" />
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
            disinfectionWaterAuantity1: '20000',
            ozoneDosage: '0.005',
            safetyFactor: '1.06',
            ozoneActualUtilization: '70',
            ozoneGeneratorNumber: '1',
            ozoneGeneratorReserveNumber: '1',
            ozoneReserveOutput: '8',
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
        disinfectionWaterAuantity2() {
            return (parseFloat(this.disinfectionWaterAuantity1) / 24).toFixed(2)
        },
        requiredAmountOfOzone() {
            return (parseFloat(this.safetyFactor) * parseFloat(this.ozoneDosage) * parseFloat(this.disinfectionWaterAuantity2)).toFixed(2)
        },
        ozoneGeneratorYield() {
            return (parseFloat(this.requiredAmountOfOzone) / (parseFloat(this.ozoneActualUtilization) / 100)).toFixed(2)
        },
        ozoneOutput() {
            return (parseFloat(this.ozoneGeneratorYield))
        }
    },
}
</script>