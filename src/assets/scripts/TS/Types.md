**Welche Typen gibt es?**

- string
- number
- boolean
- bigInt

- undefined
- null

- symbol
- object

**Was bedeutet der Typ any?**

Versichert TS das jeder Type in Ordnung ist. Skippt den Type check von TS komplett.
Sehr unsafe, eher zu benutzen wenn z.B. von JS zu TS migriert wird.

**Was bedeutet der Typ unknown?**

Typsichere Varainte von any. Es kann alles sein, wird aber type checked bevor es benutzt wird.
Wird dann verwendet wenn man typesafe bleiben möchte aber nach wie vor flexibel. Bspw. mit API Data. Wird oft durch narrowing eingegrenzt.

**Was bedeutet der Typ never?**

Ist für values die nie passieren, oder nie passieren sollten. Bspw. für eine function die nie etwas returnen soll, oder typeguards die nie passieren sollen.

// Warum dann void bei functions die nie etwas returnen?

**Was bedeutet der Typ undefined?**

undefined: bedeutet eine Variable wurde declared aber nie benutzt

**Was bedeutet der Typ null?**

null: explizite Zuweisung, die keinen Wert oder kein Object respräsentiert.

**Was ist ein Enum?**

Eine Sammlung von festen Konstanten

**Was ist ein Tupel?**

Mit einem Tupel lässt sich die länge eines Arrays und der Typ der jeweiligen Position genau festlegen.

**Was ist ein Interface? Was ist ein type? Worin unterscheiden sich die beiden?**

Mit type lässt sich ein eigener type definieren. Mit Interface nur für Objects. Wählt standardgemäß den key nahmen und den type der value.

**Kann ein Wert/Parameter auch 2 types besitzen?**

Ja, siehe Types.ts

**Was ist TypeAssertion?**

Ein weg eigenmächtig Types festzulegen bsp. querySelector. Allerdings kann das unsafe sein generics sind glaube ich besser und safer.
