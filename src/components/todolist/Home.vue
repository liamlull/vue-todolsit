<template>
    <div>
        <div>
            <button v-on:click="back">返回</button>
            <span>lay</span>
        </div>
        <div>
            <ol>
                <li><button v-on:click="gotoList">todoList</button></li>
                <li><button v-on:click="gotoMessage">message</button></li>
            </ol>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            back(){
                this.$router.push('/')
            },
            gotoList(){
                this.$router.push('todos')
            },gotoMessage(){
                this.$router.push('message')
            }

        }
    }
</script>

<style scoped>

</style>