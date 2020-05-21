import React from "react";
import styles from "../styles/navigator.module.css";
import { Link, globalHistory } from "@reach/router";
export default () => {
  const { pathname } = globalHistory.location;
  return (
    <div className={styles.navigator_container}>
      <div className={styles.navigator_line}></div>
      <ul className={styles.link_container}>
        <Link to="/">
          <li className={styles.page_link}>
            <div
              className={styles.circle}
              style={
                pathname === "/"
                  ? { backgroundColor: "rgba(82, 22, 206, 1)" }
                  : {}
              }
            ></div>
            <div className={styles.page_text}>介绍</div>
          </li>
        </Link>
        <Link to="/projects">
          <li className={styles.page_link}>
            <div
              className={styles.circle}
              style={
                pathname === "/projects"
                  ? { backgroundColor: "rgba(82, 22, 206, 1)" }
                  : {}
              }
            ></div>
            <div className={styles.page_text}>项目</div>
          </li>
        </Link>
        <Link to="/design">
          <li className={styles.page_link}>
            <div
              className={styles.circle}
              style={
                pathname === "/design"
                  ? { backgroundColor: "rgba(82, 22, 206, 1)" }
                  : {}
              }
            ></div>
            <div className={styles.page_text}>设计</div>
          </li>
        </Link>
      </ul>
    </div>
  );
};
