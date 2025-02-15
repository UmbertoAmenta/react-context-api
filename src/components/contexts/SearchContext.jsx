import { createContext, useContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>;
}

function useSearchContext() {
  const context = useContext(SearchContext);
  return context;
}

export { useSearchContext, SearchProvider };
