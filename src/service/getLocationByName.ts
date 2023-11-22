import { log } from 'console';
import { apiGeocoding } from './api';

export const getLocationByName = async (name: string) => {

  console.log(`/direct?q=${name.split(" ").join("%")}`);
  
  const response = await apiGeocoding.get(`/direct?q=${name.split(" ").join("%")}`);

  return response.data;
};
