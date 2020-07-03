import React,{useEffect} from "react";
import Navigator from "../components/navigator";
import Social from "../components/social";
import Develop from "../components/develop";
import Arrow from "../components/arrow";
import { preloadImage } from "../utils/preloadImage";

export default () => {
  useEffect(() => {
    const imageList = [
      {
        url: "/images/background/background1.jpg",
      },
      {
        url: "/images/background/background2.jpg",
      },
      {
        url: "/images/background/background3.jpg",
      },
      {
        url: "/images/background/background4.jpg",
      },
      {
        url: "/images/background/background5.jpg",
      },
      {
        url: "/images/background/background6.jpg",
      },
    ];
    preloadImage(imageList);
  }, []);
  return (
    <div>
      <div className="project-title-container">
        <img
          src="/bg-gradient.svg"
          alt="bg-gradient"
          className="project-title-bg"
        />
        <div className="project-title-text">PROJECT</div>
      </div>
      <Develop />
      <div className="project-arrow">
        <Arrow />
      </div>

      <Navigator />
      <Social />
    </div>
  );
};
