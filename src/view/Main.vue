<template>
    <div style="text-align: center">
        <div style="width: 400px;margin: 0px auto">
            <a-avatar :size="64" icon="user" />
            <h1>
                请输入你的名字：
            </h1>
            <a-input-search v-model="username" @search="goToList" enterButton="开始" size="large"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods: {
            goToList() {
                this.$router.push({path: 'home/', params: {username: this.username}});
            }
        }, data() {
            return {
                username: "",
            }
        }
    }
</script>

<style scoped>

</style>