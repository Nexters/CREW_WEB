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
  saveApplicantsList: (allList: Applicant[], selectedIds: Set<string>) => void;
}

interface State {
  selectedApplicantIds: Set<string>;
}

class ApplicantView extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    applicants: MockedApplicants,
  };

  public constructor(props: Props) {
    super(props);

    this.state = {
      selectedApplicantIds: new Set(),
    };
  }

  public render() {
    const { applicants, passList, failList } = this.props;
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
              <ClassifiedList title="합격자 리스트" applicants={passList} />
              <Styled.RightButtonWrapper>
                <Button primary>메일 보내기</Button>
              </Styled.RightButtonWrapper>
              <ClassifiedList title="불합격자 리스트" applicants={failList} />
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
    const { selectedApplicantIds } = this.state;
    this.props.saveApplicantsList(applicants, selectedApplicantIds);
  };

  private selectApplicant = (applicant: Applicant) => {
    const { selectedApplicantIds } = this.state;
    if (selectedApplicantIds.has(applicant.id)) {
      selectedApplicantIds.delete(applicant.id);
    } else {
      selectedApplicantIds.add(applicant.id);
    }
    this.setState({
      selectedApplicantIds: new Set([...selectedApplicantIds.values()]),
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
