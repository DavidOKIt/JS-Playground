// Attribute lesen und schreiben

const manipulateAttributes = () => {
  const testLink = document.querySelector(".testLink");
  const productID = testLink.getAttribute("data-product-id");
  const href = testLink.getAttribute("href");

  testLink.setAttribute("href", "_blank");
  testLink.setAttribute("data-product-id", "99");

  console.log(productID);
  console.log(href);
};

// manipulateAttributes();

// Eine Produktkarte selbst bauen

const createCard = () => {
  const list = document.getElementById("list");
  const card = document.createElement("div");
  const heading = document.createElement("h3");
  const paragraph = document.createElement("p");

  card.classList.add("card");
  heading.textContent = "Card Heading";
  paragraph.textContent = "Card Text Content lalala";

  card.append(heading, paragraph);
  list.append(card);
  console.log(card.parentElement);
  console.log(card.nextElementSibling);
};

// createCard();
