console.log("cart");
function addCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
      alert(`Hello, you have selected ${item.name}`);
    } else {
      alert("Item not found");
    }
  }