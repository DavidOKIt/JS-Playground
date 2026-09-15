// Versandkosten staffeln

const versand = (warenwert) => {
  if (warenwert < 0) {
    return null;
  } else if (warenwert < 25) {
    return "5,90";
  } else if (warenwert >= 25 && warenwert < 100) {
    return "2,90";
  } else if (warenwert >= 100) {
    return "Versand ist frei";
  } else {
    return "Kein gültiger Wert";
  }
};

// console.log(versand(24));

// switch mit gemeinsamen Fällen

const lieferzeit = (status) => {
  switch (status) {
    case "lager":
      return "1-2 Tage";
    case "bestellt":
      return "5-7 Tage";
    case "vorbestellung":
      return "5-7 Tage";
    case "ausverkauft":
      return "nicht lieferbar";
    default:
      return "bitte anfragen";
  }
};

// console.log(lieferzeit("ausverkauft"));

// Vier Ebenen flach klopfen

const nutzer1 = { name: "John", aktiv: true, guthaben: 9.99 };

const darfBestellen = (nutzer) => {
  if (nutzer?.aktiv) {
    return nutzer.guthaben > 0;
  } else {
    return false;
  }
};

console.log(darfBestellen(nutzer1));
