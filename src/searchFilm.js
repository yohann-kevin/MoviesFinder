let btn = document.getElementById("btnSearch");
let txt = "Star Wars";
let clicked = false;

export function searchFilm() {
    btn.addEventListener("click", function() {
        let newText = document.getElementById("searchFilm").value;
        console.log('plop : ' + newText);
        newText;
        clicked = true;
    });
    if (clicked) {
        return newText;
    } else if (!clicked) {
        return txt;
    }
}