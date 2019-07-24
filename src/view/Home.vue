<template>
    <div id="nav-div">
        <a-layout id="components-layout-demo-responsive">
            <a-layout-sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    @collapse="onCollapse"
                    @breakpoint="onBreakpoint"
            >
                <div class="logo" />
                <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
                    <a-menu-item key="1" v-on:click="gotoList">
                        <a-icon type="ordered-list" />
                        <span class="nav-text">To Do List</span>
                    </a-menu-item>
                    <a-menu-item key="2" v-on:click="gotoMessage">
                        <a-icon type="user" />
                        <span class="nav-text">我的</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header :style="{ background: '#fff', padding: 0 }" />
                <a-layout-content :style="{ margin: '24px 16px 0' }">
                    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                        <router-view></router-view>
                    </div>
                </a-layout-content>
                <a-layout-footer style="textAlign: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "Home",
        beforeRouteLeave(to,from,next){
            if(to.path == '/'){
                let result = confirm("是否要离开？");
                if(result){
                    next();
                }
            }

        },
        methods: {
            back() {
                this.$router.push('/')
            },
            gotoList() {
                this.$router.push('todos')
            }, gotoMessage() {
                this.$router.push('message')
            },onCollapse(collapsed, type) {
                //console.log(collapsed, type);
            },
            onBreakpoint(broken) {
                //console.log(broken);
            }
        }
    }
</script>

<style scoped>
#nav-div{
    width: 100%;
    height: 100%;
}
    #side-div{
        width: 300px;
    }
</style>