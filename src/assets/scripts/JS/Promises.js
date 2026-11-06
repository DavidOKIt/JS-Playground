// const promise = new Promise((resolve, reject) => {
//   if (5 + 5 === 11) {
//     resolve("Promise resolved");
//   } else {
//     reject(new Error("Promise rejected"));
//   }
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const object = {
  key: "value",
  anotherKey: "anotherValue",
  yetAnotherKey: "yetAnotherValue",
};

const { key, anotherKey, yetAnotherKey } = object;

console.log(key);

// Fetch schreibweise mit then

const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => {
      console.log("Fehler:", error);
      return [];
    });
};

const data = await getData();
console.log(data);

// schreibweise mit async und await

const getData3 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};

// const data3 = await getData3();
// console.log(data3);

try {
  JSON.parse("kaputt");
} catch {
  console.log("wrong");
}

// wait function

const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const test = async () => {
  console.log("davor");
  await wait(2000);
  console.log("danach");
};

// test();

// random outcome function

const promise2 = new Promise((resolve, reject) => {
  const coinflip = Math.random() > 0.5;
  if (coinflip === true) {
    resolve("Hat geklappt");
  } else {
    reject("error");
  }
});

// Handling promise2 with then and catch

// promise2
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Handling promise2 with async/await

const takePromise2 = async () => {
  await promise2;
  console.log(promise2);
};

await takePromise2();

// Handling promise2 with async/await and try/catch

const takePromise3 = async () => {
  try {
    await promise2;
    console.log(promise2);
  } catch (error) {
    console.log(error);
  }
};

await takePromise3();

// Promise.all

// kann mehrere promises entgegennehmen und gibt eine einzige Zurück, die Ergebnisse der jeweiligen Aufrufe als Array
// -> bircht ab soblad eine promise rejected ist

// Promise.allSettled

// nimmt ebenfalls mehrere promises entgegen, kann aber auch nur die Zurückgeben die fullfielled sind
// -> es müssen nicht alle Richtig sein
// Fehlerprüfung muss man selbst mit .status machen
