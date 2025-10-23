const items = [
  // Scarlet & Violet - Temporal Forces
  {
    name: "Temporal Forces Booster Pack",
    price: 4.49,
    description:
      "A single booster pack containing 10 random Temporal Forces cards.",
    img: "img/temporal-forces-booster-pack.png",
    alt: "Temporal Forces booster pack",
    inStock: true,
    category: "Temporal Forces",
  },
  {
    name: "Temporal Forces Booster Bundle",
    price: 26.99,
    description:
      "Includes 6 Temporal Forces booster packs for even more pulls.",
    img: "img/temporal-forces-booster-bundle.png",
    alt: "Temporal Forces booster bundle",
    inStock: true,
    category: "Temporal Forces",
  },
  {
    name: "Temporal Forces Elite Trainer Box",
    price: 49.99,
    description: "Includes 9 booster packs, card sleeves, dice, and more.",
    img: "img/temporal-forces-etb.png",
    alt: "Temporal Forces Elite Trainer Box",
    inStock: true,
    category: "Temporal Forces",
  },
  {
    name: "Temporal Forces Build & Battle Box",
    price: 24.99,
    description:
      "Pre-release kit with 4 booster packs and a ready-to-play deck.",
    img: "img/temporal-forces-build-battle.png",
    alt: "Temporal Forces Build & Battle Box",
    inStock: true,
    category: "Temporal Forces",
  },

  // Scarlet & Violet - Paradox Rift
  {
    name: "Paradox Rift Booster Pack",
    price: 4.49,
    description:
      "A single booster pack featuring futuristic and ancient Pokémon.",
    img: "img/paradox-rift-booster-pack.png",
    alt: "Paradox Rift booster pack",
    inStock: true,
    category: "Paradox Rift",
  },
  {
    name: "Paradox Rift Booster Bundle",
    price: 26.99,
    description: "Includes 6 booster packs with both ancient and future forms.",
    img: "img/paradox-rift-booster-bundle.png",
    alt: "Paradox Rift booster bundle",
    inStock: true,
    category: "Paradox Rift",
  },
  {
    name: "Paradox Rift Elite Trainer Box",
    price: 49.99,
    description:
      "Comes with 9 booster packs, exclusive sleeves, and accessories.",
    img: "img/paradox-rift-etb.png",
    alt: "Paradox Rift Elite Trainer Box",
    inStock: true,
    category: "Paradox Rift",
  },
  {
    name: "Paradox Rift Premium Checklane Blister",
    price: 13.99,
    description:
      "Includes 1 booster pack, 3 cards with an evolution line, and a collectible coin.",
    img: "img/paradox-rift-blister.png",
    alt: "Paradox Rift checklane blister",
    inStock: true,
    category: "Paradox Rift",
  },

  // Scarlet & Violet - Obsidian Flames
  {
    name: "Obsidian Flames Booster Pack",
    price: 4.49,
    description: "A single pack featuring the mighty Tera Charizard ex.",
    img: "img/obsidian-flames-booster-pack.png",
    alt: "Obsidian Flames booster pack",
    inStock: true,
    category: "Obsidian Flames",
  },
  {
    name: "Obsidian Flames Booster Box",
    price: 119.99,
    description:
      "A sealed display containing 36 Obsidian Flames booster packs.",
    img: "img/obsidian-flames-booster-box.png",
    alt: "Obsidian Flames booster box",
    inStock: true,
    category: "Obsidian Flames",
  },
  {
    name: "Obsidian Flames Elite Trainer Box",
    price: 49.99,
    description:
      "Comes with 9 booster packs, sleeves, energy cards, and accessories.",
    img: "img/obsidian-flames-etb.png",
    alt: "Obsidian Flames Elite Trainer Box",
    inStock: true,
    category: "Obsidian Flames",
  },
  {
    name: "Obsidian Flames Build & Battle Stadium",
    price: 59.99,
    description:
      "Includes two Build & Battle Boxes and 11 total booster packs.",
    img: "img/obsidian-flames-battle-stadium.png",
    alt: "Obsidian Flames Build & Battle Stadium",
    inStock: true,
    category: "Obsidian Flames",
  },

  // Scarlet & Violet - Paldea Evolved
  {
    name: "Paldea Evolved Booster Pack",
    price: 4.49,
    description:
      "A single pack featuring Meowscarada, Skeledirge, and Quaquaval.",
    img: "img/paldea-evolved-booster-pack.png",
    alt: "Paldea Evolved booster pack",
    inStock: true,
    category: "Paldea Evolved",
  },
  {
    name: "Paldea Evolved Booster Bundle",
    price: 26.99,
    description: "Includes 6 booster packs from the Paldea Evolved set.",
    img: "img/paldea-evolved-booster-bundle.png",
    alt: "Paldea Evolved booster bundle",
    inStock: true,
    category: "Paldea Evolved",
  },
  {
    name: "Paldea Evolved Elite Trainer Box",
    price: 49.99,
    description: "Includes 9 booster packs, sleeves, dice, and a storage box.",
    img: "img/paldea-evolved-etb.png",
    alt: "Paldea Evolved Elite Trainer Box",
    inStock: true,
    category: "Paldea Evolved",
  },
  {
    name: "Paldea Evolved 3-Pack Blister",
    price: 13.99,
    description: "A blister pack with 3 boosters and a holographic promo card.",
    img: "img/paldea-evolved-blister.png",
    alt: "Paldea Evolved 3-pack blister",
    inStock: true,
    category: "Paldea Evolved",
  },

  // Scarlet & Violet - 151
  {
    name: "Pokémon 151 Booster Pack",
    price: 4.99,
    description: "A single booster pack featuring the original Kanto Pokémon.",
    img: "img/151-booster-pack.png",
    alt: "Pokémon 151 booster pack",
    inStock: true,
    category: "151",
  },
  {
    name: "Pokémon 151 Booster Bundle",
    price: 29.99,
    description: "Includes 6 booster packs full of nostalgic Kanto favorites.",
    img: "img/151-booster-bundle.png",
    alt: "Pokémon 151 booster bundle",
    inStock: true,
    category: "151",
  },
  {
    name: "Pokémon 151 Elite Trainer Box",
    price: 54.99,
    description:
      "Includes 9 booster packs, sleeves, dice, and an illustrated guidebook.",
    img: "img/151-etb.png",
    alt: "Pokémon 151 Elite Trainer Box",
    inStock: true,
    category: "151",
  },
  {
    name: "Pokémon 151 Binder Collection",
    price: 24.99,
    description: "Includes 4 booster packs and a mini collector’s binder.",
    img: "img/151-binder-collection.png",
    alt: "Pokémon 151 Binder Collection",
    inStock: true,
    category: "151",
  },
];

const cart = [];
let totalCost = 0;

// DOM selectors

const DOMSelectors = {
  container: document.querySelector(".container"),
  button: document.querySelector(".card-button"),
  price: document.querySelector(".card-price"),
  description: document.querySelector(".card-description"),
  img: document.querySelector(".card-img"),
  name: document.querySelector(".card-title"),
  alt: document.querySelector(".card-alt"),
  cart: document.querySelector(".cart"),
  cost: document.querySelector(".total-cost"),
};

// create card function
function makeCard(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title="${card.name}" data-catagory="${card.category}">
            <h2 class="card-title">${card.name}</h2>
            <img class="card-img" src="${card.img}" alt="${card.alt}"/>
            <p class="card-description">${card.description}</p>
            <p class="card-price">$${card.price}</p>
            <button class="card-button">Add to Cart</button>
        </div>`
  );
}

function insertCartItem(card) {
  DOMSelectors.cart.insertAdjacentHTML(
    "beforeend",
    `<div class="cart-item">
      <h2 class="card-title">${card.name}</h2>
      <img class="card-img" src="${card.img}" alt="${card.alt}"/>
      <p class="card-price">$${card.price}</p>
    </div>`
  );
}

const cost = document.querySelectorAll(".total-cost");

function addToCart(event) {
  const buttons = document.querySelectorAll(".card-button");
  //create array if we need more than forEach
  const btnArray = Array.from(buttons);
  console.log(buttons);

  btnArray.forEach((button) => {
    button.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      console.log(event.target.closest(".card").getAttribute("data-title"));
      items.forEach((item) => {
        if (
          item.name === event.target.closest(".card").getAttribute("data-title")
        ) {
          insertCartItem(item);
          cart.push(item);
          totalCost += item.price;
          DOMSelectors.cost.textContent = `Total: $${totalCost.toFixed(2)}`;
        }

        console.log(totalCost);
      });
      console.log(cart);
    });
    // find the item in the array that matches the card title
    // add that item to the cart array
  });
}

function filterByCategory(category) {
  const display = document.querySelector(".container");
  const filteredCards = items.filter((card) => card.category === category);
  display.innerHTML = "";
  filteredCards.forEach((card) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card" data-title="${card.name}" data-catagory="${card.category}">
            <h2 class="card-title">${card.name}</h2>
            <img class="card-img" src="${card.img}" alt="${card.alt}"/>
            <p class="card-description">${card.description}</p>
            <p class="card-price">$${card.price}</p>
            <button class="card-button">Add to Cart</button>
        </div>`
    );
  });
  console.log(filteredCards);
}

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      filterByCategory(event.target.textContent);
      addToCart();
    });
  });
}

// loop through array and create a card for each object
items.forEach((card) => makeCard(card));
setupFilterButtons();

addToCart();
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
