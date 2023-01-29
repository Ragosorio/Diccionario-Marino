function Card(title, imageUrl, text, buttonText) {
    this.title = title;
    this.text = text;
    this.buttonText = buttonText;
    this.imageUrl = imageUrl;
}

let card1 = new Card("Titulo", "./img/r.jpeg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt, odit obcaecati dicta molestiae ullam, quam omnis saepe illo veniam placeat ipsum vel iste quas voluptatum.", "Boton");
let card2 = new Card("Titulo", "./img/r.jpeg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt, odit obcaecati dicta molestiae ullam, quam omnis saepe illo veniam placeat ipsum vel iste quas voluptatum.", "Boton");
let card3 = new Card("Titulo", "./img/r.jpeg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt, odit obcaecati dicta molestiae ullam, quam omnis saepe illo veniam placeat ipsum vel iste quas voluptatum.", "Boton");
let card4 = new Card("Titulo", "./img/r.jpeg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt, odit obcaecati dicta molestiae ullam, quam omnis saepe illo veniam placeat ipsum vel iste quas voluptatum.", "Boton");

const cardContainer = document.getElementById("card-container");

let rowDiv = document.createElement("div");
rowDiv.classList.add("row");

let cards = [card1, card2, card3, card4];
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-small", "card", "mx-2", "my-3");


    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = card.title;
    
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = card.imageUrl;
    cardImage.alt = card.title;

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = card.text;

    let cardButton = document.createElement("a");
    cardButton.classList.add("btn", "btn-outline-primary");
    cardButton.href = "#";
    cardButton.textContent = card.buttonText;


    cardBody.appendChild(cardTitle);
    cardDiv.appendChild(cardImage);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    cardDiv.appendChild(cardBody);

    rowDiv.appendChild(cardDiv);
}

cardContainer.appendChild(rowDiv);
