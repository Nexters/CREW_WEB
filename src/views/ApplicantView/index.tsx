import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Gnb, Button, ClassifiedList, ApplicantList } from "components";
import { AppState } from "reducers/rootReducer";

import { saveApplicantsList } from "actions/applicants";
import { Applicant } from "models/Applicant";
import MockedApplicants from "mocks/Applicants";

import * as Styled from "./styled";

interface Props {
  applicants: Applicant[];
  passList: Applicant[];
  failList: Applicant[];
  saveApplicantsList: (allList: Applicant[], selectedList: Applicant[]) => void;
}

interface State {
  selectedList: Applicant[];
}

class ApplicantView extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    applicants: MockedApplicants,
  };

  public constructor(props: Props) {
    super(props);

    this.state = {
      selectedList: [],
    };
  }

  public render() {
    const { applicants } = this.props;
    return (
      <Styled.Container>
        <Gnb title="서류심사" subTitle="지원자관리" />
        <Styled.Main>
          <Styled.Body>
            <Styled.Left>
              <Styled.LeftHeader>
                순서, 프로필, 이름, 평가상태, 점수
              </Styled.LeftHeader>
              <ApplicantList
                applicants={applicants}
                onCheck={this.selectApplicant}
              />
              <button onClick={this.handleClickSaveButton}>save</button>
            </Styled.Left>
            <Styled.Right>
              <ClassifiedList title="합격자 리스트" applicants={applicants} />
              <Styled.RightButtonWrapper>
                <Button primary>메일 보내기</Button>
              </Styled.RightButtonWrapper>
              <ClassifiedList title="불합격자 리스트" applicants={applicants} />
              <Styled.RightButtonWrapper>
                <Button primary>메일 보내기</Button>
              </Styled.RightButtonWrapper>
            </Styled.Right>
          </Styled.Body>
        </Styled.Main>
      </Styled.Container>
    );
  }

  private handleClickSaveButton = () => {
    const { applicants } = this.props;
    const { selectedList } = this.state;
    this.props.saveApplicantsList(applicants, selectedList);
  };

  private selectApplicant = (applicant: Applicant) => {
    this.setState({
      selectedList: [...this.state.selectedList, applicant],
    });
  };
}

const mapStateToProps = (state: AppState) => ({
  passList: state.applicantReducer.passList,
  failList: state.applicantReducer.failList,
});

const mapDispatchToProps = {
  saveApplicantsList: saveApplicantsList.request,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(ApplicantView);
