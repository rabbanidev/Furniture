import React from "react";

const Input = ({
  name,
  type,
  placeholder,
  label,
  register,
  errorMessage,
  defaultValue,

  disabled,
}) => {
  const labelClass = `pb-0.5 font-medium text-xs uppercase ${
    errorMessage ? "text-red-400" : "text-gray-600"
  }`;

  const inputClass = `form-control ${
    errorMessage ? "input-border-danger" : "input-border-primary"
  }`;

  return (
    <div className="form-row">
      {label && <label className={labelClass}>{label}</label>}
      <input
        defaultValue={defaultValue}
        type={type}
        className={inputClass}
        placeholder={placeholder}
        {...register(name)}
        disabled={disabled}
      />
      <p className="text-red-400 text-sm">{errorMessage}</p>
    </div>
  );
};

export default Input;
