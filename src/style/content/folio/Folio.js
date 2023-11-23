import styled from 'styled-components';

export const Wrapper = styled.section`
  position: fixed;
  top: 65px;
  left: 0;
  height: calc(100vh - 165px);
  width: calc(100vw - 9px);

  padding-bottom: 100px;
  padding-left: 9px;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: ${({ $lightmode }) => ($lightmode ? '#fff' : 'transparent')};
  transition: background-color 0.4s ease;

  h1,
  h2,
  li,
  span {
    transition: color 0.4s ease;
    color: ${({ $lightmode }) => ($lightmode ? '#000' : '#fff')};
  }

  li > svg {
    transition: fill 0.4s ease;
    fill: ${({ $lightmode }) => ($lightmode ? '#000' : '#fff')};
  }

  li > div {
    transition: background-color 0.4s ease;
    background-color: ${({ $lightmode }) => ($lightmode ? '#000' : '#fff')};
  }

  li > span {
    opacity: ${({ $lightmode }) => ($lightmode ? '1' : '0.85')};
  }

  div:nth-child(2) {
    transition: transform 0.4s ease;
    transform: ${({ $lightmode }) => ($lightmode ? 'scale(-1)' : 'scale(1)')};
  }

  @media (hover: none) and (pointer: coarse) {
    padding-left: 0;
  }
`;
