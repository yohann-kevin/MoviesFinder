let modal = document.getElementById("modalCase");

// let btn = document.getElementById("btnModal");

let btn = document.getElementsByClassName("modalBtn");

let span = document.getElementsByClassName("close")[0];

export function testModal() {
    span.onclick = function () {
        modal.style.display = "none";
    }
}