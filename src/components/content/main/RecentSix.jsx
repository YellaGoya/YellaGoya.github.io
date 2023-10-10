import * as s from "style/content/main/RecentSix.js";
import { Wrapper, ContentTitle } from "style/content/main/style.js";

import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecentSix = ({ data }) => {
  return (
    <Wrapper>
      <ContentTitle>
        Recent
        <br />
        Posts
      </ContentTitle>
      <s.RecentWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <s.RecentCard key={node.id} onClick={() => navigate(node.fields.slug)}>
            <GatsbyImage image={getImage(node.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)} alt="thumbnail" />

            <s.CardTitle>{node.frontmatter.title}</s.CardTitle>
            <s.CardDescription>{node.frontmatter.description}</s.CardDescription>

            <s.Categories>
              {node.frontmatter.categories && node.frontmatter.categories.map((category) => <span key={category}>{category}</span>)}
            </s.Categories>
          </s.RecentCard>
        ))}
      </s.RecentWrapper>
    </Wrapper>
  );
};

export default RecentSix;
