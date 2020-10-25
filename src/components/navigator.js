//顶部导航栏
import React from "react";
import styles from "../styles/navigator.module.css";
export default (props) => {
  const navigators = [
    { id: 0, name: "介绍", anchor: "intro" },
    { id: 1, name: "开发", anchor: "develop" },
    { id: 2, name: "设计", anchor: "design" },
  ];
  const renderNav = () => {
    console.log(document.location.hash, "document.location.hash");
    return navigators.map((item, index) => {
      return (
        <li className={styles.page_link} key={item.id}>
          <div
            className={styles.circle}
            style={
              document.location.hash.substring(1) === item.anchor
                ? { backgroundColor: "rgba(82, 22, 206, 1)" }
                : {}
            }
            onClick={() => {
              props.moveTo(item.anchor, index);
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
