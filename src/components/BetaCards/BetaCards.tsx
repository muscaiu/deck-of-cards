import React from "react";

import OldCard from "./BetaCard";
import allCards from "./constants/allCards";

import "./beta-card.scss";

const Cards: React.FC = () => {
  const [cards, setCards] = React.useState(allCards);

  const handleShuffle = () => {
    const shuffledCards = cards
      .sort(() => Math.random() - 0.5)
      .map((item) => item);
    setCards(shuffledCards);
  };

  return (
    <div className="beta-cards">
      <button onClick={handleShuffle}>shuffle</button>

      <div>
        {cards.map((card, i) => (
          <OldCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
