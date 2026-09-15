// Index, Länge, Austausch

const arrayMethods1 = () => {
  const formen = ["rund", "tropfen", "diamant", "hybrid"];

  // Gib das erste Element aus.
  console.log(formen.at(0));
  // Gib das letzte Element aus — ohne die 3 hinzuschreiben.
  console.log(formen.at(-1));
  // Gib die Länge aus.
  console.log(formen.length);
  // Ersetz das erste Element durch "oval".
  console.log(formen.splice(0, 1, "oval"));
  console.log(formen);
  // Gib das Element an Position 10 aus. Was passiert?
  console.log(formen.at(10)); // undefined
};

// splice, slice, concat

const arrayMethods2 = () => {
  const schlaeger = ["Vertex 04", "Viper", "Nerox", "Bela", "Metalbone"];
  const zubehoer = ["Griffband", "Schutzband"];

  // Kopier die ersten zwei Schläger in ein neues Array.
  console.log(schlaeger.slice(0, 2));
  console.log(schlaeger);

  // Entfern "Nerox" aus dem Original.
  console.log(schlaeger.splice(2, 1));
  console.log(schlaeger);

  // Setz an Position 1 "Alpha" ein, ohne etwas zu löschen.
  console.log(schlaeger.splice(1, 0, "Alpha"));
  console.log(schlaeger);

  // Häng das Zubehör an — als neues Array, ohne das Original anzufassen.

  console.log(schlaeger.concat(zubehoer));
  console.log(schlaeger);
};

// Eine Liste von Objekten durchsuchen

const advancedArrayMethods = () => {
  const sortiment = [
    { id: 1, name: "Vertex 04", preis: 249, lager: 4 },
    { id: 2, name: "Viper", preis: 219, lager: 0 },
    { id: 3, name: "Nerox", preis: 199, lager: 12 },
    { id: 4, name: "Bela", preis: 229, lager: 2 },
  ];

  // Alle Namen als einfaches Array.
  const names = sortiment.map((sortiment) => sortiment.name);
  console.log(names);

  // Nur die lieferbaren Schläger.
  const bats = sortiment.filter((sortiment) => sortiment.lager > 0);
  console.log(bats);

  // Der Schläger mit id: 3.
  const specificBat = sortiment.find((sortiment) => sortiment.id === 3);
  console.log(specificBat);

  // Ist überhaupt etwas ausverkauft?
  const bought = sortiment.some((sortiment) => sortiment.lager === 0);
  console.log(bought);

  // Der Gesamtwert des Lagers (Preis × Bestand).

  const totalValue = sortiment.reduce(
    (acc, item) => acc + item.preis * item.lager,
    0,
  );

  console.log(totalValue);
};

// Beispiel für einen komplexeres map mit allen parametern

const complexMapExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const detailedNumbers = numbers.map((num, index, array) => {
    return {
      value: num,
      index: index,
      arrayLength: array.length,
    };
  });
  console.log(detailedNumbers);
};

// complexMapExample();
