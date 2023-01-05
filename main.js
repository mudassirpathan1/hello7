const menuItems = [
    {
      name: "Spaghetti",
      price: 12.99,
    },
    {
      name: "Pizza",
      price: 14.99,
    },
    {
      name: "Salad",
      price: 8.99,
    },
  ];
  
  const menu = document.querySelector("#menu-items");
  
  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
  
    const itemElement = document.createElement("div");
    itemElement.classList.add("menu-item");
  
    const nameElement = document.createElement("h3");
    nameElement.textContent = item.name;
  
    const priceElement = document.createElement("p");
    priceElement.textContent = `$${item.price.toFixed(2)}`;
  
    itemElement.appendChild(nameElement);
    itemElement.appendChild(priceElement);
  
    menu.appendChild(itemElement);
  }

  
  