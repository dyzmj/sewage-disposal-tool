<template>
    <div class="container">
        <a-row style="margin: 0 -6px">
            <a-col style="padding: 0 6px; height: 100%;" :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
                <a-card :loading="loading" :title="$t('authPage')" headStyle="font-weight: bolder"
                    style="margin-bottom: 24px" :bordered="false" :body-style="{ padding: 4 }">
                    <div class="baseQueryParam">
                        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }"
                            @submit="handleSubmit">
                            <a-form-item :label="$t('machineCode')">
                                <a-input 
                                    v-decorator="['machineCode', { rules: [{ required: true, message: '请先输入机器码！', length: 40 }] }]" >
                                    <a-icon slot="prefix" type="robot" />
                                </a-input>
                            </a-form-item>
                            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                                <a-button type="primary" html-type="submit">
                                    {{$t('genCert')}}
                                </a-button>
                                <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
                                    {{$t('clear')}}
                                </a-button>
                            </a-form-item>
                            <a-form-item :label="$t('certificate')">
                                <a-input v-model="certificate" disabled="true" >
                                    <a-icon slot="prefix" type="safety-certificate"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item :label="$t('certificate')">
                                <a-input v-model="code" disabled="true" >
                                    <a-icon slot="prefix" type="safety-certificate"/>
                                </a-input>
                            </a-form-item>
                            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                                <a-button :style="{ marginLeft: '8px' }" @click="getMachineCode()">
                                    获取本地证书
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { ipcApiRoute } from '@/api/main';
import { ipc } from '@/utils/ipcRenderer';
import CryptoJS from 'crypto-js';

export default {
    name: 'Demo',
    i18n: require('./i18n'),
    data() {
        return {
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            certificate: '',
            code: '',
        }
    },
    computed: {
        ...mapState('setting', ['pageMinHeight']),
        desc() {
            return this.$t('description')
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values)
                    this.$message.info("正在生成授权证书")
                    // 加密机器码
                    // let key = "dyzmj1234567890123456dyzmj";
                    let test = CryptoJS.SHA256(values.machineCode);
                    // 使用16进制的方法加密，输出字符串
                    let testStr= CryptoJS.enc.Hex.stringify(test);
                    
                    this.certificate = testStr
                }
            });
        },
        handleReset() {
            this.form.resetFields();
            this.certificate = '';
            this.code  = '';
        },
        async getMachineCode() {
            this.$message.info("开始获取本地证书")
            try {
                const result = await ipc.invoke(ipcApiRoute.getRegistration);
                this.code = result;
            }catch (error) {
                console.log(error);
            }
            
        },
    },
}
</script>

<style scoped>
</style>