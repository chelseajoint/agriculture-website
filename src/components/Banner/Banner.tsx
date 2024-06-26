import React from "react";
import "./Banner.scss";

import homeImg from "../../assets/Banner/home.png";
import aboutImg from "../../assets/Banner/about.png";

interface BannerProps {
  title?: string;
  imgName: string;
}

const images: { [key: string]: string } = {
  home: homeImg,
  about: aboutImg,
};

const Banner: React.FC<BannerProps> = ({ title, imgName }) => {
  const imagePath = images[imgName];

  if (!imagePath) {
    console.error(`Image ${imgName} not found`);
    return null;
  }

  return (
    <section className="banner">
      <img className="image" src={imagePath} alt={imgName} />
      <div className="overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Banner;
