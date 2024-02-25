<template>
    <div>
        <p> This is 折板絮凝池 page </p>
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