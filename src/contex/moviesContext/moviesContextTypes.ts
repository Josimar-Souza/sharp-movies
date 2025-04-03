import { MoviesListType } from "../../helpers/types/moviesTypes";

export type MoviesContextType = {};

export type MoviesListsType = {
  nowPlaying: MoviesListType,
  popular: MoviesListType,
  topRated: MoviesListType,
  upcoming: MoviesListType,
}