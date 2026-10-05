const display = document.querySelector(".Calculator_Display");
const buttons = document.querySelectorAll(".Calculator_Button");

let currentInput = "";
let previousInput = "";
let currentOperator = "";
let previousOperator = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => handleButtonClick(e));
});

const handleButtonClick = (e) => {
  if (e.target.textContent === "C") {
    currentInput = "";
    previousInput = "";
    currentOperator = "";
    previousOperator = "";
    display.textContent = 0;
  }

  if (e.target.textContent === "CE") {
    currentInput = "";
  }

  if (e.target.className === "Calculator_Button number") {
    if (currentInput.length < 7) {
      currentInput = currentInput + e.target.textContent;
    }
    display.textContent = currentInput;
  }

  if (e.target.className === "Calculator_Button operator") {
    if (previousInput !== "" && currentInput !== "") {
      const result = calcualte(previousInput, currentInput, currentOperator);
      currentInput = result;
      display.textContent = result;
    }
    currentOperator = e.target.textContent;
    previousInput = currentInput;
    currentInput = "";
  }

  if (e.target.textContent === "=") {
    const result = calcualte(previousInput, currentInput, currentOperator);
    display.textContent = result;
  }
};

const calcualte = (num1, num2, op) => {
  if (op === "+") {
    const result = Number(num1) + Number(num2);
    return result;
  } else if (op === "-") {
    const result = Number(num1) - Number(num2);
    return result;
  } else if (op === "x") {
    const result = Number(num1) * Number(num2);
    return result;
  } else if (op === "/" && num2 === "0") {
    return "Cant divide by zero";
  } else if (op === "/" && num2 !== "0") {
    const result = Number(num1) / Number(num2);
    return result;
  }
};
