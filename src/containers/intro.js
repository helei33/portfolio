import React from "react";
import Introduction from "../components/introduction";
import { Link } from "gatsby";
export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/">
        <img
          src="/logo.png"
          alt="logo"
          style={{
            position: "absolute",
            left: "30px",
            top: "10px",
            width: "121px",
          }}
        />
      </Link>

      <Introduction />
    </div>
  );
}
