<template>
    <div>
        <input type="checkbox"/>
        <span>{{content}} </span>
    </div>
</template>

<script>
    export default {
        name: "listItem",
        props:[
            "content"
        ]
    }
</script>

<style scoped>

</style>