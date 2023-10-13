import * as s from "style/content/main/LatestProject.js";
import { Wrapper, ContentTitle } from "style/content/main/style.js";
import Intro from "assets/images/latestProject/intro.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { navigate } from "gatsby";

const LatestProject = () => {
  return (
    <Wrapper>
      <ContentTitle>
        Latest
        <br />
        Project
      </ContentTitle>
      <s.ProjectWrapper>
        <s.Title>프로젝트 내쉬다.</s.Title>
        <s.Window>
          <p>intro</p>
          <div></div>
          <div></div>
          <div></div>
          <s.ProjectImage src={Intro}></s.ProjectImage>
        </s.Window>
        <s.Introduce>
          <s.IntroduceLinkList>
            <s.IntroduceLink onClick={() => navigate("https://github.com/YellaGoya/NASHDA")}>
              <GitHubIcon />
              깃헙 페이지 바로가기
            </s.IntroduceLink>
          </s.IntroduceLinkList>
          <s.IntroduceDescription>
            타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다. 제1항의 탄핵소추는
            국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는
            국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수
            있다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다.
          </s.IntroduceDescription>
        </s.Introduce>
      </s.ProjectWrapper>
    </Wrapper>
  );
};

export default LatestProject;
