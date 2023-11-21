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

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Specification = styled.article`
  @media (min-width: 751px) {
    max-width: 1125px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    direction: rtl;
  }
  @media (max-width: 750px) {
    & > p {
      margin-bottom: 100px;
    }
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
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 18px;
`;

export const HistoryItem = styled.li`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;

  display: flex;
  align-items: center;
`;

export const HistoryDiv = styled.div`
  display: inline-block;
  height: 15px;
  width: 5px;
  margin-right: 5px;

  border-radius: 2px;

  background-color: #fff;
`;

export const ProfileGreeting = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ProfileDesc = styled.p`
  padding: 0 10px;
  margin: 0;
  margin-top: 18px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  direction: ltr;
`;
