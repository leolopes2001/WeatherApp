import { iDataOfNextDays } from '../contexts/WeatherProvider/types';
import { api } from './api';

interface iResponseOfNextDays {
  list: iDataOfNextDays[];
}

export const getDataOfNextDays = async (
  lat: number,
  lon: number
): Promise<iDataOfNextDays[]> => {
  const {
    data: { list },
  } = await api.get<iResponseOfNextDays>('/forecast', {
    params: { lat, lon },
  });

  return list;
};
