const products = document.querySelector(".Products");

const fetchData = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .catch((error) => {
      console.log("Keine Daten Verfügbar", error);
      products.textContent = "Keine Suchergebnisse gefunden";
    });
};

const data = await fetchData();
// console.log(data);

const renderItems = (data) => {
  data.slice(0, 30).forEach((object) => {
    createItem(object);
  });
};

// unused helper functions

const filterData = (key) => {
  return data.map((object) => object[key]);
};

// Listeners

const filterListener = () => {
  const filters = document.querySelectorAll(".FilterGroup_Item");
  filters.forEach((filter) => {
    filter.addEventListener("change", () => {
      localStorage.setItem(`${filter.id}`, JSON.stringify(`${filter.value}`));
      applyAllFilters();
    });
  });
};

const seachListener = () => {
  const search = document.querySelector(".Search_Field");
  search.addEventListener("input", () => {
    applyAllFilters();
  });
};

const addToWishlist = () => {
  products.addEventListener("click", (e) => {
    if (!e.target.classList.contains("Item_Button")) return;

    const item = e.target.closest(".Item");
    const button = item.querySelector(".Item_Button");

    item.classList.toggle("Item-checked");

    if (item.classList.contains("Item-checked")) {
      button.textContent = "remove from wishlist";
    } else {
      button.textContent = "add to wishlist";
    }

    const productID = item.id;
    let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) ?? [];

    if (!wishlistItems.includes(productID)) {
      wishlistItems.push(productID);
    } else {
      const index = wishlistItems.indexOf(productID);
      wishlistItems.splice(index, 1);
    }
    console.log(wishlistItems);
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  });
};

const resetFilters = () => {
  const resetButton = document.querySelector(".FilterGroup_Button");
  const filters = document.querySelectorAll(".FilterGroup_Item");

  resetButton.addEventListener("click", () => {
    filters.forEach((filter) => {
      console.log(filter.id);
      localStorage.removeItem(`${filter.id}`);
      filter.selectedIndex = 0;
    });
    localStorage.removeItem("modifiedData");
    products.replaceChildren();
    reapplyFilters();
    reapplyWishlist();
  });
};

// Filter Functions

const applyAllFilters = () => {
  let modifiedData = data;
  modifiedData = filterCategory(modifiedData);
  modifiedData = filterPrice(modifiedData);
  modifiedData = filterRating(modifiedData);
  modifiedData = filterSort(modifiedData);
  modifiedData = filterWishlist(modifiedData);
  modifiedData = filterSearch(modifiedData);

  products.replaceChildren();
  renderItems(modifiedData);
  reapplyWishlist();

  localStorage.setItem("modifiedData", JSON.stringify(modifiedData));

  if (products.childElementCount === 0) {
    products.innerHTML = "No products are available with these selections.";
  }
};

const filterCategory = (modifiedData) => {
  const selectCategory = document.getElementById("select-category").value;
  if (selectCategory !== "" && selectCategory !== "all categorys") {
    return modifiedData.filter((product) => product.category === selectCategory);
  }
  if (selectCategory === "all categorys") {
    localStorage.removeItem("select-category");
  }
  return modifiedData;
};

const filterPrice = (modifiedData) => {
  const selectPrice = document.getElementById("select-price").value;
  if (selectPrice !== "" && selectPrice !== "all prices") {
    const hasPlus = selectPrice.includes("+");
    const [min, max] = hasPlus ? [Number.parseInt(selectPrice), Infinity] : selectPrice.split("-").map(Number);
    return modifiedData.filter((product) => product.price >= min && product.price <= max);
  }
  return modifiedData;
};

const filterRating = (modifiedData) => {
  const selectRating = document.getElementById("select-rating").value;
  if (selectRating !== "" && selectRating !== "all ratings") {
    const ratingRange = selectRating.split("-");
    return modifiedData.filter((product) => product.rating?.rate >= ratingRange[0] && product.rating?.rate <= ratingRange[1]);
  }
  return modifiedData;
};

const filterSort = (modifiedData) => {
  const selectSort = document.getElementById("select-sort").value;
  if (selectSort !== "" && selectSort !== "no sort") {
    if (selectSort === "price-asc") {
      return modifiedData.toSorted((a, b) => a.price - b.price);
    }

    if (selectSort === "price-desc") {
      return modifiedData.toSorted((a, b) => b.price - a.price);
    }

    if (selectSort === "rating-asc") {
      return modifiedData.toSorted((a, b) => a.rating?.rate - b.rating?.rate);
    }

    if (selectSort === "rating-desc") {
      return modifiedData.toSorted((a, b) => b.rating?.rate - a.rating?.rate);
    }
  }
  return modifiedData;
};

const filterWishlist = (modifiedData) => {
  const selectWishlist = document.getElementById("select-wishlist").value;

  if (localStorage.getItem("wishlist") === null) {
    localStorage.setItem("wishlist", JSON.stringify([]));
  }

  if (selectWishlist !== "" && selectWishlist !== "wihslist") {
    const wishlistIDs = JSON.parse(localStorage.getItem("wishlist")).map(Number); // wie .map((item) => Number(item))
    if (selectWishlist === "inWishlist") {
      return modifiedData.filter((product) => wishlistIDs.includes(product.id));
    }

    if (selectWishlist === "notInWishlist") {
      return modifiedData.filter((product) => !wishlistIDs.includes(product.id));
    }
  }
  return modifiedData;
};

const filterSearch = (modifiedData) => {
  const searchValue = document.getElementById("select-search").value.toLowerCase();
  modifiedData = modifiedData.filter((product) => product.title.toLowerCase().includes(searchValue) || product.price.toString().toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue));
  return modifiedData;
};

const reapplyFilters = () => {
  const restoredData = JSON.parse(localStorage.getItem("modifiedData"));
  const filters = document.querySelectorAll(".FilterGroup_Item");
  filters.forEach((filter) => {
    const filterValues = JSON.parse(localStorage.getItem(`${filter.id}`));
    filter.value = filterValues || filter.value;
  });

  if (restoredData === null) {
    renderItems(data);
  } else {
    renderItems(restoredData);
  }

  if (products.childElementCount === 0) {
    products.innerHTML = "No products are available with these selections.";
  }
};

const reapplyWishlist = () => {
  const wishlistIDs = JSON.parse(localStorage.getItem("wishlist")) ?? [];

  wishlistIDs.forEach((id) => {
    const product = document.getElementById(id);
    const button = product.querySelector(".Item_Button");
    product?.classList.toggle("Item-checked");
    button.textContent = "remove from wishlist";
  });
};

const createItem = (object) => {
  const markup = `      
      <div class="Item" id="${object.id}" data-wishlist="offWishlist">
        <img
          class="Item_Img"
          src="${object.image}"
          alt="Alt Text of the Image"
        />
        <div class="Item_Details">
          <div class="Item_Text">
            <p class="Item_Category">${object.category}</p>
            <h2 class="Item_Name">${object.title}</h2>
            <p class="Item_Description">${object.description}</p>
          </div>
          <div class="Item_End">
            <hr />
            <div class="Item_End2">
            <span class="Item_Price">${object.price}€</span>
            <button class="Item_Button">add to wishlist</button>
            <span class="Item_Rating">${object.rating?.rate}⭐</span>
            </div>
          </div>
        </div>
      </div>`;
  products.insertAdjacentHTML("beforeend", markup);
};

reapplyFilters();
reapplyWishlist();

filterListener();
seachListener();
resetFilters();
addToWishlist();
