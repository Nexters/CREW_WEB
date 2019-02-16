import React, { PureComponent, HTMLAttributes } from "react";
import Select from "react-select";
import TextField from "@material-ui/core/TextField";

import { QuestionType, SelectQuestion, Question } from "models/Form";
import { Selections } from "components";

import * as Styled from "./styled";
import mocked from "mocks/Forms";

const options = [
  { value: QuestionType.SingleLine, label: "단문형" },
  { value: QuestionType.MultiLine, label: "장문형" },
  { value: QuestionType.Select, label: "객관식" }
];

export interface Props extends HTMLAttributes<HTMLDivElement> {
  question: Question;
  index: number;
}

interface State {
  title: string;
}

class FormItem extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);
    const { question } = props;
    if (question) {
      this.state = {
        title: question.title
      };
    }
  }

  public render() {
    const { index, question } = this.props;
    const { title } = this.state;
    return (
      <Styled.Container {...this.props}>
        <Styled.BorderTop />
        <Styled.Left>
          <Styled.Index>{this.pad(index)}</Styled.Index>
          <TextField
            value={title}
            onChange={this.handleChangeTitle}
            style={{ width: "100%", fontSize: "23px" }}
            placeholder='질문을 입력해주세요'
          />
        </Styled.Left>
        <Styled.Right>
          <Select value={options[0]} options={options} isSearchable={false} />
          {this.renderRight(question.type)}
        </Styled.Right>
      </Styled.Container>
    );
  }

  private handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      title: value
    });
  };

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
        return (
          <Selections
            question={mocked[1] as SelectQuestion}
            labelWidth='514px'
          />
        );
      }
    }
  };
}

export default FormItem;
