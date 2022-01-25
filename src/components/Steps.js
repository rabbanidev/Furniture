import React from "react";
import { FiX, FiCheck } from "react-icons/fi";

const Steps = ({ orderStatus }) => {
  return (
    <div className="w-full mb-5 flex gap-x-24">
      {orderStatus.map((step, index, arr) => (
        <div key={step._id}>
          <div
            className={`w-16 h-16 relative flex items-center justify-center rounded-full ${
              step.complete ? "bg-success text-white" : "bg-gray-300"
            }`}
          >
            <span className="font-bold text-3xl">
              <FiX />
            </span>
            {arr.length - 1 !== index && (
              <div
                className={`w-32 border-t-8 absolute top-2/4 -right-28 ${
                  step.complete ? "border-success" : "border-gray-300"
                }`}
              ></div>
            )}
          </div>
          <span className="font-medium text-xl capitalize">{step.type}</span>
        </div>
      ))}
    </div>
  );
};

export default Steps;
