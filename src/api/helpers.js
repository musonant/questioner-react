import jwt from 'jsonwebtoken';

export const decodeToken = token => jwt.decode(token);

export const setToken = token => {
  localStorage.setItem('token', token);
  return getToken();
};

export const getToken = () => localStorage.getItem('token');

export const destroyToken = () => localStorage.removeItem('token');
