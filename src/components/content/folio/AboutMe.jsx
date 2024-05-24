import { useEffect, useState, useContext, useRef } from 'react';
import { TopBarContext } from 'context/topbar.jsx';

import { StaticImage } from 'gatsby-plugin-image';
import JavascriptIcon from './svg/javascript.inline.svg';
import JavaIcon from './svg/java.inline.svg';
import PythonIcon from './svg/python.inline.svg';
import NodeDotJs from './svg/nodedotjs.inline.svg';

import ReactIcon from './svg/react.inline.svg';
import ReduxIcon from './svg/redux.inline.svg';
import VueIcon from './svg/vuedotjs.inline.svg';
import ESLintIcon from './svg/eslint.inline.svg';
import PrettierIcon from './svg/prettier.inline.svg';
import GerritIcon from './svg/gerrit.inline.svg';
import NextjsIcon from './svg/nextdotjs.inline.svg';
import GatsbyIcon from './svg/gatsby.inline.svg';
import StyledComponentsIcon from './svg/styledcomponents.inline.svg';
import RecoilIcon from './svg/recoil.inline.svg';

import SpringIcon from './svg/spring.inline.svg';
import SwaggerIcon from './svg/swagger.inline.svg';

import PostgreSQL from './svg/postgresql.inline.svg';
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
import RockyLinux from './svg/rockylinux.inline.svg';

import GitIcon from './svg/git.inline.svg';
import GithubIcon from './svg/github.inline.svg';
import GitlabIcon from './svg/gitlab.inline.svg';

import FlareIcon from '@mui/icons-material/Flare';

import nashda1 from './nashda/1.gif';
import nashda2 from './nashda/2.gif';
import nashda3 from './nashda/3.gif';
import nashda4 from './nashda/4.gif';
import nashda5 from './nashda/5.gif';

// import Project from 'components/content/folio/project/Project';
import { Wrapper } from 'style/content/folio/Folio';

import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import LowPriorityRoundedIcon from '@mui/icons-material/LowPriorityRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

import * as s from 'style/content/folio/AboutMe';
const AboutMe = () => {
  const [suggest, setSuggest] = useState(false);
  const { isFocus, setIsFocus, light, setLight } = useContext(TopBarContext);
  const [firstScroll, setFirstScroll] = useState(true);
  const focusRef = useRef(null);
  const buttonRef = useRef(null);
  const [focused, setFocused] = useState(0);

  const dddevMoreRef = useRef(null);
  const nashdaMoreRef = useRef(null);
  const stvdyMoreRef = useRef(null);
  const markaMoreRef = useRef(null);
  const polorsMoreRef = useRef(null);

  const [dddevHeight, setDddevHeight] = useState(0);
  const [nashdaHeight, setNashdaHeight] = useState(0);
  const [stvdyHeight, setStvdyHeight] = useState(0);
  const [markaHeight, setMarkaHeight] = useState(0);
  const [polorsHeight, setPolorsHeight] = useState(0);

  const [dddevToggle, setDddevToggle] = useState(false);
  const [nashdaToggle, setNashdaToggle] = useState(false);
  const [stvdyToggle, setStvdyToggle] = useState(false);
  const [markaToggle, setMarkaToggle] = useState(false);
  const [polorsToggle, setPolorsToggle] = useState(false);

  const [dddevHighlightToggle, setDddevHighlightToggle] = useState(false);
  const [nashdaHighlightToggle, setNashdaHighlightToggle] = useState(false);
  const [stvdyHighlightToggle, setStvdyHighlightToggle] = useState(false);
  const [markaHighlightToggle, setMarkaHighlightToggle] = useState(false);
  const [polorsHighlightToggle, setPolorsHighlightToggle] = useState(false);

  const [dddevViewToggle, setDddevViewToggle] = useState(false);
  const [nashdaViewToggle, setNashdaViewToggle] = useState(false);
  const [stvdyViewToggle, setStvdyViewToggle] = useState(false);

  const [markaGreeting, setMarkaGreeting] = useState('안녕하세요?');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // console.log('Element is in the viewport!');
        } else {
          setIsFocus(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (focusRef.current) observer.observe(focusRef.current);

    const handleScroll = () => {
      setFirstScroll(false);
      setSuggest(true);

      setTimeout(() => {
        setSuggest(false);
        window.removeEventListener('wheel', handleScroll);
      }, 5000);
    };

    if (firstScroll) window.addEventListener('wheel', handleScroll);

    const dddevObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDddevHeight(entry.contentRect.height);
      }
    });

    if (dddevMoreRef.current) {
      dddevObserver.observe(dddevMoreRef.current);
    }

    const nashdaObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setNashdaHeight(entry.contentRect.height);
      }
    });

    if (nashdaMoreRef.current) {
      nashdaObserver.observe(nashdaMoreRef.current);
    }

    const stvdyObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setStvdyHeight(entry.contentRect.height);
      }
    });

    if (stvdyMoreRef.current) {
      stvdyObserver.observe(stvdyMoreRef.current);
    }

    const markaObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMarkaHeight(entry.contentRect.height);
      }
    });

    if (markaMoreRef.current) {
      markaObserver.observe(markaMoreRef.current);
    }

    const polorsObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPolorsHeight(entry.contentRect.height);
      }
    });

    if (polorsMoreRef.current) {
      polorsObserver.observe(polorsMoreRef.current);
    }

    // markaGreeting 의 '새로운' 를 '새로운 앱 마카 다이어리 경험해보기. 클릭으로 이동.' 으로 타이핑 하는 것 처럼 한글자씩 추가되게

    let i = 0;
    const typing = () => {
      const speed = 120;
      if (i < txt.length) {
        setMarkaGreeting(txt[i]);
        i++;
        setTimeout(typing, speed + Math.random() * 120 - 60);
      } else {
        i = 0;
        setTimeout(() => {
          setMarkaGreeting('안녕하세요?');
          typing();
        }, speed + 1000);
      }
    };

    typing();

    return () => {
      if (dddevMoreRef.current) {
        dddevObserver.unobserve(dddevMoreRef.current);
      }

      if (nashdaMoreRef.current) {
        nashdaObserver.unobserve(nashdaMoreRef.current);
      }

      if (stvdyMoreRef.current) {
        stvdyObserver.unobserve(stvdyMoreRef.current);
      }

      if (markaMoreRef.current) {
        markaObserver.unobserve(markaMoreRef.current);
      }

      if (polorsMoreRef.current) {
        polorsObserver.unobserve(polorsMoreRef.current);
      }

      window.removeEventListener('wheel', handleScroll);
      if (focusRef.current) observer.unobserve(focusRef.current);
    };
  }, []);

  useEffect(() => {
    if (suggest) {
      document.getElementById('light-mode').classList.add('suggest');
    } else {
      document.getElementById('light-mode').classList.remove('suggest');
    }
  }, [suggest]);

  return (
    <>
      <Wrapper $isFocus={isFocus}>
        <s.WordHighlight>
          청년
          <br />
          개발자
          <br />
          외길
          <br />
          프론트
        </s.WordHighlight>
        <s.HighLightLine />
        <s.ProfileWrapper>
          <s.PhotoGraph>
            <StaticImage src="me.jpg" layout="fixed" alt="A description of the image" />
            <s.PhotoDesc>
              안녕하세요. <br />
              개발자 안세혁입니다.
            </s.PhotoDesc>
            <s.ModeButtonWrapper
              id="light-mode"
              onClick={() => {
                setLight(!light);
              }}
            >
              <s.TopLocation ref={buttonRef} />
              <LightbulbRoundedIcon />
              <h4>라이트 토글</h4>
            </s.ModeButtonWrapper>
          </s.PhotoGraph>
          <s.Specification>
            <s.ProfileDesc>
              <s.ProfileTitle>[ 인사말 ]</s.ProfileTitle>
              <s.ProfileText>
                안녕하세요. 개발자 안세혁입니다.
                <p />
                스스로 코드 앞에 당당하기 위해 더 읽기 좋은 코드, 효율적인 코드를 목표로 개발하고 있습니다.
                <p />
                [외길 프론트] 라는 슬로건은 개발자로서의 정체성입니다.
                <p />
                " 개발 경험 중 가장 즐거웠던 것은 무엇인가? "
                <br />
                라는 질문에 프론트엔드라 답하며, 그 이유는 사용자 경험과 디자인을 중요시하는 가치관을 가졌기 때문입니다.
                <p />
                사용자에게 더 나은 경험을 제공할 때 개발자로서 보람과 성취감을 느낍니다.
              </s.ProfileText>
            </s.ProfileDesc>
            <s.History>
              <s.HistoryTitle>[ 학업 ]</s.HistoryTitle>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>삼성 SW 아카데미 수료</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>금오공과대학교 컴퓨터공학과 졸업</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>NPLAB 인공지능 연구실 학부연구생</p>
              </s.HistoryItem>
              <s.HistoryTitle>[ 팀 프로젝트 이력 ]</s.HistoryTitle>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>학생용 협업 툴, dddev</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>뇌질환자 언어 재활 어플리케이션, 내쉬다</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>실시간 화상 스터디 플랫폼, STVDY</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>기업 연계 프로젝트 감정 분석 스마트 라이트</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>삼성 과제 RDBMS, 시계열 DB 성능 비교</p>
              </s.HistoryItem>
              <s.HistoryTitle>[ 안세혁 · 연락처 ]</s.HistoryTitle>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>he2kape@gmail.com</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>010 · 2991 · 1153</p>
              </s.HistoryItem>
            </s.History>
          </s.Specification>
          <s.ToWrapper>
            <s.ToGithubLink href="https://github.com/YellaGoya" target="_blank">
              <GitHubIcon />
              깃허브 프로필
            </s.ToGithubLink>
            <s.ToGithubLink href="https://ahnsehyeok.info/" target="_blank">
              <FlareIcon />
              개인 프로젝트
            </s.ToGithubLink>
          </s.ToWrapper>
          <s.ProjectWrapper>
            <s.ProjectTitle>[ 팀 프로젝트 상세 ]</s.ProjectTitle>
            <s.Project $toggle={dddevToggle}>
              <s.ProjectInterlude>
                <s.ProjectIntro
                  onClick={() => {
                    setDddevToggle(!dddevToggle);
                  }}
                >
                  <s.LogoWrapper>
                    <StaticImage src="logo/dddev2.png" />
                  </s.LogoWrapper>
                  <s.ProjectInfo>
                    <s.ProjectName>
                      dddev
                      <s.GithubLink
                        href="https://github.com/YellaGoya/dddev"
                        target="_blank"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        GitHub-dddev
                        <GitHubIcon />
                      </s.GithubLink>
                    </s.ProjectName>
                    <s.ProjectDesc>
                      학생 개발자들의 협업 툴, <br />
                      협업에 필요한 모든 것을 하나의 툴로 담아낸 프로젝트.
                    </s.ProjectDesc>
                  </s.ProjectInfo>
                </s.ProjectIntro>
                <s.ProjectMoreWrapper $toggle={dddevToggle} height={dddevHeight}>
                  <s.ProjectMore ref={dddevMoreRef}>
                    <s.ProjectDetail>
                      개발자가 프로젝트 진행에 최소 2~3개의 협업 툴을 필요로 하는 시대, 초보 개발자 들도 프로젝트에 바로 활용할 수 있는 올인원 협업 툴
                      개발을 목표로 하였다.
                    </s.ProjectDetail>
                    <s.ProjectImageGrid
                      onClick={() => {
                        setDddevViewToggle(true);
                      }}
                    >
                      <StaticImage src="dddev/1.jpg" />
                      <StaticImage src="dddev/2.jpg" />
                      <StaticImage src="dddev/3.jpg" />
                      <StaticImage src="dddev/4.jpg" />
                    </s.ProjectImageGrid>
                    <s.ProjectCategory
                      className="highlight"
                      $toggle={dddevHighlightToggle}
                      onClick={() => {
                        setDddevHighlightToggle(!dddevHighlightToggle);
                      }}
                    >
                      <s.HistoryDiv />
                      주요 기능
                      <ArrowLeftRoundedIcon />
                    </s.ProjectCategory>
                    <s.ProjectHighlight $toggle={dddevHighlightToggle}>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>문서 기반 : </s.ProjectHightlightTitle>모든 협업 문서는 트리 구조로 되어 부모와 자식이 존재하며
                        자식은 부모 속성에 의해 정렬되고 그 역할이 정의 된다. 사용자는 원하는 형태로 문서 카테고리 및 환경을 구성할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>실시간 협업 문서 작성 : </s.ProjectHightlightTitle>웹 소켓을 활용한 실시간 협업 기능을 통해 모든
                        사용자가 동시에 하나의 문서를 작성할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>서버 로그 분석 : </s.ProjectHightlightTitle>
                        서버에서 전송된 로그를 시계열 데이터로 저장, 엘라스틱 서치를 활용하여 사용자가 원하는 형태로 볼 수 있다. GPT를 활용하여 로그의
                        원인 및 해결방안을 솔루션으로 받아볼 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>실시간 알림 : </s.ProjectHightlightTitle>
                        Firestore와 GitHubAPI를 통해 사용자가 소속된 리포지터리의 이벤트 (커밋, 리퀘스트 등) 알림을 받아볼 수 있으며 특정 키워드를
                        구독할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>GitHub 연동 : </s.ProjectHightlightTitle>
                        GitHub 계정으로 로그인, GitHub 리포지터리의 정보를 연동시키며 이를 활용해 프로젝트 협업 공간을 생성한다.
                      </s.ProjectHighlightItem>
                    </s.ProjectHighlight>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      사용 기술 스택
                    </s.ProjectCategory>
                    <s.ProjectStack>
                      상태 관리 : Redux / 기능 구현 및 API 객체 구현 : Javascript, React / 실시간 문서 협업 : WebSocket, Quill / 포맷팅 : ESLint,
                      Prettier
                    </s.ProjectStack>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      기여
                    </s.ProjectCategory>
                    <s.ProjectPart>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>프로젝트 기획 : </s.ProjectPartTitle>
                        프로젝트의 컨셉부터 세부 기능에 이르기까지 모든 기능에 직접 기획 및 참여 하였습니다. 아이디어가 팀원들의 마음에 들어 본인의
                        기획이 원하는 모습으로 실제 구현되는 모습을 볼 수 있어 좋은 경험이 되었습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle> API 객체 관리 : </s.ProjectPartTitle>웹 JWT의 토큰 유효성 및 보안을 확보하기 위해 전체 API를 객체로
                        관리하였으며, 재사용성 및 활용성을 높임.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle> Redux 상태 관리 : </s.ProjectPartTitle>
                        리덕스를 활용하여 사용자, 그라운드, UI 상태관리.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle> UX/UI 및 컨셉 디자인, 스토리보드 제작 : </s.ProjectPartTitle>
                        GitHub을 레퍼런스로 Figma를 활용하여 어플리케이션 디자인 및 스토리보드 제작.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>대시보드 : </s.ProjectPartTitle>
                        번다운 차트, 이슈 평균 소비 시간 등의 프로젝트 분석 그래프와 최신 요청 등의 정보를 한눈에 확인할 수 있는 대시보드를 구현.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>페이지 구현 : </s.ProjectPartTitle>
                        프로젝트 내 전체 페이지 구현.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>실시간 문서 협업 : </s.ProjectPartTitle>웹 소켓 서버와 Quill 에디터를 활용하여 실시간 문서 협업 기능을
                        구현. 기존 웹 소켓 서버와 Quill에서 지원하지 않는 실시간 멤버 확인 기능, 사용자 영역 잠금 기능, 실시간 작성자 위치 태그, DB
                        연동 등의 기능을 추가 구현 하였습니다.
                      </s.ProjectPartItem>
                    </s.ProjectPart>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      회고
                    </s.ProjectCategory>
                    <s.ProjectInsight>
                      내쉬다 프로젝트에서 느낀 협업 환경의 불편함을 개선하고자 진행된 프로젝트입니다. /
                      <span>
                        &nbsp;개발자 친화적인 레이아웃 구성 및 디자인을 적용하기 위해 GitHub, Vercel 등을 레퍼런스로 삼았습니다. 기존 노션과 같은
                        협업툴의 학습 곡선이 높았던 것을 고려하여 직관적이고 간단한 기능들로 필요한 업무를 수행할 수 있도록 하였습니다.&nbsp;
                      </span>
                      / 처음으로 혼자 프론트엔드 개발을 모두 수행한 프로젝트로 백엔드 5인과의 협업 과정에 크고 작은 문제들이 있었지만 모든 과정을
                      문서화하여 이슈를 사전에 줄이고자 노력하였습니다.
                    </s.ProjectInsight>
                  </s.ProjectMore>
                </s.ProjectMoreWrapper>
                <s.MoreButton
                  $toggle={dddevToggle}
                  onClick={(event) => {
                    event.stopPropagation();
                    setDddevToggle(!dddevToggle);
                    setDddevHighlightToggle(false);
                  }}
                >
                  <ExpandMoreIcon />
                </s.MoreButton>
              </s.ProjectInterlude>
            </s.Project>
            <s.ProjectDivLine />
            <s.Project $toggle={nashdaToggle}>
              <s.ProjectInterlude>
                <s.ProjectIntro
                  onClick={() => {
                    setNashdaToggle(!nashdaToggle);
                  }}
                >
                  <s.LogoWrapper>
                    <StaticImage src="logo/nashda.png" />
                  </s.LogoWrapper>
                  <s.ProjectInfo>
                    <s.ProjectName>
                      내쉬다
                      <s.GithubLink
                        href="https://github.com/YellaGoya/NASHDA"
                        target="_blank"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        GitHub-nashda
                        <GitHubIcon />
                      </s.GithubLink>
                    </s.ProjectName>
                    <s.ProjectDesc>뇌질환 환자들을 위한 발음 재활 어플리케이션.</s.ProjectDesc>
                  </s.ProjectInfo>
                </s.ProjectIntro>

                <s.ProjectMoreWrapper $toggle={nashdaToggle} height={nashdaHeight}>
                  <s.ProjectMore ref={nashdaMoreRef}>
                    <s.ProjectDetail>
                      발음 및 대화에 어려움이 생기는 등, 후유증이 발생한 실제 뇌질환 환자의 열악한 재활 과정을 보고 더 좋은 재활 환경을 제공하기 위해
                      진행한 프로젝트이다.
                    </s.ProjectDetail>
                    <s.ProjectImageGrid
                      onClick={() => {
                        setNashdaViewToggle(true);
                      }}
                    >
                      <img src={nashda1} />
                      <img src={nashda2} />
                      <img src={nashda3} />
                      <img src={nashda4} />
                      <img src={nashda5} />
                    </s.ProjectImageGrid>
                    <s.ProjectCategory
                      className="highlight"
                      $toggle={nashdaHighlightToggle}
                      onClick={() => {
                        setNashdaHighlightToggle(!nashdaHighlightToggle);
                      }}
                    >
                      <s.HistoryDiv />
                      주요 기능
                      <ArrowLeftRoundedIcon />
                    </s.ProjectCategory>
                    <s.ProjectHighlight $toggle={nashdaHighlightToggle}>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>음성 인식 : </s.ProjectHightlightTitle>
                        직접 비교, 학습한 음성 인식 모델을 사용하여 사용자의 발음을 그대로 인식하여 발음 교정에 사용할 수 있게 하였다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>발음 연습 : </s.ProjectHightlightTitle>
                        단어, 단락, 단순절 및 난이도를 선택, 발음 연습을 진행할 수 있다. 올바른 발음과 사용자의 발음을 비교하여 확인할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>대화 연습 : </s.ProjectHightlightTitle>
                        GPT 모델을 사용하여 실제 상황처럼 대화가 가능하다. 상황에 맞지 않는 답변은 기록되며 복습이 가능하다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>드라마 플레이 : </s.ProjectHightlightTitle>
                        사진을 보고 빈칸의 단어를 맞춰 문장을 채워가는 게임으로 난이도 선택을 통해 플레이 가능하다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>주간 시험 : </s.ProjectHightlightTitle>위 3가지 연습 및 놀이를 통합하여 주간 테스트를 진행할 수
                        있으며 이를 통해 사용자의 발음 수준 및 재활 진행도를 파악할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>스피드 게임 : </s.ProjectHightlightTitle>
                        단어 하나와 4장의 사진을 본 후 단어에 맞는 사진을 빠르게 선택하는 게임.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>스트릭 : </s.ProjectHightlightTitle>
                        최근 연습 동향, 로그인 등을 스트릭을 통해 확인 및 동기부여, 조건이 달성되면 업적이 해금되어 스트릭을 꾸밀 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>통계 : </s.ProjectHightlightTitle>
                        4가지 정보를 확인할 수 있다. 사용자가 많이 틀린 발음 순 통계, 주간 시험의 분석 결과를 정답과 발음 복습을 통해 확인, 대화
                        연습의 부자연스러운 대화, 달성한 업적 등의 정보 확인이 가능하다.
                      </s.ProjectHighlightItem>
                    </s.ProjectHighlight>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      사용 기술 스택
                    </s.ProjectCategory>
                    <s.ProjectStack>
                      상태 관리 : Redux / 기능 구현 및 API 객체 구현 : Javascript, React / 포맷팅 : ESLint, Prettier / 차트 : Nivo
                    </s.ProjectStack>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      기여
                    </s.ProjectCategory>
                    <s.ProjectPart>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>프로젝트 기획 : </s.ProjectPartTitle>
                        프로젝트의 시작은 가족의 재활 과정 중 불편함을 바로 옆에서 지켜보고 느낀 작은 불편함이었습니다. 본인의 아이디어 이기에
                        책임감을 가지고 기획에 중심이 되어 프로젝트를 진행 하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>UX/UI 디자인 : </s.ProjectPartTitle>
                        애플과 네이버, 백준 등의 화이트 계열 웹 사이트들을 레퍼런스로 삼아 UX/UI 디자인을 하였으며 인지에 어려움이 있는 뇌질환자들에
                        적합한 어고노믹 디자인을 적용하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>통계 : </s.ProjectPartTitle>
                        Nivo 차트와 직접 작성한 그래프를 활용하여 사용자의 현재 수준을 파악 가능한 통계 페이지를 구현. 이 또한 뇌질환자의 상태를
                        고려하여 상단에서 하단으로 내려가며 확인할 수 있도록 레이아웃을 구성하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>API 객체 관리 : </s.ProjectPartTitle>웹 JWT 의 토큰 유효성과 보안을 확보하기 위해 전체 API를 객체로
                        관리하여 코드를 간결하게 함과 동시에 재사용성 및 효율성을 높였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>사용자 페이지 : </s.ProjectPartTitle>웹 사용자 정보 조회 및 수정, QnA, 통계 조회 등이 가능한 사용자
                        페이지를 구현.
                      </s.ProjectPartItem>
                    </s.ProjectPart>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      회고
                    </s.ProjectCategory>
                    <s.ProjectInsight>
                      처음으로 타인을 위해 시작한 프로젝트입니다. 사회적 약자들의 힘듦을 이해하기 위해 노력하였습니다. /
                      <span>
                        &nbsp;인지 장애를 가진 이들에게 너무 많은 정보는 받아들이기 쉽지 않습니다. 이를 해결하고자 화면 중앙으로 레이아웃을 집중시키고
                        큰 사이즈의 폰트, 단순한 도형 및 색상으로 인터렉티브한 디자인 시도해 보았습니다.&nbsp;
                      </span>
                      / Jira, Notion, Mattermost 등의 다양한 협업 툴을 한 프로젝트에서 활용하다 보니 개발자 협업 환경에 개선이 필요하다는 생각이
                      들었습니다.
                    </s.ProjectInsight>
                  </s.ProjectMore>
                </s.ProjectMoreWrapper>
                <s.MoreButton
                  $toggle={nashdaToggle}
                  onClick={(event) => {
                    event.stopPropagation();
                    setNashdaToggle(!nashdaToggle);
                    setNashdaHighlightToggle(false);
                  }}
                >
                  <ExpandMoreIcon />
                </s.MoreButton>
              </s.ProjectInterlude>
            </s.Project>
            <s.ProjectDivLine />
            <s.Project $toggle={stvdyToggle}>
              <s.ProjectInterlude>
                <s.ProjectIntro
                  onClick={() => {
                    setStvdyToggle(!stvdyToggle);
                  }}
                >
                  <s.LogoWrapper>
                    <StaticImage src="logo/stvdy.png" />
                  </s.LogoWrapper>
                  <s.ProjectInfo>
                    <s.ProjectName>
                      STVDY
                      <s.GithubLink
                        href="https://github.com/YellaGoya/STVDY"
                        target="_blank"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        GitHub-stvdy
                        <GitHubIcon />
                      </s.GithubLink>
                    </s.ProjectName>
                    <s.ProjectDesc>그룹원들과 함께 실시간 스터디 진행이 가능한 화상 스터디 플랫폼.</s.ProjectDesc>
                  </s.ProjectInfo>
                </s.ProjectIntro>
                <s.ProjectMoreWrapper $toggle={stvdyToggle} height={stvdyHeight}>
                  <s.ProjectMore ref={stvdyMoreRef}>
                    <s.ProjectDetail>
                      현대인들의 기본 소양이 된 자기 계발에 동기부여 하기 위해 그룹으로 스터디를 진행하며 실시간 화상 회의가 가능하다.
                    </s.ProjectDetail>
                    <s.ProjectImageGrid
                      onClick={() => {
                        setStvdyViewToggle(true);
                      }}
                    >
                      <StaticImage src="stvdy/1.PNG" />
                      <StaticImage src="stvdy/2.PNG" />
                      <StaticImage src="stvdy/3.PNG" />
                      <StaticImage src="stvdy/4.PNG" />
                      <StaticImage src="stvdy/5.PNG" />
                    </s.ProjectImageGrid>
                    <s.ProjectCategory
                      className="highlight"
                      $toggle={stvdyHighlightToggle}
                      onClick={() => {
                        setStvdyHighlightToggle(!stvdyHighlightToggle);
                      }}
                    >
                      <s.HistoryDiv />
                      주요 기능
                      <ArrowLeftRoundedIcon />
                    </s.ProjectCategory>
                    <s.ProjectHighlight $toggle={stvdyHighlightToggle}>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>화상 스터디 : </s.ProjectHightlightTitle>
                        Web-RTC 기술을 활용하여 스터디 그룹원들은 실시간으로 화상 스터디를 할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>질문 및 답변 : </s.ProjectHightlightTitle>
                        태그를 설정하여 본인이 원하는 카테고리로 질문이 가능하며 동시에 답변을 작성할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>커스텀 테마 : </s.ProjectHightlightTitle>
                        json 포맷으로 색상을 지정하여 사용자의 취향에 맞춰 테마를 설정할 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>인기 키워드 : </s.ProjectHightlightTitle>
                        질문에 사용된 태그를 분석하여 최근 인기 키워드를 확인할 수 있다.
                      </s.ProjectHighlightItem>
                    </s.ProjectHighlight>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      사용 기술 스택
                    </s.ProjectCategory>
                    <s.ProjectStack>
                      프레임워크 : Vue3 / 상태 관리 : pinia / 기능 구현 및 API 객체 구현 : Javascript / 포맷팅 : Prettier
                    </s.ProjectStack>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      기여
                    </s.ProjectCategory>
                    <s.ProjectPart>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>UX/UI 디자인 : </s.ProjectPartTitle>
                        최근 가장 점유율이 높은 플랫폼 디스코드를 레퍼런스로 드라큘라 색상 스키마를 채택하여 디자인하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>메인 : </s.ProjectPartTitle>
                        새로운 질문 등을 확인할 수 있는 메인페이지를 구현. 다양한 플랫폼의 메인처럼 한눈에 최신 동향을 한눈에 확인 가능하도록
                        레이아웃을 구성하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>질문 게시판 : </s.ProjectPartTitle>웹 질문 및 답변, 게시판 페이지 구현.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>사용자 페이지 : </s.ProjectPartTitle>웹 개인 프로필 조회 및 수정, 커스텀 테마 수정이 가능한 페이지 구현.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>커스텀 테마 : </s.ProjectPartTitle>
                        json 포맷으로 UI의 색상을 사용자 취향에 맞게 수정 가능한 기능을 구현. 다크 모드를 기본으로 하며 라이트 모드를 json 포맷 예시로
                        제공하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>스켈레톤 코드 작성 및 pinia 상태 관리 구현 : </s.ProjectPartTitle>
                        프론트엔드 팀원들이 사용할 Vue3 Composition API를 기반으로 한 스켈레톤 코드 작성, pinia 상태 관리 구현.
                      </s.ProjectPartItem>
                    </s.ProjectPart>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      회고
                    </s.ProjectCategory>
                    <s.ProjectInsight>
                      Discord, Apple FaceTime, Skype를 레퍼런스로 삼아 처음으로 디자인을 담당해 본 프로젝트입니다. /
                      <span>
                        &nbsp;젊은 사용자층을 겨냥하여 커스텀 가능한 UI, 컬러 테마를 적용하였습니다. 웹 어플리케이션이지만 PC 환경에서 네이티브 한
                        경험을 줄 수 있도록 레이아웃을 구성 하였습니다.
                      </span>
                    </s.ProjectInsight>
                  </s.ProjectMore>
                </s.ProjectMoreWrapper>
                <s.MoreButton
                  $toggle={stvdyToggle}
                  onClick={(event) => {
                    event.stopPropagation();
                    setStvdyToggle(!stvdyToggle);
                    setStvdyHighlightToggle(false);
                  }}
                >
                  <ExpandMoreIcon />
                </s.MoreButton>
              </s.ProjectInterlude>
            </s.Project>
          </s.ProjectWrapper>
          <s.ProjectWrapper>
            <s.ProjectTitle>[ 사이드 프로젝트 상세 ]</s.ProjectTitle>
            <s.Project $toggle={markaToggle}>
              <s.ProjectInterlude>
                <s.ProjectIntro
                  onClick={() => {
                    setMarkaToggle(!markaToggle);
                  }}
                >
                  <s.LogoWrapper>
                    <StaticImage src="logo/marka.png" />
                  </s.LogoWrapper>
                  <s.ProjectInfo>
                    <s.ProjectName>
                      Marka
                      <s.GithubLink
                        href="https://github.com/YellaGoya/app-marka"
                        target="_blank"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        GitHub-marka
                        <GitHubIcon />
                      </s.GithubLink>
                    </s.ProjectName>
                    <s.ProjectDesc>단순한 상호작용, 다이어리 & 투두리스트 어플리케이션.</s.ProjectDesc>
                  </s.ProjectInfo>
                </s.ProjectIntro>
                <s.ProjectMoreWrapper $toggle={markaToggle} height={markaHeight}>
                  <s.ProjectMore ref={markaMoreRef}>
                    <s.ProjectDetail>
                      다이어리 & 투두리스트 어플리케이션이 필요하여 직접 만들어 보았다. 서버 환경 구축부터 시작하여 Next.js 사이드 프로젝트를 스스로
                      완성, 풀스택 개발 능력을 키울 수 있었다.
                    </s.ProjectDetail>
                    <s.CloneContainer
                      onClick={() => {
                        window.open('https://ahnsehyeok.info/app-marka');
                      }}
                    >
                      <form>
                        <input value="Greetings. App Marka." />
                        <div />
                        <textarea value={markaGreeting} />
                        <div />
                        <section>
                          <span>
                            추가
                            <AddBoxRoundedIcon />
                          </span>
                          <span>
                            <LowPriorityRoundedIcon />
                            <SaveRoundedIcon />
                          </span>
                        </section>
                      </form>
                    </s.CloneContainer>
                    <s.ProjectCategory
                      className="highlight"
                      $toggle={markaHighlightToggle}
                      onClick={() => {
                        setMarkaHighlightToggle(!markaHighlightToggle);
                      }}
                    >
                      <s.HistoryDiv />
                      주요 기능
                      <ArrowLeftRoundedIcon />
                    </s.ProjectCategory>
                    <s.ProjectHighlight $toggle={markaHighlightToggle}>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>데이터 연동 : </s.ProjectHightlightTitle>비연동 상태에서는 로컬 indexedDB에 데이터를 저장, 연동
                        상태에서는 서버에 데이터를 저장한다. 연동 상태에서 어플리케이션 실행 시 서버와 로컬 데이터를 비교하여 각각의 데이터를
                        최신화한다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>팔로우 : </s.ProjectHightlightTitle>다른 사용자를 팔로우하고 해당 사용자의 투두리스트를 확인할 수
                        있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>하이라이트 : </s.ProjectHightlightTitle>
                        다이어리에서 특정 문장을 하이라이트 처리한 후 투두리스트로 변환할 수 있다. 사용자 경험을 높이기 위해 더블클릭시 단어 뒤 빈칸과
                        함께 선택되는 브라우저의 기본 텍스트 선택을 javascript로 수정하였다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>색상 커스텀 : </s.ProjectHightlightTitle>
                        하이라이트 색상을 개인 취향에 맞게 설정할 수 있다.
                      </s.ProjectHighlightItem>
                    </s.ProjectHighlight>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      사용 기술 스택
                    </s.ProjectCategory>
                    <s.ProjectStack>
                      상태 관리 : Recoil / 프레임워크 : Javascript, Next.js / 데이터베이스 : PostgreSQL / 텍스트 에디터 : Slate / 포맷팅 : ESLint,
                      Prettier
                    </s.ProjectStack>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      회고
                    </s.ProjectCategory>
                    <s.ProjectInsight>
                      <span>
                        데이터를 연동하는 과정에 고민이 많았다. 깃의 commit 기록 방식을 떠올렸고 데이터 변동 사항을 각 DB에 기록, 연동시 비교하여 실제
                        데이터를 최신화하는 방식을 채택하였다.&nbsp;
                      </span>
                      / 많은 기능을 추가하기보다는 본인이 필요로 하는 다이어리, 투두리스트를 만들어 보았다. 사실 간단한 텍스트 기록 어플리케이션은
                      많지만 종이( 다이어리 )같은 디자인을 적용하여 만들고 싶었다. /
                      <span>
                        &nbsp;더블클릭으로 단어 선택 시 trailing space가 따라오는 브라우저의 기본동작을 이해하기 어려웠다. 사용자 경험을 낮추는
                        요인이라 판단, 서칭으로는 원하는 결과를 찾을 수 없어 직접 js, css를 적절히 섞어 구현하였다.&nbsp;/ 처음 1인 프로젝트로 풀스택
                        개발을 한 의미 있는 프로젝트였다.
                      </span>
                    </s.ProjectInsight>
                  </s.ProjectMore>
                </s.ProjectMoreWrapper>
                <s.MoreButton
                  $toggle={markaToggle}
                  onClick={(event) => {
                    event.stopPropagation();
                    setMarkaToggle(!markaToggle);
                    setMarkaHighlightToggle(false);
                  }}
                >
                  <ExpandMoreIcon />
                </s.MoreButton>
              </s.ProjectInterlude>
            </s.Project>
            <s.Project $toggle={polorsToggle}>
              <s.ProjectInterlude>
                <s.ProjectIntro
                  onClick={() => {
                    setPolorsToggle(!polorsToggle);
                  }}
                >
                  <s.LogoWrapper>
                    <StaticImage src="logo/polors.png" />
                  </s.LogoWrapper>
                  <s.ProjectInfo>
                    <s.ProjectName>
                      POLORS
                      <s.GithubLink
                        href="https://github.com/YellaGoya/app-polors"
                        target="_blank"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        GitHub-polors
                        <GitHubIcon />
                      </s.GithubLink>
                    </s.ProjectName>
                    <s.ProjectDesc>고전 명화의 색상 분석 및 색상 스키마 생성 어플리케이션.</s.ProjectDesc>
                  </s.ProjectInfo>
                </s.ProjectIntro>
                <s.ProjectMoreWrapper $toggle={polorsToggle} height={polorsHeight}>
                  <s.ProjectMore ref={polorsMoreRef}>
                    <s.ProjectDetail>
                      저작권이 만료된 명화들을 크롤링 하여 하루 1장의 명화를 보여주고 해당 명화의 색상을 분석하여 색상 스키마를 생성하는 어플리케이션.
                    </s.ProjectDetail>
                    <s.PolorsBanner
                      onClick={() => {
                        window.open('https://ahnsehyeok.info/app-polors');
                      }}
                    >
                      <StaticImage src="polors/banner.png" />
                      <p>POLORS</p>
                    </s.PolorsBanner>
                    <s.ProjectCategory
                      className="highlight"
                      $toggle={polorsHighlightToggle}
                      onClick={() => {
                        setPolorsHighlightToggle(!polorsHighlightToggle);
                      }}
                    >
                      <s.HistoryDiv />
                      주요 기능
                      <ArrowLeftRoundedIcon />
                    </s.ProjectCategory>
                    <s.ProjectHighlight $toggle={polorsHighlightToggle}>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>크롤링 : </s.ProjectHightlightTitle>Artvee 에서 저작권이 만료된 구상 미술 명화 이미지 4만 여장 중
                        1장의 이미지를 중복 없이 랜덤으로 크롤링 하여 보여준다. 매일 자정 새로운 이미지가 업로드된다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>색상 스키마 : </s.ProjectHightlightTitle>이미지를 영역으로 나누어 색상을 분석한다. 사전 설정된 값에
                        따라 유사한 색상은 합쳐지고 다른 색상은 분리된다. 이를 통해 색상 스키마를 생성한다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>자동화 : </s.ProjectHightlightTitle>
                        매일 자정 새로운 이미지가 업로드되며 색상 스키마가 자동으로 생성된다. cron을 활용하여 자동화하였으며 에러와 관련된 로그를
                        파일로 리다이렉션 하여 에러를 추적할 수 있도록 하였다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>단순함 : </s.ProjectHightlightTitle>
                        사용자가 사용할 수 있는 것에 명화와 색상 스키마 외에는 다른 기능이 없다. 사용자가 명화와 색상 스키마를 보며 감상하는 것이
                        전부이다.
                      </s.ProjectHighlightItem>
                    </s.ProjectHighlight>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      사용 기술 스택
                    </s.ProjectCategory>
                    <s.ProjectStack>
                      프레임워크 : Javascript, Next.js / 데이터베이스 : PostgreSQL / 크롤링 : Puppeteer / 색상 스키마 생성 : extractColors / 포맷팅 :
                      ESLint, Prettier
                    </s.ProjectStack>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      회고
                    </s.ProjectCategory>
                    <s.ProjectInsight>
                      영감을 얻기 위해 새로운 트렌드를 찾아 나서는 모습을 성찰하고자 시작하였다. /
                      <span>
                        &nbsp;크롤링 시에는 가상 브라우저 내에서 실행되는 코드와 서버에서 실행되는 코드를 잘 분리해야 했다. 코드가 실행되는 시점에
                        대한 좋은 공부가 되었다.&nbsp;
                      </span>
                      / 색상 스키마를 생성하는 라이브러리 중 인지도가 낮은 라이브러리를 찾아내어 사용하였다. 성능은 좋았지만 도큐먼트의 Node.js 사용
                      예시, ImageData Object 데이터 입력부의 잘못된 부분을 확인할 수 있었고 리포지터리 이슈를 통해 프로젝트 소유자와 소통 후 수정할 수
                      있었다.
                    </s.ProjectInsight>
                  </s.ProjectMore>
                </s.ProjectMoreWrapper>
                <s.MoreButton
                  $toggle={polorsToggle}
                  onClick={(event) => {
                    event.stopPropagation();
                    setPolorsToggle(!polorsToggle);
                    setPolorsHighlightToggle(false);
                  }}
                >
                  <ExpandMoreIcon />
                </s.MoreButton>
              </s.ProjectInterlude>
            </s.Project>
          </s.ProjectWrapper>
          <s.Skills>
            <s.SkillItem
              $focus={focused === 0}
              onMouseOver={() => {
                setFocused(0);
              }}
            >
              <s.SkillTitle>
                [ 프론트엔드 스택
                <s.SvgWrapper>
                  <div />
                  <JavascriptIcon style={{ fill: '#f7df1e' }} />
                  <s.SvgTooltip>JavaScript</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <ReactIcon style={{ fill: '#42d1f8' }} />
                  <s.SvgTooltip>React</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <ReduxIcon style={{ fill: '#7f42c3' }} />
                  <s.SvgTooltip>Redux</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <RecoilIcon style={{ fill: '#3578e5' }} />
                  <s.SvgTooltip>Recoil</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <VueIcon style={{ fill: '#00bd82' }} />
                  <s.SvgTooltip>Vue</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <NextjsIcon />
                  <s.SvgTooltip>Next.js</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <GatsbyIcon style={{ fill: '#663399' }} />
                  <s.SvgTooltip>Gatsby</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper style={{ width: '37px', height: '37px' }}>
                  <StyledComponentsIcon style={{ fill: '#de7496', width: '37px', height: '37px' }} />
                  <s.SvgTooltip style={{ top: '-19px' }}>Styled Components</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <FigmaIcon style={{ fill: '#ee4f2b' }} />
                  <s.SvgTooltip>Figma</s.SvgTooltip>
                </s.SvgWrapper>
                &nbsp;]
              </s.SkillTitle>
              <s.SkillItemDesc>
                <s.SkillItemDescHighlight>
                  * React, Next를 메인으로 사용합니다.
                  <br />
                  CSS 디자인 및 컴포넌트 작성 등 기초 부터 프로젝트 유지보수 및 배포까지 전반에 기여할 수 있습니다.
                  <br />
                  상태관리는 프로젝트의 규모와 상황에 따라 Redux, Recoil 중 선택하여 사용하고 있습니다.
                </s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescHighlight>
                  프로젝트를 진행할 때는 SSR, CSR과 같은 렌더링 방식,
                  <br />
                  메모이제이션, 캐싱 등의 상황에 따른 최적화를 최우선으로 고려하여 개발합니다.
                </s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  CSS-in-CSS 방식과 module.css 를 선호합니다.
                  <br />
                  상태 공유 및 인터렉션을 위한 컴포넌트 디자인에는 styled-components를 사용하기도 합니다.
                </s.SkillItemDescNormal>
                <s.SkillLineDiv />
                <s.SkillItemDescHighlight>
                  * 백엔드 경험을 기반으로 백엔드 API 연동과 같은 협업에 적극적으로 임할 수 있습니다.
                </s.SkillItemDescHighlight>
              </s.SkillItemDesc>
            </s.SkillItem>
            <s.SkillItem
              $focus={focused === 1}
              onMouseOver={() => {
                setFocused(1);
              }}
            >
              <s.SkillTitle>
                [ 백엔드 스택
                <s.SvgWrapper>
                  <NodeDotJs style={{ fill: '#7cb701' }} />
                  <s.SvgTooltip>Node.js</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <JavaIcon style={{ fill: '#ec2025' }} />
                  <s.SvgTooltip>Java</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <SpringIcon style={{ fill: '#72b545' }} />
                  <s.SvgTooltip>Spring</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <SwaggerIcon style={{ fill: '#89bf04' }} />
                  <s.SvgTooltip>Swagger</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <PythonIcon style={{ fill: '#1fee75' }} />
                  <s.SvgTooltip>Python</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <PostgreSQL style={{ fill: '#305d8d' }} />
                  <s.SvgTooltip>PostgreSQL</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper style={{ width: '37px', height: '37px', transform: 'translateY(1px)' }}>
                  <MysqlIcon style={{ fill: '#0088a6', width: '37px', height: '37px' }} />
                  <s.SvgTooltip style={{ top: '-19px' }}>Mysql</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <InfluxDBIcon style={{ fill: '#22adf6' }} />
                  <s.SvgTooltip>InfluxDB</s.SvgTooltip>
                </s.SvgWrapper>
                &nbsp;]
              </s.SkillTitle>
              <s.SkillItemDesc>
                <s.SkillItemDescHighlight>
                  * 최근에는 Next 백엔드 서버 및 API로 개인 프로젝트를 완성하여 운영 중입니다.
                  <br />
                  다수의 프로젝트 경험을 통해 얻은 백엔드 REST API 설계 및 구현 지식으로 백엔드 개발자와 원활한 협업이 가능합니다.
                </s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  Java, Spring 프레임워크 백엔드 서버를 구축 경험이 있으며, 현재는 js를 선호합니다.
                  <br />
                  Python, Pandas 등을 활용하여 데이터를 전처리하거나, 데이터베이스 과제를 진행한 경험이 있습니다.
                </s.SkillItemDescNormal>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  PostgreSQL, MySQL, MsSQL 및 influxDB 등 프로젝트에 적합한 데이터베이스를 선택하여 사용합니다.
                </s.SkillItemDescNormal>
              </s.SkillItemDesc>
            </s.SkillItem>
            <s.SkillItem
              $focus={focused === 2}
              onMouseOver={() => {
                setFocused(2);
              }}
            >
              <s.SkillTitle>
                [ 코드 관리
                <s.SvgWrapper>
                  <GitIcon style={{ fill: '#f05539' }} />
                  <s.SvgTooltip>Git</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <GithubIcon />
                  <s.SvgTooltip>Github</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <GitlabIcon style={{ fill: '#fc6d26' }} />
                  <s.SvgTooltip>Gitlab</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <GerritIcon style={{ fill: '#347dbe' }} />
                  <s.SvgTooltip>Gerrit</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <ESLintIcon style={{ fill: '#4b32c3' }} />
                  <s.SvgTooltip>ESLint</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <PrettierIcon />
                  <s.SvgTooltip>Prettier</s.SvgTooltip>
                </s.SvgWrapper>
                &nbsp;]
              </s.SkillTitle>
              <s.SkillItemDesc>
                <s.SkillItemDescHighlight>
                  * 1구현 1커밋을 좌우명으로 Git을 통해 코드를 관리하고 있습니다.
                  <br />
                  현재는 GitHub으로 프로젝트 코드를 관리 중이며 이외 코드는 팀 GitLab을 통해 관리하였습니다.
                </s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  코드 스타일을 유지하는 일관성, 컨벤션을 준수하는 것을 중요시하며, 코드 리뷰를 통해 코드의 품질을 높이고자 합니다.
                  <br />팀 프로젝트를 진행할 때는 Gerrit을 사용하여 코드 리뷰를 강제하는 방식으로 코드의 품질을 높이고자 하였습니다.
                </s.SkillItemDescNormal>
              </s.SkillItemDesc>
            </s.SkillItem>
            <s.SkillItem
              $focus={focused === 3}
              onMouseOver={() => {
                setFocused(3);
              }}
            >
              <s.SkillTitle>
                [ 서버
                <s.SvgWrapper>
                  <LinuxIcon />
                  <s.SvgTooltip>Linux</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <UbuntuIcon style={{ fill: '#e95420' }} />
                  <s.SvgTooltip>Ubuntu</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <RockyLinux style={{ fill: '#0fb37d' }} />
                  <s.SvgTooltip>Rocky Linux</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <DockerIcon style={{ fill: '#1072d8' }} />
                  <s.SvgTooltip>Docker</s.SvgTooltip>
                </s.SvgWrapper>
                &nbsp;]
              </s.SkillTitle>
              <s.SkillItemDesc>
                <s.SkillItemDescNormal>
                  프로젝트를 진행하며 서버를 구축하고 운영한 경험이 있습니다.
                  <br />
                  개인 프로젝트의 경우 오라클 인스턴스로 Rocky Linux를 사용 중이며, 학부 연구생 시절에는 Ubuntu를 사용하였습니다.
                </s.SkillItemDescNormal>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>현재 포트폴리오, 블로그 및 개인 프로젝트들은 모두 개인 서버에서 배포 중입니다.</s.SkillItemDescNormal>
              </s.SkillItemDesc>
            </s.SkillItem>
            <s.SkillItem
              $focus={focused === 4}
              onMouseOver={() => {
                setFocused(4);
              }}
            >
              <s.SkillTitle>
                [ 협업
                <s.SvgWrapper>
                  <JiraIcon style={{ fill: '#2d88ff' }} />
                  <s.SvgTooltip>Jira</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <SlackIcon style={{ fill: '#6f1f71' }} />
                  <s.SvgTooltip>Slack</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <MatterMostIcon style={{ fill: '#4264ad' }} />
                  <s.SvgTooltip>MatterMost</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <NotionIcon />
                  <s.SvgTooltip>Notion</s.SvgTooltip>
                </s.SvgWrapper>
                &nbsp;]
              </s.SkillTitle>
              <s.SkillItemDesc>
                <s.SkillItemDescHighlight>* 협업에서 소통을 가장 중요시하며, 문서화는 협업의 정수라 생각합니다.</s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  Jira로 이슈를 관리하며 팀원들 간 대화는 Slack 또는 MatterMost, 간단한 소통용 문서는 Notion을 주로 활용합니다.
                  <br />
                  스크럼과 같은 짧은 미팅을 통해 팀원들의 진행 상황을 파악하고, 팀원들의 의견을 수렴하여 프로젝트를 진행하길 선호합니다.
                </s.SkillItemDescNormal>
              </s.SkillItemDesc>
            </s.SkillItem>
          </s.Skills>
        </s.ProfileWrapper>
        <s.ToWrapper>
          <s.ToTopButton
            onClick={() => {
              buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setSuggest(true);

              setTimeout(() => {
                setSuggest(false);
              }, 5000);
            }}
          >
            <VerticalAlignTopIcon />
            처음으로
          </s.ToTopButton>
          <s.ToGithubLink href="https://github.com/YellaGoya" target="_blank">
            <GitHubIcon />
            깃허브 프로필
          </s.ToGithubLink>
        </s.ToWrapper>
      </Wrapper>
      <s.ImageViewer
        $toggle={dddevViewToggle}
        onClick={(event) => {
          event.stopPropagation();
          setDddevViewToggle(false);
        }}
      >
        <s.ImageViewerWrapper>
          <StaticImage src="dddev/1.jpg" />
          <StaticImage src="dddev/2.jpg" />
          <StaticImage src="dddev/3.jpg" />
          <StaticImage src="dddev/4.jpg" />
        </s.ImageViewerWrapper>
      </s.ImageViewer>
      <s.ImageViewer
        $toggle={nashdaViewToggle}
        onClick={(event) => {
          event.stopPropagation();
          setNashdaViewToggle(false);
        }}
      >
        <s.ImageViewerWrapper>
          <img src={nashda1} />
          <img src={nashda2} />
          <img src={nashda3} />
          <img src={nashda4} />
          <img src={nashda5} />
        </s.ImageViewerWrapper>
      </s.ImageViewer>
      <s.ImageViewer
        $toggle={stvdyViewToggle}
        onClick={(event) => {
          event.stopPropagation();
          setStvdyViewToggle(false);
        }}
      >
        <s.ImageViewerWrapper>
          <StaticImage src="stvdy/1.PNG" />
          <StaticImage src="stvdy/2.PNG" />
          <StaticImage src="stvdy/3.PNG" />
          <StaticImage src="stvdy/4.PNG" />
          <StaticImage src="stvdy/5.PNG" />
        </s.ImageViewerWrapper>
      </s.ImageViewer>
    </>
  );
};

export default AboutMe;

const txt = [
  '안녕하세요?\n',
  '안녕하세요?\n\n',
  '안녕하세요?\n\nㅅ',
  '안녕하세요?\n\n새',
  '안녕하세요?\n\n새ㄹ',
  '안녕하세요?\n\n새로',
  '안녕하세요?\n\n새로ㅇ',
  '안녕하세요?\n\n새로우',
  '안녕하세요?\n\n새로운',
  '안녕하세요?\n\n새로운 ',
  '안녕하세요?\n\n새로운 ㅇ',
  '안녕하세요?\n\n새로운 애',
  '안녕하세요?\n\n새로운 앱',
  '안녕하세요?\n\n새로운 앱 ',
  '안녕하세요?\n\n새로운 앱 ㅁ',
  '안녕하세요?\n\n새로운 앱 마',
  '안녕하세요?\n\n새로운 앱 마ㅋ',
  '안녕하세요?\n\n새로운 앱 마카',
  '안녕하세요?\n\n새로운 앱 마카 ',
  '안녕하세요?\n\n새로운 앱 마카 ㄷ',
  '안녕하세요?\n\n새로운 앱 마카 다',
  '안녕하세요?\n\n새로운 앱 마카 다ㅇ',
  '안녕하세요?\n\n새로운 앱 마카 다이',
  '안녕하세요?\n\n새로운 앱 마카 다이ㅇ',
  '안녕하세요?\n\n새로운 앱 마카 다이어',
  '안녕하세요?\n\n새로운 앱 마카 다이어ㄹ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 ㄱ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 겨',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경ㅎ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경허',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험ㅎ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해ㅂ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보ㄱ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기. ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \nㅋ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n크',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클ㄹ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클리',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭ㅇ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으ㄹ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로 ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로 ㅇ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로 이',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로 이ㄷ',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로 이도',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로 이동',
  '안녕하세요?\n\n새로운 앱 마카 다이어리 경험해보기.  \n클릭으로 이동.',
];
