import React, { useState } from "react";

import Card from "../Card/Card";
import useFetchCards from "../../hooks/useFetchCards";
import { CardInterface } from "../../types/types";

import "./cards.scss";

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
        <div className="cards">
          <div className="btn-container">
            <div className="shuffle-btn" onClick={handleShuffle}>
              shuffle
            </div>
          </div>
          <p className="info">or click some cards</p>

          <div>
            {cards &&
              cards.map((card, i) => (
                <Card key={i} card={card} onClick={handleCardClick} />
              ))}
          </div>

          {selectedCards.length ? (
            <>
              <div className="btn-container">
                <div className="sort-btn" onClick={handleSortHighToLow}>
                  sort ↓
                </div>
                <div className="sort-btn" onClick={handleSortLowToHigh}>
                  sort ↑
                </div>
              </div>
              <div className="info">
                <p>you can now sort the selected cards</p>
                <p>
                  (order is: Clubs, Spades, Hearts, Diamonds; then by value: Ace
                  is high)
                </p>
              </div>
            </>
          ) : null}

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
