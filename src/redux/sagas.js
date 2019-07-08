import { fork } from "redux-saga/effects";
import { sagas as deviceReadingsWactherSagas } from "../containers/deviceReadings/duck";

export default function* rootSaga() {
  for (let saga of deviceReadingsWactherSagas) {
    yield fork(saga);
  }
}
