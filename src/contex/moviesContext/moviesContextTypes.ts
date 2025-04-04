import { MoviesListType } from "../../helpers/types/moviesTypes";

export type MoviesListsType = {
  nowPlaying: MoviesListType,
  popular: MoviesListType,
  topRated: MoviesListType,
  upcoming: MoviesListType,
}

export type MoviesContextType = {
  moviesLists: MoviesListsType | undefined,
  isLoading: boolean,
};
