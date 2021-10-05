import { render, screen } from "@testing-library/react";
import News from "./News";

describe("News page component", () => {
  it("Button fetch news renders", () => {
    render(<News />);
    expect(screen.getByTestId("btn-fetch-news")).toBeInTheDocument();
  });
});
