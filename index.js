document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate');
  const viewDetailsBtn = document.getElementById('viewDetailsBtn');

  generateBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
        localStorage.setItem('mealData', JSON.stringify(meal));
        window.location.href = 'about.html'; 
      });
  });

  viewDetailsBtn.addEventListener('click', () => {
    window.location.href = 'about.html'; 
  });
});

