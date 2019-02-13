import React, { PureComponent, ChangeEvent } from 'react';
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import * as Styled from './styled';
import { stripLeadingSlash } from 'history/PathUtils';

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
              <RadioGroup aria-label="position" name="position" row>
                <Styled.RadiboButtonContainer>
                  <FormControlLabel
                    value="학생"
                    control={<Radio color="primary" />}
                    label="학생"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="취준생"
                    control={<Radio color="primary" />}
                    label="취준생"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="직장인"
                    control={<Radio color="primary" />}
                    label="직장인"
                    labelPlacement="end"
                  />
                </Styled.RadiboButtonContainer>
              </RadioGroup>
            </Styled.SelectWorkContainer>
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

export default ApplyStep1;
