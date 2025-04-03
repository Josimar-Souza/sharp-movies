import { createContext } from "react";
import { TVSeriesContextType } from "./tvSeriesContextTypes";

const tvSeriesContext= createContext<TVSeriesContextType>({});

type TVSeriesProviderType = {
  children: React.ReactNode,
}

function TVSeriesProvider({ children }: TVSeriesProviderType) {
  const contextValues = {};

  return (
    <tvSeriesContext.Provider value={contextValues}>
      { children }
    </tvSeriesContext.Provider>
  )
}

export default TVSeriesProvider;
