import {delay, takeLatest, put, all} from 'redux-saga/effects';
import {getDataFromAPI} from '../API/apis';
import {addFlightData} from './AppReducer';

function* getFlightDataSaga() {
  try {
    yield delay(500)
    let result = yield getDataFromAPI();
    console.log(result);
    yield put(addFlightData(result.data.result));
  } catch (e) {}
}
export function* rootSaga() {
  yield all([takeLatest('GET_DATA', getFlightDataSaga)]);
}
