<template>
  <div id="searchTest">
    <input type="text" id="searchFilm" v-on:keyup.enter="search()" ref="entry"/>
    <button id="btnSearch" v-on:click="search()">Recherche</button>
  </div>
</template>

<script>
export default {
  methods: {
    search: function() {
      this.$emit("searchFilm", this.$refs.entry.value);
    }
  }
}
</script>

<style>
#searchTest {
  width: 100%;
  background-color: #36393f;
}

#searchFilm {
  height: 15;
  padding: 15px;
}

#btnSearch {
  height: 30px;
  margin: 15px;
}
</style>
