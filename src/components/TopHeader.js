import React from "react";
import { useHistory } from "react-router";
import { FaPlusCircle } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";

const TopHeader = ({ title, btnSave, path = "" }) => {
  const history = useHistory();
  return (
    <div className="flex justify-between px-0 pb-2">
      <h1 className="text-2xl font-medium">{title}</h1>
      {btnSave ? (
        <button
          className="btn-header text-dark"
          onClick={() => history.push(path)}
        >
          <FaPlusCircle size={36} />
        </button>
      ) : (
        <button
          className="btn-header text-danger"
          onClick={() => history.push(path)}
        >
          <BsFillXCircleFill size={36} />
        </button>
      )}
    </div>
  );
};

export default TopHeader;
