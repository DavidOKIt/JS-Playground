type flexible = string | number;

const value: flexible = 213;
const value2: flexible = "Hello";

const buttonOne = document.querySelector(".button") as HTMLButtonElement; // Type Assertion mit any
const buttonTwo = document.querySelector<HTMLButtonElement>(".button"); // Generics
const buttonThree = document.querySelector(".button"); // default : Element | null
