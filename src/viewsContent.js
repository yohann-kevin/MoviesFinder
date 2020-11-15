
let title = document.getElementById("viewsTitle");
let tagline = document.getElementById("tagline");
let years = document.getElementById("years");

let releaseDate = document.getElementById("releaseDate");
let nameGenre = document.getElementById("nameGenre");
let runtime = document.getElementById("runtime");

let imgContent = document.getElementById("imgContent");
let popularity = document.getElementById("popularity");
let voteCount = document.getElementById("voteCount");

let linkSite = document.getElementById("linkSite");
let descriptionContent = document.getElementById("descriptionContent");
let status = document.getElementById("status");

let budget = document.getElementById("budget");
let revenue = document.getElementById("revenue");
let prodCountries = document.getElementById("prodCountries");

let prodCompanies = document.getElementById("prodCompanies");

export function viewsContent(data) {
    console.log(data);
    title.textContent = data[0];
    tagline.textContent = data[1];
    years.textContent = formatYears(data[2]);
    releaseDate.textContent = data[2];
    // nameGenre.textContent = data[3];
    runtime.textContent = data[4];
    imgContent.textContent = data[5];
    popularity.textContent = data[6] + " " + data[7];
    voteCount.textContent = data[8];
    linkSite.textContent = data[9];
    descriptionContent.textContent = data[10];
    status.textContent = data[11];
    budget.textContent = data[12];
    revenue.textContent = data[13];
    prodCountries.textContent = data[14];
    // prodCompanies.textContent = data[15];
}

function formatYears(date) {
    let lastDate = new Date(date);
    let newDate = lastDate.getFullYear();
    return "(" + newDate + ")";
}