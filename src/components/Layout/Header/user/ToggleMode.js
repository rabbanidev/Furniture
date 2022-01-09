import React from "react";

const ToggleMode = ({ toogleArray, setToggle }) => {
  return (
    <div className="flex gap-x-6">
      {toogleArray.map((toggle, index) => (
        <h3
          key={index}
          className="font-medium text-sm uppercase text-gray-400 cursor-pointer"
          onClick={() => setToggle(toggle.value)}
        >
          {toggle.label}
        </h3>
      ))}
    </div>
  );
};

export default ToggleMode;
