import React from "react";
import Develop from "../components/develop";
import Arrow from "../components/arrow";
import Fade from "react-reveal/Fade";
export default () => {
  return (
    <div className="develop-container">
      <div className="develop-title-container">
        <Fade left duration={600}>
          <img
            src="/bg-gradient.svg"
            alt="bg-gradient"
            className="develop-title-bg"
          />
        </Fade>
        <div className="develop-title-text">DEVELOP</div>
      </div>

      <Develop />
      <div className="develop-arrow">
        <Arrow />
      </div>
    </div>
  );
};
