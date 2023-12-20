import axios from 'axios';
import authEndpoints from './authEndpoints';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const login = async (credentials) => {
  try {
    const response = await api.post(authEndpoints.login, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
