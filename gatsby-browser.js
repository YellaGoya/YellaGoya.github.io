import * as r from "react";
import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import { Helmet } from "react-helmet";
import TopBar from "components/common/TopBar.jsx";

import { SearchProvider } from "context/search";
import { TopBarProvider, TopBarContext } from "context/topbar";

export const wrapRootElement = ({ element }) => {
  return (
    <TopBarProvider>
      <SearchProvider>{element}</SearchProvider>
    </TopBarProvider>
  );
};

export const wrapPageElement = ({ element }) => {
  const contentsRef = r.useRef(null);
  const topBarState = r.useContext(TopBarContext);

  r.useEffect(() => {
    if (contentsRef.current) {
      contentsRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>malog</title>
      </Helmet>
      <g.GlobalStyle />
      <TopBar />
      <g.Contents ref={contentsRef} $isSearch={topBarState.isSearch} $isMenu={topBarState.isMenu}>
        <g.ContentsWidthWrapper>{element}</g.ContentsWidthWrapper>
      </g.Contents>
    </>
  );
};
