const button = document.querySelector(".MealButton");
const display = document.querySelector(".MealDisplay");

const fetchRandomMeal = () => {
  return fetch("https:www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .catch((error) => {
      console.log("Keine Daten Verfügbar", error);
    });
};

const renderMeal = (data) => {
  const markupCard = `  
  <div class="MealCard">
    <h2 class="MealCard_Name">${data.meals[0].strMeal}</h2>
    <p class="MealCard_Instructions">${data.meals[0].strInstructions}</p>
    <ul class="MealCard_Ingredients">
      ${data.meals[0].strIngredient1 !== "" ? `<li>${data.meals[0].strIngredient1}</li>` : ""}
      ${data.meals[0].strIngredient2 !== "" ? `<li>${data.meals[0].strIngredient2}</li>` : ""}
      ${data.meals[0].strIngredient3 !== "" ? `<li>${data.meals[0].strIngredient3}</li>` : ""}
      ${data.meals[0].strIngredient4 !== "" ? `<li>${data.meals[0].strIngredient4}</li>` : ""}
      ${data.meals[0].strIngredient5 !== "" ? `<li>${data.meals[0].strIngredient5}</li>` : ""}
      ${data.meals[0].strIngredient6 !== "" ? `<li>${data.meals[0].strIngredient6}</li>` : ""}
      ${data.meals[0].strIngredient7 !== "" ? `<li>${data.meals[0].strIngredient7}</li>` : ""}
      ${data.meals[0].strIngredient8 !== "" ? `<li>${data.meals[0].strIngredient8}</li>` : ""}
      ${data.meals[0].strIngredient9 !== "" ? `<li>${data.meals[0].strIngredient9}</li>` : ""}
      ${data.meals[0].strIngredient10 !== "" ? `<li>${data.meals[0].strIngredient10}</li>` : ""}
      ${data.meals[0].strIngredient11 !== "" ? `<li>${data.meals[0].strIngredient11}</li>` : ""}
      ${data.meals[0].strIngredient12 !== "" ? `<li>${data.meals[0].strIngredient12}</li>` : ""}
      ${data.meals[0].strIngredient13 !== "" ? `<li>${data.meals[0].strIngredient13}</li>` : ""}
      ${data.meals[0].strIngredient14 !== "" ? `<li>${data.meals[0].strIngredient14}</li>` : ""}
      ${data.meals[0].strIngredient15 !== "" ? `<li>${data.meals[0].strIngredient15}</li>` : ""}

    </ul>
    <img class="MealCard_Image" src="${data.meals[0].strMealThumb}" alt="Meal Image" />
  </div>`;

  display.insertAdjacentHTML("beforeend", markupCard);
};

button.addEventListener("click", async () => {
  const mealData = await fetchRandomMeal();
  display.replaceChildren();
  renderMeal(mealData);
});
