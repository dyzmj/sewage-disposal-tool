<template>
    <div class="calc_page" style="background-color: #EDEFF2;">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 14px 6px; margin-left: 0px;" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
            </a-col>
            <a-col style="padding: 14px 6px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
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
export default {
    components: {},
    i18n: require('./i18n'),
    methods: {
        backHome() {
            this.$router.push('/work')
        }
    },
}
</script>