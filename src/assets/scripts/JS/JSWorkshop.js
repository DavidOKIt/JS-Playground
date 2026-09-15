// Vergleichs Operatoren

// 1 = 1 // zuweisen
// 1 == 1 // vergleichen
// 1 === 1 // vergleichen mit typ

// && // und
// || // oder
// !! // nicht
// ?? // nullish

// // Rechen Operatoren

//   + // Addition
//   - //
//   * // Multiplikation
//   / // Division
//   % // Rest
//   >= // Größer GLeich
//   <= // Kleiner Gleich

// Function

function myName(vorname, nachname) {
  console.log(`Mein ${vorname} Name ist`, vorname, nachname);
}

myName("sebastian", "wendlandt");

const calculateSum = (number1, number2) => {
  let sum = number1 + number2;
  // console.log(sum);
  return sum;
};

console.log(calculateSum(2, 5));
