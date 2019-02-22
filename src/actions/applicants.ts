import { History } from "history";
import { UPDATE_APPLICANTS_LIST, CHANGE_POSITION } from "actionTypes/applicant";
import { Position } from "models/Applicant";

export const updateApplicantList = {
  request: (selectedIds: Set<string>) => ({
    type: UPDATE_APPLICANTS_LIST.REQUEST,
    payload: {
      selectedIds,
    },
  }),
  success: () => ({
    type: UPDATE_APPLICANTS_LIST.SUCCESS,
  }),
  failure: () => ({
    type: UPDATE_APPLICANTS_LIST.FAILURE,
  }),
};

export const changePosition = (position: Position, history: History<any>) => ({
  type: CHANGE_POSITION,
  payload: {
    position,
    history,
  },
});
