import uniqueBy from 'unique-by';
import { getMeetupsRequest } from '../../api/requests';

const initialState = {
  isLoading: false,
  meetups: []
};

const GET_MEETUPS_FAILURE = 'GET_MEETUPS_FAILURE';
const GET_MEETUPS_SUCCESS = 'GET_MEETUPS_SUCCESS';
const REQUEST_PROCESSING = 'REQUEST_PROCESSING';

const getMeetupsFailure = error => ({
  type: GET_MEETUPS_FAILURE,
  error
});

const getMeetupsSuccess = meetups => ({
  type: GET_MEETUPS_SUCCESS,
  meetups
});

const requestProcessing = () => ({
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
    case GET_MEETUPS_SUCCESS:
      return {
        ...state,
        meetups: uniqueBy([...state.meetups, ...action.meetups], 'id')
      };
    default:
      return state;
  }
};
