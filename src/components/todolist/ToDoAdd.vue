<template>
    <div>
        <a-input-search v-model="addMessage"  @search="addNewItem" enterButton="Add" size="large" />
        任务完成度：<a-progress strokeLinecap="square" :percent="getCalculate*100" />
        <br/>
        <br/>
        <br/>
    </div>
</template>

<script>
    export default {
        name: "ToDoAdd",
        methods:{
            addNewItem(){
                const title = this.addMessage.trim();
                if(!title){
                    alert("please input correct title")
                    return
                }
                this.$store.dispatch('addNewItem',this.addMessage);
                this.addMessage="";
            }
        },
        data(){
            return {
                addMessage:"",
            }
        },computed:{
            getCalculate(){
                return this.$store.getters.getCalculate;
            }
        }
    }
</script>

<style scoped>

    #inputItem{
        width: 300px;
        height: 30px;
        border-color:#ffb329;
    }
    button{
        width: 60px;
        height: 30px;
        border: none;
        color:#ffb329;
        font-family:"Algerian";
        background-color: white;
        margin-left: 20px;
    }
    #add-but{
        margin-left: 0px;
    }

</style>