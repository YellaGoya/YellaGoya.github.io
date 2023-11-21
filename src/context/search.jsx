import * as r from 'react';

const SearchContext = r.createContext({
  searchQuery: '',
  setSearchQuery() {},
});

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = r.useState('');

  const value = r.useMemo(() => ({ searchQuery, setSearchQuery }), [searchQuery]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchProvider };
