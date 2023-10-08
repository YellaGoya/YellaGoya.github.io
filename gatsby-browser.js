import React from "react";

import * as s from "style/Global.js";
import TopBar from "components/common/TopBar.jsx";

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <s.GlobalStyle />
      <TopBar {...props} />
      <s.Contents>{element}</s.Contents>
    </>
  );
};
