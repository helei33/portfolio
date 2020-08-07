import React from "react";
import Design from "../components/design";
export default (props) => {
  return (
    <div
      style={props.page === 2 ? {} : { transform: "translateX(-100vw)" }}
    >
      <div className="design-title-container">
        <img
          src="/bg-gradient.svg"
          alt="bg-gradient"
          className="design-title-bg"
        />
      </div>
      <Design page={props.page}/>
    </div>
  );
};
