**Was ist ein Cookie, und was sind die typischen Anwendungsfälle?**

Ein Cookie ist ein kleines Datenpaket (Key-Value-Paar, meist wenige KB), das ein Server über den Set-Cookie-HTTP-Header an den Browser sendet. Der Browser speichert dieses Cookie und sendet es bei jeder weiteren Anfrage an dieselbe Domain automatisch im Cookie-Header wieder mit an den Server zurück.

**Was ist der Unterschied zum localStorage?**

- Cookie wird automatisch an Server gesendet, localStorage ist nur Clientseitig im Browser
- Cookies haben deutlich weniger Speicherplatz
- Bei Cookies kann ein Ablaufdaum gesetzt werden, localStorage bleibt für immer bis explizit entfernt
- Cookies sind besser vor XSS geschützt

Cookies eignen sich vorallem wenn der Server Informationen kennen muss, bspw. LoginStatus
**Welche Attribute kann ein Cookie haben?**

Verscheidene Infos jeweils in key value pairs, getrennt durch ;

document.cookie = "user=David; Expires=Wed/Max-Age=3600; 21 Oct 2026 07:28:00 GMT; max-age=3600; path=/; secure; HttpOnly; samesite=strict"

**Kann man ein Cookie auch ohne JavaScript setzen?**

Serverseitig - was auch der ursprüngliche weg ist.
In der Theorie auch übers Markup, dass ist aber nichte empfholen.
