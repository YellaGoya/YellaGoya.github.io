import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 63px;

  //내부 wrapper 2개를 좌우 끝에 위치 시키고 수직 중앙 정렬
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #858585;

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
    color: #d5383f;
    transition: opacity 0.3s ease;
    opacity: ${(props) => (props.$isFolio ? "0.5" : "1")};
  }

  & > :nth-child(2) {
    opacity: ${(props) => (props.$isFolio ? "0.5" : "1")};
  }

  & > :nth-child(4) {
    opacity: ${(props) => (props.$isFolio ? "1" : "0.5")};
  }
`;

export const Title = styled(Link)`
  display: inline;
  margin: 8px;

  color: #d5383f;

  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;

  cursor: pointer;

  opacity: 0.5;
  transition: opacity 0.3s ease;
`;

export const NavWrapper = styled.nav`
  position: relative;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  & > :first-child {
    visibility: ${(props) => (props.$isMenu ? "visible" : "hidden")};
    opacity: ${(props) => (props.$isMenu ? "1" : "0")};

    transition:
      visibility 0.3s ease,
      opacity 0.3s ease;
  }
`;

export const NavBtn = styled.button`
  margin-right: 20px;

  background-color: transparent;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  & > svg {
    color: ${(props) => (props.$isToggle ? "#fff" : "#d5383f")};
    transition: color 0.3s ease;
  }
`;

export const Menu = styled.nav`
  position: fixed;
  top: ${(props) => (props.$isMenu ? "65px" : "-137px")};

  height: 200px;
  width: 100%;

  border-bottom: 2px solid #858585;

  transition: top 0.5s ease;
`;
