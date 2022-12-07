import React from "react";
import { render } from "@testing-library/react";

import Cards from "./Cards";

const cards = [
  {
    img: "https://deck.of.cards/img/standard-deck/front-0.png",
    sortOrder: 1,
    value: 2,
  },
  {
    img: "https://deck.of.cards/img/standard-deck/front-1.png",
    sortOrder: 1,
    value: 3,
  },
];

describe("cards", () => {
  it("renders correctly", () => {
    const view = render(<Cards />);
    expect(view).toMatchSnapshot();
  });

  it("should render the shuffle button", () => {
    const { container } = render(<Cards />);
    expect(container.getElementsByClassName("shuffle-btn").length).toBe(1);
  });
});
