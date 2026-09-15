import { changeWindowTitle } from "./Functions";
changeWindowTitle();

// Klassischer while Loop executed so lange bis die Bedingung nach while falsy wird

const whileLoop = () => {
  let startNumber = 0;
  while (startNumber < 5) {
    startNumber++;
    alert(startNumber);
  }
};

// whileLoop();

// Spezifischer Usecase, läuft einmal druch (egal ob true oder false) und prüft dann normal wie im while Loop -> ist nur genau dafür da

const doLoop = () => {
  let startNumber = 0;
  do {
    startNumber++;
    alert(startNumber);
  } while (startNumber < 5);
};

// doLoop();

// For Loop, (begin; condition; step) -> condition wird auf falsy geprüft, wenn ja stoppt der Loop. Executed am Anfang einmal den Wert der inline-Variable (kann auch von außen reingereicht werden)

const forLoop = () => {
  for (let startNumber = 0; startNumber < 50; startNumber++) {
    alert(startNumber);
    if (startNumber == 15) break;
    if (startNumber == 15) continue;
  }
};

// forLoop();

// bsp. für einen infinite Loop (mit break)

const infiniteLoop = () => {
  while (true) {
    const testbox = document.getElementById("testbox");

    const button = document.createElement("button");
    button.classList.add("delete");
    button.textContent = "Yoo";
    testbox.appendChild(button);

    const buttonCount = document.querySelectorAll("button").length;
    if (buttonCount > 100) break;
  }
};

// infiniteLoop();

// Übungsaufgaben

const outputEvenNumbers = () => {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

// sumUntilLimit(100);

// let zahlen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const zahlenFilter = zahlen.filter((zahl) => zahl % 2 === 0);
// console.log("zahlenFilter:", zahlenFilter);

// outputEvenNumbers();

const fizzBuzz = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzBuzz();

const sumUntilLimit = (limit) => {
  let i = 0;
  let sum = 0;

  while (true) {
    i++;
    if (i % 4 == 0) continue;
    sum += i;
    if (sum > limit) break;
  }
  console.log(sum);
};

// sumUntilLimit(1000);

const forEachLoop = () => {
  const getItem = document.querySelectorAll(".itemBoxItem");
  getItem.forEach((item) => {
    item.classList.add("newClass");
  });
};

// forEachLoop();
