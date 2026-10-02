const body = document.querySelector(".TypeSpeedTest_Body");
const buttons = document.querySelectorAll(".Settings_Button");
const input = document.querySelector(".TypeSpeedTest_Input");
let currentParagraph = "";

const getData = () => {
  return fetch("/src/assets/data/data.json").then((response) => response.json());
};

const data = await getData();
// console.log(data);

const btnListener = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const difficulty = button.id;
      const randomText = Math.floor(Math.random() * 10);
      const paragraph = data[difficulty][randomText].text;

      console.log(paragraph);
      renderText(paragraph);
    });
  });
};

let currentWordIndex = 0;
let words = [];

const renderText = (paragraph) => {
  body.innerHTML = paragraph
    .split(" ")
    .map((word) => `<span class="Word">${word}</span>`)
    .join(" ");
  currentWordIndex = 0;
  words = Array.from(document.querySelectorAll(".Word")).map((word) => word.textContent);
};

const checkTyping = () => {};

input.addEventListener("input", checkTyping);

input.addEventListener("keydown", (e) => {
  // console.log(words);
  const inputValue = input.value;

  if (e.code === "Space") {
    console.log(inputValue);
    const currentWord = words[currentWordIndex];

    if (inputValue.split(" ").at(-1) == currentWord) {
      console.log("funkt");
      document.querySelectorAll(".Word")[currentWordIndex].classList.add("Word-correct");
      document.querySelectorAll(".Word")[currentWordIndex].classList.remove("Word-incorrect");
    } else {
      console.log("funkt nicht");
      document.querySelectorAll(".Word")[currentWordIndex].classList.add("Word-incorrect");
      document.querySelectorAll(".Word")[currentWordIndex].classList.remove("Word-correct");
    }
    currentWordIndex++;
  }
});

btnListener();
