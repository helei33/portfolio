//设计页面
import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../styles/design.module.css";
import DesignShow from "./designShow";
import Slide from "react-reveal/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual } from "swiper";
import "swiper/swiper.scss";
import { isMobile } from "react-device-detect";
import { useSpring, animated as a } from "react-spring";
import { useIntl } from "gatsby-plugin-intl";

SwiperCore.use([Virtual]);
export default (props) => {
  const intl = useIntl();
  const [isServer, setServer] = useState(true);
  useEffect(() => {
    setServer(false);
  }, []);
  const data = useStaticQuery(graphql`
    query GetAllDesign {
      allDesignJson {
        edges {
          node {
            value {
              name
              description
              image
              url
              color
            }
          }
        }
      }
    }
  `);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(-1);

  const [designData, setDesignData] = useState(
    data.allDesignJson.edges[0].node.value
  );
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
  if (isServer) {
    return <div></div>;
  }
  return (
    <div style={{ overflow: "hidden" }}>
      {show ? (
        <DesignShow data={designData} setShow={setShow} />
      ) : (
        <div className={styles.design_shadow_mask}></div>
      )}
      <Slide bottom collapse when={show}>
        <div
          className={styles.design_show_mask}
          style={{
            backgroundColor: designData.color[0],
          }}
        ></div>
      </Slide>

      <div className={styles.desgin_container}>
        <div className="design-title-text">
          {intl.formatMessage({ id: "DESIGN" })}
        </div>
        <div className="design-demo">
          <Swiper
            spaceBetween={0}
            virtual
            slidesPerView={
              isMobile ? 1 : (document.body.clientWidth - 200) / 420
            }
          >
            {data.allDesignJson.edges.map(({ node }, i) => (
              <SwiperSlide key={i} virtualIndex={i}>
                <div
                  className={styles.design_item}
                  onClick={() => {
                    setShow(true);
                    setDesignData(node.value);
                  }}
                >
                  <a.div
                    className={styles.image_container}
                    onMouseMove={({ clientX: x, clientY: y }) => {
                      setCard({ xys: calc(x, y) });
                      setId(i);
                    }}
                    onMouseLeave={() => {
                      setCard({ xys: [0, 0, 1] });
                      setId(-1);
                    }}
                    style={
                      id === i ? { transform: card.xys.interpolate(trans) } : {}
                    }
                  >
                    <img
                      src={node.value.image}
                      alt=""
                      className={styles.bg_image}
                    />
                  </a.div>

                  <div className={styles.design_subtitle}>
                    {intl.formatMessage({ id: node.value.name })}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
