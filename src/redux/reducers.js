import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import deviceReadings from "../containers/deviceReadings/duck";

const rootReducer = combineReducers({
  form: formReducer,
  deviceReadings
});

export default rootReducer;
