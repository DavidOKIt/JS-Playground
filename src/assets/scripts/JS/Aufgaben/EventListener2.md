**Wie hängst du einen Listener an die komplette Seite? Was ist der Unterschied zwischen document und window?**

windows.addEventListener / document.addEventListener

document -> repsäsentiert DOM also die HTML-Struktur der ganzen Seite und alles was damit zu tun hat.
window -> repräsentiert Browserfenster/Tab selbst, sprich die Umgebung in der document exisitert - ist also "eins höher". Hier kann sowas wie resize scroll (gesamter VP), load oder online/offline getrackt werden.

**Was bedeutet Bubbling?**

Bubbeling beschreibt wie sich ein Event innerhalb der DOM-Struktur nach oben ausbreitet. Wenn bspw. der button in einem div einen listener enthält bubbelt dieser nach oben. Erst zu div dann body -> html -> document -> window. Daher können wir überhaupt über document zugriff nehmen, sonst würde es den weg "nicht zurück" finden.
Der reguläre weg ist immer einmal von oben nach unten und dann wieder zurück hochbubbeln. mit capture: true wird das event schon beim runterweg also früher abgefangen.

**Was macht event.stopPropagation(), und wann brauchst du es?**

Stoppt die Ausbreitung eines Events durch die DOM-Kette, egal ob capturing oder bubbeling gerade läuft. Der aktuelle listener läuft allerdings noch fertig es wird lediglich verhindert das es zu weiteren Elementen in der Kette weiterwandert.
