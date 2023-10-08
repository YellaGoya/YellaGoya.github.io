import React from "react";

import * as g from "style/Global.js";
import TopBar from "components/common/TopBar.jsx";

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <g.GlobalStyle />
      <TopBar {...props} />
      <g.Contents>{element}</g.Contents>
    </>
  );
};
