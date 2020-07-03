import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Social from "../components/social";
import Navagator from "../components/navigator";
import Fade from "react-reveal/Fade";
import Introduction from "../components/introduction";
import { Link } from "gatsby";
import Arrow from "../components/arrow";
import Intro from "../containers/intro";
import Develop from "../containers/develop";
import Design from "../containers/design";
export default function Home() {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  return (
    <Layout>
      {page === 0 ? <Intro /> : page === 1 ? <Develop /> : <Design />}
      <Navagator setPage={setPage} page={page} />
      <Social />
    </Layout>
  );
}
