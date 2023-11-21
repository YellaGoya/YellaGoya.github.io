import { StaticImage } from 'gatsby-plugin-image';

import { Wrapper } from 'style/content/folio/Folio';
import * as s from 'style/content/folio/AboutMe';
const AboutMe = () => {
  return (
    <Wrapper>
      <s.WordHighlight>
        청년
        <br />
        개발자,
        <br />
        맛난
        <br />
        프론트.
      </s.WordHighlight>
      <s.HighLightLine />
      <s.ProfileWrapper>
        <s.PhotoGraph>
          <StaticImage src="me.jpg" layout="fixed" alt="A description of the image" />
          <s.PhotoDesc>
            안녕하세요. <br />
            개발자 안세혁입니다.
          </s.PhotoDesc>
        </s.PhotoGraph>
        <s.Specification>
          <s.ProfileDesc>
            <s.ProfileGreeting>인사말</s.ProfileGreeting>
            안녕하세요. 개발자 안세혁입니다.
            <br />
            <br />제 직업은 사용자에게 편리함을 제공하는 웹 서비스를 만드는 것이며, 그 과정에 디자인과 상호작용을 섞어 마법을 부리는 것을 좋아합니다.
            <br />
            <br />
            가장 영향을 많이 받은 디자이너는 디터 람스입니다. 사용자의 편의를 위해 불필요한 것을 제거하는 것, 디터 람스의 깨달음을 마음에 새기고
            언제나 유용하며 세련된 프론트엔드 개발을 하려 노력하고 있습니다.
          </s.ProfileDesc>
          <s.History>
            <s.HistoryTitle>개발자 약력</s.HistoryTitle>
            <s.HistoryItem>
              <s.HistoryDiv />
              NPLAB 인공지능 연구실 학부연구생
            </s.HistoryItem>
            <s.HistoryItem>
              <s.HistoryDiv />
              금오공과대학교 컴퓨터공학과 졸업
            </s.HistoryItem>
            <s.HistoryItem>
              <s.HistoryDiv />
              삼성 SW 아카데미 수료
            </s.HistoryItem>
            <s.HistoryTitle>프로젝트 이력</s.HistoryTitle>
            <s.HistoryItem>
              <s.HistoryDiv />
              삼성 과제 RDBMS, 시계열 DB 성능 비교
            </s.HistoryItem>
            <s.HistoryItem>
              <s.HistoryDiv />
              기업 연계 프로젝트 감정 분석 스마트 라이트
            </s.HistoryItem>
            <s.HistoryItem>
              <s.HistoryDiv />
              실시간 화상 스터디 STVDY
            </s.HistoryItem>
            <s.HistoryItem>
              <s.HistoryDiv />
              뇌질환자 언어 재활 어플리케이션 내쉬다
            </s.HistoryItem>
            <s.HistoryItem>
              <s.HistoryDiv />
              학생용 협업 툴 dddev
            </s.HistoryItem>
          </s.History>
        </s.Specification>
      </s.ProfileWrapper>
    </Wrapper>
  );
};

export default AboutMe;
