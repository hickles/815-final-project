document.addEventListener('DOMContentLoaded', () => {
  const mealImage = document.getElementById('meal-image');
  const mealName = document.getElementById('meal-name');
  const ingredientsList = document.getElementById('ingredients-list');
  const instructions = document.getElementById('instructions');

  const mealData = JSON.parse(localStorage.getItem('mealData'));

  if (mealData) {
    const mealNameText = mealData.strMeal;
    const mealImageSrc = mealData.strMealThumb;
    const ingredients = [];
    const instructionsText = mealData.strInstructions;

    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}`];
      const measure = mealData[`strMeasure${i}`];
      if (!ingredient) break;
      ingredients.push(`<li>${ingredient} - ${measure}</li>`);
    }

    mealImage.src = mealImageSrc;
    mealName.textContent = mealNameText;
    ingredientsList.innerHTML = `<ul>${ingredients.join('')}</ul>`;
    instructions.textContent = instructionsText;
  }
});

