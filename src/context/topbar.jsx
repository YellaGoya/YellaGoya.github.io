import React from 'react';

const TopBarContext = React.createContext({
  isMenu: false,
  isSearch: false,
  isFocus: false,
  light: undefined,
  setIsMenu() {},
  setIsSearch() {},
  setIsFocus() {},
  setLight() {},
});

const TopBarProvider = ({ children }) => {
  const [isMenu, setIsMenu] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);
  const [light, setLight] = React.useState(undefined);

  const value = React.useMemo(
    () => ({ isMenu, setIsMenu, isSearch, setIsSearch, isFocus, setIsFocus, light, setLight }),
    [isMenu, isSearch, isFocus, light],
  );

  return <TopBarContext.Provider value={value}>{children}</TopBarContext.Provider>;
};

export { TopBarContext, TopBarProvider };
