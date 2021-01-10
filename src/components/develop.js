//展示项目
import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../styles/develop.module.css";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSpring, animated as a } from "react-spring";
import SwiperCore, { Virtual } from "swiper";
import "swiper/swiper.scss";

SwiperCore.use([Virtual]);
export default () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(-1);
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const [card, setCard] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const data = useStaticQuery(graphql`
    query GetAllProjects {
      allProjectsJson {
        edges {
          node {
            value {
              name
              github
              detail
              description
              illustration
            }
          }
        }
      }
    }
  `);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={(document.body.clientWidth - 400) / 300}
      virtual
    >
      {data.allProjectsJson.edges.map(({ node }, i) => (
        <SwiperSlide key={i} virtualIndex={i}>
          <a.div
            className={styles.project_item}
            onClick={() => {
              set((state) => !state);
              setShow(!show);
              setId(i);
            }}
            onMouseMove={({ clientX: x, clientY: y }) => {
              setCard({ xys: calc(x, y) });
              setId(i);
            }}
            onMouseLeave={() => {
              setCard({ xys: [0, 0, 1] });
              setId(-1);
              set((state) => false);
            }}
            style={id === i ? { transform: card.xys.interpolate(trans) } : {}}
            id="scroll-item"
          >
            <a.div
              className={styles.project_info}
              style={
                id === i
                  ? {
                      opacity,
                      transform: transform.interpolate(
                        (t) => `${t} rotateX(180deg)`
                      ),
                      backgroundColor: "rgba(82, 22, 206, 1)",
                    }
                  : { display: "none" }
              }
            >
              <div>
                <Fade bottom>
                  <div className={styles.project_name}>{node.value.name}</div>
                </Fade>
                <Fade bottom>
                  <div className={styles.project_detail}>
                    {node.value.detail}
                  </div>
                </Fade>

                <a
                  href={node.value.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Fade bottom delay={100}>
                    <div className={styles.project_github}>Github地址</div>
                  </Fade>
                </a>
              </div>
            </a.div>
            <a.div
              style={
                id === i
                  ? {
                      opacity: opacity.interpolate((o) => 1 - o),
                      transform,
                      height: "100%",
                      position: "relative",
                      bottom: 404,
                    }
                  : {}
              }
            >
              <div className={styles.project_desc}>
                {node.value.description}
              </div>
              <img
                src={node.value.illustration}
                alt=""
                className={styles.illustration}
              />
              <div className={styles.mask}></div>
              <img
                src={`/images/background/background${(i + 1) % 6}.jpg`}
                alt=""
                className={styles.bg_image}
              />
            </a.div>
          </a.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
