import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "../../../components/title/Title.js";

describe("Componente Title", () => {
  it("Valida a renderização por queryByText", () => {
    render(<Title />);

    expect(screen.queryByText("Form")).toBeInTheDocument();
  });

  it("Valida a renderização por queryByTestId", () => {
    render(<Title />);

    expect(screen.queryByTestId("title")).toBeInTheDocument();
  });
});
