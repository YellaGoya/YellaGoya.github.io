import React from 'react';

const TopBarContext = React.createContext({
  isMenu: false,
  isSearch: false,
  light: false,
  setIsMenu() {},
  setIsSearch() {},
  setLight() {},
});

const TopBarProvider = ({ children }) => {
  const [isMenu, setIsMenu] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [light, setLight] = React.useState(false);

  const value = React.useMemo(() => ({ isMenu, setIsMenu, isSearch, setIsSearch, light, setLight }), [isMenu, isSearch, light]);

  return <TopBarContext.Provider value={value}>{children}</TopBarContext.Provider>;
};

export { TopBarContext, TopBarProvider };
