import axios from "axios";

export const fetchCocktails = (setCocktails, setIsReady) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then((response) => {
      setCocktails(response.data.drinks);
      if (setIsReady) {
        setIsReady(true);
      }
    });
};

export const searchByFirstLetter = (letter, setCocktails) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => {
      setCocktails(response.data.drinks);
    });
};

export const searchByName = (name, setCocktails) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => {
      setCocktails(response.data.drinks);
    });
};
