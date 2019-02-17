import React, { PureComponent, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import * as Styled from './styled';

interface Props {}
interface State {
  textField: string;
}

class ApplyStep2 extends PureComponent<Props, State> {
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
          <Styled.NumberText>02</Styled.NumberText>
          <Styled.TitleArea>
            개발-디자인 협업 관련 경험이 있으신가요?
          </Styled.TitleArea>
        </Styled.LeftContiainer>
        <Styled.RightContainer>
          <Styled.TextinputContainer>
            <Styled.textarea />
            <Styled.btnSave>임시저장</Styled.btnSave>
          </Styled.TextinputContainer>
        </Styled.RightContainer>
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

export default ApplyStep2;
