import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const Steps = ({ step1 }) => {
  return (
    <div className="step-con">
      <div className="flex items-center gap-x-1">
        <Link to={`/${step1}`} className="uppercase hover:underline">
          {step1}
        </Link>
        <BsChevronRight size={10} />
      </div>
    </div>
  );
};

export default Steps;
