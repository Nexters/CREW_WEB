import { Applicant } from "models/Applicant";
import { SAVE_APPLICANTS_LIST } from "actionTypes/applicant";

export const saveApplicantsList = {
  request: (allList: Applicant[], selectedIds: Set<string>) => ({
    type: SAVE_APPLICANTS_LIST.REQUEST,
    payload: {
      allList,
      selectedIds,
    },
  }),
  success: () => ({
    type: SAVE_APPLICANTS_LIST.SUCCESS,
  }),
  failure: () => ({
    type: SAVE_APPLICANTS_LIST.FAILURE,
  }),
};
