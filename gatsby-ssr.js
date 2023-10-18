import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import { Helmet } from "react-helmet-async";
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
        <meta charset="UTF-8" />
        <meta name="description" content="YellaGoya Malog." />
        <meta name="author" content="YellaGoya" />
        <title>malog</title>
        <link
          rel="preload"
          as="style"
          crossOrigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Helmet>
      <g.GlobalStyle />
      <TopBar />
      <g.Contents $isSearch={false} $isMenu={false}>
        <g.ContentsWidthWrapper>{element}</g.ContentsWidthWrapper>
      </g.Contents>
    </>
  );
};
