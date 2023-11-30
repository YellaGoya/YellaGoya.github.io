import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;

  color: var(--font);
  background-color: var(--bg);
`;

export const Post = styled.section`
  padding-top: 20px;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: calc(100% - 40px);
  height: 300px;

  padding: 20px;

  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
    }
  }
`;

export const Categories = styled.div`
  position: absolute;
  top: 0px;
  & > span {
    padding: 2px 8px 4px 6px;
    margin: 0 3px;

    color: var(--font);
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;

    background-color: var(--font-highlight);
    border-radius: 5px 5px 15px 5px;
  }
`;

export const Content = styled.article`
  position: relative;
  padding: 20px;
  margin-bottom: 100px;
  div > * {
    position: relative;
  }

  p {
    font-weight: 300;
  }

  * {
    margin: 0 0 15px 0;
    line-height: 1.7;
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

  p,
  li {
    color: #eee;
    //텍스트 높이
  }

  a {
    color: var(--font-highlight);
    text-underline-offset: 3px;
  }

  sup > a {
    color: var(--font-highlight);
    font-weight: 700;
    text-decoration: none;
  }

  hr {
    margin-top: -15px;
    border: 1px solid var(--border);

    opacity: 0.3;
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

    color: var(--font);
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;

    background-color: var(--bg-code);
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
      border-bottom: 2px solid var(--border-lite);
    }

    & > tbody {
      & > tr > td {
        padding: 6px 12px;
        border-bottom: 1px solid var(--border);
      }

      & > :last-child > td {
        border-bottom: none;
      }
    }
  }

  .gatsby-code-button-container {
    position: relative;
    top: 0;

    height: 0px;
    width: auto;
    max-width: 900px;
    margin: 0px 10px 0px 10px;

    &::before {
      content: none;
    }
  }

  .gatsby-code-button {
    position: absolute;
    top: 9px;
    right: 7px;

    &::before {
      content: none;
    }

    &::after {
      content: none;
    }

    & > svg > path {
      fill: var(--font);
    }

    &:hover {
      & > svg > path {
        fill: var(--font-highlight);
      }
    }
  }

  .gatsby-highlight {
    position: relative;

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
    }
  }

  blockquote {
    width: auto;
    max-width: 880px;
    margin: 0px 10px 15px 10px;

    padding: 10px 20px 10px 20px;
    border-radius: 4px 4px 24px 4px;

    background-color: var(--bg-blur-22);

    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--bg-blur-44);
    }

    & > p {
      color: var(--font);
    }

    box-shadow:
      rgba(0, 0, 0, 0.24) 0px 1px 1px,
      rgba(0, 0, 0, 0.24) 0px 2px 2px,
      rgba(0, 0, 0, 0.24) 0px 4px 4px;
  }
`;
