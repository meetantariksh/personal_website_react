
import { fromJS } from 'immutable';
import twiterFeedContainerReducer from '../reducer';

describe('twiterFeedContainerReducer', () => {
  it('returns the initial state', () => {
    expect(twiterFeedContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
