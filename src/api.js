import {getToken} from './token/token.js';
import {viewsContent} from './viewsContent.js';

const link = "https://api.themoviedb.org/3/movie/";
const token = getToken();
let filmData = [];
// let id = 11;

export function api(id) {
    fetch(link + id + "?api_key=" + token + "&language=fr").then(function (response) {
        return response.json();
    }).then(function (json) {
        filmData = [json.title, json.overview, json.release_date, json.poster_path];
        viewsContent(filmData);
    })
}