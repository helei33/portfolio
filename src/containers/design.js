import React, { useState, useEffect } from "react";
import Design from "../components/design";
export default (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!show) {
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
