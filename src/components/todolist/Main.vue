<template>
    <div>
        <h1>
            请输入你的名字：
        </h1>
        <input type="text"/>
        <button v-on:click="goToList">开始</button>
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods:{
            goToList(){
                this.$router.push('home');
            }
        }
    }
</script>

<style scoped>

</style>