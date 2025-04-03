import { createContext } from "react";
import { MoviesContextType } from "./moviesContextTypes";

type MoviesProviderType = {
  children: React.ReactNode,
}

const moviesContext = createContext<MoviesContextType>({});

function MoviesProvider({ children }: MoviesProviderType) {
  const contextValues = {};

  return (
    <moviesContext.Provider value={contextValues}>
      { children }
    </moviesContext.Provider>
  )
};

export default MoviesProvider;
