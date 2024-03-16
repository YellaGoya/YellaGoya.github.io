import Works from 'components/content/malog/Works';
import Recent from 'components/content/malog/Recent';
import { Helmet } from 'react-helmet-async';
// import LatestProject from 'components/content/malog/LatestProject';

import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://ahnsehyeok.info" />
        <meta property="og:url" content="https://example.com/page.html" />
        <meta property="og:title" content="malog | 개발 블로그" />
        <meta name="description" content="Dev blog of Yellagoya. 개발 블로그" />
        <meta property="og:url" content="https://ahnsehyeok.info" />
      </Helmet>
      <Works />
      <Recent nodes={nodes} />
      {/* <LatestProject /> */}
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 7) {
      edges {
        node {
          id
          frontmatter {
            title
            categories
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 530)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
