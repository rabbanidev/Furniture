import React from "react";

const PrimaryButton = ({ btnText, Icon, type, btnWidth, disabled }) => {
  return (
    <button
      className={`${btnWidth} btn-primary`}
      type={type}
      disabled={disabled}
    >
      <span className="pr-3">{btnText}</span>
      {Icon && <Icon />}
    </button>
  );
};

export default PrimaryButton;
