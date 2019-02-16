import { combineReducers } from "redux";
import * as formReducer from "./formReducer";
import * as applicantReducer from "./applicantsReducer";

export interface AppState {
  formReducer: formReducer.State;
  applicantReducer: applicantReducer.State;
}

const rootReducer = combineReducers({
  formReducer: formReducer.reducer,
  applicantReducer: applicantReducer.reducer,
});

export default rootReducer;
