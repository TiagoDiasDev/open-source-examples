import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../../../components/forms/login";

describe("LoginForm", () => {
  test("renders the login form", () => {
    render(<LoginForm />);

    // Verificar se os campos Name e Email estão presentes
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("shows validation errors when fields are empty", async () => {
    render(<LoginForm />);

    // Simular o clique no botão de submit sem preencher os campos
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Verificar se as mensagens de erro são exibidas
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });

  test("shows error if invalid email is provided", async () => {
    render(<LoginForm />);

    // Preencher o campo "name" corretamente
    fireEvent.input(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });

    // Preencher o campo "email" com um valor inválido
    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });

    // Simular o clique no botão de submit
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Verificar se a mensagem de erro para email inválido é exibida
    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
  });

  test("allows form submission when inputs are valid", async () => {
    render(<LoginForm />);

    // Preencher os campos corretamente
    fireEvent.input(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });

    // Simular o clique no botão de submit
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Verificar se os valores estão corretos
    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
  });
});
