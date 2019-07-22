<template xmlns:v-bing="http://www.w3.org/1999/xhtml">
    <div id="checkli">
        <span v-bind:class="{checkedText:content.status}">{{index+1}}.</span>
        <input id="todoItem" type="checkbox" v-model="content.status"/>
        <span v-bind:class="{checkedText:content.status}">{{content.message}} </span>
    </div>
</template>

<script>
    export default {
        name: "listItem",
        props:[
            "content",
            "index"
        ],
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
        font-size: larger;
        padding-top: 7px;
    }
    input[type="checkbox"]{
        -webkit-appearance: none;
        vertical-align:middle;
        margin-top:0;
        background:#fff;
        border: gray solid 1px;
        border-radius: 3px;
        min-height: 12px;
        min-width: 12px;
    }
    input[type="checkbox"]:checked {
        background:#ff8900;
    }
    input[type=checkbox]:checked::after{
        content: '';
        top: 3px;
        left: 3px;
        position: absolute;
        background: transparent;
        border: #fff solid 2px;
        border-top: none;
        border-right: none;
        height: 6px;
        width: 10px;
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

</style>