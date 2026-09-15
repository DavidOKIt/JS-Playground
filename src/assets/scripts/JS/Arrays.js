let arr = ["apple", "banana", "orange", "kiwi", "grape"];
let arr2 = [
  5,
  "Text-Label",
  { userName: "John", userAge: 32 },
  function sayHi() {
    alert("Hi");
  },
  true,
];

// Beispiele für was möglich ist

// arr[2] = "sth else";
// console.log(arr[2]);
// console.log(arr.length);

// arr2[2].userName = "Dave"; // Zugruff auf object key innerhalb des arrays
// console.log(arr2[2].userName);

// console.log(arr2[3]()); // man kann auch funktionen aus dem arr aufrufen
// console.log(arr2.at(-1));  // Genau Position per Index aufrufen, negative Zahlen zählen von hinten sprich -1 ist die letzte Position im Array

// push and pop

// console.log(arr2.pop()); // entfernt das letzte Element aus dem Array und gibt es zurück
// console.log(arr2.push("new Element")); // fügt ein Element am Ende des Arrays hinzu und gibt die neue Länge zurück

// shift and unshift

// console.log(arr2.shift()); // entfernt das erste Element aus dem Array und gibt es zurück
// console.log(arr2.unshift("new Element")); // fügt ein Element am Anfang des Arrays hinzu und gibt die neue Länge zurück

// splice -> Kontrolle im array, Elemente durch genau index selection hinzufügen oder entfernen
// arr.splice(start, delete-count, newItem1, newItem2, ...)

// console.log(arr.splice(-2, 2, "Hello", "New"));
// console.log(arr);

//concat -> arrays zusammenfügen oder mit anderen werten zusammenfügen

// console.log(arr.concat(arr2));
// console.log(arr.concat("hello"));

// Loop over array

// for (let arrItem of arr) {
//   console.log(arrItem); // gibt alle Elemente des Arrays aus
// }

// arr.forEach((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

// Übungsaufgaben

// let styles = ["Jazz", "Blues", "Jax", "Lol", "yoo", "2x2"];

// let arrayLength = styles.length;
// let middleOfArray = arrayLength / 2;

// styles.push("Rock n Roll");
// styles[middleOfArray] = "Classics";

// console.log(styles.shift(0));
// console.log(styles);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let biggerNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

const multiplyAndSumArray = (array) => {
  let evenNumbers = array.filter((item) => item % 2 === 0);
  let multiplyNumbers = evenNumbers.map((item) => item * 2);
  let sum = multiplyNumbers.reduce((sum, current) => sum + current, 0);
  return sum;
};

// console.log(multiplyAndSumArray(numbers));

let users = [
  { name: "John", age: 30, isActive: true },
  { name: "Anna", age: 25, isActive: false },
  { name: "Pete", age: 40, isActive: true },
];

const getActiveNames = (users) => {
  let activeUsers = users.filter((user) => user.isActive === true);
  let user = activeUsers.map((user) => user.name);
  return user;
};

// console.log(getActiveNames(users));
