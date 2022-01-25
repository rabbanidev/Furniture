import React from "react";

const SecondaryButton = ({ btnText, type, disabled }) => {
  return (
    <button
      className={`mt-5 w-full text-center btn-secondary ${
        disabled && "cursor-not-allowed"
      }`}
      type={type}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default SecondaryButton;
