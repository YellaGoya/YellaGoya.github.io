import React from "react";

const TopBarContext = React.createContext({
  isFolio: false,
  isMenu: false,
  isSearch: false,
  setIsFolio() {},
  setIsMenu() {},
  setIsSearch() {}
});

const TopBarProvider = ({ children }) => {
  const [isFolio, setIsFolio] = React.useState(false);
  const [isMenu, setIsMenu] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);

  return <TopBarContext.Provider value={{ isFolio, setIsFolio, isMenu, setIsMenu, isSearch, setIsSearch }}>{children}</TopBarContext.Provider>;
};

export { TopBarContext, TopBarProvider };
