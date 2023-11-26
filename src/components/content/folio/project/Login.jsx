import GitHubIcon from '@mui/icons-material/GitHub';
import { StaticImage } from 'gatsby-plugin-image';

import * as s from 'style/content/folio/project/Login';
const Login = () => {
  return (
    <>
      <s.Background>
        <StaticImage src="LoginBackground.png" alt="background" />
      </s.Background>
      <s.FlightWrapper>
        <s.DescWrapper>
          <h1>dddev</h1>
          <p>때로 모여 데브. 당신도 가능하다. 협업.</p>
        </s.DescWrapper>
        <s.GithubLoginButton>
          <GitHubIcon />
          GitHub 로그인
        </s.GithubLoginButton>
        <s.Powered>powered by ssafy d103 team, github.</s.Powered>
      </s.FlightWrapper>
    </>
  );
};

export default Login;
