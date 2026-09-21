// Der erste Fetch

const placeholderFetch = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Fehler beim Laden", error));
  console.log("fertig");
};

// placeholderFetch();

// Die Posts auf der Seite darstellen

// const createItem = (object) => {
//   const item = document.createElement("div");
//   const itemHeading = document.createElement("h3");
//   const itemParagraph = document.createElement("p");
//   item.classList.add("item");
//   itemHeading.textContent = object.title;
//   itemParagraph.textContent = object.body;
//   item.append(itemHeading, itemParagraph);
//   list.append(item);
// };

const list = document.getElementById("list");

const getItemData = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((data) => renderItems(data))
    .catch((error) => {
      console.log("Fehler beim Laden", error);
      list.textContent = "Keine Items vorhanden";
    });
};

const createItem2 = (object) => {
  const itemMarkup = `
    <div class="item">
      <h2>${object.title}</h2>
      <p>${object.body}</p>
    </div>`;
  list.insertAdjacentHTML("beforeend", itemMarkup);
};

const renderItems = (data) => {
  data.slice(0, 10).forEach((object) => createItem2(object));
};

getItemData();
