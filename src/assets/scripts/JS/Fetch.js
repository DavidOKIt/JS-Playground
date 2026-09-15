const teaCard = (data) => {
  const markup = `    
    <div class="TeaCard">
      <img src="${data.src}" alt="TeeBild" />
      <h1>${data.productname}</h1>
      <p>${data.description}</p>
    </div>`;

  document.querySelector(".Gallery").insertAdjacentHTML("beforeend", markup);
};

const dogImg = (data) => {
  data.message.forEach((imgUrl) => {
    const markup = `
      <img src="${imgUrl}" class="DogCard" alt="Dog Bild" />`;

    document
      .querySelector(".DogGallery")
      .insertAdjacentHTML("beforeend", markup);
  });
};

const renderItems = (data) => {
  data.forEach((object) => {
    teaCard(object);
  });
};

const getTeaData = () => {
  fetch("/src/assets/data/tea.json")
    .then((response) => response.json())
    .then((data) => renderItems(data))
    .catch((error) => {
      console.log("Fehler beim Laden der Tee-Daten:", error);
      document.querySelector(".Gallery").innerHTML = "Keine Daten verfügbar";
    });
};

const getDogData = (count) => {
  const safeCount = Math.min(count, 50);
  fetch(`https://dog.ceo/api/breeds/image/random/${safeCount}`)
    .then((response) => response.json())
    .then((data) => dogImg(data))
    .catch((error) => {
      console.log("Fehler beim Laden der Dog-Daten:", error);
      document.querySelector(".DogGallery").innerHTML = "Keine Dogs verfügbar";
    });
};

getTeaData();
getDogData(4);
