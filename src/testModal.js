let modal = document.getElementById("modalCase");

// let btn = document.getElementById("btnModal");

let btn = document.getElementsByClassName("modalBtn");

let span = document.getElementsByClassName("close")[0];

export function testModal() {
    // console.log(btn[0]);
    // btn.onclick = function() {
    // modal.style.display = "block";
    // }
    // btn.addEventListener("click", function() {
    //     modal.style.display = "block";
    // });

    span.onclick = function() {
    modal.style.display = "none";
    }
}