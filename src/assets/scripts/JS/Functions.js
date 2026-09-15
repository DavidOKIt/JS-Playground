// Eigenes Beispiel for fun

export const changeWindowTitle = () => {
  const originalTitle = document.title;

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = "Come back!";
    } else {
      document.title = originalTitle;
    }
    console.log("Visibility changed:", document.hidden);
  });
};

// Simple Function

let nubmerOne = 10;
let numberTwo = 7;

function multiply(x = "", y = "Keine Rechenoperation") {
  let result = x * y;

  return result;
}

const result = multiply(3, 5);
// console.log(result);

// checkAge function knapper schreiben

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }

function pow() {
  let x = prompt("x?");
  let n = prompt("n?");

  let result = x ** n;
  alert(result);
}
