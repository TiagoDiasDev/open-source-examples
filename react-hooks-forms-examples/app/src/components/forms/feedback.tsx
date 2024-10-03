import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FeedbackFormValues = {
  name: string;
  email: string;
  comment: string;
};

const FeedbackForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormValues>();

  const onSubmit: SubmitHandler<FeedbackFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center bg-black w-[400px] h-[400px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-gray-900 bg-opacity-70 shadow-lg rounded-md"
      >
        <h1 className="text-white text-2xl mb-6 text-center">Feedback</h1>

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
            htmlFor="comment"
            className="block text-sm font-medium text-gray-300"
          >
            Comment:
          </label>
          <textarea
            id="comment"
            {...register("comment", { required: "Comment is required" })}
            className="mt-1 p-2 block w-full bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-white"
            rows={5}
          />
          {errors.comment && (
            <p className="text-red-400 text-sm mt-1">
              {errors.comment.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
