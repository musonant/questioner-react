import { setToken } from '../../api/helpers';
import { signUpRequest, loginRequest } from '../../api/requests';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REQUEST_PROCESSING = 'LOGIN_PROCESSING';

const initialState = {
  isLoading: false,
  errorMessage: '',
  currentUser: {}
};

const signupSuccess = userData => ({
  type: SIGNUP_SUCCESS,
  userData
});
const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  error
});
const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  userData
});
const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});
const requestProcessing = () => ({
  type: REQUEST_PROCESSING
});

export const loginUser = userData => {
  return async dispatch => {
    try {
      dispatch(requestProcessing());
      const { data } = await loginRequest(userData);
      setToken(data.data[0].token);
      dispatch(loginSuccess(data.data[0].user));
    } catch (error) {
      const { data } = error.response;
      dispatch(loginFailure(data.error));
    }
  };
};

export const signupUser = userData => {
  return async dispatch => {
    try {
      dispatch(requestProcessing());
      const { data } = await signUpRequest(userData);
      const { user } = data.data[0];
      setToken(data.data[0].token);
      dispatch(signupSuccess(user));
    } catch (error) {
      const { data } = error.response;
      dispatch(signupFailure(data.error));
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
