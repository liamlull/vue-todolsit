<template>
    <div>
        <input id="todoItem" type="checkbox" v-on:change="finish"/>
        <span  :class="checkedStatus">{{content}} </span>
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
                    this.checkedStatus =""
                }else {
                    this.checkedStatus = "checkedText"
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