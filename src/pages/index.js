import React from "react";
import Layout from "../components/layout";
import Social from "../components/social";
import Navagator from "../components/navigator";
import Introduction from "../components/introduction";
import { Link } from "gatsby";

export default function Home() {
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
        <Navagator />
        <Introduction />
        <Social />
      </div>
    </Layout>
  );
}
