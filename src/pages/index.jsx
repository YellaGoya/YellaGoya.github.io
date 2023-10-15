import * as React from "react";
import Main from "components/content/main/Main.jsx";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <Main data={data} />
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
            date(formatString: "MMMM DD, YYYY")
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 600)
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
