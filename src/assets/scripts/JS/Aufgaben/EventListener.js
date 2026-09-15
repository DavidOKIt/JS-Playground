// Der erste Klick

const modifyBox = () => {
  const button = document.querySelector(".button");
  const box = document.querySelector(".box");

  const changeColor = () => {
    box.style.backgroundColor = getRandomColor();
  };

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  button.addEventListener("click", changeColor);
};

// modifyBox();

// Was im event steckt

const findProductID = () => {
  const list = document.getElementById("liste");
  list.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const getParent = clickedElement.closest(".karte");
    const productID = getParent.getAttribute("data-produkt-id");
    console.log(productID);

    return productID;
  });
};

findProductID();

// Vier Event-Typen und ein Abschied

const testInputTriggers = () => {
  const searchfield = document.querySelector(".searchfield");
  searchfield.addEventListener("input", () => {
    // bei jeder neuen input.value
    console.log("trigger: input");
  });

  searchfield.addEventListener("change", () => {
    // immer dann wenn man das feld mit einem geänderten Wert zum Wert davor verlässt
    console.log("trigger: change");
  });

  searchfield.addEventListener("focus", () => {
    // wenn in focus (also reingeklickt oder mit tab)
    console.log("trigger: focus");
  });

  searchfield.addEventListener("keydown", () => {
    // bei jedem Tastendruck im feld und beim verlassen mit tabfocus -> aber nicht das verlassen wird getrackt sondern der Tastenanschlag mit tab
    console.log("trigger: keydown");
  });
};

// testInputTriggers();

const oneTimeButton = () => {
  const button = document.querySelector(".oneTimeButton");
  button.addEventListener(
    "click",
    () => {
      alert("This is a one time call!");
    },
    { once: true },
  );
};

// oneTimeButton();

// TestSuche

const searchOnEnter = () => {
  const searchfield = document.querySelector(".searchfield");
  searchfield.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Suche nach:", searchfield.value);
    }
  });
};

searchOnEnter();
