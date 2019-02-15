import React, { PureComponent, HTMLAttributes } from "react";
import { QuestionType } from "models/Form";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  index: number;
  type: QuestionType;
}
interface State {}

class FormItem extends PureComponent<Props, State> {
  public render() {
    const { index } = this.props;
    return (
      <Styled.Container {...this.props}>
        <Styled.Left>
          <Styled.Index>{this.pad(index)}</Styled.Index>
          <Styled.Title>
            지원자가 NEXTERS에 지원하게 된 동기는 무엇인가요?
          </Styled.Title>
        </Styled.Left>
        <Styled.Right>2</Styled.Right>
      </Styled.Container>
    );
  }

  private pad = (number: number) => {
    const base = "00";
    return (
      base.slice(0, base.length - number.toString().length) + number.toString()
    );
  };
}

export default FormItem;
