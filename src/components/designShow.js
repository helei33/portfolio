//展示设计作品
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "../styles/designShow.module.css";
import Arrow from "../components/arrow";
import BlockRevealAnimation from "react-block-reveal-animation";
export default (props) => {
  if (!props.data) {
    return null;
  }

  const [index, setIndex] = useState(0);
  const [first, setFirst] = useState(true);
  return (
    <div
      className={styles.design_show_container}
      style={index === 0 ? {} : { backgroundColor: props.data.color[index] }}
    >
      <Fade bottom delay={700}>
        <AiOutlineClose
          color={props.data.fontColor}
          size="2rem"
          className={styles.close}
          onClick={() => {
            props.setShow(false);
          }}
        />
      </Fade>
      <FiArrowLeft
        opacity={index > 0 ? 1 : 0.5}
        color={props.data.fontColor}
        className={styles.prev}
        size="2rem"
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      />
      <div className={styles.arrow}>
        <Arrow />
      </div>
      <FiArrowRight
        opacity={index < props.data.url.length - 1 ? 1 : 0.5}
        color={props.data.fontColor}
        size="2rem"
        className={styles.next}
        onClick={() => {
          if (index < props.data.url.length - 1) setIndex(index + 1);
          setFirst(false);
        }}
      />
      <div className={styles.design_name}>
        <BlockRevealAnimation
          className="myCustomClassName"
          delay={1.0}
          duration={0.5}
          color="white"
        >
          <span color={props.data.fontColor}>{props.data.name}</span>
        </BlockRevealAnimation>
      </div>

      <BlockRevealAnimation
        className="myCustomClassName"
        delay={0.5}
        duration={0.7}
        color="white"
      >
        <div className={styles.line}></div>
      </BlockRevealAnimation>
      <div className={styles.design_desc} color={props.data.fontColor}>
        <BlockRevealAnimation
          className="myCustomClassName"
          delay={0.6}
          duration={1}
          color={props.data.color[index]}
        >
          {props.data.description}
        </BlockRevealAnimation>
      </div>
      <div className={styles.img_container_parent}>
        <div className={styles.img_container}>
          {props.data.url.map((item, i) => {
            return (
              <Slide
                right
                opposite
                delay={first ? 1400 : 0}
                duration={800}
                key={i}
              >
                <img
                  src={item}
                  alt=""
                  className={styles.design_img}
                  style={index === i ? {} : { display: "none" }}
                />
              </Slide>
            );
          })}
        </div>
      </div>
    </div>
  );
};
