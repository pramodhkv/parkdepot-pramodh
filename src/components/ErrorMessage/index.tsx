import React from "react";

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage = (props: IErrorMessageProps) => {
  const { message } = props;

  return (
    <div className="container mx-auto flex flex-col h-full w-full">
      <p className="text-white text-2xl font-bold py-4 w-full text-center">
        Oops..! Something went wrong.{" "}
        <span className="text-red-400">{message}</span>
      </p>
    </div>
  );
};

export default ErrorMessage;
