import { Action } from "models/Redux";
import { Applicant, Position } from "models/Applicant";
import { UPDATE_APPLICANTS_LIST, CHANGE_POSITION } from "actionTypes/applicant";
import { History } from "history";

import { pushUrlQuery } from "utils/historyHelper";

import MockedApplicants from "mocks/Applicants";

export interface State {
  applicants: Applicant[];
  filteredApplicants: Applicant[];
  passList: Applicant[];
  failList: Applicant[];
  selectedPosition: Position;
  checkedIdSet: Set<string>;
}

const initialState: State = {
  applicants: MockedApplicants,
  filteredApplicants: [],
  passList: [],
  failList: [],
  selectedPosition: Position.Developer,
  checkedIdSet: new Set(),
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
      pushUrlQuery(history, {
        tab: position,
      });

      const filteredApplicants = state.applicants.filter(
        (applicant) => applicant.position === position,
      );

      return {
        ...state,
        selectedPosition: position,
        filteredApplicants: [...filteredApplicants],
        passList: [],
        failList: [],
      };
    }

    case UPDATE_APPLICANTS_LIST.REQUEST: {
      const { selectedIds } = action.payload;
      const { filteredApplicants } = state;
      const passList: Applicant[] = [];
      const failList: Applicant[] = [];
      filteredApplicants.map((applicant: Applicant) => {
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
