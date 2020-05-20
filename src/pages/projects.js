import React from "react";
import Navigator from "../components/navigator";
import Social from "../components/social";
import Projects from "../components/projects";
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
      <Navigator />
      <Social />
    </div>
  );
};
