import {dateFormat} from './dateFormat.js';
import {img} from './img.js';

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
let profit = document.getElementById("profit");

let prodCountries = document.getElementById("prodCountries");
let prodCompanies = document.getElementById("prodCompanies");

export function viewsContent(data) {
    title.textContent = data[0];
    tagline.textContent = data[1];
    years.textContent = formatYears(data[2]);
    releaseDate.textContent = dateFormat(data[2]);
    nameGenre.textContent = getGenreName(data[3]);
    runtime.textContent = convertMinute(data[4]);
    imgContent.src = img(data[5]);
    imgContent.alt = data[0];
    popularity.textContent = data[6] + " " + data[7];
    voteCount.textContent = data[8];
    linkSite.textContent = "Official site : " + data[0];
    linkSite.href = data[9];
    descriptionContent.textContent = data[10];
    status.textContent = data[11];
    budget.textContent = formatRevenueAndBudget("Budget : ",data[12]);
    revenue.textContent = formatRevenueAndBudget("Revenue : ",data[13]);
    profit.textContent = computeProfit(data[12],data[13]);
    prodCountries.textContent = data[14];
    prodCompanies.textContent = data[15][0].name;
    let companiesLogo = document.createElement("img");
    prodCompanies.appendChild(companiesLogo);
    companiesLogo.src = img(data[15][0].logo_path);
}

function formatYears(date) {
    let lastDate = new Date(date);
    let newDate = lastDate.getFullYear();
    return "(" + newDate + ")";
}

function getGenreName(genres) {
    let index = genres.length;
    let allGenreName = "";
    for (let i = 0; i < index; i++) {
        let name = genres[i].name;
        allGenreName += name;
        allGenreName += ", ";
    }
    return allGenreName;
}

function convertMinute(minute) {
    let hours = Math.floor(minute / 60);
    let minutes = minute % 60;
    let finalHours = hours + "h" + minutes + "min";
    return finalHours;
}

function formatRevenueAndBudget(string, num) {
    let newBudget = num.toLocaleString();
    let symbol = " $";
    newBudget = string + newBudget + symbol;
    return newBudget;
}

function computeProfit(budget,revenue) {
    let computedProfit = revenue - budget;
    let string = "Profit : ";
    let symbol = " $";
    computedProfit = computedProfit.toLocaleString();
    computedProfit = string + computedProfit + symbol;
    return computedProfit;
}