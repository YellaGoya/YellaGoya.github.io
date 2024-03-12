import { Contents, ContentsWidthWrapper, GlobalStyle } from 'style/Global.js';

import 'assets/highlight/prism-dracula.css';

import { Helmet } from 'react-helmet-async';
import TopBar from 'components/common/TopBar.jsx';

import { SearchProvider } from 'context/search';
import { CategoryProvider } from 'context/category';
import { TopBarProvider } from 'context/topbar';

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
        <meta name="author" content="YellaGoya" />
        <meta name="description" content="Dev blog of Yellagoya" />
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
      <TopBar />
      <Contents $isSearch={false} $isMenu={false}>
        <ContentsWidthWrapper>{element}</ContentsWidthWrapper>
      </Contents>
    </>
  );
};
