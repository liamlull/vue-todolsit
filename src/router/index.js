import vue from "vue";
import router from "vue-router"
import Main from '../components/todolist/Main'
import List from '../components/todolist/list'
import Home from '../components/todolist/Home'
import Message from '../components/todolist/message'


vue.use(router);

export default new router({
    routes:[
        {
            path:'/',
            component:Main,
            name:'Main'
        },{
            path:'/home',
            redirect:'/home/todos',
            component:Home,
            children:[
                {
                    path:'todos',
                    component:List
                },{
                    path:'message',
                    component:Message
                }
            ]
        }

    ]
})