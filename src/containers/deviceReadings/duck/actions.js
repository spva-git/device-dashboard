import types from "./types";

export default {
  requestDeviceReadings: () => ({ type: types.REQUEST_DEVICE_READINGS }),
  receiveDeviceReadings: payload => ({ type: types.RECEIVE_DEVICE_READINGS, payload })
};
