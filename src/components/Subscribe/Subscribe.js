import React from "react";
import Form from "../Form";

import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <h2>
        Subscribe to <br /> our Newsletter
      </h2>
      <Form placeholder="Your Email Address" style="pagination" text="Subscribe" type="submit" />
    </section>
  );
};

export default Subscribe;
