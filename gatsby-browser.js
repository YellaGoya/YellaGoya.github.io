import {useRef, useContext, useEffect, useState} from 'react';
import {Contents, ContentsWidthWrapper, GlobalStyle} from 'style/Global.js';

import 'assets/highlight/prism-dracula.css';

import { Helmet } from 'react-helmet-async';
import TopBar from 'components/common/TopBar.jsx';

import { SearchProvider } from 'context/search';
import { CategoryProvider } from 'context/category';
import { TopBarProvider, TopBarContext } from 'context/topbar';

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
  const contentsRef = useRef(null);
  const topBarState = useContext(TopBarContext);
  const [menuHeight, setMenuHeight] = useState(54);

  useEffect(() => {
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
        <link
          crossOrigin
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Helmet>
      <GlobalStyle />
      <TopBar menuHeight={menuHeight} setMenuHeight={setMenuHeight} />
      <Contents id="main-contents" ref={contentsRef} $menuHeight={menuHeight} $isSearch={topBarState.isSearch} $isMenu={topBarState.isMenu}>
        <ContentsWidthWrapper>{element}</ContentsWidthWrapper>
      </Contents>
    </>
  );
};
