import types from "./types";

export default {
  serviceErrorReceived: payload => ({
    type: types.SERVICE_CALL_FAILED,
    payload
  })
};
