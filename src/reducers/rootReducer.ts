import { combineReducers } from "redux";
import * as formReducer from "./formReducer";

export interface AppState {
  formReducer: formReducer.State;
}

const rootReducer = combineReducers({
  formReducer: formReducer.reducer
});

export default rootReducer;
