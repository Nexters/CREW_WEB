import {
  CREATE_FORM_ITEM,
  UPDATE_FORM_ITEM,
  REMOVE_FORM_ITEM
} from "actionTypes/form";

export const createFormItem = {
  request: () => ({
    type: CREATE_FORM_ITEM.REQUEST
  }),
  success: () => ({
    type: CREATE_FORM_ITEM.SUCCESS
  }),
  failure: () => ({
    type: CREATE_FORM_ITEM.FAILURE
  })
};

export const updateFormItem = {
  request: () => ({
    type: UPDATE_FORM_ITEM.REQUEST
  }),
  success: () => ({
    type: UPDATE_FORM_ITEM.SUCCESS
  }),
  failure: () => ({
    type: UPDATE_FORM_ITEM.FAILURE
  })
};

export const removeFormItem = {
  request: () => ({
    type: REMOVE_FORM_ITEM.REQUEST
  }),
  success: () => ({
    type: REMOVE_FORM_ITEM.SUCCESS
  }),
  failure: () => ({
    type: REMOVE_FORM_ITEM.FAILURE
  })
};
