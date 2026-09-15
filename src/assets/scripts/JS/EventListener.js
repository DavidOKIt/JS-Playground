const button = document.getElementById("exampleButton");
const div = document.getElementById("exampleDiv");
const text = document.getElementById("text");

button.addEventListener("click", (event) => {
  div.classList.toggle("red");
  text.remove();
  // button.hidden = true;
  // div.style.backgroundColor = "red";
  console.log(event); // object mit infos zum getriggerten event
});

// eventListener entfernen -> geht nur mit functions

function sayHi() {
  console.log("Hi");
}
button.addEventListener("click", sayHi);
setTimeout(() => {
  button.removeEventListener("click", sayHi);
}, 3000);

// Übungsaufgaben
