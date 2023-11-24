import styled from 'styled-components';

export const SearchWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;

  color: white;
  background-color: var(--bg);

  margin-bottom: 120px;

  ul {
    list-style: none;
  }

  li {
    position: relative;
    padding: 5px 10px;
    color: var(--font);

    margin: 10px;
    border-radius: 0.75rem;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--bg-blur-22);
      & > div {
        background-color: var(--font);
      }
    }

    cursor: pointer;

    & > h2,
    p {
      margin-top: 3px;
      margin-bottom: 3px;
    }

    & > div {
      position: absolute;
      top: 7px;
      left: -10px;
      height: calc(100% - 14px);
      width: 6px;

      transition: background-color 0.2s ease;

      border-radius: 2px;
      background-color: var(--bg-blur-22);
    }
  }
`;

export const Noresult = styled.span`
  position: fixed;

  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2rem;
  font-weight: 800;
  opacity: 0.5;
`;
