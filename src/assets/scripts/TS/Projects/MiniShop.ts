const shop = document.querySelectorAll(".cart") as NodeListOf<HTMLElement>;

shop.forEach((cartItem) => {
  const addItemButton = cartItem.querySelector(".addItem") as HTMLButtonElement;
  const basket = cartItem.querySelector(".basket") as HTMLDivElement;
  const basketCount = cartItem.querySelector("#basket-count") as HTMLElement;
  const itemInput = cartItem.querySelector("#item-name") as HTMLInputElement;

  addItemButton.disabled = true;

  itemInput.addEventListener("input", () => {
    if (itemInput.value === "") {
      addItemButton.disabled = true;
    } else {
      addItemButton.disabled = false;
    }
  });

  addItemButton.addEventListener("click", () => {
    createItem();
    itemCount();
    itemInput.value = "";
  });

  addItemButton.addEventListener("click", () => {
    if (itemInput.value === "") {
      addItemButton.disabled = true;
    } else {
      addItemButton.disabled = false;
    }
  });

  const createItem = () => {
    const item = document.createElement("div");
    item.classList.add("item");
    basket.append(item);

    const articleName = document.createElement("span") as HTMLInputElement;
    articleName.textContent = itemInput?.value;
    articleName.textContent ||= "Artikelname";

    const boughtButton = document.createElement("button");
    boughtButton.classList.add("bought");
    boughtButton.textContent = "Gekauft";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Löschen";

    item.append(articleName, boughtButton, deleteButton);

    deleteButton.addEventListener("click", () => {
      item.remove();
      itemCount();
    });

    boughtButton.addEventListener("click", () => {
      item.classList.toggle("green");
    });
  };

  const itemCount = () => {
    const count = basket.childElementCount;
    basketCount.textContent = `${count} articles in basket`;
  };
});
