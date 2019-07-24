<template>
    <div>
        <h1>
            请输入你的名字：
        </h1>
        <a-input-search v-model="username" @search="goToList" enterButton="开始" size="large" />
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods:{
            goToList(){
                this.$router.push({path:'home/',params:{username:this.username}});
            }
        },data(){
            return {
                username:"",
            }
        }
    }
</script>

<style scoped>

</style>