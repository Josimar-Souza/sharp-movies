import axios, { AxiosInstance } from 'axios';
import {
  tvSeriesListType,
} from '../../../helpers/types/tvSeriesTypes';
import ErrorCreator from '../../../helpers/error/errorCreator';

import {
  airingTodayErrorMessage,
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
}

export default TVSeriesAPI;
