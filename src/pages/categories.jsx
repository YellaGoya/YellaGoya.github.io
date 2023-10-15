import * as r from "react";
import * as s from "style/templates/Search.js";
import { graphql, navigate } from "gatsby";
import Fuse from "fuse.js";

import { CategoryContext } from "context/category.jsx";

const CategoriesPage = ({ data }) => {
  const { category } = r.useContext(CategoryContext);
  const [results, setResults] = r.useState("");

  const fuseIndexes = data.allMarkdownRemark.edges.map(({ node }) => JSON.parse(node.fields.categories));
  const fuseInstance = new Fuse(fuseIndexes, { keys: ["categories"] });

  r.useEffect(() => {
    if (category === "") setResults(fuseIndexes);
    else {
      const resultsRawData = fuseInstance.search(category);
      const resultsParsedData = resultsRawData.map((result) => result.item);
      setResults(resultsParsedData);
    }
  }, [category]);

  return (
    <s.Wrapper>
      <ul>
        {results &&
          results.map((result) => (
            <li key={result.slug} onClick={() => navigate(`/post${result.slug}`)}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
            </li>
          ))}
      </ul>
      {!results || results.length === 0 ? (
        <s.Noresult>
          검색 결과가 없습니다 ㅠㅜ..
          <br />
          다른 검색어를 입력해보세요.
        </s.Noresult>
      ) : null}
    </s.Wrapper>
  );
};

export default CategoriesPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            categories
          }
        }
      }
    }
  }
`;
