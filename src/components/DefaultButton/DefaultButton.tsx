import React from "react";
import Button from "../Button";
import "./DefaultButton.scss";

interface DefaultButtonProps {
  buttonStyle?: string;
  text: string;
  type: "button" | "submit" | "reset";
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ buttonStyle, text, type }) => {
  return (
    <Button
      buttonStyle={buttonStyle}
      text={text}
      type={type}
      icon={
        <svg
          className="icon visible"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="circle" cx="9.5" cy="9.5" r="9.5" />
          <path
            className="arrow"
            d="M9.47592 6.12891L12.8705 9.19342L9.47592 12.2579M12.399 9.19342H5.51562"
          />
        </svg>
      }
    />
  );
};

export default DefaultButton;
