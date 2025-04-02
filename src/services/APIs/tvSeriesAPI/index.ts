import axios, { AxiosInstance } from 'axios';
import {
  tvSeriesListType,
} from '../../../helpers/types/tvSeriesTypes';
import ErrorCreator from '../../../helpers/error/errorCreator';

import {
  airingTodayErrorMessage,
  onTheAirErrorMessage,
  popularErrorMessage,
  topRatedErrorMessage,
} from '../../../helpers/error/tvSeriesErrorMessages';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;

const headers = {
  accept: 'application/json',
  Authorization: apiToken,
}

class TVSeriesAPI {
  private api: AxiosInstance;

  constructor(timeout: number) {
    this.api = axios.create({
      baseURL,
      timeout,
    });
  }

  async GetAiringToday(): Promise<tvSeriesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/tv/airing_today',
        {
          headers,
        }
      );

      return results;
    } catch (e) {
      return new ErrorCreator(airingTodayErrorMessage, e);
    }
  }

  async GetOnTheAir(): Promise<tvSeriesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/tv/on_the_air',
        {
          headers,
        }
      )

      return results;
    } catch (e) {
      return new ErrorCreator(onTheAirErrorMessage, e);
    }
  }

  async GetPopular(): Promise<tvSeriesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/tv/popular',
        {
          headers,
        }
      )

      return results;
    } catch (e) {
      return new ErrorCreator(popularErrorMessage, e)
    }
  }

  async GetTopRated(): Promise<tvSeriesListType | ErrorCreator> {
    try {
      const { data: { results } } = await this.api.get(
        '/tv/top_rated',
        {
          headers,
        }
      );

      return results;
    } catch (e) {
      return new ErrorCreator(topRatedErrorMessage, e);
    }
  }
}

export default TVSeriesAPI;
