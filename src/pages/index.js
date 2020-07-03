import React, { useState } from "react";
import Layout from "../components/layout";
import Social from "../components/social";
import Navagator from "../components/navigator";
import Intro from "../containers/intro";
import Develop from "../containers/develop";
import Design from "../containers/design";
export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <Layout>
      {page === 0 ? <Intro /> : page === 1 ? <Develop /> : <Design />}
      <Navagator setPage={setPage} page={page} />
      <Social />
    </Layout>
  );
}
