import { Action } from "models/Redux";
import {
  CREATE_FORM_ITEM,
  UPDATE_FORM_ITEM,
  REMOVE_FORM_ITEM,
} from "actionTypes/form";
import { Question, QuestionType } from "models/Form";

export interface State {
  questions: Question[];
}
const initialState: State = {
  questions: [],
};

export const reducer = (
  state: State = initialState,
  action: Action<any>,
): State => {
  switch (action.type) {
    case CREATE_FORM_ITEM.REQUEST: {
      const newItem: Question = {
        type: QuestionType.SingleLine,
        title: "",
        placeholder: "",
        isRequired: false,
      };
      return {
        ...state,
        questions: [...state.questions, newItem],
      };
    }
    default: {
      return state;
    }
  }
};
