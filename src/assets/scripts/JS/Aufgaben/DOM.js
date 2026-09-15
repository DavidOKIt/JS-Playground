// Fünf Wege, ein Element

// Lösung wurde eigentlich in DOM.md schon gezeigt. Zu beachten wäre noch das query # und . zur Erkennung von Klassen und IDs braucht.

// innerHTML gegen textContent

const security = () => {
  const eingabe = '<strong>Angebot</strong> <img src=x onerror="alert(1)">';

  document.querySelector(".eingabe").innerHTML = eingabe; // innerHTML stellt hier ein Risiko dar, da es auch Markup Code entgegennehmen würde über welchen dann schädliche <script> tags eingeschläußt werden können.
  document.querySelector(".eingabe").value = eingabe; // textContent oder value(bei Inputs) ist daher die sicherere Wahl
};

// Aussehen aus JavaScript ändern

const modifyHeading = () => {
  const h1 = document.querySelector("h1");
  h1.style.color = "red";
  h1.style.backgroundColor = "grey";
  h1.style.marginBottom = "2rem";
};

modifyHeading();
