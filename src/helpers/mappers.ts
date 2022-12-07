export const buildCardsObject = (imgArray: string[]) => {
  const cardsObj = imgArray.map((img: string, index: number) => {
    let sortOrder;
    let value;
    if (index <= 12) {
      sortOrder = 2;
    } else if (index <= 25) {
      sortOrder = 3;
    } else if (index <= 38) {
      sortOrder = 1;
    } else {
      sortOrder = 4;
    }

    // Aces High at index 0, 13, 26, 39
    if (index === 0) {
      value = 12.5;
    } else if (index === 13) {
      value = 26.5;
    } else if (index === 26) {
      value = 39.5;
    } else if (index === 39) {
      value = 51.5;
    } else {
      value = null;
    }

    return {
      img,
      value: value || index,
      sortOrder,
    };
  });
  return cardsObj;
};

export const buildUrls = () => {
  const urls: string[] = [];
  for (var i = 0; i < 52; i++) {
    urls.push(`https://deck.of.cards/img/standard-deck/front-${i}.png`);
  }
  return urls;
};
