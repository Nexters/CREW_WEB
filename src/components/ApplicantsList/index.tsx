import React, { PureComponent, HTMLAttributes } from "react";
import { ApplicantItem } from "components";

import { Applicant } from "models/Applicant";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  applicants: Applicant[];
}
interface State {}

class ApplicantsList extends PureComponent<Props, State> {
  public render() {
    const { applicants } = this.props;
    return (
      <Styled.List>
        {applicants.map((applicant) => (
          <Styled.Item key={applicant.id}>
            <ApplicantItem applicant={applicant} />
          </Styled.Item>
        ))}
      </Styled.List>
    );
  }
}

export default ApplicantsList;
