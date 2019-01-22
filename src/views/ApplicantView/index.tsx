import React, { PureComponent } from "react";

import { ApplicantItem } from "components";
import { Applicant } from "models/Applicant";
import MockedApplicants from "mocks/Applicants";

import * as Styled from "./styled";

interface Props {
  applicants: Applicant[];
}

class ApplicantView extends PureComponent<Props> {
  static defaultProps: Props = {
    applicants: MockedApplicants
  };
  public render() {
    const { applicants } = this.props;
    return (
      <div>
        <Styled.ApplicantList>
          {applicants.map((applicant) => (
            <li key={applicant.id}>
              <ApplicantItem applicant={applicant} />
            </li>
          ))}
        </Styled.ApplicantList>
      </div>
    );
  }
}

export default ApplicantView;
