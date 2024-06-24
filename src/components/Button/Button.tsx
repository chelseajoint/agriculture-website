import React from "react";
import "./Button.scss";

interface ButtonProps {
  buttonStyle?: string;
  text: string;
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ buttonStyle, text, type, icon }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <button className={`button ${buttonStyle || ""}`} onClick={handleClick} type={type}>
      {text}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default Button;
