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
        console.log(json);
        console.log(
            json.title,
            json.tagline,
            json.release_date,
            json.genres,
            json.runtime,
            json.poster_path,
            json.vote_average,
            json.popularity,
            json.vote_count,
            json.homepage,
            json.overview,
            json.status,
            json.budget,
            json.revenue,
            json.production_countries[0].name,
            json.production_companies
        )
        filmData = [json.title, json.overview, json.release_date, json.poster_path];
        viewsContent(filmData);
    })
}