**Was ist das DOM?**

Das Document Object Model, ist eine Baumstruktur aus Objekten indem alle unsere HTML Elemente definiert und angegeben sind, praktisch der Inhalt unserer Seite.
Mit document (globales Object) kann man auf es zugreifen.

**Welche Möglichkeiten gibt es, HTML-Elemente über JavaScript zu finden?**

document.getElementById() -> nur ID
document.querySelector() -> kann beliebige css selectors benutzen
document.querySelectorAll() -> kann beliebige css selectors benutzen

document.getElementsByClassName()
document.getElementsByTagName()

**Was ist das Besondere an querySelectorAll?**#

Gibt eine NodeLis an allen gefundenen Elementen zurück, über die iteriert werden kann (z.B. mit forEach)

**Was macht innerHTML, und warum ist es gefährlich?**

innerHTML ersetzt den GESAMTEN Inhalt des selektierten Elements durch den neu angegebenen.
AdjacentHTML würde bspw. nur ein Element anhängen aber die anderen childs unverändert lassen.
