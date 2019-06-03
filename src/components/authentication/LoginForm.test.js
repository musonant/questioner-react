import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store/';
import LoginForm from './LoginForm';

const props = {
  auth: {
    isLoading: false,
    errorMessage: '',
    currentUser: {}
  },
  history: {},
  loginStatus: 'login',
  loginUser: jest.fn()
};

describe('Login Form', () => {
  it('Should render correctly in debug mode', () => {
    const component = shallow(<LoginForm store={store} {...props} />);
    expect(component).toMatchSnapshot();
  });
});
