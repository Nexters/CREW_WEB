import React, { PureComponent } from "react";
import { ApplicantItem, Paper, ClassifiedList } from "components";

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
        <Styled.Main>
          <Styled.Header>
            <Styled.Title>지원자 리스트</Styled.Title>
            <div>1,2,3</div>
          </Styled.Header>
          <Styled.Body>
            <Styled.Left>
              <Paper style={{ padding: "27px 45px" }} width="620px">
                <Styled.ApplicantList>
                  {applicants.map((applicant) => (
                    <Styled.ApplicantItem key={applicant.id}>
                      <ApplicantItem applicant={applicant} />
                    </Styled.ApplicantItem>
                  ))}
                </Styled.ApplicantList>
              </Paper>
            </Styled.Left>
            <Styled.Right>
              <ClassifiedList title="합격자 리스트" />
              <ClassifiedList title="불합격자 리스트" />
            </Styled.Right>
          </Styled.Body>
        </Styled.Main>
      </Styled.Container>
    );
  }
}

export default ApplicantView;
