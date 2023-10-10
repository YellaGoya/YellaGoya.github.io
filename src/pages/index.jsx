import * as React from "react";
import Main from "components/content/main/Main.jsx";
import About from "components/content/main/About.jsx";
import MarkDownEditor from "components/common/MarkDownEditor";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <Main data={data} />
      <MarkDownEditor />
      <About />
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
                gatsbyImageData
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
