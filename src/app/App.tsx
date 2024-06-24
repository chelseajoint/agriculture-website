import React from "react";
import Header from "../components/Header/Header";
import DefaultButton from "../components/DefaultButton";
import Subscribe from "../components/Subscribe";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <DefaultButton text="text" type="button" />
      <DefaultButton buttonStyle="yellow" text="text" type="button" />
      <DefaultButton buttonStyle="white" text="text" type="button" />
      <Subscribe />
    </div>
  );
};

export default App;
