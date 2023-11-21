import React from 'react';

const TopBarContext = React.createContext({
  isMenu: false,
  isSearch: false,
  setIsMenu() {},
  setIsSearch() {},
});

const TopBarProvider = ({ children }) => {
  const [isMenu, setIsMenu] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);

  const value = React.useMemo(() => ({ isMenu, setIsMenu, isSearch, setIsSearch }), [isMenu, isSearch]);

  return <TopBarContext.Provider value={value}>{children}</TopBarContext.Provider>;
};

export { TopBarContext, TopBarProvider };
