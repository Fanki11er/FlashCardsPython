import axios from 'axios';
import endpoints from './endpoints';

const { baseURL } = endpoints;

export default axios.create({
  baseURL: baseURL,
});

export const axiosPrivate = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
