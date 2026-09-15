const checkAge = () => {
  let age = prompt("Wie alt bist du?");

  if (age === "0") {
    alert("Ungültiges Alter");
  } else if (age < 18) {
    alert("Minderjährig");
  } else if (age >= 18 && age < 65) {
    alert("Erwachsen");
  } else {
    alert("Senior");
  }
};

const checkAgeTernary = () => {
  let age = prompt("Wie alt bist du?");
  age >= 18 ? alert("Volljährig") : alert("Minderjährig");
};

const getTypeDay = () => {
  let dayRequest = prompt("Welchen Wochentag haben wir?");

  switch (dayRequest) {
    case "Montag":
      alert("Wochentag");
      break;
    case "Dienstag":
      alert("Wochentag");
      break;
    case "Mittwoch":
      alert("Wochentag");
      break;
    case "Donnerstag":
      alert("Wochentag");
      break;
    case "Freitag":
      alert("Wochentag");
      break;
    case "Samstag":
      alert("Wochenende");
      break;
    case "Sonntag":
      alert("Wochenende");
      break;
  }
};

let counter = 5;

const increment = (value) => {
  if (value) {
    counter += value;
  } else {
    counter = 0;
  }
};

// checkAge();
// checkAgeTernary(age1);
// getTypeDay();
increment(-3);

console.log(counter);
