/*
 *
 * NewsContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_NEWS_CONTENT,
  LOAD_NEWS_CONTENT_COMPLETE,
  LOAD_NEWS_CONTENT_ERROR,
  RESET_LOAD_NEWS_CONTENT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadNews() {
  return {
    type: LOAD_NEWS_CONTENT,
  };
}

export function loadNewsComplete(newsData) {
  return {
    type: LOAD_NEWS_CONTENT_COMPLETE,
    newsData
  };
}

export function loadNewsError() {
  return {
    type: LOAD_NEWS_CONTENT_ERROR,
  };
}

export function resetLoadNews() {
  return {
    type: RESET_LOAD_NEWS_CONTENT,
  };
}
