**Was ist ein Event Listener?**

Ein Event Listener ist ein Mechanismus, der auf ein bestimmtes Element "wartet" bzw. "lauscht", ob ein bestimmtes Ereignis (Event) eintritt (z.B. Klick, Tastendruck, Formular-Absenden) — und wenn das passiert, führt er eine dafür registrierte Callback-Funktion (den "Handler") aus.

**Welche Event-Typen gibt es außer click?**

// Maus

- click
- dblclick
- wheel
- contextmenu (Rechtsklick)
- mouseover / mouseout
- mousedown / mouseup
- mousemove

// Mobile

- touchstart / touchend
- touchmove

// Maus und Mobile

- pointerdown / pointerup
- pointermove

// Tastatur

- keydown / keyup
- keypress

// Form

- submit
- focus
- focusin / focusout
- blur (verliert focus)
- input
- change (verliert focus und Wert hat sich geändert)
- reset
- invalid

// Windows & DOM

- DOMContentLoaded (DOM geladen)
- load (gesamte Seite geladen)
- resize
- scroll

// Media

- play / pause
- ended

// CSS

- transitionend / animationend

// Sonstige

- dragstart / drop
- dragover
- drag

**Gibt es einen anderen Weg, eine Funktion auf einen Klick zu binden — und warum nimmt man ihn nicht?**

Man kann bspw. onclick auf einem HTML Element direkt aufrufen.
Warum das schlecht / nicht empfehlenswert ist:

- Vermischung von JS und HTML -> keine saubere Code Seperation
- Nur ein Handler möglich, mit addEventListener können wir beliebig viele Handler auf dasselbe Element anwenden
- kein Zugriff auf Operatoren wie { once: true }
- scwherer zu entfernen Anstelle von removeEventListener

**Was macht removeEventListener, und was ist die Bedingung dafür?**

Entfernt einen Listener, wichtig ist das exakt dieselbe function removed werden muss. D.h. wir dürfen diese nicht innerhalb des Listeners deklarieren (auch wenn gleichnamig) sonst sind es zwei seperate Instanzen. Anstattdessen sollte eine ausgelagerte function bei add und remove angegeben werden.

**Was steckt im Parameter event?**

Wenn ein event ausgelöst wird erstellt der browser ein event object, welches alle details enthält und an den handler übergibt. Mit event (z.B. function(event)), kann es ausgelesen werden.
Bsp:

button.addEventListener("click", (event) => {
console.log(event); // das Event-Objekt
});

dabei ist der Paramtername frei wählbar -> übergeben wird dennoch das event object.

Bsp mit once:

button.addEventListener("click", () => {
console.log("Nur einmal!");
}, { once: true });
