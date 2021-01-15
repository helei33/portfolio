import React, { useState } from "react";
import Develop from "../components/develop";
import Mouse from "../components/mouse";

export default (props) => {
  const [click, setClick] = useState(false);
  if (props.fullpageApi) {
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
        <div
          className="develop-project"
          onClick={() => {
            setClick(true);
          }}
        >
          <Develop />
          {!click && (
            <div className="develop-mouse">
              <Mouse />
            </div>
          )}
        </div>
      </div>
    );
  }
  return <div></div>;
};
