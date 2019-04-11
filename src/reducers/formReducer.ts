import { Action } from "models/Redux";
import uuid from "uuid/v4";
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
        id: uuid(),
        type: QuestionType.SingleLine,
        title: "",
        placeholder: "",
        isRequired: false,
        value: "",
      };
      return {
        ...state,
        questions: [...state.questions, newItem],
      };
    }
    case UPDATE_FORM_ITEM.REQUEST: {
      const { id, value } = action.payload;
      const idx = state.questions.findIndex((question) => question.id === id);
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, idx),
          { ...state.questions[idx], value },
          ...state.questions.slice(idx + 1),
        ],
      };
    }
    case REMOVE_FORM_ITEM.REQUEST: {
      const { idx } = action.payload;

      return {
        ...state,
        questions: [
          ...state.questions.slice(0, idx),
          ...state.questions.slice(idx + 1),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
