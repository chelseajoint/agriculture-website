import React from "react";
import Button from "../Button";
import Input from "../Input";

import "./Form.scss";

const Form = ({ inputType, placeholder, value, onChange, style, text, buttonType, icon }) => {
  return (
    <form>
      <Input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button style={style} text={text} type={buttonType} icon={icon} />
    </form>
  );
};

export default Form;
