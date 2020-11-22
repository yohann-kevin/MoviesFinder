import {overview} from './overview.js';
import {api} from './api.js';
import {testModal} from './testModal.js';

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

getLastMovies();
// overviewApi(text);

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
    let tab = [];
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    tab.push(yyyy,mm,dd);
    return tab;
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
    lastTwoWeeks = yyyy + '-' + mm + '-' + dd;
    return lastTwoWeeks;
}

function getLastMovies() {
    let today = new Date();
    let tabDate = testDiscoverMovies();
    let years = tabDate[0];
    let month = tabDate[1];
    let day = tabDate[2];
    today = years + '-' + month + '-' + day;
    let lastTwoWeeks = getLastTwoWeeks(years, month, day);

    let discoverLink = "https://api.themoviedb.org/3/discover/movie?api_key=";
    let language = "&language=fr";
    let completedLink = "&sort_by=release_date.desc&page=1&release_date.gte=";
    let FinalLink = "&release_date.lte=";

    
    // console.log(discoverLink + token + language + completedLink + lastTwoWeeks + FinalLink + today);
    fetch(discoverLink + token + language + completedLink + lastTwoWeeks + FinalLink + today).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json.results);
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
    })
}