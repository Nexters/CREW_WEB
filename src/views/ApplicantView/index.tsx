import React, { PureComponent, ComponentType } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import url from "url";
import qs from "querystring";

import { Gnb, Button, ClassifiedList, ApplicantList } from "components";
import { AppState } from "reducers/rootReducer";

import { updateApplicantList } from "actions/applicants";
import { Applicant, Position } from "models/Applicant";

import * as Styled from "./styled";

interface Props extends RouteComponentProps {
  applicants: Applicant[];
  passList: Applicant[];
  failList: Applicant[];
  updateApplicantList: (selectedIds: Set<string>) => void;
}

interface State {
  checkedIdSet: Set<string>;
  filteredApplicants: Applicant[];
}

class ApplicantView extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      checkedIdSet: new Set(),
      filteredApplicants: this.filterApplicant(props.applicants),
    };
  }

  public componentDidUpdate(prevProps: Props) {
    const isChangedApplicants = prevProps.applicants !== this.props.applicants;
    if (isChangedApplicants) {
      this.setState({
        filteredApplicants: this.filterApplicant(this.props.applicants),
      });
    }
  }

  public render() {
    const { passList, failList } = this.props;
    const { checkedIdSet, filteredApplicants } = this.state;

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
                applicants={filteredApplicants}
                checkedIdSet={checkedIdSet}
                onCheck={this.selectApplicant}
              />
              <Styled.LeftButtonContainer>
                <Button onClick={this.handleClickSaveButton}>초기화하기</Button>
                <Button onClick={this.handleClickSaveButton} primary>
                  저장하기
                </Button>
              </Styled.LeftButtonContainer>
            </Styled.Left>
            <Styled.Right>
              <Styled.RightWrapper>
                <ClassifiedList
                  title="합격자 리스트"
                  applicants={passList}
                  onCancel={this.cancelSelectApplicant}
                />

                <Button primary>메일 보내기</Button>
              </Styled.RightWrapper>
              <Styled.RightWrapper>
                <ClassifiedList
                  title="불합격자 리스트"
                  applicants={failList}
                  onCancel={this.cancelSelectApplicant}
                />

                <Button primary>메일 보내기</Button>
              </Styled.RightWrapper>
            </Styled.Right>
          </Styled.Body>
        </Styled.Main>
      </Styled.Container>
    );
  }

  private filterApplicant = (applicants: Applicant[]) => {
    const { history } = this.props;
    const query = qs.parse(url.parse(history.location.search).query || "");
    switch (query.tab) {
      case "developer": {
        return applicants.filter(
          (applicant) => applicant.position === Position.Developer,
        );
      }
      case "designer": {
        return applicants.filter(
          (applicant) => applicant.position === Position.Designer,
        );
      }
      default: {
        return applicants.filter(
          (applicant) => applicant.position === Position.Developer,
        );
      }
    }
  };

  private handleClickSaveButton = () => {
    const { checkedIdSet } = this.state;
    this.props.updateApplicantList(checkedIdSet);
  };

  private selectApplicant = (applicant: Applicant) => {
    const { checkedIdSet } = this.state;
    if (checkedIdSet.has(applicant.id)) {
      checkedIdSet.delete(applicant.id);
    } else {
      checkedIdSet.add(applicant.id);
    }
    this.setState({
      checkedIdSet: new Set([...checkedIdSet.values()]),
    });
  };

  private cancelSelectApplicant = (applicant: Applicant) => {
    const { checkedIdSet } = this.state;
    if (checkedIdSet.has(applicant.id)) {
      checkedIdSet.delete(applicant.id);
    } else {
      checkedIdSet.add(applicant.id);
    }
    this.setState({
      checkedIdSet: new Set([...checkedIdSet.values()]),
    });
    this.props.updateApplicantList(checkedIdSet);
  };
}

const mapStateToProps = (state: AppState) => ({
  applicants: state.applicantReducer.filteredApplicants,
  passList: state.applicantReducer.passList,
  failList: state.applicantReducer.failList,
});

const mapDispatchToProps = {
  updateApplicantList: updateApplicantList.request,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(ApplicantView) as ComponentType;
