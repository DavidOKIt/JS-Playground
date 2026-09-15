// FizzBuzz

const fizzBuzz = () => {
  for (let number = 1; number <= 30; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(number);
    }
  }
};

// fizzBuzz();

// while und do...while

// Die Aufgabe ist ein schlechtes Beispiel da wir so an unser Ergebniss kommen und eigentlich dafür nie einen Loop bauen würden der immer wieder budget um bat reduziert.
// Eigentliches Learning wäre das while erst checkt dann durchzählt und do...while ja mindestens einmal läuft, was hier dann aber zu einem error führen würde wenn das budget von vorne rein zu klein ist.

const budgetCalc = () => {
  let budget = 1000;
  let bat = 249;

  const calc = Math.floor(budget / bat);
  console.log(calc);
};

// budgetCalc();

// for...of, for...in und break

const sumPrices = () => {
  const prices = [249, 0, 89, 199, 0, 129, 349];
  const bat = { name: "Vertex 04", price: 249, form: "diamant" };

  let sum = 0;
  for (let price of prices) {
    if (price === 0) continue;
    if (sum + price > 500) break;
    sum += price;
  }
  console.log(sum);

  for (let key in bat) {
    // let value = bat[key];
    // console.log(key, value);
    console.log(key, bat[key]);
  }
  // console.log(Object.keys(bat), Object.values(bat)); // gibt arrays der Werte zurück
};

sumPrices();

// forEach über querySelectorAll

const getItems = () => {
  const items = document.querySelectorAll(".item");
  items.forEach((item, index) => {
    item.classList.add("sichtbar");
    item.id = index + 1;
    if (item.id % 3 === 0) {
      item.classList.add("hervorgehoben");
    }
  });
};

getItems();
