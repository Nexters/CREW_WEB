import React, { PureComponent, HTMLAttributes } from "react";
import { ApplicantItem } from "components";

import { Applicant } from "models/Applicant";
import { ApplicantComponentType } from "components/ApplicantItem";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  applicants: Applicant[];
  type: ApplicantComponentType;
  checkedIdSet: Set<string>;
  onCheck: (applicant: Applicant) => void;
  onCancel?: (applicant: Applicant) => void;
}
interface State {}

class ApplicantsList extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    type: ApplicantComponentType.Default,
    checkedIdSet: new Set(),
  };

  public render() {
    const { applicants, type, onCheck, onCancel, checkedIdSet } = this.props;
    return (
      <Styled.List>
        {applicants.map((applicant, index) => (
          <Styled.Item key={applicant.id}>
            <ApplicantItem
              applicant={applicant}
              type={type}
              number={index + 1}
              onCheck={onCheck}
              onCancel={onCancel}
              isChecked={checkedIdSet.has(applicant.id)}
            />
          </Styled.Item>
        ))}
      </Styled.List>
    );
  }
}

export default ApplicantsList;
