import React, { PureComponent, HTMLAttributes } from "react";
import Select from "react-select";
import { ValueType } from "react-select/lib/types";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { QuestionType, SelectQuestion, Question } from "models/Form";
import { Selections } from "components";
import { pad } from "utils/pad";

import * as Styled from "./styled";
import mocked from "mocks/Forms";

interface QuestionOption {
  value: QuestionType;
  label: string;
}

const options: QuestionOption[] = [
  { value: QuestionType.SingleLine, label: "단문형" },
  { value: QuestionType.MultiLine, label: "장문형" },
  { value: QuestionType.Select, label: "객관식" },
];

export interface Props extends HTMLAttributes<HTMLDivElement> {
  question: Question;
  index: number;
}

interface State {
  selectedOption: QuestionOption;
  title: string;
  isRequired: boolean;
}

class FormItem extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);
    const { question } = props;
    if (question) {
      this.state = {
        title: question.title,
        isRequired: true,
        selectedOption: options[0],
      };
    }
  }

  public render() {
    const { index } = this.props;
    const { title, selectedOption, isRequired } = this.state;
    return (
      <Styled.Container {...this.props}>
        <Styled.BorderTop />
        <Styled.Left>
          <Styled.Index>{pad("00", index)}</Styled.Index>
          <TextField
            value={title}
            onChange={this.handleChangeTitle}
            style={{ width: "100%", fontSize: "23px" }}
            placeholder="질문을 입력해주세요"
          />
        </Styled.Left>
        <Styled.Right>
          <Styled.RightTop>
            <Select
              value={selectedOption}
              options={options}
              isSearchable={false}
              onChange={this.handleChangeQuestionType}
            />
          </Styled.RightTop>
          {this.renderRight(selectedOption.value)}
          <Styled.RightBottom>
            <i className="xi-trash-o" />
            <FormControlLabel
              control={
                <Switch
                  onChange={this.handleChangeRequired}
                  color="primary"
                  checked={isRequired}
                />
              }
              label="필수"
              labelPlacement="start"
            />
          </Styled.RightBottom>
        </Styled.Right>
      </Styled.Container>
    );
  }

  private handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      title: value,
    });
  };

  private handleChangeRequired = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    this.setState({ isRequired: event.target.checked });
  };

  private handleChangeQuestionType = (option: any) => {
    this.setState({
      selectedOption: option,
    });
  };

  private renderRight = (type: QuestionType) => {
    switch (type) {
      case QuestionType.SingleLine: {
        return <Styled.SingleLine type="text" />;
      }
      case QuestionType.MultiLine: {
        return <Styled.MultiLine />;
      }
      case QuestionType.Select: {
        return (
          <Selections
            question={mocked[1] as SelectQuestion}
            labelWidth="514px"
          />
        );
      }
    }
  };
}

export default FormItem;
