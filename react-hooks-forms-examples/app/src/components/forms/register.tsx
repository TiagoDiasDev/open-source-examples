import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="flex justify-center items-center bg-black w-[400px] h-[400px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-gray-900 bg-opacity-70 shadow-lg rounded-md"
      >
        <h1 className="text-white text-2xl mb-6 text-center">Sign Up</h1>

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
            className="mt-1 p-2 block w-full bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-white"
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
            {...register("email", { required: "Email is required" })}
            className="mt-1 p-2 block w-full bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-white"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 p-2 block w-full bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-white"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-300"
          >
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="mt-1 p-2 block w-full bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-white"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
