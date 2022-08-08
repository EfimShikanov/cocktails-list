import React from "react";
import S from "./Card.module.scss";

const Card = ({ name, imageUrl, id, onClick }) => {
  return (
    <div className={S.card}>
      <img className={S.cardImage} src={imageUrl} alt="cocktail" />

      <div className={S.cardText}>{name}</div>
      <div className={S.cardCloseIcon} onClick={() => onClick(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 0 24 24"
          width="18px"
          fill="#ffffff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
