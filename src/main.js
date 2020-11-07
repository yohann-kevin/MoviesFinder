const body = document.getElementById("main");
const token = "bebb39192704ce0e1759ca4263703f32";

let text = "star";

body.style.margin = "0";
body.style.padding = "0";
body.style.display = "flex";
body.style.justifyContent = "space-around";
body.style.flexWrap = "wrap";
body.style.width = "100%"

fetch("https://api.themoviedb.org/3/search/movie?api_key=" + token + "&language=fr&query=" + text).then(function (response) {
    return response.json();
}).then(function (json) {
    // console.log(json.results);
    for (let i = 0; i < json.results.length; i++) {
        let div = document.createElement('div');
        div.style.width = "30%";
        // div.style.backgroundColor = "red";
        // div.style.height = '75px';
        console.log(json.results[i]);
        let title = document.createElement('h1');
        title.textContent = json.results[i].title;
        let description = document.createElement('p');
        description.textContent = json.results[i].overview;
        body.appendChild(div);
        div.appendChild(title);
        div.appendChild(description);
    }
    console.log(json.results.length);
});