import {getToken} from './token/token.js';
import {overview} from './overview.js'
import {getGenres} from './getGenres.js'
import {testApi} from './testApi.js';

const body = document.getElementById("main");
const containerFilms = document.createElement('div');
const link = "https://api.themoviedb.org/3/search/movie?api_key=";
const token = getToken();

let text = "star wars";
let data = [];

body.style.margin = "0";
body.style.padding = "0";
body.style.display = "flex";
body.style.justifyContent = "space-around";
body.style.flexWrap = "wrap";
body.style.width = "100%"

fetch(link + token + "&language=fr&query=" + text).then(function (response) {
    return response.json();
}).then(function (json) {
    for (let i = 0; i < json.results.length; i++) {
        let overviewData = [];
        overviewData.push(
            json.results[i].title,
            json.results[i].overview,
            json.results[i].release_date,
            json.results[i].poster_path
        );
        data.push(overviewData);
        // console.log(json.results[i]);
    }
    overview(body, data);
    console.log(json.results[0]);
    getGenres(json.results[0].genre_ids[0]);
    testApi();
    console.log(json.results[0].id);
    // getGenres(json.results[0].genre_ids[1]);
    // getGenres(json.results[0].genre_ids[2]);
});