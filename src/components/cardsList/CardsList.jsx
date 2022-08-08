import React, { useState } from "react";
import Card from "../card/Card";
import S from "./CardsList.module.scss";

const CardsList = ({ cocktails, sortingValue }) => {
  const [deletedIDs, setDeletedIDs] = useState([]);

  const onClick = (id) => {
    setDeletedIDs((deletedIDs) => [...deletedIDs, id]);
  };

  const renderCards = () => {
    return cocktails
      .sort((a, b) => {
        if (sortingValue === "name") {
          if (a.strDrink > b.strDrink) {
            return 1;
          } else {
            return -1;
          }
        } else {
          if (parseInt(a.idDrink) > parseInt(b.idDrink)) {
            return 1;
          } else {
            return -1;
          }
        }
      })
      .filter((item) => {
        if (!deletedIDs.includes(item.idDrink)) {
          return item;
        }
      })
      .map((item) => {
        return (
          <Card
            key={item.idDrink}
            imageUrl={item.strDrinkThumb}
            name={item.strDrink}
            id={item.idDrink}
            onClick={onClick}
          />
        );
      });
  };

  return <div className={S.cardsList}>{renderCards()}</div>;
};

export default CardsList;
