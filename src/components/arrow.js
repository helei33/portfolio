//引导用的箭头
import React from "react";
import styles from "../styles/arrow.module.css";
import Fade from "react-reveal/Fade";
export default () => {
  return (
    <Fade bottom delay={3000}>
      <div className={styles.arrow_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className={styles.circle}
        >
          <g
            transform="translate(48 48) rotate(180)"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          >
            <circle cx="24" cy="24" r="24" stroke="none" />
            <circle cx="24" cy="24" r="23.25" fill="none" />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="40.5"
          viewBox="0 0 9 64.5"
          className={styles.arrow}
        >
          <g transform="translate(-799.5 -100)">
            <line
              y2="59"
              transform="translate(804 163.5) rotate(180)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              d="M4.5,0,9,8H0Z"
              transform="translate(799.5 100)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </Fade>
  );
};
