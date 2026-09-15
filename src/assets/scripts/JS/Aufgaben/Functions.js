// Bruttopreis rechnen

const calcBrutto = (netto, satz = 19) => {
  const brutto = netto * (1 + satz / 100);
  const roundedBrutto = Math.round(brutto * 100) / 100;
  return roundedBrutto;
};

// console.log(calcBrutto(2200));

// Globale Variable gegen Rückgabewert

// Variante A: aendert die globale Variable

let anzahl = 0;

function hinzufuegenA() {
  anzahl++;
}

// Variante B: rechnet und gibt zurueck
function hinzufuegenB(aktuell) {
  return aktuell + 1;
}

// Variante B ist aus mehreren Gründen besser: gibt überhaupt etwas zurück, beachtet ob eingegebene Variable verändert wurde und verändert nur was man über den Parameter vergibt.
// Wiederverwenbar und Nachvollziehbarkeit, lässt sich isoliert testen

// Funktion mit eingebauter Prüfung

const rabattStufe = (sum) => {
  if (typeof sum !== "number") {
    return 0;
  } else if (sum >= 500) {
    return sum - sum * 0.15;
  } else if (sum >= 200) {
    return sum - sum * 0.1;
  } else if (sum >= 100) {
    return sum - sum * 0.05;
  } else {
    return sum;
  }
};

console.log(rabattStufe(100));
