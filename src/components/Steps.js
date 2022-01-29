import React from "react";
import { FiX, FiCheck } from "react-icons/fi";

const Steps = ({ orderStatus }) => {
  return (
    <div className="w-full my-5 flex gap-x-3 md:gap-x-24">
      {orderStatus.map((step, index, arr) => (
        <div key={step._id}>
          <div
            className={`w-8 h-8 relative flex items-center justify-center rounded-full md:w-16 md:h-16 ${
              step.complete ? "bg-success text-white" : "bg-gray-300"
            }`}
          >
            <span className="font-bold text-3xl">
              {step.complete ? <FiCheck /> : <FiX />}
            </span>
            {arr.length - 1 !== index && (
              <div
                className={`w-10 border-t-4 absolute top-2/4 -right-8 md:w-32 md:-right-28 ${
                  step.complete ? "border-success" : "border-gray-300"
                }`}
              ></div>
            )}
          </div>
          <span className="font-medium text-sm capitalize">{step.type}</span>
        </div>
      ))}
    </div>
  );
};

export default Steps;
