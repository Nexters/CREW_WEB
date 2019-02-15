import React, { PureComponent } from "react";
import { Gnb, Button, ClassifiedList, ApplicantList } from "components";

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
        <Gnb title='서류심사' subTitle='지원자관리' />
        <Styled.Main>
          <Styled.Body>
            <Styled.Left>
              <Styled.LeftHeader>
                순서, 프로필, 이름, 평가상태, 점수
              </Styled.LeftHeader>
              <ApplicantList applicants={applicants} />
            </Styled.Left>
            <Styled.Right>
              <ClassifiedList title='합격자 리스트' applicants={applicants} />
              <Button primary>메일 보내기</Button>
              <ClassifiedList title='불합격자 리스트' applicants={applicants} />
              <Button primary>메일 보내기</Button>
            </Styled.Right>
          </Styled.Body>
        </Styled.Main>
      </Styled.Container>
    );
  }
}

export default ApplicantView;
