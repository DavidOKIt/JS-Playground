// Eigenen type definieren

type font = "Arial" | "Helvetica" | "Times New Roman";
let myFont: font = "Times New Roman";

// Interface für Objects typisieren

interface Person {
  name: string;
  age: number;
  length?: number; // optional property
  [key: string]: unknown; // Für hinzukommende keys in dem Object
}

let myPerson: Person = {
  name: "John",
  age: 30,
  height: 180,
};

// Arrays typisieren
let myArray: number[] = [1, 2, 3]; // Array von numbers

// Functions typisieren

// Alle parameter als auch der return muss definiert werden (nimmt on default den bestehenden return type)
function add(a: number, b: number): string {
  return a + b.toString();
}

// functions ohne return wie addEventListener haben den return type void (on default)
const buttonTest = document.querySelector<HTMLButtonElement>(".button")!; // generischer Typ für das HTML Element, non-null assertion da wir sicher sind, dass das Element existiert
buttonTest.addEventListener("click", (): void => {
  console.log("H1 clicked");
});

// Tupel
let myTuple: [string, number] = ["John", 30];

// Generics
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("Hello"); // Generischer Typ wird explizit angegeben

interface Test<T, B> {
  id: number;
  name: string;
  age: T;
  data: B;
}

// function type?
type GetUser = (id: number) => Person;

// enumns

enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Red; // Verwendung des Enums

console.log(myColor);
