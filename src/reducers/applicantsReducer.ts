import { Action } from "models/Redux";
import { Applicant, Position } from "models/Applicant";
import {
  UPDATE_APPLICANTS_LIST,
  CHANGE_POSITION,
  CLEAR_APPLICANTS_LIST,
  UPDATE_APPLICANT_SCORE,
} from "actionTypes/applicant";
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

    case CLEAR_APPLICANTS_LIST.REQUEST: {
      return {
        ...state,
        passList: [],
        failList: [],
      };
    }

    case UPDATE_APPLICANT_SCORE: {
      const {
        applicantId,
        scoreIdx,
        score,
      }: {
        applicantId: string;
        scoreIdx: number;
        score: number;
      } = action.payload;
      const { applicants } = state;
      const applicantIdx = applicants.findIndex(
        (item: Applicant) => item.id === applicantId,
      );

      if (applicantIdx === -1) {
        return {
          ...state,
        };
      }

      const applicant = applicants[applicantIdx];
      const scores = [
        ...applicant.scores.slice(0, scoreIdx),
        {
          score,
          comment: applicant.scores[scoreIdx].comment,
        },
        ...applicant.scores.slice(scoreIdx + 1),
      ];
      const sum = scores.reduce((a, b) => a + b.score, 0);
      const notZero = scores.filter((item) => item.score !== 0).length;

      return {
        ...state,
        applicants: [
          ...applicants.slice(0, applicantIdx),
          {
            ...applicant,
            scores,
            avg: Math.floor((sum / (notZero || 1)) * 100) / 100,
          },
          ...applicants.slice(applicantIdx + 1),
        ].sort((a, b) => b.avg - a.avg),
      };
    }
    default: {
      return state;
    }
  }
};
