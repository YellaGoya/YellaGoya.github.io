import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import { Helmet } from "react-helmet";
import TopBar from "components/common/TopBar.jsx";

import { SearchProvider } from "context/search";
import { CategoryProvider } from "context/category";
import { TopBarProvider } from "context/topbar";

export const wrapRootElement = ({ element }) => {
  return (
    <TopBarProvider>
      <SearchProvider>
        <CategoryProvider>{element}</CategoryProvider>
      </SearchProvider>
    </TopBarProvider>
  );
};

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <html lang="ko" />
        <title>malog</title>
      </Helmet>
      <g.GlobalStyle />
      <TopBar />
      <g.Contents $isSearch={false} $isMenu={false}>
        <g.ContentsWidthWrapper>{element}</g.ContentsWidthWrapper>
      </g.Contents>
    </>
  );
};
