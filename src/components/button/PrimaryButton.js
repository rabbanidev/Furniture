import React from "react";

const PrimaryButton = ({ btnText, Icon, type, btnWidth }) => {
  return (
    <button className={`${btnWidth} btn-primary`} type={type}>
      <span className="pr-3">{btnText}</span>
      <Icon />
    </button>
  );
};

export default PrimaryButton;
