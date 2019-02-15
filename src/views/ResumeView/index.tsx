import React, { PureComponent, Fragment } from "react";
import { Button, Selections } from "components";
import {
  SingleLineQuestion,
  MultilineQuestion,
  SelectQuestion,
  QuestionType
} from "models/Form";

import * as Styled from "./styled";

import MockedQuestions from "mocks/Forms";

class ResumeView extends PureComponent {
  public render() {
    return (
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>지원자 상세정보</Styled.Title>
          <Styled.Profile>{this.renderProfile()}</Styled.Profile>
        </Styled.Header>
        <Styled.Body>
          <Styled.QuestionList>{this.renderQuestionList()}</Styled.QuestionList>
        </Styled.Body>
        <Styled.Bottom>
          <Styled.Section>
            <Styled.Label>코멘트</Styled.Label>
            <Styled.Comment />
            <Button primary>저장하기</Button>
          </Styled.Section>
          <Styled.Section>
            <Styled.Label>점수 매기기</Styled.Label>
            <Styled.ScoreBoxes>
              <Styled.ScoreBox type='number' />
              <Styled.ScoreBox type='number' />
              <Styled.ScoreBox type='number' />
              <Styled.ScoreBox type='number' />
              <Styled.ScoreBox type='number' />
            </Styled.ScoreBoxes>
            <Styled.avgScore>
              <span>평균 점수</span> <b>0</b>점
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

  private pad = (number: number) => {
    const based = "00";
    return (
      based.slice(0, based.length - number.toString().length) +
      number.toString()
    );
  };

  private renderProfile = () => {
    return (
      <Fragment>
        <Styled.ProfileImage src='https://placehold.it/100x100' />
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>이름</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>장혜연</Styled.ProfileItemValue>
        </Styled.ProfileItem>
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>나이</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>25</Styled.ProfileItemValue>
        </Styled.ProfileItem>
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>이메일</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>
            nayunhwan.dev@gmail.com
          </Styled.ProfileItemValue>
        </Styled.ProfileItem>
        <Styled.ProfileItem>
          <Styled.ProfileItemLabel>핸드폰</Styled.ProfileItemLabel>
          <Styled.ProfileItemValue>010-8436-9288</Styled.ProfileItemValue>
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
        answer = <Selections question={question} />;
      }
      return (
        <Styled.Question key={`${item.title}::${index}`}>
          <Styled.QuestionTitle>
            <Styled.Index>{this.pad(index + 1)}</Styled.Index>
            <div>{item.title}</div>
          </Styled.QuestionTitle>
          {answer}
        </Styled.Question>
      );
    });
  };
}

export default ResumeView;
