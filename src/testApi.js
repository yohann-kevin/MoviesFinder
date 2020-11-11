import {getToken} from './token/token.js';

const link = "https://api.themoviedb.org/3/movie/";
const token = getToken();
let id = 11;

export function testApi() {
    fetch(link + id + "?api_key=" + token + "&language=fr").then(function (response) {
        return response.json();
    }).then(function (json) {
        let filmData = [json.title, json.overview, json.release_date, json.poster_path];
        console.log(json);
    })
}