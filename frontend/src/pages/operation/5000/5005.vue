<template>
    <div>
        <p> This is 水力循环澄清池 page </p>
        <a-button type="primary" @click="backHome">返回首页</a-button>
    </div>
</template>

<script>
export default {
    methods: {
        backHome() {
            this.$router.push('/work')
        }
    },
}
</script>