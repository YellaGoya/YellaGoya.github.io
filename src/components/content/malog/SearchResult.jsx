import { navigate } from "gatsby";

import { Noresult } from "style/content/malog/style.js";
import * as s from "style/templates/Search.js";
const SearchResult = ({ results }) => {
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
        <Noresult>
          탐색 결과가 없습니다 ㅠㅜ..
          <br />
          다른 검색어를 입력해보세요.
        </Noresult>
      ) : null}
    </s.Wrapper>
  );
};

export default SearchResult;
