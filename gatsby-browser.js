import * as r from "react";
import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import TopBar from "components/common/TopBar.jsx";

export const wrapPageElement = ({ element }) => {
  const [isMenu, setIsMenu] = r.useState(false);

  return (
    <>
      <g.GlobalStyle />
      <TopBar isMenu={isMenu} setIsMenu={setIsMenu} />
      <g.Contents $isMenu={isMenu}>{element}</g.Contents>
      {/* <g.GradContentsUpper $isMenu={isMenu} />
      <g.GradContentsLower /> */}
    </>
  );
};
