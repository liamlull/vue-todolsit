<template>
    <div>
        <input id="inputItem" v-model="addMessage" value=""/>
        <button v-on:click="addNewItem()" id="add-but">Add</button>
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
            }
        },
        data(){
            return {
                addMessage:"",
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