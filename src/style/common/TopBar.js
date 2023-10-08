import styled from "styled-components";
import { Link } from "gatsby";

export const Box = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  height: 63px;

  background-color: #1b1b1b;
  border-bottom: 2px solid #858585;

  user-select: none;
`;

export const TitleBox = styled.div`
  position: relative;

  top: 20px;
`;

export const Title = styled(Link)`
  display: inline;
  margin: 8px;

  color: #d5383f;
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;

  cursor: pointer;
`;

export const NavBox = styled.div`
  position: relative;
  float: right;
  top: -3px;
  right: 0px;
  color: white;
`;

// Export const Nav = styled(Link)`
//   margin: 21px;

//   color: white;
//   font-size: 1.1rem;
//   text-decoration: none;
// `;

export const Btn = styled.button`
  margin-right: 20px;

  background-color: transparent;
  border: none;

  color: white;
  font-family: "PrVr";
  font-size: 1.1rem;
  font-weight: 500;

  cursor: pointer;
`;

export const Menu = styled.nav`
  display: ${(props) => (props.$toggle ? "block" : "none")};
  background-color: beige;
  height: 200px;

  background-color: #1b1b1b;
  border-bottom: 2px solid #858585;
`;
