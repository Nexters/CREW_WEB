import React, { PureComponent, HTMLAttributes } from "react";
import { QuestionType, SelectQuestion } from "models/Form";
import { Selections } from "components";

import * as Styled from "./styled";
import mocked from "mocks/Forms";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  type: QuestionType;
  index: number;
  title: string;
}

interface State {}

class FormItem extends PureComponent<Props, State> {
  public render() {
    const { index, title, type } = this.props;
    return (
      <Styled.Container {...this.props}>
        <Styled.BorderTop />
        <Styled.Left>
          <Styled.Index>{this.pad(index)}</Styled.Index>
          <Styled.Title>{title}</Styled.Title>
        </Styled.Left>
        <Styled.Right>{this.renderRight(type)}</Styled.Right>
      </Styled.Container>
    );
  }

  private pad = (number: number) => {
    const base = "00";
    return (
      base.slice(0, base.length - number.toString().length) + number.toString()
    );
  };

  private renderRight = (type: QuestionType) => {
    switch (type) {
      case QuestionType.SingleLine: {
        return <Styled.SingleLine type='text' />;
      }
      case QuestionType.MultiLine: {
        return <Styled.MultiLine />;
      }
      case QuestionType.Select: {
        return <Selections question={mocked[1] as SelectQuestion} />;
      }
    }
  };
}

export default FormItem;
