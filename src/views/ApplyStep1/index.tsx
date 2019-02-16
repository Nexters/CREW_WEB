import React, { PureComponent, ChangeEvent } from 'react';
import {
  TextField
  // RadioGroup,
  // FormControlLabel,
  // Radio
} from '@material-ui/core';
import Step from '@material-ui/core/Step';
import * as Styled from './styled';

interface Props {}
interface State {
  textField: string;
}

class ApplyStep1 extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textField: ''
    };
  }
  public render() {
    return (
      <Styled.FormView>
        <Styled.LeftArrow>
          <i className=" xi-long-arrow-left xi-2x" />
          <Styled.arrowSubTitle>이전으로</Styled.arrowSubTitle>
        </Styled.LeftArrow>

        <Styled.RightArrow>
          <i className="xi-long-arrow-right xi-2x" />
          <Styled.arrowSubTitle>다음으로</Styled.arrowSubTitle>
        </Styled.RightArrow>
        <Styled.Container>
          <Styled.LeftContiainer>
            <Styled.NumberText>01</Styled.NumberText>
            <Styled.TitleArea>인적사항</Styled.TitleArea>
            <Styled.DescArea>
              자기소개서에 필요한 최소한의 데이터를 입력해주세요.
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
              <Styled.SelectWorkContainer>
                <Styled.SelectWork>직업</Styled.SelectWork>

                <Styled.RadiboButtonContainer>
                  <Styled.RadioButton>학생</Styled.RadioButton>
                  <Styled.RadioButton>취준생</Styled.RadioButton>
                  <Styled.RadioButton>직장인</Styled.RadioButton>
                </Styled.RadiboButtonContainer>
              </Styled.SelectWorkContainer>
            </Styled.TextinputContainer>

            <Styled.buttonContainer>
              <Styled.completeButton>임시저장</Styled.completeButton>
            </Styled.buttonContainer>
          </Styled.RightContiainer>
        </Styled.Container>
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

export default ApplyStep1;
