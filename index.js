const items = [
  {
    name: "Not suspicious candy",
    price: 19.99,
    description: "Candy that has definitely not been tampered with.",
    img: "img/not-sus-candy.png",
    alt: "A bag of candy",
    inStock: true,
    category: "food",
  },
];

const DOMSelectors = {
  container: document.querySelector(".container"),
};

function makeCard(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">

            <h2 class="card-name">${card.name}</h2>
            <img class="card-img" src="${card.img}" alt="${card.alt}"/>
            <p class="card-description">${card.description}</p>
            <p class="card-price">$${card.price}</p>
            <button class="card-button">Add to Cart</button>
        </div>`
  );
}

items.forEach((card) => makeCard(card));

/* function inject(album) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
      <img class="display-img" src="${album.url}"/>
      <h2 class="display-artist">${album.artist}</h2>
      <h3 class="display-album">${album.title}</h3>
      <button class="remove btn">Remove Album</button>
    </div>`
  );
} */
