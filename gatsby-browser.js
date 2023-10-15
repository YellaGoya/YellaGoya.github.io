import * as r from "react";
import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import { Helmet } from "react-helmet-async";
import TopBar from "components/common/TopBar.jsx";

import { SearchProvider } from "context/search";
import { CategoryProvider } from "context/category";
import { TopBarProvider, TopBarContext } from "context/topbar";

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
  const contentsRef = r.useRef(null);
  const topBarState = r.useContext(TopBarContext);
  const [menuHeight, setMenuHeight] = r.useState(54);

  r.useEffect(() => {
    if (contentsRef.current) {
      contentsRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <html lang="ko" />
        <meta charset="UTF-8" />
        <meta name="description" content="YellaGoya Malog." />
        <meta name="author" content="YellaGoya" />
        <title>malog</title>
      </Helmet>
      <g.GlobalStyle />
      <TopBar menuHeight={menuHeight} setMenuHeight={setMenuHeight} />
      <g.Contents $menuHeight={menuHeight} $isSearch={topBarState.isSearch} $isMenu={topBarState.isMenu}>
        <g.ContentsWidthWrapper>{element}</g.ContentsWidthWrapper>
      </g.Contents>
    </>
  );
};
