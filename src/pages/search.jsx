import { useState, useEffect, useContext } from 'react';
import { graphql } from 'gatsby';
import Fuse from 'fuse.js';

import SearchResult from 'components/content/malog/SearchResult';
import { SearchContext } from 'context/search.jsx';

const SearchPage = ({ data }) => {
  const { searchQuery } = useContext(SearchContext);
  const [results, setResults] = useState('');

  const fuseIndexes = data.allMarkdownRemark.edges.map(({ node }) => JSON.parse(node.fields.index));
  const fuseInstance = new Fuse(fuseIndexes, { keys: ['title', 'content', 'categories'] });

  useEffect(() => {
    const resultsRawData = fuseInstance.search(searchQuery);
    const resultsParsedData = resultsRawData.map((result) => result.item);

    setResults(resultsParsedData);
  }, [searchQuery]);

  return <SearchResult results={results} />;
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
