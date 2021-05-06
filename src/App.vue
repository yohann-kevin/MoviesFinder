<template>
  <div id="app">
    <Header/>
    <search/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #36393f;
  /* font-family: 'robotothin'; */
}
</style>
