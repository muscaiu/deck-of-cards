import spades from "./spades";
import hearts from "./hearts";
import clubs from "./clubs";
import diamonds from "./diamonds";

const extra = [
  {
    value: 0,
    symbol: "🂠",
    color: "black",
    type: "extra",
  },
  {
    value: 20,
    symbol: "🃟",
    color: "black",
    type: "extra",
  },
  {
    value: 21,
    symbol: "🃟",
    color: "red",
    type: "extra",
  },
];

const allCards = [...spades, ...hearts, ...clubs, ...diamonds];

export default allCards;
