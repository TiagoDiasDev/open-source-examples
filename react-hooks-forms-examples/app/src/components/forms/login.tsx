import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    // Black & White theme with Tailwind CSS and transparency
    <div className="flex justify-center items-center bg-black w-[400px] h-[400px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-gray-900 bg-opacity-70 shadow-lg rounded-md"
      >
        <h1 className="text-white text-2xl mb-6 text-center">
          Open Source Examples
        </h1>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name:
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email:
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email",
              },
            })}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md transition-all duration-200 hover:bg-gray-600 hover:ring-2 hover:ring-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
