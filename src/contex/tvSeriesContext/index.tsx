import {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  TVSeriesContextType,
  TVSeriesListsType,
} from "./tvSeriesContextTypes";
import TVSeriesAPI from "../../services/APIs/tvSeriesAPI";
import ErrorCreator from "../../helpers/error/errorCreator";

const tvSeriesContext= createContext<TVSeriesContextType>({});
const tvSeriesAPI = new TVSeriesAPI(5000);

type TVSeriesProviderType = {
  children: React.ReactNode,
}

function TVSeriesProvider({ children }: TVSeriesProviderType) {
  const [tvSeriesLists, setTVSeriesLists] = useState<TVSeriesListsType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchTVSeries = async () => {
      const airingToday = await tvSeriesAPI.GetAiringToday();
      const onTheAir = await tvSeriesAPI.GetOnTheAir();
      const popular = await tvSeriesAPI.GetPopular();
      const topRated = await tvSeriesAPI.GetTopRated();

      if (
        !(airingToday instanceof ErrorCreator) &&
        !(onTheAir instanceof ErrorCreator) &&
        !(popular instanceof ErrorCreator) &&
        !(topRated instanceof ErrorCreator)
      ) {
        setTVSeriesLists(
          {
            airingToday,
            onTheAir,
            popular,
            topRated,
          }
        )

        setIsLoading(false);
      }
    };

    fetchTVSeries();
  }, []);

  const contextValues = useMemo(() => ({
    tvSeriesLists,
    isLoading,
  }), [tvSeriesLists, isLoading]);

  return (
    <tvSeriesContext.Provider value={contextValues}>
      { children }
    </tvSeriesContext.Provider>
  )
}

export default TVSeriesProvider;
