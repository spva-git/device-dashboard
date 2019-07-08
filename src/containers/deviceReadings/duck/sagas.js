import { put, call, takeLatest } from "redux-saga/effects";
import types from "./types";
import actions from "./actions";
import { appActions } from "../../../modules/duck";
import * as api from "./api";

function* loadDeviceReadings() {
  try {
    const response = yield call(api.fecthDeviceReadings);
    yield put(actions.receiveDeviceReadings({ response }));
  } catch (e) {
    console.error("Error encountered : ", e.message);
    yield put(appActions.serviceErrorReceived({ errorMessage: e.message }));
  }
}

function* watchloadDeviceReadings() {
  yield takeLatest(types.REQUEST_DEVICE_READINGS, loadDeviceReadings);
}

export default [watchloadDeviceReadings];
