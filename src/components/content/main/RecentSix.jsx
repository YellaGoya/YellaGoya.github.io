import * as s from "style/content/main/RecentSix.js";

import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecentSix = ({ data }) => {
  console.log(data);
  return (
    <s.Wrapper>
      <s.RecentTitle>
        Recent
        <br />
        Posts
      </s.RecentTitle>
      <s.RecentWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <s.RecentCard key={node.id} onClick={() => navigate(node.fields.slug)}>
            <GatsbyImage image={getImage(node.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)} />

            <s.CardTitle>{node.frontmatter.title}</s.CardTitle>
            <s.CardDescription>{node.frontmatter.description}</s.CardDescription>
          </s.RecentCard>
        ))}
      </s.RecentWrapper>
    </s.Wrapper>
  );
};

export default RecentSix;
