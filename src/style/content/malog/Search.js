import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;

  color: white;
  background-color: #1b1b1b;

  margin-bottom: 120px;

  li {
    color: #fff;

    margin: 20px;

    cursor: pointer;

    & > h2,
    p {
      margin-top: 3px;
      margin-bottom: 3px;
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
