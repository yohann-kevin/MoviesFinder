let title = document.getElementById("viewsTitle");

export function viewsContent(data) {
    // console.log(data[0]);
    title.textContent = data[0];
}