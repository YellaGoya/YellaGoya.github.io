import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import { Helmet } from "react-helmet";
import TopBar from "components/common/TopBar.jsx";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <title>malog</title>
      </Helmet>
      <g.GlobalStyle />
      <TopBar />
      <g.Contents>{element}</g.Contents>
    </>
  );
};
