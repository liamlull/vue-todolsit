const mutations = {
    addItems(state, item) {
        state.todos.push(item);
    },
    flashItems(state){
        state.todos = state.relTodos;
    },
    getItems(state, itemsFromDB) {
        state.relTodos = itemsFromDB;
    },
    checkFilter(state, option) {
        state.todos = state.relTodos;
        if (option === 'active') {
            state.todos = state.relTodos.filter(x => !x.status);

        } else if (option === 'finish') {
            state.todos = state.relTodos.filter(x => x.status);
        }
    }
}
export default mutations;