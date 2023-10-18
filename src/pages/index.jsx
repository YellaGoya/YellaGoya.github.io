import Recent from "components/content/malog/Recent";
import LatestProject from "components/content/malog/LatestProject";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <>
      <Recent nodes={nodes} />
      <LatestProject />
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
