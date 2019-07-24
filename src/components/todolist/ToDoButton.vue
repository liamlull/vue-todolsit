<template>
    <div id="button-div">
        <button v-on:click="changeFilter('finish')">finish</button>
        <button v-on:click="changeFilter('active')">active</button>
        <button v-on:click="changeFilter('all')">All</button>
    </div>
</template>

<script>
    export default {
        name: "ToDoButton"
        ,methods:{
            changeFilter(option){
                this.$store.commit('checkFilter',option)
            }
        }
    }
</script>

<style scoped>
    button{
        width: 60px;
        height: 30px;
        border: none;
        color:#1890FE;
        font-family:"Algerian";
        background-color: white;
        margin-left: 20px;
    }

    #button-div{
        width: 300px;
        text-align:center;
    }
</style>