import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About page component", () => {
  it("Button fetch news renders", () => {
    render(<About />);
    expect(screen.getByTestId("btn-fetch-news")).toBeInTheDocument();
  });
});
