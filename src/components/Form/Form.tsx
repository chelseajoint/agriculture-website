import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./Form.scss";

interface FormProps {
  inputType: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttonStyle?: string;
  buttonText: string;
  buttonType: "button" | "submit" | "reset";
  buttonIcon?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  inputType,
  placeholder,
  value,
  onChange,
  buttonStyle,
  buttonText,
  buttonType,
  buttonIcon
}) => {
  return (
    <form>
      <Input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button buttonStyle={buttonStyle} text={buttonText} type={buttonType} icon={buttonIcon} />
    </form>
  );
};

export default Form;
