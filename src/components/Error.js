import React from "react";

export const Error = ({ message }) => {
  return (
    <div className="bg-red-200 border-2 border-red-500 rounded-lg flex items-center justify-center text-red-600 m-auto mb-4 w-full h-14">
      {message}
    </div>
  );
};
