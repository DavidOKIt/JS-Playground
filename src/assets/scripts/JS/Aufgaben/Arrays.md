**Was ist ein Array, und wie legst du eines an (zwei Wege)?**

Ein Array ist eine Datenstruktur (von der funktionalität her ein object aber erweitert) welche per Index aufsteigende Informationen speichert.
const array = ["banana", "apple", "grape"] -> benutze Schreibweise die andere ist outdated.

**Wie kommst du an das erste und das letzte Element?**

Wir können mit at das array auslesen. Negative Werte starten von hinten, zählen von vorn startet bei 0.
array.at(0) -> erstes element
array.at(-1) -> letztes element

**Was machen push, pop, shift und unshift?**

array.push() -> fügt element am Ende des arrays hinzu
array.pop() -> entfernt element am Ende des arrays

array.unshift() -> fügt element am Anfang des arrays hinzu
array.shift() -> entfernt element am Anfang des arrays

Die Hinzufüger geben die neue Länge zurück
Die Entferner geben das entfernte Element zurück

--> All diese Methoden mutieren das Aktuelle Array und erstellen kein neues wie bei späteren Methoden wie .map oder .filter

**Was ist der Unterschied zwischen splice, slice und concat?**

splice -> splice(start, deleteCount, neuesElement) hat dynamischen Zugriff über den Array z.B. auch direkt in der Mitte - mutiert demnach den array
slice -> slice(start, end) kopiert einen abschnitt aus dem array - verändert Orginal nicht
concat -> concat fügt array mit etwas anderem zusammen bspw. 2 arrays - neuer array entsteht

**Advanced array methods**

.map((element, index, array) => ...)
-> ruft für jedes element das angegeben wird eine callback function auf und gibt die jeweiligen Werte zurück.

.filter((element, index, array) => ...)
-> ruft für jedes angegebene element eine callback function auf welche true oder false zurückgeben muss und nur die true Werte Werte werden in den neuen array geschrieben.
Daher muss immer eine Prüfung stattfinden.

.find((element, index, array) => ...)
-> ruft ... prüft eine Bedingung und gibt das erste true Element zurück und bricht danach ab. Sprich in dem bsp. haben wir das objects des bats mit der id3 bekommen.

.some((element, index, array) => ...)
-> prüft ob mindestens ein element auf die Bedingung zutrifft

.reduce((acc, element, index, array) => ..., startwert)
.reduce((summe, s) => summe + s.preis * s.lager, 0);
