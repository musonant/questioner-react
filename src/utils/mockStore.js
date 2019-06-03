import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mock = configureStore([thunk]);

export const mockStore = initialState => mock(initialState);
