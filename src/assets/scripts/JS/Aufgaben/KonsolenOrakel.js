console.log(0.1 + 0.2); // 0.30000000000000004 -> Binäres System hat Probleme mit Dezimahlzahlen
console.log(0.1 + 0.2 === 0.3); // ist demnach false
console.log("5" + 2); // 52 -> Zahl wird zu Strig converted, bei + gewinnt String
console.log("5" - 2); // 3 -> String wird zu Zahl converted, bei - gewinnt Zahl
console.log(Boolean("false")); // true -> weil wir einen nicht leeren string haben
console.log(Math.max()[(1, 2, 3)] + [4]); // NaN -> Math.max() gibt -Infinity zurück, das Array-Zugriff ergibt undefined, undefined + [4] ergibt NaN
console.log(localStorage.setItem("n", 5)); // speichert den Wert 5 unter dem Schlüssel "n" im localStorage -> wenn geloggt, gibt es undefined zurück
console.log(typeof localStorage.getItem("n")); // string
