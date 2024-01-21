import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "../../../components/title/Title.js";

describe("Title component", () => {
  it("Validade the renders with queryByText", () => {
    render(<Title />);

    expect(screen.queryByText("Form")).toBeInTheDocument();
  });

  it("Validade the renders with queryByTestId", () => {
    render(<Title />);

    expect(screen.queryByTestId("title")).toBeInTheDocument();
  });
});
