console.log("content");
let count = 0;

function idElement(idData) {
  const container = document.getElementById(idData);
  const filteredProducts = products.filter(product => product.category === idData);
  count = 0;

  filteredProducts.forEach(product => {
    if ((page === "all") || (count < 3 && page === "main")) {
      const card = document.createElement("div");
      card.className = "grid-item";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img" />
        <h3>${product.name}</h3>
        <div class="card-footer">
          <p class="text-container">Price: $${product.price}</p>
          <button onclick="addCart(${product.id})">Add to Cart</button>
        </div>
      `;

      container.appendChild(card);
      count++;
    }
  });
}
