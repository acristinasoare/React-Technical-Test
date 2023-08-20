import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders 'No results' when results are not provided", () => {
    const results = [];
    const { asFragment } = render(<SearchResults results={results} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("No results")).toBeInTheDocument();
  });
  it("renders the image with correct src and alt attributes", () => {
    const results = ["mock data"];
    render(<SearchResults results={results} />);
    const image = screen.getByAltText("moon");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    );
  });
});
