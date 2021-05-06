<template>
  <div id="containerFilms">
    <div class="overFilms modalBtn" style="width: 28%;">
      <h1>Title</h1>
      <img src="https://image.tmdb.org/t/p/w300/qelTNHrBSYjPvwdzsDBPVsqnNzc.jpg">
      <div class="containerContent">
        <p>Date</p>
        <p>Il y a bien longtemps, dans une galaxie très lointaine... 
          La guerre civile fait rage entre l'Empire galactique et l'Alliance 
          rebelle. Capturée par les troupes de choc de l'Empereur menées par 
          le sombre et impitoyable Dark Vador, la princesse Leia Organa 
          dissimule les plans de l’Étoile Noire, une sta...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#containerFilms {
  background-color: #36393f;
  color: #ffffff;
  padding-top: 15px;
}

.overFilms {
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
</style>
