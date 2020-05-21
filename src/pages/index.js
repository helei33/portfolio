import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Social from "../components/social";
import Navagator from "../components/navigator";
import Introduction from "../components/introduction";
import { Link } from "gatsby";
import Arrow from "../components/arrow";

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <Link to="/">
          <img
            src="/logo.png"
            alt="logo"
            style={{
              position: "absolute",
              left: "30px",
              top: "30px",
              width: "121px",
            }}
          />
        </Link>
        {show ? (
          <div className="index-arrow">
            <Arrow />
          </div>
        ) : null}

        <Navagator />
        <Introduction />
        <Social />
      </div>
    </Layout>
  );
}
