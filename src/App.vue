<template>
  <div id="app">
    <Header/>
    <Search/>
    <Overview v-on:viewsOpen="openViews($event)"/>
    <Views ref="views" v-bind:ids="this.filmId" v-on:isclose="closeViews()"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Overview from './components/Overview.vue'
import Views from './components/Views.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Overview,
    Views
  },
  data() {
    return {
      filmId: 0
    }
  },
  methods: {
    openViews: function(id) {
      this.filmId = id;
      this.$refs.views.$refs.modal.style.display = "block";
    },
    closeViews: function() {
      this.filmId = 0;
      this.$refs.views.$refs.modal.style.display = "none";
    }
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
