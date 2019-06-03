import { mockStore } from '../../utils/mockStore';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REQUEST_PROCESSING,
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
  requestProcessing,
  loginUser,
  signupUser,
  authReducer
} from './auth';
import { http } from '../../api/http';

const initialState = {
  isLoading: false,
  errorMessage: '',
  currentUser: {}
};

let store;

describe('Auth store', () => {
  const authMockData = {
    status: 201,
    data: [
      {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJtcm11c29uYW50ZUBnbWFpbC5jb20iLCJpYXQiOjE1NTkxMzI1NTUsImV4cCI6MTU1OTEzNjE1NX0.MWRXOav3oi61Ie3968M2wTa1mfPOtIr0glj4t6yNIHQ',
        user: {
          email: 'mrmusonante@gmail.com',
          firstname: 'El',
          id: 5,
          isAdmin: false,
          lastname: 'Musonant',
          othername: 'Nitrogen',
          password:
            '$2a$10$jd8/VCYQo3vEDsKcNAP5wupB2.SqLH1oh/ZPPHkUVh7P7bYo2SPY2',
          phoneNumber: null,
          registered: '2019-05-29T12:22:34.724Z',
          username: 'musonant'
        }
      }
    ]
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('Action Creators', () => {
    it('Should create action for initializing request', () => {
      const expectedAction = { type: REQUEST_PROCESSING };
      expect(requestProcessing()).toEqual(expectedAction);
    });
    it('Should create action for successful requests', () => {
      expect(loginSuccess().type).toEqual(LOGIN_SUCCESS);
      expect(signupSuccess().type).toEqual(SIGNUP_SUCCESS);
    });
    it('Should create action for failed requests', () => {
      expect(loginFailure().type).toEqual(LOGIN_FAILURE);
      expect(signupFailure().type).toEqual(SIGNUP_FAILURE);
    });

    it('Should dispatch the correct actions for login', () => {
      http.post = jest
        .fn()
        .mockReturnValue(Promise.resolve({ data: authMockData }));

      const expectedActions = [
        {
          type: REQUEST_PROCESSING
        },
        {
          type: LOGIN_SUCCESS,
          userData: authMockData.data[0].user
        }
      ];

      return store.dispatch(loginUser()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it('Should dispatch the correct actions for signup', () => {
      http.post = jest
        .fn()
        .mockReturnValue(Promise.resolve({ data: authMockData }));

      const expectedActions = [
        {
          type: REQUEST_PROCESSING
        },
        {
          type: SIGNUP_SUCCESS,
          userData: authMockData.data[0].user
        }
      ];

      return store.dispatch(signupUser()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it('Should handle login failure', () => {
      const error = new Error('something happened');
      error.response = { data: {} };
      http.post = jest.fn().mockReturnValue(Promise.reject(error));

      const expectedActions = [
        { type: REQUEST_PROCESSING },
        { type: LOGIN_FAILURE }
      ];

      return store.dispatch(loginUser()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it('Should handle signup failure', () => {
      const error = new Error('something happened');
      error.response = { data: {} };
      http.post = jest.fn().mockReturnValue(Promise.reject(error));

      const expectedActions = [
        { type: REQUEST_PROCESSING },
        { type: SIGNUP_FAILURE }
      ];

      return store.dispatch(signupUser()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Auth Reducesrs', () => {
    it('Should return the initial state', () => {
      expect(authReducer(undefined, {})).toEqual(initialState);
    });
    it('Should handle request processing', () => {
      expect(authReducer(initialState, { type: REQUEST_PROCESSING })).toEqual({
        ...initialState,
        isLoading: true
      });
    });
    it('Should handle login success', () => {
      expect(
        authReducer(initialState, {
          type: LOGIN_SUCCESS,
          userData: authMockData.data[0].user
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        currentUser: authMockData.data[0].user
      });
    });
    it('Should handle signup success', () => {
      expect(
        authReducer(initialState, {
          type: SIGNUP_SUCCESS,
          userData: authMockData.data[0].user
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        currentUser: authMockData.data[0].user
      });
    });
    it('Should handle login failure', () => {
      expect(
        authReducer(initialState, {
          type: LOGIN_FAILURE,
          error: 'unable to login'
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        errorMessage: 'unable to login'
      });
    });
    it('Should handle signup failure', () => {
      expect(
        authReducer(initialState, {
          type: SIGNUP_FAILURE,
          error: 'unable to signup'
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        errorMessage: 'unable to signup'
      });
    });
  });
});
