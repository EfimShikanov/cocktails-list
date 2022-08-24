export const sortCocktails = (cocktails, sortingValue) => {
  switch (sortingValue) {
    case "strDrink":
      return cocktails.sort((a, b) => {
        return a.strDrink.localeCompare(b.strDrink);
      });
    case "idDrink":
      return cocktails.sort((a, b) => {
        return parseInt(a.idDrink) - parseInt(b.idDrink);
      });
  }
};
