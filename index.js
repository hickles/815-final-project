document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate');
  const mealImage = document.getElementById('meal-image');
  const mealName = document.getElementById('meal-name');
  const viewDetailsBtn = document.getElementById('viewDetailsBtn');

  generateBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
        const mealNameText = meal.strMeal;
        const mealImageSrc = meal.strMealThumb;
        const ingredientsList = meal.strIngredient;
        const instructionsText = meal.strInstructions;

        mealImage.src = mealImageSrc;
        mealName.textContent = mealNameText;

        const ingredientsHTML = ingredientsList.split(',').map(ingredient => `<li>${ingredient.trim()}</li>`).join('');
        document.getElementById('ingredients-list').innerHTML = `<ul>${ingredientsHTML}</ul>`;

        document.getElementById('instructions').textContent = instructionsText;
      });
  });

  viewDetailsBtn.addEventListener('click', () => {
    window.location.href = 'about.html'; 
  });
});


