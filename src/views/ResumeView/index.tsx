import React, { PureComponent, Fragment } from "react";
import { Button, Selections } from "components";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  SingleLineQuestion,
  MultilineQuestion,
  SelectQuestion,
  QuestionType,
} from "models/Form";

import { AppState } from "reducers/rootReducer";

import { updateApplicantScore } from "actions/applicants";
import { pad } from "utils/pad";
import { getQuery } from "utils/historyHelper";
import { Score, Applicant } from "models/Applicant";

import MockedQuestions from "mocks/Forms";

import * as Styled from "./styled";

export interface Props extends RouteComponentProps {
  applicants: Applicant[];
  updateApplicantScore: (
    applicantId: string,
    scoreIdx: number,
    score: number,
  ) => void;
}

interface State {}

class ResumeView extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);
    const id = getQuery(props.history.location).id;
    const index = props.applicants.findIndex(
      (applicant) => applicant.id === id,
    );
  }

  public render() {
    let sum = 0;
    const { history, applicants } = this.props;
    const applicantId = getQuery(history.location).id;
    const selectedApplicant = applicants.find(
      (applicant) => applicant.id === applicantId,
    );
    if (!selectedApplicant) {
      return null;
    }
    const scores = selectedApplicant.scores;
    const notZero = scores.filter((score) => score.score !== 0).length;
    scores.forEach((score) => (sum += score.score));

    return (
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>지원자 상세정보</Styled.Title>
          <Styled.Profile>
            {this.renderProfile(selectedApplicant)}
          </Styled.Profile>
        </Styled.Header>
        <Styled.Body>
          <Styled.QuestionList>{this.renderQuestionList()}</Styled.QuestionList>
        </Styled.Body>
        <Styled.Bottom>
          <Styled.Section>
            <Styled.Label>점수 매기기</Styled.Label>
            <Styled.ScoreBoxes>
              {scores.map((score: Score, index: number) => (
                <Styled.ScoreRow key={index}>
                  <Styled.ScoreBox
                    type="number"
                    value={score.score}
                    onChange={this.handleChangeScoreBox(index)}
                  />
                  <Styled.Comment />
                </Styled.ScoreRow>
              ))}
            </Styled.ScoreBoxes>
            <Styled.avgScore>
              <span>평균 점수</span> <b>{selectedApplicant.avg}</b>점
            </Styled.avgScore>
            <Button primary>저장하기</Button>
          </Styled.Section>
          <Styled.PickSection>
            <Styled.PickButton>Pick 하기</Styled.PickButton>
          </Styled.PickSection>
        </Styled.Bottom>
      </Styled.Container>
    );
  }

  private handleChangeScoreBox = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    const id = getQuery(this.props.history.location).id;
    this.props.updateApplicantScore(id as string, index, Number(value));
  };

  private renderProfile = (applicant: Applicant) => {
    return (
      <Fragment>
        <Styled.ProfileImage src="https://placehold.it/100x100" />
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>이름</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>{applicant.name}</Styled.ProfileItemValue>
        </Styled.ProfileItem>
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>나이</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>25</Styled.ProfileItemValue>
        </Styled.ProfileItem>
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>이메일</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>{applicant.email}</Styled.ProfileItemValue>
        </Styled.ProfileItem>
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>핸드폰</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>{applicant.phone}</Styled.ProfileItemValue>
        </Styled.ProfileItem>
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>직업</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>학생</Styled.ProfileItemValue>
        </Styled.ProfileItem>
      </Fragment>
    );
  };

  private renderQuestionList = () => {
    return MockedQuestions.map((item, index) => {
      let answer;
      if (item.type === QuestionType.SingleLine) {
        const question = item as SingleLineQuestion;
        answer = <Styled.Answer>{question.value}</Styled.Answer>;
      } else if (item.type === QuestionType.MultiLine) {
        const question = item as MultilineQuestion;
        answer = <Styled.Answer>{question.value}</Styled.Answer>;
      } else if (item.type === QuestionType.Select) {
        const question = item as SelectQuestion;
        answer = <Selections question={question} selectable={false} />;
      }
      return (
        <Styled.Question key={`${item.title}::${index}`}>
          <Styled.QuestionTitle>
            <Styled.Index>{pad("00", index + 1)}</Styled.Index>
            <div>{item.title}</div>
          </Styled.QuestionTitle>
          <Styled.AnswerRight>{answer}</Styled.AnswerRight>
        </Styled.Question>
      );
    });
  };
}

const mapStateToProps = (state: AppState) => ({
  applicants: state.applicantReducer.applicants,
});
const mapDispatchToProps = {
  updateApplicantScore,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(withConnect(ResumeView));
