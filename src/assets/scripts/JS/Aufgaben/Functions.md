**Was ist eine Funktion, und wofür brauchst du sie?**

Eine function ist ein Codeblock welcher ausgeführt wird wenn man die function aufruft.
Es können Parameter in die function hineingegeben werden und sie kann auch etwas mit return zurückgeben.

**Was ist ein Parameter, was ein Argument?**

Parameter sind Platzhalter für Werte die von außen kommen. Innerhalb der function können wir diese anhand ihres Namens wiederverwenden,
um anzugeben wo die von außenkommenden Variablen oder was auch immer hinsollen.
Sie bilden also die Brücke für die Argumente in die function hinein.

Argumente sind die Werte die wir beim Aufruf in die function geben, die dann von den Parametern weitergeleitet werden.

**Was macht return — und was passiert ohne?**

Die function gibt einen Wert zurück. Ohne gibt die standardmäßig immer undefined zurück.
Eine function wird direkt nach return beendet, auch wenn darunter noch Code stehen sollte.

**Was ist der Unterschied zu einer Arrow-Funktion?**

On the surface haben sie vorallem einen unterschiedlichen Syntax. Die Arrow function ist moderner und eigentlich gäniger standard heutzutage.
Sie ermöglicht auch als one-liner eine Kurzschreibweise ohne braces und return.

Im Detail:

- Normale Funktionen haben ihr eigenes this, das davon abhängt, wie sie aufgerufen werden. Arrow Functions haben kein eigenes this – sie übernehmen das this aus ihrem umgebenden Kontext.
- Normale Funktionen können mit new als Konstruktor verwendet werden, Arrow Functions nicht.
