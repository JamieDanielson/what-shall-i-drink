const cocktailsContainer = document.getElementById('cocktails_container');
const maxDrinks = 30;

const getCocktails = async (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;
  const res = await fetch(url);
  const cocktails = await res.json();
  createCocktailCard(cocktails);
};

function createCocktailCard(cocktails) {
  for (let i = 0; i < maxDrinks; i++) {
    const cocktail = document.createElement('div');
    cocktail.classList.add('cocktail-card');

    const cocktailName = cocktails.drinks[i].strDrink;
    const cocktailImg = cocktails.drinks[i].strDrinkThumb;
    const cocktailId = cocktails.drinks[i].idDrink;

    cocktail.innerHTML = `
    <h2>${cocktailName}</h2>
    <img src="${cocktailImg}/preview" alt="${cocktailName}" />
    <p>Id: ${cocktailId}</p>
  `;
    cocktailsContainer.appendChild(cocktail);
  }
}

getCocktails();
