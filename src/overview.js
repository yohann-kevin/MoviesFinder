import {img} from './img.js';
import {dateFormat} from './dateFormat.js';

export function overview(container, data) {
    // console.log(data.length);
    for (let i = 0; i < data.length; i++) {

        let div = document.createElement('div');
        let title = document.createElement('h1');
        let containerContent = document.createElement('div');
        let releaseDate = document.createElement('p');
        let description = document.createElement('p');
        let image = document.createElement('img');
    
        div.style.width = "28%";
        div.classList.add("overFilms");
        div.classList.add("modalBtn");
        containerContent.classList.add("containerContent");

        title.textContent = data[i][0];
        description.textContent = data[i][1];
        if (data[i][1].length > 300) description.textContent = data[i][1].slice(0 , 300) + "...";
        if(data[i][1] === "") description.textContent = "Aucune description n'est disponible !";
        releaseDate.textContent = dateFormat(data[i][2]);
        image.src = img(data[i][3]);

        container.appendChild(div);
        div.appendChild(title);
        div.appendChild(image);
        containerContent.appendChild(releaseDate);
        containerContent.appendChild(description);
        div.appendChild(containerContent);
    }

    // console.log(data[0][1]);
    // console.log(data.length);

}