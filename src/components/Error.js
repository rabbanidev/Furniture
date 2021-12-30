import React from "react";

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-5/6 h-20 border-l-8 border-red-400 md:w-96">
        <div className="flex">
          <div className="text-3xl">😞</div>
          <div className="-mt-2 ml-5">
            <h3 className="text-xl text-red-400">Opps !!</h3>
            <p className="text-red-400 text-sm">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
