import React, { useState } from "react";

import Card from "./Card";
import useFetchCards from "../hooks/useFetchCards";
import { CardInterface } from "../types/types";

import "./card.scss";

const Cards: React.FC = () => {
  const [{ cards, setCards, isLoading, isError }] = useFetchCards();
  const [selectedCards, setSelectedCards] = useState<CardInterface[]>([]);

  const handleCardClick = (card: CardInterface) => {
    const remainingCards = cards.filter((c) => card.value !== c.value);
    setCards(remainingCards);
    setSelectedCards([...selectedCards, card]);
  };

  const handleShuffle = () => {
    const shuffledCards = cards
      .sort(() => Math.random() - 0.5)
      .map((item) => item);

    setCards(shuffledCards);
  };

  const handleSortLowToHigh = () => {
    const sortedCards = selectedCards
      .sort((a, b) => a.sortOrder - b.sortOrder || a.value - b.value)
      .map((item) => item);

    setSelectedCards(sortedCards);
  };
  const handleSortHighToLow = () => {
    const sortedCards = selectedCards
      .sort((a, b) => a.sortOrder - b.sortOrder || b.value - a.value)
      .map((item) => item);

    setSelectedCards(sortedCards);
  };

  return (
    <>
      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="sort-btn-container">
            <div className="shuffle-btn" onClick={handleShuffle}>
              shuffle
            </div>
          </div>

          <div className="cards">
            {cards &&
              cards.map((card, i) => (
                <Card key={i} card={card} onClick={handleCardClick} />
              ))}
          </div>

          <div className="sort-btn-container">
            <div className="sort-btn" onClick={handleSortHighToLow}>
              sort ↓
            </div>
            <div className="sort-btn" onClick={handleSortLowToHigh}>
              sort ↑
            </div>
          </div>

          <div className="selected-cards">
            {selectedCards &&
              selectedCards.map((card, i) => <Card key={i} card={card} />)}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
