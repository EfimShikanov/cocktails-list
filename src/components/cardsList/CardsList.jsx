import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./CardsList.module.scss";
import { sortCocktails } from "../../js/utils/sortCocktails";
import { searchCocktails } from "../../js/utils/searchCocktails";

const CardsList = ({ cocktails, sortingValue, searchValue }) => {
  const [deletedIDs, setDeletedIDs] = useState([]);

  const onClick = (id) => {
    setDeletedIDs((deletedIDs) => [...deletedIDs, id]);
  };

  let sortedCocktails = sortCocktails(cocktails, sortingValue);

  sortedCocktails =
    searchValue.length > 0
      ? searchCocktails(sortedCocktails, searchValue)
      : sortedCocktails;

  const renderMessage = () => {
    return <div className={styles.noResultsMessage}>Nothing was found</div>;
  };

  const renderCards = () => {
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
  };

  return (
    <div className={styles.cardsList}>
      {sortedCocktails.length ? renderCards() : renderMessage()}
    </div>
  );
};

export default CardsList;
