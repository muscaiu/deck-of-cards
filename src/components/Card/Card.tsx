import React from "react";

import { CardInterface } from "../../types/types";

import "./card.scss";

interface Props {
  card: CardInterface;
  onClick?: (card: CardInterface) => void;
}

const Card: React.FC<Props> = ({ card, onClick }) => {
  return (
    <span onClick={() => onClick && onClick(card)} className="card">
      <img className="card-img" src={card.img} alt="" />
    </span>
  );
};

export default Card;
