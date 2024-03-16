import { Wrapper, ContentTitle } from 'style/content/malog/Malog.js';
import { StaticImage } from 'gatsby-plugin-image';

import { RecentCard, CardTitle, CardDescription } from 'style/content/malog/Recent.js';
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
          <StaticImage src="app-marka2.png" layout="fixed" alt="A description of the image" />

          <CardTitle>Marka</CardTitle>
          <CardDescription>
            어플리케이션 마카 [PWA, NEXT]
            <br />
            간편한 다이어리 에디터, 투두리스트와 함께 써보자.
          </CardDescription>
        </RecentCard>
      </s.WorksWrapper>
    </Wrapper>
  );
};

export default Works;
