import axios from "axios"

const loadUrl = "http://localhost:3001/todos";

const actions ={

    getToDoItemsFromDB({commit}){
        axios.get(loadUrl).then(function(response){
            commit('getItems',response.data);
            commit('flashItems');
        })
    },
    addNewItem({commit,dispatch},msg){
        axios.post(loadUrl,{
            id:Date.now().toString(36),
            message:msg,
            status:false
        }).then(function(response){
            dispatch('getToDoItemsFromDB');
            //commit('addItems',response.data);
        })
    },deleteToDo({commit,dispatch},id){
        axios.delete(loadUrl+"/"+id)
            .then(function (response){
            dispatch('getToDoItemsFromDB');
        })
    },updateStatus({commit,dispatch},item){
        axios.put(loadUrl+"/"+item.id,{
            message:item.message,
            status:item.status
        }).then(function (response) {
                dispatch('getToDoItemsFromDB');
        })
    }
}

export default actions