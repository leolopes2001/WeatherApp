import { apiGeocoding } from './api';

export const getLocationByName = async (name: string) => {
  const response = await apiGeocoding.get(`/direct?q=${name}`);

  return response.data;
};
