import {
  createContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { MoviesContextType, DefaultMoviesType } from "./moviesContextTypes";
import MoviesAPI from "../../services/APIs/movieAPI";
import ErrorCreator from "../../helpers/error/errorCreator";

type MoviesProviderType = {
  children: React.ReactNode,
}

const moviesContext = createContext<MoviesContextType>({});
const moviesAPI = new MoviesAPI(5000);

function MoviesProvider({ children }: MoviesProviderType) {
  const [defaultMovies, setDefaultMovies] = useState<DefaultMoviesType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      const nowPlaying = await moviesAPI.GetNowPlaying();
      const popular = await moviesAPI.GetPopular();
      const topRated = await moviesAPI.GetTopRated();
      const upcoming = await moviesAPI.GetUpcoming();

      if (
        !(nowPlaying instanceof ErrorCreator) &&
        !(popular instanceof ErrorCreator) &&
        !(topRated instanceof ErrorCreator) &&
        !(upcoming instanceof ErrorCreator)
      ) {
        setDefaultMovies(
          {
            nowPlaying,
            popular,
            topRated,
            upcoming,
          }
        )

        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const contextValues = useMemo(() => ({
    defaultMovies,
    isLoading,
  }), [defaultMovies, isLoading]);

  return (
    <moviesContext.Provider value={contextValues}>
      { children }
    </moviesContext.Provider>
  )
};

export default MoviesProvider;
