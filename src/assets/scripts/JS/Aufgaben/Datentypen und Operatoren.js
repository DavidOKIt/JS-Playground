// Zu jedem Datentyp ein Wert
const dataTypes = () => {
  const preis = 9.99;
  const productName = "Flow";
  const available = true;
  const productDetails = {};

  let nameToCome;
  let ageToCome = null;
  const bigInt = 123456789012345678901234567890n;

  console.log(typeof preis);
  console.log(typeof productName);
  console.log(typeof available);
  console.log(typeof productDetails);
  console.log(typeof nameToCome);
  console.log(typeof ageToCome); // JS Bug sollte null sein
  console.log(typeof bigInt);
};

// Nach dem Namen fragen
const greetUser = () => {
  const userName = prompt("Whats your Name");
  const newsLetter = confirm("Do you want our Newsletter?");

  if (newsLetter) {
    alert("Thanks!");
  } else {
    alert("No Problem!");
  }
  alert(`Welcome ${userName}`);
};

// Zuweisungsoperatoren am Warenkrob
const mathOperations = () => {
  let sum = 100;

  // 29,90 dazu
  console.log(sum + 29.9);

  // 10  abziehen
  console.log(sum - 10);

  // verdoppeln
  console.log(sum * 2);

  // druch 4 teilen
  console.log(sum / 4);

  // Rest bei Division durch 10
  console.log(sum % 9);

  // Anzahl um 1 erhöhen
  console.log(sum++); // hier bräcuhte es halt noch ein event zum hochzählen
};

// Darf bestellt werden?

const canOrder = () => {
  const angemeldet = true;
  const guthaben = 0;
  const rechnungskauf = true;
  const gesperrt = false;

  // const canBuy =
  // angemeldet && (guthaben > 0 || rechnungskauf === true) && !gesperrt;

  if (angemeldet && (guthaben > 0 || rechnungskauf) && !gesperrt) {
    // Kann auch ausgelagert werden
    console.log("Du darfst kaufen");
  } else {
    console.log("Du darfst nicht kaufen");
  }
};

canOrder();

// Doppelt oder dreifach

const predictOutput = () => {
  console.log(1 == "1"); // true
  console.log(1 === "1"); // false
  console.log(null == undefined); // true
  console.log(null === undefined); // false
  console.log(NaN == NaN); // false
  console.log([] == false); // true
  console.log("0" == false); // true
  console.log("" == 0); // true
};

// predictOutput();

// Die acht Falsy-Werte

const whichIsFalsy = () => {
  if (0) {
    // false
    console.log("true");
  } else {
    console.log("false");
  }

  if (-0) {
    // false
    console.log("true");
  } else {
    console.log("false");
  }

  if ("") {
    // false
    console.log("true");
  } else {
    console.log("false");
  }

  if (" ") {
    // true
    console.log("true");
  } else {
    console.log("false");
  }

  if ("0") {
    // true
    console.log("true");
  } else {
    console.log("false");
  }

  if ("false") {
    // true
    console.log("true");
  } else {
    console.log("false");
  }

  if ([]) {
    // true
    console.log("true");
  } else {
    console.log("false");
  }

  if ({}) {
    // true
    console.log("true");
  } else {
    console.log("false");
  }

  if (null) {
    // false
    console.log("true");
  } else {
    console.log("false");
  }

  if (undefined) {
    // false
    console.log("true");
  } else {
    console.log("false");
  }

  if (NaN) {
    // false
    console.log("true");
  } else {
    console.log("false");
  }

  // if (On) { // error
  //   // false
  //   console.log("true");
  // } else {
  //   console.log("false");
  // }

  if (false) {
    // false
    console.log("true");
  } else {
    console.log("false");
  }
};

// whichIsFalsy();
