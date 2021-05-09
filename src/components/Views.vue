<template>
  <div id="modalCase" class="views" ref="modal">
    <div class="viewsContent">
      <div class="viewsHeader">
        <div class="firstTitle">
          <h1 id="viewsTitle" class="modalTitle">Title</h1>
          <h2 id="tagline">Tagline Lorem ipsum dolor sit amet consectetur...</h2>
          <p id="years">(years)</p>
        </div>
        <span class="close">&times;</span>
        <div class="subTitle">
          <p id="releaseDate">release_date</p>
          <p id="nameGenre">genre -> name</p>
          <p id="runtime">runtime</p>
        </div>
      </div>
      <div class="viewsBody">
        <div id="imgContainer">
          <img id="imgContent" src="#">
        </div>
        <div id="allContent">
          <div id="firstContent">
            <p id="popularity">vote_average & popularity</p>
            <p id="voteCount">vote_count</p>
            <a id="linkSite">(link)</a>
          </div>
          <div id="midContent">
            <h3 id="synopsis">Synopsis</h3>
            <p id="descriptionContent">overviews : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati labore tempora repudiandae nostrum, impedit,
                placeat assumenda pariatur possimus deleniti aspernatur,
                maiores optio blanditiis incidunt? Qui rem suscipit nostrum.
                Laboriosam a tenetur minima molestias impedit facere blanditiis.
                Quae amet pariatur, beatae id veritatis quidem, tenetur unde nam
                nisi blanditiis aliquam sequi debitis dicta alias suscipit vero
                delectus nostrum excepturi perferendis quos? Similique maxime
                repudiandae saepe sit praesentium esse sequi laudantium totam amet,
                magni commodi hic placeat molestiae distinctio corrupti fugiat. Minus
                non quia sed, maxime dolor voluptatibus eum esse aperiam molestias
                delectus? Iusto ab nesciunt illo tempore a repellendus modi adipiscis.
            </p>
          </div>
          <div id="lastContent">
            <p id="status">status</p>
            <p id="budget">budget</p>
            <p id="revenue">revenue</p>
            <p id="profit">profit</p>
            <p id="prodCountries">production_countries -> name</p>
            <div id="prodCompanies"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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

/* Modal Content */
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
  animation-duration: 0.4s
}

/* Add Animation */
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

/* The Close Button */
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
  color: #36393f;
  text-decoration: none;
  cursor: pointer;
    /* transform: scale(1.5);
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5); */
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

/* #runtime {} */

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

#imgContainer:hover {
  margin-left: 50px;
  margin-top: 40px;
  /* transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3); */
  cursor: pointer;
}

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

#linkSite:hover {
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: underline;
}

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
