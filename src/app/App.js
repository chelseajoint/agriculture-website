import React from "react";
import Header from "../components/Header";
import DefaultButton from "../components/DefaultButton";
import Subscribe from "../components/Subscribe";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <DefaultButton text="text" type="button" />
      <DefaultButton style="yellow" text="text" type="button" />
      <DefaultButton style="white" text="text" type="button" />
      <Subscribe />
    </div>
  );
};

export default App;
