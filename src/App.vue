<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import List from "./components/todolist/list";
export default {
  name: 'app',
  components: {
      List,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
