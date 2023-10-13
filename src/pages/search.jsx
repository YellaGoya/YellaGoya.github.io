import * as r from "react";
import * as s from "style/templates/Search.js";
import { graphql, navigate } from "gatsby";
import Fuse from "fuse.js";

import { SearchContext } from "context/search.jsx";

const SearchPage = ({ data }) => {
  const { searchQuery } = r.useContext(SearchContext);
  const [results, setResults] = r.useState("");

  const fuseIndexes = data.allMarkdownRemark.edges.map(({ node }) => JSON.parse(node.fields.index));
  const fuseInstance = new Fuse(fuseIndexes, { keys: ["title", "content", "categories"] });

  r.useEffect(() => {
    const resultsRawData = fuseInstance.search(searchQuery);
    const resultsParsedData = resultsRawData.map((result) => result.item);

    setResults(resultsParsedData);
  }, [searchQuery]);

  return (
    <s.Main>
      <ul>
        {results &&
          results.map((result) => (
            <li key={result.slug} onClick={() => navigate(result.slug)}>
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
    </s.Main>
  );
};

export default SearchPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            index
          }
        }
      }
    }
  }
`;
