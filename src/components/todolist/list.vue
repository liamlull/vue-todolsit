<template>
    <div>
        <input v-model="addMsg"/>
        <button v-on:click="addNewItem()">Add</button>
        <ol>
            <li v-for="item in items">
                <listItem :content="item" @func="finishItem"></listItem>
            </li>
        </ol>
        <button v-on:click="getFinish">finish</button>
        <button v-on:click="getActive">active</button>
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
                items: [
                    {message: '123456', status: true},
                    {message: 'ffffff', status: true}
                ],realitems:[
                    {message: '123456', status: true},
                    {message: 'ffffff', status: true}
                ]
            }
        },
        methods: {
            addNewItem() {
                this.realitems.push({message: this.addMsg, status:true})
                this.items=this.realitems;
            }, finishItem(message) {
                this.realitems.map(x => {
                    if (x.message === message) {
                        x.status = !x.status;
                    }
                    return x;
                })
            },getFinish(){
                this.items = this.realitems;
                this.items = this.items.filter(x=>!x.status);
            },getActive(){
                this.items = this.realitems;
                this.items = this.items.filter(x=>x.status);
            }
        }
    }
</script>

<style scoped>
</style>