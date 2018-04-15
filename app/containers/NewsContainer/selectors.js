import { createSelector } from 'reselect';

/**
 * Direct selector to the newsContainer state domain
 */
const selectNewsContainerDomain = (state) => state.get('newsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewsContainer
 */

const makeSelectNewsContainer = () => createSelector(
  selectNewsContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectLoadingNews = () => createSelector(
  selectNewsContainerDomain,
  (substate) => substate.get('loadingNews')
);

const makeSelectLoadingNewsComplete = () => createSelector(
  selectNewsContainerDomain,
  (substate) => substate.get('loadingNewsComplete')
);

const makeSelectLoadingNewsError = () => createSelector(
  selectNewsContainerDomain,
  (substate) => substate.get('loadingNewsError')
);

const makeSelectNewsData = () => createSelector(
  selectNewsContainerDomain,
  (substate) => substate.get('newsData')
);

export default makeSelectNewsContainer;
export {
  selectNewsContainerDomain,
  makeSelectLoadingNews,
  makeSelectLoadingNewsError,
  makeSelectLoadingNewsComplete,
  makeSelectNewsData
};
