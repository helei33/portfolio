import React from "react";
import styles from "../styles/navigator.module.css";
import { Link } from "gatsby";
export default () => {
  return (
    <div className={styles.navigator_container}>
      <div className={styles.navigator_line}></div>
      <ul className={styles.link_container}>
        <Link to="/">
          <li className={styles.page_link}>
            <div className={styles.circle}></div>
            <div className={styles.page_text}>浏览</div>
          </li>
        </Link>
        <Link to="/projects">
          <li className={styles.page_link}>
            <div className={styles.circle}></div>
            <div className={styles.page_text}>项目</div>
          </li>
        </Link>
        <Link to="/design">
          <li className={styles.page_link}>
            <div className={styles.circle}></div>
            <div className={styles.page_text}>设计</div>
          </li>
        </Link>
      </ul>
    </div>
  );
};
