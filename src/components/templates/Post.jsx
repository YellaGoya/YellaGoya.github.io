import { graphql } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as s from 'style/templates/Post.js';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  const thumbnailImg = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

  return (
    <s.Wrapper>
      <s.Post>
        <s.ThumbnailWrapper>
          <GatsbyImage image={thumbnailImg} alt="Thumbnail" />
        </s.ThumbnailWrapper>

        <s.Content>
          <s.Categories>
            {post.frontmatter.categories && post.frontmatter.categories.map((category) => <span key={category}>{category}</span>)}
          </s.Categories>
          <h1>{post.frontmatter.title}</h1>
          <article dangerouslySetInnerHTML={{ __html: post.html }} />
        </s.Content>
      </s.Post>
    </s.Wrapper>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Post;
