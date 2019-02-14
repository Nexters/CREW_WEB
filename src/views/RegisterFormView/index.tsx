import React, { PureComponent, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import * as Styled from './styled';
import { stripLeadingSlash } from 'history/PathUtils';

interface Props {}
interface State {
  textField: string;
}

class RegisterFormView extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textField: ''
    };
  }
  public render() {
    return (
      <Styled.FormView>
        <Styled.LeftContiainer>
          <Styled.TitleArea>회원가입</Styled.TitleArea>
          <Styled.DescArea>
            회원가입에 필요한 최소한의 데이터를 입력해주세요.
          </Styled.DescArea>
        </Styled.LeftContiainer>
        <Styled.RightContiainer>
          <Styled.TextinputContainer>
            <TextField
              label="이름"
              value={this.state.textField}
              onChange={this.handleChangeTextField}
              margin="normal"
            />
            <TextField
              label="나이"
              value={this.state.textField}
              onChange={this.handleChangeTextField}
              margin="normal"
            />
            <TextField
              label="E-mail"
              value={this.state.textField}
              onChange={this.handleChangeTextField}
              margin="normal"
            />
            <TextField
              label="전화번호"
              value={this.state.textField}
              onChange={this.handleChangeTextField}
              margin="normal"
            />
            <Styled.completeButton>완료</Styled.completeButton>
          </Styled.TextinputContainer>
        </Styled.RightContiainer>
      </Styled.FormView>
    );
  }

  private handleChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      textField: value
    });
  };
}

export default RegisterFormView;
