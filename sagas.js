import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects'
import { GET_RANDOM_CAT, GET_RANDOM_CAT_ERROR, RANDOM_CAT } from "./actions/actionsList";

function* getCat() {
  yield delay(500);
  try {
    const cat = yield fetch('https://aws.random.cat/meow').then(res => res.json());
    yield put({ type: RANDOM_CAT, payload: cat });
  } catch (e) {
    yield put({ type: GET_RANDOM_CAT_ERROR, payload: e });
  }
}

function* watchCat() {
  yield takeEvery(GET_RANDOM_CAT, getCat)
}

export default function* rootSaga() {
  yield all([
    watchCat()
  ])
}