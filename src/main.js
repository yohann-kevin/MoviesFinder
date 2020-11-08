import {getToken} from './token/token.js';
import {overview} from './overview.js'

const body = document.getElementById("main");
const containerFilms = document.createElement('div');
const token = getToken();

let text = "star";
let data = [];

body.style.margin = "0";
body.style.padding = "0";
body.style.display = "flex";
body.style.justifyContent = "space-around";
body.style.flexWrap = "wrap";
body.style.width = "100%"

fetch("https://api.themoviedb.org/3/search/movie?api_key=" + token + "&language=fr&query=" + text).then(function (response) {
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
});