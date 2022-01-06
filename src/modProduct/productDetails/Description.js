import React from "react";

const Description = ({ description }) => {
  return (
    <div className="">
      <h2 className="font-medium text-3xl uppercase mb-5">Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default Description;
