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
      const { allList, selectedIds } = action.payload;
      const passList: Applicant[] = [];
      const failList: Applicant[] = [];
      allList.map((applicant: Applicant) => {
        if (selectedIds.has(applicant.id)) {
          passList.push(applicant);
        } else {
          failList.push(applicant);
        }
      });

      return {
        ...state,
        passList,
        failList,
      };
    }
    default: {
      return state;
    }
  }
};
