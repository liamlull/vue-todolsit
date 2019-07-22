<template>
    <div id="checkList">
        <input v-model="addMsg"/>
        <button v-on:click="addNewItem()">Add</button>
        <ol>
            <li v-for="item in items">
                <listItem :content="item" @func="finishItem"></listItem>
                <br/>
                <br/>
            </li>
        </ol>
        <button v-on:click="getFinish">finish</button>
        <button v-on:click="getActive">active</button>
        <button v-on:click="getAll">All</button>
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
            }
        },
        methods: {
            addNewItem() {
                this.realitems.push({message: this.addMsg, status:false})
                this.items=this.realitems;
            }, finishItem(message) {
                this.realitems.map(x => {
                    if (x.message === message) {
                        x.status = !x.status;
                    }
                    return x;
                })
            },getFinish(){
                this.items = this.realitems.filter(x=>x.status);
            },getActive(){
                this.items = this.realitems.filter(x=>!x.status);
            },getAll(){
                this.items = this.realitems;
            }
        }
    }
</script>

<style scoped>
    #checkList{
        width: 380px;
    }

</style>