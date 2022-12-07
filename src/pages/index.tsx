import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Cards from "../components/Cards";
import Nav from "../components/Nav/Nav";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <Cards />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Cards Page</title>;
