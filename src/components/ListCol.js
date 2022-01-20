import React from "react";

export const ListHeader = ({ label }) => {
  return (
    <div className="flex justify-start">
      <span className="font-semibold">{label}</span>
    </div>
  );
};

export const ListCol = ({ label, value }) => {
  return (
    <div className="">
      <span className="inline-block md:hidden font-semibold">{label}</span>
      <span className="break-words">{value}</span>
    </div>
  );
};
