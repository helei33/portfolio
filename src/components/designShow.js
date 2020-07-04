//展示设计作品
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "../styles/designShow.module.css";
import BlockRevealAnimation from "react-block-reveal-animation";
import Arrow from "../components/arrow";
export default (props) => {
  if (!props.data) {
    return null;
  }
  useEffect(() => {}, []);
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
      <div className={styles.arrow}>
        <Arrow />
      </div>
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

      <Fade bottom delay={500}>
        <div className={styles.line}></div>
      </Fade>
      <Fade bottom delay={500}>
        <div className={styles.design_desc} color={props.data.fontColor}>
          {props.data.description}
        </div>
      </Fade>
      <div className={styles.img_container}>
        {props.data.url.map((item, i) => {
          return (
            i === index && (
              <BlockRevealAnimation
                className="myCustomClassName"
                delay={first ? 1.4 : 0}
                duration={1.4}
                color="white"
                key={i}
              >
                <img src={item} alt="" className={styles.design_img} />
              </BlockRevealAnimation>
            )
          );
        })}
      </div>
    </div>
  );
};
