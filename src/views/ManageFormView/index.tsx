import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { AppState } from "reducers/rootReducer";
import { createFormItem } from "actions/form";

import { Question, QuestionType } from "models/Form";
import { Gnb, FormItem, AddButton } from "components";

import * as Styled from "./styled";

interface Props {
  createFormItem: () => void;
  questions: Question[];
}
interface State {}

class ManageForm extends PureComponent<Props, State> {
  public render() {
    const { questions } = this.props;
    return (
      <Styled.Container>
        <Gnb title='서류심사' subTitle='지원자관리' />
        <Styled.Body>
          <Styled.FormList>
            {questions.map((question, idx) => (
              <FormItem
                question={question}
                key={`${question.title}__${idx}`}
                index={idx + 1}
              />
            ))}
          </Styled.FormList>
        </Styled.Body>
        <Styled.Bottom>
          <AddButton size={80} onClick={this.handleClickAddButton} />
        </Styled.Bottom>
      </Styled.Container>
    );
  }

  private handleClickAddButton = () => {
    this.props.createFormItem();
  };
}

const mapStateToProps = (state: AppState) => ({
  questions: state.formReducer.questions
});

const mapDispatchToProps = {
  createFormItem: createFormItem.request
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect(ManageForm);
