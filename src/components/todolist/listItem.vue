<template>
    <div id="checkli" @dblclick="isEdit=!isEdit">
        <div style="float: left;">
            <span v-bind:class="{checkedText:content.status}">{{index+1}}.</span>
            <span v-show="!isEdit" v-bind:class="{checkedText:content.status}">{{content.message}} </span>
            <span id="input-span" v-show="isEdit"  >
                  <a-input type="text" v-model="content.message"  @blur="lostBlur(id,content)"  @keyup.enter="isEdit=!isEdit" value=""/>
            </span>
        </div>
        <div style="float: right;margin-right: 20px">
            <a-switch :checked="content.status" @change='changeStatus(content,id)' style="margin-right: 20px"/>
            <a-button type="danger" v-on:click="deleteItem(id)" ghost>delete</a-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "listItem",
        props: [
            "content",
            "index",
            "id"
        ],
        data(){
            return {
                isEdit: false,
            }
        },
        methods: {
            changeStatus(content, id) {
                let item = {
                    id: id,
                    message: content.message,
                    status: !content.status
                }
                this.$store.dispatch('updateStatus', item);
            }, deleteItem(id) {
                this.$store.dispatch('deleteToDo', id)
            },lostBlur(id,content){
                let item = {
                    id: id,
                    message: this.content.message,
                    status: content.status
                }
                this.$store.dispatch('updateStatus', item);
            }
        }
    }
</script>

<style scoped>
    .checkedText {
        text-decoration: line-through;
        color: gainsboro;
    }

    #checkli {
        width: 100%;
        float: left;
        font-size: larger;
        padding-top: 7px;
        margin-left: 5px;
        height: 22px;
        text-align: left;
    }

    /*input[type="checkbox"] {*/
        /*-webkit-appearance: none;*/
        /*vertical-align: middle;*/
        /*margin-top: 0;*/
        /*background: #fff;*/
        /*border: gray solid 1px;*/
        /*border-radius: 3px;*/
        /*min-height: 12px;*/
        /*min-width: 12px;*/
    /*}*/

    /*input[type="checkbox"]:checked {*/
        /*background: #ff8900;*/
    /*}*/

    /*input[type=checkbox]:checked::after {*/
        /*content: '';*/
        /*top: 3px;*/
        /*left: 3px;*/
        /*position: absolute;*/
        /*background: transparent;*/
        /*border: #fff solid 2px;*/
        /*border-top: none;*/
        /*border-right: none;*/
        /*height: 6px;*/
        /*width: 10px;*/
        /*-moz-transform: rotate(-45deg);*/
        /*-ms-transform: rotate(-45deg);*/
        /*-webkit-transform: rotate(-45deg);*/
        /*transform: rotate(-45deg);*/
    /*}*/

    #deleteSpan {
        float: right;
        margin-right: 7px;
    }

    #deleteSpan:hover {
        cursor: pointer
    }

    #input-span {position:relative;
        left:25px;
        bottom: 27px;
    }

</style>