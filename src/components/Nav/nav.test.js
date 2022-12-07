import React from "react";
import { render } from "@testing-library/react";

import Nav from "./Nav";

describe("nav", () => {
  it("should redirect to projects page", () => {
    const { getByText } = render(<Nav />);
    const projectsButton = getByText(/cards/i);
    expect(projectsButton).toHaveAttribute("href", "/");
  });
});
