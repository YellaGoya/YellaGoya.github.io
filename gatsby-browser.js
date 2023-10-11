import * as r from "react";
import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import { Helmet } from "react-helmet";
import TopBar from "components/common/TopBar.jsx";
import { SearchContextProvider } from "context/search";

export const wrapPageElement = ({ element }) => {
  const [isFolio, setIsFolio] = r.useState(false);
  const [isMenu, setIsMenu] = r.useState(false);
  const [isSearch, setIsSearch] = r.useState(false);

  const contentsRef = r.useRef(null);
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
      <SearchContextProvider>
        <TopBar isFolio={isFolio} setIsFolio={setIsFolio} isMenu={isMenu} setIsMenu={setIsMenu} isSearch={isSearch} setIsSearch={setIsSearch} />
        <g.Contents ref={contentsRef} $isMenu={isMenu} $isSearch={isSearch}>
          <g.ContentsWidthWrapper>{element}</g.ContentsWidthWrapper>
        </g.Contents>
      </SearchContextProvider>
    </>
  );
};
