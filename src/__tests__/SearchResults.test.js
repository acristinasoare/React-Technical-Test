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
    const results = ["image1.jpg", "image2.jpg", "image3.jpg"];
    render(<SearchResults results={results} />);
    expect(screen.queryByText("No results")).not.toBeInTheDocument();
    const images = screen.queryAllByAltText("spaceImage");
    expect(images).toHaveLength(results.length);
  });
});
