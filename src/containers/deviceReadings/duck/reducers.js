import types from "./types";
import { appActionTypes } from "../../../modules/duck";

const defaultState = {
  items: [],
  loading: false
};

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST_DEVICE_READINGS:
      return {
        ...prevState,
        loading: true
      };
    case types.RECEIVE_DEVICE_READINGS:
      return {
        ...prevState,
        loading: false,
        items: action.payload.response
      };
    case appActionTypes.SERVICE_CALL_FAILED:
      return {
        ...prevState,
        loading: false
      };
    default:
      return prevState;
  }
};
