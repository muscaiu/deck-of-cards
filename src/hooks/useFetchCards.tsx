import { useState, useEffect } from "react";

import { buildCardsObject, buildUrls } from "../helpers/mappers";
import { CardInterface } from "../types/types";

const useFetchCards = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const urls = buildUrls();

  useEffect(() => {
    const fetchCards = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        let res = await Promise.all(urls.map((url) => fetch(url)));
        let resBlob = await Promise.all(res.map((e) => e.blob()));
        const imgArray: any = resBlob.map((blob) => URL.createObjectURL(blob));
        const cardsObj = buildCardsObject(imgArray);
        setCards(cardsObj);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchCards();
  }, []);

  return [{ cards, setCards, isLoading, isError }];
};

export default useFetchCards;
