**Wie sind if, else if und else aufgebaut?**

if prüft eine in Klammern geschriebene Bedingung wenn diese true ist wird der block darunter ausgeführt.
Falls ein else gegeben ist wir dessen Block ausgeführt falls if nicht zutrifft / false ist.
Else if´s sind weitere Prüfung nach dem ersten if, sobald ein else if true ist wird nicht weiter geschaut im waterfall.

**Wann nimmst du ein switch statt einer if-Kette?**

Sobald eine if else Verkettung unnötig lang wird nehmen wir einen switch da dieser einen übersichtlicheren Syntax hat
und breaks bietet welche einen Aussteigspunkt markieren (switch würde sonst anders als if-else weiterprüfen -> fall through).
In die Klammer von switch () können wir ein statement platzieren gegen das dann von verschiedenen cases strict (===) geprüft wird.
Falls kein case zutrifft lässt sich ein default definieren, praktisch das else des switchs.

**Was ist der Ternär-Operator, und wann lohnt er sich?**

Der Ternär-Operator ist eine Kurzschreibweise für eine einfache if-else-Abfrage:
bedingung ? wennWahr : wennFalsch. Anders als if-else ist er ein Ausdruck, gibt also immer einen Wert zurück und lässt sich direkt einer Variable zuweisen oder in Template Literals nutzen.
Er lohnt sich bei kleinen, einfachen Bedingungen – bei komplexer/verschachtelter Logik lieber if-else oder switch nutzen, da es sonst schnell unleserlich wird.
