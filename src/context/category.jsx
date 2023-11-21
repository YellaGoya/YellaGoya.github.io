import * as r from 'react';

const CategoryContext = r.createContext({
  category: '',
  setCategory() {},
});

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = r.useState('');

  const value = r.useMemo(() => ({ category, setCategory }), [category]);

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export { CategoryContext, CategoryProvider };
