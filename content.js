let count=0;
//let page="all";
  function idElement(idData){
  const container=document.getElementById(idData);
  const filteredProducts = products.filter(product => product.category === idData);
  count=0;
  filteredProducts.forEach(product => {
    
    if((page=="all")|| (count<3 && page=="main")){
    const card = document.createElement("div");
    card.className = "grid-item";
    /**
    for checking and to overview only
     */
    card.style.backgroundImage = product.image ? `url(${product.image})` : "none";
    card.style.backgroundColor = "black"; 
    
    card.innerHTML = `
  <h3>${product.name}</h3>
  <div class="card-footer">
    <p class="text-container">Price: $${product.price}</p>
    <button onclick="addCart(${product.id})">Add to Cart</button>
  </div>
`;

    container.appendChild(card);
    count ++;
    }})};