<template xmlns:v-bing="http://www.w3.org/1999/xhtml">
    <div id="checkli">
        <input id="todoItem" type="checkbox" v-model="content.status"/>
        <span v-bind:class="{checkedText:content.status}">{{content.message}} </span>
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
          }
        },
        methods:{
        }
    }
</script>

<style scoped>
    .checkedText{
        text-decoration:line-through;
        color:gainsboro;
    }
    #checkli{
        float: left;
    }

</style>