import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const { asFragment } = render(<SearchResults />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("Search Results")).toBeInTheDocument();
  });
  it("displays an image", () => {
    render(<SearchResults />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
  });
});
