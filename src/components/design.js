//设计页面
import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../styles/design.module.css";
import { WheelDirective } from "../utils/wheelDirective";
import DesignShow from "./designShow";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default (props) => {
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
  const [designData, setDesignData] = useState(
    data.allDesignJson.edges[0].node.value
  );

  useEffect(() => {
    const ScrollEle = document.getElementById("design-wheel");
    new WheelDirective(ScrollEle);
  }, []);
  console.log(props.page, "page");
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        width: "100vw",
        position: "absolute",
      }}
    >
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
        <div className="design-title-text">DESIGN</div>
        <div className={styles.scroll_parent}>
          <div className={styles.design_container} id="design-wheel">
            <div
              style={{
                width: `${data.allDesignJson.edges.length * 400}px`,
              }}
            >
              {data.allDesignJson.edges.map(({ node }, i) => (
                <Fade
                  bottom
                  delay={i * 150}
                  duration={500}
                  key={node.value.name}
                  when={props.page === 2}
                >
                  <div
                    className={styles.design_item}
                    onClick={() => {
                      setShow(true);
                      setDesignData(node.value);
                    }}
                  >
                    <div className={styles.image_container}>
                      <img
                        src={node.value.image}
                        alt=""
                        className={styles.bg_image}
                      />
                    </div>

                    <div className={styles.design_subtitle}>
                      {node.value.name}
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
