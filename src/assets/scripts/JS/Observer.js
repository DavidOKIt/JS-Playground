// Ersten Aufgaben

const sections = document.querySelectorAll(".Section");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("visible");
        // console.log(entry.target); // gibt html element
        // console.log(entry.isIntersecting); // gibt boolean wert über Sichtbarkeit
        // console.log(entry.intersectionRatio); // gibt Sichtbarkeit in Prozent
        entry.target.classList.add("Section-visible");
        obs.unobserve(entry.target); // entfernt einmal observed target aus der observation -> event feurt nicht nochmal
      } else {
        console.log("not visible");
      }
    });
  },
  {
    root: null, // element das getrackt werden soll, on default der viewport
    rootMargin: "0px 0px 0px 0px", // margin um das element herum -> fals früher oder später getriggert werden soll
    threshold: 0, // Sichtbarkeit in Prozent -> wenn erfüllt wird callback gefeuert
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

const imgObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const dataAttribute = entry.target.dataset.src;
        entry.target.src = dataAttribute;
        obs.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px 200px 0px",
  },
);

const images = document.querySelectorAll(".Section_img");
images.forEach((img) => {
  imgObserver.observe(img);
});

// loadinglazy superior?

// Aufgabe mit fetch

const cardSection = document.querySelector(".CardSection");
let indexStart = 0;
let indexEnd = 10;

const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => {
      console.log("Fehler:", error);
    });
};

const data = await getData();

const createItem = (object) => {
  const markup = `
    <div class="Card">
      <h3 class="Card_Title">${object.title}</h3>
      <p class="Card_Text">${object.body}</p>
      <span>${object.id}</span>
    </div>`;

  cardSection.insertAdjacentHTML("beforeend", markup);
};

const createLoader = () => {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  cardSection.after(loader);
};

const renderItems = () => {
  data.slice(indexStart, indexEnd).forEach((object) => {
    createItem(object);
  });
};

const loaderObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        indexStart += 10;
        indexEnd += 10;
        renderItems();

        if (indexEnd >= 110) {
          console.log("fired");
          obs.disconnect();
        }

        // obs.unobserve(entry.target);
      }
    });
    // if (entries[0].isIntersecting) { // geht auch aber nur bei genau einem zu trackendem element, mit forEach ist der Standard
    //   console.log("fired");
    // }
  },
  {
    rootMargin: "0px 0px 200px 0px",
  },
);

renderItems();
createLoader();

const loaders = document.querySelectorAll(".loader");
console.log(loaders);

loaders.forEach((loader) => {
  loaderObserver.observe(loader);
});
