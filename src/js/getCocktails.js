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
