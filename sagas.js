import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function randomIntFromInterval(min,max) // min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

function* getUsers() {
  yield delay(1000);
  const type = randomIntFromInterval(0,1) ? 'USERS' : 'ERROR';
  yield put({ type: type, payload: randomIntFromInterval(100, 999) })
}


function* watchUsers() {
  yield takeEvery('GET_USERS', getUsers)
}

export default function* rootSaga() {
  yield all([
    watchUsers()
  ])
}