const keyReplacement = () => {
  let key = prompt("What do you want to know about the user?", "age");

  let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    "likes birds": true,
  };

  console.log(user[key]);
  console.log(user);

  // mit user.value lassen sich nur fest im code property beeinflussen. Mit [key] lassen sich auch dynamische propertys beeinflussen, die bspw. vom user kommen

  // delete user.age; // value über key löschen
  // user.isAdmin = false; // value über key ändern
};

function makeUser(userName, userAge) {
  return {
    userName,
    userAge,
  };
}

let userNew = makeUser("John", 30);

const forInLoop = () => {
  let user = {
    name: "John",
    age: 30,
    isAdmin: true,
  };

  for (let key in user) {
    console.log(user[key]); // John, 30, true
  }

  console.log("name" in user); // true, user hat property name
};

// Übungsaufgaben

let user = {
  name: "John",
  age: "30",
  number: "123",
};

let user2 = {};

const isEmptyNewStyle = (obj) => Object.keys(obj).length === 0;

// const isEmptyOldStyle = (obj) => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };

// console.log(isEmptyOldStyle(user));
// console.log(isEmptyNewStyle(user));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let salaries2 = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Logan: 130,
  Paul: 130,
  Steve: 130,
};

// const sumSalaries = () => {
//   if (Object.keys(salaries).length > 0) {
//     const sum = salaries.John + salaries.Ann + salaries.Pete;
//     return sum;
//   } else {
//     return 0;
//   }
// };

const sumSalaries = () =>
  Object.keys(salaries).length > 0
    ? salaries.John + salaries.Ann + salaries.Pete
    : 0;

console.log(sumSalaries());

const collectAndSumValues = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

// console.log(collectAndSumValues(salaries2));

let menu = {
  width: 200,
  height: 300,
  depth: 250,
  title: "My menu",
  collapsed: false,
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};

// multiplyNumeric(menu);

let product = { title: "Laptop", price: 1000, oldPrice: 2000, inStock: true };

const applyDiscount = (product, percent, priceKey = "price") => {
  console.log(product[priceKey]);
  if (typeof product[priceKey] === "number") {
    let discount = (product[priceKey] / 100) * percent;
    let newPrice = product[priceKey] - discount;

    return { ...product, [priceKey]: newPrice };
  } else {
    return "Not a Value";
  }
};

// console.log(applyDiscount(product, 80, "title"));

console.log(body.firstChild.data);
