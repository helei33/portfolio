import React from "react";
import Design from "../components/design";
export default (props) => {
  if (!document.location.hash) {
    return <div></div>;
  }
  return (
    <div style={{ height: "100vh" }}>
      <div className="design-title-container">
        <img
          src="/bg-gradient.svg"
          alt="bg-gradient"
          className="design-title-bg"
        />
      </div>
      <Design />
    </div>
  );
};
