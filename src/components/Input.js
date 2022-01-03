import React from "react";

const Input = ({ name, type, placeholder, register, errorMessage = "" }) => {
  return (
    <div className="form-row">
      <input
        type={type}
        className={`form-control ${
          name?.message ? "input-border-danger" : "input-border-primary"
        }`}
        placeholder={placeholder}
        // {...register(name)}
      />
      <p className="text-red-400 text-sm">{errorMessage}</p>
    </div>
  );
};

export default Input;
