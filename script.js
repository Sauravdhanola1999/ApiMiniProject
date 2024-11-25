let button = document.getElementById("button");
let div = document.getElementById("container");
let cl = document.getElementById("clButton");
button.addEventListener("click", function handleClick() {
    const apiUrl = "https://hp-api.onrender.com/api/characters";
    fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(userData => {
            console.log('User Data:', userData);
            for (let item of userData) {
                let card = document.createElement("div");
                let image = document.createElement("img");
                let name = document.createElement("p");

                if (item.image) {
                    image.setAttribute("src", item.image);
                } else {
                    image.setAttribute("src", "https://avatar.iran.liara.run/public/boy?username=Ash")
                }
                image.style.width = "300px";
                image.style.height = "450px";
                name.innerText = item.name;

                card.appendChild(image);
                card.appendChild(name);
                div.appendChild(card);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
cl.addEventListener("click", function clearContent() {
    div.innerHTML = "";
});