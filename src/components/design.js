import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../styles/design.module.css";
import { WheelDirective } from "../utils/wheelDirective";
import DesignShow from "./designShow";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default () => {
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
  const [designData, setDesignData] = useState();
  useEffect(() => {
    const Ele = document.getElementById("design-wheel");
    new WheelDirective(Ele);
  }, []);
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      {show ? (
        <DesignShow data={designData} setShow={setShow} />
      ) : (
        <div className={styles.design_shadow_mask}></div>
      )}
      <Slide bottom collapse when={show}>
        <div
          className={styles.design_show_mask}
          style={{
            backgroundColor: data.allDesignJson.edges[0].node.value.color[0],
          }}
        ></div>
      </Slide>

      <div className={styles.scroll_parent}>
        <div className={styles.design_container} id="design-wheel">
          <div style={{ width: `${data.allDesignJson.edges.length * 400}px` }}>
            {data.allDesignJson.edges.map(({ node }, i) => (
              <Fade bottom delay={i * 150} duration={450}>
                <div
                  key={node.value.name}
                  className={styles.design_item}
                  onClick={() => {
                    setShow(true);
                    setDesignData(node.value);
                  }}
                >
                  <img
                    src={node.value.image}
                    alt=""
                    className={styles.bg_image}
                  />
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
