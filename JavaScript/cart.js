let cartItem = [ { id: 3, name: "MacBook Air M1", price: 899.99, inStock: true, image: "../Image/img3.png", category: "topSold" },];
function addCart(id) {
  let item = products.find(p => p.id == id);
  let copyItem = { ...item, quantity: 1 };

  if (cartItem.some(p => p.id == id)) {
    cartItem = cartItem.map(p => {
      if (p.id === id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
  } else {
    cartItem.push(copyItem);
    
  }
  displayCart();
}
//  Creating content fot cart Html
const cartDisplay = document.getElementById('cart');
function displayCart() {
  cartDisplay.innerHTML = "";
  cartItem.forEach(product=>{
  const card= document.createElement("div");
  card.className="grid-item";

  card.innerHTML=`
  <img src="${product.image}" alt="${product.name}" class="product-img" />
  <h3>${product.name}</h3>
  <div class="card-footer">
    <p class="text-container">Price: $${product.price}</p>
    <p>Quantity: ${product.quantity}</p>
    <button class="addToCart" onclick="addCart(${product.id})">Add More</button>
  </div>
`;
  cartDisplay.appendChild(card);
})
console.log(cartDisplay.innerHTML)
};
displayCart()