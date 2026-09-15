**Welche classList-Methoden gibt es?**

classList.add
classList.remove
classList.toggle
classList.contains
classList-replace

**Was macht getAttribute, und was ist ein Data-Attribut?**

getAttribute liest ein Attribut auf dem jeweilig selektiertem Element aus und gibt dessen Inhalt zurück, null wenn nicht definiert.
Mit setAttribute lässt sich ein Element ebenfalls ansprachen und nach einem , auch neu im Markup definieren.

Data-Attribute sind benutzerdefinierte Attribute mit dem Präfix data- . Sie sind dafür vorgesehen um Daten im HTML zu speichern ohne gegen Standards zu verstoßen
und können sowohl per JS als auch per CSS angesprochen werden.

**Was liefern parentElement, nextElementSibling und previousElementSibling?**

Spricht für sich.

**Was macht createElement — und warum ist das Element danach noch nicht sichtbar?**

createElement so wie der Befehl schon sagt, baut ein HTML Element welches danach allerdings erstmal nur exisitiert aber noch irgendwo im DOM angehängt werden muss,
damit es sichtbar wird.
