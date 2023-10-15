import * as r from "react";

const CategoryContext = r.createContext({
  category: "",
  setCategory() {}
});

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = r.useState("");

  return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>;
};

export { CategoryContext, CategoryProvider };
