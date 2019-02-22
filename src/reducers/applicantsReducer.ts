import { Action } from "models/Redux";
import { Applicant, Position } from "models/Applicant";
import { UPDATE_APPLICANTS_LIST, CHANGE_POSITION } from "actionTypes/applicant";
import { History } from "history";
import qs from "querystring";

export interface State {
  passList: Applicant[];
  failList: Applicant[];
  selectedPosition: Position;
}

const initialState: State = {
  passList: [],
  failList: [],
  selectedPosition: Position.Developer,
};

export const reducer = (
  state: State = initialState,
  action: Action<any>,
): State => {
  switch (action.type) {
    case CHANGE_POSITION: {
      const {
        position,
        history,
      }: { position: Position; history: History<any> } = action.payload;

      history.push({
        pathname: history.location.pathname,
        search: qs.stringify({
          ...qs.parse(history.location.search.slice(1)),
          tab: position,
        }),
      });

      return {
        ...state,
        selectedPosition: position,
      };
    }
    case UPDATE_APPLICANTS_LIST.REQUEST: {
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
