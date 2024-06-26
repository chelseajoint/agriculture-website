import React from "react";
import Header from "../components/Header/Header";
import OfferBanner from "../components/OfferBanner";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <OfferBanner
        title="Natural!!"
        titleStyle="white"
        offer={
          <>
            Get Garden <br /> Fresh Fruits
          </>
        }
        imgName="freshFruits"
      ></OfferBanner>
      <OfferBanner
        title="Offer!!"
        offer={
          <>
            Get 10% off <br /> on Vegetables
          </>
        }
        imgName="vegetables"
      ></OfferBanner>
    </div>
  );
};

export default App;
