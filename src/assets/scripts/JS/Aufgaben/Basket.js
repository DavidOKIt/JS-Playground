// Der ganze Warenkorb - Königsaufgabe //

// Data

const data = [
  { id: "banane", name: "Bananas", price: 2.99, origin: "Ecuador" },
  { id: "apfel", name: "Apples", price: 3.99, origin: "Germany" },
  { id: "gurke", name: "Cucumbers", price: 1.99, origin: "Spain" },
  { id: "paprika", name: "Paprika", price: 0.99, origin: "Guatemala" },
];

// global variables

const basket = document.querySelector(".basket");
const clearBasketBtn = document.querySelector(".clearBasketBtn");
const sumField = document.querySelector(".sum");
const addItemBtn = document.querySelectorAll(".addItemBtn");

sumField.textContent = localStorage.getItem("sum") ?? 0;

const addItemObject = () => {
  addItemBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const dataAttribute = button.dataset.fruit;
      const object = data.find((key) => key.id === dataAttribute);

      localStorage.setItem(dataAttribute, JSON.stringify(object));
      renderItem(object);
      safeItems();
      calcualteBasketSum();
    });
  });
};

const calcualteBasketSum = () => {
  const allPrices = dataFilter("price");
  const sum = allPrices.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);

  localStorage.setItem("sum", sum);
  sumField.textContent = sum;
};

const renderItem = (object) => {
  const itemMarkup = `    
    <div class="item" data-id=${object.id}>
      <h3>${object.name}</h3>
      <p>Price:${object.price}</p>
      <p>Origin:${object.origin}</p>
    </div>`;
  basket.insertAdjacentHTML("beforeend", itemMarkup);
};

const safeItems = () => {
  const totalItems = [...basket.children];

  const restoredItems = totalItems.map((item) => {
    const dataAttribute = item.dataset.id;
    const object = data.find((key) => key.id === dataAttribute);
    return object;
  });
  localStorage.setItem("safedItems", JSON.stringify(restoredItems));
};

const renderSafedItems = () => {
  const safedItems = JSON.parse(localStorage.getItem("safedItems")) ?? [];

  safedItems.forEach((item) => {
    renderItem(item);
  });
};

const clearBasket = () => {
  clearBasketBtn.addEventListener("click", () => {
    localStorage.clear();
    basket.replaceChildren();
    sumField.textContent = "0";
  });
};

const dataFilter = (objectKey) => {
  const totalItems = [...basket.children];
  const totalObjects = totalItems.map((item) => {
    const dataAttribute = item.dataset.id;
    const object = data.find((key) => key.id === dataAttribute);
    return object[objectKey];
  });

  return totalObjects;
};

dataFilter("origin");

clearBasket();
addItemObject();
renderSafedItems();

// Optimierungen: Items stacken, also x2, x3 etc.
