**Welche Arten von Schleifen gibt es? Welche nimmst du am liebsten und warum?**

1. while -> executed so lange bis die Bedingung falsy wird. while (true) -> klassischer infinite
2. do while -> more specific, läuft genau einmal durch (do) und macht dann als normaler while loop weiter
3. for -> (begin; condition; step), wird auch wieder solange geloopt bis condition falsy ist
4. for in
5. for of -> für Arrays wenn man break continue oder return im loop braucht. Auch fals man await/async verwenden wollen würde
6. forEach -> Nutze ich am meisten, um direkt auf jedes element eines Arrays zugreifen zu können. Ist allerdings eine Methode die auf eine callback function zugreift und in der Theorie keine echtes loop construct.

**Was ist der Unterschied zwischen for und forEach?**

Oben erklärt

**Was machen break und continue?**

break -> bricht den loop ab fals etwas zurifft z.B. if(number > 1000) break;

**Wann läuft eine do...while-Schleife anders als eine while-Schleife?**

Oben erklärt
