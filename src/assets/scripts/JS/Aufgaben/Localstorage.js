// Ein Zähler, der das Neuladen übersteht

const safeCount = () => {
  const countButton = document.querySelector(".countButton");
  const clearButton = document.querySelector(".clearButton");
  const count = document.querySelector(".count");

  let countValue = JSON.parse(localStorage.getItem("count"));
  if (countValue === null) {
    countValue = 0;
    localStorage.setItem("count", JSON.stringify(countValue)); // alternativ hier auch mit Number() machbar weil wir ausschließlich Zahlen behandeln
  }
  count.textContent = countValue;

  countButton.addEventListener("click", () => {
    countValue++;
    localStorage.setItem("count", JSON.stringify(countValue));
    count.textContent = countValue;
  });

  clearButton.addEventListener("click", () => {
    localStorage.removeItem("count");
    countValue = 0;
    count.textContent = countValue;
  });
};

safeCount();

// Löschen - einzeln und komplett

const clearDifferences = () => {
  const addItemBtn = document.querySelector(".addItemBtn");
  const clearBasketBtn = document.querySelector(".clearBasketBtn");
  const clearEverythingBtn = document.querySelector(".clearEverythingBtn");
  const basket = document.querySelector(".basket");
  let itemCount = 0;

  addItemBtn.addEventListener("click", () => {
    itemCount = localStorage.getItem("itemCount");
    itemCount++;
    localStorage.setItem("itemCount", itemCount);

    const itemMarkup = `<div class="item">Im a Item</div>`;
    basket.insertAdjacentHTML("beforeend", itemMarkup);
  });

  clearBasketBtn.addEventListener("click", () => {
    itemCount = 0;
    basket.replaceChildren();
    localStorage.removeItem("itemCount");
  });

  clearEverythingBtn.addEventListener("click", () => {
    localStorage.clear();
    basket.replaceChildren();
  });

  const restoreItems = () => {
    const itemCount = localStorage.getItem("itemCount") || 0;
    const itemMarkup = `<div class="item">Im a Item</div>`;

    for (let n = 0; n < itemCount; n++) {
      basket.insertAdjacentHTML("beforeend", itemMarkup);
    }
  };
  restoreItems();
};

// clearDifferences();

// selbe function nur strukturierter gebaut

const basketLogic = () => {
  const addItemBtn = document.querySelector(".addItemBtn");
  const clearBasketBtn = document.querySelector(".clearBasketBtn");
  const clearEverythingBtn = document.querySelector(".clearEverythingBtn");
  const basket = document.querySelector(".basket");
  const itemMarkup = `<div class="item">Im a Item</div>`;
  let itemCount = 0;

  // helper functions

  const addItem = () => {
    basket.insertAdjacentHTML("beforeend", itemMarkup);
  };

  const clearBasket = () => {
    itemCount = 0;
    basket.replaceChildren();
  };

  const restoreItems = () => {
    const itemCount = localStorage.getItem("itemCount") || 0;

    for (let n = 0; n < itemCount; n++) {
      addItem();
    }
  };

  addItemBtn.addEventListener("click", () => {
    itemCount = localStorage.getItem("itemCount");
    itemCount++;
    localStorage.setItem("itemCount", itemCount);

    addItem();
  });

  clearBasketBtn.addEventListener("click", () => {
    localStorage.removeItem("itemCount");
    clearBasket();
  });

  clearEverythingBtn.addEventListener("click", () => {
    localStorage.clear();
    clearBasket();
  });

  restoreItems();
};

basketLogic();

// Der Unterschied zum sessionStorage, praktisch

const sessionDifference = () => {
  localStorage.setItem("localStorage", "1"); // bleibt on refresh, bleibt on tab close
  sessionStorage.setItem("sessionStorage", "1"); // bleibt on refresh, geht on tab close
};

// sessionDifference();
