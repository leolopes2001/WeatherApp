import axios from 'axios';

export const key = 'fe796e8e76359f46faae8d1ff6311969';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 6000,
  params: {
    appid: key,
    units: 'metric',
  },
});

export const apiGeocoding = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0',
  timeout: 6000,
  params: {
    limit: '5',
    appid: key,
  },
});



