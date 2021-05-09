<template>
  <div id="modalCase" class="views" ref="modal">
    <div class="viewsContent" ref="content">
      <div class="viewsHeader">
        <div class="firstTitle">
          <h1 id="viewsTitle" class="modalTitle">{{ this.filmInfo.title }}</h1>
          <h2 id="tagline">{{ this.filmInfo.tagline }}</h2>
          <!-- <p id="years">(years)</p> -->
        </div>
        <span class="close" v-on:click="close()">&times;</span>
        <div class="subTitle">
          <p id="releaseDate">{{ this.filmInfo.release_date }}</p>
          <p id="nameGenre" v-for="(genre, i) in this.filmInfo.genres" :key="i">{{ genre.name }}</p>
          <p id="runtime">{{ this.filmInfo.runtime }}min</p>
        </div>
      </div>
      <div class="viewsBody">
        <div id="imgContainer">
          <img id="imgContent" :src="this.imgLink + this.filmInfo.poster_path">
        </div>
        <div id="allContent">
          <div id="firstContent">
            <p id="popularity">{{ this.filmInfo.vote_average }} & {{ this.filmInfo.popularity }}</p>
            <p id="voteCount">{{ this.filmInfo.vote_count }}</p>
            <a id="linkSite">(link)</a>
          </div>
          <div id="midContent">
            <h3 id="synopsis">Synopsis</h3>
            <p id="descriptionContent">{{ this.filmInfo.overview }}</p>
          </div>
          <div id="lastContent">
            <p id="status">{{ this.filmInfo.status }}</p>
            <p id="budget">{{ this.filmInfo.budget }}</p>
            <p id="revenue">{{ this.filmInfo.revenue }}</p>
            <p id="profit">{{ this.filmInfo.revenue - this.filmInfo.budget }}</p>
            <p id="prodCountries">production_countries -> name</p>
            <div id="prodCompanies"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import token from '../assets/json/token.json';

export default {
  data() {
    return {
      id: null,
      filmInfo: {},
      link: "https://api.themoviedb.org/3/movie/",
      imgLink: "https://image.tmdb.org/t/p/w300"
    }
  },
  props: {
    ids: Number
  },
  watch: {
    ids: function(newValue, oldValue) {
      this.id = newValue;
      console.log(newValue + " " + oldValue);
      this.findData();
    }
  },
  methods: {
    findData: function() {
      console.log(this.id);
      let finallyLink = this.link + this.id + "?api_key=" + token.token + "&language=fr";
      this.$axios.get(finallyLink).then(response => this.manageData(response));
    },
    manageData: function(response) {
      this.filmInfo = response.data;
      console.log(this.filmInfo);
    },
    close: function() {
      this.$emit("isclose");
    }
  },
}
</script>

<style>
.views {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: none;
}

.viewsContent {
  position: relative;
  background-color: #36393f;
  margin: auto;
  padding: 0;
  width: 100%;
  height: 100%;
  -webkit-animation-name: animateTop;
  -webkit-animation-duration: 0.4s;
  animation-name: animateTop;
  animation-duration: 0.4s;
}

@-webkit-keyframes animateTop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

@keyframes animateTop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

.close {
  text-align: center;
  width: 5%;
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
}

.close:hover,
.close:focus {
  padding-top: 5px;
  text-decoration: none;
  cursor: pointer;
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
}

.viewsHeader {
  padding: 10px;
  background-color: #2f3136;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.firstTitle {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
}

.subTitle {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

#viewsTitle {
  padding: 5px;
  text-align: center;
  font-size: 2rem;
}

#tagline {
  text-align: center;
  font-size: 1rem;
  padding: 20px;
}

#years {
  padding: 20px;
  font-size: 1rem;
}

#releaseDate {
  padding-left: 5px;
  padding-right: 15px;
}

#nameGenre {
  padding-right: 15px;
}

.viewsBody {
  padding-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #ffffff;
  background-color: #36393f;
}

#imgContainer {
  width: 20%;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
}

/* #imgContainer:hover {
  margin-left: 50px;
  margin-top: 40px;
  transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  cursor: pointer;
} */

#allContent {
  width: 75%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#firstContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

#popularity {
  padding-right: 5px;
}

#voteCount {
  padding-right: 5px;
}

#linkSite {
  padding: 0px 5px 0px 20px;
  text-decoration: none;
  color: #efefef;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
}

/* #linkSite:hover {
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
} */

#midContent {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

#synopsis {
  padding-bottom: 10px;
}

#descriptionContent {
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
}

#descriptionContent:hover {
  /* transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2); */
  cursor: default;
}

#lastContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

#status {
  padding-right: 5px;
}

#budget {
  padding-right: 5px;
}

#revenue {
  padding-right: 5px;
}

#profit {
  padding-right: 5px;
}

#prodCountries {
  padding-right: 5px;
}

#prodCompanies {
  padding-right: 5px;
}
</style>
