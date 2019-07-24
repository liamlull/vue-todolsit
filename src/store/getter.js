
const getters={
    nowToDoList:(state)=>{
      return state.todos;
    },getCalculate:(state)=>{
        let sum1 = state.relTodos.filter(x => x.status).length;
        let sum2 = state.relTodos.length;
        return sum1/sum2;
    }
}

export default getters;