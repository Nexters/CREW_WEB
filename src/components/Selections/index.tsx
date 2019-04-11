import React, { PureComponent, HTMLAttributes } from "react";
import { SelectQuestion } from "models/Form";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  question: SelectQuestion;
  selectable: boolean;
  labelWidth?: string;
  onClickOption?: (id: string, value: number) => void;
}
interface State {}

class Selections extends PureComponent<Props, State> {
  public render() {
    const { question, labelWidth } = this.props;
    return (
      <Styled.AnswerOptionList>
        {question.options.map((option, index) => (
          <Styled.AnswerOption
            key={option.key}
            isSelected={question.value === index}
            onClick={this.handleClickOption(index)}
          >
            <Styled.CheckCircle>
              {question.value === index && <i className="xi-check-min" />}
            </Styled.CheckCircle>
            <Styled.AnswerLabel width={labelWidth}>
              {option.value}
            </Styled.AnswerLabel>
          </Styled.AnswerOption>
        ))}
      </Styled.AnswerOptionList>
    );
  }

  private handleClickOption = (index: number) => () => {
    if (this.props.selectable && this.props.onClickOption) {
      this.props.onClickOption(this.props.question.id, index);
    }
  };
}

export default Selections;
