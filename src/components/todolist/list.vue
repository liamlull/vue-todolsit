<template>
    <div>
        <input/><button v-on:click="addNewItem()">Add</button>
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
                items:[
                    {message:'123456'},
                    {message:'ffffff'}
                ]
            }
        },
        methods:{
            addNewItem:{

            }
        }
    }
</script>

<style scoped>

</style>