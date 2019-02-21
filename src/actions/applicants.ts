import { UPDATE_APPLICANTS_LIST, CHANGE_POSITION } from "actionTypes/applicant";
import { Applicant, Position } from "models/Applicant";

export const updateApplicantList = {
  request: (allList: Applicant[], selectedIds: Set<string>) => ({
    type: UPDATE_APPLICANTS_LIST.REQUEST,
    payload: {
      allList,
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

export const changePosition = (position: Position) => ({
  type: CHANGE_POSITION,
  payload: {
    position,
  },
});
