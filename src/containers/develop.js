import React from "react";
import Develop from "../components/develop";
import Arrow from "../components/arrow";

export default (props) => {
  return (
    <div className="develop-container">
      <div className="develop-title-container">
        <img
          src="/bg-gradient.svg"
          alt="bg-gradient"
          className="develop-title-bg"
        />
        <div className="develop-title-text">DEVELOP</div>
      </div>
      <div style={{ position: "relative", top: "60px" }}>
        <Develop />
        <div className="develop-arrow">
          <Arrow />
        </div>
      </div>
    </div>
  );
};
