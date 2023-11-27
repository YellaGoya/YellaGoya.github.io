import styled from 'styled-components';

export const Wrapper = styled.section`
  position: fixed;
  top: ${({ $isFocus }) => ($isFocus ? '0' : '64px')};
  left: 0;
  height: ${({ $isFocus }) => ($isFocus ? 'calc(100vh - 100px)' : 'calc(100vh - 165px)')};
  width: calc(100vw - 9px);

  padding-bottom: 100px;
  padding-left: 9px;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: var(--bg);
  transition:
    background-color 0.4s ease,
    top 0.4s ease,
    height 0.4s ease;

  @media (hover: none) and (pointer: coarse) {
    padding-left: 0;
    width: 100vw;
  }
`;
