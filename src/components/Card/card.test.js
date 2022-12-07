import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Card from "./Card";

const card = {
  img: "https://deck.of.cards/img/standard-deck/front-0.png",
  sortOrder: 1,
  value: 2,
};

describe("card", () => {
  it("renders correctly", () => {
    const view = render(<Card card={card} />);
    expect(view).toMatchSnapshot();
  });

  it("should render the card image", () => {
    const { container } = render(<Card card={card} />);
    expect(container.getElementsByClassName("card-img").length).toBe(1);
  });
});
