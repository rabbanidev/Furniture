import React from "react";

const Information = ({ information }) => {
  return (
    <div className="lg:px-5">
      <h2 className="font-medium text-3xl uppercase">Information</h2>
      <div className="mt-2">
        <p className="font-medium">Shipping</p>
        <p className="font-normal">{information?.shipping}</p>
      </div>
      <div className="mt-5">
        <p className="font-medium">Sizing</p>
        <p className="font-normal">{information?.sizeing}</p>
      </div>
      <div className="mt-5">
        <p className="font-medium">Assistance</p>
        <p className="font-normal">{information?.assistance}</p>
        <a
          href={`mailto:${information?.storeMail}`}
          className="text-blue-500 hover:underline"
        >
          {information?.storeMail}
        </a>
      </div>
    </div>
  );
};

export default Information;
