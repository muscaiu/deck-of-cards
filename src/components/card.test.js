import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";

const card = {
  img: "string",
  sortOrder: 1,
  value: 2,
};

describe("card", () => {
  it("renders correctly", () => {
    const view = render(<Card card={card} />);
    expect(view).toMatchSnapshot();
  });
});
