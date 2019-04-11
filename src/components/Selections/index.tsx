import React, { PureComponent, HTMLAttributes } from "react";
import { SelectQuestion } from "models/Form";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  question: SelectQuestion;
  labelWidth?: string;
  selectable: boolean;
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
}

export default Selections;
