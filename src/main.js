import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import getters from './store/getter'
import mutations from './store/mutations'
import actions from './store/actions'
import state from './store/state'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


Vue.use(Vuex)
Vue.use(router)
Vue.use(Antd)
const store = new Vuex.Store({
    state,getters,
    mutations,
    actions,
})

new Vue({
    render: h => h(App),
    store,router
}).$mount('#app')
