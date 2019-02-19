import { Action } from "models/Redux";
import {
  NEXT_QUESTION,
  PREV_QUESTION,
  CREATE_FORM_ITEM,
  UPDATE_FORM_ITEM,
  REMOVE_FORM_ITEM,
} from "actionTypes/form";
import { Question, QuestionType } from "models/Form";

import questions from "mocks/Forms";

export interface State {
  questions: Question[];
  questionNumber: number;
}
const initialState: State = {
  questions: [...questions],
  questionNumber: 1,
};

export const reducer = (
  state: State = initialState,
  action: Action<any>,
): State => {
  switch (action.type) {
    case PREV_QUESTION: {
      const { questionNumber } = state;
      if (questionNumber <= 1) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        questionNumber: questionNumber - 1,
      };
    }
    case NEXT_QUESTION: {
      const { questionNumber, questions } = state;
      if (questionNumber >= questions.length) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        questionNumber: questionNumber + 1,
      };
    }
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
