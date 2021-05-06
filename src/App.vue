<template>
  <div id="app">
    <Header/>
    <Search/>
    <overview/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Overview from './components/Overview.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Overview
  }
}
</script>

<style>
@font-face {
  font-family: "robotothin";
  src: url("./assets/fonts/roboto/roboto-thin-webfont.woff") format("woff");
  src: url("./assets/fonts/roboto/roboto-thin-webfont.woff2") format("woff2");
}

@font-face {
  font-family: "robotoregular";
  src: url("./assets/fonts/roboto/roboto-regular-webfont.woff") format("woff");
  src: url("./assets/fonts/roboto/roboto-regular-webfont.woff2") format("woff2");
}

@font-face {
  font-family: "robotobold";
  src: url("./assets/fonts/roboto/roboto-bold-webfont.woff") format("woff");
  src: url("./assets/fonts/roboto/roboto-bold-webfont.woff2") format("woff2");
}

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
  font-family: 'robotothin';
}
</style>
