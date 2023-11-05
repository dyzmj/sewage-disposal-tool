<template>
    <div>
        <p> This is 臭氧消毒 page </p>
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