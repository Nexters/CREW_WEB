import { Action } from "models/Redux";
import { Applicant } from "models/Applicant";
import { SAVE_APPLICANTS_LIST } from "actionTypes/applicant";
import { Question, QuestionType } from "models/Form";

export interface State {
  passList: Applicant[];
  failList: Applicant[];
}

const initialState: State = {
  passList: [],
  failList: [],
};

export const reducer = (
  state: State = initialState,
  action: Action<any>,
): State => {
  switch (action.type) {
    case SAVE_APPLICANTS_LIST.REQUEST: {
      const { allList, selectedList } = action.payload;
      const selectedIds = selectedList.map(
        (applicant: Applicant) => applicant.id,
      );
      const passIdSet = new Set(selectedIds);
      const failList = allList.filter(
        (applicant: Applicant) => !passIdSet.has(applicant.id),
      );

      return {
        ...state,
        passList: [...selectedList],
        failList: [...failList],
      };
    }
    default: {
      return state;
    }
  }
};
