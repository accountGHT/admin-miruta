import { fetchData } from '../api/api';
import environment from '../config/environment';

export const getDataFromApi = async () => {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
