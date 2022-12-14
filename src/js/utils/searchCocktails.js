export const searchCocktails = (cocktails, searchValue) => {
  if (searchValue.length === 1) {
    return cocktails.filter((item) => {
      if (item.strDrink[0].toLowerCase() === searchValue.toLowerCase()) {
        return item;
      }
    });
  } else {
    return cocktails.filter((item) => {
      if (item.strDrink.toLowerCase().includes(searchValue.toLowerCase())) {
        return item;
      }
    });
  }
};
