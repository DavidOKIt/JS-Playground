// Der ganze Warenkorb - Königsaufgabe //

// Data

const Banane = {
  name: "Banane",
  price: 2.99,
  origin: "Ecuador",
};

const Apfel = {
  name: "Apfel",
  price: 3.99,
  origin: "Germany",
};

const Gurke = {
  name: "Gurke",
  price: 1.99,
  origin: "Spain",
};

// global variables

const basket = document.querySelector(".basket");
const clearBasketBtn = document.querySelector(".clearBasketBtn");
const sumField = document.querySelector(".sum");
const addItemBtn = document.querySelectorAll(".addItemBtn");

let bananeCount = localStorage.getItem("bananeCount") || 0;
let apfelCount = localStorage.getItem("apfelCount") || 0;
let gurkeCount = localStorage.getItem("gurkeCount") || 0;

sumField.textContent = localStorage.getItem("totalSum") || 0;

const addItemObject = () => {
  addItemBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const data = button.dataset.fruit;

      // hier könnte man vielleicht data-parameter machen und es mit dem object gleichnamig halten um
      // conditional komplett zu umgehen

      switch (data) {
        case "banane":
          localStorage.setItem("banane", JSON.stringify(Banane));
          bananeCount++;
          localStorage.setItem("bananeCount", Number(bananeCount));
          renderItem(Banane);
          break;
        case "apfel":
          localStorage.setItem("apfel", JSON.stringify(Apfel));
          apfelCount++;
          localStorage.setItem("apfelCount", Number(apfelCount));
          renderItem(Apfel);
          break;
        case "gurke":
          localStorage.setItem("gurke", JSON.stringify(Gurke));
          gurkeCount++;
          localStorage.setItem("gurkeCount", Number(gurkeCount));
          renderItem(Gurke);
          break;
        default:
          console.log("Dieses Produkt gibt es nicht :(");
      }
      calcualteBasketSum();
    });
  });
};

// hier geht aufjedenfall irgendwas fancy mit filter & map
const calcualteBasketSum = () => {
  let bananeSum = 0;
  let apfelSum = 0;
  let gurkeSum = 0;

  if (bananeCount > 0) {
    const bananeObject = JSON.parse(localStorage.getItem("banane"));
    const bananeNumber = localStorage.getItem("bananeCount");

    bananeSum = bananeObject.price * Number(bananeNumber);
  }

  if (apfelCount > 0) {
    const apfelObject = JSON.parse(localStorage.getItem("apfel"));
    const apfelNumber = localStorage.getItem("apfelCount");

    apfelSum = apfelObject.price * Number(apfelNumber);
  }

  if (gurkeCount > 0) {
    const gurkeObject = JSON.parse(localStorage.getItem("gurke"));
    const gurkeNumber = localStorage.getItem("gurkeCount");

    gurkeSum = gurkeObject.price * Number(gurkeNumber);
  }

  let totalSum = bananeSum + apfelSum + gurkeSum;
  sumField.textContent = totalSum;
  localStorage.setItem("totalSum", totalSum);
};

const renderItem = (itemData) => {
  const itemMarkup = `    
    <div class="item">
      <h3>${itemData.name}</h3>
      <p>Price:${itemData.price}</p>
      <p>Origin:${itemData.origin}</p>
    </div>`;
  basket.insertAdjacentHTML("beforeend", itemMarkup);
};

const restoreItems = () => {
  const bananeCount = localStorage.getItem("bananeCount");
  for (let i = 0; i < bananeCount; i++) {
    renderItem(Banane);
  }
  const apfelCount = localStorage.getItem("apfelCount");
  for (let i = 0; i < apfelCount; i++) {
    renderItem(Apfel);
  }
  const gurkeCount = localStorage.getItem("gurkeCount");
  for (let i = 0; i < gurkeCount; i++) {
    renderItem(Gurke);
  }
};

const clearBasket = () => {
  clearBasketBtn.addEventListener("click", () => {
    localStorage.clear();
    basket.replaceChildren();
    sumField.textContent = "0";
    bananeCount = 0;
    apfelCount = 0;
    gurkeCount = 0;
  });
};

clearBasket();
restoreItems();
addItemObject();
