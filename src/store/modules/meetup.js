const initialState = {
  meetups: [],
};

const GET_MEETUPS_FAILURE = 'GET_MEETUPS_FAILURE';
const GET_MEETUPS_SUCCESS = 'GET_MEETUPS_SUCCESS';
const REQUEST_PROCESSING = 'REQUEST_PROCESSING';

const getMeetupsFailure = error => ({
  type: GET_MEETUPS_FAILURE,
  error,
});

const getMeetupsSuccess = response => ({
  type: GET_MEETUPS_SUCCESS,
  response,
});

const requestProcessing = response => ({
  type: REQUEST_PROCESSING,
  response,
});

const getMeetups = () => {
  getMeetups();
};

export const meetupReducer = (state = initialState, action) => {};
