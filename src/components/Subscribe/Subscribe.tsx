import React from "react";
import Form from "../Form";
import "./Subscribe.scss";

const Subscribe: React.FC = () => {
  return (
    <section className="subscribe">
      <h2>
        Subscribe to <br /> our Newsletter
      </h2>
      <Form
        inputType="email"
        placeholder="Your Email Address"
        buttonText="Subscribe"
        buttonType="submit"
        buttonStyle="pagination"
      />
    </section>
  );
};

export default Subscribe;
