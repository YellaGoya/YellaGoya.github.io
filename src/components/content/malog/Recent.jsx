import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Wrapper, ContentTitle, Noresult } from 'style/content/malog/Malog.js';
import * as s from 'style/content/malog/Recent.js';
const Recent = ({ nodes }) => {
  const location = useLocation();

  return (
    <Wrapper>
      {location.pathname === '/' && (
        <ContentTitle>
          Recent
          <br />
          Posts
        </ContentTitle>
      )}
      <s.RecentWrapper>
        {nodes &&
          nodes.map((node) => (
            <s.RecentCard key={node.id} onClick={() => navigate(`/post${node.fields.slug}`)}>
              <GatsbyImage image={getImage(node.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)} alt="thumbnail" loading="eager" />

              <s.CardTitle>{node.frontmatter.title}</s.CardTitle>
              <s.CardDescription>{node.frontmatter.description}</s.CardDescription>

              <s.Categories>
                {node.frontmatter.categories && node.frontmatter.categories.map((category) => <span key={category}>{category}</span>)}
              </s.Categories>
            </s.RecentCard>
          ))}
      </s.RecentWrapper>
      {!nodes || nodes.length === 0 ? (
        <Noresult>
          탐색 결과가 없습니다 ㅠㅜ..
          <br />
          다른 검색어를 입력해보세요.
        </Noresult>
      ) : null}
    </Wrapper>
  );
};

export default Recent;
