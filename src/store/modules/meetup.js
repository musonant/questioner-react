import uniqueBy from 'unique-by';
import { getMeetupsRequest } from '../../api/requests';

export const initialState = {
  isLoading: false,
  meetups: [],
  errorMessage: ''
};

export const GET_MEETUPS_FAILURE = 'GET_MEETUPS_FAILURE';
export const GET_MEETUPS_SUCCESS = 'GET_MEETUPS_SUCCESS';
export const REQUEST_PROCESSING = 'REQUEST_PROCESSING';

export const getMeetupsFailure = error => ({
  type: GET_MEETUPS_FAILURE,
  error
});

export const getMeetupsSuccess = meetups => ({
  type: GET_MEETUPS_SUCCESS,
  meetups
});

export const requestProcessing = () => ({
  type: REQUEST_PROCESSING
});

export const getMeetups = () => async dispatch => {
  dispatch(requestProcessing());
  try {
    const {
      data: { data: meetups }
    } = await getMeetupsRequest();
    dispatch(getMeetupsSuccess(meetups));
  } catch (err) {
    dispatch(getMeetupsFailure(err.response));
  }
};

export const meetupReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROCESSING:
      return {
        ...state,
        isLoading: true
      };
    case GET_MEETUPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        meetups: uniqueBy([...state.meetups, ...action.meetups], 'id')
      };

    case GET_MEETUPS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
