const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const images = data.message;
        const container = document.getElementById("dog-image-container");
        images.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            container.appendChild(img);
        });
    });

const breedUrl = 'https://dog.ceo/api/breeds/list/all';
fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breeds = Object.keys(data.message);
        const list = document.getElementById("dog-breeds");
        breeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            list.appendChild(li);
        });
    });

const list = document.getElementById("dog-breeds");
list.addEventListener("click", event => {
    const li = event.target;
    li.style.color = "blue";
});

const dropdown = document.getElementById("breed-dropdown");
dropdown.addEventListener("change", event => {
    const letter = event.target.value;
    const list = document.getElementById("dog-breeds");
    const lis = list.getElementsByTagName("li");
    for (const li of lis) {
        if (li.textContent.startsWith(letter)) {
            li.style.display = "list-item";
        } else {
            li.style.display = "none";
        }
    }
});