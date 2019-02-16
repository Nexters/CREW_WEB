import { Applicant } from "models/Applicant";
import { SAVE_APPLICANTS_LIST } from "actionTypes/applicant";

export const saveAppicantsList = {
  request: (allList: Applicant[], selectedList: Applicant[]) => ({
    type: SAVE_APPLICANTS_LIST.REQUEST,
    payload: {
      allList,
      selectedList,
    },
  }),
  success: () => ({
    type: SAVE_APPLICANTS_LIST.SUCCESS,
  }),
  failure: () => ({
    type: SAVE_APPLICANTS_LIST.FAILURE,
  }),
};
