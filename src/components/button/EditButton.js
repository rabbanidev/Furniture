import React from "react";
import { FiEdit } from "react-icons/fi";
import { useHistory } from "react-router";

const EditButton = ({ path }) => {
  const history = useHistory();
  return (
    <button className="btn-edit" onClick={() => history.push(path)}>
      <FiEdit size={16} />
    </button>
  );
};

export default EditButton;
