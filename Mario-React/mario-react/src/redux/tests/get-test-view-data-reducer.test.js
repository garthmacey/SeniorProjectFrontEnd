import { reducer } from '../reducers';
import { GET_TEST_VIEW_DATA_SUCCESS, GET_TEST_VIEW_DATA_FAILURE } from '../actions/get-test-view-data';
import data from './context/mock-get-test-view-data.json';

describe('Reducer for get test view data', () => {
  let state;
  beforeEach(() => {
    state = {
    };
  });
  it('should set response in store', () => {
    const expectedState = {
      Branches: [
        'data',
      ],
      TestEnv: [
        'data',
      ],
      DriveType: [
        'data',
      ],
    };
    const action = { type: GET_TEST_VIEW_DATA_SUCCESS, payload: { data } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expectedState);
  });
  it('should update error state based on FAILURE', () => {
    const error = 500;
    const expected = {
      error,
    };
    const action = { type: GET_TEST_VIEW_DATA_FAILURE, payload: { error } };
    const actual = reducer(state, action);
    expect(actual).toStrictEqual(expected);
  });
});
