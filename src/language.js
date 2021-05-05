const token = myToken;
let testLink = "https://api.themoviedb.org/3/configuration/languages?api_key=";
let allLanguage = [];

export function TestLanguage() {
    fetch(testLink + token).then(function (response) {
        return response.json();
    }).then(function (json) {
        allLanguage.push(json);
        // console.log(json[0].iso_639_1);
        // console.log(json[0].english_name);
        let index = allLanguage[0].length;
        let allLanguageName = [];
        let allLanguageIso = [];
        for (let i = 0; i < index; i++) {
            allLanguageName.push(allLanguage[0][i].english_name);
            allLanguageIso.push(allLanguage[0][i].iso_639_1);
        }
        console.log(allLanguageName);
        console.log(allLanguageIso);
    })
}