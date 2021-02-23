//展示项目
import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../styles/develop.module.css";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSpring, animated as a } from "react-spring";
import SwiperCore, { Virtual } from "swiper";
import "swiper/swiper.scss";
import { isMobile } from "react-device-detect";
import { useIntl } from "gatsby-plugin-intl";

SwiperCore.use([Virtual]);
export default () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(-1);
  const [flipped, set] = useState(false);
  const intl = useIntl();
  const [isServer, setServer] = useState(true);
  useEffect(() => {
    setServer(false);
  }, []);
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
  if (isServer) {
    return <div></div>;
  }
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={
        isMobile
          ? document.body.clientWidth / 300
          : (document.body.clientWidth - 400) / 320
      }
      virtual
    >
      {data.allProjectsJson.edges.map(({ node }, i) => (
        <SwiperSlide key={i} virtualIndex={i}>
          <a.div
            className={styles.project_item}
            onClick={() => {
              if (i === data.allProjectsJson.edges.length - 1) {
                window.open(node.value.github);
              } else {
                set((state) => !state);
                setShow(!show);
                setId(i);
              }
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
                  <div className={styles.project_name}>
                    {intl.formatMessage({ id: node.value.name })}
                  </div>
                </Fade>
                <Fade bottom>
                  <div className={styles.project_detail}>
                    {intl.formatMessage({ id: node.value.detail })}
                  </div>
                </Fade>

                <div
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    window.open(node.value.github);
                  }}
                >
                  <Fade bottom delay={100}>
                    <div className={styles.project_github}>Github</div>
                  </Fade>
                </div>
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
                {intl.formatMessage({ id: node.value.description })}
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
