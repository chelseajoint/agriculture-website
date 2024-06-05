import React from "react";

import "./Button.scss";

const Button = ({ style, text, type, icon }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <button
      className={`button ${style ? style : ""}`}
      onClick={handleClick}
      type={type}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
