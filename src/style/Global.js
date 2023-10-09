import { styled, createGlobalStyle } from "styled-components";
import PrVr from "assets/fonts/PretendardVariable.ttf";

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

    & > .gatsby-code-button-toaster{
      position: fixed;
      left: calc((100vw - 288px) / 2 + 176px);
      transform: translateX(-50%);

      margin-top: -1px;
      
      height:65px;
      width: fit-content;

      display: flex;
      justify-content: center;
      align-items: center;

      & > .gatsby-code-button-toaster-text{
        font-size: 1.1rem;
        font-weight: 600;

        background-color: transparent;

        color: #d5383f;

        font-family: "PrVr", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;;
        text-rendering: optimizeLegibility;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;

    border-radius: 2px;

    background-clip: padding-box;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;

    transition: background-color .3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #cccccc;
  }
`;

export const Contents = styled.section`
  position: fixed;
  top: ${(props) => (props.$isMenu ? "267px" : "65px")};

  width: 100%;
  height: ${(props) => (props.$isMenu ? "calc(100vh - 267px)" : "calc(100vh - 65px)")};

  overflow-y: scroll;
  overflow-x: hidden;

  transition:
    top 0.5s ease,
    height 0.5s ease;
`;

export const GradContentsUpper = styled.div`
  position: fixed;
  top: ${(props) => (props.$isMenu ? "267px" : "65px")};
  width: 100%;
  height: 10px;

  background-color: #1b1b1b;

  transition: top 0.5s ease;
`;
export const GradContentsLower = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10px;

  background-color: #1b1b1b;
`;
