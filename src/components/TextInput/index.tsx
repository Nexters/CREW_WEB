import React, { PureComponent, ChangeEvent, HTMLAttributes } from "react";
import { InputType } from "models/Input";
import { TextField } from "@material-ui/core";
import * as Styled from "./styled";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type: InputType;
  label: string;
  placeHolder?: string;
}

interface State {
  textField: string;
  isValidate: boolean;
}

class TextInput extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textField: "",
      isValidate: true,
    };
  }

  public render() {
    return (
      <TextField
        label={this.props.label}
        placeholder={this.props.placeholder}
        onChange={this.handleChangeTextField}
        margin="normal"
      />
    );
  }

  private handleChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const type = this.props.type;

    switch (type) {
      case InputType.STRING: {
        this.setState({
          textField: value,
          isValidate: true,
        });
      }
      case InputType.NUMBER: {
        if (this.isValidateNumber(value)) {
          this.setState({
            textField: value,
            isValidate: true,
          });
        }
        break;
      }
      case InputType.EMAIL: {
        this.setState({
          textField: value,
          isValidate: this.isValidateEmail(value),
        });
        break;
      }
      case InputType.PHONE: {
        this.setState({
          textField: value,
          isValidate: this.isValidatePhone(value),
        });
        break;
      }
    }
  };

  private isValidateNumber(text: string): boolean {
    const pattern = /^\d+$/;
    return pattern.test(text);
  }

  private isValidateEmail(text: string): boolean {
    const pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return pattern.test(text);
  }

  private isValidatePhone(text: string): boolean {
    const patternA = /^\d{3}-\d{3,4}-\d{4}$/;
    const patternB = /^\d{10,11}$/;

    return patternA.test(text) || patternB.test(text);
  }
}

export default TextInput;
