document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate');
  const viewDetailsBtn = document.getElementById('viewDetailsBtn');
  
  generateBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
        updateMealDetails(meal); 
        localStorage.setItem('mealData', JSON.stringify(meal));
      });
  });

  viewDetailsBtn.addEventListener('click', () => {
    window.location.href = 'about.html';
  });


  function updateMealDetails(meal) {
    const mealImage = document.getElementById('meal-image');
    const mealName = document.getElementById('meal-name');

    mealImage.src = meal.strMealThumb;
    mealName.textContent = meal.strMeal;
  }
});



