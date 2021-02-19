import React, { useState, useEffect } from "react";
import Develop from "../components/develop";
import Mouse from "../components/mouse";
import { useIntl, IntlContextConsumer } from "gatsby-plugin-intl";

export default (props) => {
  const [click, setClick] = useState(false);
  const intl = useIntl();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
  if (!show) {
    return <div></div>;
  }
  return (
    <div className="develop-container">
      <div className="develop-title-container">
        <img
          src="/bg-gradient.svg"
          alt="bg-gradient"
          className="develop-title-bg"
        />
        <div className="develop-title-text">
          {intl.formatMessage({ id: "DEVELOP" })}
        </div>
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
};
