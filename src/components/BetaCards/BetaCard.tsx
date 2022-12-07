import React from "react";

interface CardInterface {
  color: string;
  type: string;
  value: number;
  symbol: string;
}

interface Props {
  card: CardInterface;
}

const BetaCard: React.FC<Props> = ({ card }) => {
  return <span className={`beta-card ${card.color}`}>{card.symbol}</span>;
};

export default BetaCard;
