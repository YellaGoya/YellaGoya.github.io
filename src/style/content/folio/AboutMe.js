import styled from 'styled-components';

export const WordHighlight = styled.h1`
  margin-bottom: 20px;

  transition: color 0.4s ease;
  color: var(--font);
  font-size: 4rem;
  line-height: 1.05;
  text-align: center;
`;

export const HighLightLine = styled.div`
  height: 30vh;
  width: 10px;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(27, 27, 27, 1) 100%);
`;

export const ProfileWrapper = styled.section``;

export const PhotoGraph = styled.div`
  position: relative;
  max-width: 1125px;
  margin: 0 auto;
  margin-top: 75px;

  display: flex;
  justify-content: center;

  .gatsby-image-wrapper [data-main-image] {
    transition: all 0.2s ease;
  }

  & > div > picture > img {
    filter: brightness(0.8) contrast(0.9);

    @media (max-width: 750px) {
      filter: brightness(1) contrast(1);
    }
  }
`;

export const PhotoDesc = styled.h2`
  position: absolute;
  top: 200px;

  font-size: 2rem;

  text-align: center;
  text-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
  color: #fff;

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

  color: var(--font);
  transition: color 0.4s ease;
  direction: ltr;
`;

export const HistoryTitle = styled.li`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 18px;
  margin-bottom: 5px;
`;

export const HistoryItem = styled.li`
  font-size: 1.2rem;
  font-weight: 400;

  opacity: var(--font-opacity);
  height: 29px;

  display: flex;
  align-items: center;

  & > p {
    margin: 0;
    height: 17px;

    line-height: 1;

    display: flex;
    align-items: center;
  }
`;

export const HistoryDiv = styled.div`
  display: inline-block;
  height: 17px;
  width: 5px;
  margin-right: 6px;

  border-radius: 2px;

  tran

  transition: background-color 0.4s ease;
  background-color: var(--font);
`;

export const ProfileTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ProfileDesc = styled.span`
  display: block;
  padding: 0 10px;
  margin: 0;
  margin-top: 18px;
  font-size: 1.2rem;
  font-weight: 400;
  direction: ltr;

  color: var(--font);
  transition: color 0.4s ease;
  @media (max-width: 750px) {
    margin-bottom: 100px;
  }
`;

export const ProfileText = styled.span`
  margin: 0;
  opacity: var(--font-opacity);

  & > p {
    margin: 0;
    height: 16px;
  }
`;

export const Skills = styled.ul`
  max-width: 1105px;
  margin: 0 auto;
  list-style: none;
  padding: 0 10px;
  margin-top: 150px;

  transition: color 0.4s ease;
  color: var(--font);
  direction: ltr;
`;

export const SkillTitle = styled.li`
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

    border-radius: 0.25rem;
    margin-left: 6px;

    fill: var(--font);
    transition: fill 0.4s ease;
  }
`;

export const SkillItem = styled.li`
  font-size: 1.2rem;
  font-weight: 400;
  opacity: var(--font-opacity);

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  

  & > svg {
    width: 24px;
    height: 24px;

    border-radius: 0.25rem;
    margin-right: 6px;
    margin-bottom: 15px;

    fill: var(--font)--font);
  }
`;

export const SkillItemDesc = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SkillLineDiv = styled.span`
  display: inline;
  width: 100%;
  height: 16px;
`;

export const ProjectTitle = styled.h3`
  margin-top: 150px;
  padding: 0 10px;

  color: var(--font);
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ModeButtonWrapper = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -57px;
  right: 0px;
  border-radius: 0.5rem;

  border: none;
  background-color: transparent;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    fill: var(--font);
  }

  & > h4 {
    position: absolute;
    top: 50%;
    left: 45px;
    width: 6rem;
    transform: translateY(-50%);

    //글씨가 아래로 내려가지 않고 한줄 유지
    text-align: left;

    margin: 0;

    font-size: 1.2rem;
    font-weight: 600;
    color: var(--font);

    opacity: 0;
    transition:
      color 0.2s ease,
      opacity 0.4s ease;
  }

  &:hover {
    width: 150px;
    & > h4 {
      opacity: 1;
    }

    background-color: var(--bg-button-hover);

    & > svg {
      fill: #ffab41;
    }
  }

  &.suggest {
    width: 150px;
    & > h4 {
      opacity: 1;
    }

    background-color: var(--bg-button-hover);

    & > svg {
      fill: #ffab41;
    }
  }

  overflow: hidden;

  transition:
    background-color 0.2s ease,
    width 0.5s ease;
  cursor: pointer;
`;

export const ProjectWrapper = styled.section`
  position: relative;
  max-width: 1125px;
  // 높이는 width의 16:9 비율로 맞춤

  margin: 0 auto;
`;

export const ProjectName = styled.span`
  height: 29px;
  padding: 0 10px;

  font-size: 1.2rem;
  font-weight: 500;

  display: flex;
  align-items: center;

  & > p {
    margin: 0;
    height: 17px;

    line-height: 1;

    display: flex;
    align-items: center;
  }
`;

export const ProjectDiv = styled.div`
  display: inline-block;
  height: 17px;
  width: 5px;
  margin-right: 6px;

  border-radius: 2px;

  transition: background-color 0.4s ease;
  background-color: var(--font);
`;

export const ProjectWindow = styled.div`
  position: relative;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;

  @media (max-width: 729px) {
    max-width: 375px;
    aspect-ratio: 9 / 16;
  }

  overflow: hidden;
`;
