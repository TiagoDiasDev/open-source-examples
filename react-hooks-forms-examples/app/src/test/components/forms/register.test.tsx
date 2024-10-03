import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from "../../../components/forms/register";

describe("RegisterForm", () => {
  test("renders the register form", () => {
    render(<RegisterForm />);

    // Verificar se os campos Name, Email, Password e Confirm Password estão presentes
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    // Usar o id ou label completo para ser mais específico
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password:")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });

  test("shows validation errors when fields are empty", async () => {
    render(<RegisterForm />);

    // Simular o clique no botão de submit sem preencher os campos
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Verificar se as mensagens de erro são exibidas
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/please confirm your password/i)
    ).toBeInTheDocument();
  });

  test("shows error if passwords do not match", async () => {
    render(<RegisterForm />);

    // Preencher os campos corretamente, mas com senhas diferentes
    fireEvent.input(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.input(screen.getByLabelText("Password:"), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByLabelText("Confirm Password:"), {
      target: { value: "differentPassword" },
    });

    // Simular o clique no botão de submit
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Verificar se a mensagem de erro de senhas diferentes é exibida
    expect(
      await screen.findByText(/passwords do not match/i)
    ).toBeInTheDocument();
  });

  test("allows form submission when inputs are valid", async () => {
    render(<RegisterForm />);

    // Preencher os campos corretamente
    fireEvent.input(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.input(screen.getByLabelText("Password:"), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByLabelText("Confirm Password:"), {
      target: { value: "password123" },
    });

    // Simular o clique no botão de submit
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Verificar se os valores estão corretos
    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
    expect(screen.getByLabelText("Password:")).toHaveValue("password123");
    expect(screen.getByLabelText("Confirm Password:")).toHaveValue(
      "password123"
    );
  });
});
