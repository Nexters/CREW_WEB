import { Position } from "models/Applicant";
export const getPositionKORLabel = (position: Position) => {
  switch (position) {
    case Position.Designer: {
      return "디자이너";
    }
    case Position.Developer: {
      return "개발자";
    }
    default: {
      return "NO-TYPE";
    }
  }
};
