const link = "https://api.themoviedb.org/3/genre/movie/list?api_key="
const token = myToken;

let genreName;

export function getGenres(id) {
    fetch(link + token + "&language=fr").then(function (response) {
        return response.json();
    }).then(function (json) {
        let genres = json.genres;
        for (let i = 0; i < json.genres.length; i++) {
            if (genres[i].id === id) {
                genreName = genres[i].name;
                console.log(genreName);
            }
        }
    })
}