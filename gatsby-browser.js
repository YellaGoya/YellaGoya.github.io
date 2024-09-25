import { useRef, useContext, useEffect, useState } from 'react';

import 'style/fonts.css';
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
    const { body } = document;

    if (topBarState.light) {
      body.className = 'light';
    } else {
      // body.className = 'dark';
      body.classList.remove('light');
    }
  }, [topBarState.light]);

  useEffect(() => {
    // if (location.pathname.startsWith('/folio')) topBarState.setLight(true);
    // else topBarState.setLight(false);
    topBarState.setLight(false);
    if (contentsRef.current) {
      contentsRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <html lang="ko" />
        <meta charset="UTF-8" />
        <meta name="author" content="YellaGoya" />
        <meta name="description" content="Dev blog of Yellagoya" />
        {/* <link
          crossOrigin
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        /> */}
        <meta
          name="keywords"
          content="YellaGoya, malog, 개발자, 블로그, 개발 블로그, 개발, 개발자 블로그, 프론트엔드, 백엔드, 공부, 코딩, 프로그래밍, 자바스크립트, js, react, 리액트, gatsby, next.js, 넥스트, vanilla js, 바닐라 js,"
        />
        <title>malog</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="malog" />
        <meta property="og:locale" content="kr_KR" />
      </Helmet>
      <GlobalStyle />
      <TopBar menuHeight={menuHeight} setMenuHeight={setMenuHeight} />
      <Contents
        ref={contentsRef}
        id="main-conbtents"
        $menuHeight={menuHeight}
        $isSearch={topBarState.isSearch}
        $isMenu={topBarState.isMenu}
        $isFocus={topBarState.isFocus}
      >
        <ContentsWidthWrapper>{element}</ContentsWidthWrapper>
      </Contents>
    </>
  );
};
