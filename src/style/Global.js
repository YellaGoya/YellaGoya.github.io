import { styled, createGlobalStyle, keyframes } from "styled-components";

const searchOpacity = keyframes`
  0% {
    opacity: 0;
  }
  
  15% {
    opacity: 1;
  }

  75% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

    overflow : hidden;
  }

  body, input {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    background-color: #1b1b1b;

    & > .gatsby-code-button-toaster{
      position: fixed;
      height:63px;
      width: 100vw;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -1px;
      
      background-color: #1b1b1b;

      opacity: 0;

      animation: ${searchOpacity} 2s ease;

      & > .gatsby-code-button-toaster-text{
        position: fixed;
        top:17px;
        right: 22px;
        padding: 0;

        width: fit-content;

        font-size: 1.2rem;
        font-weight: 700;

        background-color: transparent;

        color: #d5383f;

        animation: ${searchOpacity} 2s ease-in-out;
        

        font-family: Pretendard,  -apple-system, BlinkMacSystemFont, system-ui;
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

export const Contents = styled.main`
  position: relative;
  top: ${(props) => (props.$isMenu ? `${67 + props.$menuHeight}px` : props.$isSearch ? "132px" : "65px")};

  width: 100%;

  height: ${(props) =>
    props.$isMenu ? `calc(100vh - ${67 + props.$menuHeight}px)` : props.$isSearch ? "calc(100vh - 132px)" : "calc(100vh - 65px)"};

  overflow-y: auto;
  overflow-x: hidden;

  transition:
    top 0.5s ease,
    height 0.5s ease;
`;

export const ContentsWidthWrapper = styled.div`
  max-width: 1300px;

  margin: 0 auto;
`;
