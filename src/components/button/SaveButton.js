import React from "react";

const SaveButton = ({ btnText, disabled }) => {
  return (
    <div className="form-row">
      <button type="submit" className="btn-primary" disabled={disabled}>
        {btnText}
      </button>
    </div>
  );
};

export default SaveButton;
