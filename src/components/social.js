import React from "react";
import styles from "../styles/social.module.css";
import { RiDribbbleLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
export default () => {
  return (
    <ul className={styles.social_container}>
      <a
        href="https://dribbble.com/troyeguo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.button_bg}>
          <div className={styles.button_mask}>
            <RiDribbbleLine color="white" size="1.5rem" />
          </div>
        </li>
      </a>
      <a
        href="https://github.com/troyeguo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.button_bg}>
          <div className={styles.button_mask}>
            <AiOutlineGithub color="white" size="1.5rem" />
          </div>
        </li>
      </a>
      <a
        href="https://www.linkedin.com/in/troyeguo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.button_bg}>
          <div className={styles.button_mask}>
            <FaLinkedinIn color="white" size="1.2rem" />
          </div>
        </li>
      </a>
      <a
        href="mailto:guo362429@163.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className={styles.button_bg}>
          <div className={styles.button_mask}>
            <FiMail color="white" size="1.5rem" />
          </div>
        </li>
      </a>
    </ul>
  );
};
