import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import TopBar from "components/common/TopBar.jsx";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <g.GlobalStyle />
      <TopBar />
      <g.Contents>{element}</g.Contents>
    </>
  );
};
