import { mockStore } from '../../utils/mockStore';
import { http } from '../../api/http';

import {
  initialState,
  GET_MEETUPS_FAILURE,
  GET_MEETUPS_SUCCESS,
  REQUEST_PROCESSING,
  getMeetupsFailure,
  getMeetupsSuccess,
  requestProcessing,
  getMeetups,
  meetupReducer
} from './meetup';

let store;

describe('Meetup Store', () => {
  const meetupMockData = {
    data: {
      data: [{ id: 1 }]
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('Action reducers', () => {
    it('Should create action for initializing request', () => {
      const expectedAction = { type: REQUEST_PROCESSING };
      expect(requestProcessing()).toEqual(expectedAction);
    });
    it('Should create action for successful retrieval of meetups', () => {
      const expectedAction = { type: GET_MEETUPS_SUCCESS, meetups: {} };
      expect(getMeetupsSuccess({})).toEqual(expectedAction);
    });
    it('Should create action for unsuccessful retrieval of meetups', () => {
      const expectedAction = { type: GET_MEETUPS_FAILURE, error: '' };
      expect(getMeetupsFailure('')).toEqual(expectedAction);
    });
    it('Should dispatch the correct actions for getting a meetup', () => {
      http.get = jest
        .fn()
        .mockReturnValue(Promise.resolve({ data: meetupMockData }));

      const expectedActions = [
        {
          type: REQUEST_PROCESSING
        },
        {
          type: GET_MEETUPS_SUCCESS,
          meetups: meetupMockData.data
        }
      ];

      return store.dispatch(getMeetups()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Meetup Reducers', () => {
    it('Should return the initial state', () => {
      expect(meetupReducer(undefined, {})).toEqual(initialState);
    });
    it('Should handle request processing', () => {
      expect(meetupReducer(initialState, { type: REQUEST_PROCESSING })).toEqual(
        {
          ...initialState,
          isLoading: true
        }
      );
    });
    it('Should handle get meetups success', () => {
      expect(
        meetupReducer(initialState, {
          type: GET_MEETUPS_SUCCESS,
          meetups: meetupMockData.data.data
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        meetups: meetupMockData.data.data
      });
    });
    it('Should handle get meetups failure', () => {
      expect(
        meetupReducer(initialState, {
          type: GET_MEETUPS_FAILURE,
          error: 'unable to get meetups'
        })
      ).toEqual({
        ...initialState,
        isLoading: false,
        errorMessage: 'unable to get meetups'
      });
    });
  });
});
