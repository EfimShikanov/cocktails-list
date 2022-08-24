import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./CardsList.module.scss";
import { sortCocktails } from "../../js/sortCocktails";
import { searchCocktails } from "../../js/searchCocktails";

const CardsList = ({
  cocktails,
  sortingValue,
  searchValue,
}) => {
  const [deletedIDs, setDeletedIDs] = useState([]);

  const onClick = (id) => {
    setDeletedIDs((deletedIDs) => [...deletedIDs, id]);
  };

  const renderCards = () => {
    let sortedCocktails = sortCocktails(cocktails, sortingValue);
    sortedCocktails =
      searchValue.length > 0
        ? searchCocktails(sortedCocktails, searchValue)
        : sortedCocktails;
    if (sortedCocktails.length > 0) {
      return sortedCocktails.map((item, index) => {
        if (!deletedIDs.includes(item.idDrink)) {
          return (
            <Card
              key={index}
              imageUrl={item.strDrinkThumb}
              name={item.strDrink}
              id={item.idDrink}
              onClick={onClick}
            />
          );
        }
      });
    } else
      return <div className={styles.noResultsMessage}>Nothing was found</div>;
  };

  return <div className={styles.cardsList}>{renderCards()}</div>;
};

export default CardsList;
