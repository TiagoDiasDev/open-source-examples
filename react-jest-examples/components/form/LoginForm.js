"use client";
import { useForm } from "react-hook-form";
import Title from "../title/Title.js";

// PT-BR => Componente de Login
// EN-US => Login component
export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  // PT-BR => Método handler para o form
  // EN-US => Handler method for the form
  const handleSubmitForm = async (data) => {
    // data => { "nome": "value", "sobrenome": "value", "idade": "value", "estado": "value" }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <Title />
        <form
          className="flex flex-col gap-8 border-2 border-black rounded-xl p-16"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="flex flex-row gap-8">
            <input
              {...register("nome")}
              className="p-2 rounded-lg"
              type="text"
              placeholder="Nome *"
              aria-label="nome"
            ></input>
            <input
              {...register("sobrenome")}
              className="p-2 rounded-lg"
              type="text"
              placeholder="Sobrenome *"
              aria-label="sobrenome"
            ></input>
          </div>
          <div className="flex flex-row gap-8">
            <input
              {...register("idade")}
              className="p-2 rounded-lg"
              type="text"
              placeholder="Idade *"
              aria-label="idade"
            ></input>
            <input
              {...register("estado")}
              className="p-2 rounded-lg"
              type="text"
              placeholder="Estado *"
              aria-label="estado"
            ></input>
          </div>
          <div
            className="flex items-center justify-center"
            aria-label="button-form"
          >
            <button
              className="p-2 border-2 border-black rounded-lg bg-white"
              type="submit"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
