import {delay, takeLatest, put, all} from 'redux-saga/effects';
import {getDataFromAPI} from '../API/apis';
import {addFlightData} from './AppReducer';

function* getDataSaga() {
  try {
    let result = yield getDataFromAPI();
    console.log(result);
    yield put(addFlightData(result.data.result));
  } catch (e) {}
}
export function* rootSaga() {
  yield all([takeLatest('GET_DATA', getDataSaga)]);
}
