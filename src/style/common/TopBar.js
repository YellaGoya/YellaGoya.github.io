import styled from 'styled-components';
import { Link } from 'gatsby';

export const Header = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 63px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg);
  transition: background-color 0.4s ease;

  border-bottom: 2px solid var(--border);

  user-select: none;
  z-index: 100;
`;

export const TitleWrapper = styled.nav`
  position: relative;
  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    color: var(--font-highlight);
    transition:
      opacity 0.2s ease,
      color 0.4s ease;
    opacity: ${(props) => (props.$isFolio ? '0.5' : '1')};
  }

  & > #malog-title {
    transition: color 0.4s ease;
    opacity: ${(props) => (props.$isFolio ? '0.5' : '1')};
  }

  & > #folio-title {
    transition: color 0.4s ease;
    opacity: ${(props) => (props.$isFolio ? '1' : '0.5')};
  }

  & > span {
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--bg-blur-66);
    transition: color 0.4s ease;
  }
`;

export const Title = styled(Link)`
  display: inline;
  margin: 8px;

  color: var(--font-highlight);

  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;

  cursor: pointer;

  opacity: 0.5;
  transition: opacity 0.2s ease;
`;

export const NavWrapper = styled.nav`
  position: relative;
  color: var(--font);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBtn = styled.button`
  margin-right: 20px;
  height: 30px;
  width: 30px;

  background-color: transparent;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background-color 0.2s ease;
  border-radius: 0.5rem;

  &:hover {
    background-color: var(--bg-blur-22);
  }

  & > svg {
    color: ${(props) => (props.$isToggle ? 'var(--font)' : 'var(--font-highlight)')};
    transition: color 0.2s ease;
  }

  &#search > svg {
    transform: translate(0, -1px);
  }
`;

export const Menu = styled.nav`
  position: fixed;
  visibility: ${(props) => (props.$isMenu ? 'visible' : 'hidden')};
  top: ${(props) => (props.$isMenu ? '64px' : `${63 - props.$menuHeight}px`)};

  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;

  border-bottom: 2px solid var(--border);

  transition:
    all 0.5s ease,
    background-color 0.4s ease;

  background-color: var(--bg);
  z-index: 50;
`;

export const Category = styled.div`
  color: var(--font);

  padding: 15px;

  cursor: pointer;
`;

export const Search = styled.nav`
  position: fixed;
  top: ${(props) => (props.$isSearch ? '64px' : '-2px')};

  height: 65px;
  width: 100%;

  background-color: var(--bg);

  border-bottom: 2px solid var(--border);

  transition:
    top 0.5s ease,
    background-color 0.4s ease;

  z-index: 51;

  & > input {
    position: relative;
    top: 7px;
    left: 20px;
    height: 50px;
    width: calc(100% - 40px);

    font-size: 1.2rem;
    font-weight: 700;
    color: var(--font);

    background-color: transparent;

    outline: none;
    border: none;

    text-rendering: optimizeLegibility;
  }
`;
