**Was ist ECMAScript, und was bedeutet ES6?'**

ECMAScript ist der ursprüngliche Name von JS und beschreibt heute den Sprachkern von JS.
Hier gibt es immer wieder updates und Änderungen anhand von denen die Sprache weiterentwickelt wird.

ES6 ist die aktuellste Versions des Sprachkerns

**Wann nimmst du const, wann let, wann var?**

var: veraltet, garnichtmehr
const: für konstante/gleichbleibende werte die nicht neu zugewiesen werden müssen

**Was ist Block Scope, was Global Scope?**

Block Scope -> Wenn eine Varaible innerhalb eines Blocks z.B. einer function oder einem conditional definiert wurde,
kann sie auch nur dort aufgerufen werden.

GLobal Scope -> Variable die nicht in einem Block definiert wurde is über das ganze Dokument hinweg verfügbar.

**Was ist der Unterschied zwischen JavaScript im Browser und auf dem Server?**

Läuft im Browser direkt in der jeweiligen Browser Engine z.b Chrome V8, kann DOM manipulieren

Auf dem Server brauchen wir NodeJS um dort mit JS zu coden, da ursprünglich nur für Browser entwickelt

**Fehler Finden**

const mwst = 0.19;
mwst = 0.07; // Ist eine const und kann daher nicht neu zugewiesen werden

let hersteller; // hier werden beide Variablen nicht mit einem Wert initalisiert
const gruendung;

var zaehler = 0; // Var sollte garnicht verwendet werden
zaehler = zaehler + 1;

**Blockscope sichtbar machen**

// Block A
if (true) {
var a = "mit var";
}
console.log(a); // gibt "mit var" aus da var globalScope hat und demnach ausgelesen werden kann

// Block B
if (true) {
let b = "mit let"; // feuert ein error da b innerhalb des if blocks definiert wurde und somit nicht nach außen dringt
}
console.log(b);
