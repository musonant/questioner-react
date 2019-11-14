import { setToken } from '../../api/helpers';
import { signUpRequest, loginRequest } from '../../api/requests';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REQUEST_PROCESSING = 'REQUEST_PROCESSING';

const initialState = {
  isLoading: false,
  errorMessage: '',
  currentUser: {}
};

export const signupSuccess = userData => ({
  type: SIGNUP_SUCCESS,
  userData
});
export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  error
});
export const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  userData
});
export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});
export const requestProcessing = () => ({
  type: REQUEST_PROCESSING
});

export const loginUser = userData => {
  return async dispatch => {
    try {
      dispatch(requestProcessing());
      const {
        data: {
          data: { token, user }
        }
      } = await loginRequest(userData);
      setToken(token);
      dispatch(loginSuccess(user));
    } catch (err) {
      const {
        response: {
          data: { error }
        }
      } = err;
      dispatch(loginFailure(error));
    }
  };
};

export const signupUser = userData => {
  return async dispatch => {
    try {
      dispatch(requestProcessing());
      const {
        data: { token, user }
      } = await signUpRequest(userData);
      setToken(token);
      dispatch(signupSuccess(user));
    } catch (err) {
      const {
        response: {
          data: { error }
        }
      } = error;
      dispatch(signupFailure(err));
    }
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROCESSING:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.userData
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.userData
      };
    default:
      return state;
  }
};
