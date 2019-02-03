import React, { PureComponent } from "react";
import { Gnb, Paper, ClassifiedList, ApplicantList } from "components";

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
      <Styled.Container>
        <Gnb title="서류심사" subTitle="지원자관리" />
        <Styled.Main>
          <Styled.Body>
            <Styled.Left>
              <ApplicantList applicants={applicants} />
            </Styled.Left>
            <Styled.Right>
              <ClassifiedList title="합격자 리스트" applicants={applicants} />
              <ClassifiedList title="불합격자 리스트" applicants={applicants} />
            </Styled.Right>
          </Styled.Body>
        </Styled.Main>
      </Styled.Container>
    );
  }
}

export default ApplicantView;
