import * as r from "react";

const SearchContext = r.createContext({
  searchQuery: "",
  setSearchQuery() {}
});

const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = r.useState("");

  return <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchContextProvider };
