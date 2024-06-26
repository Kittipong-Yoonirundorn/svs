import React from "react";
import SEO from "../common/seo";
import Project from "../components/project";
import Wrapper from "../layout/wrapper";

const indx = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Siamvayupak For Product"} />
      <Project />
    </Wrapper>
  );
};

export default indx;
