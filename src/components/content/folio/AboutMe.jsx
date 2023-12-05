import { useEffect, useState, useContext, useRef } from 'react';
import { TopBarContext } from 'context/topbar.jsx';

import { StaticImage } from 'gatsby-plugin-image';
import JavascriptIcon from './svg/javascript.inline.svg';
import JavaIcon from './svg/java.inline.svg';
import PythonIcon from './svg/python.inline.svg';

import ReactIcon from './svg/react.inline.svg';
import ReduxIcon from './svg/redux.inline.svg';
import VueIcon from './svg/vuedotjs.inline.svg';
import ESLintIcon from './svg/eslint.inline.svg';
import PrettierIcon from './svg/prettier.inline.svg';

import SpringIcon from './svg/spring.inline.svg';
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
import RockyLinux from './svg/rockylinux.inline.svg';

import GitIcon from './svg/git.inline.svg';
import GithubIcon from './svg/github.inline.svg';
import GitlabIcon from './svg/gitlab.inline.svg';

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

  const [dddevHeight, setDddevHeight] = useState(0);
  const [nashdaHeight, setNashdaHeight] = useState(0);
  const [stvdyHeight, setStvdyHeight] = useState(0);

  const [dddevToggle, setDddevToggle] = useState(false);
  const [nashdaToggle, setNashdaToggle] = useState(false);
  const [stvdyToggle, setStvdyToggle] = useState(false);

  const [dddevHighlightToggle, setDddevHighlightToggle] = useState(false);
  const [nashdaHighlightToggle, setNashdaHighlightToggle] = useState(false);
  const [stvdyHighlightToggle, setStvdyHighlightToggle] = useState(false);

  const [dddevViewToggle, setDddevViewToggle] = useState(false);
  const [nashdaViewToggle, setNashdaViewToggle] = useState(false);
  const [stvdyViewToggle, setStvdyViewToggle] = useState(false);

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
                제 직업은 사용자에게 편리함을 제공하는 웹 서비스를 만드는 것이며, 그 과정에 디자인과 상호작용을 섞어 마법을 부리는 것을 좋아합니다.
                <p />
                가장 영향을 많이 받은 디자이너는 디터 람스입니다. 사용자의 편의를 위해 불필요한 것을 제거하는 것, 디터 람스의 깨달음을 마음에 새기고
                언제나 유용하며 세련된 프론트엔드 개발을 하려 노력하고 있습니다.
                <p />
                최근 여가 시간에는 키보드를 만들거나 이미 봤던 영화들을 보며 쉬고 있습니다.
              </s.ProfileText>
            </s.ProfileDesc>
            <s.History>
              <s.HistoryTitle>[ 학업 ]</s.HistoryTitle>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>NPLAB 인공지능 연구실 학부연구생</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>금오공과대학교 컴퓨터공학과 졸업</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>삼성 SW 아카데미 수료</p>
              </s.HistoryItem>
              <s.HistoryTitle>[ 프로젝트 이력 ]</s.HistoryTitle>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>삼성 과제 RDBMS, 시계열 DB 성능 비교</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>기업 연계 프로젝트 감정 분석 스마트 라이트</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>회 AI 분석 플랫폼, 사랑회요</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>실시간 화상 스터디 플랫폼, STVDY</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>뇌질환자 언어 재활 어플리케이션, 내쉬다</p>
              </s.HistoryItem>
              <s.HistoryItem>
                <s.HistoryDiv />
                <p>학생용 협업 툴, dddev</p>
              </s.HistoryItem>
            </s.History>
          </s.Specification>
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
                  <VueIcon style={{ fill: '#00bd82' }} />
                  <s.SvgTooltip>Vue</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <FigmaIcon style={{ fill: '#ee4f2b' }} />
                  <s.SvgTooltip>Figma</s.SvgTooltip>
                </s.SvgWrapper>
                &nbsp;]
              </s.SkillTitle>
              <s.SkillItemDesc>
                <s.SkillItemDescHighlight>
                  React를 메인으로 개발합니다.
                  <br />
                  이전에는 vue2, 3를 활용한 경험이 있으며 바로 프로젝트에 기여 할 수 있습니다.
                </s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  컨셉, UX/UI 디자인, 와이어프레임 및 스토리보드 작성에는 Figma를 사용하며,
                  <br />
                  최근 4번의 프로젝트를 Figma와 함께하며 디자인을 전담하였습니다.
                </s.SkillItemDescNormal>
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
                  <PythonIcon style={{ fill: '#1fee75' }} />
                  <s.SvgTooltip>Python</s.SvgTooltip>
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
                  Java, Spring 프레임워크로 서버를 구축한 경험이 있습니다.
                  <br />
                  현재 node.js로 백엔드 서버를 구축하는 토이 프로젝트를 진행 중 입니다.
                </s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  학부연구생 시절 Python, Pandas 등을 활용하여 데이터를 전처리하거나, 연구실의 데이터베이스 관련 과제를 진행 하였습니다.
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
                  1작성 1커밋을 지향하며, Git으로 코드를 관리합니다.
                  <br />
                  현재 Github에서 개인 및 팀 프로젝트 코드를 관리 중 입니다.
                </s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  ESLint, Prettier로 프론트엔드 코드의 일관성을 유지하며, XO 규칙을 커스텀하여 사용하고 있습니다.
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
                  <s.SvgTooltip>RockyLinux</s.SvgTooltip>
                </s.SvgWrapper>
                <s.SvgWrapper>
                  <DockerIcon style={{ fill: '#1072d8' }} />
                  <s.SvgTooltip>Docker</s.SvgTooltip>
                </s.SvgWrapper>
                &nbsp;]
              </s.SkillTitle>
              <s.SkillItemDesc>
                <s.SkillItemDescNormal>
                  연구실 서버를 Ubuntu로 운영한 경험이 있으며 현재 랩탑의 경우 Rocky Linux 환경을 사용하고 있습니다.
                  <br />
                  c언어를 활용한 간단한 시스템 프로그래밍이 가능하며, 리눅스 환경에서 개발을 할 때에도 불편함이 없습니다.
                </s.SkillItemDescNormal>
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
                <s.SkillItemDescHighlight>협업에서 소통을 가장 중요시 여기며, 문서화는 협업의 정수라 생각합니다.</s.SkillItemDescHighlight>
                <s.SkillLineDiv />
                <s.SkillItemDescNormal>
                  프로젝트를 진행할 때에는 Jira로 이슈를 관리하며 팀원들 간 대화는 Slack 또는 MatterMost, 간단한 소통용 문서는 Notion을 활용하는 것을
                  좋아합니다.
                </s.SkillItemDescNormal>
              </s.SkillItemDesc>
            </s.SkillItem>
          </s.Skills>
          <s.ProjectWrapper>
            <s.ProjectTitle>[ 프로젝트 상세 ]</s.ProjectTitle>
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
                        프로젝트의 컨셉부터 세부 기능에 이르기 까지 모든 기능에 직접 기획 및 참여 하였습니다. 아이디어가 팀원들의 마음에 들어 본인의
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
                        <s.ProjectPartTitle>대쉬보드 : </s.ProjectPartTitle>
                        번다운 차트, 이슈 평균 소비 시간등의 프로젝트 분석 그래프와 최신 요청등의 정보를 한눈에 확인할 수 있는 대쉬보드를 구현.
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
                        &nbsp;코드의 간결함과 재사용성, 시맨틱 마크업을 염두에 두고 프로젝트에 임하였습니다. 회고를 통해 알게된 이전 프로젝트 들의
                        미흡했던 점 3가지로 리액트를 활용한 두 번째 프로젝트이기에 같은 실수를 반복하지 않기위해 스스로 리마인드 하며 진행한
                        프로젝트였습니다.&nbsp;
                      </span>
                      / 본인의 아이디어가 프로젝트에 그대로 반영 및 구현되어 개발자로서 좋은 경험이 된 프로젝트였으나 본인이 원하는 기능의 방향과
                      팀원들이 생각한 바에 차이가 생기는 등 협업 툴을 개발하면서도 협업 과정에 작은 문제점들이 있어 아쉬운 프로젝트입니다. 혼자 열정에
                      넘쳐 모든 것들을 처리하려 하기 보다는 팀원 들과 자주 기획 회의를 하며 서로에게 기댈 부분은 기댈 수 있는 개발자가 되어야 겠다는
                      생각이 들었습니다.
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
                        GPT 모델을 사용하여 실제 상황 처럼 대화가 가능하다. 상황에 맞지 않는 답변은 기록되며 복습이 가능하다.
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
                        최근 연습동향, 로그인 등을 스트릭을 통해 확인 및 동기부여, 조건이 달성되면 업적이 해금되어 스트릭을 꾸밀 수 있다.
                      </s.ProjectHighlightItem>
                      <s.ProjectHighlightItem>
                        <s.ProjectHightlightTitle>통계 : </s.ProjectHightlightTitle>
                        4가지 정보를 확인할 수 있다. 사용자가 많이 틀린 발음 순 통계, 주간시험의 분석 결과를 정답과 발음 복습을 통해 확인, 대화 연습의
                        부자연스러운 대화, 달성한 업적 등의 정보 확인이 가능하다.
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
                        프로젝트의 시작은 가족의 재활 과정 중 불편함을 바로 옆에서 지켜본 본인의 작은 불편함이였습니다. 본인의 아이디어 이기에
                        책임감을 가지고 기획에 중심이 되어 프로젝트를 진행 하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>UX/UI 디자인 : </s.ProjectPartTitle>
                        애플과 네이버, 백준 등의 화이트 계열 웹 사이트들을 레퍼런스로 삼아 UX/UI 디자인을 하였으며 인지에 어려움이 있는 뇌질환자들에
                        적합한 어고노믹 디자인을 적용 하였습니다.
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
                      React 로는 처음 진행하는 프로젝트인 만큼 배움으로 가득채우고자 하는 마음가짐으로 시작하였습니다. /{' '}
                      <span>
                        &nbsp;팀원과의 소통이 가장 중요하며 모든 요청 및 피드백, 답변을 문서화 하여 작성하는 것의 필요성을 크게 느낀 프로젝트였습니다.
                        프로젝트 중반부터는 모든 소통을 문서화 하여 팀원끼리 다시 한번 같은 내용을 확인 하는 프로세스를 줄일 수 있었습니다.{' '}
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
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        GitHub-stvdy
                        <GitHubIcon />
                      </s.GithubLink>
                    </s.ProjectName>
                    <s.ProjectDesc>그룹원 들과 함께 실시간 스터디 진행이 가능한 화상 스터디 플랫폼.</s.ProjectDesc>
                  </s.ProjectInfo>
                </s.ProjectIntro>
                <s.ProjectMoreWrapper $toggle={stvdyToggle} height={stvdyHeight}>
                  <s.ProjectMore ref={stvdyMoreRef}>
                    <s.ProjectDetail>
                      현대인들의 기본 소양이 된 자기 개발에 동기부여 하기 위해 그룹으로 스터디를 진행하며 실시간 화상 회의가 가능하다.
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
                      프레임 워크 : Vue3 / 상태 관리 : pinia / 기능 구현 및 API 객체 구현 : Javascript / 포맷팅 : Prettier
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
                        새로운 질문 등을 확인할 수 있는 메인페이지를 구현. 다양한 플랫폼의 메인 처럼 한눈에 최신 동향을 한눈에 확인 가능하도록
                        레이아웃을 구성 하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>질문 게시판 : </s.ProjectPartTitle>웹 질문 및 답변, 게시판 페이지 구현.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>사용자 페이지 : </s.ProjectPartTitle>웹 개인 프로필 조회 및 수정, 커스텀 테마 수정이 가능한 페이지 구현.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>커스텀 테마 : </s.ProjectPartTitle>
                        json 포맷으로 UI의 색상을 사용자 취향에 맞게 수정가능한 기능을 구현. 다크 모드를 기본으로 하며 라이트 모드를 json 포맷 예시로
                        제공하였습니다.
                      </s.ProjectPartItem>
                      <s.ProjectPartItem>
                        <s.ProjectPartTitle>스켈레톤 코드 작성 및 pinia 상태 관리 구현 : </s.ProjectPartTitle>
                        프론트엔드 팀원들이 사용 할 Vue3 Composition API를 기반으로 한 스켈레톤 코드 작성, pinia 상태 관리 구현.
                      </s.ProjectPartItem>
                    </s.ProjectPart>
                    <s.ProjectCategory>
                      <s.HistoryDiv />
                      회고
                    </s.ProjectCategory>
                    <s.ProjectInsight>
                      처음 프론트엔드로 진행한 프로젝트이자 6인이라는 많은 인원과 진행한 프로젝트 였습니다. Vue3 프레임워크로 개발을 하며 코드의
                      재사용성과 가시성을 고려하며 개발 하였습니다. /
                      <span>
                        &nbsp; 점유율이 높은 React 라이브러리를 사용하지 않고 자바스크립트의 문법을 벗어난 Vue3 로 첫 프론트엔드 프로젝트를 진행한
                        것이 아쉬움이 남지만 우려한 것과 다르게 Vue3 의 상태 관리 및 라우팅 등의 기능은 편리했고 개발에 부족함이 없었습니다. 어떤
                        프레임워크를 사용하던 이해를 기반한 개발을 한다면 문제가 없다는 것을 다시 한번 깨달았습니다.&nbsp;
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
            {/* <s.ProjectWindow>
            <Project />
          </s.ProjectWindow> */}
          </s.ProjectWrapper>
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
          <s.ToGithubLink href="https://github.com/YellaGoya">
            <GitHubIcon />
            GitHub프로필
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
