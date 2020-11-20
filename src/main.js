import {overview} from './overview.js';
import {getGenres} from './getGenres.js';
import {api} from './api.js';
import {testModal} from './testModal.js';
import {viewsContent} from "./viewsContent.js";
import {dateFormat} from './dateFormat.js';

const body = document.getElementById("main");
const link = "https://api.themoviedb.org/3/search/movie?api_key=";
const token = myToken;

let containerFilms = document.createElement('div');
let btn = document.getElementById("btnSearch");
let text = "Star Wars";
let clicked = false;
let data = [];
// test
let modal = document.getElementById("modalCase");
let btnModal = document.getElementsByClassName("modalBtn");
// test id
let filmId = [];

containerFilms.style.display = "flex";
containerFilms.style.justifyContent = "space-around";
containerFilms.style.flexWrap = "wrap";
containerFilms.style.width = "100%";
containerFilms.id = "containerFilms";

testDiscoverMovies();
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
            filmId.push(json.results[i].id);
            data.push(overviewData);
        }
        overview(containerFilms, data);
        body.appendChild(containerFilms);
        openViews();
    });
}

function removeData(data) {
    for (let i = 0;i < 20 ; i++) {
        data.pop(); 
        filmId.pop();
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

function openViews() {
    let index = btnModal.length;
    for (let i = 0; i < index; i++) {
        btnModal[i].addEventListener("click", function() {
            modal.style.display = "block";
            api(filmId[i]);
        });
    }
    
    testModal();
}

function testDiscoverMovies() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;

    console.log("Today : " + today);
    getLastTwoWeeks(yyyy,mm,dd);
}

function getLastTwoWeeks(years, month, day) {
    let lastTwoWeeks = new Date();
    let dd = day;
    let mm = month;
    let yyyy = years;
    if ((dd - 14) < 0) {
        dd = 30 - 14;
        mm = mm - 1;
        if (mm < 10) mm = "0" + mm;
        if (mm === "00") {
            mm = 12;
            yyyy = yyyy - 1;
        }
    } else {
       dd = day - 14;
       if (dd < 10) dd = "0" + dd;
    }
    lastTwoWeeks = yyyy + '/' + mm + '/' + dd;
    console.log("Two weeks : " + lastTwoWeeks);
}