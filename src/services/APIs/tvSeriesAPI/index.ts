import axios, { AxiosInstance } from 'axios';

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
}

export default TVSeriesAPI;
