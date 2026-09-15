// localStorage methods

localStorage.setItem("item1", "3,50"); // Item hinzufügen
localStorage.setItem("item2", "10,50");
localStorage.setItem("item3", "15,50");

localStorage.removeItem("item1"); // Item entferen

console.log(localStorage.getItem("item2")); // value per key auslesen
console.log(localStorage.key(0)); // key per index auslesen
console.log(localStorage.length); // Anzahl key: value pairs auslesen
// localStorage.clear(); // gesamten Storage löschen

// Übungsaufgabe Counter

const counterBtn = document.querySelector(".counterBtn");
const counter = document.querySelector(".counter");
let number = Number(counter.textContent);

const btnClick = () => {
  counterBtn.addEventListener("click", () => {
    number++;
    localStorage.setItem("counter", number);
    counter.textContent = localStorage.getItem("counter");
  });
  counter.textContent = localStorage.getItem("counter");
};

btnClick();

// Übungsaufgabe Textarea

const textarea = document.getElementById("area1");
const clearBtn = document.getElementById("clearBtn");

textarea.addEventListener("input", () => {
  localStorage.setItem("inputContent", textarea.value);
  console.log(textarea.value);
});

textarea.value = localStorage.getItem("inputContent");

// clear für alle

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("inputContent");
  localStorage.removeItem("counter");
  localStorage.clear();
  textarea.value = "";
  counter.textContent = "0";
  basket.innerHTML = "";
});

// Übungsaufgabe Objects storen

const item = {
  name: "Rübe",
  price: 9.99,
  id: 30,
};

const item2 = {
  name: "Löffel",
  price: 8.99,
  id: 30,
};

// localStorage.setItem("user", JSON.stringify(item)); // Object speichern
// const storedUser = JSON.parse(localStorage.getItem("user")); // Object auslesen

const addItemBtn = document.querySelector(".addItem");
const basket = document.querySelector(".basket");

const addItem = (object) => {
  addItemBtn.addEventListener("click", () => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(object);
    localStorage.setItem("items", JSON.stringify(items));

    renderSingleItem(object);
  });
};

const renderSingleItem = (item) => {
  const cartItem = document.createElement("div");
  const itemTitle = document.createElement("h2");
  const itemPrice = document.createElement("span");

  cartItem.classList.add("item");
  cartItem.append(itemTitle, itemPrice);
  itemTitle.textContent = item.name;
  itemPrice.textContent = item.price;

  basket.append(cartItem);
};

addItem(item);

const storedItems = JSON.parse(localStorage.getItem("items")) || [];
storedItems.forEach(renderSingleItem);
