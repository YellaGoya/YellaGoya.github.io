import { useState, useEffect, useContext } from "react";
import { graphql } from "gatsby";
import Fuse from "fuse.js";

import Recent from "components/content/malog/Recent";
import { CategoryContext } from "context/category.jsx";

const CategoriesPage = ({ data }) => {
  const { category } = useContext(CategoryContext);
  const [nodes, setNodes] = useState("");

  const fuseIndexes = data.allMarkdownRemark.edges.map(({ node }) => node);
  const fuseInstance = new Fuse(fuseIndexes, { keys: ["frontmatter.categories"] });

  useEffect(() => {
    if (category === "") setNodes(fuseIndexes);
    else {
      const resultsRawData = fuseInstance.search(category);
      const resultsParsedData = resultsRawData.map((result) => result.item);
      setNodes(resultsParsedData);
    }
  }, [category]);

  // return <div>hi</div>;
  return <Recent nodes={nodes} />;
};

export default CategoriesPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark {
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
