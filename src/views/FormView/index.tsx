import React, { PureComponent, ChangeEvent, ComponentType } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { AppState } from "reducers/rootReducer";

import { ProgressiveBar, Step } from "components";
import { Question } from "models/Form";
import { prevQuestion, nextQuestion } from "actions/form";

import * as Styled from "./styled";

interface Props extends RouteComponentProps {
  prevQuestion: () => void;
  nextQuestion: () => void;
  questions: Question[];
  questionNumber: number;
}
interface State {
  textField: string;
}

class FormView extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textField: "",
    };
  }

  public render() {
    const { questions, questionNumber } = this.props;
    const selectedQuestion = questions[questionNumber - 1];

    return (
      <Styled.FormView>
        <ProgressiveBar index={questionNumber} max={questions.length} />
        <Step maxStep={questions.length} current={questionNumber} />
        <Styled.LeftArrow onClick={this.handleClickArrow("LEFT")}>
          <Styled.Arrow className="xi-long-arrow-left" />
          <Styled.ArrowLabel>이전으로</Styled.ArrowLabel>
        </Styled.LeftArrow>
        <Styled.RightArrow onClick={this.handleClickArrow("RIGHT")}>
          <Styled.Arrow className="xi-long-arrow-right" />
          <Styled.ArrowLabel>다음으로</Styled.ArrowLabel>
        </Styled.RightArrow>
        <Styled.Body>
          <Styled.LeftContainer>
            <Styled.NumberText>02</Styled.NumberText>
            <Styled.TitleArea>{selectedQuestion.title}</Styled.TitleArea>
          </Styled.LeftContainer>
          <Styled.RightContainer>
            <Styled.AnswerContainer>
              <Styled.textarea />
              <Styled.btnSave>임시저장</Styled.btnSave>
            </Styled.AnswerContainer>
          </Styled.RightContainer>
        </Styled.Body>
      </Styled.FormView>
    );
  }

  private handleChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      textField: value,
    });
  };

  private handleClickArrow = (direction: "LEFT" | "RIGHT") => () => {
    if (direction === "LEFT") {
      this.props.prevQuestion();
    } else if (direction === "RIGHT") {
      this.props.nextQuestion();
    }
  };
}

const mapStateToProps = (state: AppState) => ({
  questions: state.formReducer.questions,
  questionNumber: state.formReducer.questionNumber,
});

const mapDispatchToProps = {
  prevQuestion,
  nextQuestion,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(FormView) as ComponentType;
