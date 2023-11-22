import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 6000,
  params: {
    appid: 'd7b6f35e4cc0098415e6891095283f58',
    units: 'metric',
  },
});

export const apiGeocoding = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0',
  timeout: 6000,
  params: {
    limit: '5',
    appid: 'd7b6f35e4cc0098415e6891095283f58',
  },
});
