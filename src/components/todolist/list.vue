<template>
    <div>
        <input v-model="addMsg"/><button v-on:click="addNewItem()">Add</button>
        <ol>
           <li v-for="item in items">
               <listItem :content="item.message"></listItem>
           </li>
        </ol>
    </div>
</template>

<script>
    import listItem from "./listItem";
    export default {
        name: "list",
        components: { listItem},
        data(){
            return {
                addMsg:"",
                items:[
                    {message:'123456'},
                    {message:'ffffff'}
                ]
            }
        },
        methods:{
            addNewItem(){
                this.items.push({message:this.addMsg})
            }
        }
    }
</script>

<style scoped>

</style>