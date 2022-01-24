import React from "react";

export const ListHeader = ({ label }) => {
  return (
    <div className="flex justify-start capitalize">
      <span className="font-semibold capitalize">{label}</span>
    </div>
  );
};

export const ListCol = ({ label, value }) => {
  return (
    <div className="">
      <span className="inline-block capitalize md:hidden font-semibold">
        {label}
      </span>
      <span className="break-words capitalize">{value}</span>
    </div>
  );
};
