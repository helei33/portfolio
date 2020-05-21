import React from "react";
import Navigator from "../components/navigator";
import Social from "../components/social";
import Design from "../components/design";
export default () => {
  return (
    <div>
      <div className="design-title-container">
        <img
          src="/bg-gradient.svg"
          alt="bg-gradient"
          className="design-title-bg"
        />
      </div>
      <div className="design-title-text">DESIGN</div>
      <Design />
      <Navigator />
      <Social />
    </div>
  );
};
