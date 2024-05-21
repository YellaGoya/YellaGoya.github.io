import styled from 'styled-components';
import ga1 from 'assets/ga1.woff2';

export const WordHighlight = styled.h1`
  margin-bottom: 20px;

  transition: color 0.4s ease;
  color: var(--font);
  font-size: 4rem;
  line-height: 1.05;
  text-align: center;

  user-select: none;
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
  max-width: 975px;
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

  user-select: none;
  transition: all 0.2s ease;

  @media (max-width: 750px) {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Specification = styled.article`
  max-width: 975px;
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
  font-variation-settings: 'wght' var(--wght-normal);

  opacity: var(--font-opacity);
  height: 29px;

  display: flex;
  align-items: center;

  & > p {
    margin: 0;
    height: 29px;

    line-height: 29px;

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
  font-variation-settings: 'wght' var(--wght-normal);
  word-break: keep-all;

  & > p {
    margin: 0;
    height: 16px;
  }
`;

export const Skills = styled.ul`
  max-width: 955px;
  margin: 0 auto;
  list-style: none;
  padding: 0 10px;
  margin-top: 170px;

  transition: color 0.4s ease;
  color: var(--font);
  direction: ltr;
`;

export const SkillTitle = styled.span`
  /* position: relative; */

  font-size: 1.5rem;
  font-weight: 600;

  display: flex;
  align-items: center;

  flex-wrap: wrap;

  transform-origin: left;
  transform: translateX(-10px);
  padding: 4px 10px;
  border-radius: 0.5rem;
  transition:
    transform 0.4s ease,
    background-color 0.4s ease;

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

export const SvgContainer = styled.span`
  display: inline-flex;

  word-break: break-all;
`;

export const SvgWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  display: inline-flex;
  align-items: center;

  &:first-child {
    margin-left: 16px;
  }

  border-radius: 0.25rem;
  margin-left: 6px;

  &:hover {
    & > span {
      visibility: visible;
      opacity: 1;
    }
  }

  & > div {
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 18px;
    height: 18px;

    border-radius: 0.2rem;

    background-color: #000;
    z-index: 1;
  }

  & > svg {
    width: 24px;
    height: 24px;

    border-radius: 0.25rem;

    fill: var(--font);
    transition: fill 0.4s ease;
    z-index: 2;
  }

  fill: var(--font);
  transition: fill 0.4s ease;
`;

export const SvgTooltip = styled.span`
  position: absolute;
  top: -1.55rem;
  left: calc(50% - 1px);

  padding: 0 0.3rem;

  white-space: nowrap;

  visibility: hidden;
  opacity: 0;

  @media (max-width: 609px) {
    background-color: var(--bg-half);
    backdrop-filter: blur(2px);
    border-radius: 0.5rem;
  }

  font-size: 1rem;
  transform: translateX(-50%);

  transition:
    visibility 0.1s ease,
    opacity 0.1s ease;
`;

export const SkillItem = styled.li`
  font-size: 1.2rem;
  font-weight: 400;

  margin-top: 50px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > svg {
    width: 24px;
    height: 24px;

    border-radius: 0.25rem;
    margin-right: 6px;
    margin-bottom: 15px;

    fill: var(--font);
  }

  /* @media (max-width: 750px) {
    filter: brightness(1) contrast(1);
  } */

  @media (min-width: 610px) {
    /* &:hover {
      & > span:first-child {
        transform: scale(1.4) translateY(-8px) translateX(-10px);

        background-color: var(--font10);
      }
    } */
    & > span:first-child {
      transform: ${({ $focus }) => ($focus ? 'scale(1.2) translateY(-8px) translateX(-10px)' : 'scale(1) translateX(-10px);')};
      background-color: ${({ $focus }) => ($focus ? 'var(--font10)' : 'transparent')};
    }
  }
`;

export const SkillItemDesc = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SkillItemDescHighlight = styled.span`
  font-variation-settings: 'wght' var(--wght-highlight);
  opacity: 0.95;
`;

export const SkillItemDescNormal = styled.span`
  font-variation-settings: 'wght' var(--wght-normal);
  opacity: 0.85;
`;

export const SkillLineDiv = styled.span`
  display: inline;
  width: 100%;
  height: 16px;
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

    background-color: var(--font10);

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

export const ProjectTitle = styled.h3`
  margin-top: 170px;
  padding: 0 10px;

  color: var(--font);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ProjectWrapper = styled.section`
  position: relative;
  max-width: 975px;
  // 높이는 width의 16:9 비율로 맞춤

  margin: 0 auto;
`;

export const Project = styled.article`
  & > div {
    padding: ${({ $toggle }) => ($toggle ? '50px 0' : '5px 0')};
  }

  &:nth-child(2) > div {
    padding: ${({ $toggle }) => ($toggle ? '5px 0 50px 0' : '5px 0')};
  }
`;

export const ProjectInterlude = styled.div`
  position: relative;
  border-radius: 0.5rem;

  min-height: 128px;

  transition:
    background-color 0.1s ease,
    padding 0.8s ease;
`;

export const ProjectIntro = styled.div`
  position: relative;
  height: 128px;
  padding: 10px;

  transition: background-color 0.1s ease;

  @media (max-width: 500px) {
    height: auto;
  }

  border-radius: 0.5rem;

  cursor: pointer;
  &:hover {
    background-color: var(--font10);
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 128px;
  height: 128px;
  border-radius: 0.5rem;
  overflow: hidden;

  user-select: none;

  box-shadow:
    rgba(0, 0, 0, 0.06) 0px 2px 3px,
    rgba(0, 0, 0, 0.18) 0px 1px 6px;

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2;
  }

  & > div {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }
`;

export const ProjectMoreWrapper = styled.div`
  height: ${({ $toggle, height }) => ($toggle ? `${height + 15}px` : '0')};
  transition: height 0.8s ease;
  overflow: hidden;
`;
export const ProjectMore = styled.div`
  height: auto;
  transition: max-height 2s linear;
  padding: 0 10px;
`;
export const ProjectDate = styled.h2`
  font-size: 1.2rem;
  padding: 0 10px;
  margin: 0;
  color: var(--font);
`;

export const ProjectInfo = styled.div`
  @media (min-width: 501px) {
    position: absolute;
    top: 10px;
    float: right;
    left: 148px;
    height: 128px;
    width: calc(100% - 173px);

    padding-left: 15px;
  }

  @media (max-width: 500px) {
    position: relative;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectName = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;

  display: flex;
  align-items: center;
  /* margin-top: -16px; */
`;

export const GithubLink = styled.a`
  position: absolute;
  right: 5px;
  margin-left: 30px;
  font-size: 1.2rem;
  font-weight: var(--wght-normal);
  color: var(--fontcc);

  display: flex;
  align-items: center;
  transition: color 0.1s ease;

  & > svg {
    margin-left: 5px;
    transform: translateY(-1px);
    fill: var(--fontcc);
    transition: fill 0.1s ease;
  }

  &:hover {
    text-decoration: underline;
    color: var(--font-custom);
    & > svg {
      fill: var(--font-custom);
    }
  }
`;

export const ProjectDesc = styled.span`
  font-size: 1.2rem;
  font-weight: var(--wght-normal);
`;

export const ProjectDetail = styled.span`
  margin-top: 10px;
  display: block;
  font-size: 1rem;
  font-weight: var(--wght-normal);
  opacity: var(--font-opacity);
  margin-bottom: 50px;
`;

export const ProjectCategory = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;

  transform: translateX(-10px);
  padding: 0px 10px;
  margin-bottom: 3px;

  border-radius: 0.5rem;
  user-select: none;

  transition: background-color 0.1s ease;

  display: flex;
  align-items: center;

  &.highlight {
    cursor: pointer;
    &:hover {
      background-color: var(--font10);
    }
  }

  & > svg {
    margin-left: -4px;
    width: 40px;
    height: 40px;

    transition:
      transform 0.25s ease,
      fill 0.25s ease;

    transform: ${({ $toggle }) => ($toggle ? 'rotate(90deg)' : 'rotate(270deg)')};
    fill: ${({ $toggle }) => ($toggle ? 'var(--font-custom)' : 'var(--fontcc)')};
  }
`;

export const ProjectHighlight = styled.ul`
  height: ${({ $toggle }) => ($toggle ? 'auto' : '0')};
  padding: 0;
  list-style: none;
  margin: 0;
  margin-bottom: ${({ $toggle }) => ($toggle ? '50px' : '0')};
  overflow: hidden;
`;
export const ProjectHighlightItem = styled.li`
  font-size: 1.2rem;
  font-weight: var(--wght-normal);
  padding: 9px 0;

  border-bottom: 1px solid var(--font30);

  opacity: var(--font-opacity);

  &:first-child {
    padding-top: 0;
  }
`;

export const ProjectHightlightTitle = styled.span`
  font-weight: var(--wght-highlight);
`;

export const ProjectMe = styled.div``;

export const ProjectPart = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  margin-bottom: 50px;
`;
export const ProjectPartItem = styled.li`
  font-size: 1.2rem;
  padding: 9px 0;

  border-bottom: 1px solid var(--font30);

  &:first-child {
    padding-top: 0;
  }
`;

export const ProjectPartTitle = styled.span`
  font-weight: 600;
  color: var(--font-custom);
`;

export const ProjectStack = styled.div`
  opacity: var(--font-opacity);
  font-weight: var(--wght-normal);
  margin-bottom: 50px;
`;

export const ProjectInsight = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.85;
  font-weight: var(--wght-normal);

  & > span {
    color: var(--font-custom);
    font-weight: var(--wght-highlight);
  }
`;

export const MoreButton = styled.button`
  width: 100%;
  height: 40px;

  background-color: transparent;
  border: none;
  margin-top: 50px;

  display: ${({ $toggle }) => ($toggle ? 'block' : 'none')};

  cursor: pointer;

  & > svg {
    width: 30px;
    height: 30px;

    border-radius: 0.5rem;
    fill: var(--font);

    transition:
      background-color 0.1s ease,
      fill 0.1s ease;

    transform: rotate(180deg);
    /* &:hover {
      background-color: var(--font);
      fill: var(--bg);
    } */
  }

  &:hover {
    & > svg {
      background-color: var(--font);
      fill: var(--bg);
    }
  }
`;

export const ProjectWindow = styled.div`
  position: relative;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;

  user-select: none;

  @media (max-width: 729px) {
    max-width: 375px;
    aspect-ratio: 10 /16;
  }

  overflow: hidden;
`;

export const Test = styled.div`
  background-color: #44475a;

  width: 695px;
  height: 360px;
  color: #bd93f9;
  font-size: 7rem;
  font-weight: 400;
  font-family: monospace;
  padding-left: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    margin-left: -8px;
    margin-right: 10px;
    width: 100px;
    height: 100px;
    fill: #000;
  }
`;

export const ProjectDivLine = styled.div`
  margin: 0 auto;
  width: calc(100% - 20px);
  height: 1px;
  background-color: var(--font30);
`;

export const ProjectImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;

  & > div {
    border-radius: 0.5rem;

    box-shadow:
      rgba(0, 0, 0, 0.06) 0px 2px 3px,
      rgba(0, 0, 0, 0.18) 0px 1px 6px;

    cursor: pointer;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;

    box-shadow:
      rgba(0, 0, 0, 0.06) 0px 2px 3px,
      rgba(0, 0, 0, 0.18) 0px 1px 6px;

    cursor: pointer;
  }

  // 상하 gap 20px
  gap: 12px;
  grid-row-gap: 24px;

  margin-bottom: 50px;
`;

export const ImageViewer = styled.div`
  position: fixed;
  left: 0;
  top: 65px;
  width: 100vw;
  height: calc(100vh - 65px);

  visibility: ${({ $toggle }) => ($toggle ? 'visible' : 'hidden')};
  opacity: ${({ $toggle }) => ($toggle ? '1' : '0')};

  transition:
    visibility 0.1s ease,
    opacity 0.1s ease;

  overflow-y: auto;

  background-color: var(--bg);
  cursor: pointer;
`;

export const ImageViewerWrapper = styled.div`
  padding: 50px 30px;
  max-width: 1035px;
  margin: 0 auto;

  & > img {
    margin-bottom: 50px;

    border-radius: 0.5rem;

    width: 100%;
    height: 100%;
    object-fit: cover;

    box-shadow:
      rgba(0, 0, 0, 0.06) 0px 2px 3px,
      rgba(0, 0, 0, 0.18) 0px 1px 6px;
  }

  & > div {
    margin-bottom: 50px;

    border-radius: 0.5rem;

    box-shadow:
      rgba(0, 0, 0, 0.06) 0px 2px 3px,
      rgba(0, 0, 0, 0.18) 0px 1px 6px;
  }
`;

export const ToWrapper = styled.section`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  & > button,
  a {
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;

    font-size: 1.2rem;
    padding: 12px 15px 12px 12px;
    border-radius: 0.5rem;

    user-select: none;
    text-decoration: none;

    line-height: 1;

    cursor: pointer;

    transition: background-color 0.1s ease;

    &:hover {
      background-color: var(--bg-button-hover);
    }

    & > svg {
      width: 22px;
      height: 22px;
      margin-right: 3px;
    }
  }
`;

export const ToGithubLink = styled.a``;

export const ToTopButton = styled.button`
  margin-right: 30px;
`;

export const TopLocation = styled.div`
  position: absolute;
  top: -15px;
`;

export const CloneContainer = styled.div`
  @font-face {
    font-family: 'ga1';
    src: url(${ga1}) format('woff2');
    font-display: block;
  }
  position: relative;

  padding: 15px;

  border-radius: 1.4rem;
  background-color: #fefcff;

  font-family: 'ga1';

  box-shadow:
    rgba(0, 0, 0, 0.06) 0px 2px 3px,
    rgba(0, 0, 0, 0.18) 0px 1px 6px;

  margin-bottom: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: 1.4rem;
    z-index: 0;
    background: url('https://www.transparenttextures.com/patterns/cardboard-flat.png');
    opacity: 0.2;
  }

  &:hover {
    &::after {
      opacity: 0.7;
    }
  }

  &::after {
    content: 'App Marka 이동하기';
    //텍스트를 중앙으로
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    border-radius: 1.4rem;
    opacity: 0;
    transition: opacity 0.2s ease;

    color: #fff;
    font-size: 27px;
    font-family: 'Pretendard Variable';
    background-color: #000;

    cursor: pointer;
  }

  & form > input {
    position: relative;
    width: 100%;

    color: #202020;
    font-size: 27px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
    white-space: nowrap;

    opacity: 0.65;

    background-color: transparent;
    border: none;
    outline: none;
  }

  & form > textarea {
    font-family: 'Malgun Gothic';
    font-size: 18px;
    font-weight: 400px;

    line-height: 1.73;

    width: 100%;
    min-height: 200px;
    resize: none;
    background-color: transparent;
    border: none;
    outline: none;
  }

  & form > div {
    position: relative;
    max-width: 970px;
    width: 100%;
    height: 1px;

    /* background-color: #e0e0e0; */
    background-color: #aaa;
    opacity: 0.3;

    margin: 9px auto;
  }

  & section {
    display: flex;
    align-items: center;
  }

  & section > span {
    height: 23px;

    display: flex;
    align-items: center;

    font-size: 18px;
    font-weight: 700;

    opacity: 0.5;

    &:first-child {
      width: 100px;
    }

    &:not(:first-child) {
      width: 50px;
    }

    & > svg {
      margin-left: 2px;
      height: 22px;
      width: 22px;
    }

    &:nth-child(2) {
      //우측 끝으로 붙이기
      margin-left: auto;
      margin-right: 20px;

      svg:nth-child(1) {
        height: 31px;
        width: 31px;

        margin-right: 8px;
      }

      svg:nth-child(2) {
        height: 27px;
        width: 27px;
      }
    }
  }
`;
