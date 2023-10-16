import * as React from "react";
import RecentSix from "components/content/main/RecentSix";
import LatestProject from "components/content/main/LatestProject";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <RecentSix data={data} />
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
                gatsbyImageData(layout: FIXED, width: 530)
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
