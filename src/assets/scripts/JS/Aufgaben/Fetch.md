**Was macht fetch?**

Mit fetch lässt sich eine HTTP request gegen bspw. ein JSON oder eine API deren Daten dann Empfangen und weiterverwendet werden können.
Es gibt dabei ein promise zurück welche de response auflöst.

**Warum braucht es then — warum steht das Ergebnis nicht einfach in einer Variablen?**

Da fetch asynchron ist - der Request brauch Zeit bis er ankommt, das JS soll hier aber nicht pausieren sondern weiterlaufen (daher async). Then gibt die promise zurück "dur wirst hier noch Daten empfangen".

**Wofür ist catch, und was fängt es nicht?**

Fehler ausgeben wenn wir bspw. den Endpunkt nicht erreichen - Netzwerkproblem, DNS-Fehler, kein Internet. Es fängt nicht ab wen es einen HTTP Fehlerstatus wie 404 gibt.

**Was macht appendChild?**

appendChild hängt eine in JS gebaute node an eine andere über JS selektierte node an. Mit append lassen sich mehrere nodes anhängen, dieses gibt aber immer undefined zurück während appendChild das angehängte node element zurückgibt.
