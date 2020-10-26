import React, { useState } from "react";
import Layout from "../components/layout";
import Social from "../components/social";
import Intro from "../containers/intro";
import Develop from "../containers/develop";
import Design from "../containers/design";
import Navigator from "../components/navigator";
import SwiperCore, { Mousewheel } from "swiper";
import "swiper/swiper.scss";
import ReactFullpage from "@fullpage/react-fullpage";
SwiperCore.use([Mousewheel]);
export default function Home() {
  return (
    <Layout>
      <ReactFullpage
        scrollOverflow={true}
        anchors={["intro", "develop", "design"]}
        navigation
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <Intro />
                <Social />
                {fullpageApi && <Navigator moveTo={fullpageApi.moveTo} />}
              </div>
              <div className="section">
                <Develop />
                <Social />
                {fullpageApi && <Navigator moveTo={fullpageApi.moveTo} />}
              </div>
              <div className="section">
                <Design />
                <Social />
                {fullpageApi && <Navigator moveTo={fullpageApi.moveTo} />}
              </div>
            </div>
          );
        }}
      />
    </Layout>
  );
}
