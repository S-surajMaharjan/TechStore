  let page="main";
    idElement("offer");
    idElement("topSold");
    idElement("laptops");
    idElement("computers");
    idElement("accessories");
  function addCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
      alert(`Hello, you have selected ${item.name}`);
    } else {
      alert("Item not found");
    }
  }