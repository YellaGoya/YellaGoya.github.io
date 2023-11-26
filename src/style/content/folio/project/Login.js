import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  & > div {
    width: 100%;
    height: 100%;
  }

  img {
    filter: blur(4px) brightness(0.7);
  }

  pointer-events: none;
  object-fit: cover;
`;

export const FlightWrapper = styled.article`
  position: relative;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 729px) {
    flex-direction: column;
  }
  z-index: 0;
`;

export const BiImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  filter: blur(5px);
  opacity: 0.7;

  pointer-events: none;
  object-fit: cover;
  z-index: 2;
`;

export const DescWrapper = styled.div`
  & > h1 {
    font-size: 5rem;
    margin: 0;
    color: #fff;
  }
  & > p {
    margin: 0;
    color: #fff;
  }

  & > p.powered {
    width: 375px;
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;

    opacity: 0.6;
  }
  z-index: 10;
`;

export const GithubLoginButton = styled.button`
  width: 270px;
  height: 50px;

  margin-left: 100px;
  color: #fff;

  @media (max-width: 729px) {
    margin-top: 50px;
    margin-left: 0;
  }
  transform: translateY(10px);

  z-index: 10;

  border-radius: 0.75rem;
  border: 1px solid #30363d;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;

  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #1b1b1b;

    & > svg {
      fill: #1b1b1b;
    }
  }

  & > svg {
    margin-right: 5px;
    transition: all 0.2s ease;
    fill: #fff;
  }
`;

export const Powered = styled.p`
  width: 375px;
  text-align: center;
  position: absolute;
  bottom: 15px;
  font-weight: 700;
  color: #fff;

  opacity: 0.6;
`;
