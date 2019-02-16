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

      const failList = allList.filter((applicant: Applicant) => {
        const idx = selectedList.findIndex(
          (item: Applicant) => item.id === applicant.id,
        );
        return idx === -1;
      });

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
