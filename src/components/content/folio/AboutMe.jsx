import { StaticImage } from 'gatsby-plugin-image';
import JavascriptIcon from './svg/javascript.inline.svg';
import JavaIcon from './svg/java.inline.svg';
import PythonIcon from './svg/python.inline.svg';

import ReactIcon from './svg/react.inline.svg';
import ReduxIcon from './svg/redux.inline.svg';
import VueIcon from './svg/vuedotjs.inline.svg';
import ESLintIcon from './svg/eslint.inline.svg';
import PrettierIcon from './svg/prettier.inline.svg';

import Spring from './svg/spring.inline.svg';
import SwaggerIcon from './svg/swagger.inline.svg';

import MysqlIcon from './svg/mysql.inline.svg';
import InfluxDBIcon from './svg/influxdb.inline.svg';

import FigmaIcon from './svg/figma.inline.svg';
import JiraIcon from './svg/jira.inline.svg';
import MatterMostIcon from './svg/mattermost.inline.svg';
import SlackIcon from './svg/slack.inline.svg';
import NotionIcon from './svg/notion.inline.svg';

import LinuxIcon from './svg/linux.inline.svg';
import DockerIcon from './svg/docker.inline.svg';
import UbuntuIcon from './svg/ubuntu.inline.svg';

import GitIcon from './svg/git.inline.svg';
import GithubIcon from './svg/github.inline.svg';
import GitlabIcon from './svg/gitlab.inline.svg';

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
            <s.ProfileText>
              안녕하세요. 개발자 안세혁입니다.
              <br />
              <br />제 직업은 사용자에게 편리함을 제공하는 웹 서비스를 만드는 것이며, 그 과정에 디자인과 상호작용을 섞어 마법을 부리는 것을
              좋아합니다.
              <br />
              <br />
              가장 영향을 많이 받은 디자이너는 디터 람스입니다. 사용자의 편의를 위해 불필요한 것을 제거하는 것, 디터 람스의 깨달음을 마음에 새기고
              언제나 유용하며 세련된 프론트엔드 개발을 하려 노력하고 있습니다.
              <br />
              <br />
              최근 여가 시간에는 키보드를 만들거나 이미 봤던 영화들을 보며 쉬고 있습니다.
            </s.ProfileText>
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
        <s.Skills>
          <s.SkillTitle>
            프론트엔드 스택
            <JavascriptIcon />
            <ReactIcon />
            <ReduxIcon />
            <VueIcon />
            <FigmaIcon />
          </s.SkillTitle>
          <s.SkillItem>
            JavaScript, React를 주로 활용하여 프론트 엔드 개발을 하고 있습니다.
            <br />
            4번의 프론트엔드 참여 프로젝트 중 최근 2번은 React를 사용하였고 바로 개발이 가능합니다.
            <s.SkillLineDiv />
            Vue2, Vue3 Composition API 를 사용하여 개발한 경험이 있습니다.
            <br />
            Vue3를 통해 로직 재사용성을 높이는 법을 배운 후 현제는 React를 주로 사용하고 있습니다.
            <s.SkillLineDiv />
            Figma를 활용하여 프론트엔드 디자인을 직접 하기도 합니다.
            <br />
            이전의 4번의 프로젝트에서 모두 Figma를 사용하였으며 디자인을 전담하였습니다.
          </s.SkillItem>
          <s.SkillTitle>
            백엔드 스택
            <PythonIcon />
            <JavaIcon />
            <Spring />
            <SwaggerIcon />
            <MysqlIcon />
            <InfluxDBIcon />
          </s.SkillTitle>
          <s.SkillItem>
            프론트엔드 개발을 시작하기 전에 백엔드 개발을 하였습니다.
            <br />
            자바를 주로 사용하여 개발하였으며, 스프링 프레임워크로 서버를 구축하였습니다.
            <s.SkillLineDiv />그 이전 학부연구생 시절에는 파이썬을 활용하여 데이터를 전처리하거나 연구실의 데이터베이스 관련 과제를 진행 하였습니다.
          </s.SkillItem>
          <s.SkillTitle>
            코드 관리
            <GitIcon />
            <GithubIcon />
            <GitlabIcon />
            <ESLintIcon />
            <PrettierIcon />
          </s.SkillTitle>
          <s.SkillItem>
            1작성 1커밋을 지향하며, Git을 사용하여 코드를 관리합니다. <br />
            Github, Gitlab 두 플랫폼을 활용하여 개발을 한 경험이 있으며, 현재 Github에서 개인 코드를 관리 중 입니다.
            <s.SkillLineDiv />
            프론트엔드 개발을 하면서 코드의 일관성을 유지하기 위해 ESLint와 Prettier를 사용하고 있습니다.
            <br />
            XO 규칙을 커스텀하여 사용 중 이며 Prettier를 ESLint에 통합하여 사용하고 있습니다.
          </s.SkillItem>
          <s.SkillTitle>
            서버
            <LinuxIcon />
            <UbuntuIcon />
            <DockerIcon />
          </s.SkillTitle>
          <s.SkillItem>
            학부 재학 시절에는 연구실의 서버와 개인 랩탑을 우분투로 운영하였습니다.
            <br />
            c언어를 활용한 간단한 시스템 프로그래밍이 가능하며, 리눅스 환경에서 개발을 할 때에도 불편함이 없습니다.
          </s.SkillItem>
          <s.SkillTitle>
            협업
            <JiraIcon />
            <SlackIcon />
            <MatterMostIcon />
            <NotionIcon />
          </s.SkillTitle>
          <s.SkillItem>
            협업에서 소통을 가장 중요시 여기며, 문서화는 협업 소통수단의 정수라고 생각합니다.
            <s.SkillLineDiv />
            큰 프로젝트를 진행할 때에는 Jira로 이슈를 관리하였고 팀원들 간의 대화는 Slack 또는 MatterMost,
            <br />
            간단한 소통용 문서는 Notion을 활용하는 것을 좋아합니다.
          </s.SkillItem>
        </s.Skills>
      </s.ProfileWrapper>
    </Wrapper>
  );
};

export default AboutMe;
