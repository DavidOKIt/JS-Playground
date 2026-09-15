**Welche Datentypen gibt es in JavaScript?**

number: 1
string: "Hello World"
boolean: true/false
bigInt: 123456789012345678901234567890n -> n legt bigInt fest
object: {}
undefined
null
symbol: kaum verwendet, ist ein einzigartiger, unveränderlicher Wert

**Was macht der typeof-Operator?**
const name= "Dave"
typeof name // gibt den Datentyp der Variable zurück, indemfall string

**Was ist der Unterschied zwischen alert, prompt und confirm?**

alert -> Zeigt eine Nachricht im Browser Fenster an
prompt -> Lässt den Nutze etwas im Browser Fenster eingeben
confirm -> boolean Abfrage im Browser Fenster, ok oder abbruch

**Welche Zuweisungsoperatoren gibt es, welche logischen?**

= -> zuweisen
== -> vergleichen
=== -> vergleichen + typ vergleichen

- -> Addition

* -> Subtraktion
  ** -> hoch

- -> Multiplikation
  / -> Division
  % -> Rest

> = -> Größer gleich
> <= -> Kleiner gleich

Logicals:

&& -> und
|| -> oder
! -> nicht, also true/false umkehren (gibt auch boolean zurück)
!! -> Boolean erzwingen inhaltlich aber richtig herum lassen
?? -> Nullish, prüft linkes Argument und schaut das rechte nie an esseiden links ist false
