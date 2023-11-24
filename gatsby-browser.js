import { useRef, useContext, useEffect, useState } from 'react';
import { Contents, ContentsWidthWrapper, GlobalStyle } from 'style/Global.js';

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

/* eslint-disable react-hooks/rules-of-hooks */
export const wrapPageElement = ({ element }) => {
  const contentsRef = useRef(null);
  const topBarState = useContext(TopBarContext);
  const [menuHeight, setMenuHeight] = useState(54);

  useEffect(() => {
    const body = document.querySelector('body');
    if (topBarState.light && location.pathname.startsWith('/folio')) {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }
  }, [topBarState.light, location.pathname]);

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
      </Helmet>
      <GlobalStyle />
      <TopBar menuHeight={menuHeight} setMenuHeight={setMenuHeight} />
      <Contents ref={contentsRef} id="main-contents" $menuHeight={menuHeight} $isSearch={topBarState.isSearch} $isMenu={topBarState.isMenu}>
        <ContentsWidthWrapper>{element}</ContentsWidthWrapper>
      </Contents>
    </>
  );
};
