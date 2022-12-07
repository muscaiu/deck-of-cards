const clubs = [
  {
    value: 1,
    symbol: "🃑",
  },
  {
    value: 2,
    symbol: "🃒",
  },
  {
    value: 3,
    symbol: "🃓",
  },
  {
    value: 4,
    symbol: "🃔",
  },
  {
    value: 5,
    symbol: "🃕",
  },
  {
    value: 6,
    symbol: "🃖",
  },
  {
    value: 7,
    symbol: "🃗",
  },
  {
    value: 8,
    symbol: "🃘",
  },
  {
    value: 9,
    symbol: "🃙",
  },
  {
    value: 10,
    symbol: "🃚",
  },
  {
    value: 12,
    symbol: "🃛",
  },
  {
    value: 13,
    symbol: "🃝",
  },
  {
    value: 14,
    symbol: "🃞",
  },
];

export default clubs.map((club) => ({
  ...club,
  color: "black",
  type: "clubs",
}));
