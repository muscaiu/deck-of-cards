import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Nav from "../components/Nav/Nav";
import BetaCards from "../components/BetaCards/BetaCards";

const BetaCardsPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <BetaCards />
    </>
  );
};

export default BetaCardsPage;

export const Head: HeadFC = () => <title>Beta Cards Page</title>;
