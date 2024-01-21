import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../../../components/form/LoginForm.js";

describe("LoginForm component", () => {
  it("Renders correctly", () => {
    render(<LoginForm />);

    expect(screen.queryByLabelText("nome")).toBeInTheDocument();
  });

  it("Validate the nome input", () => {
    render(<LoginForm />);

    const input = screen.queryByLabelText("nome");

    fireEvent.change(input, { target: { value: "John" } });

    expect(input.value).toBe("John");
  });

  it("Validate the sobrenome input", () => {
    render(<LoginForm />);

    const input = screen.queryByLabelText("sobrenome");

    fireEvent.change(input, { target: { value: "Doe" } });

    expect(input.value).toBe("Doe");
  });

  it("Validate the idade input", () => {
    render(<LoginForm />);

    const input = screen.queryByLabelText("idade");

    fireEvent.change(input, { target: { value: "20" } });

    expect(input.value).toBe("20");
  });

  it("Validate the estado input", () => {
    render(<LoginForm />);

    const input = screen.queryByLabelText("estado");

    fireEvent.change(input, { target: { value: "SP" } });

    expect(input.value).toBe("SP");
  });

  it("Validates the fill of the form and the submit", () => {
    render(<LoginForm />);

    fireEvent.change(screen.queryByLabelText("nome"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.queryByLabelText("sobrenome"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.queryByLabelText("idade"), {
      target: { value: "20" },
    });
    fireEvent.change(screen.queryByLabelText("estado"), {
      target: { value: "SP" },
    });

    fireEvent.click(screen.queryByRole("button", { name: "Confirmar" }));
  });
});
