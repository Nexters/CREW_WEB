import React, { PureComponent, HTMLAttributes } from "react";
import { ApplicantItem } from "components";

import { Applicant } from "models/Applicant";
import { ApplicantComponentType } from "components/ApplicantItem";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  applicants: Applicant[];
  type: ApplicantComponentType;
}
interface State {}

class ApplicantsList extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    type: "default"
  };

  public render() {
    const { applicants, type } = this.props;
    return (
      <Styled.List>
        {applicants.map((applicant) => (
          <Styled.Item key={applicant.id}>
            <ApplicantItem applicant={applicant} type={type} />
          </Styled.Item>
        ))}
      </Styled.List>
    );
  }
}

export default ApplicantsList;
