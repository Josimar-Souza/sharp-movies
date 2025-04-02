import axios, { AxiosInstance } from "axios";
import ErrorCreator from "../../../helpers/error/errorCreator";
import {
  MoviesListType,
  MovieType,
 } from "../../../helpers/types/moviesTypes";
import {
  nowPlayingMoviesError,
  popularMoviesError,
  topRatedMoviesError,
  upcomingMoviesError,
  movieDetailsError,
} from "../../../helpers/error/errorMessages";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;

const headers = {
  accept: 'application/json',
  Authorization: apiToken,
}

class MoviesAPI {
  private api: AxiosInstance;

  constructor(timeout: number) {
    this.api = axios.create({
      baseURL,
      timeout,
    });
  }

  async GetNowPlaying(): Promise<MoviesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/movie/now_playing',
        {
          headers,
        },
      );

      return results;
    } catch (e) {
      return new ErrorCreator(nowPlayingMoviesError, e);
    }
  }

  async GetPopular(): Promise<MoviesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/movie/popular',
        {
          headers,
        }
      )

      return results;
    } catch(e) {
      return new ErrorCreator(popularMoviesError, e);
    }
  }

  async GetTopRated(): Promise<MoviesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/movie/top_rated',
        {
          headers,
        }
      );

      return results;
    } catch(e) {
      return new ErrorCreator(topRatedMoviesError, e);
    }
  }

  async GetUpcoming(): Promise<MoviesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/movie/upcoming',
        {
          headers,
        }
      );

      return results;
    } catch (e) {
      return new ErrorCreator(upcomingMoviesError, e);
    }
  }

  async GetMovieDetails(movieID: number): Promise<MovieType | ErrorCreator> {
    try {
      const { data } = await this.api.get(
        `/movie/${movieID}`,
        {
          headers,
        }
      );

      return data;
    } catch (e) {
      return new ErrorCreator(movieDetailsError, e);
    }
  }
}

export default MoviesAPI;
