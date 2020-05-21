import React from "react";
import Navigator from "../components/navigator";
import Social from "../components/social";
import Projects from "../components/projects";
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
      <Projects />
      <div className="project-arrow">
        <Arrow />
      </div>

      <Navigator />
      <Social />
    </div>
  );
};
