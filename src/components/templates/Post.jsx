import * as s from "style/templates/Post.js";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { graphql } from "gatsby";

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const thumbnailImg = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

  return (
    <s.Main>
      <s.Post>
        <s.ThumbnailWrapper>
          <GatsbyImage image={thumbnailImg} alt="Thumbnail" />
        </s.ThumbnailWrapper>

        <s.Content>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </s.Content>
      </s.Post>
    </s.Main>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default PostTemplate;
