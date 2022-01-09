import React from "react";
import { Link } from "react-router-dom";

const ToggleMode = ({ toogleArray }) => {
  return (
    <div className="flex gap-x-6">
      {toogleArray.map((toggle, index) => (
        <Link
          key={index}
          to={toggle.to}
          className="font-medium text-sm capitalize text-gray-600 cursor-pointer hover:underline"
        >
          {toggle.label}
        </Link>
      ))}
    </div>
  );
};

export default ToggleMode;
