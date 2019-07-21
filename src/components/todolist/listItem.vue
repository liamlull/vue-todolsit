<template>
    <div>
        <input id="todoItem" type="checkbox" v-on:change="finish"/>
        <span  :class="checkedStatus">{{content.message}} </span>
    </div>
</template>

<script>
    export default {
        name: "listItem",
        props:[
            "content"
        ],
        data(){
          return{
              checkedStatus:""
          }
        },
        methods:{
            finish(){
                if(this.checkedStatus == "checkedText"){
                    this.checkedStatus ="";
                    this.$emit('func',this.content.message)
                }else {
                    this.checkedStatus = "checkedText";
                    this.$emit('func',this.content.message)
                }
            }
        }
    }
</script>

<style scoped>
    .checkedText{
        text-decoration:line-through;
        color:gainsboro;
    }

</style>