//首页的个人介绍
import React from "react";
import styles from "../styles/introduction.module.css";
import TextLoop from "react-text-loop";
import BlockRevealAnimation from "react-block-reveal-animation";
export default () => {
  return (
    <div className={styles.intro_container}>
      <div>
        <BlockRevealAnimation
          className="myCustomClassName"
          delay={0.7}
          duration={0.8}
          color="#5216CE"
        >
          <span>嗨! 我的名字是 </span>
          <span style={{ color: "#5216CE" }}>Troye</span>
        </BlockRevealAnimation>
      </div>
      <div>
        <BlockRevealAnimation
          className="myCustomClassName"
          delay={1.3}
          duration={1}
          color="#5216CE"
        >
          <span>我 </span>
          <span style={{ fontFamily: "Noto Serif SC" }}>设计</span>
          <span> 和开发网页和应用</span>
        </BlockRevealAnimation>
      </div>
      <div>
        <BlockRevealAnimation
          className="myCustomClassName"
          delay={2.0}
          duration={0.6}
          color="white"
        >
          <span
            style={{ fontSize: "30px", position: "relative", bottom: "2px" }}
          >
            技术栈{" "}
          </span>
          &nbsp;
          <span style={{ color: "#5216CE" }}>
            <TextLoop interval={800} delay={2000}>
              {[
                "Javascript",
                "Typescript",
                "Nodejs",
                "React",
                "Vue",
                "React Native",
                "Adobe XD",
                "Photoshop",
                "Illustrator",
              ].map((text) => (
                <span key={text}>{text}</span>
              ))}
            </TextLoop>
          </span>
        </BlockRevealAnimation>
      </div>
    </div>
  );
};
