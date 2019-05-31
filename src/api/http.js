import axios from 'axios';
import { getToken } from './helpers';

export const http = axios.create({
  baseURL: process.env.API_URL,
  headers: { 'x-access-token': getToken() }
});
