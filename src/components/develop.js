//展示项目
import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../styles/develop.module.css";
import { WheelDirective } from "../utils/wheelDirective";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
export default () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(-1);
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
  useEffect(() => {
    const Ele = document.getElementById("project-wheel");
    new WheelDirective(Ele);
  }, []);
  return (
    <div className={styles.scroll_parent}>
      <div className={styles.project_container} id="project-wheel">
        <div style={{ width: `${data.allProjectsJson.edges.length * 300}px` }}>
          {data.allProjectsJson.edges.map(({ node }, i) => (
            <Fade bottom delay={i * 200} duration={600} key={node.value.name}>
              <div
                className={styles.project_item}
                onClick={() => {
                  setShow(!show);
                  setId(i);
                }}
                // onMouseEnter={() => {
                //   setShow(true);
                //   setId(i);
                // }}
                onMouseLeave={() => {
                  setShow(false);
                  setId(-1);
                }}
              >
                <div className={styles.project_info}>
                  <Slide bottom duration={500} collapse when={show && id === i}>
                    <div className={styles.project_spring}></div>
                  </Slide>
                  {show && id === i ? (
                    <div>
                      <Fade bottom>
                        <div className={styles.project_name}>
                          {node.value.name}
                        </div>
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
                          <div className={styles.project_github}>
                            Github地址
                          </div>
                        </Fade>
                      </a>
                    </div>
                  ) : null}
                </div>

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
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};
