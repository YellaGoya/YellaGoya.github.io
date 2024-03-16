import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet-async';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as s from 'style/templates/Post.js';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  const thumbnailImg = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

  return (
    <s.Wrapper>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <link rel="canonical" href={`https://ahnsehyeok.info/post${post.fields.slug}`} />
        <meta name="description" content={post.frontmatter.description} />
        <meta property="og:url" content="https://example.com/page.html" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.description} />
        <meta property="og:url" content={`https://ahnsehyeok.info/post${post.fields.slug}`} />
      </Helmet>
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
      fields {
        slug
      }
      frontmatter {
        title
        categories
        description
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
