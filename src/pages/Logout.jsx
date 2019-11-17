import React from 'react';
import { Redirect } from 'react-router-dom';
import { destroyToken } from '../api/helpers';

const Logout = () => {
  destroyToken();
  return <Redirect to="/login" />;
};

export default Logout;
