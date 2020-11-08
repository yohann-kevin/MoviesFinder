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
        let div = document.createElement('div');
        div.style.width = "30%";
        let overviewData = [];
        // console.log(json.results[i]);
        overviewData.push(json.results[i].title, json.results[i].overview, json.results[i].release_date, json.results[i].poster_path);
        let title = document.createElement('h1');
        title.textContent = json.results[i].title;
        let description = document.createElement('p');
        description.textContent = json.results[i].overview;
        body.appendChild(div);
        div.appendChild(title);
        div.appendChild(description);
        data.push(overviewData);
    }
    overview(data);
    // console.log(data[0][0]);
});