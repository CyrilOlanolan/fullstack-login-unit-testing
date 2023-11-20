import React from "react";

const Button = ({ onClick, children, ...props }) => {
  return (
    <button
      className={`rounded-md p-2 m-2 disabled:bg-gray-300 bg-blue-500 text-white`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
