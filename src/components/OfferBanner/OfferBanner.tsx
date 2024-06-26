import React from "react";
import "./OfferBanner.scss";

import freshFruitsImg from "../../assets/OfferBanner/freshFruits.png";
import vegetablesImg from "../../assets/OfferBanner/vegetables.png";

interface BannerProps {
  title: string;
  titleStyle?: string;
  offer: React.ReactNode;
  imgName: string;
}

const images: { [key: string]: string } = {
  freshFruits: freshFruitsImg,
  vegetables: vegetablesImg,
};

const OfferBanner: React.FC<BannerProps> = ({ title, titleStyle, offer, imgName }) => {
  const imagePath = images[imgName];

  if (!imagePath) {
    console.error(`Image ${imgName} not found`);
    return null;
  }

  return (
    <section className="offer-banner">
      <img className="image" src={imagePath} alt={imgName} />
      <div className="overlay">
        <div className={`uppercaseTitle ${titleStyle}`}>{title}</div>
        <h3 className={titleStyle}>{offer}</h3>
      </div>
    </section>
  );
};

export default OfferBanner;
