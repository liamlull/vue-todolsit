<template>
  <div id="app">
    <list></list>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 400px;
  width: 400px;
  margin: 0 auto;
}
</style>
