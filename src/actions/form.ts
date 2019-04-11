import {
  NEXT_QUESTION,
  PREV_QUESTION,
  CREATE_FORM_ITEM,
  UPDATE_FORM_ITEM,
  REMOVE_FORM_ITEM,
} from "actionTypes/form";

import { QuestionValue } from "models/Form";

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const prevQuestion = () => ({
  type: PREV_QUESTION,
});

export const createFormItem = {
  request: () => ({
    type: CREATE_FORM_ITEM.REQUEST,
  }),
  success: () => ({
    type: CREATE_FORM_ITEM.SUCCESS,
  }),
  failure: () => ({
    type: CREATE_FORM_ITEM.FAILURE,
  }),
};

export const updateFormItem = {
  request: (formItemId: string, value: QuestionValue) => ({
    type: UPDATE_FORM_ITEM.REQUEST,
    payload: {
      id: formItemId,
      value,
    },
  }),
  success: () => ({
    type: UPDATE_FORM_ITEM.SUCCESS,
  }),
  failure: () => ({
    type: UPDATE_FORM_ITEM.FAILURE,
  }),
};

export const removeFormItem = {
  request: (idx: number) => ({
    type: REMOVE_FORM_ITEM.REQUEST,
    payload: {
      idx,
    },
  }),
  success: () => ({
    type: REMOVE_FORM_ITEM.SUCCESS,
  }),
  failure: () => ({
    type: REMOVE_FORM_ITEM.FAILURE,
  }),
};
