import styled from "styled-components";

export const ContentTitle = styled.h1`
  position: relative;

  padding: 30px 20px 30px 20px;
  margin: 0;

  color: #d5383f;
  font-size: 4rem;
  line-height: 0.65;

  border-top: 2px solid #858585;
  border-bottom: 2px solid #858585;
`;

export const ProjectWrapper = styled.section`
  position: relative;

  padding: 30px 20px 30px 20px;

  border-bottom: 2px solid #858585;

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

export const ProjectImage = styled.article`
  max-width: 920px;
  margin: 0 auto;
  margin-bottom: 75px;

  img {
    border-radius: 12px;
  }
`;

export const Introduce = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  grid-template-rows: auto;

  & > ul,
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const IntroduceLinkList = styled.ul`
  display: inline-block;
  width: 300px;
  padding-left: 0px;

  list-style: none;
`;

export const IntroduceLink = styled.li`
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.65;

  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  & > svg {
    transform: translateY(-1px);
  }
`;

export const IntroduceDescription = styled.p`
  margin: 16px 0;
  max-width: 620px;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.65;
`;
