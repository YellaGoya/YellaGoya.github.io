import { styled, createGlobalStyle } from "styled-components";
import PrVr from "../assets/fonts/PretendardVariable.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PrVr';
    src: local('PrVr'), local('PrVr');
    font-style: normal;
    src: url(${PrVr}) format('truetype');
  }
  body {
    margin: 0;
    font-family: "PrVr", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;;
    text-rendering: optimizeLegibility;
    background-color: #1b1b1b;
  }
`;

export const Contents = styled.section`
  position: relative;

  background-color: aqua;
`;
