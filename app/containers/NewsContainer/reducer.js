/*
 *
 * NewsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_NEWS_CONTENT,
  LOAD_NEWS_CONTENT_COMPLETE,
  LOAD_NEWS_CONTENT_ERROR,
  RESET_LOAD_NEWS_CONTENT,
} from './constants';

const initialState = fromJS({
  loadingNews: false,
  loadingNewsComplete: false,
  loadingNewsError: false,
  newsData: ''
});

function newsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_NEWS_CONTENT:
      return state
        .set('loadingNews', true)
        .set('loadingNewsComplete', false)
        .set('loadingNewsError', false);
    case LOAD_NEWS_CONTENT_COMPLETE:
      return state
        .set('loadingNews', false)
        .set('loadingNewsComplete', true)
        .set('loadingNewsError', false)
        .set('newsData', action.newsData);
    case LOAD_NEWS_CONTENT_ERROR:
      return state
        .set('loadingNews', false)
        .set('loadingNewsComplete', false)
        .set('loadingNewsError', true);
    case RESET_LOAD_NEWS_CONTENT:
      return initialState;
    default:
      return state;
  }
}

export default newsContainerReducer;
