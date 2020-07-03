import React from "react";
import Develop from "../components/develop";
import Arrow from "../components/arrow";

export default () => {
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
    </div>
  );
};
