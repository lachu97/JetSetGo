import {delay, takeLatest, put, all} from 'redux-saga/effects';
import {getDataFromAPI} from '../../API/apis';
import {addFlightData, addLoading} from '../AppReducer';

function* getFlightDataSaga() {
  try {
    yield put(addLoading(true));
    yield delay(800);
    let result = yield getDataFromAPI();
    console.log(result);
    yield put(addFlightData(result.data.result));
  } catch (e) {
  } finally {
    yield put(addLoading(false));
  }
}

function* sortPriceSaga(action) {
  try {
    const {sortOrder} = action.payload;
    yield put(addLoading(true));

    yield delay(600);
    let result = yield getDataFromAPI();
    const sortedFlights = result.data.result.slice();
    if (sortOrder === 'hl') {
      // Ascending order
      sortedFlights.sort((a, b) => a.fare - b.fare);
    } else if (sortOrder === 'lh') {
      // Descending order
      sortedFlights.sort((a, b) => b.fare - a.fare);
    }
    yield put(addFlightData(sortedFlights));
  } catch (e) {
  } finally {
    yield put(addLoading(false));
  }
}
function* sortByStop(action) {
  try {
    yield put(addLoading(true));
    const {stopField} = action.payload;
    yield delay(600);
    let result = yield getDataFromAPI();
    const sorted = result.data.result.filter(
      flight => flight.displayData.stopInfo === stopField,
    );
    yield put(addFlightData(sorted));
  } catch (e) {
  } finally {
    yield put(addLoading(false));
  }
}
function* sortByAirline(action) {
  try {
    const {airline} = action.payload;
    yield put(addLoading(true));
    yield delay(600);
    let result = yield getDataFromAPI();

    const sortedFlights = result.data.result.filter(flight =>
      flight.displayData.airlines.some(
        airlineObj => airlineObj.airlineName === airline,
      ),
    );
    yield put(addFlightData(sortedFlights));
  } catch (e) {
  } finally {
    yield put(addLoading(false));
  }
}
export function* rootSaga() {
  yield all([
    takeLatest('GET_DATA', getFlightDataSaga),
    takeLatest('SORT_DATA', sortPriceSaga),
    takeLatest('SORT_AIRLINE', sortByAirline),
    takeLatest('SORT_STOP', sortByStop),
  ]);
}
