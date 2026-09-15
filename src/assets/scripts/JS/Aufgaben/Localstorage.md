**Wofür brauchst du den localStorage?**

Um Daten (in key value pairs) im Browser abzuspeichern sodass sie nicht verloren gehen, selbst wenn der Browser komplett geschlossen wird oder es einen OS reboot gibt.
Bleiben demnach so lange bis sie explizit vom Code oder in den DevTools gelöscht werden.
Bsp: Warenkorb, LoginToken

**Was ist der Unterschied zum sessionStorage?**

Die sessionStorage speichert anders als die localStorage Daten nur im aktuellen Tab und geht bei schließen des Fensters verloren, oder beim wiederöffnen desselben Tabs parallel.
Bsp: Formular zwischenspeichern bei Checkout Prozess

**Welche Methoden gibt es, und was für Werte kann man speichern?**

localStorage.setItem("key", "value"); // speichern
localStorage.getItem("key"); // lesen (gibt null zurück, falls nicht vorhanden)
localStorage.removeItem("key"); // einzelnen Eintrag löschen
localStorage.clear(); // alles löschen
localStorage.key(0); // Key an einem bestimmten Index abrufen
localStorage.length; // Anzahl gespeicherter Einträge (Property, keine Methode)

Speichern lassen sich nur Strings, alles andere wie Zahlen, Objects oder Arrays müssen in ein JSON umgewandelt und wieder zurück geparsed werden.

localStorage.setItem("user", JSON.stringify({ name: "David" }));
const user = JSON.parse(localStorage.getItem("user"));

**Wo in den DevTools siehst du den Inhalt, und wie löschst du ihn dort?**

Unter Application lässt sich local und sessionStorage sowie auch cookies finden. Per contextmenu lassen sich dort die gewünschten Daten löschen.
