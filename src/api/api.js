import axios from 'axios';
import endpoints from './endpoints';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchData = async () => {
  try {
    const response = await api.get(endpoints.getData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
