import { createSelector } from 'reselect';

/**
 * Direct selector to the twiterFeedContainer state domain
 */
const selectTwiterFeedContainerDomain = (state) => state.get('twiterFeedContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TwiterFeedContainer
 */

const makeSelectTwiterFeedContainer = () => createSelector(
  selectTwiterFeedContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectTwiterFeedContainer;
export {
  selectTwiterFeedContainerDomain,
};
