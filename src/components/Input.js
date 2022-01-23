import React from "react";

const Input = ({
  name,
  type,
  placeholder,
  label,
  register,
  errorMessage,
  defaultValue,
}) => {
  return (
    <div className="form-row">
      {label && (
        <label
          className={`pb-0.5 font-medium text-xs uppercase ${
            errorMessage ? "text-red-400" : "text-gray-600"
          }`}
        >
          {label}
        </label>
      )}
      <input
        defaultValue={defaultValue}
        type={type}
        className={`form-control ${
          errorMessage ? "input-border-danger" : "input-border-primary"
        }`}
        placeholder={placeholder}
        {...register(name)}
      />
      <p className="text-red-400 text-sm capitalize">{errorMessage}</p>
    </div>
  );
};

export default Input;
