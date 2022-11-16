import { iCurrentDayWeather } from '../contexts/WeatherProvider/types';
import {api} from './api';



export const getDataOfCurrentDay = async (
  lat: number,
  lon: number
): Promise<iCurrentDayWeather> => {
  const { data } = await api.get<iCurrentDayWeather >('/weather', {
    params: { lat, lon },
  });

  return data;
};
