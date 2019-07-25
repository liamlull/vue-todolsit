<template>
    <div id="checkList">
        <ToDoHeader/>
        <ToDoAdd/>
        <ul>
            <li v-for="(item,index) in getItems" v-bind:class="{checkLi:index%2==0}">
                <listItem :content="item":index="index":id="item.id"></listItem>
                <br/>
                <br/>
            </li>
        </ul>
        <ToDoButton/>
    </div>
</template>

<script>
    import listItem from "./listItem";
    import ToDoHeader from "./ToDoHeader"
    import ToDoAdd from "./ToDoAdd"
    import ToDoButton from "./ToDoButton"

    export default {
        name: "list",
        components: {listItem,ToDoHeader,ToDoAdd,ToDoButton},
        beforeCreate:function(){
            this.$store.dispatch('getToDoItemsFromDB');
        },
        computed:{
            getItems(){
                return this.$store.getters.nowToDoList;
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .checkLi{
        background-color: #f0f2f5;
    }
    ul{
        padding-left: 0px;
        list-style-type:none
    }

</style>