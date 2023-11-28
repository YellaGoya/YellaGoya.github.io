import { styled, createGlobalStyle, keyframes } from 'styled-components';

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

  * {
    color: var(--font);
  }

  body, input, button{
    font-family: "Pretendard Variable", Pretendard;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    background-color: var(--bg);

    & > .gatsby-code-button-toaster{
      position: fixed;
      height:63px;
      width: 100vw;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -1px;
      
      background-color: var(--bg);

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

        color: var(--font-highlight);

        animation: ${searchOpacity} 2s ease-in-out;
        

        font-family: "Pretendard Variable", Pretendard;
      }
    }

    --bg: #1b1b1b;
    --bg-blur-22: #ffffff22;
    --bg-blur-44: #ffffff44;
    --bg-blur-66: #ffffff66;
    --bg-code: #333;
    --bg-button-hover: #ffffff22;

    --border: #858585;
    --border-lite: #ccc;

    --font: #fff;
    --font20: #ffffff20;
    --font30: #ffffff30;
    --font40: #ffffff40; 
    --font80: #ffffff80;
    --fontaa: #ffffffaa;
    --fontcc: #ffffffcc;
    --font-highlight: #d5383f;
    --font-custom: #bd93f9;

    --scroll: #888;
    --scroll-hover: #ccc;

    --font-opacity: 0.85;

    &.light {
      --bg: #fff;
      --bg-blur-22: #00000022;
      --bg-blur-44: #00000044;
      --bg-blur-66: #00000066;
      --bg-code: #ccc;
      --bg-button-hover: #00000016;

      --border: #c7c7c7;
      --border-lite: #333;

      --font: #000;
      --font20: #00000020;
      --font30: #00000030;
      --font40: #00000040; 
      --font80: #00000080;
      --fontaa: #000000aa;
      --fontcc: #000000cc;
      --font-highlight: #007fff;
      --font-custom: #9149f9;

      --scroll: #888;
      --scroll-hover: #ccc;

      --font-opacity: 1;
    }
  }

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll);

    border-radius: 2px;

    background-clip: padding-box;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;

    transition: background-color .3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scroll-hover);
  }
`;

export const Contents = styled.main`
  position: relative;
  top: ${(props) => (props.$isFocus ? '0' : props.$isMenu ? `${67 + props.$menuHeight}px` : props.$isSearch ? '132px' : '65px')};

  width: 100%;

  height: ${(props) =>
    props.$isFocus
      ? '100vh'
      : props.$isMenu
      ? `calc(100vh - ${67 + props.$menuHeight}px)`
      : props.$isSearch
      ? 'calc(100vh - 132px)'
      : 'calc(100vh - 65px)'};

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
