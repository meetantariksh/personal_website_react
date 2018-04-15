import { takeLatest, call, put, select } from 'redux-saga/effects';

import{
  LOAD_NEWS_CONTENT
} from './constants';
import{
  loadNewsComplete,
  loadNewsError
} from './actions';

import{
  requestGetAPIData
} from '../../utils/requestAPIData';

export function* loadNewsHeadLines(){
  const apiIndiaUrl = 'https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=d96de1b2807b4c118aca85ecdbe7d4da';
  const apiWorldUrl = 'https://newsapi.org/v2/top-headlines?language=en&pageSize=10&apiKey=d96de1b2807b4c118aca85ecdbe7d4da';
  try {
    let newsHeadLinesIndia = yield call(requestGetAPIData, apiIndiaUrl);
    let newsHeadLinesWorld = yield call(requestGetAPIData, apiWorldUrl);

    let newsData = {
      newsHeadLinesIndia,
      newsHeadLinesWorld
    }
    yield put(loadNewsComplete(newsData));
  } catch (err) {
    console.log(err);
    yield put(loadNewsError());
  }
}

export default function* landingPageSaga() {
  yield takeLatest(LOAD_NEWS_CONTENT, loadNewsHeadLines);
}