<template>
  <div id="containerFilms">
    <div class="overFilms modalBtn" v-for="(movie, i) in movies" :key="i" v-on:click="openViews(movie.id)">
      <h1>{{ movie.title }}</h1>
      <img :src="buildImgPath(movie.poster_path)" :alt="movie.title">
      <div class="containerContent">
        <p>{{ formatDate(movie.release_date) }}</p>
        <p>{{ formatDescription(movie.overview) }}</p>
      </div>
    </div>
    <div id="pagination">
      <a v-on:click="removePage()">Moins</a>
      <a v-on:click="addPage()">Plus</a>
    </div>
  </div>
</template>

<script>
import warning from '../assets/warning.png';
import token from '../assets/json/token.json';

export default {
  data() {
    return {
      link: "https://api.themoviedb.org/3/search/movie?api_key=",
      txt: "harry+potter",
      movies: [],
      page: 1,
    }
  },
  props: {
    text: String
  },
  methods: {
    findData: function() {
      let finallyLink = this.link + token.token + "&language=fr&query=" + this.txt + "&page=" + this.page;
      console.log(finallyLink);
      this.$axios.get(finallyLink).then(response => this.manageData(response));
    },
    manageData: function(response) {
      if (response.status != 200) console.log("error");
      this.formatData(response.data);
    },
    formatData: function (data) {
      console.log(data.results);
      for (let i = 0; i < data.results.length; i++) {
        this.movies.push(data.results[i]);
      }
    },
    buildImgPath: function(path) {
      let link = "https://image.tmdb.org/t/p/w300";
      return path == null ? warning : link + path;
    },
    formatDescription: function(content) {
      if (content.length == 0) return "Aucune description n'est disponible !";
      return content.length > 300 ? content.slice(0, 300) + "..."  : content;
    },
    addPage: function() {
      this.page++;
      this.findData();
    },
    removePage: function() {
      console.log(this.page);
      if (this.page != 1 && this.page != 0) {
        this.page--;
        for (let i = 0; i < 20; i++) this.movies.pop();
      }
    },
    formatDate: function(releaseDate) {
      try {
        releaseDate = new Date(releaseDate);
        return new Intl.DateTimeFormat('fr').format(releaseDate);
      } catch(err) {
        console.log(err);
        return releaseDate;
      }
    },
    openViews: function(id) {
      this.$emit("viewsOpen", id);
    },
    textFormat: function(str) {
      return str.replace(/\s+/g, '+').toLowerCase();
    }
  },
  watch: {
    text: function(newValue, oldValue) {
      this.txt = this.textFormat(newValue);
      console.log(newValue + " " + oldValue);
      this.movies = [];
      this.findData();
    }
  },
  mounted() {
    this.findData();
  }
}
</script>

<style>
#containerFilms {
  background-color: #36393f;
  color: #ffffff;
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.overFilms {
  width: 28%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
}

.overFilms:hover {
  cursor: pointer;
  background-color: #2f3136;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.overFilms h1 {
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
}

.overFilms img {
  width: 25%;
  height: 200px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

.containerContent {
  width: 70%;
  padding-top: 20px;
}

.containerContent p {
  padding: 10px;
}

#pagination {
  width: 100%;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

#pagination a {
  margin: 15px;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
}

#pagination a:hover {
  cursor: pointer;
}
</style>
