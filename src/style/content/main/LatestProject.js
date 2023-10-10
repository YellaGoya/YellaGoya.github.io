import styled from "styled-components";

export const ProjectWrapper = styled.section`
  position: relative;

  padding: 30px 20px 30px 20px;

  border-top: 2px solid #858585;
  border-bottom: 2px solid #858585;

  //간격 12px
  gap: 30px;
`;

export const Title = styled.h1`
  position: relative;
  display: block;
  margin: 20px auto;

  text-align: center;

  font-size: calc(2rem + 4vw);
  color: #fff;
`;

export const Window = styled.article`
  position: relative;
  width: fit-content;

  margin: 0 auto;

  margin-bottom: 150px;

  padding-top: 42px;

  border: 2px solid #fff;
  border-radius: 12px;
  background-color: #383838;

  & > p {
    position: absolute;
    top: 9px;
    left: 12px;

    margin: 0;

    color: #fff;
  }

  & > div {
    position: absolute;

    width: 13px;
    height: 13px;

    border-radius: 7px;

    top: 14px;
  }

  & > :nth-child(2) {
    right: 14px;

    background-color: #fff;
  }
  & > :nth-child(3) {
    right: 32px;

    background-color: #6a6a6a;
  }
  & > :nth-child(4) {
    right: 50px;

    background-color: #858585;
  }
`;

export const ProjectImage = styled.img`
  display: block;
  margin: 0 auto;

  width: 100%;
  max-width: 920px;

  border-radius: 0 0 8px 8px;
`;

export const Introduce = styled.article`
  //grid 2열로
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  grid-template-rows: auto;
`;

export const IntroduceLinkList = styled.ul`
  display: inline-block;
  width: 300px;

  list-style: none;
`;

export const IntroduceLink = styled.li`
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.65;
`;

export const IntroduceDescription = styled.p`
  margin: 16px 0;
  max-width: 620px;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.65;
`;
