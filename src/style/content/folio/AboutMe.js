import styled from 'styled-components';

export const WordHighlight = styled.h1`
  margin-bottom: 20px;

  color: #fff;
  font-size: 4rem;
  line-height: 1.05;
  text-align: center;
`;

export const HighLightLine = styled.div`
  height: 35vh;
  width: 10px;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(27, 27, 27, 1) 100%);
`;

export const ProfileWrapper = styled.section``;

export const PhotoGraph = styled.div`
  position: relative;
  width: 1300px;
  margin-top: 50px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;

  & > div > picture > img {
    filter: brightness(0.8) contrast(0.9);
  }
`;

export const PhotoDesc = styled.h2`
  position: absolute;
  top: 200px;

  font-size: 2rem;
  color: #fff;

  text-align: center;
  text-shadow: 0 0 13px rgba(0, 0, 0, 0.5);

  transition: all 0.2s ease;

  @media (max-width: 750px) {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Specification = styled.article`
  max-width: 1125px;
  margin: 0 auto;
  @media (min-width: 751px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    direction: rtl;
  }
`;

export const History = styled.ul`
  list-style: none;
  padding: 0 10px;
  margin: 0;

  direction: ltr;
`;

export const HistoryTitle = styled.li`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 18px;
`;

export const HistoryItem = styled.li`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;

  opacity: 0.9;

  display: flex;
  align-items: center;
`;

export const HistoryDiv = styled.div`
  display: inline-block;
  height: 15px;
  width: 5px;
  margin-right: 5px;
  transform: translateY(-1px);

  border-radius: 2px;

  background-color: #fff;
`;

export const ProfileGreeting = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProfileDesc = styled.span`
  display: block;
  padding: 0 10px;
  margin: 0;
  margin-top: 18px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  direction: ltr;

  @media (max-width: 750px) {
    margin-bottom: 100px;
  }
`;

export const ProfileText = styled.p`
  margin: 0;
  opacity: 0.9;
`;

export const Skills = styled.ul`
  max-width: 1105px;
  margin: 0 auto;
  list-style: none;
  padding: 0 10px;
  margin-top: 100px;

  direction: ltr;
`;

export const SkillTitle = styled.li`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;

  & > svg {
    &:first-child {
      margin-left: 16px;
    }
    width: 24px;
    height: 24px;

    transform: translateY(-1px);
    border-radius: 0.25rem;
    margin-left: 6px;

    fill: #fff;
  }
`;

export const SkillItem = styled.li`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;

  opacity: 0.9;

  display: flex;
  align-items: center;
  // 한줄에 한 요소만 가능
  flex-wrap: wrap;

  & > svg {
    width: 24px;
    height: 24px;

    border-radius: 0.25rem;
    margin-right: 6px;
    margin-bottom: 15px;

    fill: #fff;
  }
`;

export const SkillDiv = styled.div`
  display: inline-block;
  height: 300px;
  width: 5px;
  margin-right: 5px;
  transform: translateY(-1px);

  border-radius: 2px;

  background-color: #fff;
`;

export const SkillLineDiv = styled.span`
  display: inline;
  width: 100%;
  height: 16px;
`;
