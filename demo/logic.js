const cart = []; // Assume cart is defined elsewhere
let prod = {
  name: "Pokémon 151 Binder Collection",
  price: 24.99,
  description: "Includes 4 booster packs and a mini collector’s binder.",
  img: "img/151-binder-collection.png",
  alt: "Pokémon 151 Binder Collection",
  inStock: true,
  category: "151",
};

function checkCart(prod) {
  const found = cart.find((cartItem) => cartItem.name === prod.name);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({ ...prod, quantity: 1 });
  }
}

checkCart(prod);
console.log(cart);
checkCart(prod);
console.log(cart);
