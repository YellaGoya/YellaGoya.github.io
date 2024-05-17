import { Wrapper, ContentTitle } from 'style/content/malog/Malog.js';
import { StaticImage } from 'gatsby-plugin-image';

import { RecentCard, CardTitle, CardDescription, MarkaIcon, PolorsIcon } from 'style/content/malog/Recent.js';
import * as s from 'style/content/malog/Works.js';
const Works = () => {
  return (
    <Wrapper>
      <ContentTitle>Works</ContentTitle>
      <s.WorksWrapper>
        <RecentCard
          onClick={() => {
            window.open('https://ahnsehyeok.info/app-marka', '_blank');
          }}
        >
          <StaticImage src="app-marka.png" layout="fixed" alt="A description of the image" />

          <CardTitle>
            <MarkaIcon>
              <StaticImage src="ico-marka.png" layout="fixed" alt="A description of the image" />
            </MarkaIcon>
            arka
          </CardTitle>
          <CardDescription>
            어플리케이션 마카 [PWA, NEXT]
            <br />
            간편한 다이어리 에디터, 투두리스트와 함께 써보자.
          </CardDescription>
        </RecentCard>
        <RecentCard
          onClick={() => {
            window.open('https://ahnsehyeok.info/app-polors', '_blank');
          }}
        >
          <StaticImage src="app-polors.png" layout="fixed" alt="A description of the image" />
          <CardTitle>
            <PolorsIcon>
              <StaticImage src="ico-polors.png" layout="fixed" alt="A description of the image" />
            </PolorsIcon>
            POLORS
          </CardTitle>
          <CardDescription>
            어플리케이션 폴러스 [NEXT, Node.js]
            <br />
            Post + Colors, 과거의 색을 기억하다.
          </CardDescription>
        </RecentCard>
      </s.WorksWrapper>
    </Wrapper>
  );
};

export default Works;
