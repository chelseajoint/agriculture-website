import React from "react";

import "./Input.scss";

const Input = ({ placeholder, value, onChange, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...(value !== undefined ? { value } : {})}
      {...(onChange ? { onChange } : {})}
    />
  );
};

export default Input;
