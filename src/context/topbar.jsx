import React from "react";

const TopBarContext = React.createContext({
  isMenu: false,
  isSearch: false,
  setIsMenu() {},
  setIsSearch() {}
});

const TopBarProvider = ({ children }) => {
  const [isMenu, setIsMenu] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);

  return <TopBarContext.Provider value={{ isMenu, setIsMenu, isSearch, setIsSearch }}>{children}</TopBarContext.Provider>;
};

export { TopBarContext, TopBarProvider };
