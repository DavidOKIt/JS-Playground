// classList methods

const example = document.getElementById("example");

example.classList.add("newClass");
example.classList.remove("removeMe");
example.classList.toggle("newnew");
example.classList.replace("newClass", "newerClass");
example.classList.contains("newClass"); // prüft, ob die Klasse vorhanden ist
console.log(example);
console.log(example.classList.toString());

// attributes auslesen

const exampleAttribute = example.getAttribute("id");
console.log(exampleAttribute);

// parent oder sibling elements auslesen & verändern
example.nextElementSibling.innerHTML = "Hellllllo";
console.log(example.parentElement);
console.log(example.previousElementSibling);
console.log(example.nextElementSibling);

// elements bauen

const spanElement = document.createElement("span"); // eine möglichkeit zur element Erstellung
example.prepend(spanElement); // Anfang
example.append(spanElement); // Ende
example.before(spanElement); // davor
example.after(spanElement); // danach

// HTML Blöcke bauen

const markup = `<h1>DOM_Manipulation</h1>
  <div class="removeMe">Div 1</div>
  <div class="removeMe">Div 2</div>
  <div class="removeMe" id="example">Hello</div>
  <div class="removeMe">Div 3</div>
  <div class="removeMe">Div 4</div>`;

document.querySelector(".lastDiv").insertAdjacentHTML("beforeend", markup); // an bestimmter Stelle einfügen und aktuelle childs bestehend lassen
document.querySelector(".lastDiv").innerHTML = markup; // innerhalb des elements eingefügt -> löscht alles andere

// nodes removen

const button = document.createElement("button");
document.body.append(button);
button.remove(); // element/node entfernt
