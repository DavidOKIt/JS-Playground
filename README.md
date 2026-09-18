# JavaScript Playground

Dieses Repo ist ein Sammelsurium an Aufgaben, Definitionen und Tests die ich auf meinem Weg JavaScript zu lernen gemacht habe.
Um ein bisschen Struktur in die Sache reinzubekommen, hier grob der Ablauf in dem ich die Themen "gelernt" und angeschaut habe. Natürlich springt man aber auch viel hin und her, dass ist ja part of the Game :D

Um nicht immer mit einem schlechten live Server kämpfen zu müssen, ist der JS Playground in einem kleine Astro Projekt angelegt. Das zieht ihr euch wie folgt:

- falls nicht vorhanden git und node.js installieren
- repo clonen: git clone https://github.com/DavidOKIt/JS-Playground.git
- in den Projektordner wechseln cd .../JS-Playground
- Abhängigkeiten installieren (darunter Astro): npm install
- Die wichtigsten Astro comamnds:
  - npm run dev (dev server hochstarten)
  - npm run build && npm run preview (um gebaute Seiten zu testen, falls nötig)

Unter /pages und /assets/scripts/JS lassen sich die Astro Seiten und dazugehörigen JS Dateien finden die ich zuerst bearbeitet habe (nicht die im Aufgaben folder!). Vorgegangen bin ich nach dem Schema in der unten gezeigten Tabelle. JS-Info bietet sehr gute Erklärungen zu den jeweiligen Themen, allerdings sind diese auch manchmal etwas detailliert oder behandeln der Vollständigkeit halber auch veraltete Themen oder Methoden. Kann also etwas overwhelming oder verwirrend sein - man muss da nicht alles verstehen.

Ich hab mir immer das jeweilige Thema durchgelesen, und parallel in den oben erwähnten Datein Tests und Übungen dazu gemacht. Am Ende der JS-Info Artikel gibt es öfters mal Übungsaufgaben, manche davon habe ich gemacht. Wenn diese vorkommen sollten sie mit einem Kommentar gekennzeichnet sein.

| **#** | **Thema (Dokument)**      | **javascript.info Link**                                                                        |
| ----- | ------------------------- | ----------------------------------------------------------------------------------------------- |
| 1     | Allgemein_Variablen       | https://javascript.info/variables                                                               |
| 2     | Datentypen_Operatoren     | https://javascript.info/types und https://javascript.info/operators                             |
| 3     | ConditionalStatements     | https://javascript.info/ifelse und https://javascript.info/switch                               |
| 4     | Loops                     | https://javascript.info/while-for                                                               |
| 5     | Functions                 | https://javascript.info/function-basics und https://javascript.info/function-expressions        |
| 6     | Arrays_Objects            | https://javascript.info/array und https://javascript.info/object                                |
| 7     | DOM                       | https://javascript.info/dom-nodes und https://javascript.info/basic-dom-node-properties         |
| 8     | DOM_Elements_Manipulation | https://javascript.info/modifying-document                                                      |
| 9     | EventListener             | https://javascript.info/introduction-browser-events und https://javascript.info/dispatch-events |
| 10    | Cookie                    | https://javascript.info/cookie                                                                  |
| 11    | LocalStorage              | https://javascript.info/localstorage                                                            |
| 12    | Fetch                     | https://javascript.info/fetch                                                                   |

Unter /pages/Aufgaben und /assets/scripts/JS/Aufgaben befindet sich der "2te Teil" der Lernphase. Hier habe ich Aufgaben aus einer html von meinem Ausbilder durchgearbeitet. Dise liegt im public Ordner, ihr könnt sie einfach nochmal woanders abspeichern und dann im Browser öffnen. Der 2te druchlauf wiederholt eigentlich nochmal alle Themen.
Hier werden am Anfang jedes Themas ein paar fragen gestellt welche in den gleichnamigen MD files beanwortet werden. Die Aufgaben wurden dann jeweils in den JS Datein bearbeitet.

Viel Spaß damit und gutes lernen, ich hoffe es hat ein Nutzen (:
