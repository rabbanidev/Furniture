import React from "react";

const SecondaryButton = ({ btnText, type }) => {
  return (
    <button className="mt-5 w-full text-center btn-secondary" type={type}>
      {btnText}
    </button>
  );
};

export default SecondaryButton;
