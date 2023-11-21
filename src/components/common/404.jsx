import { StaticImage } from 'gatsby-plugin-image';

import * as s from 'style/common/404.js';
const NotFound = () => {
  return (
    <s.Wrapper>
      <s.NinjaHouse>
        <s.Ninja>
          <StaticImage src="../../assets/images/404.png" alt="ninja" />
          <s.Eyes>404</s.Eyes>
        </s.Ninja>
        <s.Bunshinsul>
          <s.Dagger>
            닌자가 길을 <br />
            막아 섰습니다.
          </s.Dagger>
          <s.Silence>&quot;이 곳에는 아무 것도 없다.&quot;</s.Silence>
        </s.Bunshinsul>
      </s.NinjaHouse>
    </s.Wrapper>
  );
};

export default NotFound;
