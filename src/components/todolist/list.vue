<template>
    <div id="checkList">
        <h1 id="title">Vue To Do List</h1>
        <p id="content">Simple Todo List with adding and filter by diff status.</p>
        <input id="inputItem" v-model="addMsg"/>
        <button v-on:click="addNewItem()" id="add-but">Add</button>
        <ul>
            <li v-for="(item,index) in items" v-bind:class="{checkLi:index%2==0}">
                <listItem :content="item":index="index" @func="finishItem"></listItem>
                <br/>
                <br/>
            </li>
        </ul>
        <div id="button-div">
            <button v-on:click="getFinish">finish</button>
            <button v-on:click="getActive">active</button>
            <button v-on:click="getAll">All</button>
        </div>
    </div>
</template>

<script>
    import listItem from "./listItem";

    export default {
        name: "list",
        components: {listItem},
        data() {
            return {
                addMsg: "",
                checkedStatus:"",
                items:this.getItems
            }
        },
        computed:{
            getItems(){
                return this.$store.state.items;
            }
        },
        methods: {
            addNewItem() {
                this.$store.commit('addItems',{message: this.addMsg, status:false}),
                this.items=this.getItems;
            }, finishItem(message) {
                this.getItems.map(x => {
                    if (x.message === message) {
                        x.status = !x.status;
                    }
                    return x;
                })
            },getFinish(){
                this.items = this.getItems.filter(x=>x.status);
            },getActive(){
                this.items = this.getItems.filter(x=>!x.status);
            },getAll(){
                this.items = this.getItems;
            }
        }
    }
</script>

<style scoped>
    #checkList{
        width: 380px;
        border: 2px solid #ffb329;
    }
    .checkLi{
        background-color: #ffb329;
    }
    #title{
        font-family:"Berlin Sans FB";
    }
    #content{
        font-style: italic;
    }
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

    #button-div{
        width: 300px;
        text-align:center;
    }
    ul{
        padding-left: 0px;
        list-style-type:none
    }



</style>