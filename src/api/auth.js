import { http } from './http';

export const signUpRequest = async credentials => {
  return await http.post('/auth/signup', credentials);
};

export const loginRequest = async credentials => {
  return await http.post('/auth/login', credentials);
};

export const getMeetups = async () => {
  return await http.get('/meetups');
};
