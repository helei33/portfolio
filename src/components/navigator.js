//顶部导航栏
import React from "react";
import styles from "../styles/navigator.module.css";
export default (props) => {
  const navigators = [
    { id: 0, name: "介绍" },
    { id: 1, name: "开发" },
    { id: 2, name: "设计" },
  ];
  const renderNav = () => {
    return navigators.map((item, index) => {
      return (
        <li className={styles.page_link} key={item.id}>
          <div
            className={styles.circle}
            style={
              props.page === index
                ? { backgroundColor: "rgba(82, 22, 206, 1)" }
                : {}
            }
            onClick={() => {
              props.setPage(index);
            }}
          ></div>
          <div className={styles.page_text}>{item.name}</div>
        </li>
      );
    });
  };
  return (
    <div className={styles.navigator_container}>
      <div className={styles.navigator_line}></div>
      <ul className={styles.link_container}>{renderNav()}</ul>
    </div>
  );
};
