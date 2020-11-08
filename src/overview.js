export function overview(container, data) {

    for (let i = 0; i < data.length; i++) {

        let div = document.createElement('div');
        let title = document.createElement('h1');
        let releaseDate = document.createElement('p');
        let description = document.createElement('p');
    
        div.style.width = "30%";

        title.textContent = data[i][0];
        description.textContent = data[i][1];
        releaseDate.textContent = data[i][2];

        container.appendChild(div);
        div.appendChild(title);
        div.appendChild(releaseDate);
        div.appendChild(description);
    }

    console.log(data[0][2]);
    console.log(data.length);
    
}