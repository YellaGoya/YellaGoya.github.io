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
`;

export const HistoryItem = styled.li`
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

  border-radius: 2px;

  transition: background-color 0.4s ease;
  background-color: var(--font);
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
  font-size: 1.2rem;
  font-weight: 300;
  direction: ltr;

  color: var(--font);
  transition: color 0.4s ease;
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
  margin-top: 100px;
  padding: 0 10px;
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
  & > h4 {
    position: absolute;
    top: 50%;
    left: 45px;
    width: 88px;
    transform: translateY(-50%);

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

    background-color: var(--bg-blur-22);

    & > svg {
      fill: #ffab41;
    }
  }

  &.suggest {
    width: 150px;
    & > h4 {
      opacity: 1;
    }

    background-color: var(--bg-blur-22);

    & > svg {
      fill: #ffab41;
    }
  }

  & > svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    fill: var(--font);
  }

  overflow: hidden;

  transition:
    background-color 0.2s ease,
    width 0.5s ease;
  cursor: pointer;
`;
