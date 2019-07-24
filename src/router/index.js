import vue from "vue";
import router from "vue-router"
import Main from '../view/Main'
import List from '../components/todolist/list'
import Home from '../view/Home'
import Message from '../view/message'


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