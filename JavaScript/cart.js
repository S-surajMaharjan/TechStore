let cartItem=[];

if(localStorage.getItem("cart")){
  cartItem = JSON.parse(localStorage.getItem("cart"))
  let CartQuantity = JSON.parse(localStorage.getItem("quantity"))
  document.querySelector('.cartQuantity').innerHTML= CartQuantity;
}else{
  let CartQuantity=0;
}
// function to add items in cart and update the number in above cart
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
    CartQuantity=0;
    //to update the number above cart
    cartItem.forEach(p=>{
      CartQuantity += p.quantity;
    });
    localStorage.setItem("quantity",JSON.stringify(CartQuantity))


    //updating the number above cart
    document.querySelector('.cartQuantity').innerHTML= CartQuantity;

    //saving the cartItem in localStorage to get cart even after page refresh
    toMemory();
}
//function to save data to localStorage
 function toMemory(){
  localStorage.setItem('cart',JSON.stringify(cartItem));
 };

//  Creating content fot cart Html
if(page=="cart"){
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
};
displayCart()
}