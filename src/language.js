const token = myToken;
let testLink = "https://api.themoviedb.org/3/configuration/languages?api_key=";

export function TestLanguage() {
    fetch(testLink + token).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        console.log(json.length);
        console.log(json[0].iso_639_1);
        console.log(json[0].english_name);
    })
}