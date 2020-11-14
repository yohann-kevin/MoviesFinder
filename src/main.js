import {getToken} from './token/token.js';
import {overview} from './overview.js'
import {getGenres} from './getGenres.js'
import {testApi} from './testApi.js';

const body = document.getElementById("main");
const link = "https://api.themoviedb.org/3/search/movie?api_key=";
const token = getToken();

let containerFilms = document.createElement('div');
let btn = document.getElementById("btnSearch");
let text = "Star Wars";
let clicked = false;
let data = [];

containerFilms.style.display = "flex";
containerFilms.style.justifyContent = "space-around";
containerFilms.style.flexWrap = "wrap";
containerFilms.style.width = "100%"
containerFilms.id = "containerFilms";

overviewApi(text);

btn.addEventListener("click", function() {
    let newText = document.getElementById("searchFilm").value;
    removeData(data);
    if (clicked) overviewApi(newText);
});

function overviewApi(txt) {
    fetch(link + token + "&language=fr&query=" + txt).then(function (response) {
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
        }
        overview(containerFilms, data);
        body.appendChild(containerFilms);
        // console.log(json.results[0]);
        // getGenres(json.results[0].genre_ids[0]);
        // testApi();
        // console.log(json.results[0].id);
    });
}

function removeData(data) {
    for (let i = 0;i < 20 ; i++) {
        data.pop(); 
    }
    removeContent();
}

function removeContent() {
    let index = containerFilms.children.length;
    for (let i = 0; i < index;i++) {
        containerFilms.children[0].remove();
    }
    clicked = true;
}