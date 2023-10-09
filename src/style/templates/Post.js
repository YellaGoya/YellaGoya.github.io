import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;

  color: white;
  background-color: #1b1b1b;
`;

export const Post = styled.section`
  padding-top: 20px;
`;

export const ThumbnailWrapper = styled.div``;

export const Content = styled.article`
  padding: 20px;
  margin-bottom: 100px;

  div > * {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      width: 3px;
      height: 100%;
      background-color: #d5383f;

      transition: opacity 0.2s ease;

      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  p {
    font-weight: 300;
  }

  * {
    margin: 0 0 15px 0;
    line-height: 1.5;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  a {
    color: #d5383f;
    text-underline-offset: 3px;
  }

  sup > a {
    color: #d5383f;
    font-weight: 700;
    text-decoration: none;
  }

  hr {
    //색상 검정으로
    border: 1px solid #858585;
  }

  p > code,
  h1 > code,
  h2 > code,
  h3 > code,
  h4 > code,
  h5 > code,
  h6 > code,
  ul > code,
  ol > code,
  dl > code,
  li > code,
  table > code,
  blockquote > code {
    padding: 3px 6px;
    margin: 0 2px;

    color: #fff;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;

    background-color: #333333;
    border-radius: 5px;
  }

  li {
    margin: 10px 0;

    > * {
      margin: 10px 0;
    }
  }

  table {
    width: auto;
    max-width: 900px;
    margin-left: 10px;
    border-collapse: collapse;

    & > thead > tr > th {
      padding: 12px 12px;
      border-bottom: 2px solid #cccccc;
    }

    & > tbody {
      & > tr > td {
        padding: 6px 12px;
        border-bottom: 1px solid #858585;
      }

      & > :last-child > td {
        border-bottom: none;
      }
    }
  }

  .gatsby-code-button-container {
    width: auto;
    max-width: 900px;
    margin: 0px 10px 15px 10px;

    &::before {
      content: none;
    }
  }

  .gatsby-code-button {
    position: absolute;
    top: -4px;
    right: 7px;

    &::before {
      content: none;
    }

    &::after {
      content: none;
    }

    & > svg > path {
      fill: #fff;
    }

    &:hover {
      & > svg > path {
        fill: #d5383f;
      }
    }
  }

  div > div {
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 10px;
      height: 100%;

      transition: opacity 0.2s ease;

      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }

    & > pre {
      width: auto;
      max-width: 860px;
      margin: 0px 10px 15px 10px;

      overflow-x: auto;

      padding: 30px 20px 30px 20px;
      border-radius: 4px;

      box-shadow:
        rgba(0, 0, 0, 0.24) 0px 1px 1px,
        rgba(0, 0, 0, 0.24) 0px 2px 2px,
        rgba(0, 0, 0, 0.24) 0px 4px 4px;

      &::-webkit-scrollbar {
        height: 9px;
      }
      &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
      }

      &:hover {
        border-radius: 0px 3px 3px 0px;
      }
    }
  }

  blockquote {
    width: auto;
    max-width: 880px;
    margin: 0px 10px 15px 10px;

    padding: 10px 20px 10px 20px;
    border-radius: 4px 4px 24px 4px;

    background-color: #ffffff22;

    transition: background-color 0.2s ease;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: -10px;
      width: 10px;
      height: 100%;
      background-color: #d5383f;

      transition: opacity 0.2s ease;

      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      background-color: #ffffff44;

      border-radius: 0px 3px 24px 0px;
    }

    box-shadow:
      rgba(0, 0, 0, 0.24) 0px 1px 1px,
      rgba(0, 0, 0, 0.24) 0px 2px 2px,
      rgba(0, 0, 0, 0.24) 0px 4px 4px;
  }
`;
